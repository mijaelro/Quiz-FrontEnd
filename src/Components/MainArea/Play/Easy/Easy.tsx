import axios from "axios";
import { useState } from "react";
import { QuestionsDownloadedAction } from "../../../../Redux/QuestionsState";
import store from "../../../../Redux/store";
import globals from "../../../../Services/globals";
import EmptyView from "../../../SharedArea/EmptyView/EmptyView";
import {shuffleArray} from '../../../Utils/ShuffleArrayUtil'
import QuestionCard from "../../QuestionCard/QuestionsCard";
import QuestionModel from "../../../../Models/QuestionModel";
import "./Easy.css";

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
};

  const TOTAL_QUESTIONS = 25; 

function Easy(): JSX.Element {
    const[questions,setQuestions] = useState(store.getState().questionsState.questions);
    const [loading, setLoading] = useState(false);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);
    const[finalScore,setFinalScore] = useState(0);

    const fetchQuestionsEasy = async()=>{
        setLoading(true);
        setGameOver(false);
            const response = await axios.get<QuestionModel[]>(globals.urls.questions+"q/e");
            store.dispatch(QuestionsDownloadedAction(response.data));
            setQuestions(shuffleArray(response.data));
            setScore(0);
            setFinalScore(0);
            setUserAnswers([]);
            setNumber(0);
            setLoading(false);
    };

  const checkAnswer=(e:any)=>{
      if (!gameOver) {
          const answer = e.currentTarget.value;
          const correct = questions[number]?.answer === answer;
          if (correct) setScore((prev) => prev + 1);
          
          const answerObject = {
            question: questions[number]?.question,
            answer,
            correct,
            correctAnswer: questions[number]?.answer,
          };
          setUserAnswers((prev) => [...prev, answerObject]);
        }
  };


  const nextQuestion=()=>{
  const nextQ = number+1;

      if (nextQ === TOTAL_QUESTIONS) {
        setGameOver(true);
        setFinalScore(score);

      } else {
        setNumber(nextQ);
      }
  }


    return (
        <div className ="Easy">
          <div className="Wrapper">
            {gameOver &&finalScore===0 ? (
             <>
             <h1>FULLSTACK QUIZ</h1>
             <span id="span1">(Easy-25)</span>
             <span id="span11">click play to get started!</span>
              <button className='myButton start' onClick={fetchQuestionsEasy}>
              ▶
              </button>
             </>
            ) : null}
      
        {gameOver&&finalScore!==0&&(
        <>
        <div className="bluring"><span id="finalScore">Your final is score is <br /><span id="reddish">{score}/25</span>  <br /> Try again!</span></div>
          <button className='myButton start' onClick={fetchQuestionsEasy}>
           retry
          </button>
        </>
        )}

        {loading&&
          <div>
            <EmptyView msg="Loading questions.."/>
          </div>
        }
        
        {!gameOver ? <p className='score'>Score: {score}</p> : null}
        
        {!loading && !gameOver && (

                    <QuestionCard 
                      question={questions[number]?.question}
                      userAnswer={userAnswers ? userAnswers[number] : undefined}
                      questionNr={number+1} 
                      totalQuestions={TOTAL_QUESTIONS}
                      answers={shuffleArray(questions[number]?.options)}
                      callback={checkAnswer}/>
                     )}    

          {!gameOver && !loading && userAnswers.length === number +1 && number+1 !== TOTAL_QUESTIONS  ? (
            <button className='next' onClick={nextQuestion}>
              Next Question
            </button>
          ) :  !gameOver && !loading && number+1 == TOTAL_QUESTIONS 
          ? ( <button className='next' onClick={nextQuestion}>
                  Finish
              </button>
            ):null
          } 
      </div>
    </div>
    );
}

export default Easy;

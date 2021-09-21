import axios from "axios";
import { useState } from "react";
import QuestionModel from "../../../../Models/QuestionModel";
import { QuestionsDownloadedAction } from "../../../../Redux/QuestionsState";
import store from "../../../../Redux/store";
import globals from "../../../../Services/globals";
import EmptyView from "../../../SharedArea/EmptyView/EmptyView";
import { shuffleArray } from "../../../Utils/ShuffleArrayUtil";
import QuestionCard from "../../QuestionCard/QuestionsCard";
import "./Medium.css";

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
  };

  const TOTAL_QUESTIONS = 60; 

function Medium(): JSX.Element {
    const[questions,setQuestions] = useState(store.getState().questionsState.questions);
    const [loading, setLoading] = useState(false);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);
    const[finalScore,setFinalScore] = useState(0);
    
    const fetchQuestionsMedium = async()=>{
        setLoading(true);
        setGameOver(false);
            const response = await axios.get<QuestionModel[]>(globals.urls.questions+"q/m");
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
              <span id="span2">(Medium-60)</span>
              <span id="span11">click play to get started!</span>
                <button className='myButton start' onClick={fetchQuestionsMedium}>
                ▶
                </button>
              </>
              ) : null}

            {gameOver&&finalScore!==0&&(
                <>
                  <div className="bluring"><span id="finalScore">Your final is score is <br /><span id="reddish">{score}/60</span>  <br /> Try again!</span></div>
                  <button className='myButton start' onClick={fetchQuestionsMedium}>
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


export default Medium;

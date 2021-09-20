import axios from "axios";
import { useState } from "react";
import QuestionModel from "../../../../Models/QuestionModel";
import { QuestionsDownloadedAction } from "../../../../Redux/QuestionsState";
import store from "../../../../Redux/store";
import globals from "../../../../Services/globals";
import { shuffleArray } from "../../../Utils/ShuffleArrayUtil";
import QuestionCard from "../../QuestionCard/QuestionsCard";
import "./Hard.css";

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
  };

  const TOTAL_QUESTIONS = 100; 

function Hard(): JSX.Element {
    const[questions,setQuestions] = useState(store.getState().questionsState.questions);
    const[count,setCount]= useState(store.getState().questionsState.questions.length);
    const [loading, setLoading] = useState(false);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);
    const[user,setUser]= useState(store.getState().authState.client);
    const[finalScore,setFinalScore] = useState(user?.scores);
    const[userHighestScore,setUserHighestScore] = useState(user?.highestScore);
    const[levelHighestScores,setLevelHighestScores]=useState([]);
    const fetchQuestionsEasy = async()=>{
        setLoading(true);
        setGameOver(false);
            const response = await axios.get<QuestionModel[]>(globals.urls.questions+"q/h");
            store.dispatch(QuestionsDownloadedAction(response.data));
            setQuestions(shuffleArray(response.data));
            setScore(0);
            setUserAnswers([]);
            setNumber(0);
            setLoading(false);
            // notify.success(SccMsg.DOWNLOADED_TODOS);
            // console.log(response.data);
            // return response.data;
        // }else{
            // return alert("error")
            // re/turn 0; 
            // };
        // };
    };

const checkAnswer=(e:any)=>{
    if (!gameOver) {
        // User's answer
        const answer = e.currentTarget.value;
        // Check answer against correct answer
        const correct = questions[number]?.answer === answer;
        // Add score if answer is correct
        if (correct) setScore((prev) => prev + 1);
        // Save the answer in the array for user answers
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
// Move on to the next question if not the last question
const nextQ = number+1;

if (nextQ === TOTAL_QUESTIONS) {
  setGameOver(true);
  //check if it works and do a function to get the array ordered by highest and display the top 3 in eacch level
  levelHighestScores.push(score);
  //check if this works
  finalScore.push(score);
  //check if this works
  score>userHighestScore&&setUserHighestScore(score);
  
} else {
  setNumber(nextQ);
}
}

// useEffect(() => {
    // if(!user&&history.push("/login"))
    // try{
    //     fetchQuestionsEasy();

    // }
    // catch(err){
    //     alert(err);

    // }
//     const unsubscribe = store.subscribe(() => {
//         setQuestions(store.getState().questionsState.questions);
//     })
//     return unsubscribe; 
// })

    return (
        <div className ="Easy">
      <div className="Wrapper">
        <h1>FULLSTACK QUIZ </h1>
        <span id="span1">(Hard)</span>
        <div></div>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className='myButton start' onClick={fetchQuestionsEasy}>
            ▶
          </button>
        ) : null}
        {!gameOver ? <p className='score'>Score: {score}</p> : null}
        {loading ? <p>Loading Questions...</p> : null}
        {!loading && !gameOver && (

                    <QuestionCard 
                            question={questions[number]?.question}
                            userAnswer={userAnswers ? userAnswers[number] : undefined}
                            questionNr={number+1} 
                            totalQuestions={TOTAL_QUESTIONS}
                            answers={shuffleArray(questions[number]?.options)}
                            callback={checkAnswer}/>
               
                        
                        
               
            
                     )}      
         
            {!gameOver && !loading && userAnswers.length === number +1 && number !== TOTAL_QUESTIONS  ? (
          <button className='next' onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </div>
    </div>
    );
}


export default Hard;

import { useState } from "react";
import QuestionModel from "../../../Models/QuestionModel";
import { Wrapper, ButtonWrapper }  from "./QuestionsCard.styles";
import {AnswerObject} from '../Play/Easy/Easy'
import {shuffleArray} from '../../Utils/ShuffleArrayUtil'

interface QuestionProps {
question:string;
callback:(e: React.MouseEvent<HTMLButtonElement>) => void;
userAnswer: AnswerObject | undefined;
questionNr: number;
totalQuestions: number;
answers:string[],

}
const QuestionCard = (props:QuestionProps): JSX.Element =>(
    
        <Wrapper>
        <p className="number">
                Question: {props.questionNr}/{props.totalQuestions}
            </p>

            <p>{ props.question }</p>
            <div>
                 {props.answers?.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={props.userAnswer?.correctAnswer === answer}
          userClicked={props.userAnswer?.answer === answer}
        >
                 <button disabled={props.userAnswer ? true : false} value={answer} onClick={props.callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
 ))}
 
            </div>
        </Wrapper>
    );

export default QuestionCard;

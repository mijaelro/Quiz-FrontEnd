import QuestionModel from "../Models/QuestionModel";

export class QuestionsState {
    public questions: QuestionModel[] = [];
};

export enum QuestionsActionType {
    QuestionsDownloaded= "QuestionsDownloaded",
    QuestionAdded = "QuestionAdded",
    QuestionUpdated = "QuestionUpdated",
    QuestionDeleted = "QuestionDeleted",
    // QuestionsCleared = "ExpensesCleared"
};

export interface QuestionAction {
    type: QuestionsActionType;
    payload?: any;
};

export function QuestionsDownloadedAction(questions: QuestionModel[]): QuestionAction {
    return { type: QuestionsActionType.QuestionsDownloaded, payload: questions };
};

export function QuestionAddedAction(question: QuestionModel): QuestionAction {
    return { type: QuestionsActionType.QuestionAdded, payload: question };
};

export function QuestionUpdatedAction(question: QuestionModel): QuestionAction {
    return { type: QuestionsActionType.QuestionUpdated, payload: question };
};

export function QuestionDeletedAction(id:number): QuestionAction {
    return { type: QuestionsActionType.QuestionDeleted, payload: id };
};

// export function ExpensesClearedAction():ExpenseAction{
//     return {type:ExpensesActionType.ExpensesCleared}
// }

export function questionsReducer(currentState: QuestionsState = new QuestionsState(),action:QuestionAction): QuestionsState{
    
    const newState = {...currentState}; 
    
    switch (action.type) {
        case QuestionsActionType.QuestionsDownloaded:
            newState.questions = action.payload;
            break;
        case QuestionsActionType.QuestionAdded:
            newState.questions.push(action.payload);
            break;

        case QuestionsActionType.QuestionUpdated:

            const idx = newState.questions.findIndex(c => c.id === action.payload.id);
            newState.questions[idx] = action.payload;
            break;

        case QuestionsActionType.QuestionDeleted:
            newState.questions = newState.questions.filter(c=>c.id !== action.payload);
            break;
            
        // case ExpensesActionType.ExpensesCleared:
        //         newState.expenses = newState.expenses=[];
        //         break;
    };

    return newState;
};
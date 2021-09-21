import { combineReducers, createStore } from "redux";
import { questionsReducer } from "./QuestionsState";


const reducers = combineReducers({

    questionsState: questionsReducer,
   
 });
const store = createStore(reducers);


export default store;

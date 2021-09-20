import { combineReducers, createStore } from "redux";
import { authReducer } from "./AuthState";
import { questionsReducer } from "./QuestionsState";


const reducers = combineReducers({

  
    questionsState: questionsReducer,
    authState:authReducer
   
 });
const store = createStore(reducers);


export default store;

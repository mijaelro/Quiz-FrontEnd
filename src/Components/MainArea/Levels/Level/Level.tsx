import {  useHistory } from "react-router-dom";
import "./Level.css";

function Level(): JSX.Element {

    const history = useHistory();
    return (
        <div className="Level">
			<div className="flex-container">
                <div className="flex-item"> <button className="myButton" onClick={()=>history.push("/easy")}>Easy</button></div>
                <div className="flex-item"><button className="myButton2" onClick={()=>history.push("/medium")}>Medium</button></div>
                <div className="flex-item">  <button className="myButton3" onClick={()=>history.push("/hard")}>Hard</button> </div>
            </div>

        </div>
    );
}

export default Level;

import { useHistory } from "react-router";
import "./Home.css";

function Home(): JSX.Element {

  const history= useHistory();

    return (
        <div className="Home">
         
          <h1 className="responsive-headline">Mi-Quizz</h1>
         
            <div className="infoo">            
                <h3>This is a quizz app for junior Java fullstack developers to get ready for Jo interview questions.  </h3>
                <span id="click">Click bellow to start playing!</span>
            </div>
            
            <div className="infooPlay">
                <button className="myButton" onClick={()=>history.push("/level")}>Start</button>
            </div>
       
        </div>
    );
}

export default Home;

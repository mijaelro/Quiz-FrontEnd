import { useHistory } from "react-router";
import "./About.css";

function About(): JSX.Element {
    const history = useHistory();
    return ( 
        <div className="About">
			<h1 id="niceTitle">About</h1>
            <p>This page contains more than 100 questions overall  with the following categories: <br/> <span id="categ"> Java , Spring , React , Web <span/></span><br/><br/>
                just chose a level and start playing , levels are: <br/> <span id="categ"> Easy=25 questions ,Medium = 60 questions
                , Hard = 100 questions</span> <br/><br/>
                <span id="note">note:</span><span>doesn't matter which level you choose the questions get shuffled , meaning that you will get different questions in each test.</span>
              

            </p>
            <h4>If you have any ideas i invite you to send them to me in the following link</h4>
            <button className="myButton4" onClick={()=>history.push("/sendIdeas")}> Send Ideas</button>
            <h5>this page was made by <a href="https://www.linkedin.com/in/mijael-rofe-42a264180/" target="_blank" rel="noreferrer">Mijael Rofe</a></h5>
        </div>
    );
}

export default About;

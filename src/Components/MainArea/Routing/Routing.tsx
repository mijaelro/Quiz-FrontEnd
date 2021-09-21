import { Redirect, Route, Switch } from "react-router-dom";
import About from "../../SharedArea/About/About";
import Level from "../Levels/Level/Level";
import Home from "../Home/Home";
import Easy from "../Play/Easy/Easy";
import Hard from "../Play/Hard/Hard";
import Medium from "../Play/Medium/Medium";
import QuestionsLinks from "../QuestionsLinks/QuestionsLinks";
import SendIdeas from "../SendIdeas/SendIdeas";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			 <Switch>

             <Route path = '/home' component={Home} exact/>
             <Route path = '/about' component={About} exact/>
             <Route path = '/level' component={Level} exact/>
             <Route path = '/easy' component={Easy} exact/>
             <Route path = '/medium' component={Medium} exact/>
             <Route path = '/hard' component={Hard} exact/>
             <Route path = '/questions' component={QuestionsLinks} exact/>
             <Route path = '/sendIdeas' component={SendIdeas} exact/>
                
            <Redirect from='/' to='home' exact/>
            <Redirect from='' to='home' exact/>
            <Redirect from='/*' to='home' exact/>
            </Switch>
        </div>
    );
}

export default Routing;

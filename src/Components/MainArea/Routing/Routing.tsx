import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import About from "../../SharedArea/About/About";
import Level from "../Levels/Level/Level";
import Home from "../Home/Home";
import Easy from "../Play/Easy/Easy";
import Hard from "../Play/Hard/Hard";
import Medium from "../Play/Medium/Medium";

import "./Routing.css";
import QuestionsLinks from "../QuestionsLinks/QuestionsLinks";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			  {/* <HashRouter> */}
			 <Switch>

             {/* <Route path = '/customer/coupons/details/:id' component={CustomerCouponDetails} exact/> */}

             <Route path = '/home' component={Home} exact/>
             <Route path = '/about' component={About} exact/>
             <Route path = '/level' component={Level} exact/>
             <Route path = '/easy' component={Easy} exact/>
             <Route path = '/medium' component={Medium} exact/>
             <Route path = '/hard' component={Hard} exact/>
             <Route path = '/questions' component={QuestionsLinks} exact/>
                <Redirect from='/' to='home' exact/>
                <Redirect from='' to='home' exact/>
                <Redirect from='/*' to='home' exact/>
                {/* <Route  component={Page404} exact/> */}

            </Switch>
            {/* </HashRouter> */}
        </div>
    );
}

export default Routing;

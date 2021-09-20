import ParticlesBg from "particles-bg";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Footer from "../FooterArea/Footer/Footer";
import Header from "../HeaderArea/Header/Header";
import Routing from "../MainArea/Routing/Routing";

import "./Layout.css";

function Layout(): JSX.Element {
    return (
      <HashRouter>
          <section>
          <ParticlesBg type="thick" bg={true} />

              <header>
			 <Header />
             </header>
            <main>
             <Routing/>
             </main>
             <footer>
                 <Footer/>
             </footer>
             </section>
        </HashRouter>
    );
}

export default Layout;

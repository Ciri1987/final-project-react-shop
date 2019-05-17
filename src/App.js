import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

//import styles
import "./App.scss";

//components
import { Layout } from './components/Layout/Layout';
import Home from './components/Home/Home';
import { Cart } from "./components/Cart/Cart";
import Faq from './components/FAQ/Faq';
import Terms from './components/Terms/Terms';
import Contact from './components/Contact/Contact';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <AnimatedSwitch atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/faq"} component={Faq} />
            <Route exact path={"/terms"} component={Terms} />
            <Route exact path={"/cart"} component={Cart} />
            <Route exact path={"/contact"} component={Contact} />
          </AnimatedSwitch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;

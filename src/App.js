import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'


//import style
import './App.scss';

// import components
import { Layout } from './components/Layout/Layout';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Faq from './components/FAQ/Faq';
import Terms from './components/Terms/Terms';
import Contact from './components/Contact/Contact';
import Basket from './components/Basket/Basket';

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
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/home'} component={Home} />
            <Route exact path={'/product/:id'} component={Product} />
            <Route exact path={"/faq"} component={Faq} />
            <Route exact path={"/terms"} component={Terms} />
            <Route exact path={'/basket'}
              component={Basket} />
            <Route exact path={"/contact"} component={Contact} />
          </AnimatedSwitch>
        </Layout>
      </BrowserRouter>
    );
  }
}
library.add(fab)
export default App;

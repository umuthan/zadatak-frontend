import React, { Component } from 'react';

import './Assets/css/style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Pages/Home';
import Contact from './Pages/Contact';

class App extends Component {

  render(){

    return (
      <div className="container">
        <Router>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </header>

          <section>
            <Switch>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </section>

        </Router>
      </div>
    );

  }

}

export default App;

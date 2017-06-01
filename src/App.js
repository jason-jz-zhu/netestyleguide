import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Colors from './pages/Colors/Colors';
import Email from './pages/Email/Email';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import LeftNav from './components/LeftNav/LeftNav';import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Lato:300,400','Maven+Pro','Open+Sans:300,400','Roboto','Work+Sans:200']
  }
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Header />
          <div className="main-container">
            <div className="leftNav-container">
              <LeftNav/>
            </div>
            <div className="content-container">
              <Route exact path="/" component={Contact} />
              <Route exact path="/Email" component={Email} />
              <Route exact path="/Colors" component={Colors} />
              <Route path="/404" component={NotFound} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

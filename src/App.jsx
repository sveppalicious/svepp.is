import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import HttpsRedirect from 'react-https-redirect';
import FontIcon from 'material-ui/FontIcon';
import Keyboard from 'material-ui/svg-icons/hardware/keyboard';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Code from 'material-ui/svg-icons/action/code';

const style = {
  margin: 12,
};

const Home = () => (
  <HttpsRedirect>
     <MuiThemeProvider >
          <div className="pepp">
              <Header/>
            <div className="container">
              <Link to="/about">
                <RaisedButton
                  label="About"
                  secondary={true}
                  style={style}
                  icon={<AccountCircle/>}
                />
              </Link>
              <Link to="/blog">
                <RaisedButton
                  label="Blog"
                  secondary={true}
                  style={style}
                  icon={<Keyboard/>}
                />
              </Link>
              <Link to="/code">
                <RaisedButton
                  label="Code"
                  secondary={true}
                  style={style}
                  icon={<Code/>}
                />
              </Link>
            </div>
          </div>
      </MuiThemeProvider>
  </HttpsRedirect>
)

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" render={() => <h1>About</h1>}/>
      <Route path="/blog" render={() => <h1>Blog</h1>}/>
      <Route path="/code" render={() => <h1>Code</h1>}/>
    </div>
  </Router>
)

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import Resume from './components/Resume'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HttpsRedirect from 'react-https-redirect';
import Email from 'material-ui/svg-icons/communication/email';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Code from 'material-ui/svg-icons/action/code';
const json = require('./resume.json');

const style = {
  margin: 6,
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
              <a href="https://github.com/sveppalicious">
              <RaisedButton
                label="Code"
                secondary={true}
                style={style}
                icon={<Code/>}
              />
            </a>
            <a href="mailto:sverrir@svepp.is">
              <RaisedButton
                label="Contact"
                secondary={true}
                style={style}
                icon={<Email/>}
              />
            </a>
            </div>
          </div>
      </MuiThemeProvider>
  </HttpsRedirect>
)

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" render={() => <Resume jsonObj={json}></Resume>}/>
      {/* <Route path="/blog" render={() => <h1>Blog</h1>}/>
      <Route path="/code" render={() => <h1>Code</h1>}/> */}
    </div>
  </Router>
)

export default App;

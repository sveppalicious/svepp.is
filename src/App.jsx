import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import HttpsRedirect from 'react-https-redirect';
import FontIcon from 'material-ui/FontIcon';
import Keyboard from 'material-ui/svg-icons/hardware/keyboard';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Code from 'material-ui/svg-icons/action/code';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const style = {
  margin: 12,
};

class App extends Component {
  render() {
    return (
      <HttpsRedirect>
    	   <MuiThemeProvider >
              <div className="pepp">
                  <Header/>
                <div className="container">
                  <RaisedButton
                    label="About"
                    secondary={true}
                    style={style}
                    icon={<AccountCircle/>}
                  />
                  <RaisedButton
                    label="Blog"
                    secondary={true}
                    style={style}
                    icon={<Keyboard/>}
                  />
                  <RaisedButton
                    label="Code"
                    secondary={true}
                    style={style}
                    icon={<Code/>}
                  />
                </div>
              </div>
          </MuiThemeProvider>
      </HttpsRedirect>
    );
  }
}

export default App;

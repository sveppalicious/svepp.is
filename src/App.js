import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import HttpsRedirect from 'react-https-redirect';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class App extends Component {
  render() {
    return (
      <HttpsRedirect>
    	   <MuiThemeProvider muiTheme={muiTheme}>
              <div>
                <div className="pepp">
                  <Header/>
                </div>
              </div>
          </MuiThemeProvider>
      </HttpsRedirect>
    );
  }
}

export default App;

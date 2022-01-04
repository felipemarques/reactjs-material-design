import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, AppBar, Toolbar, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    flexGrow: 1
  }
}

class App extends Component {
  render() {

    const {classes} = this.props;
    console.log(classes);

    return (
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton></IconButton>
          </Toolbar>
        </AppBar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Button variant='contained' color='primary'>Primary</Button>
        <Button variant='contained'>Default</Button>
      </div>
    );
  }
}

export default withStyles(styles)(App);

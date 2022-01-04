import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {MuiThemeProvider, createTheme} from  '@material-ui/core/styles'
import red from '@material-ui/core/colors/red';

const theme = createTheme({
    palette: {
        primary: red
    }
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
, document.getElementById('root'));
registerServiceWorker();

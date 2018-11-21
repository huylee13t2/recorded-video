import React from 'react';
import ReactDOM from 'react-dom';
import {
  Main,
} from "./containers"
import * as serviceWorker from './serviceWorker';
// styles
import './index.css';
import "./assets/styles/index.scss";
import "./assets/styles/login.scss";
import "./assets/styles/register.scss";
import "./assets/styles/recorder.scss";

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

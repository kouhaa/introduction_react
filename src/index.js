import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import NoteStore, { noteReducer } from "./stores/Store";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";


ReactDOM.render(
  <React.StrictMode>
      <Provider store={NoteStore}>
          <App msg="Hello App." />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

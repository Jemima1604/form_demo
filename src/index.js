import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";

function App() {
  return(
    <Router>
      <Route exact path="/"  component={Step1}/>
      <Route path="/step2" component={Step2}/>
    </Router>
  );
}

const rootElement= document.getElementById("root");
ReactDOM.render(<App />,rootElement);
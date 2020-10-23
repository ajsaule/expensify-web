import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>  
            <Route path="/calculator" component={Calculator} />
            <Route path="/" component={Home} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Events from './components/Events';
import Streamers from './components/Streamers';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>  
            <Route path="/events" component={Events} />
            <Route path="/streamers" component={Streamers} />
            <Route path="/" component={Home} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;

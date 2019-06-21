import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimerSetup from './components/timer-setup/';
import Landing from './components/landing/';
import { BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <>
      <link rel="stylesheet" href="animate.min.css" />
      <div className="App">
        <header className="App-header">
          <Router>
            <Route path="/" exact component={Landing} />
            <Route path="/setup" exact component={TimerSetup} />
          </Router>
        </header>
      </div>
    </>
  );
}

export default App;

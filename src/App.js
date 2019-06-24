import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimerSetup from './components/timer-setup/';
import Landing from './components/landing/';
import { BrowserRouter as Router, Route} from "react-router-dom";
import TimerContext from './timer-context';

const state = {cold: 60, hot: 180};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cold: 60,
      hot: 180,
      rounds: 4,
    }
    this.onTimeChange = this.onTimeChange.bind(this);
    this.onRoundsChange = this.onRoundsChange.bind(this);
  }
  onTimeChange(event, temp, change) {
    event.stopPropagation();
    if( (temp === 'hot' && this.state.hot > 0) || (this.state.hot === 0 && change > 0) ) {
      this.setState({hot: this.state.hot + change});
    } else if( (temp === 'cold' && this.state.cold > 0) || (this.state.cold === 0 && change > 0)) {
      this.setState({cold: this.state.cold + change});
    }
  }
  onRoundsChange(change) {
    if(this.state.rounds + change <= 0) {
      return
    }
    this.setState({rounds: this.state.rounds + change});
  }
  render() {
    return (
      <>
        <link rel="stylesheet" href="animate.min.css" />
        <div className="App">
          <header className="App-header">
            <TimerContext.Provider value={{
              state: this.state,
              onTimeChange: this.onTimeChange,
              onRoundsChange: this.onRoundsChange,
            }}>
              <Router>
                <Route path="/" exact component={Landing} />
                <Route path="/setup" exact component={TimerSetup} />
              </Router>
            </TimerContext.Provider>
          </header>
        </div>
      </>
    );
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimerSetup from './components/timer-setup/';
import Landing from './components/landing/';
import Therapy from './components/therapy';
import { BrowserRouter as Router, Route} from "react-router-dom";
import TimerContext from './timer-context';
import { ActivitiesEnum } from './utilities/constants';
import GlobalStyles from './global-styles';

const state = {cold: 60, hot: 180};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cold: 60,
      hot: 180,
      rounds: 4,
      activity: ActivitiesEnum.SETUP,
    }
    this.onTimeChange = this.onTimeChange.bind(this);
    this.onRoundsChange = this.onRoundsChange.bind(this);
    this.setActivity = this.setActivity.bind(this);
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
  setActivity(newActivity) {
    this.setState({activity: newActivity});
  }
  render() {

    return (
      <>
        <link rel="stylesheet" href="animate.min.css" />
        <div className="App">
          <header className="App-header" style={GlobalStyles[`${this.state.activity}`]}>
            <TimerContext.Provider value={{
              state: this.state,
              onTimeChange: this.onTimeChange,
              onRoundsChange: this.onRoundsChange,
              setActivity: this.setActivity,
            }}>
              <Router>
                <Route path="/" exact component={Landing} />
                <Route path="/setup" exact component={TimerSetup} />
                <Route path="/therapy" exact component={Therapy} />
              </Router>
            </TimerContext.Provider>
          </header>
        </div>
      </>
    );
  }
}

export default App;

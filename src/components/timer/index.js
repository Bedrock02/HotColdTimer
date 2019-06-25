import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TimerStyles from './styles.js';
import TimerContext from '../../timer-context';
import { ActivitiesEnum } from '../../utilities/constants';
import { formatTime } from '../../utilities/helpers';
import { Link } from "react-router-dom";
import {
  faSnowflake,
  faFire,
  faStopwatch,
  faPlay,
  faChevronLeft,
  faUndoAlt,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

class Timer extends React.Component {
  static contextType = TimerContext;
  constructor(props) {
    super(props);
    this.TIMER_STATES = {
      PLAYING: 'playing',
      IDLE: 'idle',
    };
    this.state = {
      totalTime: 0,
      sessionTime: 0,
      timerState: this.TIMER_STATES.IDLE,
    }

    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  componentDidMount() {
    this.context.setActivity(ActivitiesEnum.HOT_SESSION);
    const { cold, hot, rounds } = this.context.state;
    const totalTime = (cold + hot) * rounds;
    this.setState({totalTime, sessionTime: hot});
  }

  startTimer() {
    this.setState({timerState: this.TIMER_STATES.PLAYING});
  }
  pauseTimer() {
    this.setState({timerState: this.TIMER_STATES.IDLE});
  }
  resetTimer(){
    this.setState({timerState: this.TIMER_STATES.IDLE});
  }
  render() {
    const timerAction = this.state.timerState === this.TIMER_STATES.PLAYING ?
      (<FontAwesomeIcon icon={faPause} color="#ffffff" onClick={this.pauseTimer} />) :
      (<FontAwesomeIcon icon={faPlay} color="#ffffff" onClick={this.startTimer} />);
    return(
      <>
        <div style={TimerStyles.container}>
          <div style={TimerStyles.currentTemp}>
            <FontAwesomeIcon icon={faStopwatch} color="#ffffff"/>
            <p>{formatTime(this.state.sessionTime)}</p>
          </div>
          <FontAwesomeIcon style={TimerStyles.mainIcon} icon={faFire} color="#ffffff"/>
          <div style={TimerStyles.totalTime}>
            <p>Time Left</p>
            <p>{formatTime(this.state.totalTime)}</p>
          </div>
        </div>

        <div className="timer-actions" style={TimerStyles.therapyActions}>
          <Link to='/setup/'>
            <FontAwesomeIcon icon={faChevronLeft} color="#ffffff"/>
          </Link>
          {timerAction}
          <FontAwesomeIcon icon={faUndoAlt} color="#ffffff" onClick={this.resetTimer}/>
        </div>
      </>
    );
  }
}

export default Timer;

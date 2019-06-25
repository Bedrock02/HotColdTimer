import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TimerStyles from './styles.js';
import TimerContext from '../../timer-context';
import { ActivitiesEnum, TimerStatesEnum } from '../../utilities/constants';
import { formatTime } from '../../utilities/helpers';
import { Link } from "react-router-dom";
import TinyTimer from 'tiny-timer';

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
    this.state = {
      totalTime: 0,
      sessionTime: 0,
      timerState: TimerStatesEnum.IDLE,
    }

    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.onTick = this.onTick.bind(this);
    this.onDone = this.onDone.bind(this);
  }
  componentDidMount() {
    this.timer = new TinyTimer();
    this.timer.on('tick', this.onTick);
    this.timer.on('done', this.onDone);
    this.context.setActivity(ActivitiesEnum.HOT_SESSION);
    this.setState({
      totalTime: this.context.getTotalTime(),
      sessionTime: this.context.state.hot
    });
  }
  componentWillUnmount() {
    const { timerState } = this.state;
    if(timerState === TimerStatesEnum.PLAYING) {
        this.timer.stop();
    }
    delete this.timer;
  }

  onTick() {
    const { sessionTime, totalTime } = this.state;
    if(sessionTime === 0) {
      return;
    }
    this.setState({
      sessionTime: sessionTime - 1000,
      totalTime: totalTime - 1000,
    });
  }
  onDone() {
    const { totalTime } = this.state;
    const { activity, cold, hot } = this.context.state;
    if(totalTime === 0) {
      this.setState({timerState: TimerStatesEnum.DONE});
      return
    }
    let nextSession, nextDuration;
    if(activity === ActivitiesEnum.HOT_SESSION) {
      nextSession = ActivitiesEnum.COLD_SESSION;
      nextDuration = cold;
    } else {
      nextSession = ActivitiesEnum.HOT_SESSION;
      nextDuration = hot;
    }
    this.context.setActivity(nextSession);
    this.setState({sessionTime: nextDuration});
    this.startTimer();
  }
  startTimer() {
    const { timerState, sessionTime } = this.state;
    if(timerState === TimerStatesEnum.DONE) {
      return;
    }
    this.setState({timerState: TimerStatesEnum.PLAYING});
    if(this.timer.status === 'paused') {
      this.timer.resume();
      return
    }
    this.timer.start(sessionTime);
  }
  pauseTimer() {
    this.setState({timerState: TimerStatesEnum.IDLE});
    this.timer.pause();
  }
  resetTimer(){
    const { timerState } = this.state;
    if(timerState === TimerStatesEnum.PLAYING) {
      this.timer.stop()
    }
    this.context.setActivity(ActivitiesEnum.HOT_SESSION);
    this.setState({
      timerState: TimerStatesEnum.IDLE,
      totalTime: this.context.getTotalTime(),
      sessionTime: this.context.state.hot
    });
  }
  render() {
    const { timerState, sessionTime, totalTime } = this.state;
    const { activity } = this.context.state;
    const timerAction = timerState === TimerStatesEnum.PLAYING ?
      (<FontAwesomeIcon icon={faPause} color="#ffffff" onClick={this.pauseTimer} />) :
      (<FontAwesomeIcon icon={faPlay} color="#ffffff" onClick={this.startTimer} />);
    const tempIcon = activity === ActivitiesEnum.HOT_SESSION ? faFire : faSnowflake;
    return(
      <>
        <div style={TimerStyles.container}>
          <div style={TimerStyles.currentTemp}>
            <FontAwesomeIcon icon={faStopwatch} color="#ffffff"/>
            <p>{formatTime(sessionTime)}</p>
          </div>
          <FontAwesomeIcon style={TimerStyles.mainIcon} icon={tempIcon} color="#ffffff"/>
          <div style={TimerStyles.totalTime}>
            <p>Time Left</p>
            <p>{formatTime(totalTime)}</p>
          </div>
        </div>

        <div className="timer-actions" style={TimerStyles.timerActions}>
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

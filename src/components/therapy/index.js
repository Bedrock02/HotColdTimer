import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TherapyStyles from './styles.js';
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
  faUndoAlt
} from '@fortawesome/free-solid-svg-icons';

class Therapy extends React.Component {
  static contextType = TimerContext;
  constructor(props) {
    super(props);
    this.state = {
      totalTime: 0,
      sessionTime: 0,
    }
  }
  componentDidMount() {
    this.context.setActivity(ActivitiesEnum.HOT_SESSION);
    const { cold, hot, rounds } = this.context.state;
    const totalTime = (cold + hot) * rounds;
    this.setState({totalTime, sessionTime: hot});
  }
  render() {
    return(
      <>
        <div style={TherapyStyles.container}>
          <div style={TherapyStyles.currentTemp}>
            <FontAwesomeIcon icon={faStopwatch} color="#ffffff"/>
            <p>{formatTime(this.state.sessionTime)}</p>
          </div>
          <FontAwesomeIcon style={TherapyStyles.mainIcon} icon={faFire} color="#ffffff"/>
          <div style={TherapyStyles.totalTime}>
            <p>Time Left</p>
            <p>{formatTime(this.state.totalTime)}</p>
          </div>
        </div>
        <div className="therapy-actions" style={TherapyStyles.therapyActions}>
          <Link to='/setup/'>
            <FontAwesomeIcon icon={faChevronLeft} color="#ffffff"/>
          </Link>
          <FontAwesomeIcon icon={faPlay} color="#ffffff"/>
          <FontAwesomeIcon icon={faUndoAlt} color="#ffffff"/>
        </div>
      </>
    );
  }
}

export default Therapy;

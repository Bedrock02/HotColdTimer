import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake, faFire } from '@fortawesome/free-solid-svg-icons';
import TherapyStyles from './styles.js';
import TimerContext from '../../timer-context';
import { ActivitiesEnum } from '../../utilities/constants';

class Therapy extends React.Component {
  static contextType = TimerContext;
  componentDidMount() {
    this.context.setActivity(ActivitiesEnum.HOT_SESSION);
  }
  render() {
    return(
      <>
        <div className="container" style={TherapyStyles.container}>
          <FontAwesomeIcon icon={faFire} color="#ffffff"/>
        </div>
      </>
    );
  }
}

export default Therapy;

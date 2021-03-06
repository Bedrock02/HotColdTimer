import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake, faFire, faPlus } from '@fortawesome/free-solid-svg-icons'
import LandingStyles from './styles';
import { Link } from "react-router-dom";
import { ActivitiesEnum } from '../../utilities/constants';
import TimerContext from '../../timer-context';

class Landing extends React.Component {
  static contextType = TimerContext;
  render() {
    return(
      <Link to='/setup/' style={LandingStyles.container}>
        <div style={LandingStyles.iconContainer}>
          <div>
            <FontAwesomeIcon style={LandingStyles.fire} icon={faFire} color="#c1271d"/>
          </div>
          <div>
            <FontAwesomeIcon icon={faPlus} color="#ffffff"/>
          </div>
          <div>
            <FontAwesomeIcon style={LandingStyles.snowflake} icon={faSnowflake} color="#1bb1ef"/>
          </div>
        </div>
        <h1>Timer</h1>
      </Link>
    );
  }
}

export default Landing;

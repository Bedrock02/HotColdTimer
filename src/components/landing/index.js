import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake, faFire, faPlus } from '@fortawesome/free-solid-svg-icons'
import LandingStyles from './styles';
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return(
      <div onClick={() => { window.location.href = '/setup/';}}>
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
        <h1>Therapy</h1>
      </div>
    );
  }
}

export default Landing;

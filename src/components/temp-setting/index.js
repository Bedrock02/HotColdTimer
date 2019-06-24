import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare, faSnowflake, faFire } from '@fortawesome/free-solid-svg-icons'
import TempSettingStyles from './styles';
import TimerContext from '../../timer-context';

class TempSetting extends React.Component {
  static contextType = TimerContext;
  constructor(props) {
    super(props);
    this.state = {temp: props.temp};
  }
  formatTime(value) {
    const minutes = Math.floor(value/60);
    const seconds = value % 60;
    const minutes_format = minutes > 0 ? `${minutes}`: '00';
    let seconds_format;
    if (seconds > 0) {
      seconds_format = seconds >= 10 ? seconds : `0${seconds}`;
    } else {
      seconds_format = '00'
    }
    return `${minutes_format}:${seconds_format}`;
  }

  render() {
    const tempIcon = this.state.temp === 'hot' ?
    (<FontAwesomeIcon icon={faFire} color="#c1271d" style={TempSettingStyles.icon}/>) :
    (<FontAwesomeIcon icon={faSnowflake} color="#1bb1ef" style={TempSettingStyles.icon}/>);

    return(
      <div className="container" style={TempSettingStyles.container}>
        {tempIcon}
        <div className="options" style={TempSettingStyles.options}>
          <div>
            <FontAwesomeIcon icon={faMinusSquare} onClick={(e) => {this.context.onTimeChange(e, this.state.temp, -5)}}/>
          </div>
          <h2>{this.formatTime(this.context.state[this.state.temp])}</h2>
          <div>
            <FontAwesomeIcon icon={faPlusSquare} onClick={(e) => {this.context.onTimeChange(e, this.state.temp, 5)}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default TempSetting;

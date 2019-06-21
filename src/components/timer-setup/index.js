import React from 'react'
import moment from 'moment'
import 'moment-timer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare, faSnowflake, faFire, faPlay } from '@fortawesome/free-solid-svg-icons'
import TimerSetupStyles from './styles';

class TimerSetup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cold: 60,
      hot: 180,
    }
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
  handleChange(event, temp, change) {
    event.stopPropagation();
    if( (temp === 'hot' && this.state.hot > 0) || (this.state.hot === 0 && change > 0) ) {
      this.setState({hot: this.state.hot + change});
    } else if( (temp === 'cold' && this.state.cold > 0) || (this.state.cold === 0 && change > 0)) {
      this.setState({cold: this.state.cold + change});
    }
  }
  render() {
    return(
      <>
        <div className='temp-setting' style={TimerSetupStyles.container}>
          <FontAwesomeIcon icon={faFire} color="#c1271d" style={TimerSetupStyles.icon}/>
          <div className="temp-options" style={TimerSetupStyles.settings}>
            <div>
              <FontAwesomeIcon icon={faMinusSquare} onClick={(e) => {this.handleChange(e, 'hot', -5)}}/>
            </div>
            <h2>{this.formatTime(this.state.hot)}</h2>
            <div>
              <FontAwesomeIcon icon={faPlusSquare} onClick={(e) => {this.handleChange(e, 'hot', 5)}}/>
            </div>
          </div>
        </div>

        <div className='temp-setting' style={TimerSetupStyles.container}>
          <FontAwesomeIcon icon={faSnowflake} color="#1bb1ef" style={TimerSetupStyles.icon}/>
          <div className="temp-options" style={TimerSetupStyles.settings}>
            <div>
              <FontAwesomeIcon icon={faMinusSquare} onClick={(e) => {this.handleChange(e, 'cold', -5)}}/>
            </div>
            <h2>{this.formatTime(this.state.cold)}</h2>
            <div>
              <FontAwesomeIcon icon={faPlusSquare} onClick={(e) => {this.handleChange(e, 'cold', 5)}}/>
            </div>
          </div>
        </div>

        <button style={TimerSetupStyles.button}>
          <span>START</span>
        </button>
      </>
    );
  }
}

export default TimerSetup;

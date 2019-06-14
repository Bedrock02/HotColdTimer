import React from 'react'
import moment from 'moment'
import 'moment-timer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons'

const tempContainerStyles = {
  width: '75%'
};
const tempSettingStyles = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-around',
};
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
  render() {
    return(
      <>
      <div className='temp-setting' style={tempContainerStyles}>
        <h3>Hot Time</h3>
        <div class="temp-options" style={tempSettingStyles}>
          <FontAwesomeIcon icon={faMinusSquare} />
          <h2>{this.formatTime(this.state.hot)}</h2>
          <FontAwesomeIcon icon={faPlusSquare} />
        </div>
      </div>
      <div className='temp-setting' style={tempContainerStyles}>
        <h3>Cold Time</h3>
        <div class="temp-options" style={tempSettingStyles}>
          <FontAwesomeIcon icon={faMinusSquare} />
          <h2>{this.formatTime(this.state.cold)}</h2>
          <FontAwesomeIcon icon={faPlusSquare} />
        </div>
      </div>
      </>
    );
  }
}

export default TimerSetup;

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare, faSnowflake, faFire } from '@fortawesome/free-solid-svg-icons'
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
    const { componentStyles } = this.props;
    const tempIcon = this.state.temp === 'hot' ?
    (<FontAwesomeIcon icon={faFire} color="#c1271d" style={componentStyles.icon}/>) :
    (<FontAwesomeIcon icon={faSnowflake} color="#1bb1ef" style={componentStyles.icon}/>);

    return(
      <div className="container" style={componentStyles.container}>
        {tempIcon}
        <div className="options" style={componentStyles.options}>
          <div className="button-icon" style={componentStyles.buttonIcon}>
            <FontAwesomeIcon icon={faMinusSquare} onClick={(e) => {this.context.onTimeChange(e, this.state.temp, -5)}}/>
          </div>
          <h2 className="data-item" style={componentStyles.dataItem}>{this.formatTime(this.context.state[this.state.temp])}</h2>
          <div className="button-icon" style={componentStyles.buttonIcon}>
            <FontAwesomeIcon icon={faPlusSquare} onClick={(e) => {this.context.onTimeChange(e, this.state.temp, 5)}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default TempSetting;

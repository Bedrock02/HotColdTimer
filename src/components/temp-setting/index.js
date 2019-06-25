import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare, faSnowflake, faFire } from '@fortawesome/free-solid-svg-icons'
import TimerContext from '../../timer-context';
import { formatTime } from '../../utilities/helpers';
import { durationChange } from '../../utilities/constants';

class TempSetting extends React.Component {
  static contextType = TimerContext;
  constructor(props) {
    super(props);
    this.state = {temp: props.temp};
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
            <FontAwesomeIcon icon={faMinusSquare} onClick={(e) => {this.context.onTimeChange(e, this.state.temp, -durationChange)}}/>
          </div>
          <h2 className="data-item" style={componentStyles.dataItem}>{formatTime(this.context.state[this.state.temp])}</h2>
          <div className="button-icon" style={componentStyles.buttonIcon}>
            <FontAwesomeIcon icon={faPlusSquare} onClick={(e) => {this.context.onTimeChange(e, this.state.temp, durationChange)}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default TempSetting;

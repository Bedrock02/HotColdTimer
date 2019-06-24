import React from 'react'
import TimerSetupStyles from './styles';
import TempSetting from '../temp-setting/';
import RoundsSetting from '../rounds-setting/';
class TimerSetup extends React.Component {
  handleStart() {
    window.location.href = '/therapy/';
  }
  render() {
    return(
      <>
        <div style={TimerSetupStyles.settings}>
          <TempSetting temp='hot' componentStyles={TimerSetupStyles}/>
          <TempSetting temp='cold' componentStyles={TimerSetupStyles}/>
          <RoundsSetting componentStyles={TimerSetupStyles}/>
        </div>
        <button style={TimerSetupStyles.button} onClick={this.handleStart}>
          <span>START</span>
        </button>
      </>
    );
  }
}

export default TimerSetup;

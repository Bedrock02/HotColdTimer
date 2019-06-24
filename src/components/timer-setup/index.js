import React from 'react'
import TimerSetupStyles from './styles';
import TempSetting from '../temp-setting/';
import RoundsSetting from '../rounds-setting/';
class TimerSetup extends React.Component {
  render() {
    return(
      <>
        <div style={TimerSetupStyles.settings}>
          <TempSetting temp='hot' />
          <TempSetting temp='cold' />
          <RoundsSetting />
        </div>
        <button style={TimerSetupStyles.button}>
          <span>START</span>
        </button>
      </>
    );
  }
}

export default TimerSetup;

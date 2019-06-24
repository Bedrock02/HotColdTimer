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
        <div style={TimerSetupStyles.button}>
          <button>
            <span>START</span>
          </button>
        </div>
      </>
    );
  }
}

export default TimerSetup;

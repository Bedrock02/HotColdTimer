import React from 'react'
import TimerSetupStyles from './styles';
import TempSetting from '../temp-setting/';

class TimerSetup extends React.Component {
  render() {
    return(
      <>
        <TempSetting temp='hot' />
        <TempSetting temp='cold' />
        <button style={TimerSetupStyles.button}>
          <span>START</span>
        </button>
      </>
    );
  }
}

export default TimerSetup;

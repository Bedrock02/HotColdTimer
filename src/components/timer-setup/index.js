import React from 'react'
import TimerSetupStyles from './styles';
import TempSetting from '../temp-setting/';
import RoundsSetting from '../rounds-setting/';
import TimerContext from '../../timer-context';
import { ActivitiesEnum } from '../../utilities/constants';
import { Link } from "react-router-dom";

class TimerSetup extends React.Component {
  static contextType = TimerContext;
  componentDidMount() {
    this.context.setActivity(ActivitiesEnum.SETUP);
  }

  render() {
    return(
      <>
        <div style={TimerSetupStyles.settings}>
          <TempSetting temp='hot' componentStyles={TimerSetupStyles}/>
          <TempSetting temp='cold' componentStyles={TimerSetupStyles}/>
          <RoundsSetting componentStyles={TimerSetupStyles}/>
        </div>
        <Link to='/therapy/' style={TimerSetupStyles.button}>
          <p style={TimerSetupStyles.buttonText}>START</p>
        </Link>
      </>
    );
  }
}

export default TimerSetup;

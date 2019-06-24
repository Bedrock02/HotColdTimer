import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare, faSyncAlt} from '@fortawesome/free-solid-svg-icons'
import TimerContext from '../../timer-context';
import RoundsSettingStyles from './styles';

class RoundsSetting extends React.Component {
    static contextType = TimerContext;
    subtractRound() {
      this.context.onRoundsChange(-1);
    }
    addRound() {
      this.context.onRoundsChange(1);
    }
    render() {
      return(
        <div className="container">
          <FontAwesomeIcon icon={faSyncAlt} color="#ffffff" style={RoundsSettingStyles.icon}/>
          <div className="options" style={RoundsSettingStyles.options}>
            <div>
              <FontAwesomeIcon icon={faMinusSquare} onClick={this.subtractRound}/>
            </div>
            <h2>{this.context.state.rounds}</h2>
            <div>
              <FontAwesomeIcon icon={faPlusSquare} onClick={this.addRound}/>
            </div>
          </div>
        </div>
      );
    }
}
export default RoundsSetting;

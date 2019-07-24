import React from 'react';
import * as timerStates from '../timerStates';

const leftPad = (val) => {
    if (val < 10) return `0${val}`;

    return `${val}`;
}

const TimerDisplay = (props) => (
    <div>
        <div className="row center-block">
        {
            (props.timerState === timerStates.COMPLETE)
            && <iframe className="center-block responsive-width" height="315" src="https://image.shutterstock.com/image-photo/hand-writing-times-up-movement-260nw-795416923.jpg"></iframe>
        }
        </div>

        <div className="row">
        <h2 className="text-center">
        {`${leftPad(props.currentTime.get('hours'))}:${leftPad(props.currentTime.get('minutes'))}:${leftPad(props.currentTime.get('seconds'))}`}
        </h2>
        </div>
    </div>
)

export default TimerDisplay;
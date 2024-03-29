import React, { Component } from 'react';
import * as timerStates from '../timerStates';

class TimerButton extends Component {
    constructor() {
        super();

        this.getButton = this.getButton.bind(this);
    }

    getButton() {
        if(this.props.timerState === timerStates.NOT_SET)
        return (<button className="btn btn-success center-block" onClick={this.props.startTimer}>START</button>);

        if(this.props.timerState === timerStates.RUNNING)
        return (<button className="btn btn-danger center-block" onClick={this.props.stopTimer}>Interrupt</button>);

        if(this.props.timerState === timerStates.COMPLETE)
        return (<button className="btn btn-info center-block" onClick={this.props.stopTimer}>STOP</button>)
    }

    render() {
        return (
            <div className="row">
            {this.getButton()}
            </div>
        )
    }
}

export default TimerButton;
import React, { Component } from 'react'
import Button from './Button'
import Timer from './Timer'

export class TimerWrapper extends Component {

    constructor(props) {
        super(props)
        this.state = {
            timerLeft: null,
            timer: null,
        }
    }

    startTimer = timerLeft => {
        clearInterval(this.state.timer)
        let timer = setInterval(() => {
            let timerLeft = this.state.timerLeft-1
            if(timerLeft == 0) clearInterval(timer)
        }, 1000)

        return this.setState({
            timerLeft: timerLeft,
            timer: timer
        })
    }



    render() {
        return (
            <div className="container">
                <h2>Timer</h2>
                <div className="btn-group">
                    <Button timer="5" startTimer={this.startTimer} />
                    <Button timer="10" startTimer={this.startTimer} />
                    <Button timer="15" startTimer={this.startTimer} />
                </div>
                <Timer timerLeft={this.state.timerLeft}/>
            </div>
        )
    }
}

export default TimerWrapper

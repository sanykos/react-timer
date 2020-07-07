import React, { Component } from 'react'

export class Timer extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        if(this.props.timerLeft == null || this.props.timerLeft == 0)
            return <div></div>

        return (
        <h1>Time: {this.props.timerLeft}</h1>
        )
    }
}

export default Timer

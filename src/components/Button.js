import React, { Component } from 'react'

export class Button extends Component {

    constructor(props) {
        super(props)
    }

    startTimer(event) {
       // console.log('dsdsds')
         return this.props.startTimer(this.props.time)
    }


    render() {
        return (
        <button className="btn-default btn"
            onClick={this.startTimer.bind(this)}
        >
            {this.props.time} seconds</button>
        )
    }
}

export default Button

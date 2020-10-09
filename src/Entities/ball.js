import React, { Component } from "react";
import Constants from "../Constants";

export default class Ball extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const width = this.props.body.bounds.max.x - this.props.body.bounds.min.x;
        const height = this.props.body.bounds.max.y - this.props.body.bounds.min.y;
        const x = Constants.MAX_WIDTH / 2;
        const y = this.props.body.position.y - height / 2;

        return ( <
            div style = {
                { position: "absolute", width: width, height: height, backgroundColor: "red", left: x, top: y }
            }
            />
            // <Animated.Image
        );
    }
}
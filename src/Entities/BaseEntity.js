import React, { PureComponent } from "react";

class BasenEntity extends PureComponent {
    constructor(props) {
        super(props);

        //this.animatedValue = new Animated.Value(this.props.body.velocity.y);
    }

    render() {
        const width = this.props.body.bounds.max.x - this.props.body.bounds.min.x;
        const height = this.props.body.bounds.max.y - this.props.body.bounds.min.y;
        const x = this.props.body.position.x - width / 2;
        const y = this.props.body.position.y - height / 2;
        return (
            renderObject()
        );
    }

    renderObject() {
        return <div style = {
            { position: "absolute", width: width, height: height, backgroundColor: "red", left: x, top: y }
        }
        />;
    }
}
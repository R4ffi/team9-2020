import React, { PureComponent } from "react";

class BasenEntity extends PureComponent {
    constructor(size) {
        this.props.size;
    }
    render() {
        const x = this.props.x - this.props.size / 2;
        const y = this.props.y - this.props.size / 2;
        return ( <
            div style = {
                { position: "absolute", width: this.props.size, height: this.props.size, backgroundColor: "red", left: x, top: y }
            }
            />
        );
    }

}
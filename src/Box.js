import React, { Component } from 'react';

class Box extends Component {
    render(){
        let boxStyle = {
            backgroundColor: this.props.bgc,
            width: `${this.props.width}px`,
            height: `${this.props.height}px`
    }
        return (
            <div>
                {/* <div className="Box"
                style={{
                backgroundColor: this.props.bgc,
                width: `${this.props.width}px`,
                height: `${this.props.height}px`
                }}></div> */}
                <div className="Box"
                style={boxStyle}></div> 
                <button onClick={this.props.removeBox}>X</button>
            </div>
        )
    }
}
export default Box;


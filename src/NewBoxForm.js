import React, { Component } from "react";
import uuid from "uuid/v4";

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: "",
            height: "",
            bgc: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const newBox = {...this.state, id: uuid()}
        this.props.createBox(newBox);
        this.setState({width: "", height: "", bgc: ""})
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="width">Width:</label>
                    <input
                        type="number"
                        id="width"
                        name="width"
                        value={this.state.width}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor="height">height:</label>
                    <input
                        type="number"
                        name="height"
                        id="height"
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor="color">color:</label>
                    <input
                        type="text"
                        name="bgc"
                        id="color"
                        value={this.state.bgc}
                        onChange={this.handleChange}
                    />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default NewBoxForm;

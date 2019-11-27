import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        };
        this.create = this.create.bind(this);
    }
    create(newBox) {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        });
    }
    remove(id) {
        this.setState({
            boxes: this.state.boxes.filter(i => i.id !== id)
        });
    }
    render() {
        // loop thru boxes array
        const boxes = this.state.boxes.map(el => (
            <Box
                key={el.id}
                id={el.id}
                width={el.width}
                height={el.height}
                bgc={el.bgc}
                removeBox={() => this.remove(el.id)}
            />
        ));
        return (
            <div>
                <NewBoxForm createBox={this.create} />
                {boxes}
            </div>
        );
    }
}
export default BoxList;

import React, { Component } from "react";
import Nav from "./Nav";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import jsonData from "./data.json";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // products: jsonData,
            // total: 0, // Initialize total here or fetch it from somewhere
            // lightboxItem: null, // Initialize lightboxItem here or fetch it from somewhere
        };
    }

    render() {
        // const { data, total, lightboxItem } = this.state; // Extract data, total, and lightboxItem from the state
        const totalFromHome = this.props.total;
        return (
            <div className="App text-secondary">
                <Nav data={totalFromHome} />
            </div>
        );
    }
}

export default App;

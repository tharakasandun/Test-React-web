import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";

export default class Routes extends Component {
    render() {
        return (
            <Route>
                <Route path="/home" component={HomePage} />
            </Route>
        )
    }
}

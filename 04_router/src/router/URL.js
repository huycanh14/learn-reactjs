import React, { Component } from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
import Home from "../components/Home"
import About from "../components/About"
class URL extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                
            </Switch>
        );
    }
}

export default URL;
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Blog from "./components/Blog";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Example from "./components/Example";

export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/blog">blog</Link>
                        <Route path="/" Component={Example} />
                        <Route path="/" Component={Blog} />
                    </div>
                </Router>

                <Blog />
            </div>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Index />, document.getElementById("example"));
}

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Examplee from "./components/Example";
import Blog from "./components/Blog";

export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/blog">Blog</Link>
                        <Route path="/" exact component={Examplee} />
                        <Route path="/blog" exact component={Blog} />
                        <Route path="/blog" exact component={Blog} />
                        <Route path="/blog/:id" exact render={} />
                    </div>
                </Router>
            </div>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Index />, document.getElementById("example"));
}

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Add from "./Add";
import Listing from "./Listing";


export default class Index extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <div className="row">
                            <div className="col-3">
                                <Link className="btn btn-primary" to="/categories">Listing</Link>&nbsp;
                                <Link className="btn btn-primary" to="/categories/add">Add</Link>
                            </div>
                            <div className="col-9">
                                <Route exact path='/categories' component={Listing} />
                                <Route exact path='/categories/add' component={Add} />
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Index />, document.getElementById("example"));
}

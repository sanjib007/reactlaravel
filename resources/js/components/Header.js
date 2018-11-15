import React, { Component } from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Route, Link } from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        {/*<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>*/}
                                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>

                                    </li>
                                    <li className="nav-item">
                                        {/*<a className="nav-link" href="#">About</a>*/}
                                        <Link className="nav-link" to="/about">About Us</Link>

                                    </li>

                                </ul>
                                {/*<form className="form-inline my-2 my-lg-0">*/}
                                    {/*<input className="form-control mr-sm-2" placeholder="Search">*/}
                                        {/*<button className="btn btn-outline-success my-2 my-sm-0"> Search</button>*/}
                                {/*</form>*/}
                            </div>
                        </nav>
                    </div>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' exact component={About} />
                </div>

            </BrowserRouter>

        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Header />, document.getElementById("example"));
}

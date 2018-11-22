import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">sefsefe Component</div>

                            <div className="card-body">
                                I'm an example component!
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}

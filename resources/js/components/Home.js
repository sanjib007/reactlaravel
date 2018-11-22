import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Home Component</div>

                            <div className="card-body">
                                This is Home
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Home />, document.getElementById("example"));
}

import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Add extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <input type="text" className="form-control" id="category"
                               aria-describedby="emailHelp" placeholder="Enter category"/>
                            <small id="emailHelp" className="form-text text-muted">Insert your catageory that you use this.
                            </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Category Status</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option value="">-- Select one --</option>
                            <option value="1">Active</option>
                            <option value="2">Deactive</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Add />, document.getElementById("example"));
}

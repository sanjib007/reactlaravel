import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Listing extends Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">Active</th>
                        <th scope="col">Created Date</th>
                        <th scope="col">Updated Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Category 1</td>
                        <td>Active</td>
                        <td>17-11-2018 00:00:00</td>
                        <td>17-11-2018 00:00:00</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Category 2</td>
                        <td>Active</td>
                        <td>17-11-2018 00:00:00</td>
                        <td>17-11-2018 00:00:00</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Category 3</td>
                        <td>Active</td>
                        <td>17-11-2018 00:00:00</td>
                        <td>17-11-2018 00:00:00</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Listing />, document.getElementById("example"));
}

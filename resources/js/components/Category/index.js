import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Add from "./Add";
import Listing from "./Listing";

export default class Index extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <div className="row">
                            {/* <div className="col-3">
                                <Link className="btn btn-primary" to="/categories">Listing</Link>&nbsp;
                                <Link className="btn btn-primary" to="/categories/add">Add</Link>
                            </div>
                            <div className="col-9">
                                <Route exact path='/categories' component={Listing} />
                                <Route exact path='/categories/add' component={Add} />
                            </div> */}
                            <div className="col-lg-6">
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
                                            <th>1</th>
                                            <td>category 1</td>
                                            <td>active</td>
                                            <td>01/10/2018</td>
                                            <td>01/10/2018</td>
                                        </tr>
                                        <tr>
                                            <th>2</th>
                                            <td>category 1</td>
                                            <td>active</td>
                                            <td>01/10/2018</td>
                                            <td>01/10/2018</td>
                                        </tr>
                                        <tr>
                                            <th>1</th>
                                            <td>category 1</td>
                                            <td>active</td>
                                            <td>01/10/2018</td>
                                            <td>01/10/2018</td>
                                        </tr>
                                        <tr>
                                            <th>1</th>
                                            <td>category 1</td>
                                            <td>active</td>
                                            <td>01/10/2018</td>
                                            <td>01/10/2018</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-lg-6">
                                <form method="post" name="categoryForm">
                                    <div className="form-group">
                                        <label htmlFor="category">
                                            Category
                                        </label>
                                        <input
                                            type="text"
                                            name="category"
                                            value="sdsdsf"
                                            className="form-control"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter category"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">
                                            Category Status
                                        </label>
                                        <select
                                            className="form-control"
                                            name="status"
                                            id="exampleFormControlSelect1"
                                        >
                                            <option value="">
                                                -- Select one --
                                            </option>
                                            <option value="1">Active</option>
                                            <option value="2">Deactive</option>
                                        </select>
                                    </div>
                                    <input
                                        type="submit"
                                        className="btn btn-danger"
                                        value="Register"
                                    />
                                </form>
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

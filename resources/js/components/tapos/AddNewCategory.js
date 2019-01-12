import React, { Component } from "react";

class AddNewCategory extends Component {
    render() {
        return (
            <form method="post" name="categoryForm">
                <div className="form-group">
                    <label htmlFor="category">Category</label>
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
                        <option value="">-- Select one --</option>
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
        );
    }
}

export default AddNewCategory;

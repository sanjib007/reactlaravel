import React, { Component } from "react";
import ReactDOM from "react-dom";
export default class Add extends Component {

    constructor(){
        super();
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    }

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["category"] = this.state.fields.category;
            fields["status"] = this.state.fields.status;
console.log('aaa', this.state.fields);
            this.setState({fields:fields});
            alert("Form submitted");
        }

    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["category"]) {
            formIsValid = false;
            errors["category"] = "*Please enter your category.";
        }

        if (typeof fields["category"] !== "undefined") {
            if (!fields["category"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["username"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["status"]) {
            formIsValid = false;
            errors["status"] = "*Please select your status.";
        }

        this.setState({
            errors: errors
        });
        return formIsValid;


    }



    render() {
        return (
            <div>
                <form method="post" name="categoryForm" onSubmit= {this.submituserRegistrationForm}>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <input type="text" name="category" value={this.state.fields.category} onChange={this.handleChange}
                               className="form-control" aria-describedby="emailHelp" placeholder="Enter category"/>
                        <div className="text-danger">{this.state.errors.category}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Category Status</label>
                        <select className="form-control" value={this.state.fields.status} onChange={this.handleChange}
                                name="status" id="exampleFormControlSelect1">
                            <option value="">-- Select one --</option>
                            <option value="1">Active</option>
                            <option value="2">Deactive</option>
                        </select>
                        <div className="text-danger">{this.state.errors.status}</div>
                    </div>
                    <input type="submit" className="btn btn-danger"  value="Register"/>
                </form>
            </div>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Add />, document.getElementById("example"));
}

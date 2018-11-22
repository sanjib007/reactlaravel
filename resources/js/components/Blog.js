import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Blog extends Component {
    constructor() {
        super();
        this.state = {
            blogs: []
        };
    }

    componentDidMount() {
        axios.get("/api/blog").then(response => {
            this.setState({
                blogs: response.data
            }).catch(error => {
                console.log(error);
            });
        });
    }

    render() {
        return (
            <div className="container">
                {this.state.blogs.map(blog => (
                    <li>
                        <Link to={"/blog/" + blog.id}>{blog.name}</Link>
                    </li>
                ))}
            </div>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Blog />, document.getElementById("example"));
}

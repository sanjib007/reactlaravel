import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
export default class Listing extends Component {

    constructor(){
        super();
        this.state = {
            categoriesName : []
        }

    }
    componentDidMount() {
        axios.get('/category')
            .then(data => {                // <== Change is here
                console.log(data.data);

                this.setState({
                    categoriesName: data.data
                });

            });
    }
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
                    {this.state.categoriesName.map(category => {
                        return(
                            <tr key={category.id}>
                                <th scope="row">{category.id}</th>
                                <td>{category.name}</td>
                                <td>{category.active}</td>
                                <td>{category.created_at}</td>
                                <td>{category.updated_at}</td>
                            </tr>
                            )
                    })}

                    </tbody>
                </table>
            </div>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Listing />, document.getElementById("example"));
}

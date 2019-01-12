import React from "react";
import axios from "axios";
import AddNewCategory from "./AddNewCategory";
import CategoryList from "./CategoryList";
class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            categoryList: []
        };
    }

    async componentDidMount() {
        // axios.defaults.xsrfCookieName = "csrftoken";
        // axios.defaults.xsrfHeaderName = "X-CSRFToken";
        var list = await axios.get("/api/categories");
        this.setState = {
            categoryList: list
        };
    }
    render() {
        return (
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
                        <CategoryList categories={this.state.categoryList} />
                    </div>
                    <div className="col-lg-6">
                        <AddNewCategory />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;

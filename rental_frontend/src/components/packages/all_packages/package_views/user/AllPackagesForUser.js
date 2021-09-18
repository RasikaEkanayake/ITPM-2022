import React, { Component } from 'react'
import axios from "axios"

import PackageSmallView from './PackageSmallView';

class AllPackagesForUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packages: []
        }
    }

    // Get all packages from datasbase
    componentDidMount() {
        axios.get("http://localhost:8092/api/packages/").then(res => {
            this.setState({ packages: res.data });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (

            <div className="container mt-5">
                <div className="row">
                    <h3 className={"text-secondary text-center mb-5"}>All Packages</h3>
                    <React.Fragment>
                        {
                            this.state.packages.map(pac => {
                                return <PackageSmallView package={pac} count={4} />
                            })
                        }
                    </React.Fragment>
                </div>
            </div>

        );
    }
}

export default AllPackagesForUser;
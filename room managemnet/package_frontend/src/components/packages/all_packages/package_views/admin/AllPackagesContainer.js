import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import axios from "axios"
import ReactToPrint from 'react-to-print';

import PackageActions from './PackageActions';

class AllPackagesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packages: [],
            filterdPackages: [],
            searchTag: "",
            isGen: false
        }
    }

    updateContent = () => {
        axios.get("http://localhost:8092/api/packages/").then(res => {
            this.setState({
                packages: res.data,
                filterdPackages: res.data
            });
        }).catch(err => {
            console.log(err);
        });
    }

    // Get all packages from datasbase
    componentDidMount() {
        this.updateContent();
    }

    getRedirectButton = () => {
        return <button type="button" onClick={() => { this.props.history.push("/admin/packages/CreatePackage") }} class="btn btn-outline-primary m-2">Create Package</button>
    }

    // Function for search packages
    search = (e) => {
        let searchTag = e.target.value.toLowerCase();
        let filterdPackages = [];

        this.state.packages.forEach(pack => {
            if (pack.packageName.toLowerCase().includes(searchTag) || pack.packageId.toLowerCase().includes(searchTag)) {
                filterdPackages.push(pack)
            }
        })

        this.setState({
            filterdPackages,
            searchTag
        });

    }

    render() {
        return (

            <div className="container-fluid mt-5">
                <div className="row">
                    <nav class="navbar navbar-light bg-light">
                        <div class="container-fluid">
                            <div class="d-flex">
                                <input onChange={(e) => this.search(e)} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </div>
                        </div>
                    </nav>

                    {
                        this.state.isGen ? <div className="row text-end">
                            <div className="col">
                                {this.getRedirectButton()}
                                <ReactToPrint

                                    documentTitle={"All Packages"}
                                    onAfterPrint={() => { this.setState({ isGen: false }); }}
                                    trigger={() => {
                                        return <button type="button" class="btn btn-primary">Generate PDF Now</button>
                                    }}
                                    content={() => this.componentRef}
                                />
                                <button onClick={() => { this.setState({ isGen: false }); }} type="button" class="btn btn-danger m-2">Cancel</button>
                            </div>
                        </div> : <div className="row text-end">
                            <div className="col">
                                {this.getRedirectButton()}
                                <button type="button" onClick={() => { this.setState({ isGen: true }); }} class="btn btn-outline-secondary">Genrate Report</button>
                            </div>
                        </div>
                    }

                    <div ref={el => (this.componentRef = el)}>
                        <h3 className={"text-secondary text-center mb-5"}>All Packages</h3>
                        <div class="table-responsive">
                            <table class="table table-hover text-center">
                                <thead className={"table-dark"}>
                                    <tr>
                                        <th scope="col">Package Id</th>
                                        <th scope="col">Package Neme</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Discount</th>
                                        {
                                            !this.state.isGen ? <th scope="col">Actions</th> : <React.Fragment />
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    <React.Fragment>
                                        {
                                            this.state.filterdPackages.map(pac => {
                                                return <PackageActions key={pac._id} package={pac} isGen={this.state.isGen} updateContent={this.updateContent} />
                                            })
                                        }
                                    </React.Fragment>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default withRouter(AllPackagesContainer);
import React, { Component } from 'react';
import axios from 'axios';

class ViewMorePackage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            package: null
        }
    }ss


    // Get all package by id
    componentDidMount() {
        axios.get(`http://localhost:8092/api/packages/${this.props.match.params.id}`).then(res => {
            this.setState({ package: res.data });
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });
    }


    render() {
        return (
            <div className="container mt-5">
                {
                    this.state.package ? <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-5">
                                <img src={this.state.package.imageURL} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-7">
                                <div class="card-body px-5">
                                    <h3 class="card-title">{this.state.package.packageName}</h3>
                                    <hr />
                                    <p class="card-text">{this.state.package.description}</p>
                                    <h4 class="text-primary text-end">Discount: {this.state.package.discount}%</h4>
                                    <h3 class="text-danger text-end">RS: {this.state.package.price} /-</h3>
                                    <div className="row mt-5">
                                        <div className="text-center">
                                            <button type="button" class="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div> : <React.Fragment />
                }
            </div>
        );
    }
}

export default ViewMorePackage;
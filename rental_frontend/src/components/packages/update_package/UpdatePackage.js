import React, { Component } from 'react'

import { withRouter } from "react-router-dom";

import axios from "axios"
import { Alert } from '../../../services/Alert'
import packageValidations from "../../../validations/PackageValidations"
import dummy_image from "../../../assets/images/dummy_image.jpg"

class UpdatePackage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            docId: "",
            name: "",
            id: "",
            price: "",
            discount: "",
            description: "",
            isUpdated: false
        }
    }

    // Get all package by id
    componentDidMount() {

        axios.get(`http://localhost:8092/api/packages/${this.props.match.params.id}`).then(res => {
            let p = res.data
            this.setState({
                docId: p._id,
                image: {
                    preview: p.imageURL,
                    raw: null,
                },
                name: p.packageName,
                id: p.packageId,
                price: p.price,
                discount: p.discount,
                description: p.description,
            });
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    // Handle input feild
    onInputValueChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    // function to handle image
    handleChangeFile = (e) => {
        if (e.target.files.length) {
            const img = {
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0],
            };
            this.setState({
                image: img,
                isUpdated: true
            });
        }
    };


    // Function for create package
    submit = (e) => {

        e.preventDefault();

        const result = packageValidations({
            name: this.state.name,
            id: this.state.id,
            price: this.state.price,
            discount: this.state.discount,
            description: this.state.description,
        });

        if (result.status) {
            if (this.state.image) {
                const formData = new FormData();
                formData.append("photo", this.state.image.raw);
                formData.set("packageName", this.state.name);
                formData.set("packageId", this.state.id);
                formData.set("price", this.state.price);
                formData.set("discount", this.state.discount);
                formData.set("description", this.state.description);
                formData.set("isImageUpdated", this.state.isUpdated);

                console.log("formData", this.state);

                axios.put(`http://localhost:8092/api/packages/UpdatePackage/${this.state.docId}`, formData).then(res => {
                    Alert("success", "Done!", "Package Updated Successfully.");
                    this.props.history.push("/admin/packages")

                }).catch(err => {
                    Alert("error", "Something went wrong.", err)
                })
            } else {
                Alert("error", "Form Validation Error!", "Please upload image.")
            }

        } else {
            Alert("error", "Form Validation Error!", result.error)
        }

    }

    render() {
        return (
            <div className="container">
                <div className="card mb-3 mt-5">
                    <div className="row g-0">
                        <div className="col-md-7">
                            <img src={this.state.image ? this.state.image.preview : dummy_image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-5 p-3">
                            <div className="card-body">
                                <h4 className="card-title text-secondary mt-3">Update Package</h4>
                                <hr classNameName="mb-3" />
                                <form onSubmit={(e) => this.submit(e)}>
                                    <div className="mb-3">
                                        <label for="name" className="form-label">Package Name</label>
                                        <input
                                            className="form-control"
                                            id="name"
                                            value={this.state.name}
                                            onChange={(e) => this.onInputValueChange(e)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="id" className="form-label">Package Id</label>
                                        <input
                                            className="form-control"
                                            id="id"
                                            value={this.state.id}
                                            onChange={(e) => this.onInputValueChange(e)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="price" className="form-label">Package Price</label>
                                        <input
                                            className="form-control"
                                            id="price"
                                            type="number"
                                            value={this.state.price}
                                            onChange={(e) => this.onInputValueChange(e)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="discount" className="form-label">Package Discount</label>
                                        <input
                                            className="form-control"
                                            id="discount"
                                            type="number"
                                            value={this.state.discount}
                                            onChange={(e) => this.onInputValueChange(e)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="description" className="form-label">Package Description</label>
                                        <input
                                            className="form-control"
                                            id="description"
                                            value={this.state.description}
                                            onChange={(e) => this.onInputValueChange(e)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <div className="mb-3">
                                            <label for="formFile" className="form-label">Package Image</label>
                                            <input
                                                accept="image/*"
                                                className="form-control"
                                                type="file"
                                                id="formFile"
                                                onChange={(e) => this.handleChangeFile(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2 mx-auto">
                                        <button type="submit" className="btn btn-success">Update Package</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(UpdatePackage);
import React, { Component } from 'react';
import axios from 'axios'

export default class CreatePost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            dob: "",
            nic: "",
            address: "",
            contactNumber: "",
            imageURL: ""
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })

    }

    onSubmit = (e) => {

        e.preventDefault();

        const { name, dob, nic, address, contactNumber, imageURL } = this.state;

        const data = {
            name: name,
            dob: dob,
            nic: nic,
            address: address,
            contactNumber: contactNumber,
            imageURL: imageURL
        }

        console.log(data)

        axios.post(`http://localhost:8000/guids/save`, data).then((res) => {
            if (res.data.success) {
                alert("Added successfully")
                this.setState(
                    {
                        name: "",
                        dob: "",
                        nic: "",
                        address: "",
                        contactNumber: "",
                        imageURL: ""
                    }
                )
            }
            else {
                alert("Failed to add")
            }
        })


    }

    render() {

        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">GUIDE DETAILS</h1>
                <h2 className="h5 mb-3 font-weight-normal">New entry</h2>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Name</label>
                        <input type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter name"
                            value={this.state.name}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>DOB</label>
                        <input type="text"
                            className="form-control"
                            name="dob"
                            placeholder="Enter DOB"
                            value={this.state.dob}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>NIC</label>
                        <input type="text"
                            className="form-control"
                            name="nic"
                            placeholder="Enter NIC"
                            value={this.state.nic}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Address</label>
                        <input type="text"
                            className="form-control"
                            name="address"
                            placeholder="Enter address"
                            value={this.state.address}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Contact Number</label>
                        <input type="text"
                            className="form-control"
                            name="contactNumber"
                            placeholder="Enter contact number"
                            value={this.state.contactNumber}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>imageURL</label>
                        <input type="text"
                            className="form-control"
                            name="imageURL"
                            placeholder="Enter image URL"
                            value={this.state.imageURL}
                            onChange={this.handleInputChange} />
                    </div>

                    <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>


                </form>

            </div>
        )
    }
}

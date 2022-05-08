import React, { Component } from 'react'
import axios from 'axios'
export default class EditPost extends Component {


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
        const id = this.props.match.params.id;
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

        axios.put(`http://localhost:8000/guids/update/${id}`, data).then((res) => {
            if (res.data.success) {
                alert("Post Updated Successfully")
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
        })


    }



    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/guids/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    name: res.data.post.name,
                    dob: res.data.post.dob,
                    nic: res.data.post.nic,
                    address: res.data.post.address,
                    contactNumber: res.data.post.contactNumber,
                    imageURL: res.data.post.imageURL
                });

                console.log(this.state.post);
            }

        });

    }

    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">GUIDE DETAILS</h1>
                <h2 className="h5 mb-3 font-weight-normal">Edit details</h2>
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
                        <label style={{ marginBottom: '5px' }}>Contact Number </label>
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
                            placeholder="Enter imageURL"
                            value={this.state.imageURL}
                            onChange={this.handleInputChange} />
                    </div>

                    <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Update
                    </button>


                </form>

            </div>
        )
    }
}

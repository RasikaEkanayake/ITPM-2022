import React, { Component } from 'react';
import axios from 'axios'

export default class Addpaypal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ""
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

        const { email } = this.state;

        const data = {
            email: email
        }

        console.log(data)

        axios.post(`http://localhost:8000/paypal/save`, data).then((res) => {
            if (res.data.success) {
                alert("Added successfully")
                this.setState(
                    {
                        email: ""
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
                <h1 className="h3 mb-3 font-weight-normal">Create new user</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>enter paypal Email</label>
                        <input type="text"
                            className="form-control"
                            name="email"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.handleInputChange} required="required this" />
                    </div>

                    <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;

                </form>

                <div className="card-body">
                    <h5 className="card-title">View my Paypal details</h5>
                    <p className="card-text">Check Your all Paypal emails details and Click proceed</p>
                    <a href="/allemails" className="btn btn-primary">Click here</a>
                </div>

            </div>
        )
    }
}

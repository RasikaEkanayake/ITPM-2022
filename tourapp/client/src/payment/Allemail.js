import React, { Component } from 'react';
import axios from 'axios';
import '../css/profile.css';

export default class Allemail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            paypal: []
        };

    }

    componentDidMount() {
        this.retrievePaypal();
    }

    retrievePaypal() {
        axios.get("http://localhost:8000/paypal").then(res => {
            if (res.data.success) {
                this.setState({ paypal: res.data.existingPaypal });

                console.log(this.state.paypal)
            }
        });
    }

    onDelete = (id) => {
        axios.delete(`http://localhost:8000/paypal/delete/${id}`).then((res) => {
            alert("Deleted Successfully");
        })

    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.paypal.map((paypal, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <div className="row">
                                    <div className="p-3 py-5">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <a href={`/uppaypal/${paypal._id}`} style={{ textDecoration: 'none' }}>
                                                <h4 className="text-right">Profile</h4>
                                            </a>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-12"><label className="labels">email</label>
                                                <input type="text" className="form-control" placeholder="" defaultValue={paypal.email} />
                                            </div>
                                        </div>
                                        <br></br>
                                        <a className="btn btn-warning" href={`/uppaypal/${paypal._id}`}>
                                            <i className="fas fa-edit"></i>&nbsp;Edit
                                        </a>
                                        &nbsp;
                                        <a className="btn btn-danger" href="" onClick={() => this.onDelete(paypal._id)}>
                                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                                        </a>
                                        &nbsp;
                                        <a className="btn btn-success" href={`/proceed`}>
                                            <i className="fas fa-edit"></i>&nbsp;Proceed payment
                                        </a>
                                    </div>

                                </div>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

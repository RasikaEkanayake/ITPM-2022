import React, { Component } from 'react';
import axios from 'axios';
import '../css/profile.css';

export default class Allcard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardpay: []
        };
    }

    componentDidMount() {
        this.retrieveCardpay();
    }

    retrieveCardpay() {
        axios.get("http://localhost:8000/cardpay").then(res => {
            if (res.data.success) {
                this.setState({ cardpay: res.data.existingCardpay });
                console.log(this.state.cardpay)
            }
        });
    }

    // onDelete = (id) => {
    //     axios.delete(`http://localhost:8000/cardpay/delete/${id}`).then((res) => {
    //         alert("Deleted Successfully");
    //     })

    // }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.cardpay.map((cardpay, index) => (
                            <tr key={index}>
                                <th scope="row"></th>

                                <div className="row">

                                    <div className="p-3 py-5">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <a href={`/upcardpay/${cardpay._id}`} style={{ textDecoration: 'none' }}>
                                                <h4 className="text-right">Profile</h4>
                                            </a>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-12"><label className="labels"><h5>cardnumber</h5></label>
                                                <input type="text" className="form-control" placeholder="" defaultValue={cardpay.cardnumber} />
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="row mt-3">
                                            <div className="col-md-12"><label className="labels"><h5>month</h5></label>
                                                <input type="text" className="form-control" placeholder="" defaultValue={cardpay.month} />
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="row mt-3">
                                            <div className="col-md-12"><label className="labels"><h5>year</h5></label>
                                                <input type="text" className="form-control" placeholder="" defaultValue={cardpay.year} />
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="row mt-3">
                                            <div className="col-md-12"><label className="labels"><h5>cvv</h5></label>
                                                <input type="text" className="form-control" placeholder="" defaultValue={cardpay.cvv} />
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="row mt-3">
                                            <div className="col-md-12"><label className="labels "><h5>nameoncard</h5></label>
                                                <input type="text" className="form-control" placeholder="" defaultValue={cardpay.nameoncard} />
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="row mt-3">
                                            <div className="col-md-12"><label className="labels"><h5>phone</h5></label>
                                                <input type="text" className="form-control" placeholder="" defaultValue={cardpay.phone} />
                                            </div>
                                        </div>
                                        <br></br>
                                        <a className="btn btn-warning" href={`/upcardpay/${cardpay._id}`}>
                                            <i className="fas fa-edit"></i>&nbsp;Edit
                                        </a>
                                        &nbsp;
                                        <a className="btn btn-danger" href="" onClick={() => this.onDelete(cardpay._id)}>
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

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
        this.retrievecardpay();
    }

    retrievecardpay() {
        axios.get("http://localhost:8000/cardpay").then(res => {
            if (res.data.success) {
                this.setState({ cardpay: res.data.existingcardpay });

                console.log(this.state.cardpay)
            }
        });
    }

    onDelete = (id) => {
        axios.delete(`http://localhost:8000/cardpay/delete/${id}`).then((res) => {
            alert("Deleted Successfully");
        })

    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.cardpay.map((cardpay, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>

                                <div className="row">

                                    <div className="p-3 py-5">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <a href={`/upcardpay/${cardpay._id}`} style={{ textDecoration: 'none' }}>
                                                <h4 className="text-right">Profile</h4>
                                            </a>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-12"><label className="labels">email</label>
                                                <input type="text" className="form-control" placeholder="" defaultValue={cardpay.email} />
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

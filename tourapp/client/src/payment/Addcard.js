import React, { Component } from 'react';
import axios from 'axios'

export default class Addcard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardnumber: "",
            month: "",
            year: "",
            cvv: "",
            nameoncard: "",
            phone: ""
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

        const { cardnumber, month, year, cvv, nameoncard, phone } = this.state;

        const data = {
            cardnumber: cardnumber,
            month: month,
            year: year,
            cvv: cvv,
            nameoncard: nameoncard,
            phone: phone
        }

        console.log(data)

        axios.post(`http://localhost:8000/cardpay/save`, data).then((res) => {
            if (res.data.success) {
                alert("Added successfully")
                this.setState(
                    {
                        cardnumber: "",
                        month: "",
                        year: "",
                        cvv: "",
                        nameoncard: "",
                        phone: ""
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
                <h1 className="h3 mb-3 font-weight-normal">Add payment method</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>cardnumber</label>
                        <input type="text"
                            className="form-control"
                            name="cardnumber"
                            placeholder="Enter cardnumber"
                            value={this.state.cardnumber}
                            onChange={this.handleInputChange} required="required this" />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>month</label>
                        <input type="text"
                            required="required this"
                            className="form-control"
                            name="month"
                            placeholder="Enter month"
                            value={this.state.month}
                            onChange={this.handleInputChange} />
                    </div>


                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>year</label>
                        <input type="text"
                            required="required this"
                            className="form-control"
                            name="year"
                            placeholder="Enter year"
                            value={this.state.year}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>cvv</label>
                        <input type="text"
                            required="required this"
                            className="form-control"
                            name="cvv"
                            placeholder="Enter cvv"
                            value={this.state.cvv}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>nameoncard</label>
                        <input type="text"
                            required="required this"
                            className="form-control"
                            name="nameoncard"
                            placeholder="Enter nameoncard"
                            value={this.state.nameoncard}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>phone</label>
                        <input type="text"
                            className="form-control"
                            name="phone"
                            required="required this"
                            placeholder="Enter phone"
                            value={this.state.phone}
                            onChange={this.handleInputChange} />
                    </div>

                    <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>
                    &nbsp;&nbsp;&nbsp;
                </form>

                <div className="card-body">
                    <h5 className="card-title">View my card Details</h5>
                    <p className="card-text">Check Your all card details and Click proceed</p>
                    <a href="/allcard" className="btn btn-primary">Click here</a>
                </div>
            </div>
        )
    }
}
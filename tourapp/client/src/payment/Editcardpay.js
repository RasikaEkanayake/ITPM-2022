import React, { Component } from 'react'
import axios from 'axios'

export default class Editcardpay extends Component {

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
        const id = this.props.match.params.id;

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

        axios.put(`http://localhost:8000/cardpay/update/${id}`, data).then((res) => {
            if (res.data.success) {
                alert("Updated successfully")
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
        })
    }

    componentDidMount() {

        const id = this.props.match.params.id;


        axios.get(`http://localhost:8000/cardpay/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    cardnumber: res.data.post.cardnumber,
                    month: res.data.post.month,
                    year: res.data.post.year,
                    cvv: res.data.post.cvv,
                    nameoncard: res.data.post.nameoncard,
                    phone: res.data.post.phone
                });

                console.log(this.state.post);
            }
        });
    }

    render() {
        return (
            <div>
                <div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal">Edit Card Number</h1>
                    <form className="needs-validation" noValidate>
                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>cardnumber</label>
                            <input type="text"
                                className="form-control"
                                name="cardnumber"
                                placeholder="Enter cardnumber"
                                value={this.state.cardnumber}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>month</label>
                            <input type="text"
                                className="form-control"
                                name="month"
                                placeholder="Enter month"
                                value={this.state.month}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>year</label>
                            <input type="text"
                                className="form-control"
                                name="year"
                                placeholder="Enter year"
                                value={this.state.year}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>cvv</label>
                            <input type="text"
                                className="form-control"
                                name="cvv"
                                placeholder="Enter cvv"
                                value={this.state.cvv}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>nameoncard</label>
                            <input type="text"
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
                                placeholder="Enter phone"
                                value={this.state.phone}
                                onChange={this.handleInputChange} />
                        </div>



                        <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Save
                        </button>


                    </form>

                </div>
            </div>
        )
    }
}

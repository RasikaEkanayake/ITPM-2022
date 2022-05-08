import React, { Component } from 'react'
import axios from 'axios'

export default class Editpaypal extends Component {

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
        const id = this.props.match.params.id;

        const { email } = this.state;

        const data = {
            email: email
        }

        console.log(data)

        axios.put(`http://localhost:8000/paypal/update/${id}`, data).then((res) => {
            if (res.data.success) {
                alert("Updated successfully")
                this.setState(
                    {
                        email: ""
                    }
                )
            }
        })
    }

    componentDidMount() {

        const id = this.props.match.params.id;


        axios.get(`http://localhost:8000/paypal/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    email: res.data.post.email
                });

                console.log(this.state.post);
            }
        });
    }

    render() {
        return (
            <div>
                <div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal">Edit user</h1>
                    <form className="needs-validation" noValidate>
                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>email</label>
                            <input type="text"
                                className="form-control"
                                name="email"
                                placeholder="Enter email"
                                value={this.state.email}
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

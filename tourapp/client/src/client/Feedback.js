import React, { Component } from 'react';
import axios from 'axios'

export default class Feedback extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feedback: "",
            suggession: ""
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

        const { feedback, suggession } = this.state;

        const data = {
            feedback: feedback,
            suggession: suggession
        }

        console.log(data)

        axios.post(`http://localhost:8000/feed/save`, data).then((res) => {
            if (res.data.success) {
                alert("Added successfully")
                this.setState(
                    {
                        feedback: "",
                        suggession: ""
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
                        <label style={{ marginBottom: '5px' }}>feedback</label>
                        <input type="text"
                            className="form-control"
                            name="feedback"
                            placeholder="Enter name"
                            value={this.state.feedback}
                            onChange={this.handleInputChange} required="required this" />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>suggession</label>
                        <input type="text"
                            required="required this"
                            className="form-control"
                            name="suggession"
                            placeholder="Enter suggession"
                            value={this.state.suggession}
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

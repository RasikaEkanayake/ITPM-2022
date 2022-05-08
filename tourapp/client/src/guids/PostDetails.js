import React, { Component } from 'react';
import axios from 'axios'

export default class PostDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        };
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/gpost/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    post: res.data.post
                });

                console.log(this.state.post);
            }

        });

    }

    render() {

        const {
            name, dob, nic, address, contactNumber, imageURL
        } = this.state.post;

        return (
            <div style={{ marginTop: '20px' }}>
                <h4>{name}</h4>
                <hr />


                <d1 className="row">
                    <dt className="col-sm-3">dob</dt>
                    <dd className="col-sm-9">{dob}</dd>

                    <dt className="col-sm-3">nic</dt>
                    <dd className="col-sm-9">{nic}</dd>

                    <dt className="col-sm-3">address</dt>
                    <dd className="col-sm-9">{address}</dd>

                    <dt className="col-sm-3">contactNumber</dt>
                    <dd className="col-sm-9">{contactNumber}</dd>

                    <dt className="col-sm-3">imageURL</dt>
                    <dd className="col-sm-9">{imageURL}</dd>

                </d1>

            </div>
        )
    }
}


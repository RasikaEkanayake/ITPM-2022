import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            guids: []
        };
    }



    componentDidMount() {
        this.retrieveGuids();
    }

    retrieveGuids() {
        axios.get("http://localhost:8000/guids").then(res => {
            if (res.data.success) {
                this.setState({
                    guids: res.data.existingGuids
                });

                console.log(this.state.guids);
            }


        });
    }


    onDelete = (id) => {
        axios.delete(`http://localhost:8000/guids/delete/${id}`).then((res) => {
            alert("Deleted Successfully");
            this.retrieveguids();
        })

    }

    filterData(guids, searchKey) {

        const result = guids.filter((post) =>
            post.topic.includes(searchKey)
        )

        this.setState({ guids: result })

    }

    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8000/guids").then(res => {
            if (res.data.success) {

                this.filterData(res.data.existingGuids, searchKey)
            }
        });


    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 mt-2 mb-2">
                        <h4>GUIDE DETAILS</h4>
                    </div>
                    <div className="col-lg-3 mt-2 mb-2">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            name="searchQuery"
                            onChange={this.handleSearchArea}>

                        </input>
                    </div>
                </div>
                <table className="table table-hover" style={{ marginTop: '40px' }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">DOB</th>
                            <th scope="col">NIC</th>
                            <th scope="col">Address</th>
                            <th scope="col">ContactNumber</th>
                            <th scope="col">image URL</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.guids.map((guids, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <a href={`/post/${guids._id}`} style={{ textDecoration: 'none' }}>
                                        {guids.name}
                                    </a>
                                </td>
                                <td>{guids.dob}</td>
                                <td>{guids.nic}</td>
                                <td>{guids.address}</td>
                                <td>{guids.contactNumber}</td>
                                <td>{guids.imageURL}</td>
                                <td>
                                    <a className="btn btn-warning" href={`/edit/${guids._id}`}>
                                        <i className="fas fa-edit"></i>&nbsp;Edit
                                    </a>
                                    &nbsp;
                                    <a className="btn btn-danger" href="#" onClick={() => this.onDelete(guids._id)}>
                                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                                    </a>
                                    &nbsp;
                                    <a className="btn btn-primary" href="/guidesal" onClick={() => this.onDelete(guids._id)}>
                                        <i className="far fa-trash-alt"></i>&nbsp;Manage Salary
                                    </a>
                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

                <button className="btn btn-success"><a href="/gadd" style={{ textDecoration: 'none', color: 'white' }}>Create New Profile</a></button>

            </div>
        )
    }
}

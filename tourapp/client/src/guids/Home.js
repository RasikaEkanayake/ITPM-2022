import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }



    componentDidMount() {
        this.retrievePosts();
    }

    retrievePosts() {
        axios.get("/gposts").then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });

                console.log(this.state.posts);
            }


        });
    }


    onDelete = (id) => {
        axios.delete(`/gpost/delete/${id}`).then((res) => {
            alert("Deleted Successfully");
            this.retrievePosts();
        })

    }

    filterData(posts, searchKey) {

        const result = posts.filter((post) =>
            post.topic.includes(searchKey)
        )

        this.setState({ posts: result })

    }


    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get("/gposts").then(res => {
            if (res.data.success) {

                this.filterData(res.data.existingPosts, searchKey)
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
                        {this.state.posts.map((posts, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <a href={`/gpost/${posts._id}`} style={{ textDecoration: 'none' }}>
                                        {posts.name}
                                    </a>
                                </td>
                                <td>{posts.dob}</td>
                                <td>{posts.nic}</td>
                                <td>{posts.address}</td>
                                <td>{posts.contactNumber}</td>
                                <td>{posts.imageURL}</td>
                                <td>
                                    <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                                        <i className="fas fa-edit"></i>&nbsp;Edit
                                    </a>
                                    &nbsp;
                                    <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                                        <i className="far fa-trash-alt"></i>&nbsp;Delete
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

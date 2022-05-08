import React, { Component } from 'react';
import axios from 'axios';
import '../css/profile.css';

export default class Profile extends Component {
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
    axios.get("http://localhost:8000/posts").then(res => {
      if (res.data.success) {
        this.setState({ posts: res.data.existingPosts });

        console.log(this.state.posts)
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:8000/post/delete/${id}`).then((res) => {
      alert("Deleted Successfully");

    })

  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <div className="container rounded bg-white mt-5 mb-5">
                  <div className="row">
                    <div className="col-md-3 border-right">
                      <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">{posts.name}</span><span className="text-black-50">{posts.email}</span><span> </span></div>
                    </div>
                    <div className="col-md-5 border-right">
                      <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <a href={`/post/${posts._id}`} style={{ textDecoration: 'none' }}>
                            <h4 className="text-right">Profile</h4>
                          </a>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-12"><label className="labels">Name</label><input type="text" className="form-control" placeholder="" defaultValue={posts.name} /></div>
                          <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="" defaultValue={posts.mobilenumber} /></div>
                          <div className="col-md-12"><label className="labels">Gender</label><input type="text" className="form-control" placeholder="" defaultValue={posts.gender} /></div>
                          <div className="col-md-12"><label className="labels">email</label><input type="text" className="form-control" placeholder="" defaultValue={posts.email} /></div>
                        </div>
                        <br></br>
                        <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                          <i className="fas fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp;
                        <a className="btn btn-danger" href="" onClick={() => this.onDelete(posts._id)}>
                          <i className="far fa-trash-alt"></i>&nbsp;Delete
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-3 py-5">
                        <br></br>
                        <br></br>
                        <div className="col-md-12"><label className="labels">Age</label><input type="text" className="form-control" placeholder="additional details" defaultValue={posts.age} /></div>
                        <div className="col-md-12"><label className="labels">country</label><input type="text" className="form-control" placeholder="additional details" defaultValue={posts.country} /></div>
                        <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" defaultValue="" /></div>
                        <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" defaultValue="" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success"><a href="/NewUser" style={{ textDecoration: 'none', color: 'white' }}>Create New User</a></button>
      </div>
    )
  }
}

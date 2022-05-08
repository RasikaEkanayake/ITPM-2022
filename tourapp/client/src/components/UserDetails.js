import React, { Component } from 'react'
import axios from 'axios';



export default class UserDetails extends Component {

  constructor(props) {
    super(props);

    this.state = {
      post: {}
    };
  }

  componentDidMount() {

    const id = this.props.match.params.id;


    axios.get(`http://localhost:8000/post/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post
        });

        console.log(this.state.post);
      }
    });
  }

  render() {

    const { name, mobilenumber, gender, email, age, country } = this.state.post;

    return (
      <div>
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                <span className="font-weight-bold">{name}</span><span className="text-black-50">{name}</span><span> </span></div>
            </div>
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile</h4>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12"><label className="labels">Name</label><input type="text" className="form-control" placeholder="" defaultValue={name} /></div>
                  <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="" defaultValue={mobilenumber} /></div>
                  <div className="col-md-12"><label className="labels">Gender</label><input type="text" className="form-control" placeholder="" defaultValue={gender} /></div>
                  <div className="col-md-12"><label className="labels">email</label><input type="text" className="form-control" placeholder="" defaultValue={email} /></div>
                </div>
                <br></br>
                <a className="btn btn-warning" href="#">
                  <i className="fas fa-edit"></i>&nbsp;Edit
                </a>
                &nbsp;
                <a className="btn btn-danger" href="#">
                  <i className="far fa-trash-alt"></i>&nbsp;Delete
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 py-5">
                <br></br>
                <br></br>
                <div className="col-md-12"><label className="labels">Age</label><input type="text" className="form-control" placeholder="additional details" defaultValue={age} /></div>
                <div className="col-md-12"><label className="labels">country</label><input type="text" className="form-control" placeholder="additional details" defaultValue={country} /></div>
                <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" defaultValue="" /></div>
                <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" defaultValue="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

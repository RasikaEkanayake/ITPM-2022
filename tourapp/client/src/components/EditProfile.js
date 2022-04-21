import React, { Component } from 'react'
import axios from 'axios'

export default class EditProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobilenumber: "",
      gender: "",
      email: "",
      age: "",
      country: ""
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

    const { name, mobilenumber, gender, email, age, country } = this.state;

    const data = {
      name: name,
      mobilenumber: mobilenumber,
      gender: gender,
      email: email,
      age: age,
      country: country
    }

    console.log(data)

    axios.put(`http://localhost:8000/post/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Updated successfully")
        this.setState(
          {
            name: "",
            mobilenumber: "",
            gender: "",
            email: "",
            age: "",
            country: ""
          }
        )
      }
    })


  }

  componentDidMount() {

    const id = this.props.match.params.id;


    axios.get(`http://localhost:8000/post/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          name: res.data.post.name,
          mobilenumber: res.data.post.mobilenumber,
          gender: res.data.post.gender,
          email: res.data.post.email,
          age: res.data.post.age,
          country: res.data.post.country
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
              <label style={{ marginBottom: '5px' }}>name</label>
              <input type="text"
                className="form-control"
                name="name"
                placeholder="Enter name"
                value={this.state.name}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>mobilenumber</label>
              <input type="text"
                className="form-control"
                name="mobilenumber"
                placeholder="Enter mobilenumber"
                value={this.state.mobilenumber}
                onChange={this.handleInputChange} />
            </div>


            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>gender</label>
              <input type="text"
                className="form-control"
                name="gender"
                placeholder="Enter gender"
                value={this.state.gender}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>email</label>
              <input type="text"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>age</label>
              <input type="text"
                className="form-control"
                name="age"
                placeholder="Enter age"
                value={this.state.age}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>country</label>
              <input type="text"
                className="form-control"
                name="country"
                placeholder="Enter country"
                value={this.state.country}
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

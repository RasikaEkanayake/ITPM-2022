import React, { Component } from 'react';
import axios from 'axios';
import '../css/profile.css';

export default class Bookroom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      packages: []
    };
  }

  componentDidMount() {
    this.retrievePackages();
  }

  retrievePackages() {
    axios.get("http://localhost:8000/packages").then(res => {
      if (res.data.success) {
        this.setState({ packages: res.data.existingPackages });
        console.log(this.state.packages)
      }
    });
  }

  render() {
    const { packageName, packageId, price, discount, description, imageURL
    } = this.state.packages;
    return (
      <div>
        <table>
          <tbody>
            {this.state.packages.map((packages, index) => (
              <div className="card-group">
                <div className="card">
                  <img className="card-img-top" src={packages.imageURL} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Package Name       : {packages.packageName}</h5>
                    <h5 className="card-title">Package Id         : {packages.packageId}</h5>
                    <h5 className="card-title">Package price      : {packages.price}</h5>
                    <h5 className="card-title">Package discount   : {packages.discount}</h5>
                    <h5 className="card-title">Package description: {packages.description}</h5>
                    <a href="/payhome" type="button" className="btn btn-outline-primary"><h5 href="/payhome">Book Now</h5></a>
                  </div>
                </div>
              </div>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

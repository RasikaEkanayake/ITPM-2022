import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="card mb-3" style={{ width: '1200px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Admin Dashboard</h5>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Book Guids</h5>
                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <a href="paypal" className="btn btn-primary">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Book Rooms</h5>
                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <a href="/paypals" className="btn btn-primary">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Contact us</h5>
                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <a href="/payhome" className="btn btn-primary">Contact now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Create User</h5>
                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <a href="./NewUser" className="btn btn-primary">Click here</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Check Feedbacks</h5>
                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <a href="/feed" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Manage Profile</h5>
                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <a href="./Profile" className="btn btn-primary">Click here</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}

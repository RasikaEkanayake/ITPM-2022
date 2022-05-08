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
                                                <h5 className="card-title">Manage Guids</h5>
                                                <p className="card-text">Manage Guids in system.</p>
                                                <a href="/ghome" className="btn btn-primary">Mange guids</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Book Rooms</h5>
                                                <p className="card-text">View Book Rooms Function as a User</p>
                                                <a href="/bookroom" className="btn btn-success">View User Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">About Us</h5>
                                                <p className="card-text">Check Who we are</p>
                                                <a href="/payhome" className="btn btn-info">About now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Create User</h5>
                                                <p className="card-text">Create New User</p>
                                                <a href="./NewUser" className="btn btn-primary">Create User</a>
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
                                                <h5 className="card-title">Manage Users</h5>
                                                <p className="card-text">Manage users in Elite Tourism.</p>
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

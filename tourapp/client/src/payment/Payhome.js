import React, { Component } from 'react'

export default class Payhome extends Component {
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
                                                <a href="/cardpay" className="btn btn-primary">Card Pay</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Card Pay</h5>
                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <a href="/paypal" className="btn btn-primary">Paypal</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

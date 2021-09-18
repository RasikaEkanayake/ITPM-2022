import React from 'react'
import { useHistory } from "react-router-dom";

const PackageSmallView = (props) => {

    const single_package = props.package;
    const count = props.count;

    const history = useHistory();
    const handleClick = (path) => {
        history.push(path);
    }

    return (

        <div className={`col-xs-12 col-sm-6 col-md-${count}`}>
            <div class="card">
                <img src={single_package.imageURL} class="card-img-top" alt={single_package.packageName} />
                <div class="card-body">
                    <h5 class="card-title text-center">{single_package.packageName}</h5>
                    <p class="card-text">{single_package.description}</p>
                    <h4 class="card-text text-end text-danger mt-3 mb-3">RS: {single_package.price}/-</h4>
                    <div class="card-footer">
                        <div class="row text-center">
                            <div className="col-6">
                                <button onClick={() => handleClick(`/packages/${single_package._id}`)} type="button" class="btn btn-outline-primary">View</button>
                            </div>
                            <div className="col-6">
                                <button onClick={() => handleClick(`/packages/${single_package._id}`)} type="button" class="btn btn-outline-success">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PackageSmallView;
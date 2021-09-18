import React from 'react';
import { useHistory } from "react-router-dom";

import Swal from "sweetalert2";
import axios from 'axios';

const PackageActions = (props) => {


    const history = useHistory();
    const data = props.package;

    // Function for redirect
    const handleClick = (path) => {
        history.push(path);
    }

    // Function for delete Package
    const deletePackage = () => {
        Swal.fire({
            title: 'Are you want to delete package',
            text: "Note that ths process can not be revert.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete'
        }).then((result) => {

            if (result.isConfirmed) {
                axios.delete(`http://localhost:8092/api/packages/DeletePackage/${data._id}`)
                    .then(res => {
                        Swal.fire(
                            'Done!',
                            'Package deleted successfully!',
                            'success'
                        )
                        props.updateContent();
                    }).catch(err => {
                        console.log(err)
                    })
            }
        })
    }


    return (<React.Fragment>
        <tr>
            <th scope="row">{data.packageId}</th>
            <td>{data.packageName}</td>
            <td>{data.price}</td>
            <td>{data.discount}</td>
            {
                !props.isGen ? <td>
                    <button onClick={() => handleClick(`/admin/packages/EditPackage/${data._id}`)} type="button" class="btn btn-success m-">Update</button>
                    <button onClick={deletePackage} type="button" class="btn btn-danger m-1">Delete</button>
                </td> : <React.Fragment />
            }
        </tr>
    </React.Fragment>);
}

export default PackageActions;
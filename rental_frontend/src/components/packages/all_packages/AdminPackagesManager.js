import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import CreatePackage from "../create_package/CreatePackage";
import UpdatePackage from '../update_package/UpdatePackage';
import AllPackagesContainer from './package_views/admin/AllPackagesContainer';

const AdminPackagesManager = () => {
    return (<React.Fragment>
        <Router>
            <Switch>
                <Route
                    path="/admin/packages/EditPackage/:id"
                    component={(props) => (
                        <UpdatePackage {...props} key={window.location.pathname} />
                    )}
                />
                <Route path="/admin/packages/CreatePackage">
                    <CreatePackage />
                </Route>
                <Route path="/">
                    <AllPackagesContainer />
                </Route>
            </Switch>
        </Router>
    </React.Fragment>);
}

export default AdminPackagesManager;
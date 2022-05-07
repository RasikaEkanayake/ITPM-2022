import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


import AdminPackagesManager from '../packages/all_packages/AdminPackagesManager';


const AdminContainer = () => {
    return (<React.Fragment>
        <div className="container">
            <Router>
                <Switch>
                   
                    <Route path="/admin/packages">
                        <AdminPackagesManager />
                    </Route>
                   
                    <Route exact path="/">

                    </Route>
                </Switch>
            </Router>
        </div>
    </React.Fragment>);
}

export default AdminContainer;
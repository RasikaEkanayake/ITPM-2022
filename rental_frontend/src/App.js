import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AdminContainer from './components/admin/AdminContainer';
import Footer from './components/shared/footer/Footer';
import AllPackagesForUser from './components/packages/all_packages/package_views/user/AllPackagesForUser';

import ViewMorePackage from './components/packages/all_packages/ViewMorePackage';

import AdminNavbar from './components/shared/navigators/AdminNavbar';

function App() {

  return (
    <React.Fragment>
      <Router>
        <AdminNavbar />
        <Switch>
          <Route path="/admin">
            <AdminContainer />
          </Route>
          <Route
            path="/packages/:id"
            component={(props) => (
              <ViewMorePackage {...props} key={window.location.pathname} />
            )}
          />
       
          <Route exact path="/">
            <AllPackagesForUser />
            
          </Route>
        </Switch>
      </Router>

      <Footer />

    </React.Fragment>
  );
}

export default App;


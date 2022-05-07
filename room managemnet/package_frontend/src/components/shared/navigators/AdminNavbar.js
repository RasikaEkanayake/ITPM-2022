import React from 'react';

import styled from 'styled-components';


import { useHistory } from "react-router-dom";


const AdminNavbar = () => {
    const history = useHistory();
    const handleClick = (path) => {
        history.push(path);
    }

    return (
        
<NavbarContainer>


        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav text-center">
                    <li onClick={() => handleClick("/")} className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li onClick={() => handleClick("/admin/packages/")} className="nav-item active">
                        <a className="nav-link" href="#">Packages</a>
                    </li>
                   
                    
                </ul>
            </div>
        </nav >
        
        </NavbarContainer>
        
        
    );
}

export default AdminNavbar;
const NavbarContainer = styled.div` 

background: black;

.nav-link{

color:white !important;

&:hover{

    background-image: linear-gradient(to right top, black, black);

    height: 30px;  /* this doesn't work */

   

}

 ul{

     margin-left="67%"

 }

`;

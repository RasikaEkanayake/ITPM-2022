import React  from 'react';
import styled from 'styled-components';
import logo from './logo7.png';
const Header = ()=>{
    return(
    
      
        <MainContainer>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="/">
            <img src="https://www.eatlogos.com/alphabet_logos/png/vector_blue_a_letter_logo.png" width="30" height="30" class="d-inline-block align-top" alt="" />
            Elite Tourism
          </a>
        </nav>
       
        </MainContainer>
    )
    
}
export default Header;
//main container
    
const MainContainer = styled.header`
  
background-color:black;
  width:100%;
  height: 4rem;
  h3{
    transform:translate(-140%,-50%);
    color:#66a3ff;
    text-shadow: 0 0 1px white, 0 0 1px black;
    font-weigth:3;
    position:absolute;
    top:6%;
    font: 2rem Helvetica (sans-serif);
    left:60%;
  }
 
  h6{
    transform:translate(92%,-340%);
    color:#66a3ff;
   
  }
  h7{
  
    color:#1a75ff;
    transform:translate(79%,-340%);
  }
`;

import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonContainer} from './Button'
import styled from 'styled-components';

class Navbar extends Component {
    render() {
        return (
           <Navwarp className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
              {/* https://www.iconfinder.com/icons/1243689/call_phone_iconCreative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
               <Link to='/'>
                   <img src={logo} alt="some " className="navbar-brand" />
               </Link>
               <ul className="navbar-nav align-items-center">
                   <li className="nav-item ml-5">
                       <Link to="/" className="nav-link">products</Link>
                   </li>
               </ul>
               <Link to="/cart" className="ml-auto">
                   <ButtonContainer>
                       <i className="fas fa-cart-plus" />
                       my cart
                   </ButtonContainer>
               </Link>
           </Navwarp>
        )
    }
}

const Navwarp = styled.nav`
text-transform: capitalize;
font-size: 20px;

`;



export default Navbar;
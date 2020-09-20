import React from 'react';
import '../Home/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavLink, Button } from 'react-bootstrap';
import './HeaderWhite.css';

const HeaderWhite = () => {
    return (
        <Nav style={{float:"right",paddingLeft:"120px", flexWrap:"nowrap", paddingRight:"120px"}} className="top-nav">
            <NavLink className="items logo-black" href="#"><img src={require("../../image/logo.png")} alt="logo"/></NavLink>
            <NavLink className="items" href="#">News</NavLink>
            <NavLink className="items" href="#">Destination</NavLink> 
            <NavLink className="items" href="#">Blog</NavLink> 
            <NavLink className="items" href="#">Contact</NavLink>
            <Button style={{backgroundColor: "#F9A51A", width: "104px", height: "44px", border: "none"}}>Login</Button>
        </Nav>
    );
};

export default HeaderWhite;
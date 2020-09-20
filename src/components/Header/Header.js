import React from 'react';
import '../Home/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavLink, Button } from 'react-bootstrap';


const Header = () => {
    return (
        <Nav style={{paddingLeft:"120px", flexWrap:"nowrap", paddingRight:"120px"}} className="top-nav">
            <NavLink className="items logo" href="#"><img src={require("../../image/logo1.png")} alt="logo"/></NavLink>
            <input className="search" type="text" placeholder="Search your Destination..." />
            <NavLink style={{color: "white"}} className="items" href="#">News</NavLink>
            <NavLink style={{color: "white"}} className="items" href="#">Destination</NavLink> 
            <NavLink style={{color: "white"}} className="items" href="#">Blog</NavLink> 
            <NavLink style={{color: "white"}} className="items" href="#">Contact</NavLink>
            <Button style={{backgroundColor: "#F9A51A", width: "104px", height: "44px", border: "none"}}>Login</Button>
        </Nav>
    );
};

export default Header;
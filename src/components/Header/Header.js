import React, { useContext } from 'react';
import '../Home/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <Nav style={{paddingLeft:"120px", flexWrap:"nowrap", paddingRight:"120px"}} className="top-nav">
            <Link className="items logo" href="#"><img src={require("../../image/logo1.png")} alt="logo"/></Link>
            <input className="search" type="text" placeholder="Search your Destination..." />
            <Link className="items white" to="#">News</Link>
            <Link className="items white" to="/home">Destination</Link> 
            <Link className="items white" to="#">Blog</Link> 
            <Link className="items white" to="#">Contact</Link>
            <Link className="items white" href="#"><small>{loggedInUser.email}</small></Link>
            <Button onClick={() => setLoggedInUser({})} style={{backgroundColor: "#F9A51A", width: "104px", height: "44px", border: "none"}}>{loggedInUser.email?"Logout":"Login"}</Button>
        </Nav>
    );
};

export default Header;
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
            <Link className="items logo" to="/home"><img src={require("../../image/logo1.png")} alt="logo"/></Link>
            <input className="search" type="text" placeholder="Search your Destination..." />
            <Link className="items white" to="/home">News</Link>
            <Link className="items white" to="/home">Destination</Link> 
            <Link className="items white" to="/home">Blog</Link> 
            <Link className="items white" to="/login">Contact</Link>
            <p className="items white" href="#"><small>{loggedInUser.name ? loggedInUser.name : loggedInUser.email}</small></p>
            <Link to="/login"><Button onClick={() => setLoggedInUser({})} style={{backgroundColor: "#F9A51A", width: "104px", height: "44px", border: "none"}}>{loggedInUser.email?"Logout":"Login"}</Button></Link>
        </Nav>
    );
};

export default Header;
import React, { useContext } from 'react';
import '../Home/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button } from 'react-bootstrap';
import './HeaderWhite.css';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const HeaderWhite = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <Nav style={{float:"right",paddingLeft:"120px", flexWrap:"nowrap", paddingRight:"120px", color: "black"}} className="top-nav">
            <Link className="items logo-black" to="/home"><img src={require("../../image/logo.png")} alt="logo"/></Link>
            <Link className="items black" to="/home">News</Link>
            <Link className="items black" to="/home">Destination</Link> 
            <Link className="items black" to="/home">Blog</Link> 
            <Link className="items black" to="/login">Contact</Link>
            <p className="items black" to="/home"><small>{loggedInUser.email}</small></p>
            <Button onClick={() => setLoggedInUser({})} style={{backgroundColor: "#F9A51A", width: "104px", height: "44px", border: "none"}}>{loggedInUser.email?"Logout":"Login"}</Button>
        </Nav> 
    );
};

export default HeaderWhite;
import React, { useState } from 'react';
import './ChooseCategory.css';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const slideObj = [
    {key: 'coxsBazar', description: 'Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south.', name: "Cox's Bazar",},
    {key: 'sreemangal', description: 'Sreemangal Tourism: Tripadvisor has 703 reviews of Sreemangal Hotels, Attractions, and Restaurants making it your best Sreemangal resource.', name: "Sreemangal",},
    {key: 'sundarban', description: 'The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India\'s state of West Bengal to the Baleswar River in Bangladesh.', name: "Sundarban",}
];

const ChooseCategory = () => {
    
    const clickCox = () => {
        document.getElementById("Cox").style.display="block";
        document.getElementById("Sreemangal").style.display="none";
        document.getElementById("Sundarban").style.display="none";
    };

    const clickSree = () => {
        document.getElementById("Cox").style.display="none";
        document.getElementById("Sreemangal").style.display="block";
        document.getElementById("Sundarban").style.display="none";
    };

    const clickSundar = () => {
        document.getElementById("Cox").style.display="none";
        document.getElementById("Sreemangal").style.display="none";
        document.getElementById("Sundarban").style.display="block";
    };
    
    return (
        <Container style={{ width: "100%"}} className="main-content"> 
            <Row>
                <Col id="Cox" md={4}>
                    <h1>{slideObj[0].name}</h1>
                    <p>{slideObj[0].description}</p>
                    <button className="booking-btn"><Link className="booking-link" to="/details">Booking</Link> <FontAwesomeIcon icon={faArrowRight} /></button>
                </Col>
                <Col id="Sreemangal" md={4}>
                    <h1>{slideObj[1].name}</h1>
                    <p>{slideObj[1].description}</p>
                    <button className="booking-btn">Booking <FontAwesomeIcon icon={faArrowRight} /></button>
                </Col>
                <Col id="Sundarban" md={4}>
                    <h1>{slideObj[2].name}</h1>
                    <p>{slideObj[2].description}</p>
                    <button className="booking-btn">Booking <FontAwesomeIcon icon={faArrowRight} /></button>
                </Col>

                <Col md={8} className="row-slider">
                    <div onClick={clickCox} className="slider one"><h4>Cox's Bazar</h4></div>
                    <div onClick={clickSree} className="slider two"><h4>Sreemangal</h4></div>
                    <div onClick={clickSundar} className="slider three"><h4>Sundarban</h4></div>
                </Col>
            </Row>
            {/* <div style={{marginLeft:"32%"}}>
                <button className="round-btn" ><FontAwesomeIcon className="arrow" icon={faAngleLeft} /></button>
                <button className="round-btn" ><FontAwesomeIcon className="arrow" icon={faAngleRight} /></button>
            </div> */}
        </Container>
    );
};

export default ChooseCategory;
import React, { useState } from 'react';
import fakedata from '../../fakedata';
import { Container,Row, Col } from 'react-bootstrap';
import './Hotel.css';
import { useParams } from 'react-router-dom';
import Map from './Map';

const Hotel = () => {
    const hotelLocation = useParams();
    const [hotels, setHotel] = useState(fakedata);
    const filterHotels = hotels.filter(hotel => (hotel.location === hotelLocation.key));

    return (
        <Container style={{paddingTop:"10%", paddingBottom:"50px"}}>
            <Row>
                <Col md={6}>
                    <p>525 stays April 13-17 3 guests</p>
                    <h4>Stay in {filterHotels[0].location}</h4>
                    {
                    filterHotels.map(hotel => (
                        <div style={{marginBottom:'20px'}} className="hotel-details">
                            <Row>
                                <Col className="hotel-img" md={6}><img src={hotel.url} alt=""/></Col>
                                <Col md={6}>
                                    <h5>{hotel.name}</h5>
                                    <p className="description-color">
                                        {hotel.description}<br/>
                                        <small>{hotel.facilities}<br/>
                                        {hotel.cancelation}</small>
                                    </p>
                                    <p>
                                        <span style={{marginRight: "15px"}} className="star"><img src={require("../../icon/star_1_.png")} alt=""/>{hotel.rating}</span>
                                        <span>{hotel.price}/night</span>
                                    </p>
                                </Col>
                            </Row>  
                        </div>  
                    ))}
                </Col>
                <Col md={6}>
                    <Map />
                </Col>
            </Row>            
        </Container>
    );
};

export default Hotel;
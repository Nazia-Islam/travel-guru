import React, { useState } from 'react';
import fakedata from '../../fakedata';
import { Container,Row, Col } from 'react-bootstrap';
import './Hotel.css';

const Hotel = () => {
    const [hotels, setHotel] = useState(fakedata);
    console.log(hotels);
    const filterHotels = hotels.filter(hotel => (hotel.location === "Cox's Bazar"));
    console.log(filterHotels);
    return (
        <Container style={{paddingTop:"10%"}}>
            <p>525 stays April 13-17 3 guests</p>
            <h4>Stay in {filterHotels[0].location}</h4>
            <Row>
                <Col md={6}>
                {
                filterHotels.map(hotel => (
                    <div style={{marginBottom:'20px'}} classNmae="hotel-details">
                        <Row>
                            <Col className="hotel-img" md={6}><img src={hotel.url} alt=""/></Col>
                            <Col md={6}>
                                <h5>{hotel.name}</h5>
                                <p>
                                    {hotel.description}<br/>
                                    {hotel.facilities}<br/>
                                    {hotel.cancelation}
                                </p>
                                <p>
                                    <span className="star"><img src={require("../../icon/star_1_.png")} alt=""/>{hotel.rating}</span>
                                    <span>{hotel.price}/night</span>
                                </p>
                                
                                
                            </Col>
                        </Row>  
                    </div>  
                ))
            }
                </Col>
                <Col md={6}></Col>
            </Row>
            
        </Container>
    );
};

export default Hotel;
import React, { useState } from 'react';
import Header from '../Header/Header';
import { Container, Row, Col, FormControl, Form, Button } from 'react-bootstrap';
import './CategoryDetails.css';
import '../ChooseCategory/ChooseCategory.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams, Link, useHistory } from 'react-router-dom';
import fakeData from '../../fakedata';

const CategoryDetails = () => {
    const {key} = useParams();
    //console.log(key);
    const [category, setCategory] = useState(fakeData);
    const location = category.find(k => k.key === key);
    //console.log(location);
    const[selectedStartDate, setSelectedStartDate] = useState(null);
    const[selectedEndDate, setSelectedEndDate] = useState(null);

    const history = useHistory();
    console.log(history)
    const checkAuthenticity = () => {
        history.push(`/`+key+`/hotels`);
        
    };

    return (
        <div className="bg">
            <div className="bg-shade">
                <Header></Header>
                <Container style={{ width: "100%"}} className="main-content">
                    <Row>
                        <Col md={5}>
                            <h1>{location.name}</h1>
                            <p>{location.description}</p>
                        </Col>
                        <Col md={7} style={{padding:"0px 40px"}}>
                            <div className="destination-form">
                                <Form id="destinationForm">
                                    <Form.Group>
                                        <Form.Label>Origin</Form.Label>
                                        <Form.Control type="text" placeholder="Dhaka" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Destination</Form.Label>
                                        <Form.Control type="text" placeholder={location.name} />
                                    </Form.Group>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Label className="la">From</Form.Label>
                                            <DatePicker className="datepicker form-control" minDate={new Date()} selected={selectedStartDate} onChange={date => setSelectedStartDate(date)} />
                                        </Col>
                                        <Col md={6}>
                                            <Form.Label className="la">To</Form.Label>
                                            <DatePicker className="datepicker form-control" selected={selectedEndDate} onChange={date => setSelectedEndDate(date)} />
                                        </Col>
                                    </Row>
                                    <Link to={`/`+key+`/hotels`}>
                                        <Button onClick={checkAuthenticity} className="button" type="submit">Start Booking</Button>
                                    </Link>
                                </Form>
                            </div>   
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default CategoryDetails;
import React, { useState } from 'react';
import Header from '../Header/Header';
import { Container, Row, Col, FormControl, Form, Button } from 'react-bootstrap';
import './CategoryDetails.css';
import '../ChooseCategory/ChooseCategory.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CategoryDetails = (props) => {
    console.log(props);
    const[selectedStartDate, setSelectedStartDate] = useState(null);
    const[selectedEndDate, setSelectedEndDate] = useState(null);

    return (
        <div className="bg">
            <div className="bg-shade">
                <Header></Header>
                <Container style={{ width: "100%"}} className="main-content">
                    <Row>
                        <Col md={5}>
                            <h1>Cox's Bazar</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus saepe omnis voluptates iusto laborum in maiores consectetur harum doloribus odit necessitatibus, officiis sapiente ratione ipsa, vel tempora, eos illum nulla!</p>
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
                                        <Form.Control type="text" placeholder="Cox's Bazar" />
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
                                    <Button className="button" type="submit">Start Booking</Button>
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
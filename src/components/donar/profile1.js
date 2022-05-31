import React, { Component } from 'react';
import {Container, Card, Button, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";




const Profile1 = () => {




    return (
        <Container style={{marginTop: "5rem", marginLeft: "30rem"}}>
            <Card style={{ width: '25rem' }}>
                
                <Card.Body>
                    <Card.Title>User Details</Card.Title>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Text>
                        <Row>
                            <Col>
                                Name:
                                <br />
                                Email:
                            </Col>
                            <Col>
                                Meghana Busam
                                meghanabusam07@gmail.com
                            </Col>
                        </Row>
                    </Card.Text>
                    <Link to="/donatedList">
                        <Button variant="primary" style={{marginLeft:"4rem"}}>Donations</Button>
                    </Link>
            
                    <Link to="/displayCards1">
                        <Button variant="primary" style={{marginLeft:"3rem"}}>Cart items</Button>
                    </Link>
                </Card.Body>
            </Card>

            
            


            
        </Container>
    );
}

export default Profile1;

import React, { Component } from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
const DisplayCards1 = () => {
    return (
        <Container style={{marginTop: "7rem"}}>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">B1</Button>
                            <Button variant="primary" style={{marginLeft:"50px"}}>B2</Button>
                            <Button variant="primary" style={{marginLeft:"50px"}}>B3</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">B1</Button>
                            <Button variant="primary" style={{marginLeft:"50px"}}>B2</Button>
                            <Button variant="primary" style={{marginLeft:"50px"}}>B3</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">B1</Button>
                            <Button variant="primary" style={{marginLeft:"50px"}}>B2</Button>
                            <Button variant="primary" style={{marginLeft:"50px"}}>B3</Button>
                        </Card.Body>
                    </Card>
                </Col>
    
            </Row>
        </Container>
    );
}

export default DisplayCards1;

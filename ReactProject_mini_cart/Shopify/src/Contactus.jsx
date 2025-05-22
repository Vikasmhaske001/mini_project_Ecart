import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Contactus() {
    return (
        <Container className="py-5 min-vh-100 d-flex justify-content-center align-items-center bg-light">
            <Card className="p-4 shadow-sm" style={{ maxWidth: '500px', width: '100%' }}>
                <Card.Body>
                    <h3 className="text-center text-primary mb-4">📞 Contact Us</h3>
                    <Row className="mb-3">
                        <Col xs={4} className="fw-bold">Email:</Col>
                        <Col xs={8}><a href="mailto:support@chorbazar.com">vaibhavthorat@gmail.com</a></Col>
                    </Row>
                    <Row>
                        <Col xs={4} className="fw-bold">Mobile:</Col>
                        <Col xs={8}><a href="tel:+919876543210">+91-9876543210</a></Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Contactus;

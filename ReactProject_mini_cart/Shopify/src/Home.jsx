import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Home() {
    return (
        <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light bg-gradient">
            <Row className="w-100 justify-content-center">
                <Col xs={12} md={10} lg={8}>
                    <Card className="text-center shadow-lg">
                        <Card.Body className="p-5">
                            <Card.Title as="h1" className="mb-4 text-primary fw-bold fs-1">
                                Welcome to Shopify 🛒
                            </Card.Title>
                            <Card.Text className="text-secondary fs-5 mb-3">
                                Discover a world of affordable books and treasures at Shopify!
                            </Card.Text>
                            <Card.Text className="text-secondary fs-5 mb-4">
                                Whether you're looking to buy or just browse, we've got something for everyone.
                            </Card.Text>
                            <Link to="/ListProduct">
                                <Button variant="primary" size="lg">
                                    Start Shopping
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;

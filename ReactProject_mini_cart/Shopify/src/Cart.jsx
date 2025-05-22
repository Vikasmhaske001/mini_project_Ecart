import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Table, Button, Image, Card } from 'react-bootstrap';

function Cart() {
    const location = useLocation();
    const navigate = useNavigate();
    const order = location.state || [];

    const totalPrice = order.reduce((acc, item) => acc + item.price, 0);

    return (
        <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light bg-gradient py-5">
            <Row className="w-100 justify-content-center">
                <Col xs={12} md={10} lg={8}>
                    <Card className="shadow-lg">
                        <Card.Body>
                            <Card.Title className="text-center text-primary fs-2 mb-4">
                                🛒 Your Shopping Cart 🛒
                            </Card.Title>

                            {order.length === 0 ? (
                                <div className="text-center text-muted">Your cart is empty 😢</div>
                            ) : (
                                <>
                                    <div className="table-responsive">
                                        <Table bordered hover responsive className="align-middle text-center">
                                            <thead className="table-primary text-uppercase">
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Category</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {order.map((item) => (
                                                    <tr key={item.id}>
                                                        <td>
                                                            <Image
                                                                src={item.imgUrl}
                                                                alt={item.name}
                                                                roundedCircle
                                                                width={56}
                                                                height={56}
                                                                className="object-fit-cover"
                                                            />
                                                        </td>
                                                        <td className="fw-semibold">{item.name}</td>
                                                        <td className="text-success fw-bold">₹{item.price}</td>
                                                        <td className="text-primary">{item.categories.catName}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>

                                    <div className="text-end mt-4 fs-5 fw-bold text-primary">
                                        Total: ₹{totalPrice}
                                    </div>

                                    <div className="text-center mt-4">
                                        <Button variant="success" size="lg">
                                            Proceed to Checkout
                                        </Button>
                                    </div>
                                </>
                            )}

                            <div className="text-center mt-4">
                                <Button variant="secondary" onClick={() => navigate('/ListProduct')}>
                                    Back to Products
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Cart;

import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { Logincontext } from './loginprovider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';

function Login() {
    const navigate = useNavigate();
    const { setlogged } = useContext(Logincontext);
    const [error, setError] = React.useState('');

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                setError('');
                const response = await axios.post('https://localhost:7004/Login', values);
                const token = response.data.token;
                localStorage.setItem('token', token);
                setlogged(true);
                navigate('/ListProduct');
            } catch (err) {
                setError('Login failed. Please check your username and password.');
            }
        }
    });

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Row className="w-100 justify-content-center">
                <Col xs={12} sm={8} md={6} lg={4}>
                    <Card className="shadow">
                        <Card.Body>
                            <Card.Title className="text-center mb-4">Welcome Back 🚀</Card.Title>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={formik.handleSubmit}>
                                <Form.Group className="mb-3" controlId="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="username"
                                        placeholder="Enter your username"
                                        value={formik.values.username}
                                        onChange={formik.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100">
                                    Log In
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;

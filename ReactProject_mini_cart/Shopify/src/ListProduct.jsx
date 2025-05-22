import React, { useContext, useEffect, useState } from 'react';
import {
    Container,
    Row,
    Col,
    Table,
    Button,
    Form,
    Card,
    Image
} from 'react-bootstrap';
import { useNavigate, Navigate } from 'react-router-dom';
import { Logincontext } from './loginprovider';
import axios from 'axios';

function ListProduct() {
    const navigate = useNavigate();
    const { logged } = useContext(Logincontext);

    if (!logged) {
        alert("Access denied. Please login first.");
        return <Navigate to="/" />;
    }

    const [category, setCategory] = useState([]);
    const [product, setProduct] = useState([]);
    const [filterProduct, setFilter] = useState([]);
    const [order, setOrder] = useState([]);

    // useEffect(() => {
    //     fetch("https://localhost:7004/api/Category")
    //         .then((res) => res.json())
    //         .then((result) => setCategory(result));
    // }, []);

    // useEffect(() => {
    //     fetch("https://localhost:7004/api/Product")
    //         .then((res) => res.json())
    //         .then((result) => {
    //             setProduct(result);
    //             setFilter(result);
    //         });
    // }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');

        axios.get("https://localhost:7004/api/Category", {
            headers: {
                Authorization: `Bearer ${token}`  // <-- Corrected here
            }
        })
            .then((res) => setCategory(res.data))
            .catch((err) => console.error("Category fetch error:", err));
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');

        axios.get("https://localhost:7004/api/Product", {
            headers: {
                Authorization: `Bearer ${token}`  // <-- Corrected here
            }
        })
            .then((res) => {
                setProduct(res.data);
                setFilter(res.data);
            })
            .catch((err) => console.error("Product fetch error:", err));
    }, []);


    const handleProduct = (e) => {
        const selectedCategoryId = e.target.value;
        if (selectedCategoryId === "Select") {
            setProduct(filterProduct);
        } else {
            const filtered = filterProduct.filter(
                (data) => selectedCategoryId === String(data.categories.id)
            );
            setProduct(filtered);
        }
    };

    const cart = (data, event) => {
        if (!event.target.checked) {
            const updated = order.filter((val) => val.id !== data.id);
            setOrder(updated);
        } else {
            setOrder([...order, data]);
        }
    };

    return (
        <Container fluid className="min-vh-100 bg-light bg-gradient py-5">
            <Row className="justify-content-center">
                <Col xs={12} lg={10}>
                    <Card className="shadow-lg mb-4">
                        <Card.Body>
                            <Card.Title className="text-center text-primary fs-2 mb-4">
                                Product Catalog
                            </Card.Title>

                            <Row className="align-items-center justify-content-center mb-4">
                                <Col xs={12} md={6} lg={4}>
                                    <Form.Select
                                        aria-label="Category selector"
                                        onChange={handleProduct}
                                    >
                                        <option value="Select">All Categories</option>
                                        {category.map((data) => (
                                            <option key={data.id} value={data.id}>
                                                {data.catName}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Col>
                                <Col xs="auto" className="mt-3 mt-md-0">
                                    <Button
                                        variant="warning"
                                        onClick={() => navigate('/Cart', { state: order })}
                                    >
                                        Go To Cart
                                    </Button>
                                </Col>
                            </Row>

                            <div className="table-responsive">
                                <Table bordered hover responsive className="align-middle text-center">
                                    <thead className="table-primary">
                                        <tr>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Category</th>
                                            <th>Add to Cart</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product.map((data) => (
                                            <tr key={data.id}>
                                                <td>
                                                    <Image
                                                        src={data.imgUrl}
                                                        alt={data.name}
                                                        roundedCircle
                                                        width={56}
                                                        height={56}
                                                        className="object-fit-cover"
                                                    />
                                                </td>
                                                <td className="fw-semibold">{data.name}</td>
                                                <td className="text-success fw-bold">₹{data.price}</td>
                                                <td className="text-primary">{data.categories.catName}</td>
                                                <td>
                                                    <Form.Check
                                                        type="checkbox"
                                                        onChange={(e) => cart(data, e)}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>

                    <div className="d-grid gap-2">
                        <Button
                            variant="warning"
                            size="lg"
                            onClick={() => navigate("/Cart", { state: order })}
                        >
                            Cart
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ListProduct;

import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { id, name, price, description, img } = service;

  const handleCheckout = (event) => {
    navigate("/checkout");
  };
  return (
    <>
      <Col className="text-center border-2 border-light" md={4}>
        <Card border="primary" style={{ width: "100%", height: "100%" }}>
          {console.log(img)}
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <div>
            <p className="bg-dark text-white"> {price}</p>
          </div>
          <div>
            <Button
              onClick={() => handleCheckout(id)}
              className="w-50 text-center mb-2"
              variant="primary"
            >
              Buy now
            </Button>
          </div>
        </Card>
      </Col>
    </>
  );
};

export default Service;

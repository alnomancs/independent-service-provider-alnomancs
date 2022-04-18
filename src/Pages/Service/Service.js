import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Service = ({ service }) => {
  const navigate = useNavigate();

  const { id, name, price, description, img } = service;

  let params = useParams();

  const handleCheckout = (event) => {
    navigate("/checkout:" + id);
  };
  return (
    <>
      <Col className="text-center " md={4}>
        <Card
          className="shadow border-5 border-light"
          style={{ width: "100%", height: "100%" }}
        >
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

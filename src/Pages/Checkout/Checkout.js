import React from "react";
import { Button, Form } from "react-bootstrap";

const Checkout = () => {
  return (
    <div className="w-50 mx-auto m-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Address</Form.Label>
          <Form.Control type="text" placeholder="Enter your address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter your phone number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your card number</Form.Label>
          <Form.Control type="text" placeholder="Enter your IBAN" />
        </Form.Group>

        <Button variant="primary">Submit</Button>
      </Form>
    </div>
  );
};

export default Checkout;

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";

const SignUp = () => {
  // const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordlBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleAgreed = (event) => {
    setChecked(event.target.checked);
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (user) {
    console.log("user", user);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/login");
  };

  return (
    <div className="w-75 mx-auto mt-5 shadow-lg border rounded-3 p-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name:</Form.Label>
          <Form.Control
            onBlur={handleNameBlur}
            type="text"
            placeholder="Your Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordlBlur}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onChange={handleAgreed}
            type="checkbox"
            label="I agree to the terms and conditions"
          />
        </Form.Group>
        <p>
          {error?.message}
          {updateError?.message}
        </p>

        <Button disabled={!checked} variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;

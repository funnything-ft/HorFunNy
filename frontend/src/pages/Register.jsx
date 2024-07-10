import React from "react";
import { Form, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import UIInput from "../components/UIInput";
import UIButton from "../components/UIButton";

function Register() {
  return (
    <Container className='flex items-center justify-center min-h-screen sm:w-1/2 md:w-1/3 lg:w-1/4"'>
      <div>
        <h1 className="text-7xl font-bold mb-5 text-center">Register</h1>
        <p className="text-center">
          Create your account, it takes less than a minute.
        </p>
        <p className="text-center">
          If you already have an account <Link to="/login">login</Link>.
        </p>
        <Form method="post">
          <UIInput
            label="Username"
            id="username"
            type="text"
            placeholder="Username"
            className="mb-4"
          />
          <UIInput
            label="Password"
            id="password"
            type="password"
            placeholder="Password"
            className="mb-4"
          />
          <UIInput
            label="Confirm Password"
            id="confirm-password"
            type="password"
            placeholder="Re-enter password"
            className="mb-4"
          />
          <div className="flex justify-center">
            <UIButton
              className="w-2/3"
              variant="primary"
              size="lg"
              type="submit"
            >
              Sign up
            </UIButton>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default Register;

import React from "react";
import { Form } from "react-router-dom";
import { Container } from "react-bootstrap";

import UIInput from "../components/UIInput";
import UIButton from "../components/UIButton";

function Login() {
  return (
    <Container className='flex items-center justify-center min-h-screen sm:w-1/2 md:w-1/3 lg:w-1/4"'>
      <div>
        <h1 className="text-7xl font-bold mb-5 text-center">Login</h1>
        <p className="text-center">Welcome back! Login to access HorFunNy.</p>
        <p className="text-center">Did you forget your password!</p>
        <Form>
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
          <div className="flex justify-center">
            <UIButton className="w-2/3" variant="primary" size="lg">
              Sign In
            </UIButton>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default Login;

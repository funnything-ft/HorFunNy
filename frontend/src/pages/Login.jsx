import React from "react";
import { Form, json, redirect, useActionData } from "react-router-dom";
import { Container } from "react-bootstrap";
import apiInstance from "../utils/axios";
import UIInput from "../components/UIInput";
import UIButton from "../components/UIButton";

function Login() {
  const data = useActionData();
  const errorMessage = data?.data.message;
  return (
    <Container className='flex items-center justify-center min-h-screen sm:w-1/2 md:w-1/3 lg:w-1/4"'>
      <div>
        <h1 className="text-7xl font-bold mb-5 text-center">Login</h1>
        <p className="text-center">Welcome back! Login to access HorFunNy.</p>
        <p className="text-center">Did you forget your password!</p>
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
          {errorMessage && (
            <p className="text-danger text-center">{errorMessage}</p>
          )}
          <div className="flex justify-center">
            <UIButton
              className="w-2/3"
              variant="primary"
              size="lg"
              type="submit"
            >
              Sign In
            </UIButton>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default Login;

export async function action({ request, params }) {
  const data = await request.formData();

  const credential = {
    username: data.get("username"),
    password: data.get("password"),
  };

  return apiInstance
    .post("login/", credential)
    .then((response) => {
      if (response.status === 200) {
        return redirect("/");
      } else if (response.status === 401) {
        console.log(response.data.message);
        return response;
      }
    })
    .catch((err) => {
      throw json({ message: err.response.data.message }, { status: 500 });
    });
}

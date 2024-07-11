import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import axios from "axios";

const Register = () => {
  const [formFields, setFormFields] = useState({
    f_name: "",
    l_name: "",
    email: "",
    password: "",
    dob: "",
  });

  // destructure
  const { f_name, l_name, email, password, dob } = formFields;

  const handleChange = (e) => {
    setFormFields((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  //   handle phone input
  const [ph, setPH] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const myData = {
      f_name,
      l_name,
      email,
      password,
      dob,
      phone: ph,
    };

    const response = await axios.post(
      "http://localhost:3001/api/user/register-user",
      myData
    );

    console.log(response.data);
  };

  return (
    <>
      <div className="p-4 rounded-2 bg-white  col-xl-3 mx-auto col-lg-6 col-md-8">
        <Form>
          <Form.Label htmlFor="" className="label">
            First Name
          </Form.Label>
          <Form.Control
            value={f_name}
            onChange={handleChange}
            name="f_name"
            type="text"
          />
          <Form.Label htmlFor="" className="label">
            Last Name
          </Form.Label>
          <Form.Control
            value={l_name}
            onChange={handleChange}
            name="l_name"
            type="text"
          />
          <Form.Label htmlFor="" className="label">
            Email
          </Form.Label>
          <Form.Control
            value={email}
            onChange={handleChange}
            name="email"
            type="text"
          />
          <Form.Label htmlFor="" className="label">
            Password
          </Form.Label>
          <Form.Control
            value={password}
            onChange={handleChange}
            name="password"
            type="password"
          />
          <Form.Label htmlFor="" className="label">
            Dob
          </Form.Label>
          <Form.Control
            value={dob}
            onChange={handleChange}
            name="dob"
            type="date"
          />
          <Form.Label htmlFor="" className="label">
            Phone
          </Form.Label>
          <PhoneInput
            className="w-100"
            name="phone"
            country={"pk"}
            placeholder="+92 315 7452475"
            value={ph}
            onChange={(ph) => setPH(ph)}
          />
          <p className="xs-small text-center fw-medium text-secondary my-2">
            By clicking Agree & Join or Continue, you agree to the{" "}
            <span className="text-primary">LinkedIn User Agreement</span> ,
            Privacy Policy, and{" "}
            <span className="text-primary">Cookie Policy.</span>
          </p>
          <Button
            onClick={handleRegister}
            variant="primary"
            className="w-100 rounded-pill py-2 px-3 fw-medium mb-3"
          >
            Agree and Join
          </Button>
        </Form>
        <p className="text-center text-sm">
          Already on LinkedIn ?{" "}
          <Link
            to="/sign-in"
            className="text-primary fw-bold text-decoration-none"
          >
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;

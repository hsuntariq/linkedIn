import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  logUserIn,
  regUser,
  userReset,
} from "../../features/authentication/authSlice";
import { MutatingDots } from "react-loader-spinner";
import toast from "react-hot-toast";
const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, userLoading, userError, userSuccess, userMessage } =
    useSelector((state) => state.auth);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  //   handle the state change

  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
    }

    if (userSuccess) {
      toast.success(`Welcome ${user?.f_name}`);
    }

    if (user) {
      navigate("/");
    }

    dispatch(userReset());
  }, [userError, dispatch, user, userSuccess]);

  // destructure
  const { email, password } = formFields;

  const handleChange = (e) => {
    setFormFields((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const myData = {
      email,
      password,
    };

    dispatch(logUserIn(myData));
  };

  if (userLoading) {
    return (
      <div
        style={{ height: "80vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#6A9BD1"
          secondaryColor="#6A9BD1"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <>
      <div className="p-4 rounded-2 bg-white  col-xl-3 mx-auto col-lg-6 col-md-8">
        <Form>
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

          <p className="xs-small text-center fw-medium text-secondary my-2">
            By clicking Agree & Join or Continue, you agree to the{" "}
            <span className="text-primary">LinkedIn User Agreement</span> ,
            Privacy Policy, and{" "}
            <span className="text-primary">Cookie Policy.</span>
          </p>
          <Button
            variant="primary"
            className="w-100 rounded-pill py-2 px-3 fw-medium mb-3"
            onClick={handleLogin}
          >
            Sign In
          </Button>
        </Form>
        <p className="text-center text-sm">
          New to LinkedIn ?{" "}
          <Link
            to="/sign-up"
            className="text-primary fw-bold text-decoration-none"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};

export default LogIn;

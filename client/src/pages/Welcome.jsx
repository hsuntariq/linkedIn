import React, { useEffect } from "react";
import Header from "../components/Nav";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FrontPage from "../components/userProfile/FrontPage";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/sign-in");
    }
  }, [user]);

  return (
    <>
      <Header />
      <FrontPage />
    </>
  );
};

export default Welcome;

import React from "react";
import Register from "../components/auth/Register";
import LogIn from "../components/auth/LogIn";

const SignUp = () => {
  return (
    <>
      <div className="sign-up-page">
        <header className="col-xl-7 mx-auto px-5 py-2 ">
          <img
            width={150}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/2560px-LinkedIn_2021.svg.png"
            alt=""
          />
        </header>
        <h2 className="text-center text-md  ">
          Make the most of your professional life
        </h2>
        <div className="d-flex justify-content-center my-4">
          <LogIn />
        </div>
      </div>
    </>
  );
};

export default SignUp;

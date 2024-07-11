import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="d-flex align-items-center " style={{ height: "90vh" }}>
      <div className="container d-flex flex-column items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold display-1">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-5">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            rel="noopener noreferrer"
            to="/"
            className="px-5 bg-primary text-white text-decoration-none py-3 fw-semibold rounded-pill my-5"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

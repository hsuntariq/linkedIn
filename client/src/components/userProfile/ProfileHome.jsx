import React from "react";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowRight,
} from "react-icons/fa";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import PostCard from "./PostCard";

const ProfileHome = () => {
  return (
    <>
      <div className="card my-4 border-0">
        <div className="p-4">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            perferendis magnam corporis alias, quae commodi?
          </p>
        </div>
        <hr />

        <p className="fw-medium text-secondary text-center">
          Show all details <FaArrowRight />
        </p>
      </div>

      <div className="card">
        <div className="d-flex p-4 justify-content-between align-items-center">
          <h3>Page posts</h3>
          <div className="d-flex gap-3 fs-3">
            <TfiArrowCircleLeft />
            <TfiArrowCircleRight />
          </div>
        </div>
        <div className="p-4">
          <div className="d-flex">
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHome;

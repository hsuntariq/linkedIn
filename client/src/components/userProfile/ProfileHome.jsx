import React from "react";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowRight,
} from "react-icons/fa";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import PostCard from "./PostCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileHome = () => {
  const { id } = useParams();
  const { allUsers, userLoading } = useSelector((state) => state.auth);

  const myUser = allUsers.find((item, index) => {
    return item?._id == id;
  });

  return (
    <>
      <div className="card my-4 border-0">
        <div className="p-4">
          <h2>About</h2>
          <p>{myUser?.about ? myUser?.about : "Nothing to show"}</p>
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
          <div
            className="overflow-x-scroll d-flex gap-4 mini-posts"
            style={{ overflowX: "scroll" }}
          >
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

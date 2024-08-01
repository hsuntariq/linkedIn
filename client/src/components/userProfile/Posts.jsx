import { Button, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { TiThumbsOk } from "react-icons/ti";
import { IoIosSend } from "react-icons/io";
import { BiRepost } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import moment from "moment";
const Posts = ({ caption, user_id, content, createdAt }) => {
  const { postLoading } = useSelector((state) => state.post);

  if (postLoading) {
    return (
      <div className="card p-4 my-4">
        <div className="d-flex align-items-center gap-2">
          <Skeleton width={60} height={60} circle />
          <div className="">
            <Skeleton width={100} />
            <Skeleton width={300} />
            <div className="d-flex gap-1">
              <Skeleton width={20} />
              <Skeleton width={20} />
            </div>
          </div>
        </div>
        <Skeleton count={3} height={10} width={"100%"} />
        <Skeleton height={400} width={"100%"} />
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <Skeleton circle width={20} height={20} />
            <Skeleton circle width={20} height={20} />
            <Skeleton circle width={20} height={20} />
          </div>
          <Skeleton width={50} height={20} />
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <Skeleton width={100} height={30} />
          <Skeleton width={100} height={30} />
          <Skeleton width={100} height={30} />
          <Skeleton width={100} height={30} />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="card my-2">
        <div className="card-header bg-white">
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-3 align-items-center">
              <img
                width={50}
                height={50}
                className="rounded-circle"
                src="http://res.cloudinary.com/dwtsjgcyf/image/upload/v1721887342/kcctwnx0ofxdv09drasw.jpg"
                alt=""
              />

              <div className="d-flex flex-column justify-content-start align-align-items-start">
                <Typography
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                  }}
                >
                  Ali Khan
                </Typography>
                <Typography
                  className="text-bg-secondary-subtle"
                  style={{
                    fontSize: "0.8rem",
                  }}
                >
                  Lorem ipsum dolor, sit amet , tenetur.
                </Typography>
                <a
                  className="text-primary text-decoration-none"
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                  }}
                >
                  Visit My Profile
                </a>
                <Typography
                  style={{
                    fontSize: "0.8rem",
                  }}
                  className="text-secondary"
                >
                  {moment(createdAt).fromNow()}
                </Typography>
              </div>
            </div>
            <Button
              style={{
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
            >
              + Follow
            </Button>
          </div>
          <p className="text-secondary mt-3 mb-1">{caption}</p>
        </div>
        {content.split("/")[4] == "image" ? (
          <img width={"100%"} height={600} src={content} alt="" />
        ) : (
          <video width={"100%"} height={600} controls src={content}></video>
        )}
        <div className="d-flex justify-content-between p-2">
          <p className="p-0 m-0">532 likes</p>
          <p className="p-0 m-0">4 comments</p>
        </div>
        <hr className="m-0 p-0" />
        <div className="d-flex justify-content-between p-3 ">
          <div className="d-flex fs-5 justify-content-between w-100">
            <div
              style={{ cursor: "pointer" }}
              className="d-flex align-items-center gap-2 react"
            >
              <TiThumbsOk />
              <p className="m-0 p-0">React</p>
            </div>
            <div
              style={{ cursor: "pointer" }}
              className="d-flex align-items-center gap-2 react"
            >
              <FaRegCommentDots />
              <p className="m-0 p-0">Comment</p>
            </div>
            <div
              style={{ cursor: "pointer" }}
              className="d-flex align-items-center gap-2 react"
            >
              <BiRepost />
              <p className="m-0 p-0">Repost</p>
            </div>
            <div
              style={{ cursor: "pointer" }}
              className="d-flex align-items-center gap-2 react"
            >
              <IoIosSend />
              <p className="m-0 p-0">Share</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;

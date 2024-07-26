import { Button, Typography } from "@mui/material";
import React from "react";

const Posts = ({ caption, user_id, content }) => {
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
                >
                  16h
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
      </div>
    </>
  );
};

export default Posts;

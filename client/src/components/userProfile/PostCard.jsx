import React from "react";
import { BiChat, BiLike, BiRepost, BiSend } from "react-icons/bi";
import { PiDotsThreeBold } from "react-icons/pi";

const PostCard = () => {
  return (
    <>
      <div className="card border-0 shadow p-3" style={{ width: "500px" }}>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <img
              width={50}
              height={50}
              className="rounded-circle"
              src="https://media.licdn.com/dms/image/C4D0BAQFvneORoERVkw/company-logo_100_100/0/1630512029493/hec_pakistan_logo?e=1730332800&v=beta&t=5PRpG-qlIb6XxdgDrM3jSMrO_P2tFgi8Fdu2yTbXmVE"
              alt=""
            />
            <div className="info">
              <h6>HEC Pakistan</h6>
              <p className="text-sm text-secondary m-0">109,379 followers</p>
              <p className="text-secondary m-0 text-sm">3d</p>
            </div>
          </div>
          <PiDotsThreeBold />
        </div>
        <p className="text-sm">
          Before applying to any professional degree programme, make sure it is
          approved by the relevant council. For more info: hec.gov.pk/site/HEIs
        </p>
        <img
          width={"70%"}
          height={300}
          style={{ objectFit: "contain" }}
          className="d-block mx-auto"
          src="https://media.licdn.com/dms/image/D4D22AQEIptJ2RnwOIw/feedshare-shrink_800/0/1722141448185?e=1725494400&v=beta&t=hPTpHGm5z0PgYk0EC-xYGDDUGBAKvw48Jfvz9i3iKiI"
          alt=""
        />
        <hr />
        <div className="d-flex w-100 justify-content-between fs-5 align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <BiLike />
            <h6 className="text-secondary">Like</h6>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <BiChat />
            <h6 className="text-secondary">Comment</h6>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <BiRepost />
            <h6 className="text-secondary">Repost</h6>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <BiSend />
            <h6 className="text-secondary">Send</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;

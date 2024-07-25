import React from "react";
import { HiUserAdd, HiBookmark } from "react-icons/hi";
import { useSelector } from "react-redux";
import UserSidebar from "./UserSidebar";
import AddPost from "./AddPost";

const FrontPage = () => {
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-xl-3">
            <UserSidebar />
          </div>
          <div className="col-xl-6">
            <AddPost />
          </div>
          <div className="col-xl-3"></div>
        </div>
      </div>
    </>
  );
};

export default FrontPage;

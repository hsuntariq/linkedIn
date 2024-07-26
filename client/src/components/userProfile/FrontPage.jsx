import React from "react";
import { HiUserAdd, HiBookmark } from "react-icons/hi";
import { useSelector } from "react-redux";
import UserSidebar from "./UserSidebar";
import AddPost from "./AddPost";
import Posts from "./Posts";

const FrontPage = () => {
  const { posts } = useSelector((state) => state.post);
  return (
    <>
      <div className="container p-5">
        <div className="row gap-3">
          <div className="col-xl-3">
            <UserSidebar />
          </div>
          <div className="col-xl-6">
            <AddPost />
            {posts?.map((item, index) => {
              return <Posts key={index} {...item} />;
            })}
          </div>
          <div className="col-xl-3"></div>
        </div>
      </div>
    </>
  );
};

export default FrontPage;

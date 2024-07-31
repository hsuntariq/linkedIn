import React, { useEffect } from "react";
import { HiUserAdd, HiBookmark } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import UserSidebar from "./UserSidebar";
import AddPost from "./AddPost";
import Posts from "./Posts";
import toast from "react-hot-toast";
import { getPostData, postReset } from "../../features/posts/postSlice";
import Skeleton from "react-loading-skeleton";
import UserList from "./UserList";

const FrontPage = () => {
  const { posts, postError, postSuccess, postLoading, postMessage } =
    useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    if (postError) {
      toast.error(postMessage);
    }

    dispatch(getPostData());

    dispatch(postReset());
  }, []);

  let test = true;

  return (
    <>
      <div className="container p-5">
        <div className="row gap-3">
          <div className="col-xl-2 col-lg-4">
            <UserSidebar />
          </div>
          <div className="col-xl-6 col-lg-5">
            <AddPost />

            {posts?.map((item, index) => {
              return <Posts key={index} {...item} />;
            })}
          </div>
          <div className="col-xl-3 col-lg-3">
            <UserList />
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontPage;

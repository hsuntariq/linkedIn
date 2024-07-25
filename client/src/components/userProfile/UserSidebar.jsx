import React from "react";
import { HiBookmark, HiUserAdd } from "react-icons/hi";
import { useSelector } from "react-redux";

const UserSidebar = () => {
  const { user, userLoading } = useSelector((state) => state.auth);

  return (
    <>
      <div className="card">
        <div className="card-header user-profile-header"></div>
        <div className="card-body text-center p-0">
          <div className="p-2 pb-0">
            <div className="user-image">
              <img
                width={70}
                height={70}
                className="rounded-circle d-block mx-auto"
                src={
                  user?.image
                    ? user?.image
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
                }
                alt=""
              />
            </div>
            <h5 className="text-capitalize">
              {user?.f_name} {user?.l_name}{" "}
            </h5>
            <p className="text-secondary m-0 p-0">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <hr className="m-0 p-0" />
          <div className="d-flex justify-content-between p-2 pb-0 align-items-center">
            <div className="left text-start ">
              <p className="text-secondary p-0 m-0 text-sm fw-medium">
                Connections
              </p>
              <p className="fw-medium p-0 m-0">Grow your network</p>
            </div>
            <HiUserAdd size={25} />
          </div>
          <hr className="m-0 p-1" />
          <div className="d-flex">
            <HiBookmark size={25} />
            <p className="text-secondary text-sm fw-medium">Saved items</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSidebar;

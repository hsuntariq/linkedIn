import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { FaHelicopter, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../features/authentication/authSlice";

const UserList = () => {
  const { allUsers } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, []);
  return (
    <>
      <div className="card p-3">
        <div className="d-flex justify-content-between align-items-center">
          <h6>Add to your feed</h6>
          <FaHelicopter />
        </div>
        {allUsers?.map((item, index) => {
          return (
            <>
              <div className="d-flex gap-3 my-3">
                <img
                  width={50}
                  height={50}
                  className="rounded-circle"
                  src={
                    item?.image
                      ? item?.image
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
                  }
                  alt=""
                />
                <div className="d-flex flex-column ">
                  <h6 className="text-capitalize">
                    {item?.f_name} {item?.l_name}
                  </h6>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus, quisquam?
                  </p>
                  <Button variant="outlined" className="rounded-pill">
                    <FaPlus /> Follow
                  </Button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default UserList;

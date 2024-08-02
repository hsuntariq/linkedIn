import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { FaHelicopter, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../features/authentication/authSlice";
import { Link } from "react-router-dom";

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
        {allUsers
          ?.slice(allUsers?.length - 3, allUsers?.length)
          ?.map((item, index) => {
            return (
              <>
                <div className="d-flex gap-3 my-1">
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
                    <Link
                      className="text-decoration-none text-dark"
                      to={`/profile/${item?._id}`}
                    >
                      <h6 className="text-capitalize">
                        {item?.f_name} {item?.l_name}
                      </h6>
                    </Link>
                    <p className="text-sm">Lorem ipsum dolor sit am</p>
                    <Button
                      variant="outlined"
                      className="rounded-pill align-self-start"
                    >
                      <FaPlus /> Follow
                    </Button>
                  </div>
                </div>
              </>
            );
          })}
      </div>

      <div
        className="card border-0 my-2 rounded-2"
        style={{ overflow: "hidden", position: "sticky", top: "2rem" }}
      >
        <img
          width={"100%"}
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          alt=""
          className=""
        />
      </div>
    </>
  );
};

export default UserList;

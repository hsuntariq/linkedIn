import React from "react";
import { FaLink, FaPlus, FaTheRedYeti } from "react-icons/fa";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { Button } from "@mui/material";

const ProfileHeader = () => {
  return (
    <>
      <div className="card border-0 p-0">
        <img
          src="https://media.licdn.com/dms/image/D563DAQH6fwqFD9TJUA/image-scale_191_1128/0/1721284511957/hec_pakistan_cover?e=1723100400&v=beta&t=Ch6krZlAyDyzXU9ooP0R4aOTcvwrDY0PCqUBtJiaoWA"
          alt=""
        />
        <div className="info p-4">
          <img
            width={150}
            height={150}
            style={{ marginTop: "-100px" }}
            src="https://media.licdn.com/dms/image/C4D0BAQFvneORoERVkw/company-logo_200_200/0/1630512029493/hec_pakistan_logo?e=1730332800&v=beta&t=XvlRGMiWVX-iLE9QNVE5nQejQhfSrg31nVi7upSBExo"
            alt=""
            className="profile"
          />
          <h2>HEC Pakistan</h2>
          <p>
            Facilitating Institutions of Higher Learning to Serve as an Engine
            of Socio-Economic Development of Pakistan
          </p>
          <p className="text-secondary text-sm">
            Higher Education Islamabad 109K followers 1K-5K employees
          </p>
          <div className="d-flex align-items-center gap-2">
            <Button variant="contained" className="rounded-pill">
              <FaPlus /> Follow
            </Button>
            <Button variant="outlined" className="rounded-pill d-flex gap-2">
              Visit Website <FaLink />
            </Button>
            <div className="border border-1 border-dark d-flex justify-content-center align-items-center p-2 rounded-circle">
              <PiDotsThreeOutlineFill />
            </div>
          </div>
        </div>
        <hr className="m-1 p-0" />
        <ul className="d-flex m-0 p-0 px-3 list-unstyled gap-4 fw-medium text-secondary">
          <li
            className="p-2 text-success"
            style={{ borderBottom: "2px solid green" }}
          >
            Home
          </li>
          <li className="p-2">About</li>
          <li className="p-2">Posts</li>
          <li className="p-2">Jobs</li>
          <li className="p-2">People</li>
        </ul>
      </div>
    </>
  );
};

export default ProfileHeader;

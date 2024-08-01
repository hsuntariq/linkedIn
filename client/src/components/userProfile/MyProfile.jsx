import React from "react";

import ProfileHeader from "./ProfileHeader";
import ProfileHome from "./ProfileHome";

const MyProfile = () => {
  return (
    <>
      <div className="container col-lg-7 mx-auto">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <ProfileHeader />
            <ProfileHome />
          </div>
          <div className="col-xl-3 col-lg-4">
            <h1>Hello2</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;

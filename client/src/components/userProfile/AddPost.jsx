import React, { useState } from "react";
import { useSelector } from "react-redux";
import UploadPostModal from "./UploadPostModal";

const AddPost = () => {
  const { user } = useSelector((state) => state.auth);
  const [caption, setCaption] = useState("");
  return (
    <>
      <div className="card p-3">
        <div className="d-flex gap-2 align-items-center">
          <img
            width={60}
            height={60}
            className="rounded-circle"
            src={
              user?.image
                ? user?.image
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
            }
            alt="User image"
          />
          <input
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            type="text"
            className="form-control rounded-pill p-2 border-dark post-input "
            placeholder="Start a post,try writing with AI"
          />
        </div>
        <div className="d-flex mt-3 justify-content-between">
          <UploadPostModal caption={caption} />

          <div className="d-flex align-items-center gap-1 post-items">
            <img
              width={30}
              height={30}
              src="https://www.lrmhc.org/wp-content/uploads/2017/08/event.png"
              alt=""
            />
            <h6 className="m-0 p-0">Events</h6>
          </div>

          <div className="d-flex align-items-center gap-1 post-items">
            <img
              width={30}
              height={30}
              src="https://cdn-icons-png.freepik.com/256/5975/5975096.png?semt=ais_hybrid"
              alt=""
            />
            <h6 className="m-0 p-0">Article</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPost;

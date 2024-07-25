import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-hot-toast";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "90vh",
  bgcolor: "background.paper",
};

export default function UploadPostModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [contentPreview, setContentPreview] = useState(null);
  const [content, setContent] = useState(null);
  const [contentLoading, setContentLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const [checkType, setCheckType] = useState(null);

  const handleContentChange = (e) => {
    const file = e.target.files[0];
    const contentURL = URL.createObjectURL(file);
    if (file.type.startsWith("image")) {
      setContentPreview(contentURL);
      setCheckType("image");
      setIsDisabled(false);
      setContent(file);
    } else if (file.type.startsWith("video")) {
      setContentPreview(contentURL);
      setCheckType("video");
      setIsDisabled(false);
      setContent(file);
    } else {
      setCheckType(null);
      setContentPreview(null);
      toast.error("Please select an image or a video");
      setIsDisabled(true);
      setContent(null);
    }
  };

  const contentUpload = async () => {
    const data = new FormData();
    data.append("file", content);
    data.append("upload_preset", "ls8frk5v");

    let api =
      checkType == "image"
        ? "https://api.cloudinary.com/v1_1/dwtsjgcyf/image/upload"
        : "https://api.cloudinary.com/v1_1/dwtsjgcyf/video/upload";

    const response = await axios.post(api, data);
    console.log(response);
  };

  const handleContentUpload = async () => {
    const dataURL = await contentUpload();
  };

  return (
    <div>
      <div
        onClick={handleOpen}
        className="d-flex align-items-center gap-1 post-items"
      >
        <img
          width={30}
          height={30}
          src="https://s.cafebazaar.ir/images/icons/com.pb.coolgallery-5d44f77a-bec9-4033-90bf-f033800d567b_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize"
          alt=""
        />
        <h6 className="m-0 p-0">Media</h6>
      </div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style} className="col-xl-8 mx-auto col-lg-9 col-11">
          <div
            style={{ borderRadius: "50px", height: "100%" }}
            className="card rounded-0 border-0"
          >
            <div className="card-header">
              <div className="d-flex justify-content-between align-items-center">
                <h5>Editor</h5>
                <IoMdClose size={25} />
              </div>
            </div>
            <div
              style={{ background: "#F8FAFD", height: "100%" }}
              className="card-body d-flex flex-column justify-content-center align-items-center gap-2"
            >
              {checkType == "image" ? (
                <>
                  <img
                    width={200}
                    src={
                      contentPreview
                        ? contentPreview
                        : "https://static.licdn.com/aero-v1/sc/h/8ho1mw83gfmgiq4yr8f8wkjmh"
                    }
                    alt=""
                  />
                </>
              ) : (
                <>
                  {checkType == null ? (
                    <>
                      <img
                        width={200}
                        src="https://static.licdn.com/aero-v1/sc/h/8ho1mw83gfmgiq4yr8f8wkjmh"
                        alt=""
                      />
                    </>
                  ) : (
                    <>
                      <video src={contentPreview} controls width={200}></video>
                    </>
                  )}
                </>
              )}

              <Typography variant="h6">Select files to begin</Typography>
              <Typography variant="p">
                Share Images or a single video in your post
              </Typography>
              <div className="position-relative">
                <input
                  onChange={handleContentChange}
                  type="file"
                  className="position-absolute z-3 opacity-0 bottom-0"
                />
                <Button variant="contained" className="rounded-pill">
                  Upload from computer
                </Button>
              </div>
            </div>
            <div className="card-footer">
              <Button
                onClick={handleContentUpload}
                disabled={isDisabled}
                className="rounded-pill d-block ms-auto"
                variant="contained"
              >
                Next
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

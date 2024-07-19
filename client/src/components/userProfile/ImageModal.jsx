import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Input } from "@mui/material";
import { FiPlusCircle } from "react-icons/fi";
import toast from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ImageModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file.type.startsWith("image")) {
      const imageURL = URL.createObjectURL(file);
      setImagePreview(imageURL);
    } else {
      toast.error("Please select an image");
    }
  };

  return (
    <div>
      <img
        onClick={handleOpen}
        src="https://cdn.icon-icons.com/icons2/589/PNG/256/icontexto-user-web20-linkedin_icon-icons.com_55367.png"
        height={30}
        width={30}
        alt=""
        className="rounded-circle"
        style={{ cursor: "pointer" }}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {imagePreview ? (
              <>
                <img
                  className="d-block mx-auto rounded-circle"
                  height={200}
                  width={200}
                  src={imagePreview}
                  alt=""
                />
              </>
            ) : (
              <>
                <img
                  className="d-block mx-auto rounded-circle"
                  height={200}
                  width={200}
                  src="https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/user-244.png"
                  alt=""
                />
              </>
            )}
            <FiPlusCircle
              className="position-absolute"
              style={{
                right: "30%",
                top: "70%",
              }}
              size={30}
            />
            <input
              type="file"
              style={{
                right: "0%",
                top: "70%",
                opacity: "0",
              }}
              onChange={handleImageChange}
              className="position-absolute"
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

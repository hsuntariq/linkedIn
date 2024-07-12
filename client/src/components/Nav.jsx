import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { BiPointer } from "react-icons/bi";
import { PiBagSimpleFill } from "react-icons/pi";
import { MdGames } from "react-icons/md";
import { MdLaptopMac } from "react-icons/md";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import ImageModal from "./userProfile/ImageModal";
function Header() {
  const { user } = useSelector((state) => state.auth);
  return (
    <Navbar expand="lg" className="col-xl-7 mx-auto ">
      <Container>
        <Navbar.Brand href="#home">
          <img
            width={100}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/2560px-LinkedIn_2021.svg.png"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3 align-items-lg-center align-items-md-start">
            <Link className="text-dark text-decoration-none" to="/article">
              <div className="d-flex align-items-center gap-lg-1 flex-lg-column flex-md-row gap-md-3">
                <IoNewspaperOutline />
                <p className="text-secondary m-0 p-0 xs-small">Articles</p>
              </div>
            </Link>
            <Link className="text-dark text-decoration-none" to="/people">
              <div className="d-flex align-items-center gap-lg-1 flex-lg-column flex-md-row gap-md-3">
                <IoIosPeople />
                <p className="text-secondary m-0 p-0 xs-small">People</p>
              </div>
            </Link>
            <Link className="text-dark text-decoration-none" to="/learning">
              <div className="d-flex align-items-center gap-lg-1 flex-lg-column flex-md-row gap-md-3">
                <BiPointer />
                <p className="text-secondary m-0 p-0 xs-small">Learning</p>
              </div>
            </Link>
            <Link className="text-dark text-decoration-none" to="/jobs">
              <div className="d-flex align-items-center gap-lg-1 flex-lg-column flex-md-row gap-md-3">
                <PiBagSimpleFill />
                <p className="text-secondary m-0 p-0 xs-small">Jobs</p>
              </div>
            </Link>
            <Link className="text-dark text-decoration-none" to="/games">
              <div className="d-flex align-items-center gap-lg-1 flex-lg-column flex-md-row gap-md-3">
                <MdGames />
                <p className="text-secondary m-0 p-0 xs-small">Games</p>
              </div>
            </Link>
            <Link className="text-dark text-decoration-none" to="/">
              <div className="d-flex border border-top-0 border-bottom-0 px-4 align-items-center flex-column">
                <MdLaptopMac />
                <p className="text-secondary m-0 p-0 xs-small">Get the app</p>
              </div>
            </Link>
            {!user ? (
              <>
                <Link className="text-dark text-decoration-none" to="/sign-up">
                  {" "}
                  <p className="text-dark fw-medium m-0">Join now</p>
                </Link>
                <Link className="text-dark text-decoration-none" to="/sign-in">
                  <Button className="bg-transparent border border-primary rounded-pill p-2 px-4 text-primary fw-medium">
                    Sign In
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <div className="d-flex align-items-center">
                  <ImageModal />
                  <Typography className="text-md">{user?.f_name}</Typography>
                </div>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

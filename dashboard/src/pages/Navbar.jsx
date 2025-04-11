import React from "react";
import "../pages/Navbar.css";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { Outlet, Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div className="Navbar">
        <div className="Navbar-Header">
          <LocalLibraryIcon fontSize="large" />
          <div className="Navbar-Title">Your Local Library</div>
        </div>

        <div className="Navbar-Links-Home" id="Navbar-Links">
          <Link to="/">HOME</Link>
        </div>
        <div className="Navbar-Links-Add" id="Navbar-Links">
          <Link to="/addbooks">ADD BOOKS</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;

import React from "react";
import "./SideNav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function SideNav() {
  return (
    <div className="sideNav">
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />
      <div className="sideNav_Buttons">
        <button className="sideNav_Button">
          {/* Icons */}
          <HomeIcon className="span_icon" />
          <span className="span_title">Home</span>
        </button>
        <button className="sideNav_Button">
          {/* Icons */}
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className="sideNav_Button">
          {/* Icons */}
          <ExploreIcon />
          <span>Explore</span>
        </button>
        <button className="sideNav_Button">
          {/* Icons */}
          <SlideshowIcon />
          <span>Reels</span>
        </button>
        <button className="sideNav_Button">
          {/* Icons */}
          <ChatIcon />
          <span>Message</span>
        </button>
        <button className="sideNav_Button">
          {/* Icons */}
          <FavoriteBorderIcon />
          <span>Notification</span>
        </button>
        <button className="sideNav_Button">
          {/* Icons */}
          <AddCircleOutlineIcon />
          <span>create</span>
        </button>
      </div>
      <div className="sideNav_ButtonsMore">
        <button className="sideNav_Button">
          {/* Icons */}
          <MenuIcon />
          <span>More</span>
        </button>
      </div>
    </div>
  );
}

export default SideNav;

{/* Icons */}import React from "react";
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
        className="sidenav__logo hidden md:block"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />
      <div className="sideNav_Buttons md:bg-red-800">
        <button className="sideNav_Button">
          
          <HomeIcon className="span_icon" />
          <span className="span_title md:block hidden">Home</span>
        </button>
        <button className="sideNav_Button">
          
          <SearchIcon />
          <span className="md:block hidden">Search</span>
        </button>
        <button className="sideNav_Button">
          
          <ExploreIcon />
          <span className="md:block hidden">Explore</span>
        </button>
        <button className="sideNav_Button">
          
          <SlideshowIcon />
          <span className="md:block hidden">Reels</span>
        </button>
        <button className="sideNav_Button">
          
          <ChatIcon />
          <span className="md:block hidden">Message</span>
        </button>
        <button className="sideNav_Button">
          
          <FavoriteBorderIcon />
          <span className="md:block hidden">Notification</span>
        </button>
        <button className="sideNav_Button">
          
          <AddCircleOutlineIcon />
          <span className="md:block hidden">create</span>
        </button>
      </div>
      <div className="sideNav_ButtonsMore md:block hidden">
        <button className="sideNav_Button">
          
          <MenuIcon />
          <span className="md:block hidden">More</span>
        </button>
      </div>
    </div>
  );
}

export default SideNav;

import React from "react";
import "./sidebar.style.scss";
import { NavLink } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import LanguageIcon from "@material-ui/icons/Language";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import ChatIcon from "@material-ui/icons/Chat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="nav-heading">
        <img alt="" src="https://img.icons8.com/nolan/32/coronavirus.png" />
        <h4>Corona Virus</h4>
      </div>

      <ul className="nav-list">
        <li>
          <HomeIcon />
          <NavLink activeClassName={"active"} to="/home">
            home
          </NavLink>
        </li>
        <li>
          <LanguageIcon />
          <NavLink activeClassName={"active"} to="/country">
            country
          </NavLink>
        </li>
        <li>
          <AnnouncementIcon />
          <NavLink activeClassName={"active"} to="/news">
            news
          </NavLink>
        </li>
        <li>
          <ChatIcon />
          <NavLink activeClassName={"active"} to="/chat">
            chat
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

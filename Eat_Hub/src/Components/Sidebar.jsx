// src/Components/Sidebar.jsx
import React, { useState } from "react";
import "./Sidebar.css";
import leftPanelIcon from "../assets/leftpanelicon.png";
import {
  FiHome,
  FiDroplet,
  FiBriefcase,
  FiUser,
  FiGrid,
  FiGift,
  FiHeart,
  FiLogOut,
} from "react-icons/fi";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const menuItems = [
    { id: "home", label: "Home", icon: <FiHome size={20} /> },
    { id: "home-food", label: "Home Food", icon: <FiDroplet size={20} /> },
    { id: "restaurant", label: "Restaurant", icon: <FiBriefcase size={20} /> },
    { id: "chefs", label: "Chefs", icon: <FiUser size={20} /> },
    { id: "dashboards", label: "Dashboards", icon: <FiGrid size={20} /> },
    { id: "promotions", label: "Promotions", icon: <FiGift size={20} /> },
    { id: "invite", label: "Invite Friends", icon: <FiUser size={20} /> },
    { id: "best", label: "Best of Eat Hub", icon: <FiHeart size={20} /> },
    { id: "account", label: "Account", icon: <FiUser size={20} /> },
  ];

  const bottomItem = {
    id: "logout",
    label: "Logout",
    icon: <FiLogOut size={20} />,
    isBottom: true,
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {/* Toggle Button */}
      <div className="sidebar-toggle-desktop">
        <div
          className="custom-toggle-icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <img
            src={leftPanelIcon}
            alt={isCollapsed ? "Open Sidebar" : "Close Sidebar"}
            className="custom-icon"
          />
        </div>
      </div>

      {/* Menu */}
      <nav className="sidebar-menu">
        {/* Scrollable Area for Main Items */}
        <div className="menu-items-scroll-area">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`sidebar-item ${
                activeItem === item.id ? "active" : ""
              }`}
              onClick={() => setActiveItem(item.id)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {!isCollapsed && (
                <span className="sidebar-label">{item.label}</span>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Item (Logout) - Always visible, outside the scrollable area */}
        <div
          key={bottomItem.id}
          className={`sidebar-item ${bottomItem.isBottom ? "bottom-item" : ""}`}
          onClick={() => setActiveItem(bottomItem.id)}
        >
          <span className="sidebar-icon">{bottomItem.icon}</span>
          {!isCollapsed && (
            <span className="sidebar-label">{bottomItem.label}</span>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
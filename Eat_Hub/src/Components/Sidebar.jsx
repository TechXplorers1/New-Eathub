import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Sidebar.css";
import { FiHome, FiDroplet, FiBriefcase, FiUser, FiGrid, FiGift, FiHeart, FiLogOut, FiMenu, FiX } from "react-icons/fi";

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
    { id: "logout", label: "Logout", icon: <FiLogOut size={20} />, isBottom: true },
  ];

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-toggle">
        <Button
          variant="light"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2"
        >
          {isCollapsed ? <FiMenu size={20} /> : <FiX size={20} />}
        </Button>
      </div>

      <div className="sidebar-brand">
        <span className="brand-logo">E</span>
        <span className="brand-name">atHub</span>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`sidebar-item ${activeItem === item.id ? "active" : ""} ${item.isBottom ? "bottom-item" : ""}`}
            onClick={() => setActiveItem(item.id)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            {!isCollapsed && <span className="sidebar-label">{item.label}</span>}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
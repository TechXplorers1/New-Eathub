import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Notifications.css";
import NotificationIcon from "../assets/notification.png";

const Notifications = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const notifications = [
    {
      id: 1,
      icon: "🔥",
      title: "50% Off Your Next Order!",
      message:
        "Use code 50TREAT to get 50% off your next order of $15 or more. Don’t miss out!",
      time: "15m ago",
    },
    {
      id: 2,
      icon: "🛵",
      title: "Your order is on its way",
      message:
        "Your order from The Golden Spoon is out for delivery and should arrive soon.",
      time: "1h ago",
    },
    {
      id: 3,
      icon: "🍜",
      title: "New restaurant added",
      message:
        'Check out "The Noodle Bar", a new Vietnamese place just added near you.',
      time: "3h ago",
    },
  ];

  return (
    <>
      <Button
        variant="link"
        className="eh-icon-btn position-relative"
        onClick={() => setShowSidebar(true)}
      >
        <img src={NotificationIcon} alt="notification" width="20" />
        <span className="notif-dot"></span>
      </Button>

      <div className={`notif-sidebar ${showSidebar ? "show" : ""}`}>
        <div className="notif-header">
          <h5>Notifications</h5>
          <button
            className="notif-close-btn"
            onClick={() => setShowSidebar(false)}
          >
            ✕
          </button>
        </div>

        <div className="notif-list">
          {notifications.map((item) => (
            <div className="notif-item" key={item.id}>
              <div className="notif-icon">{item.icon}</div>
              <div className="notif-content">
                <p className="notif-title">{item.title}</p>
                <p className="notif-message">{item.message}</p>
                <p className="notif-time">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showSidebar && (
        <div className="notif-overlay" onClick={() => setShowSidebar(false)} />
      )}
    </>
  );
};

export default Notifications;
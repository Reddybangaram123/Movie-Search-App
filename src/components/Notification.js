// src/components/Notification.js
import React, { useEffect } from "react";
import "./Notification.css";

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Auto-close after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="notification">
      <p>{message}</p>
    </div>
  );
};

export default Notification;
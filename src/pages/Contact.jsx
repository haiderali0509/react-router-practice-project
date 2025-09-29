import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="contact ">Contact Page</h1>
      <div className="contact-buttons">
        <button onClick={() => navigate("form")}>Fill Form</button>
        <button onClick={() => navigate("info")}>Get Info</button>
      </div>
    </div>
  );
}

export default Contact;

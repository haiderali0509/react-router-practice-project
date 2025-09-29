import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div >
      <h2 className="not-found">404 | Page Not Found</h2>
      <button className="not-found-button"
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home Page
      </button>
    </div>
  );
}

export default NotFound;

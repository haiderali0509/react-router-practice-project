import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div>
      <h1>An error occurred.</h1>
      <p>{error.message || "Unknown error"}</p>
      <button
        className="btn-secondary"
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home Page
      </button>
    </div>
  );
}

export default Error;

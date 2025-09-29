import React from "react";
import { Outlet } from "react-router-dom";

function JobsLayout() {
  return (
    <div className="joblayout w-screen flex flex-col gap-3">
      <h2 className="text-2xl font-bold">Job Openings</h2>
      {/* <p>List of current job opening in our company. </p> */}
      <Outlet />
    </div>
  );
}

export default JobsLayout;

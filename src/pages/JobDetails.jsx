import React from "react";
import { useLoaderData } from "react-router-dom";

function JobDetails() {
  const JobsDetailsData = useLoaderData();
  return (
    <div className="job-detail-card">
      <h2 className="job-title">
        <b>Job Title: </b>
        {JobsDetailsData.title}
      </h2>
      <p>
        <b>Location: </b>
        {JobsDetailsData.location}
      </p>
      <p>
        <b>Salary: </b>
        {JobsDetailsData.salary}
      </p>
      <p>
        <b>Experience: </b>
        {JobsDetailsData.experience}
      </p>
      <p> {JobsDetailsData.remote ? "Remote" : "Onsite"}</p>
      <p>
        <b>Description: </b>
      </p>
      <p> {JobsDetailsData.description}</p>
      <button className="apply-btn btn-secondary">Apply</button>
    </div>
  );
}

export default JobDetails;
// export const JobDetailsLoader = async ({ params }) => {
//   const id = params.id;
//   const res = await fetch("http://localhost:5000/jobs/" + id);
//   if (!res.ok) {
//     throw new Error("Could not found job details");
//   }
//   return res.json();
// };
export const JobDetailsLoader = async ({ params }) => {
  const id = parseInt(params.id);
  const BIN_ID = import.meta.env.VITE_JSONBIN_BIN_ID;
  const API_KEY = import.meta.env.VITE_JSONBIN_API_KEY;

  const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
    headers: {
      "X-Master-Key": API_KEY,
    },
  });

  if (!res.ok) {
    throw new Error("Could not fetch jobs data");
  }

  const data = await res.json();
  const jobs = data.record.jobs;
  const found = jobs.find((job) => job.id === id);
  if (!found) throw new Error("Job not found");

  return found;
};

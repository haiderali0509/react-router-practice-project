import React from "react";
import { Link, useLoaderData } from "react-router-dom";
function Jobs() {
  const jobsData = useLoaderData();
  return (
    <div className="flex gap-2 flex-wrap ">
      {jobsData.map((job) => {
        return (
          <Link
            to={`/jobs/${job.id}`}
            key={job.id}
            className="bg-neutral-200 rounded-md p-5 job"
          >
            <h2 className="text-xl font-bold">{job.title}</h2>
            <p className="text-sm ">{job.company}</p>
            <p className="text-sm">{job.location}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Jobs;

// export const JobLoader = async () => {
//   const res = await fetch("http://localhost:5000/jobs");
//   if (!res.ok) {
//     throw new Error("Could not found job list");
//   }
//   const data = await res.json();
//   console.log(data);
//   return data;
// };
export const JobLoader = async () => {
  const BIN_ID = import.meta.env.VITE_JSONBIN_BIN_ID;
  const API_KEY = import.meta.env.VITE_JSONBIN_API_KEY;
  // console.log(import.meta.env.VITE_JSONBIN_API_KEY);
  // console.log(API_KEY);
  // console.log(import.meta.env.VITE_TEST_VARIABLE);
  const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
    headers: {
      "X-Master-Key": API_KEY,
    },
  });

  if (!res.ok) {
    throw new Error("Could not fetch job list");
  }

  const data = await res.json();
  return data.record.jobs;
};

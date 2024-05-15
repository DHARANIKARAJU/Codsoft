import React, { useEffect, useState } from 'react';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;

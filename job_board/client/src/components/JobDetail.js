import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/${id}`)
      .then(response => response.json())
      .then(data => setJob(data))
      .catch(error => console.error('Error fetching job:', error));
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.salary}</p>
    </div>
  );
};

export default JobDetail;

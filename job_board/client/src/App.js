import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/job/:id" element={<JobDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

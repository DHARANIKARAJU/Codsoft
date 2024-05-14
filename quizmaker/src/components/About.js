// src/components/AboutPage.js
import React from 'react';
import NavBar from './NavBar';
import Grid from '@mui/material/Grid';

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <Grid container spacing={3} style={{ padding: '20px' }}>
        <Grid item xs={12}>
          <h1>About Quiz Maker</h1>
          <p>
            Quiz Maker is a versatile application designed to help you create, manage, and take quizzes on various topics.
            Whether you're a teacher looking to assess your students or a trivia enthusiast wanting to test your knowledge,
            Quiz Maker is here to make the process easy and enjoyable.
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzbgPncT1n_Ywf0Kwkiy3fK0IIZx3ySvMiLw&s"
            alt="Quiz Maker Overview"
            style={{ width: '30%', marginBottom: '10px' }}
          />
          
          <p>With Quiz Maker, you can:</p>
          <ul>
            <li>Create custom quizzes with multiple-choice questions.</li>
            <li>Select correct answers and provide feedback for each question.</li>
            <li>Take quizzes on various topics such as Sports, Science, History, and Current Affairs.</li>
            <li>Share your quizzes with others and challenge them to beat your score.</li>
          </ul>
        </Grid>
      </Grid>
      <footer style={{ background: '#333', color: '#fff', padding: '10px 0', textAlign: 'center', marginTop: 'auto' }}>
        <p>&copy; 2024 Quiz Maker App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;

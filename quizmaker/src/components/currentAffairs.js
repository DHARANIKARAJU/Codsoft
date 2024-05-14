import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import NavBar from './NavBar';

const CurrentAffairsPage = () => {
  const [answers, setAnswers] = useState(Array(5).fill('')); // Initialize answers with empty strings
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      question: 'Question 1: Who is the Prime Minister of India?',
      options: ['Narendra Modi', 'Rahul Gandhi', 'Amit Shah', 'Manmohan Singh'],
      correctAnswer: 'Narendra Modi',
    },
    {
      question: 'Question 2: What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      correctAnswer: 'Paris',
    },
    // Add more questions here
  ];

  const handleOptionChange = (index, event) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flex: '1', padding: '10px', borderRight: '1px solid #ccc' }}>
          <h2>Quiz List</h2>
          <ul>
            <li><Link to="/quiz/sports">Sports</Link></li>
            <li><Link to="/quiz/science">Science</Link></li>
            <li><Link to="/quiz/history">History</Link></li>
            <li><Link to="/quiz/current-affairs">Current Affairs</Link></li>
          </ul>
        </div>
        <div style={{ flex: '3', padding: '10px' }}>
          <h1>Take a Current Affairs Quiz</h1>
          {questions.map((questionObj, index) => (
            <Card key={index} style={{ marginBottom: '10px', backgroundColor: submitted ? (answers[index] === questionObj.correctAnswer ? 'lightgreen' : 'lightcoral') : 'white' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {questionObj.question}
                </Typography>
                <RadioGroup value={answers[index]} onChange={(e) => handleOptionChange(index, e)}>
                  {questionObj.options.map((option, optionIndex) => (
                    <FormControlLabel key={optionIndex} value={option} control={<Radio />} label={option} />
                  ))}
                </RadioGroup>
                {submitted && (
                  <Typography variant="body2" style={{ color: answers[index] === questionObj.correctAnswer ? 'green' : 'red' }}>
                    Correct Answer: {questionObj.correctAnswer}
                  </Typography>
                )}
              </CardContent>
            </Card>
          ))}
          <Button variant="contained" onClick={handleSubmit}>Submit Answers</Button>
        </div>
      </div>
    </div>
  );
};

export default CurrentAffairsPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { v4 as uuidv4 } from 'uuid'; // Import uuid to generate unique IDs
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import NavBar from './NavBar';
import { CenterFocusStrong } from '@mui/icons-material';

const CreateQuizPage = ({ addQuestion }) => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']); // Initialize options with empty strings
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [quizCount, setQuizCount] = useState(1); // Initialize quiz count

  const handleOptionChange = (index, event) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuestion = {
      id: uuidv4(),
      question,
      options,
      correctAnswer,
    };
    setQuestions([...questions, newQuestion]);
    // Reset form fields
    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrectAnswer('');
  };

  const handleAddQuestion = () => {
    // Ensure addQuestion is a function before calling it
    if (typeof addQuestion === 'function') {
      addQuestion(questions, `Quiz ${quizCount}`); // Add questions to the quiz list with the appropriate name
      setQuestions([]); // Clear questions array after adding them to the quiz list
      setQuizCount(quizCount + 1); // Increment quiz count for the next quiz
    } else {
      console.error('addQuestion is not a function');
    }
  };

  return (
    <div>
      <NavBar />
      <h1 textAlign={CenterFocusStrong}>Create a Quiz</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <List>
            <ListItem button>
              <ListItemText primary="Quiz 1" />
            </ListItem>
            {/* Add other quizzes here */}
          </List>
        </Grid>
        <Grid item xs={12} sm={7}> {/* Adjusted xs and sm values */}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
              margin="normal"
            />
            {options.map((option, index) => (
              <TextField
                key={index}
                fullWidth
                label={`Option ${index + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(index, e)}
                required
                margin="normal"
              />
            ))}
            <FormControl fullWidth required margin="normal">
              <InputLabel>Select Correct Answer</InputLabel>
              <Select
                value={correctAnswer}
                onChange={(e) => setCorrectAnswer(e.target.value)}
              >
                {options.map((option, index) => (
                  <MenuItem key={index} value={option}>{option}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">Add Question</Button>
          </form>
          <Button variant="contained" color="secondary" onClick={handleAddQuestion}>Add Questions to Quiz</Button>
        </Grid>
      </Grid>
      <footer style={{ background: '#333', color: '#fff', padding: '10px 0', textAlign: 'center', marginTop: 'auto' }}>
        <p>&copy; 2024 Quiz Maker App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CreateQuizPage;

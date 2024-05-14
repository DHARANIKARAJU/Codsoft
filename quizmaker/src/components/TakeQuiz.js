import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import NavBar from './NavBar';

const TakeQuiz = () => {
  const topics = [
    { name: 'Sports', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvMkCu6CAwzW1nMeq4-ER8RVkwJceCAWWegR7vq7aCA&s"},
    { name: 'Science', image: "https://play-lh.googleusercontent.com/IoykHRMMwxygqGobooQ8PSY0izqf27TlMq7DbYSW-nR9-rARJ6UgzD86mLXnYs3BRnE" },
    { name: 'History', image: "https://media.proprofs.com/images/QM/user_images/2503852/1582112045.jpg" },
    { name: 'Current Affairs', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydtQleVQI23jyT-raaY0V6yEvftdjO9yyuQpRIsp6cg&s" },
  ];

  return (
      <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Take a Quiz</h1>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>
          Welcome to the Quiz Maker! Challenge yourself with quizzes on various topics including Sports, Science, History, and Current Affairs. Test your knowledge and learn new facts. Choose a topic below to get started!
        </p>
        <Grid container spacing={4} style={{ maxWidth: '1000px', margin: '0 auto 20px' }}>
          {topics.map((topic, index) => (
            <Grid item xs={6} sm={5} md={3} key={index}>
              <Link to={`/quiz/${topic.name.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={topic.image}
                    alt={topic.name}
                    style={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {topic.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
  
      <footer style={{ background: '#333', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
        <p>&copy; 2024 Quiz Maker App. All rights reserved.</p>
      </footer>
      </div>
  );
};

export default TakeQuiz;

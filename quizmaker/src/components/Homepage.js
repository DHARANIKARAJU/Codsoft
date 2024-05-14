import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';


const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      
        <div style={{ flex: '4', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ maxWidth: '80%' }}>
            <div style={{ height: '90vh', backgroundImage: '', backgroundSize: 'cover' }}>
               <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Welcome to Quiz Maker App!</h2>
              <h4 style={{ textAlign: 'center', marginBottom: '40px' }}>
                Our quiz app is your gateway to knowledge, offering a seamless experience for both learning and creating quizzes.
                 Dive into diverse topics, challenge yourself, and expand your horizons with interactive quizzes. 
                 Whether you're a teacher assessing students or an enthusiast exploring new subjects, our app caters to all. 
                 Join our vibrant community and embark on a journey of discovery together.
                  With intuitive tools and engaging content, learning has never been more enjoyable.<br/>
                <br/> 
              </h4> 
              <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                <Link to="/take-quiz" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card style={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://thumbs.dreamstime.com/b/quiz-time-card-colorful-confetti-quiz-time-card-colorful-paper-confetti-vector-background-125413603.jpg"
                      alt="Take Quiz"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Take a Quiz
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Test your knowledge by taking quizzes created by others.
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/create-quiz" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card style={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://cdn.dribbble.com/userupload/13694161/file/original-93af0b134915de0add4455500ac0a55e.png?resize=1600x1200"
                      alt="Create Quiz"
                      
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Create a Quiz
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Create your own quizzes and share them with others.
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer style={{ background: '#333', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
        <p>&copy; 2024 Quiz Maker App. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default HomePage;
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import HomePage from './components/Homepage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TakeQuiz from './components/TakeQuiz';
import CreateQuizPage, { CreateQuiz } from './components/CreateQuiz';
import SportsPage from './components/sportsquiz';
import SciencePage from './components/scienceQuiz';
import HistoryPage from './components/historyQuiz';
import CurrentAffairsPage from './components/currentAffairs';
import AboutPage from './components/About';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/take-quiz' element={<TakeQuiz/>}/>
        <Route path='/create-quiz' element={<CreateQuizPage/>}/>
        <Route path='quiz/sports' element={<SportsPage/>}/>
        <Route path='quiz/science' element={<SciencePage/>}/>
        <Route path='quiz/history' element={<HistoryPage/>}/>
        <Route path='quiz/current-affairs' element={<CurrentAffairsPage/>}/>
        <Route path='about' element={<AboutPage/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;

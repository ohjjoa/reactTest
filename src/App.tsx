import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AgreeTerms from './pages/AgreeTerms';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AgreeTerms />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Home />} />
        
        {/* 다른 Route 추가 가능 */}
      </Routes>
    </Router>
  );
}

export default App;

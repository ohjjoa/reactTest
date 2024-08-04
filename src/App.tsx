import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 다른 Route 추가 가능 */}
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AgreeTerms from './pages/AgreeTerms';
import ZMSLogin from './pages/ZMSLogin';
import ParkingShared from './pages/ParkingShared'
import Profile from './pages/Profile';
import CarRegistration from './pages/CarRegistration';
import Document from './pages/Document';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Document />} />
        <Route path="/" element={<CarRegistration />} />
        <Route path="/" element={<Profile />} />
        <Route path="/" element={<ParkingShared />} />
        <Route path="/" element={<ZMSLogin />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<AgreeTerms />} />        
        <Route path="/" element={<Home />} />
        {/* 다른 Route 추가 가능 */}
      </Routes>
    </Router>
  );
}

export default App;

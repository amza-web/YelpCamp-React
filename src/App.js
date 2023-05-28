import Campgrounds from './Campgrounds'
import {Routes, Route} from 'react-router-dom' 
import './App.css'
import CampSpot from './CampSpot';
import LandingPage from './LandingPage';
import SignUp from './SignUp';
import Login from './Login';
import AddComment from './AddComment';
import AddCamp from './AddCamp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/campgrounds/*" element={<Campgrounds />}></Route>
        <Route path="/campgrounds/campspot" element={<CampSpot />}></Route>
        <Route path="/comments/add" element={<AddComment />}></Route>
        <Route path="/campgrounds/add" element={<AddCamp />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;

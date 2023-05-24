import Campgrounds from './Campgrounds'
import {Routes, Route} from 'react-router-dom' 
import LandingPage from './LandingPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={LandingPage}></Route>
        <Route path="/campgrounds" element={Campgrounds}></Route>
      </Routes>
    </div>
  );
}

export default App;

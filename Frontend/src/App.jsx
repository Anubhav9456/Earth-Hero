import "./index.css"
import Landing from "./Pages/Landing";
import FeaturesSection from "./Pages/Features_Section";
import Dashboard from "./Pages/DashBoard";
import Ai_Predictor from "./Pages/Ai_Predictor";
import Analytics from "./Pages/Analytics";
import GreenHeroes from "./Pages/GreenHeroes";
import Navbar from "./Pages/Navbar";
import ChandniChowkBins from "./Pages/ChandniChowkBins";
import ChatBot from "./Pages/ChatBot";
import HeatMap from "./Pages/HeatMap";
import Charts from "./Pages/Charts";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <ChatBot />
      <Routes>
        <Route path="/" element={<><Landing /><FeaturesSection /><GreenHeroes/></>} />
        <Route path="/dashboard" element={<HeatMap/>} />
        <Route path="/ai_predictor" element={<Ai_Predictor/>} />
        <Route path="/analytics" element={<Analytics/>} />
        <Route path="/bins/chandni-chowk" element={<ChandniChowkBins />} />
        <Route path="/greenheroes" element={<GreenHeroes/>} />
        <Route path="/charts" element={<Charts/>} />
      </Routes>
    </Router>
  );
}

export default App;

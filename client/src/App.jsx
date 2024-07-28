import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Hero from './components/Hero';
import WorkoutSessions from './components/WorkoutSessions';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import BMICalculator from './components/BMICalculator';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator /> 
      <Footer />
      <ToastContainer position='top-center' theme='dark' />
    </Router>
  )
}

export default App

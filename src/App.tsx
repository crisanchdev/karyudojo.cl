import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Learn from './components/Learn';
import Philosophy from './components/Philosophy';
import Instructor from './components/Instructor';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import ProgressBar from './components/ProgressBar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ProgressBar />
      <Navbar />
      <Hero />
      <About />
      <Learn />
      <Philosophy />
      <Instructor />
      <Schedule />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
      <FloatingElements />
    </div>
  );
}

export default App;

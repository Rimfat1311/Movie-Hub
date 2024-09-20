import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router
import Home from './pages/Home';
import Movies from './pages/Movies';
import Footer from './components/Footer';
import TvShows from './pages/TvShows';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router> {/* Wrap your app in Router */}
      <div className='bg-neutral-900 h-full'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

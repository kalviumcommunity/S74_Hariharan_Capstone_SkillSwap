import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Profile from './pages/UserProfilePage';

const App = () => (
  <Router>
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-grow'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

      <Footer />
    </div>
  </Router>
)

export default App;
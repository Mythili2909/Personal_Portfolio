import { useEffect, useState } from 'react';
import './App.css';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import sun and moon icons
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
// import Navbar from './components/Navbar';3
import Projects from './components/Projects';

function App() {
  const [theme, setTheme] = useState('light');

  // Load theme on first render
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.classList.remove('dark'); 
    document.documentElement.className = storedTheme;
  }, []);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow-lg transition"
      >
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>

      {/* Your components */}
      <div className={`bg-white text-black dark:bg-black dark:text-white transition-colors duration-300`}>
        {/* <Navbar /> */}
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

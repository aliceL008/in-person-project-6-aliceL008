import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A modern e-commerce platform built with React and Node.js, featuring shopping cart, payment integration, and admin dashboard.',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    image:
      'https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-Commerce+App',
    imageAlt: 'E-Commerce Platform',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description:
      'Clean and intuitive weather dashboard with location search, 7-day forecast, and beautiful animations.',
    category: 'frontend',
    categoryLabel: 'Frontend',
    image:
      'https://via.placeholder.com/400x250/059669/ffffff?text=Weather+App',
    imageAlt: 'Weather Dashboard',
    tags: ['JavaScript', 'CSS3', 'API'],
  },
  {
    id: 3,
    title: 'Task Management App',
    description:
      'Productivity app with drag-and-drop functionality, project collaboration, and deadline tracking.',
    category: 'webapp',
    categoryLabel: 'Web App',
    image:
      'https://via.placeholder.com/400x250/dc2626/ffffff?text=Task+Manager',
    imageAlt: 'Task Management App',
    tags: ['React', 'TypeScript', 'Firebase'],
  },
  {
    id: 4,
    title: 'Creative Portfolio',
    description:
      'Responsive portfolio website for a graphic designer with interactive galleries and smooth animations.',
    category: 'design',
    categoryLabel: 'Design',
    image:
      'https://via.placeholder.com/400x250/7c3aed/ffffff?text=Portfolio+Site',
    imageAlt: 'Portfolio Website',
    tags: ['HTML5', 'CSS3', 'GSAP'],
  },
  {
    id: 5,
    title: 'PawPal',
    description:
      'An AI-powered pet care app that uses personalized recommendations and a RAG-based knowledge system to help pet owners manage daily care tasks and schedules.',
    category: 'webapp',
    categoryLabel: 'Web App',
    image:
      'https://via.placeholder.com/400x250/f59e0b/ffffff?text=PawPal',
    imageAlt: 'PawPal pet care app',
    tags: ['Streamlit', 'Python', 'You.API'],
  },
  {
    id: 6,
    title: 'Music Recommender',
    description:
      'An AI-powered music recommendation system that uses song features such as genre, mood, energy, and danceability to recommend songs based on user preferences.',
    category: 'design',
    categoryLabel: 'Design',
    image:
      'https://via.placeholder.com/400x250/0891b2/ffffff?text=Music+Recommender',
    imageAlt: 'Music recommendation system',
    tags: ['Python', 'Machine Learning', 'Recommender System'],
  },
];

function App() {
  return (
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Contact />
      <Footer projectCount={projects.length} />
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Skills from './components/Skills';
import Education from './components/Timeline/Education';
import Project from './components/Projects/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Error Boundary defined inside App.jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Optional: log error to an error reporting service
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center text-white bg-[#050414]">
          <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
          <p className="mb-4">Please try refreshing the page or come back later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const App = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.scrollTo) {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.location.hash = '';
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <ErrorBoundary>
      <div className='bg-[#050414]'>
        <Navbar/>
        <Homepage/>
        <Skills/>
        <Education/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>
    </ErrorBoundary>
  );
};

export default App;

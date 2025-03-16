import React, { useState } from 'react';
import Girl from './assets/img/girl.png';
import './neon-styles.css';
import FollowPage from './pages/FollowPage';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import { useScrollStore } from './store/useScrollStore';
import { Twitter, AtSign, Facebook, Linkedin, Dribbble } from 'lucide-react';

function App() {
  const { currentView, setCurrentView } = useScrollStore();
  const [isScrolling, setIsScrolling] = useState(false);

  const handleNavigate = (view: number) => {
    if (!isScrolling) {
      setIsScrolling(true);
      setCurrentView(view);
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  return (
    <div className="bg-zinc-900 min-h-screen text-white overflow-hidden">
      {/* Minimized Elegant Borders */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        {/* Slim Left Border */}
        <div className="absolute top-0 left-0 w-12 h-full bg-zinc-900"></div>
        
        {/* Slim Right Border with Brand */}
        <div className="absolute top-0 right-0 w-12 h-full bg-zinc-900 overflow-hidden">
          <div className="absolute top-1/2 right-0 transform -rotate-90 origin-center translate-x-24 text-[100px] font-bold tracking-tighter text-zinc-800/10 whitespace-nowrap">
            KEZTA
          </div>
        </div>
        
        {/* Slim Bottom Border */}
        <div className="absolute bottom-0 left-12 right-12 h-10 bg-zinc-900"></div>
        
        {/* Slim Top Border */}
        <div className="absolute top-0 left-12 right-12 h-8 bg-zinc-900"></div>
      </div>

      {/* Navigation Menu - Adjusted for new border sizes */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 ml-14">
          <h1 className="text-xl font-bold tracking-wider">KEZTA</h1>
        </div>
        <div className="flex gap-8 mr-14 text-base">
          <button 
            onClick={() => handleNavigate(1)} 
            className={`${currentView === 1 ? "text-[#FF0099] font-medium" : "text-gray-400 hover:text-white transition-colors"}`}
          >
            HOME
          </button>
          <button 
            onClick={() => handleNavigate(2)} 
            className={`${currentView === 2 ? "text-[#FF0099] font-medium" : "text-gray-400 hover:text-white transition-colors"}`}
          >
            PROJECTS
          </button>
          <button 
            onClick={() => handleNavigate(3)} 
            className={`${currentView === 3 ? "text-[#FF0099] font-medium" : "text-gray-400 hover:text-white transition-colors"}`}
          >
            ABOUT
          </button>
          <button 
            onClick={() => handleNavigate(4)} 
            className={`${currentView === 4 ? "text-[#FF0099] font-medium" : "text-gray-400 hover:text-white transition-colors"}`}
          >
            CONTACT
          </button>
        </div>
      </nav>

      {/* Social Links - Repositioned closer to edge */}
      <div className="fixed left-3 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6">
        <a href="#" className="text-gray-500 hover:text-[#FF0099] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter ">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
        </a>
        <a href="#" className="text-gray-500 hover:text-[#FF0099] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-at-sign ">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path>
          </svg>
        </a>
        <a href="#" className="text-[#9B30FF]">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook ">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
        <a href="#" className="text-gray-500 hover:text-[#FF0099] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin ">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a href="#" className="text-gray-500 hover:text-[#FF0099] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dribbble ">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
            <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
            <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
          </svg>
        </a>
      </div>

      {/* Main Content Container */}
      <div 
        className="relative transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateY(-${(currentView - 1) * 100}vh)` }}
      >
        {/* Home Page - Adjusted for new border sizes */}
        <div className="h-screen relative">
          <div 
            className="absolute inset-0 mx-12 my-8 rounded-lg overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #9B30FF 0%, #FF0099 40%, #1687A7 80%, #063C4D 100%)'
            }}
          >
            <div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 70% center, #9B30FF, transparent 70%)',
                opacity: 0.5,
                filter: 'blur(20px)'
              }}
            ></div>
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, rgba(0,0,0,1.3) 2%, transparent 50%)'
              }}
            ></div>
          </div>
          
          <div 
            className="absolute" 
            style={{
              top: '25%',
              left: '15%',
              width: '100%',
              zIndex: 5
            }}
          >
            <h1 className="intro__title">
              <span className="intro__title-pre">Xtynct</span>
            </h1>
          </div>
          
          <img 
            src={Girl} 
            alt="Girl" 
            className="absolute"
            style={{
              bottom: '10%',
              left: '10%',
              width: '35%',
              zIndex: 10
            }}
          />
          
          <div className="absolute bottom-16 left-28 z-[9999]">
            <div className="p-3 max-w-xs" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              opacity: 0.8
            }}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium mb-1">01</div>
                  <h2 className="text-2xl font-bold mb-1">Structure</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Follow Page */}
        <div className="h-screen">
          <FollowPage />
        </div>

        {/* About Page */}
        <div className="h-screen">
          <AboutMe onNavigateBack={() => handleNavigate(1)} onNavigateToContact={() => handleNavigate(4)} />
        </div>

        {/* Contact Page */}
        <div className="h-screen">
          <Contact onNavigateBack={() => handleNavigate(3)} />
        </div>
      </div>
    </div>
  );
}

export default App;
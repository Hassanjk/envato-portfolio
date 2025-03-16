import React from 'react';
import { Twitter, Dribbble, Facebook, Linkedin, AtSign, ChevronLeft, ChevronRight } from 'lucide-react';
import Girl from './assets/img/girl.png';
import './neon-styles.css';

function App() {
  return (
    <div className="bg-zinc-900 min-h-screen text-white overflow-hidden">
      {/* Black Borders */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        <div className="absolute top-0 left-0 w-24 h-full bg-zinc-900"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-zinc-900 overflow-hidden">
          <div className="absolute bottom-0 right-0 transform -rotate-90 origin-top-left translate-y-24 text-[180px] font-bold tracking-tighter text-zinc-800/20 whitespace-nowrap">
            KEZTA
          </div>
        </div>
        <div className="absolute bottom-0 left-24 right-24 h-24 bg-zinc-900"></div>
        <div className="absolute top-0 left-24 right-24 h-16 bg-zinc-900"></div>
      </div>

      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2 ml-24">
          <h1 className="text-2xl font-bold tracking-wider">KEZTA</h1>
        </div>
        <div className="flex gap-12 mr-24 text-lg">
          <a href="#" className="text-[#FF0099] font-medium">Home</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Stories</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Social Links */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-8">
        <a href="#" className="text-gray-500 hover:text-[#FF0099] transition-colors"><Twitter size={22} /></a>
        <a href="#" className="text-gray-500 hover:text-[#FF0099] transition-colors"><AtSign size={22} /></a>
        <a href="#" className="text-[#9B30FF]"><Facebook size={22} /></a>
        <a href="#" className="text-gray-500 hover:text-[#FF0099] transition-colors"><Linkedin size={22} /></a>
        <a href="#" className="text-gray-500 hover:text-[#FF0099] transition-colors"><Dribbble size={22} /></a>
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #9B30FF 0%, #FF0099 40%, #1687A7 80%, #063C4D 100%)'
          }}
        >
          {/* Additional Glow */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 70% center, #9B30FF, transparent 70%)',
              opacity: 0.5,
              filter: 'blur(20px)'
            }}
          ></div>
          {/* Darker overlay on left side for better image merge */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(0,0,0,1.3) 2%, transparent 50%)'
            }}
          ></div>
        </div>
        
        {/* Futuristic Neon Text */}
        <div 
          className="absolute" 
          style={{
            top: '25%',
            left: '11%',
            width: '100%',
            zIndex: 5 /* Set lower than image and content box */
          }}
        >
          <h1 className="intro__title">
            <span className="intro__title-pre">Xtynct</span>
          </h1>
        </div>
        
        {/* Absolute Positioned Girl Image */}
        <img 
          src={Girl} 
          alt="Girl" 
          className="absolute"
          style={{
            bottom: '10%',
            left: '5%',
            width: '37%',
            zIndex: 10 /* Higher z-index to appear in front of text */
          }}
        />
        
        {/* Content Box - repositioned to left with prev/next arrows */}
        <div className="absolute bottom-20 left-25 z-[9999]">
          <div className="p-4 max-w-xs" style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.2)',
            borderRadius: '8px',
            opacity: 0.8
          }}>
            <div className="flex items-center justify-between">
              <button className="p-2 hover:text-[#FF0099]"><ChevronLeft size={24} /></button>
              <div>
                <div className="text-xs font-medium mb-1">01</div>
                <h2 className="text-3xl font-bold mb-2">Structure</h2>
              </div>
              <button className="p-2 hover:text-[#FF0099]"><ChevronRight size={24} /></button>
            </div>
          </div>
        </div>

        {/* Page Counter */}
        <div className="absolute bottom-32 left-32 text-gray-400 text-lg tracking-wider">
          <span className="text-[#FF0099] font-medium">01</span> <span className="mx-4">—</span> <span className="font-medium">05</span>
        </div>
      </div>
    </div>
  );
}

export default App;
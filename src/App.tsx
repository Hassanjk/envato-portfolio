import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChevronDown, Smile } from 'lucide-react';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import NavigationMenu from './components/NavigationMenu';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import { useScrollStore } from './store/useScrollStore';
import './styles/singleProject.css';
import FollowPage from './pages/FollowPage';

gsap.registerPlugin(Observer);

function AppContent() {
  const { currentView, setCurrentView, isAnimating, setIsAnimating } = useScrollStore();
  const view1Ref = useRef<HTMLDivElement>(null);
  const view2Ref = useRef<HTMLDivElement>(null);
  const view3Ref = useRef<HTMLDivElement>(null);
  const view4Ref = useRef<HTMLDivElement>(null);

  const handleViewTransition = (direction: 'up' | 'down', targetView: number) => {
    if (isAnimating) return;
    
    if (currentView === 1 && targetView !== 2) return;
    if (currentView === 2 && targetView !== 1 && targetView !== 3) return;
    if (currentView === 3 && targetView !== 2 && targetView !== 4) return;
    if (currentView === 4 && targetView !== 3) return;

    setIsAnimating(true);

    const tl = gsap.timeline({
      defaults: { duration: 1.5, ease: "power2.inOut" },
      onComplete: () => setIsAnimating(false)
    });

    if (currentView === 1 && targetView === 2) {
      tl.to(view1Ref.current, { yPercent: -100 })
        .fromTo(view2Ref.current, 
          { yPercent: 100, visibility: 'visible' },
          { yPercent: 0 },
          "<"
        )
        .add(() => setCurrentView(2));
    } else if (currentView === 2 && targetView === 1) {
      tl.to(view2Ref.current, { yPercent: 100 })
        .fromTo(view1Ref.current,
          { yPercent: -100, visibility: 'visible' },
          { yPercent: 0 },
          "<"
        )
        .add(() => setCurrentView(1));
    } else if (currentView === 2 && targetView === 3) {
      tl.to(view2Ref.current, { yPercent: -100 })
        .fromTo(view3Ref.current,
          { yPercent: 100, visibility: 'visible' },
          { yPercent: 0 },
          "<"
        )
        .add(() => setCurrentView(3));
    } else if (currentView === 3 && targetView === 2) {
      tl.to(view3Ref.current, { yPercent: 100 })
        .fromTo(view2Ref.current,
          { yPercent: -100, visibility: 'visible' },
          { yPercent: 0 },
          "<"
        )
        .add(() => setCurrentView(2));
    } else if (currentView === 3 && targetView === 4) {
      tl.to(view3Ref.current, { yPercent: -100 })
        .fromTo(view4Ref.current,
          { yPercent: 100, visibility: 'visible' },
          { yPercent: 0 },
          "<"
        )
        .add(() => setCurrentView(4));
    } else if (currentView === 4 && targetView === 3) {
      tl.to(view4Ref.current, { yPercent: 100 })
        .fromTo(view3Ref.current,
          { yPercent: -100, visibility: 'visible' },
          { yPercent: 0 },
          "<"
        )
        .add(() => setCurrentView(3));
    }
  };

  useEffect(() => {
    gsap.set([view1Ref.current, view2Ref.current, view3Ref.current, view4Ref.current], { 
      visibility: 'visible' 
    });
    gsap.set(view1Ref.current, { yPercent: currentView === 1 ? 0 : -100 });
    gsap.set(view2Ref.current, { yPercent: currentView === 2 ? 0 : 100 });
    gsap.set(view3Ref.current, { yPercent: currentView === 3 ? 0 : 100 });
    gsap.set(view4Ref.current, { yPercent: currentView === 4 ? 0 : 100 });

    const observer = Observer.create({
      target: window,
      type: 'wheel',
      onChange: (event) => {
        if (isAnimating) return;

        const scrollingDown = event.deltaY > 0;
        if (currentView === 1 && scrollingDown) {
          handleViewTransition('down', 2);
        } else if (currentView === 2) {
          if (scrollingDown) {
            handleViewTransition('down', 3);
          } else {
            handleViewTransition('up', 1);
          }
        } else if (currentView === 3 && !scrollingDown) {
          handleViewTransition('up', 2);
        } else if (currentView === 4 && !scrollingDown) {
          handleViewTransition('up', 3);
        }
      },
      preventDefault: true
    });

    return () => {
      if (observer) observer.kill();
    };
  }, [currentView, isAnimating]);

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      {/* Black Borders */}
      <div className="fixed inset-0 border-black z-50 pointer-events-none">
        <div className="absolute top-0 left-0 w-24 h-full bg-black"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-black flex items-end pb-8">
          <div className="text-[200px] font-bold text-black/20 -rotate-90 origin-bottom-left translate-y-full ml-8">
            KEZTA
          </div>
        </div>
        <div className="absolute bottom-0 left-24 right-24 h-24 bg-black"></div>
        <div className="absolute top-0 left-24 right-24 h-16 bg-black"></div>
      </div>

      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2 ml-24">
          <h1 className="text-2xl font-bold tracking-wider">KEZTA</h1>
        </div>
        <div className="flex gap-8 mr-24">
          <a href="#" className="text-yellow-500">Home</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Stories</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Social Links */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6">
        <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Twitter</a>
        <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Bē</a>
        <a href="#" className="text-yellow-500">Facebook</a>
        <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">LinkedIn</a>
        <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Dribbble</a>
      </div>

      {/* Views Container */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* View 1 - Hero */}
        <div ref={view1Ref} className="view view--1">
          <div className="relative min-h-screen">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
                margin: '4rem 6rem 6rem 6rem'
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            
            {/* Hero Content */}
            <div className="absolute bottom-32 right-32 z-10">
              <div className="bg-yellow-500 p-8 max-w-md">
                <div className="text-sm mb-2">01</div>
                <h2 className="text-4xl font-bold mb-2">Structure</h2>
                <p className="mb-4">The freeware for community</p>
                <div className="text-sm">LIFESTYLE</div>
              </div>
            </div>

            {/* Page Counter */}
            <div className="absolute bottom-32 left-32 text-gray-400">
              01 <span className="mx-4">—</span> 05
            </div>
          </div>
        </div>

        {/* View 2 - Projects */}
        <div ref={view2Ref} className="view view--2 w-full h-screen overflow-hidden">
          <FollowPage />
        </div>

        {/* View 3 - About */}
        <div ref={view3Ref} className="view view--3">
          <AboutMe 
            onNavigateBack={() => handleViewTransition('up', 2)}
            onNavigateToContact={() => handleViewTransition('down', 4)}
          />
        </div>

        {/* View 4 - Contact */}
        <div ref={view4Ref} className="view view--4">
          <Contact onNavigateBack={() => handleViewTransition('up', 3)} />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/follow" element={<FollowPage />} />
      </Routes>
    </Router>
  );
}

export default App;
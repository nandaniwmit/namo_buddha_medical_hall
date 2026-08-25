import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';

// Lazy loading the 6 pages
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Login = lazy(() => import('./pages/Login').then(m => ({ default: m.Login })));

// Scroll restoration component
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

// Fallback loader
function PageLoadingFallback() {
  return (
    <div className="flex-1 min-h-[60vh] flex flex-col items-center justify-center space-y-4 p-8">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-black text-xl shadow-lg animate-pulse">
        NB
      </div>
      <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
        <div className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce" />
        <div className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.2s]" />
        <div className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.4s]" />
        <span>Loading Namo Buddha Medical Hall...</span>
      </div>
    </div>
  );
}

export function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [initialMedicine, setInitialMedicine] = useState<string>('');

  const handleOpenOrderModal = (medicineName?: string) => {
    setInitialMedicine(medicineName || '');
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
    setInitialMedicine('');
  };

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
          {/* Main Sticky Navigation */}
          <Navbar onOpenOrderModal={() => handleOpenOrderModal()} />

          {/* Main Page Route Content */}
          <main className="flex-1 flex flex-col">
            <Suspense fallback={<PageLoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home onOpenOrderModal={handleOpenOrderModal} />} />
                <Route path="/about" element={<About onOpenOrderModal={() => handleOpenOrderModal()} />} />
                <Route path="/services" element={<Services onOpenOrderModal={handleOpenOrderModal} />} />
                <Route path="/gallery" element={<Gallery onOpenOrderModal={handleOpenOrderModal} />} />
                <Route path="/contact" element={<Contact onOpenOrderModal={() => handleOpenOrderModal()} />} />
                <Route path="/login" element={<Login />} />
                {/* Fallback to Home */}
                <Route path="*" element={<Home onOpenOrderModal={handleOpenOrderModal} />} />
              </Routes>
            </Suspense>
          </main>

          {/* Floating Actions (WhatsApp, Call, Back To Top) */}
          <FloatingActions onOpenOrderModal={() => handleOpenOrderModal()} />

          {/* Global WhatsApp Medicine Order Modal */}
          <WhatsAppOrderModal
            isOpen={isOrderModalOpen}
            onClose={handleCloseOrderModal}
            initialMedicineName={initialMedicine}
          />

          {/* Global Footer with Step 11 tracking & Step 12 WMIT popup trigger */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

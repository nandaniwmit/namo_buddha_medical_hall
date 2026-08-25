import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageCircle, ShoppingCart } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface FloatingActionsProps {
  onOpenOrderModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenOrderModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 select-none">
      {/* Back To Top Button */}
      {showBackToTop && (
        <button
          id="btn-back-to-top"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="w-11 h-11 rounded-full bg-slate-800/90 dark:bg-slate-700/90 text-white shadow-lg backdrop-blur hover:bg-slate-900 dark:hover:bg-slate-600 transition-all flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        id="btn-floating-call"
        href={`tel:${SITE_CONFIG.phone.raw}`}
        aria-label={`Call Namo Buddha Medical Hall at ${SITE_CONFIG.phone.display}`}
        className="w-12 h-12 rounded-full bg-sky-600 text-white shadow-xl hover:bg-sky-700 transition-all flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 group relative"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="absolute right-14 px-2.5 py-1 rounded-md bg-slate-900 text-white text-xs font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-md">
          Call: {SITE_CONFIG.phone.display}
        </span>
      </a>

      {/* Floating WhatsApp Order Trigger */}
      <button
        id="btn-floating-whatsapp"
        onClick={onOpenOrderModal}
        aria-label="Order medicine on WhatsApp"
        className="relative group flex items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl hover:shadow-emerald-600/50 transition-all hover:scale-105 active:scale-95 cursor-pointer"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-6 h-6" />
        <span className="text-xs md:text-sm font-bold tracking-wide">
          WhatsApp Order
        </span>
      </button>
    </aside>
  );
};

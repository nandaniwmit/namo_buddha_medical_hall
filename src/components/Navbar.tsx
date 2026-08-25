import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Sun, 
  Moon, 
  ShoppingBag, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  LogIn,
  Activity,
  Heart
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useTheme } from '../context/ThemeContext';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services & Stock', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login', isLogin: true }
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/95 dark:bg-slate-900/95 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      {/* Top Announcement & Emergency Bar */}
      <div className="bg-emerald-700 text-white text-[11px] sm:text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center space-x-3 text-emerald-100">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-yellow-300" />
              <span>Super Market, Near Bus Stand, Bodhgaya</span>
            </span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:flex items-center gap-1">
              <Clock className="w-3 h-3 text-emerald-300" />
              <span>Daily: 7:00 AM – 10:30 PM</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-800 text-[11px] font-semibold text-emerald-200 border border-emerald-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-0.5" />
              24/7 Emergency Support
            </span>
            <a
              href={`tel:${SITE_CONFIG.phone.raw}`}
              className="font-bold hover:text-yellow-300 flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{SITE_CONFIG.phone.display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center space-x-3 group" aria-label="Namo Buddha Medical Hall Home">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-black text-xl shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform flex-shrink-0">
              <div className="relative flex items-center justify-center">
                <span className="text-white font-extrabold tracking-tighter">NB</span>
                <span className="absolute -top-1 -right-1.5 w-2.5 h-2.5 bg-yellow-300 rounded-full border-2 border-white dark:border-slate-900" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Namo Buddha
              </span>
              <span className="text-[11px] md:text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase mt-0.5">
                Medical Hall • Bodhgaya
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Desktop Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-xs'
                      : 'text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* PWA Add to Home Button */}
            <PWAInstallButton variant="navbar" />

            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* WhatsApp Order Modal Trigger */}
            <button
              id="nav-order-whatsapp-btn"
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md shadow-emerald-600/20 transition-all cursor-pointer hover:scale-102 active:scale-98"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>WhatsApp Order</span>
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle on Small Screens */}
          <div className="flex items-center space-x-1 sm:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`
                }
              >
                <div className="flex items-center justify-between">
                  <span>{link.name}</span>
                  {link.isLogin && <LogIn className="w-4 h-4 opacity-70" />}
                </div>
              </NavLink>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <PWAInstallButton variant="mobile" />

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full py-3 px-4 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-semibold text-sm flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-400" />
              <span>Order via WhatsApp</span>
            </button>

            <a
              href={`tel:${SITE_CONFIG.phone.raw}`}
              className="w-full py-3 px-4 rounded-xl bg-sky-600 text-white font-semibold text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Store: {SITE_CONFIG.phone.display}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

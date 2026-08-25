import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  ShieldCheck, 
  Heart, 
  CheckCircle2, 
  ExternalLink,
  MessageCircle,
  X
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const [showWmitModal, setShowWmitModal] = useState(false);

  // === STEP 11: GLOBAL TRACKING (MANDATORY HOOK) ===
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid'));
    }
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: NodeJS.Timeout | number;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach((evt) => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer();

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);

    // Listener for WMIT popup trigger anchor
    const handleWmitPopup = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest('.wmit-popup-trigger')) {
        e.preventDefault();
        setShowWmitModal(true);
      }
    };
    document.addEventListener('click', handleWmitPopup);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach((evt) => document.removeEventListener(evt, resetIdleTimer));
      document.removeEventListener('click', handleWmitPopup);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-slate-950 dark:text-slate-400 border-t border-slate-800 relative z-10">
      {/* Top Banner Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Business Overview */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-emerald-500/20">
                NB
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {SITE_CONFIG.name}
                </h3>
                <p className="text-xs text-emerald-400 font-medium">
                  Super Market, Bodhgaya, Bihar
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              Your premier licensed pharmaceutical center and medical supplies store in Bodhgaya. Offering 100% genuine allopathic medicines, emergency surgical gear, and instant WhatsApp ordering.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Drug Lic No: <strong className="text-white">{SITE_CONFIG.registrationNumber}</strong></span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links & Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span>›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span>›</span> About Our Medical Store
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span>›</span> Medicines & Services
                </Link>
              </li>
              <li>
                <Link to="/services#stock-checker" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span>›</span> Live Medicine Stock Checker
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span>›</span> Store Gallery & Equipment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span>›</span> Contact & Directions
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span>›</span> Patient / Staff Portal Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Working Hours & Contact Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2.5">
              Store Timings & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Mon – Sat:</p>
                  <p className="text-slate-400">{SITE_CONFIG.workingHours.timings}</p>
                  <p className="font-semibold text-white mt-1">Sunday:</p>
                  <p className="text-slate-400">{SITE_CONFIG.workingHours.sundayTimings}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Call / WhatsApp:</p>
                  <a href={`tel:${SITE_CONFIG.phone.raw}`} className="text-emerald-400 hover:underline font-bold text-sm block">
                    {SITE_CONFIG.phone.display}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Address:</p>
                  <p className="text-slate-400">{SITE_CONFIG.address.fullAddress}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Location Map & WhatsApp Action */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2.5">
              Locate & Order
            </h4>
            <div className="rounded-xl overflow-hidden border border-slate-700 h-28 bg-slate-800 relative group">
              <iframe
                title="Namo Buddha Medical Hall Google Map Preview"
                src={SITE_CONFIG.address.googleMapsEmbedUrl}
                className="w-full h-full border-0 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
              <a
                href={SITE_CONFIG.address.googleMapsDirectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/40 hover:bg-black/20 flex items-center justify-center text-white text-xs font-semibold gap-1.5 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <a
              href={`https://wa.me/${SITE_CONFIG.phone.internationalWhatsApp}?text=${encodeURIComponent('Hello Namo Buddha Medical Hall, I would like to order medicines.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>

        </div>

        {/* Legal, Disclaimer, & Policies */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-[11px] text-slate-500 space-y-3">
          <p className="leading-relaxed">
            <strong className="text-slate-400">Medical Disclaimer:</strong> Information provided on this website is for educational and stock verification purposes only and does not substitute professional medical advice, diagnosis, or treatment. Prescription drugs are dispensed strictly upon presentation of a valid doctor's prescription.
          </p>
          <div className="flex flex-wrap gap-4 text-slate-400">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Return & Refund Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Drug Dispensing Protocol</span>
          </div>
        </div>

        {/* STEP 12 MANDATORY COPYRIGHT & WMIT POPUP TRIGGER */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </div>

          {/* REQUIRED FOOTER POPUP TRIGGER — PRESERVE EXACTLY (Step 12) */}
          <div className="text-center font-medium">
            <a href="#" className="wmit-popup-trigger hover:text-emerald-400 transition-colors underline decoration-emerald-500/50">Developed by WMIT</a>
          </div>

          <div className="text-slate-500 text-[11px]">
            Super Market, Bodhgaya, Gaya, Bihar 824231
          </div>
        </div>
      </div>

      {/* WMIT Popup Dialog */}
      {showWmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl p-6 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-2xl">
            <button
              onClick={() => setShowWmitModal(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black">
                W
              </div>
              <div>
                <h4 className="font-bold text-base">WebMaker IT Solutions (WMIT)</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Enterprise Digital & Web Systems</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              This high-performance healthcare platform for Namo Buddha Medical Hall was engineered with high security, PWA mobile integration, real-time inventory checking, and responsive WhatsApp order management.
            </p>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setShowWmitModal(false)}
                className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

import React from 'react';
import { X, Share, PlusSquare, ArrowDown, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSInstallGuide: React.FC<IOSInstallGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ios-install-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close installation guide"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xl border border-emerald-200 dark:border-emerald-800">
            NB
          </div>
          <div>
            <h3 id="ios-install-title" className="text-lg font-bold text-slate-900 dark:text-white">
              Install {SITE_CONFIG.shortName} App
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Instant access & offline stock checker
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
          <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-semibold">
              1
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-white flex items-center gap-1.5">
                Tap the <Share className="w-4 h-4 text-sky-600 inline" /> <span className="font-semibold text-sky-600">Share</span> icon
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Found at the bottom menu bar in Safari or top right in Chrome.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-semibold">
              2
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-white flex items-center gap-1.5">
                Scroll & select <PlusSquare className="w-4 h-4 text-emerald-600 inline" /> <span className="font-semibold text-emerald-600">"Add to Home Screen"</span>
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                This adds the Namo Buddha app icon directly to your phone.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-semibold">
              3
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-white flex items-center gap-1.5">
                Tap <span className="font-semibold text-emerald-600">"Add"</span> in the top right
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Open from your home screen for full app-like experience!
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Note */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
            <CheckCircle2 className="w-4 h-4" />
            <span>Zero storage taken & fast loading</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};

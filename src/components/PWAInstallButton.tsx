import React from 'react';
import { Smartphone, Check } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { IOSInstallGuide } from './IOSInstallGuide';

interface PWAInstallButtonProps {
  variant?: 'navbar' | 'mobile' | 'footer' | 'hero';
  className?: string;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ variant = 'navbar', className = '' }) => {
  const { isInstallable, isInstalled, showIOSGuide, setShowIOSGuide, installSuccess, triggerInstall } = usePWAInstall();

  // If already installed and running standalone, do not show button as per PWA spec
  if (isInstalled && !installSuccess) {
    return null;
  }

  return (
    <>
      <button
        id={`pwa-install-${variant}`}
        onClick={triggerInstall}
        aria-label="Install Namo Buddha Medical Hall App on Home Screen"
        className={`group inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
          installSuccess
            ? 'bg-emerald-700 text-white cursor-default'
            : variant === 'navbar'
            ? 'px-3.5 py-1.5 text-xs rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
            : variant === 'mobile'
            ? 'w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md text-sm'
            : variant === 'hero'
            ? 'px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur border border-slate-700 text-sm'
            : 'px-4 py-2 text-xs rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white'
        } ${className}`}
      >
        {installSuccess ? (
          <>
            <Check className="w-4 h-4 text-emerald-300 animate-bounce" />
            <span>Installed</span>
          </>
        ) : (
          <>
            <span className="text-base" role="img" aria-label="mobile">📲</span>
            <span>Add to Home</span>
          </>
        )}
      </button>

      <IOSInstallGuide
        isOpen={showIOSGuide}
        onClose={() => setShowIOSGuide(false)}
      />
    </>
  );
};

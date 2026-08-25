import React, { useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  Filter, 
  Sparkles, 
  Camera,
  ShieldCheck,
  ShoppingBag
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Store Front & Interior' | 'Medicine Shelves' | 'Diagnostic Devices' | 'Surgical & Wellness';
  caption: string;
  badge: string;
  bgColor: string;
  symbol: string;
}

interface GalleryProps {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenOrderModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "gal-1",
      title: "Store Front & Entrance",
      category: "Store Front & Interior",
      caption: "Spacious and clean pharmacy entrance located at Ground Floor, Super Market, Bodhgaya near the Bus Stand.",
      badge: "Store Front",
      bgColor: "from-emerald-700 to-teal-900",
      symbol: "🏥"
    },
    {
      id: "gal-2",
      title: "Organized Prescription Medicine Shelves",
      category: "Medicine Shelves",
      caption: "Alphabetically organized and batch-categorized medicine storage ensuring rapid, accurate dispensing.",
      badge: "Medicine Shelves",
      bgColor: "from-teal-800 to-cyan-900",
      symbol: "💊"
    },
    {
      id: "gal-3",
      title: "Digital Health Devices Showcase",
      category: "Diagnostic Devices",
      caption: "Clinically certified digital BP monitors (Omron), Glucometers (Accu-Chek), Pulse Oximeters & Nebulizers.",
      badge: "Equipment",
      bgColor: "from-sky-700 to-blue-900",
      symbol: "🩺"
    },
    {
      id: "gal-4",
      title: "Cold-Chain Biological Storage",
      category: "Store Front & Interior",
      caption: "Medical-grade refrigeration unit continuously monitored between 2°C and 8°C for Insulins and Vaccines.",
      badge: "Cold-Chain",
      bgColor: "from-blue-700 to-indigo-900",
      symbol: "❄️"
    },
    {
      id: "gal-5",
      title: "Surgical Supplies & Hospital Disposables",
      category: "Surgical & Wellness",
      caption: "Sterile gauze, cannula, crepe bandages, orthopedic braces, disposable gloves, and post-operative supplies.",
      badge: "Surgical",
      bgColor: "from-emerald-800 to-slate-900",
      symbol: "✂️"
    },
    {
      id: "gal-6",
      title: "Baby Care & Maternal Nutrition Section",
      category: "Surgical & Wellness",
      caption: "Specialized pediatric shelves featuring baby formulas, Sebamed/Himalaya gentle care, diapers, and gripe water.",
      badge: "Baby Care",
      bgColor: "from-amber-700 to-orange-900",
      symbol: "👶"
    },
    {
      id: "gal-7",
      title: "Ayurvedic & Herbal Wellness Counter",
      category: "Medicine Shelves",
      caption: "Authentic Dabur, Baidyanath, and Himalaya herbal medicines, immunity syrups, Chyawanprash, and herbal drops.",
      badge: "Ayurveda",
      bgColor: "from-green-800 to-emerald-950",
      symbol: "🌿"
    },
    {
      id: "gal-8",
      title: "Patient Consultation & Dispensing Counter",
      category: "Store Front & Interior",
      caption: "Dedicated qualified pharmacist counter providing clear dosage instruction and generic drug guidance in Bodhgaya.",
      badge: "Interior View",
      bgColor: "from-teal-700 to-emerald-900",
      symbol: "👨‍⚕️"
    }
  ];

  const categories = ['All', 'Store Front & Interior', 'Medicine Shelves', 'Diagnostic Devices', 'Surgical & Wellness'];

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="flex-1 w-full bg-slate-50 dark:bg-slate-950">
      <SEOHead
        title="Store Gallery & Facilities | Namo Buddha Medical Hall Bodhgaya"
        description="View photos of Namo Buddha Medical Hall in Bodhgaya: Store front, organized medicine shelves, cold-chain insulin storage, diagnostic equipment, and surgical supplies."
        canonicalPath="/gallery"
        breadcrumbs={[{ name: "Gallery", path: "/gallery" }]}
      />

      <Breadcrumbs items={[{ name: "Store Gallery", path: "/gallery" }]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold backdrop-blur">
            Store Facilities & Equipment
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Namo Buddha Store Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Take a visual tour of our clean, well-stocked pharmacy, advanced cold-chain storage, and diagnostic equipment counters in Bodhgaya.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Graphic Visual Representation Box */}
              <div className={`relative h-48 w-full bg-gradient-to-br ${item.bgColor} p-6 flex flex-col items-center justify-center text-white overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors" />
                <span className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                  {item.symbol}
                </span>
                <span className="relative z-10 mt-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 backdrop-blur border border-white/20 text-white">
                  {item.badge}
                </span>
                <div className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Text Info */}
              <div className="p-4 space-y-2">
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POPUP LIGHTBOX WITH ZOOM & NAVIGATION */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in select-none">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            aria-label="Previous Image"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            aria-label="Next Image"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Modal Display Card */}
          <div className="max-w-2xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl text-white">
            <div className={`h-72 sm:h-96 w-full bg-gradient-to-br ${filteredItems[activeLightboxIndex].bgColor} flex flex-col items-center justify-center p-8 relative`}>
              <span className="text-8xl animate-bounce-short">
                {filteredItems[activeLightboxIndex].symbol}
              </span>
              <span className="mt-4 px-3 py-1 rounded-full bg-black/30 backdrop-blur text-xs font-semibold text-white border border-white/20">
                {filteredItems[activeLightboxIndex].badge}
              </span>
            </div>

            <div className="p-6 space-y-3 bg-slate-900">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  {filteredItems[activeLightboxIndex].category}
                </span>
                <span className="text-xs text-slate-400">
                  {activeLightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                {filteredItems[activeLightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {filteredItems[activeLightboxIndex].caption}
              </p>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Namo Buddha Medical Hall • Bodhgaya</span>
                </div>
                <button
                  onClick={() => {
                    closeLightbox();
                    onOpenOrderModal(filteredItems[activeLightboxIndex].title);
                  }}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

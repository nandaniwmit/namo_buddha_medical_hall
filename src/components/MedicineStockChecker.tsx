import React, { useState, useMemo } from 'react';
import { Search, Filter, CheckCircle, AlertTriangle, XCircle, ShoppingBag, Sparkles, RefreshCw } from 'lucide-react';
import medicineDataRaw from '../data/medicineStock.json';
import { SITE_CONFIG } from '../config/siteConfig';

export interface MedicineItem {
  id: string;
  name: string;
  genericName: string;
  brand: string;
  category: string;
  dosageForm: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock' | string;
  requiresPrescription: boolean;
  description: string;
}

interface MedicineStockCheckerProps {
  onQuickOrder?: (medicineName: string) => void;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({ onQuickOrder }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  // Categorize unique categories
  const categories = useMemo(() => {
    const list = ['All', ...new Set(medicineDataRaw.map((item) => item.category))];
    return list;
  }, []);

  // Filtered medicines
  const filteredMedicines = useMemo(() => {
    return (medicineDataRaw as MedicineItem[]).filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStatus = statusFilter === 'All' || item.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, statusFilter]);

  const handleOrderWhatsApp = (medicine: MedicineItem) => {
    if (onQuickOrder) {
      onQuickOrder(`${medicine.name} (${medicine.dosageForm})`);
    } else {
      const msg = `Hello Namo Buddha Medical Hall, I want to inquire/order *${medicine.name}* (Brand: ${medicine.brand}, MRP: ₹${medicine.mrp}). Please confirm availability.`;
      window.open(`https://wa.me/${SITE_CONFIG.phone.internationalWhatsApp}?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Available</span>
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Limited Stock</span>
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
            <XCircle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
            <span>Out of Stock</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div id="stock-checker" className="w-full bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      {/* Header Banner */}
      <div className="p-6 md:p-8 bg-gradient-to-r from-emerald-700 via-teal-700 to-sky-800 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-emerald-100 text-xs font-semibold backdrop-blur-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>Live Bodhgaya Pharmacy Inventory Checker</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Medicine Stock & Availability Checker
          </h2>
          <p className="text-sm md:text-base text-emerald-100/90 mt-2">
            Search our comprehensive stock of genuine prescription medicines, OTC drugs, health monitors, and surgical supplies instantly.
          </p>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="p-5 md:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Medicine Name, Generic Formula, Brand (e.g., Dolo, Augmentin, Insulin, Omron)..."
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none shadow-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 px-1.5 py-0.5 rounded"
              >
                Clear
              </button>
            )}
          </div>

          {/* Status Quick Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-500 dark:text-slate-400 hidden sm:inline" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            >
              <option value="All">All Stock Statuses</option>
              <option value="Available">Available in Store</option>
              <option value="Limited Stock">Limited Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs">
          <span className="font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap">Categories:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Section */}
      <div className="p-5 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
            Showing <span className="text-emerald-600 dark:text-emerald-400 font-bold">{filteredMedicines.length}</span> results
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
              setStatusFilter('All');
            }}
            className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset filters</span>
          </button>
        </div>

        {filteredMedicines.length === 0 ? (
          <div className="text-center py-12 px-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30">
            <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mx-auto mb-3 text-slate-500">
              <Search className="w-6 h-6" />
            </div>
            <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200">
              Medicine not found in catalog?
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-1 mb-4">
              We stock over 5,000+ brands in our physical Bodhgaya store. Send your doctor's prescription directly on WhatsApp and we will verify stock immediately.
            </p>
            <a
              href={`https://wa.me/${SITE_CONFIG.phone.internationalWhatsApp}?text=${encodeURIComponent(`Hello Namo Buddha Medical Hall, I am searching for "${searchTerm}". Is it available?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Ask Pharmacist on WhatsApp</span>
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMedicines.map((medicine) => (
              <div
                key={medicine.id}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 p-4 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                      {medicine.category}
                    </span>
                    {getStatusBadge(medicine.status)}
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base leading-snug">
                    {medicine.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic mt-0.5 line-clamp-1">
                    {medicine.genericName}
                  </p>

                  <div className="mt-2.5 pt-2.5 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Brand / Mfr:</span>
                      <span className="font-medium">{medicine.brand}</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block">Pack / Form:</span>
                      <span className="font-medium">{medicine.dosageForm}</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block">Batch Expiry:</span>
                      <span className="font-medium text-slate-700 dark:text-slate-300">{medicine.expiry}</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block">Approx MRP:</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">₹{medicine.mrp.toFixed(2)}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 line-clamp-2">
                    {medicine.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                  {medicine.requiresPrescription && (
                    <span className="text-[10px] font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-1.5 py-0.5 rounded">
                      Rx Required
                    </span>
                  )}
                  <button
                    onClick={() => handleOrderWhatsApp(medicine)}
                    className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Order / Inquire</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { 
  Pill, 
  Stethoscope, 
  Activity, 
  Scissors, 
  HeartHandshake, 
  ShieldCheck, 
  Thermometer, 
  HeartPulse, 
  Baby, 
  Sparkles, 
  ShoppingBag, 
  Upload, 
  PhoneCall, 
  CheckCircle2,
  Clock,
  Truck
} from 'lucide-react';
import { SITE_CONFIG, SERVICES_LIST } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface ServicesProps {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenOrderModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const detailedServices = [
    {
      id: "prescription-medicines",
      title: "Prescription Medicines (Rx)",
      category: "Allopathic",
      icon: <Pill className="w-6 h-6" />,
      tagline: "100% Genuine & Batch-Certified Formulations",
      desc: "We stock all physician-prescribed medications across cardiology, diabetology, neurology, nephrology, gastroenterology, pediatrics, and dermatology. Sourced directly from premier pharmaceutical companies.",
      items: [
        "Cardiovascular & Anti-Hypertensive Drugs",
        "Type-1 & Type-2 Anti-Diabetic Agents",
        "Broad-Spectrum & Targeted Antibiotics",
        "Neurological & Psychiatric Formulations",
        "Gastro-resistant & Acid Reflux Treatments"
      ]
    },
    {
      id: "cold-chain-insulin",
      title: "Cold-Chain Biologicals & Vaccines",
      category: "Specialized Rx",
      icon: <Thermometer className="w-6 h-6" />,
      tagline: "Dedicated 2°C to 8°C Medical Refrigeration",
      desc: "Strictly regulated cold-chain storage for human insulins, pen cartridges, pediatric vaccines, immunoglobulins, and biologics with temperature monitoring logs.",
      items: [
        "Lantus, Humalog & Novorapid Insulin Pens",
        "Hepatitis & Tetanus Toxoid Vaccines",
        "Pediatric Immunization Drops & Vials",
        "Insulin Syringes, Needles & Cold Pouch Travel Bags"
      ]
    },
    {
      id: "otc-daily-care",
      title: "OTC & Daily Healthcare Essentials",
      category: "General Healthcare",
      icon: <Stethoscope className="w-6 h-6" />,
      tagline: "Everyday Wellness & Fast Symptom Relief",
      desc: "Comprehensive over-the-counter remedies for sudden fever, headaches, muscular pain, common cough/cold, digestive complaints, oral ulcers, and eye strain.",
      items: [
        "Antipyretics & Pain Relief Strips",
        "Cough Syrups & Lozenge Drops",
        "WHO Formula Oral Rehydration Salts (ORS)",
        "Digestive Antacids & Enzymatic Syrups",
        "Eye, Ear & Nasal Decongestant Drops"
      ]
    },
    {
      id: "health-devices",
      title: "Digital Health Devices & Diagnostic Equipment",
      category: "Medical Devices",
      icon: <Activity className="w-6 h-6" />,
      tagline: "Certified Accuracy with Warranty",
      desc: "Top-grade digital diagnostics for patient home monitoring and clinic requirements. We offer free on-counter demonstration and battery check.",
      items: [
        "Digital Upper-Arm Blood Pressure Monitors (Omron)",
        "Blood Glucose Meters & Test Strips (Accu-Chek)",
        "Fingertip Pulse Oximeters & Respiration Trackers",
        "Compressor Nebulizers for Adult & Child Asthma",
        "Infrared Forehead & Digital Thermometers"
      ]
    },
    {
      id: "surgical-supplies",
      title: "Surgical Supplies & Hospital Disposables",
      category: "Surgical & Hospital",
      icon: <Scissors className="w-6 h-6" />,
      tagline: "Sterile & Hospital-Grade Consumables",
      desc: "Complete stock of surgical dressings, wound care materials, orthopedic supports, and disposable hygiene products for clinics, patients, and post-surgery care.",
      items: [
        "Sterile Cotton, Rolled Gauze & Micropore Tapes",
        "Orthopedic Crepe Bandages, Knee & Ankle Braces",
        "Disposable Latex & Nitrile Examination Gloves",
        "IV Infusion Sets, Scalp Vein Sets & Cannula",
        "Adult Diapers, Underpads & Bed Protectors"
      ]
    },
    {
      id: "baby-maternal-care",
      title: "Baby & Maternal Wellness",
      category: "Pediatric Care",
      icon: <Baby className="w-6 h-6" />,
      tagline: "Gentle, Pediatric-Safe Products",
      desc: "Nourishing and skin-safe care products for infants and expectant mothers. High-standard formulas, feeding accessories, and pediatric nutritional supplements.",
      items: [
        "Infant Milk Formulas & Stage-Specific Nutrition",
        "Hypoallergenic Baby Shampoos, Soaps & Creams",
        "Premium Diapers & Biodegradable Wet Wipes",
        "Teething Gels, Gripe Water & Colic Drops",
        "Prenatal & Lactation Dietary Supplements"
      ]
    },
    {
      id: "supplements-ayurveda",
      title: "Supplements, Vitamins & Ayurvedic Wellness",
      category: "Nutrition & Ayurveda",
      icon: <ShieldCheck className="w-6 h-6" />,
      tagline: "Holistic Health, Immunity & Vitality",
      desc: "Boost your daily immunity and nutrient balance with doctor-formulated multivitamins, minerals, calcium, and authentic certified Ayurvedic formulations.",
      items: [
        "Vitamin D3, B-Complex & Zinc Formulations",
        "Calcium & Glucosamine Joint Support",
        "Protein Supplements & Nutritional Drinks",
        "Dabur, Baidyanath & Himalaya Ayurvedic Range",
        "Herbal Immunity Boosters & Pure Honey"
      ]
    },
    {
      id: "home-care-rehab",
      title: "Home Patient Care & Mobility Aids",
      category: "Home Care",
      icon: <HeartPulse className="w-6 h-6" />,
      tagline: "Assistance for Seniors & Recovering Patients",
      desc: "Durable medical equipment and comfort accessories designed to aid recovery, mobility, and peaceful home nursing care.",
      items: [
        "Adjustable Walking Sticks & Quadripod Canes",
        "Orthopedic Lumbar Support Belts & Cervical Collars",
        "Electric Heating Pads & Hot Water Bags",
        "Air Mattresses for Bedridden Bed-Sore Prevention",
        "Digital Suction Units & Vaporizers"
      ]
    }
  ];

  return (
    <div className="flex-1 w-full bg-slate-50 dark:bg-slate-950">
      <SEOHead
        title="Pharmacy Services & Medicine Stock | Namo Buddha Medical Hall Bodhgaya"
        description="Explore complete pharmacy services: Prescription medicines, cold-chain insulin, health monitors, surgical disposables, baby care, and our instant searchable Medicine Stock Checker in Bodhgaya."
        canonicalPath="/services"
        breadcrumbs={[{ name: "Services & Stock", path: "/services" }]}
      />

      <Breadcrumbs items={[{ name: "Services & Medicine Stock", path: "/services" }]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold backdrop-blur">
            Comprehensive Pharmacy Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Pharmacy Services & Medicine Stock
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            From critical life-saving prescription drugs to surgical consumables and home diagnostic equipment in Bodhgaya.
          </p>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: MEDICINE STOCK CHECKER (Step 16) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <MedicineStockChecker onQuickOrder={(medicineName) => onOpenOrderModal(medicineName)} />
      </section>

      {/* PRESCRIPTION UPLOAD BANNER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <div className="bg-gradient-to-r from-sky-700 via-teal-700 to-emerald-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold">
              <Upload className="w-3.5 h-3.5" />
              <span>Have a Doctor's Prescription?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Upload via WhatsApp for Instant Order Fulfillment
            </h3>
            <p className="text-xs sm:text-sm text-sky-100 max-w-xl">
              Snap a clear photo of your prescription. Our licensed pharmacist will verify the dosages, calculate maximum savings, and arrange quick delivery or in-store pickup.
            </p>
          </div>
          <button
            onClick={() => onOpenOrderModal()}
            className="px-6 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs sm:text-sm shadow-lg whitespace-nowrap transition-transform hover:scale-105 cursor-pointer"
          >
            Upload Prescription on WhatsApp
          </button>
        </div>
      </section>

      {/* DETAILED CATEGORY-WISE SERVICES */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            All Healthcare Categories
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Complete Pharmacy Services & Healthcare Supplies
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
            Every department at Namo Buddha Medical Hall is staffed by qualified professionals and stocked with authentic products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {detailedServices.map((srv) => (
            <div
              key={srv.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    {srv.icon}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {srv.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {srv.title}
                </h3>
                <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">
                  {srv.tagline}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                  {srv.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-2">
                    Key Available Supplies:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {srv.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <a
                  href={`tel:${SITE_CONFIG.phone.raw}`}
                  className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Store</span>
                </a>
                <button
                  onClick={() => onOpenOrderModal(srv.title)}
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Inquire / Order on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY OUR DISPENSARY STANDS OUT */}
      <section className="bg-slate-100/70 dark:bg-slate-900/60 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <Truck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Rapid Local Delivery</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Prompt doorstep delivery across Bodhgaya hotels, monasteries, and residences.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center mx-auto">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Daily 7 AM – 10:30 PM</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Convenient long hours and on-call emergency response 24 hours a day.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center mx-auto">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">100% Genuine Pharma</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Zero compromises on medication authenticity and proper cold storage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

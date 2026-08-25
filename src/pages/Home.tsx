import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Truck, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Pill, 
  Activity, 
  Stethoscope, 
  Scissors, 
  HeartHandshake, 
  Star, 
  HelpCircle, 
  Send, 
  Mail, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG, SERVICES_LIST, STORE_STATS, FREQUENT_FAQS, HEALTH_TIPS, REVIEWS_LIST } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';
import { PWAInstallButton } from '../components/PWAInstallButton';

interface HomeProps {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenOrderModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  // Icon mapping for services
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill': return <Pill className="w-6 h-6" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6" />;
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'Scissors': return <Scissors className="w-6 h-6" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6" />;
      default: return <ShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <div className="flex-1 w-full bg-slate-50 dark:bg-slate-950">
      <SEOHead
        title="Namo Buddha Medical Hall | Trusted Pharmacy in Bodhgaya, Bihar"
        description="Providing genuine medicines, healthcare products, surgical supplies, baby care, and daily medical essentials in Bodhgaya near Bus Stand. Order on WhatsApp or Call 9939076109."
        canonicalPath="/"
        isFAQPage={true}
      />

      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-900 via-teal-900 to-slate-900 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        {/* Subtle decorative mesh background */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0A8F6A_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold backdrop-blur border border-white/15">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Bodhgaya's Premier Licensed Medical Store</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Your Trusted Pharmacy for <span className="text-emerald-400">Genuine Medicines</span> & Healthcare Needs
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices.
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              {/* Call Now */}
              <a
                href={`tel:${SITE_CONFIG.phone.raw}`}
                className="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-sky-600/30 transition-all hover:scale-102 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              {/* WhatsApp Order */}
              <button
                onClick={() => onOpenOrderModal()}
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/30 transition-all hover:scale-102 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Order</span>
              </button>

              {/* Get Directions */}
              <a
                href={SITE_CONFIG.address.googleMapsDirectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm flex items-center gap-2 backdrop-blur border border-white/20 transition-all hover:scale-102"
              >
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Quick Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Authentic Pharma</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Open 7:00 AM – 10:30 PM</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Licensed Pharmacist</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-white/10 dark:bg-slate-900/60 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-left space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center font-bold text-xl">
                    NB
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Quick Stock & Order</h3>
                    <p className="text-xs text-slate-300">Fast delivery across Bodhgaya</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
                  Open Now
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-200">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-medium">Prescription Medicines</span>
                  <span className="text-emerald-400 font-semibold">Available</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-medium">Cold-Chain Insulin & Vaccines</span>
                  <span className="text-emerald-400 font-semibold">In Stock</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-medium">Health Monitors (BP / Sugar)</span>
                  <span className="text-emerald-400 font-semibold">Certified</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/services#stock-checker"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Check Live Medicine Stock</span>
                </Link>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                Need urgent assistance? Call our pharmacist at <strong className="text-white">{SITE_CONFIG.phone.display}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STORE_STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SHORT ABOUT PREVIEW (Strict preview with View More) */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
              About Namo Buddha Medical Hall
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Rooted in Bodhgaya, Dedicated to Your Family's Health
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Situated in the heart of Bodhgaya near the Bus Stand and Super Market, Namo Buddha Medical Hall has been the trusted healthcare partner for local residents, international pilgrims, and visiting travelers since 2015.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Zero Compromise on Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Qualified Pharmacist Advice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Fast WhatsApp Home Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Emergency 24/7 Support</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:underline group"
              >
                <span>Read Our Full Story & Milestones</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Store Highlights
                </span>
                <span className="text-xs text-emerald-600 font-semibold">Bodhgaya, Gaya</span>
              </div>
              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <p>
                  • <strong>Direct Manufacturer Sourcing:</strong> Sourced from trusted pharma leaders (Sun Pharma, Cipla, Alkem, Abbott, Glenmark, Micro Labs).
                </p>
                <p>
                  • <strong>Cold-Chain Security:</strong> Temperature monitoring for diabetic and biological products.
                </p>
                <p>
                  • <strong>Tourists & Pilgrim Friendly:</strong> Multilingual assistance and international generic drug mapping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED SERVICES (Max 6 preview with View More) */}
      <section className="bg-slate-100/70 dark:bg-slate-900/60 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Complete Healthcare Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Featured Pharmacy Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              From daily prescription drugs to specialized surgical equipment and home monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-850 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                    {service.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => onOpenOrderModal(service.title)}
                    className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                  >
                    Inquire on WhatsApp →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-colors"
            >
              <span>Explore All Pharmacy Services & Live Stock</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Why Namo Buddha
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Why Patients & Doctors Trust Our Pharmacy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">100% Genuine Guarantee</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              We never deal in unverified or duplicate pharmaceuticals. Every strip and bottle is serial tracked with valid expiration dates and licensed distributors.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">Prompt Local Delivery</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Simply photograph your prescription or list your requirements on WhatsApp. We dispatch quickly to homes, hotels, and monasteries across Bodhgaya.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">24/7 Emergency Support</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Illness does not follow store hours. In critical emergencies, reach our direct helpline at 9939076109 for urgent medicine dispatch.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FEATURED PRODUCTS PREVIEW */}
      <section className="bg-slate-100/70 dark:bg-slate-900/60 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Popular Healthcare Essentials
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Featured Medical Products
              </h2>
            </div>
            <Link
              to="/services#stock-checker"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>View Full 5,000+ Medicine Inventory</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "Omron HEM-7120 BP Monitor", category: "Diagnostic Device", price: "₹2,150", status: "In Stock" },
              { name: "Accu-Chek Active Strips 50s", category: "Diabetes Care", price: "₹1,050", status: "In Stock" },
              { name: "Lantus SoloStar Insulin", category: "Cold-Chain Rx", price: "₹725", status: "Cold Stored" },
              { name: "Dabur Chyawanprash 1kg", category: "Ayurvedic Immunity", price: "₹395", status: "In Stock" }
            ].map((prod, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-850 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                  {prod.category}
                </span>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">{prod.name}</h4>
                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">{prod.price}</span>
                  <span className="text-[11px] text-slate-500">{prod.status}</span>
                </div>
                <button
                  onClick={() => onOpenOrderModal(prod.name)}
                  className="w-full py-2 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950 dark:hover:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-semibold text-xs transition-colors cursor-pointer"
                >
                  Order on WhatsApp
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS PREVIEW */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Real Customer Experiences
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Trusted by Bodhgaya Residents & Pilgrims
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_LIST.slice(0, 3).map((review, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-1 text-amber-400 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  "{review.comment}"
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">{review.name}</h4>
                  <p className="text-[11px] text-slate-500">{review.role}</p>
                </div>
                <span className="text-[10px] text-slate-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FAQ PREVIEW */}
      <section className="bg-slate-100/70 dark:bg-slate-900/60 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Common Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FREQUENT_FAQS.slice(0, 4).map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-850 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs"
              >
                <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 pl-6.5 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              to="/contact"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Have another question? Contact our pharmacist →
            </Link>
          </div>
        </div>
      </section>

      {/* 9. LATEST HEALTH TIPS PREVIEW */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Pharmacist Advice
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Latest Health & Medicine Tips
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HEALTH_TIPS.map((tip) => (
            <div
              key={tip.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                  {tip.category}
                </span>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white mt-2">
                  {tip.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {tip.summary}
                </p>
              </div>
              <span className="text-[10px] text-slate-400 pt-2">{tip.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CALL TO ACTION (CTA) */}
      <section className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Need Medicines Delivered in Bodhgaya Today?
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl mx-auto">
            Send your doctor's prescription directly on WhatsApp or call our pharmacy desk for immediate dispatch.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenOrderModal()}
              className="px-6 py-3 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-xs shadow-lg transition-colors cursor-pointer"
            >
              Order via WhatsApp ({SITE_CONFIG.phone.display})
            </button>
            <a
              href={`tel:${SITE_CONFIG.phone.raw}`}
              className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs border border-emerald-500 shadow-lg transition-colors"
            >
              Call Store Directly
            </a>
          </div>
        </div>
      </section>

      {/* 11. NEWSLETTER */}
      <section className="bg-white dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Subscribe for Bodhgaya Health Updates & Tips
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Receive seasonal healthcare alerts, monsoon precaution tips, and new stock arrivals directly in your inbox.
          </p>
          {newsletterSubscribed ? (
            <div className="p-3 rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200 text-xs font-semibold">
              ✓ Thank you for subscribing! You will receive our monthly health digest.
            </div>
          ) : (
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

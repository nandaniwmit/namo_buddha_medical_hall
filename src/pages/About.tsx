import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  Clock, 
  MapPin, 
  Heart, 
  CheckCircle2, 
  UserCheck, 
  Building2, 
  Calendar,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG, STORE_STATS } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface AboutProps {
  onOpenOrderModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenOrderModal }) => {
  const milestones = [
    {
      year: "2015",
      title: "Founding in Bodhgaya",
      desc: "Namo Buddha Medical Hall opened its doors in Super Market near Bodhgaya Bus Stand to bring genuine allopathic medicines to local families."
    },
    {
      year: "2018",
      title: "Cold-Chain & Biologicals Expansion",
      desc: "Installed advanced medical-grade refrigeration units to store temperature-sensitive insulins, vaccines, and pediatric biologics safely."
    },
    {
      year: "2021",
      title: "Diagnostic Equipment & Surgical Section",
      desc: "Expanded into hospital-grade surgical items, digital BP machines, glucometers, and rehabilitation aids with direct manufacturer warranties."
    },
    {
      year: "2024",
      title: "WhatsApp Express Prescription Service",
      desc: "Introduced digital WhatsApp prescription ordering and rapid home/hotel delivery for local residents and international pilgrims."
    },
    {
      year: "2026",
      title: "Modern PWA & Digital Inventory Platform",
      desc: "Launched our real-time stock checker applet to empower patients with immediate medicine availability verification before visiting."
    }
  ];

  return (
    <div className="flex-1 w-full bg-slate-50 dark:bg-slate-950">
      <SEOHead
        title="About Us | Namo Buddha Medical Hall - Bodhgaya Pharmacy"
        description="Learn about Namo Buddha Medical Hall in Bodhgaya. Our story, registered pharmacists, mission, vision, and commitment to 100% genuine healthcare medicines since 2015."
        canonicalPath="/about"
        breadcrumbs={[
          { name: "About", path: "/about" }
        ]}
      />

      <Breadcrumbs items={[{ name: "About Us", path: "/about" }]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold backdrop-blur">
            Bodhgaya, Bihar • Established 2015
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            About Namo Buddha Medical Hall
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            A trusted sanctuary for authentic pharmaceuticals, patient-first counseling, and rapid healthcare delivery in the holy city of Bodhgaya.
          </p>
        </div>
      </section>

      {/* Business Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Our Heritage & Story
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Serving the Healthcare Needs of Bodhgaya with Integrity
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Located conveniently in the Super Market complex adjacent to the Bodhgaya Bus Stand and within walking proximity to the revered Mahabodhi Temple, Namo Buddha Medical Hall was established with a singular mission: to make authentic, life-saving medicines accessible, affordable, and reliably delivered to every resident and visitor in Bodhgaya.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              In an industry where counterfeit and improperly stored pharmaceuticals can threaten lives, we take immense pride in our uncompromising standards. Every product on our shelves is procured directly from licensed national distributors and maintained under strict temperature guidelines.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Drug Lic No: {SITE_CONFIG.registrationNumber}</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-emerald-600" />
                <span>Registered Pharmacist Supervision</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-xl space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-2xl shadow-lg shadow-emerald-600/30">
                  NB
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">Store Overview</h3>
                  <p className="text-xs text-slate-500">Retail & Wholesale Pharmacy</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-medium">Primary Location:</span>
                  <span className="font-bold text-slate-900 dark:text-white">Super Market, Bodhgaya</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-medium">Operating Since:</span>
                  <span className="font-bold text-slate-900 dark:text-white">2015</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-medium">Stock Catalog:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">5,000+ Genuine Brands</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Direct WhatsApp Line:</span>
                  <span className="font-bold text-sky-600 dark:text-sky-400">{SITE_CONFIG.phone.display}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="bg-slate-100/70 dark:bg-slate-900/60 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Mission, Vision & Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mission */}
            <div className="bg-white dark:bg-slate-850 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                To guarantee immediate access to 100% authentic medicines, surgical consumables, and healthcare guidance for everyone in Bodhgaya, backed by transparent pricing and courteous service.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-slate-850 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                To be Bodhgaya’s foremost healthcare provider, blending traditional community warmth with modern digital conveniences like live stock verification and instant doorstep delivery.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white dark:bg-slate-850 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Core Values</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Honesty in every transaction, strict quality control, cold-chain safety adherence, empathy towards patients, and rapid responsiveness during medical emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner / Registered Pharmacist Message */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-850 rounded-3xl p-8 sm:p-10 border border-emerald-200 dark:border-slate-800 shadow-lg">
          <div className="space-y-4">
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
              From the Pharmacist's Desk
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              "Your Health and Trust are Our Sacred Duty"
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
              "Bodhgaya is a global spiritual landmark welcoming people from every corner of India and the world. At Namo Buddha Medical Hall, we believe patient care begins with honesty. When you purchase a medication from our store, you receive genuine formulations stored under proper conditions, explained clearly with dosage guidelines. Whether you are a local family or an international pilgrim needing urgent medical support, our doors and WhatsApp lines are always open to serve you."
            </p>
            <div className="pt-2">
              <p className="font-bold text-sm text-slate-900 dark:text-white">Chief Pharmacist & Management Team</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Namo Buddha Medical Hall, Bodhgaya</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Our Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Namo Buddha Milestones
          </h2>
        </div>

        <div className="relative border-l-2 border-emerald-500 ml-4 md:ml-32 space-y-8 pl-6">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-950" />
              <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs">
                <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                  {m.year}
                </span>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-2">
                  {m.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold">Have a Prescription to Fill?</h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          Send it via WhatsApp for immediate verification or call our store directly.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <button
            onClick={onOpenOrderModal}
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow transition-colors cursor-pointer"
          >
            Order on WhatsApp ({SITE_CONFIG.phone.display})
          </button>
          <a
            href={`tel:${SITE_CONFIG.phone.raw}`}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700"
          >
            Call Pharmacy
          </a>
        </div>
      </section>
    </div>
  );
};

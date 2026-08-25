import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Send, 
  MessageCircle, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle,
  Navigation,
  ShieldCheck
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ContactProps {
  onOpenOrderModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenOrderModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Medicine Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Auto prefill WhatsApp option
      const text = `*New Website Inquiry - Namo Buddha Medical Hall*
Name: ${formData.name}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}`;
      
      const sendViaWhatsapp = window.confirm(
        "Your message has been recorded! Would you like to also send it directly to our pharmacist's WhatsApp for instant response?"
      );
      if (sendViaWhatsapp) {
        window.open(`https://wa.me/${SITE_CONFIG.phone.internationalWhatsApp}?text=${encodeURIComponent(text)}`, '_blank');
      }

      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'General Medicine Inquiry',
        message: ''
      });
    }, 800);
  };

  return (
    <div className="flex-1 w-full bg-slate-50 dark:bg-slate-950">
      <SEOHead
        title="Contact Us & Directions | Namo Buddha Medical Hall Bodhgaya"
        description="Visit Namo Buddha Medical Hall at Super Market, near Bus Stand, Bodhgaya, Gaya, Bihar 824231. Call 9939076109, get Google Map directions, or order medicines on WhatsApp."
        canonicalPath="/contact"
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <Breadcrumbs items={[{ name: "Contact & Directions", path: "/contact" }]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold backdrop-blur">
            Super Market, Bodhgaya, Bihar 824231
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Contact & Store Directions
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Reach our registered pharmacist in Bodhgaya for medicine stock inquiries, prescription orders, emergency medicine dispatch, and directions.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Cards & Inquiry Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Business Info & Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800">
                Business Information
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Store Address</h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {SITE_CONFIG.address.fullAddress}
                    </p>
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-0.5">
                      Landmark: {SITE_CONFIG.address.landmark}
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Phone & Helpline</h3>
                    <a
                      href={`tel:${SITE_CONFIG.phone.raw}`}
                      className="text-sky-600 dark:text-sky-400 hover:underline font-bold text-base block mt-0.5"
                    >
                      {SITE_CONFIG.phone.display}
                    </a>
                    <p className="text-[11px] text-slate-500">
                      Direct WhatsApp & 24/7 Emergency Medicine Support
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Operating Hours</h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                      <strong>Monday – Saturday:</strong> {SITE_CONFIG.workingHours.timings}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      <strong>Sunday:</strong> {SITE_CONFIG.workingHours.sundayTimings}
                    </p>
                    <p className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                      ✓ Emergency On-Call available 24/7
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Email Address</h3>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-slate-600 dark:text-slate-400 hover:underline text-xs mt-0.5 block"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${SITE_CONFIG.phone.raw}`}
                  className="py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Store</span>
                </a>
                <button
                  onClick={onOpenOrderModal}
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Order</span>
                </button>
              </div>

              <a
                href={SITE_CONFIG.address.googleMapsDirectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow transition-colors"
              >
                <Navigation className="w-4 h-4 text-emerald-400" />
                <span>Get Google Map Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Quick Query
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  Send a Message to Our Pharmacist
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Have a question regarding drug availability, dosage, or bulk supplies? Fill out this form and we'll reply shortly.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300 max-w-md mx-auto">
                    Thank you. Our registered pharmacist at Namo Buddha Medical Hall has received your message and will contact you via phone or WhatsApp.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-4 py-2 text-xs font-semibold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Phone / WhatsApp Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Subject / Department
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      >
                        <option value="General Medicine Inquiry">General Medicine Inquiry</option>
                        <option value="Check Stock for Rare Drug">Check Stock for Rare / Chronic Drug</option>
                        <option value="Home Delivery Request">Home Delivery in Bodhgaya</option>
                        <option value="Diagnostic Equipment / BP Monitor">Medical Device Warranty / Purchase</option>
                        <option value="Surgical / Clinic Bulk Order">Surgical / Clinic Bulk Supply</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Message / Medicine Details <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify medication name, dosage strength, or any specific questions..."
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? 'Submitting Message...' : 'Send Inquiry to Namo Buddha'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Google Map Embed Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Find Namo Buddha Medical Hall on Google Maps
              </h2>
              <p className="text-xs text-slate-500">
                Ground Floor, Super Market, near Main Bus Stand, Bodhgaya, Gaya, Bihar
              </p>
            </div>
            <a
              href={SITE_CONFIG.address.googleMapsDirectionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              <span>Open in Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 h-80 sm:h-96 w-full relative">
            <iframe
              title="Namo Buddha Medical Hall Google Maps Location"
              src={SITE_CONFIG.address.googleMapsEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

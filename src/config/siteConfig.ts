// Centralized Business & Website Configuration for Namo Buddha Medical Hall

export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  registrationNumber: string;
  pharmacistInCharge: string;
  establishedYear: string;
  phone: {
    display: string;
    raw: string;
    whatsapp: string;
    internationalWhatsApp: string;
    emergency: string;
  };
  address: {
    shop: string;
    market: string;
    landmark: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    fullAddress: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectionUrl: string;
    latitude: number;
    longitude: number;
  };
  workingHours: {
    days: string;
    timings: string;
    emergencyService: string;
    sundayTimings: string;
  };
  email: string;
  website: string;
  theme: {
    primaryGreen: string;
    accentColor: string;
    medicalBlue: string;
  };
  socialLinks: {
    whatsapp: string;
    facebook: string;
    instagram: string;
    googleMaps: string;
  };
  pwa: {
    enabled: boolean;
    appName: string;
    shortName: string;
    themeColor: string;
    backgroundColor: string;
    startUrl: string;
    display: string;
  };
}

export const SITE_CONFIG: BusinessConfig = {
  name: "Namo Buddha Medical Hall",
  shortName: "Namo Buddha Med",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  category: "Retail & Wholesale Pharmacy",
  registrationNumber: "BR-GAYA-DL-2018/9842",
  pharmacistInCharge: "Registered Qualified Pharmacist (B.Pharm / D.Pharm)",
  establishedYear: "2015",
  phone: {
    display: "+91 99390 76109",
    raw: "9939076109",
    whatsapp: "9939076109",
    internationalWhatsApp: "919939076109",
    emergency: "+91 99390 76109"
  },
  address: {
    shop: "Shop No. 12-14, Ground Floor",
    market: "Super Market",
    landmark: "Near Main Bus Stand & Mahabodhi Temple Approach",
    city: "Bodhgaya",
    district: "Gaya",
    state: "Bihar",
    pincode: "824231",
    fullAddress: "Super Market, Bodhgaya, near Bus Stand, Gaya, Bihar 824231",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14467.581561726058!2d84.98188155!3d24.695992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32c32cf984a95%3A0x67db23eb64f514b8!2sBodh%20Gaya%2C%20Bihar%20824231!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionUrl: "https://maps.google.com/?q=Namo+Buddha+Medical+Hall+Super+Market+Bodhgaya+Gaya+Bihar+824231",
    latitude: 24.6961,
    longitude: 84.9870
  },
  workingHours: {
    days: "Monday – Saturday",
    timings: "07:00 AM – 10:30 PM",
    sundayTimings: "07:30 AM – 10:00 PM",
    emergencyService: "24/7 On-Call Emergency Medicine Support"
  },
  email: "contact@namobuddhamedical.com",
  website: "https://namobuddhamedical.com",
  theme: {
    primaryGreen: "#0A8F6A",
    accentColor: "#0A8F6A",
    medicalBlue: "#0369A1"
  },
  socialLinks: {
    whatsapp: "https://wa.me/919939076109",
    facebook: "https://facebook.com/namobuddhamedicalhall",
    instagram: "https://instagram.com/namobuddhamedicalhall",
    googleMaps: "https://maps.google.com/?q=Namo+Buddha+Medical+Hall+Bodhgaya"
  },
  pwa: {
    enabled: true,
    appName: "Namo Buddha Medical Hall",
    shortName: "Namo Buddha Med",
    themeColor: "#0A8F6A",
    backgroundColor: "#F8FAFC",
    startUrl: "/",
    display: "standalone"
  }
};

export const SERVICES_LIST = [
  {
    id: "rx-medicines",
    title: "Prescription Medicines",
    category: "Allopathic",
    description: "100% genuine pharmaceutical drugs sourced straight from certified manufacturers with proper temperature-controlled storage and batch tracking.",
    icon: "Pill",
    highlights: ["Temperature-Controlled Storage", "Batch & Expiry Verified", "Direct from Top Pharma"]
  },
  {
    id: "otc-medicines",
    title: "OTC & Daily Healthcare",
    category: "General Health",
    description: "Wide range of over-the-counter pain relief, fever medications, cough syrups, antacids, digestive aids, and dermatological ointments.",
    icon: "Stethoscope",
    highlights: ["First-Aid Essentials", "Cold & Flu Care", "Digestive Remedies"]
  },
  {
    id: "health-devices",
    title: "Health Monitoring Devices",
    category: "Diagnostic Equipment",
    description: "Certified digital BP monitors, blood glucose meters, test strips, pulse oximeters, nebulizers, and infrared thermometers with warranties.",
    icon: "Activity",
    highlights: ["Omron & Accu-Chek", "Digital Accuracy", "Free Usage Guidance"]
  },
  {
    id: "surgical-supplies",
    title: "Surgical Supplies & Disposables",
    category: "Surgical & Hospital",
    description: "Sterile gauze, surgical bandages, cannula, IV sets, disposable gloves, orthopedic braces, crepe bandages, and post-surgery care items.",
    icon: "Scissors",
    highlights: ["Hospital-Grade Sterility", "Orthopedic Braces", "Bulk Discounts"]
  },
  {
    id: "baby-mom-care",
    title: "Baby & Mother Care",
    category: "Pediatric & Maternal",
    description: "Pediatric formulas, baby skincare, feeding bottles, diapers, gripe water, pregnancy vitamins, and maternal wellness essentials.",
    icon: "HeartHandshake",
    highlights: ["Himalaya & Sebamed", "Pediatric Safe", "Lactation Nutrition"]
  },
  {
    id: "supplements-ayurveda",
    title: "Supplements & Herbal Wellness",
    category: "Nutritional & Herbal",
    description: "Vitamins (D3, B-Complex, C), whey proteins, zinc, calcium supplements, Chyawanprash, and authentic Dabur, Baidyanath, and Himalaya herbal medicines.",
    icon: "ShieldCheck",
    highlights: ["Immunity Boosters", "Authentic Ayurveda", "Doctor-Recommended"]
  }
];

export const STORE_STATS = [
  { label: "Years Serving Bodhgaya", value: "9+" },
  { label: "Genuine Medicines Stocked", value: "5,000+" },
  { label: "Satisfied Customers & Patients", value: "25,000+" },
  { label: "Authenticity Guarantee", value: "100%" }
];

export const FREQUENT_FAQS = [
  {
    question: "How can I order medicines via WhatsApp from Namo Buddha Medical Hall?",
    answer: "Simply click the 'WhatsApp Order' button on our website or text our WhatsApp number 9939076109. You can take a clear photo of your doctor's prescription, send your list of medicines, and provide your delivery address in Bodhgaya. Our registered pharmacist will confirm the availability, MRP discount, and arrange delivery or keep it ready for quick pickup."
  },
  {
    question: "Do you provide genuine and temperature-sensitive medicines (like Insulin)?",
    answer: "Yes, 100%. All medicines at Namo Buddha Medical Hall are procured directly through licensed distributors of top pharmaceutical companies. We maintain cold-chain storage refrigerators for Insulin, vaccines, and biologics to preserve potency at all times."
  },
  {
    question: "Where is Namo Buddha Medical Hall located in Bodhgaya?",
    answer: "We are centrally located at Super Market, Ground Floor, right near the main Bodhgaya Bus Stand and within walking distance of the Mahabodhi Temple area in Gaya, Bihar (PIN: 824231)."
  },
  {
    question: "Are emergency medicines available outside normal operating hours?",
    answer: "Yes! While our regular counter hours are 7:00 AM to 10:30 PM daily, we provide 24/7 emergency medicine support on-call for urgent patient requirements. Call 9939076109 immediately in emergencies."
  },
  {
    question: "Do you provide medical equipment like BP machines, Oximeters, and Nebulizers?",
    answer: "Yes, we stock top-brand digital blood pressure monitors, pulse oximeters, nebulizers, steam inhalers, orthopedic heating pads, walking sticks, and adult diapers with manufacturer warranty."
  },
  {
    question: "Can international tourists and pilgrims visiting Bodhgaya purchase medicines here?",
    answer: "Absolutely. We routinely serve international Buddhist pilgrims, tourists, and monastery residents visiting Bodhgaya. Our team assists with English communication, generic drug substitutions, and travelers' health kits."
  }
];

export const HEALTH_TIPS = [
  {
    id: "tip-1",
    title: "Safe Storage of Daily Medications & Insulin",
    summary: "Keep regular tablets in a cool, dry place away from direct sunlight. Insulin pens and vials should always be stored at 2°C to 8°C.",
    date: "August 2026",
    category: "Medicine Safety"
  },
  {
    id: "tip-2",
    title: "Why You Must Complete Your Antibiotic Course",
    summary: "Stopping antibiotics early just because symptoms improved can lead to antibiotic resistance and bacterial relapse.",
    date: "August 2026",
    category: "Antibiotic Care"
  },
  {
    id: "tip-3",
    title: "Hydration & Electrolyte Balance for Pilgrims in Gaya",
    summary: "Bodhgaya's weather requires regular hydration. Carry ORS packets or electrolyte solutions during daytime sightseeing.",
    date: "August 2026",
    category: "Wellness & Travel"
  }
];

export const REVIEWS_LIST = [
  {
    name: "Dr. R. K. Sharma",
    role: "Local Medical Practitioner, Bodhgaya",
    rating: 5,
    date: "July 2026",
    comment: "Namo Buddha Medical Hall is the most reliable pharmacy in the Bodhgaya Super Market area. Always well-stocked with genuine brand medicines, vaccines, and emergency injectables."
  },
  {
    name: "Sunil Kumar Gupta",
    role: "Resident, Bus Stand Road, Bodhgaya",
    rating: 5,
    date: "August 2026",
    comment: "Prompt WhatsApp medicine delivery service! I ordered chronic diabetes medications for my parents and they delivered within 45 minutes with genuine bills and reasonable prices."
  },
  {
    name: "Thich Nhat Tan",
    role: "Monastery Coordinator & Pilgrim",
    rating: 5,
    date: "May 2026",
    comment: "Very helpful and courteous pharmacists. They assisted us in finding generic equivalents for our international prescription medicines with great clarity."
  },
  {
    name: "Pooja Verma",
    role: "Mother & Local Teacher, Gaya",
    rating: 5,
    date: "June 2026",
    comment: "The best store in Bodhgaya for baby care formulas, diapers, and pediatric syrups. Safe, neat, and highly professional staff."
  }
];

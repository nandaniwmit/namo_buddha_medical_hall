import React, { useEffect } from 'react';
import { SITE_CONFIG, FREQUENT_FAQS } from '../config/siteConfig';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  breadcrumbs?: Array<{ name: string; path: string }>;
  isFAQPage?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = `${SITE_CONFIG.name} | Trusted Pharmacy in Bodhgaya, Bihar`,
  description = `Namo Buddha Medical Hall at Super Market, near Bus Stand, Bodhgaya. Genuine medicines, healthcare devices, surgical supplies, and instant WhatsApp ordering. Call ${SITE_CONFIG.phone.display}.`,
  canonicalPath = '/',
  breadcrumbs,
  isFAQPage = false
}) => {
  useEffect(() => {
    // Set Title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE_CONFIG.website}${canonicalPath}`);

    // Inject Structured Data JSON-LD
    const schemas: object[] = [
      // Pharmacy Schema
      {
        "@context": "https://schema.org",
        "@type": "Pharmacy",
        "name": SITE_CONFIG.name,
        "alternateName": SITE_CONFIG.shortName,
        "image": `${SITE_CONFIG.website}/icons/icon.svg`,
        "@id": `${SITE_CONFIG.website}/#pharmacy`,
        "url": SITE_CONFIG.website,
        "telephone": SITE_CONFIG.phone.display,
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": SITE_CONFIG.address.fullAddress,
          "addressLocality": SITE_CONFIG.address.city,
          "addressRegion": SITE_CONFIG.address.state,
          "postalCode": SITE_CONFIG.address.pincode,
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": SITE_CONFIG.address.latitude,
          "longitude": SITE_CONFIG.address.longitude
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "07:00",
            "closes": "22:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday"],
            "opens": "07:30",
            "closes": "22:00"
          }
        ],
        "hasMap": SITE_CONFIG.address.googleMapsDirectionUrl,
        "paymentAccepted": "Cash, UPI, PhonePe, Google Pay, Paytm, Credit Card, Debit Card",
        "currenciesAccepted": "INR"
      }
    ];

    // Breadcrumbs Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": crumb.name,
          "item": `${SITE_CONFIG.website}${crumb.path}`
        }))
      });
    }

    // FAQ Schema
    if (isFAQPage) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FREQUENT_FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      });
    }

    // Inject Script Element
    let scriptTag = document.getElementById('jsonld-schema') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'jsonld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemas);

    return () => {
      // clean up on unmount if needed
    };
  }, [title, description, canonicalPath, breadcrumbs, isFAQPage]);

  return null;
};

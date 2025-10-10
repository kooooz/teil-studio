"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface CookiePreferences {
  functionality: boolean;
  experience: boolean;
  measurement: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    functionality: false,
    experience: false,
    measurement: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleToggle = (category: keyof CookiePreferences) => {
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      functionality: true,
      experience: true,
      measurement: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const allRejected = {
      functionality: false,
      experience: false,
      measurement: false,
      marketing: false,
    };
    setPreferences(allRejected);
    localStorage.setItem('cookieConsent', JSON.stringify(allRejected));
    setIsVisible(false);
  };

  const handleCustomize = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-6 md:right-6 left-6 md:left-auto w-auto md:w-[400px] bg-[#f5f5f5] rounded-lg shadow-lg z-50 p-4 md:p-6">
      {/* Descriptive Text */}
      <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] md:text-[14px] text-[#333] leading-[18px] md:leading-[20px] mb-4 md:mb-6">
        To offer a better browsing experience, the website uses technical, analytical and profiling cookies, including third party cookies. Cookies other than those which are technical require your prior consent (see our Cookie Policy). By selecting "Accept" you consent to the use of technical cookies that are strictly necessary. If you want to customize your preferences and give your consent only to certain cookies, click on "Learn more and customize".
      </p>

      {/* Cookie Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
        {[
          { key: 'functionality' as keyof CookiePreferences, label: 'Functionality' },
          { key: 'experience' as keyof CookiePreferences, label: 'Experience' },
          { key: 'measurement' as keyof CookiePreferences, label: 'Measurement' },
          { key: 'marketing' as keyof CookiePreferences, label: 'Marketing' },
        ].map(({ key, label }) => (
          <div key={key} className="flex items-center justify-between">
            <span className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] md:text-[14px] text-[#333]">
              {label}
            </span>
            <button
              onClick={() => handleToggle(key)}
              className={`relative w-8 h-4 md:w-10 md:h-5 rounded-full transition-colors duration-200 ${
                preferences[key] ? 'bg-[#1a2e66]' : 'bg-gray-400'
              }`}
            >
              <div
                className={`absolute top-0.5 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full transition-transform duration-200 ${
                  preferences[key] ? 'translate-x-4 md:translate-x-5' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 md:space-y-3">
        {/* Accept All and Reject All */}
        <div className="flex justify-between gap-2">
          <button
            onClick={handleRejectAll}
            className="bg-gray-400 text-[#333] px-3 py-2 md:px-4 md:py-2 rounded font-['Maison_Neue_Mono',_sans-serif] text-[12px] md:text-[14px] hover:opacity-80 transition-opacity flex-1"
          >
            Reject all
          </button>
          <button
            onClick={handleAcceptAll}
            className="bg-white text-[#333] px-3 py-2 md:px-4 md:py-2 rounded font-['Maison_Neue_Mono',_sans-serif] text-[12px] md:text-[14px] hover:opacity-80 transition-opacity flex-1"
          >
            Accept all
          </button>
        </div>

        {/* Learn More Button */}
        <Link
          href="/cookie-preferences"
          onClick={handleCustomize}
          className="block w-full bg-[#1a2e66] text-white px-3 py-2 md:px-4 md:py-2 rounded text-center font-['Maison_Neue_Mono',_sans-serif] text-[12px] md:text-[14px] hover:opacity-80 transition-opacity"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
}

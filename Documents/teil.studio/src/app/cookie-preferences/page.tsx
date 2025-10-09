"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface CookiePreferences {
  functionality: boolean;
  experience: boolean;
  measurement: boolean;
  marketing: boolean;
}

export default function CookiePreferences() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    functionality: false,
    experience: false,
    measurement: false,
    marketing: false,
  });

  useEffect(() => {
    // Load saved preferences
    const saved = localStorage.getItem('cookieConsent');
    if (saved) {
      setPreferences(JSON.parse(saved));
    }
  }, []);

  const handleToggle = (category: keyof CookiePreferences) => {
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSave = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    // Redirect back to home or previous page
    window.history.back();
  };

  const cookieDescriptions = {
    functionality: "These cookies enable basic website functionality and are necessary for the website to operate properly.",
    experience: "These cookies help us personalize your experience and remember your preferences.",
    measurement: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
    marketing: "These cookies are used to track visitors across websites to display relevant and engaging advertisements."
  };

  return (
    <div className="bg-[#f7f2e8] min-h-screen">
      <Navigation currentPage="cookie-preferences" />
      
      <div className="pt-32 px-6 md:px-[110px] pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-['Artifex_Hand_CF',_sans-serif] text-[#1a2e66] text-[36px] leading-[42px] mb-6">
              Cookie Preferences
            </h1>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[#1a2e66] text-[14px] leading-[20px]">
              Manage your cookie preferences to control how we use cookies and similar technologies on our website.
            </p>
          </div>

          {/* Cookie Categories */}
          <div className="space-y-8 mb-12">
            {[
              { key: 'functionality' as keyof CookiePreferences, label: 'Functionality', required: true },
              { key: 'experience' as keyof CookiePreferences, label: 'Experience', required: false },
              { key: 'measurement' as keyof CookiePreferences, label: 'Measurement', required: false },
              { key: 'marketing' as keyof CookiePreferences, label: 'Marketing', required: false },
            ].map(({ key, label, required }) => (
              <div key={key} className="border-b border-gray-200 pb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-['Maison_Neue_Mono',_sans-serif] text-[#1a2e66] text-[16px]">
                      {label}
                    </h3>
                    {required && (
                      <span className="bg-[#1a2e66] text-white text-[10px] px-2 py-1 rounded font-['Maison_Neue_Mono',_sans-serif]">
                        REQUIRED
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => !required && handleToggle(key)}
                    disabled={required}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                      preferences[key] ? 'bg-[#1a2e66]' : 'bg-gray-400'
                    } ${required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div
                      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                        preferences[key] ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
                <p className="font-['Maison_Neue_Mono',_sans-serif] text-[#1a2e66] text-[12px] leading-[18px] opacity-80">
                  {cookieDescriptions[key]}
                </p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setPreferences({
                  functionality: true,
                  experience: false,
                  measurement: false,
                  marketing: false,
                });
              }}
              className="bg-gray-400 text-white px-6 py-3 rounded font-['Maison_Neue_Mono',_sans-serif] text-[14px] hover:opacity-80 transition-opacity"
            >
              Accept Only Necessary
            </button>
            <button
              onClick={() => {
                setPreferences({
                  functionality: true,
                  experience: true,
                  measurement: true,
                  marketing: true,
                });
              }}
              className="bg-white text-[#1a2e66] border border-[#1a2e66] px-6 py-3 rounded font-['Maison_Neue_Mono',_sans-serif] text-[14px] hover:opacity-80 transition-opacity"
            >
              Accept All
            </button>
            <button
              onClick={handleSave}
              className="bg-[#1a2e66] text-white px-6 py-3 rounded font-['Maison_Neue_Mono',_sans-serif] text-[14px] hover:opacity-80 transition-opacity"
            >
              Save Preferences
            </button>
          </div>

          {/* Additional Information */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[#1a2e66] text-[12px] leading-[18px] opacity-80 mb-4">
              For more information about how we use cookies and your data, please read our{' '}
              <a href="/data-protection" className="underline hover:opacity-70">
                Data Protection Policy
              </a>.
            </p>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[#1a2e66] text-[12px] leading-[18px] opacity-80">
              You can change your cookie preferences at any time by visiting this page again.
            </p>
          </div>
        </div>
      </div>

      <Footer variant="flow" />
    </div>
  );
}

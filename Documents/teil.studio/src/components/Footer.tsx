"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

type FooterVariant = 'absolute' | 'flow';


export default function Footer({ variant = 'absolute' }: { variant?: FooterVariant }) {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Bot trap
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      setMessage("Error subscribing. Please try again.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setMessage(data.error || "Error subscribing. Please try again.");
      }
    } catch (error) {
      setMessage("Error subscribing. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === 'flow') {
    return (
      <div className="w-full bg-[#1a2e66]" data-name="Footer" data-node-id="91:61">
        {/* Flow Footer Content - full width with 110px gutters like homepage */}
        <div className="w-full px-6 md:px-0 flex flex-col justify-between pt-12 pb-12">
          {/* Top Section */}
          <div className="grid md:grid-cols-3 grid-cols-1 items-start gap-x-10 gap-y-6 px-[110px]">
          {/* Left Section - Legal */}
          <div className="space-y-2 mt-2" data-node-id="31:5">
            <Link href="/legal-notice" className="block font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-white hover:opacity-80">Legal Notice</Link>
            <Link href="/data-protection" className="block font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-white hover:opacity-80" data-node-id="31:8">Data Protection</Link>
            <Link href="/cookie-preferences" className="block font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-white hover:opacity-80">Cookie Preferences</Link>
          </div>

          {/* Center Section - More teil.studio */}
          <div className="text-left">
            <div className="w-full border-t border-white opacity-30 mb-2"></div>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-white whitespace-pre" data-node-id="31:10">More teil.studio</p>
          </div>

          {/* Right Section - Want more teil.studio */}
          <div className="text-left">
            <div className="w-full border-t border-white opacity-30 mb-2"></div>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-white whitespace-pre" data-node-id="31:12">Want more teil.studio</p>
          </div>
        </div>

          {/* Bottom Section - All aligned to logo bottom */}
          <div className="grid md:grid-cols-3 grid-cols-1 items-end gap-x-10 gap-y-6 md:gap-y-0 transform md:translate-y-[16px] px-[110px]">
          {/* Left - Logo and Copyright */}
          <div className="flex items-end space-x-8">
            <div className="h-[28px] w-[75px] transform md:-translate-y-[6px]" data-name="teil.studio logo footer" data-node-id="69:189">
              <Link href="/" className="block w-full h-full hover:opacity-70 transition-opacity">
                <Image alt="teil.studio logo" src="/logos/Element 7 3.svg" width={75} height={28} className="block max-w-none size-full" />
              </Link>
            </div>
            <span className="h-[28px] flex items-end font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-white whitespace-pre" data-node-id="69:199">©2025</span>
          </div>

          {/* Center - LinkedIn (aligned to column start and bottom) */}
          <div className="h-[28px] flex items-end">
            <a
              href="https://www.linkedin.com/in/koljaorzeszko"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] text-white whitespace-pre hover:opacity-70 transition-opacity"
              data-node-id="31:18"
            >
              LinkedIn
            </a>
          </div>

          {/* Right - Email Sign Up */}
          <div className="text-left flex flex-col justify-end" data-name="Email Sign Up" data-node-id="91:62">
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-white whitespace-pre mb-4" data-node-id="31:14">Get our emails. Updates.</p>
            <form onSubmit={handleNewsletterSignup} className="flex">
              {/* Honeypot field - hidden from humans, visible to bots */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                autoComplete="off"
                tabIndex={-1}
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                aria-hidden="true"
              />
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  required
                  className="border border-white bg-transparent h-[57px] w-full md:w-[413px] px-4 pt-6 text-white placeholder-white font-['Maison_Neue_Mono',_sans-serif] text-[12px] outline-none"
                />
                <label className="absolute left-4 top-1 font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-white">Email</label>
              </div>
              <button type="submit" disabled={isSubmitting} className="bg-white h-[57px] w-[103px] disabled:opacity-50 flex items-center justify-center">
                <span className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] text-black">{isSubmitting ? "..." : "Sign Up"}</span>
              </button>
            </form>
            {message && (<p className="text-white text-sm mt-2">{message}</p>)}
          </div>
          </div>
        </div>
      </div>
    );
  }

  // default: absolute (original start page behavior)
  return (
    <div className="absolute left-0 top-[3664px] w-full" data-name="Footer" data-node-id="91:61">
      <div className="absolute bg-[#1a2e66] h-[273px] left-0 top-0 w-full" data-node-id="18:15" />
      
      {/* Absolute Footer Content */}
      <div className="absolute left-[110px] right-[110px] top-0 h-full flex flex-col justify-between pt-8 pb-0">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 grid-cols-1 items-start gap-x-10 gap-y-6">
          {/* Left Section - Legal */}
          <div className="space-y-2 mt-2" data-node-id="31:5">
            <a href="/legal-notice" className="block font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-white hover:opacity-80">Legal Notice</a>
            <a href="/data-protection" className="block font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-white hover:opacity-80" data-node-id="31:8">Data Protection</a>
            <a href="/cookie-preferences" className="block font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-white hover:opacity-80">Cookie Preferences</a>
          </div>

          {/* Center Section - More teil.studio */}
          <div className="text-left">
            <div className="w-full border-t border-white opacity-30 mb-2"></div>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-white whitespace-pre" data-node-id="31:10">More teil.studio</p>
          </div>

          {/* Right Section - Want more teil.studio */}
          <div className="text-left">
            <div className="w-full border-t border-white opacity-30 mb-2"></div>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-white whitespace-pre" data-node-id="31:12">Want more teil.studio</p>
          </div>
        </div>

        {/* Bottom Section - All aligned to logo bottom */}
        <div className="grid md:grid-cols-3 grid-cols-1 items-end gap-x-10 gap-y-6 md:gap-y-0 transform md:translate-y-[16px]">
          {/* Left - Logo and Copyright */}
          <div className="flex items-end space-x-8">
            <div className="h-[28px] w-[75px] transform md:-translate-y-[6px]" data-name="teil.studio logo footer" data-node-id="69:189">
              <Link href="/" className="block w-full h-full hover:opacity-70 transition-opacity">
                <Image alt="teil.studio logo" src="/logos/Element 7 3.svg" width={75} height={28} className="block max-w-none size-full" />
              </Link>
            </div>
            <span className="h-[28px] flex items-end font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-white whitespace-pre" data-node-id="69:199">©2025</span>
          </div>

          {/* Center - LinkedIn (aligned to column start and bottom) */}
          <div className="h-[28px] flex items-end">
            <a
              href="https://www.linkedin.com/in/koljaorzeszko"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] text-white whitespace-pre hover:opacity-70 transition-opacity"
              data-node-id="31:18"
            >
              LinkedIn
            </a>
          </div>

          {/* Right - Email Sign Up */}
          <div className="text-left flex flex-col justify-end" data-name="Email Sign Up" data-node-id="91:62">
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-white whitespace-pre mb-4" data-node-id="31:14">Get our emails. Updates.</p>
            <form onSubmit={handleNewsletterSignup} className="flex">
              {/* Honeypot field - hidden from humans, visible to bots */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                autoComplete="off"
                tabIndex={-1}
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                aria-hidden="true"
              />
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  required
                  className="border border-white bg-transparent h-[57px] w-[413px] px-4 pt-6 text-white placeholder-white font-['Maison_Neue_Mono',_sans-serif] text-[12px] outline-none"
                />
                <label className="absolute left-4 top-1 font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-white">Email</label>
              </div>
              <button type="submit" disabled={isSubmitting} className="bg-white h-[57px] w-[103px] disabled:opacity-50 flex items-center justify-center">
                <span className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] text-black">{isSubmitting ? "..." : "Sign Up"}</span>
              </button>
            </form>
            {message && (<p className="text-white text-sm mt-2">{message}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}
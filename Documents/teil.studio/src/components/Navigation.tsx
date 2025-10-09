"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      setIsOverHero(scrollY < 600); // Hero section is about 818px high
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine text color based on scroll position and background
  const textColor = isOverHero ? '#1a2e66' : '#ffffff';
  const backgroundColor = isScrolled ? 'bg-white/90 backdrop-blur-sm' : 'bg-transparent';

  return (
    <>
      <div className={`fixed left-6 md:left-[110px] top-[32px] right-6 md:right-[110px] h-[28px] z-50 transition-all duration-300 ${backgroundColor}`} data-name="Nav bar" data-node-id="91:59">
        {/* Logo */}
        <div className="absolute left-0 bottom-0 w-[75px] h-[28px]" data-name="teil.studio header logo" data-node-id="69:22">
          <Link href="/" className="block w-full h-full hover:opacity-70 transition-opacity">
            <Image 
              alt="teil.studio logo" 
              src="/logos/Element 7 1.svg"
              width={75}
              height={28}
              className="block w-full h-full"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex absolute right-0 bottom-0 items-end space-x-8 font-['Maison_Neue_Mono',_sans-serif] text-[12px]" style={{ color: textColor }} data-name="Nav bar" data-node-id="14:2">
          <Link href="/about" className={`hover:opacity-70 transition-opacity inline-block pb-[2px] ${currentPage === 'about' ? 'border-b' : 'border-b-0'}`} style={{ borderBottomColor: textColor }} data-node-id="14:3">
            about
          </Link>
          <Link href="/services" className={`hover:opacity-70 transition-opacity inline-block pb-[2px] ${currentPage === 'services' ? 'border-b' : 'border-b-0'}`} style={{ borderBottomColor: textColor }} data-node-id="14:4">
            what we do
          </Link>
          <Link href="/work" className={`hover:opacity-70 transition-opacity inline-block pb-[2px] ${currentPage === 'work' ? 'border-b' : 'border-b-0'}`} style={{ borderBottomColor: textColor }} data-node-id="14:5">
            work
          </Link>
          <Link href="/journal" className={`hover:opacity-70 transition-opacity inline-block pb-[2px] ${currentPage === 'journal' ? 'border-b' : 'border-b-0'}`} style={{ borderBottomColor: textColor }} data-node-id="14:6">
            journal
          </Link>
          <Link href="/contact" className={`hover:opacity-70 transition-opacity inline-block pb-[2px] ${currentPage === 'contact' ? 'border-b' : 'border-b-0'}`} style={{ borderBottomColor: textColor }} data-node-id="14:7">
            contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden absolute right-0 bottom-0 w-6 h-6 flex flex-col justify-center items-center space-y-1 group"
          aria-label="Toggle menu"
        >
          <span className={`block h-[1px] w-5 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} style={{ backgroundColor: textColor }}></span>
          <span className={`block h-[1px] w-5 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: textColor }}></span>
          <span className={`block h-[1px] w-5 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} style={{ backgroundColor: textColor }}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#f7f2e8] z-40 flex flex-col items-center justify-center space-y-8 font-['Maison_Neue_Mono',_sans-serif] text-[16px] text-[#1a2e66]">
          <Link 
            href="/about" 
            onClick={() => setMobileMenuOpen(false)}
            className={`hover:opacity-70 transition-opacity ${currentPage === 'about' ? 'border-b border-[#1a2e66]' : ''}`}
          >
            about
          </Link>
          <Link 
            href="/services" 
            onClick={() => setMobileMenuOpen(false)}
            className={`hover:opacity-70 transition-opacity ${currentPage === 'services' ? 'border-b border-[#1a2e66]' : ''}`}
          >
            what we do
          </Link>
          <Link 
            href="/work" 
            onClick={() => setMobileMenuOpen(false)}
            className={`hover:opacity-70 transition-opacity ${currentPage === 'work' ? 'border-b border-[#1a2e66]' : ''}`}
          >
            work
          </Link>
          <Link 
            href="/journal" 
            onClick={() => setMobileMenuOpen(false)}
            className={`hover:opacity-70 transition-opacity ${currentPage === 'journal' ? 'border-b border-[#1a2e66]' : ''}`}
          >
            journal
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className={`hover:opacity-70 transition-opacity ${currentPage === 'contact' ? 'border-b border-[#1a2e66]' : ''}`}
          >
            contact
          </Link>
        </div>
      )}
    </>
  );
}
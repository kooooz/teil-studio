"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Custom validation with English messages
    if (!formData.name.trim()) {
      setMessage('Please enter your name.');
      return;
    }
    
    if (!formData.email.trim()) {
      setMessage('Please enter your email.');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage('Please enter a valid email address.');
      return;
    }
    
    if (!formData.message.trim()) {
      setMessage('Please tell us how we can help.');
      return;
    }
    
    setIsSubmitting(true);
    setMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Thank you for your message! I\'ll get back to you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          company: '',
          website: '',
          message: ''
        });
      } else {
        setMessage('Error sending message. Please try again.');
      }
    } catch (error) {
      setMessage('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <div className="bg-white relative min-h-screen">
      {/* Navigation */}
      <Navigation currentPage="contact" />

      {/* Back Button */}
      <div className="absolute left-[110px] top-[157px]">
        <button 
          onClick={handleBack}
          className="flex items-center space-x-2 font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-[#1a2e66] hover:opacity-70 transition-opacity"
        >
          <div className="w-[19px] h-[19px] bg-[#1a2e66] rounded-full flex items-center justify-center">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M5 1L2 4L5 7" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>back</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="pt-48 pb-32">
        {/* Contact Form - centered */}
        <div className="max-w-[560px] mx-auto px-6">
          <p className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] text-[#1a2e66] mb-4">
            Learn more about teil.studio
          </p>
          
          <h1 className="font-['Artifex_Hand_CF',_sans-serif] text-[30px] text-[#1a2e66] text-left mb-8">
            Get in touch
          </h1>
          
          <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[20px] text-[14px] text-[#1a2e66] mb-12">
            Let me know how I can help, and I will get <br />
            back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-[#1a2e66] mb-2">
                  Name*
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full bg-[#f7f2e8] h-[41px] rounded-[8px] px-4 font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-[#1a2e66]"
                />
              </div>
              <div className="flex-1">
                <label className="block font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-[#1a2e66] mb-2">
                  Email*
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john.doe@abc.inc"
                  className="w-full bg-[#f7f2e8] h-[41px] rounded-[8px] px-4 font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-[#1a2e66]"
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="block font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-[#1a2e66] mb-2">
                Company name
              </label>
              <input 
                type="text" 
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="ABC inc."
                className="w-full bg-[#f7f2e8] h-[41px] rounded-[8px] px-4 font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-[#1a2e66]"
              />
            </div>

            {/* Company Website */}
            <div>
              <label className="block font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-[#1a2e66] mb-2">
                Company website
              </label>
              <input 
                type="text" 
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="www.abc.inc"
                className="w-full bg-[#f7f2e8] h-[41px] rounded-[8px] px-4 font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-[#1a2e66]"
              />
            </div>

            {/* How can we help */}
            <div>
              <label className="block font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-[#1a2e66] mb-2">
                How can we help?*
              </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us more"
                rows={5}
                className="w-full bg-[#f7f2e8] min-h-[120px] rounded-[8px] px-4 py-3 font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-[#1a2e66] resize-y"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1a2e66] h-[38px] rounded-[8px] hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <span className="font-['Artifex_Hand_CF',_sans-serif] text-[14px] text-white">
                {isSubmitting ? 'Sending...' : 'Submit'}
              </span>
            </button>
            
            {message && (
              <p className="text-[#1a2e66] text-sm mt-4">{message}</p>
            )}
          </form>
        </div>
      </div>

      {/* Spacer: full-screen whitespace before footer */}
      <div className="h-screen" aria-hidden="true"></div>

      {/* Footer */}
      <Footer variant="flow" />
    </div>
  );
}

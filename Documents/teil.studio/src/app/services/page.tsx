import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="bg-white relative min-h-screen" data-name="Services" data-node-id="36:349">
      {/* Navigation */}
      <Navigation currentPage="services" />

      {/* Content Wrapper */}
      <main className="pt-48 pb-2 md:pb-2">
        <div className="max-w-[1320px] mx-auto px-6 text-center">
          {/* Header */}
          <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[35px] text-[#1a2e66] text-[14px]">What we do</p>
          <h1 className="mt-2 font-['Artifex_Hand_CF',_sans-serif] leading-[45px] text-[#1a2e66] text-[40px]">Understand People.<br/>Build Brands.</h1>

          {/* Services Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-[#f7f2e8] rounded-[8px] px-5 pt-6 pb-6 text-left">
              <div className="h-[68px] flex items-start">
                <Image alt="Consumer Insight Icon" src="/svg/icon04 1.svg" width={55} height={64} className="block" />
              </div>
              <h3 className="mt-2 font-['Artifex_Hand_CF',_sans-serif] text-[#1a2e66] text-[24px] leading-[32px] min-h-[64px]">Consumer Insight</h3>
              <p className="mt-3 font-['Maison_Neue_Mono',_sans-serif] text-[14px] leading-[23px] text-[#1a2e66]">We go beyond demographics to understand how people think, feel, and act. Real signals from culture and behavior turned into clarity about what drives your audience.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#f7f2e8] rounded-[8px] px-5 pt-6 pb-6 text-left">
              <div className="h-[68px] flex items-start">
                <Image alt="Brand Foundations Icon" src="/svg/icon01 1.svg" width={44} height={68} className="block" />
              </div>
              <h3 className="mt-2 font-['Artifex_Hand_CF',_sans-serif] text-[#1a2e66] text-[24px] leading-[32px] min-h-[64px]">Brand Foundations</h3>
              <p className="mt-3 font-['Maison_Neue_Mono',_sans-serif] text-[14px] leading-[23px] text-[#1a2e66]">We define purpose, positioning, and architecture so your brand has a strong backbone — consistent, clear, and ready to scale.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#f7f2e8] rounded-[8px] px-5 pt-6 pb-6 text-left">
              <div className="h-[68px] flex items-start">
                <Image alt="Brand & Performance Icon" src="/svg/icon02 1.svg" width={32} height={67} className="block" />
              </div>
              <h3 className="mt-2 font-['Artifex_Hand_CF',_sans-serif] text-[#1a2e66] text-[24px] leading-[32px] min-h-[64px]">Brand & Performance<br/>Marketing</h3>
              <p className="mt-3 font-['Maison_Neue_Mono',_sans-serif] text-[14px] leading-[23px] text-[#1a2e66]">We bridge storytelling with performance. Building frameworks where creative brand building and measurable growth don't fight each other — they fuel each other.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-[#f7f2e8] rounded-[8px] px-5 pt-6 pb-6 text-left">
              <div className="h-[68px] flex items-start">
                <Image alt="Go-To-Market Icon" src="/svg/icon03 1.svg" width={65} height={62} className="block" />
              </div>
              <h3 className="mt-2 font-['Artifex_Hand_CF',_sans-serif] text-[#1a2e66] text-[24px] leading-[32px] min-h-[64px]">Go-To-Market &<br/>Innovation</h3>
              <p className="mt-3 font-['Maison_Neue_Mono',_sans-serif] text-[14px] leading-[23px] text-[#1a2e66]">From launch strategies to new business models, we design go-to-market systems that land in the real world and leave space for continuous innovation.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-flex bg-[#1a2e66] h-[36px] rounded-[8px] px-6 hover:opacity-90 transition-opacity items-center justify-center">
              <span className="font-['Artifex_Hand_CF',_sans-serif] text-[14px] text-white">Learn more</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Spacer: full-screen whitespace before footer */}
      <div className="h-screen" aria-hidden="true"></div>

      {/* Footer */}
      <Footer variant="flow" />
    </div>
  );
}
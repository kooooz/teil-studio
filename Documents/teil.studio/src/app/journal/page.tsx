import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Journal() {
  return (
    <div className="bg-[#f7f2e8] relative min-h-screen">
      {/* Navigation */}
      <Navigation currentPage="journal" />

      {/* Main Content */}
      <div className="pt-48 px-[110px] pb-32">
        {/* Featured Article */}
        <div className="mb-16">
          <Link href="/journal/the-party-moved" className="block group">
            <div className="relative bg-gray-200 h-[452px] rounded-[8px] mb-8 overflow-hidden">
              <Image 
                alt="Featured Journal Article" 
                src="/images/The Party Moved.png"
                width={1221}
                height={452}
                className="w-full h-full object-cover object-bottom rounded-[8px] transition-transform duration-300 ease-out group-hover:scale-[1.02] group-hover:opacity-95"
              />
              {/* Overlay text block aligned to the right center */}
              <div className="absolute inset-0 flex items-center justify-end pr-10">
                <div className="max-w-[520px] text-center">
                  <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-white/90 mb-2">Sep 1, 2025</p>
                  <h2 className="font-['Artifex_Hand_CF',_sans-serif] leading-[42px] text-[32px] text-white mb-2">
                    The Party Moved: From Infinite Scrolling to Finite Moments
                  </h2>
                  <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[22px] text-[14px] text-white/90">
                    The attention economy didn’t crash—it leveled off...
                  </p>
                </div>
              </div>
            </div>
            {/* Text below image removed in favor of overlaid block */}
          </Link>
        </div>

      </div>

      {/* Spacer: full-screen whitespace before footer */}
      <div className="h-screen" aria-hidden="true"></div>

      {/* Footer */}
      <Footer variant="flow" />
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Journal() {
  return (
    <div className="bg-[#f7f2e8] relative min-h-screen">
      {/* Mobile-only layout */}
      <div className="block md:hidden">
        <Navigation currentPage="journal" />

        {/* Main Content */}
        <div className="pt-24 px-6 pb-32">
          {/* Article 1: Small Worlds */}
          <div className="mb-12">
            <Link href="/journal/small-worlds-big-power" className="block group">
              <div className="relative bg-gray-200 h-[300px] rounded-[8px] mb-4 overflow-hidden transition-all duration-300 ease-out hover:shadow-lg hover:scale-[1.02]">
                <Image 
                  alt="Small Worlds, Big Power" 
                  src="/images/small-worlds-big-power.png"
                  width={1221}
                  height={452}
                  className="w-full h-full object-cover object-center rounded-[8px]"
                />
              </div>
              {/* Text below image */}
              <div className="px-0">
                <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-[#1a2e66] mb-2">Oct 16, 2025</p>
                <h2 className="font-['Artifex_Hand_CF',_sans-serif] leading-[32px] text-[28px] text-[#1a2e66] mb-2">
                  Small Worlds, Big Power: Why Niche is Replacing the Mainstream
                </h2>
                <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[18px] text-[12px] text-[#1a2e66]">
                  For most of modern marketing history, growth meant scale. Bigger audiences, louder campaigns, broader appeal.
                </p>
              </div>
            </Link>
          </div>

          {/* Article 2: The Party Moved */}
          <div className="mb-8">
            <Link href="/journal/the-party-moved" className="block group">
              <div className="relative bg-gray-200 h-[300px] rounded-[8px] mb-4 overflow-hidden transition-all duration-300 ease-out hover:shadow-lg hover:scale-[1.02]">
                <Image 
                  alt="The Party Moved" 
                  src="/images/the-party-moved.png"
                  width={1221}
                  height={452}
                  className="w-full h-full object-cover object-center rounded-[8px]"
                />
              </div>
              {/* Text below image */}
              <div className="px-0">
                <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-[#1a2e66] mb-2">Sep 1, 2025</p>
                <h2 className="font-['Artifex_Hand_CF',_sans-serif] leading-[32px] text-[28px] text-[#1a2e66] mb-2">
                  The Party Moved: From Infinite Scrolling to Finite Moments
                </h2>
                <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[18px] text-[12px] text-[#1a2e66]">
                  The attention economy didn't crash—it leveled off. Tired of endless scrolling and thinner social lives, a feed-raised generation is rethinking how and where they connect.
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <Footer variant="flow" />
      </div>

      {/* Desktop-only layout */}
      <div className="hidden md:block">
        {/* Navigation */}
        <Navigation currentPage="journal" />

        {/* Main Content */}
        <div className="pt-48 px-[110px] pb-32">
          {/* Article 1: Small Worlds */}
          <div className="mb-16">
            <Link href="/journal/small-worlds-big-power" className="block group">
              <div className="relative bg-gray-200 h-[452px] rounded-[8px] mb-8 overflow-hidden">
                <Image 
                  alt="Small Worlds, Big Power" 
                  src="/images/small-worlds-big-power.png"
                  width={1221}
                  height={452}
                  className="w-full h-full object-cover object-center rounded-[8px] transition-transform duration-300 ease-out group-hover:scale-[1.02] group-hover:opacity-95"
                />
                {/* Overlay text block aligned to the right center */}
                <div className="absolute inset-0 flex items-center justify-end pr-10">
                  <div className="max-w-[520px] text-center">
                    <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-white/90 mb-2">Oct 16, 2025</p>
                    <h2 className="font-['Artifex_Hand_CF',_sans-serif] leading-[42px] text-[32px] text-white mb-2">
                      Small Worlds, Big Power: Why Niche is Replacing the Mainstream
                    </h2>
                    <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[22px] text-[14px] text-white/90">
                      For most of modern marketing history, growth meant scale...
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Article 2: The Party Moved */}
          <div className="mb-16">
            <Link href="/journal/the-party-moved" className="block group">
              <div className="relative bg-gray-200 h-[452px] rounded-[8px] mb-8 overflow-hidden">
                <Image 
                  alt="The Party Moved" 
                  src="/images/the-party-moved.png"
                  width={1221}
                  height={452}
                  className="w-full h-full object-cover object-center rounded-[8px] transition-transform duration-300 ease-out group-hover:scale-[1.02] group-hover:opacity-95"
                />
                {/* Overlay text block aligned to the right center */}
                <div className="absolute inset-0 flex items-center justify-end pr-10">
                  <div className="max-w-[520px] text-center">
                    <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-white/90 mb-2">Sep 1, 2025</p>
                    <h2 className="font-['Artifex_Hand_CF',_sans-serif] leading-[42px] text-[32px] text-white mb-2">
                      The Party Moved: From Infinite Scrolling to Finite Moments
                    </h2>
                    <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[22px] text-[14px] text-white/90">
                      The attention economy didn't crash—it leveled off...
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </div>

        {/* Spacer: full-screen whitespace before footer */}
        <div className="h-screen" aria-hidden="true"></div>

        {/* Footer */}
        <Footer variant="flow" />
      </div>
    </div>
  );
}

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
                src="/images/The Party Moved.png?v=2"
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

        {/* Journal Articles Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Article 1 */}
          <div className="group cursor-pointer">
            <div className="bg-gray-200 h-[326px] rounded-[8px] mb-6 overflow-hidden">
              <Image 
                alt="Journal Article 1" 
                src="/images/content-group of gen z.jpg"
                width={397}
                height={326}
                className="w-full h-full object-cover rounded-[8px] transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="text-center transition-colors duration-200">
              <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-[#1a2e66] mb-4 group-hover:opacity-80">
                Sep 29, 2025
              </p>
              <h3 className="capitalize font-['Artifex_Hand_CF',_sans-serif] leading-[50px] text-[30px] text-[#1a2e66] text-center mb-4 group-hover:underline">
                The next Era of agencies
              </h3>
              <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[25px] text-[14px] text-[#1a2e66] text-center group-hover:opacity-80">
                We live in a world of constant change. Nothing seems to be...
              </p>
            </div>
          </div>

          {/* Article 2 */}
          <div className="group cursor-pointer">
            <div className="bg-gray-200 h-[326px] rounded-[8px] mb-6 overflow-hidden">
              <Image 
                alt="Journal Article 2" 
                src="/images/content-mobile device gen z.jpg"
                width={397}
                height={326}
                className="w-full h-full object-cover rounded-[8px] transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="text-center transition-colors duration-200">
              <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-[#1a2e66] mb-4 group-hover:opacity-80">
                Sep 29, 2025
              </p>
              <h3 className="capitalize font-['Artifex_Hand_CF',_sans-serif] leading-[50px] text-[30px] text-[#1a2e66] text-center mb-4 group-hover:underline">
                The next Era of agencies
              </h3>
              <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[25px] text-[14px] text-[#1a2e66] text-center group-hover:opacity-80">
                We live in a world of constant change. Nothing seems to be...
              </p>
            </div>
          </div>

          {/* Article 3 */}
          <div className="group cursor-pointer">
            <div className="bg-gray-200 h-[326px] rounded-[8px] mb-6 overflow-hidden">
              <Image 
                alt="Journal Article 3" 
                src="/images/content-group urban running.jpg"
                width={397}
                height={326}
                className="w-full h-full object-cover rounded-[8px] transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="text-center transition-colors duration-200">
              <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-[#1a2e66] mb-4 group-hover:opacity-80">
                Sep 29, 2025
              </p>
              <h3 className="capitalize font-['Artifex_Hand_CF',_sans-serif] leading-[50px] text-[30px] text-[#1a2e66] text-center mb-4 group-hover:underline">
                The next Era of agencies
              </h3>
              <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[25px] text-[14px] text-[#1a2e66] text-center group-hover:opacity-80">
                We live in a world of constant change. Nothing seems to be...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer: full-screen whitespace before footer */}
      <div className="h-screen" aria-hidden="true"></div>

      {/* Footer */}
      <Footer variant="flow" />
    </div>
  );
}

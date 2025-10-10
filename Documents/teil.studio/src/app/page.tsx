import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#f7f2e8] relative w-full min-h-screen overflow-x-hidden" data-name="Home" data-node-id="1:2">
      {/* Hero Image with crowd */}
      <div className="relative h-[520px] md:h-[818px] w-full" data-name="Header Image" data-node-id="106:6">
        <Image 
          alt="Hero image" 
          src="/images/Header Image.png"
          fill
          className="object-cover"
          priority
        />
        {/* Hero Title - Overlaid on hero image */}
        <div className="absolute left-6 md:left-[110px] bottom-10 md:bottom-auto md:top-[558px] w-[calc(100%-3rem)] md:w-[1310px] px-0" data-node-id="35:164">
          <h1 className="capitalize font-['Artifex_Hand_CF',_sans-serif] leading-[42px] md:leading-[75px] text-[34px] md:text-[70px] text-white">
            Brand Strategy
            <br />
            Built Around People,
            <br />
            Not Assumptions
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <Navigation currentPage="home" />

      {/* Subtitle - desktop only (mobile layout handled in flow below) */}
      <div className="hidden md:block absolute right-6 md:right-[110px] top-[707px] w-full md:w-[298px] px-6 md:px-0" data-node-id="35:165">
        <p className="capitalize font-['Maison_Neue_Mono',_sans-serif] leading-[20px] md:leading-[25px] text-[12px] md:text-[14px] text-white whitespace-pre-line">
          We build brands with positioning,
          {'\n'}story, and identity that connect
          {'\n'}and evolve as culture shifts.
        </p>
      </div>


      {/* Flow content for mobile; absolute positions re-applied on desktop */}
      <div className="md:relative">
        {/* Centered brick/stone image */}
        <div className="mx-auto mt-8 md:mt-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-[1000px] w-[180px] h-[180px] md:w-[577px] md:h-[577px]" data-name="brick 1" data-node-id="106:158">
          <Image 
            alt="Brick center" 
            src="/images/brick-center.png"
            width={577}
            height={577}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text blocks container - centered */}
        <div className="px-6 md:px-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-[1746px] w-full md:w-[1015px] mt-6 md:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[15px]">
            {/* Left text block */}
            <div className="md:w-[500px]" data-node-id="12:14">
              <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[20px] md:leading-[25px] text-[#1a2e66] text-[12px] md:text-[14px]">
                Staying relevant feels harder than ever. Audiences shift overnight, AI changes the rules daily, and what worked last year already feels out of date. How do you build a brand that keeps up?
              </p>
            </div>

            {/* Right text block */}
            <div className="md:w-[500px]" data-node-id="18:13">
              <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[20px] md:leading-[25px] text-[#1a2e66] text-[12px] md:text-[14px]">
                Yesterday's playbooks don't work anymore. teil.studio turns audience insight, sharp positioning, and modern tools into brand systems that connect now and evolve with what's next.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2x2 Image Grid - centered */}
      <div className="px-6 md:px-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-[2128px] w-full md:w-[1015px] mt-6 md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[15px]">
          {/* Top left - Breakfast */}
          <Link href="/work" className="block group">
            <div className="h-[250px] md:h-[506px] rounded-[8px] overflow-hidden cursor-pointer" data-node-id="106:180">
              <Image 
                alt="Content breakfast" 
                src="/images/grid-breakfast.png"
                width={500}
                height={506}
                className="object-cover rounded-[8px] w-full h-full transition-transform duration-300 ease-out group-hover:scale-[1.02] group-hover:opacity-95"
                quality={100}
              />
            </div>
          </Link>

          {/* Top right - Running */}
          <Link href="/work" className="block group">
            <div className="h-[250px] md:h-[506px] rounded-[8px] overflow-hidden cursor-pointer" data-name="content-group urban running" data-node-id="109:4">
              <Image 
                alt="Content group urban running" 
                src="/images/grid-running.png"
                width={500}
                height={506}
                className="object-cover rounded-[8px] w-full h-full transition-transform duration-300 ease-out group-hover:scale-[1.02] group-hover:opacity-95"
                quality={100}
              />
            </div>
          </Link>

          {/* Bottom left - Skincare */}
          <Link href="/work" className="block group">
            <div className="h-[250px] md:h-[506px] rounded-[8px] overflow-hidden cursor-pointer" data-node-id="106:182">
              <Image 
                alt="Content skincare" 
                src="/images/grid-skincare.png"
                width={500}
                height={506}
                className="object-cover rounded-[8px] w-full h-full transition-transform duration-300 ease-out group-hover:scale-[1.02] group-hover:opacity-95"
                quality={100}
              />
            </div>
          </Link>

          {/* Bottom right - Fabric */}
          <Link href="/work" className="block group">
            <div className="h-[250px] md:h-[506px] rounded-[8px] overflow-hidden cursor-pointer" data-node-id="106:184">
              <Image 
                alt="Content fabric" 
                src="/images/grid-fabric.png"
                width={500}
                height={506}
                className="object-cover rounded-[8px] w-full h-full transition-transform duration-300 ease-out group-hover:scale-[1.02] group-hover:opacity-95"
                quality={100}
              />
            </div>
          </Link>
        </div>
      </div>

      {/* CTA Button - Centered */}
      <div className="mx-auto my-8 md:my-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-[3266px] w-[169px]" data-name="CTA Button" data-node-id="106:173">
        <Link 
          href="/contact" 
          className="bg-[#1a2e66] h-[44px] rounded-[15px] w-full hover:opacity-90 transition-opacity flex items-center justify-center" 
          data-node-id="106:174"
        >
          <span className="font-['Artifex_Hand_CF',_sans-serif] text-[20px] text-white" data-node-id="106:175">
            Let's talk
          </span>
        </Link>
      </div>

      {/* Bottom image - directly before footer */}
      <div className="h-[300px] md:h-[816px] w-full md:absolute md:left-0 md:top-[3403px]">
        <Image 
          alt="Bottom image" 
          src="/images/bottom image.png"
          fill
          className="object-cover"
        />
      </div>

      {/* Footer - flow variant for mobile-friendly stacking */}
      <Footer variant="flow" />
    </div>
  );
}

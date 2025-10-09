import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#f7f2e8] relative w-full min-h-screen" data-name="Home" data-node-id="1:2">
      {/* Hero Image with crowd */}
      <div className="relative h-[818px] w-full" data-name="Header Image" data-node-id="106:6">
        <Image 
          alt="Hero image" 
          src="/images/hero-crowd.png"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Navigation */}
      <Navigation currentPage="home" />

      {/* Hero Title - Overlaid on hero image, left side */}
      <div className="absolute left-[110px] top-[558px] w-[1310px]" data-node-id="35:164">
        <h1 className="capitalize font-['Artifex_Hand_CF',_sans-serif] leading-[75px] text-[70px] text-white">
          Brand Strategy
          <br />
          Built Around People,
          <br />
          Not Assumptions
        </h1>
      </div>

      {/* Subtitle - Top right of hero */}
      <div className="absolute left-[1042px] top-[707px] w-[298px]" data-node-id="35:165">
        <p className="capitalize font-['Maison_Neue_Mono',_sans-serif] leading-[25px] text-[14px] text-white whitespace-pre-line">
          We build brands with positioning,
          {'\n'}story, and identity that connect
          {'\n'}and evolve as culture shifts.
        </p>
      </div>

      {/* First vertical divider */}
      <div className="absolute bg-[#1a2e66] h-[286px] left-[722px] top-[856px] w-[4px]" data-node-id="106:156" />

      {/* Centered brick/stone image */}
      <div className="absolute left-[412px] top-[1106px] w-[577px] h-[577px]" data-name="brick 1" data-node-id="106:158">
        <Image 
          alt="Brick center" 
          src="/images/brick-center.png"
          width={577}
          height={577}
          className="object-cover"
        />
      </div>

      {/* Second vertical divider */}
      <div className="absolute bg-[#1a2e66] h-[286px] left-[722px] top-[1709px] w-[4px]" data-node-id="106:169" />

      {/* Left text block */}
      <div className="absolute left-[213px] top-[1746px] w-[384px]" data-node-id="12:14">
        <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[35px] text-[#1a2e66] text-[18px]">
          Staying relevant feels harder than ever. Audiences shift overnight, AI changes the rules daily, and what worked last year already feels out of date. How do you build a brand that keeps up?
        </p>
      </div>

      {/* Right text block */}
      <div className="absolute left-[831px] top-[1746px] w-[388px]" data-node-id="18:13">
        <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[35px] text-[#1a2e66] text-[18px]">
          Yesterday's playbooks don't work anymore. teil.studio turns audience insight, sharp positioning, and modern tools into brand systems that connect now and evolve with what's next.
        </p>
      </div>

      {/* 2x2 Image Grid */}
      {/* Top left - Breakfast */}
      <div className="absolute h-[506px] left-[213px] rounded-[8px] top-[2128px] w-[500px]" data-node-id="106:180">
        <Image 
          alt="Content breakfast" 
          src="/images/grid-breakfast.png"
          width={500}
          height={506}
          className="object-cover rounded-[8px]"
        />
      </div>

      {/* Top right - Running */}
      <div className="absolute h-[506px] left-[728px] rounded-[8px] top-[2128px] w-[500px]" data-name="content-group urban running" data-node-id="109:4">
        <Image 
          alt="Content group urban running" 
          src="/images/grid-running.png"
          width={500}
          height={506}
          className="object-cover rounded-[8px]"
        />
      </div>

      {/* Bottom left - Skincare */}
      <div className="absolute h-[506px] left-[213px] rounded-[8px] top-[2658px] w-[500px]" data-node-id="106:182">
        <Image 
          alt="Content skincare" 
          src="/images/grid-skincare.png"
          width={500}
          height={506}
          className="object-cover rounded-[8px]"
        />
      </div>

      {/* Bottom right - Fabric */}
      <div className="absolute h-[506px] left-[728px] rounded-[8px] top-[2658px] w-[500px]" data-node-id="106:184">
        <Image 
          alt="Content fabric" 
          src="/images/grid-fabric.png"
          width={500}
          height={506}
          className="object-cover rounded-[8px]"
        />
      </div>

      {/* Large bottom image - Gen Z woman */}
      <div className="absolute h-[818px] left-0 top-[3448px] w-full">
        <Image 
          alt="Woman in green" 
          src="/images/content-group of gen z.jpg"
          fill
          className="object-cover"
        />
      </div>

      {/* CTA Button - Centered */}
      <div className="absolute left-[635px] top-[4266px] w-[169px]" data-name="CTA Button" data-node-id="106:173">
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

      {/* Footer */}
      <Footer variant="absolute" />
    </div>
  );
}

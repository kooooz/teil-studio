import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white relative size-full" data-name="Home" data-node-id="1:2">
      {/* Hero Image - Responsive */}
      <div className="absolute h-[818px] left-0 top-0 w-full" data-name="hero-main" data-node-id="31:35">
        <Image 
          alt="Hero image" 
          src="/images/hero-main.png?v=2"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Navigation */}
      <Navigation currentPage="home" />

      {/* Hero Content - Always centered */}
      <div className="absolute left-1/2 top-[370px] transform -translate-x-1/2 text-center w-full max-w-[600px]" data-node-id="35:164">
        <h1 className="capitalize font-['Artifex_Hand_CF',_sans-serif] leading-[36px] text-[#1a2e66] text-[30px] whitespace-pre">
          Brand Strategy Built Around People,
          <br aria-hidden="true" />
          Not Assumptions
        </h1>
      </div>
      <div className="absolute left-1/2 top-[456px] transform -translate-x-1/2 text-center w-full max-w-[600px]" data-node-id="35:165">
        <p className="capitalize font-['Maison_Neue_Mono',_sans-serif] leading-[25px] text-[#1a2e66] text-[14px] whitespace-pre">
          We build brands with positioning, story, and identity
          <br aria-hidden="true" />
          that connect and evolve as culture shifts.
        </p>
      </div>

      {/* Content Sections - Responsive */}
      <div className="absolute left-[728px] top-[949px] w-[397px] max-w-[397px]" data-node-id="12:14">
        <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[35px] text-[#1a2e66] text-[14px]">
          Staying relevant feels harder than ever. Audiences shift overnight, AI changes the rules daily, and what worked last year already feels out of date. How do you build a brand that keeps up?
        </p>
      </div>

      <div className="absolute left-[728px] top-[2111px] w-[404px] max-w-[404px]" data-node-id="18:13">
        <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[35px] text-[#1a2e66] text-[14px]">
          Yesterday's playbooks don't work anymore. teil.studio turns audience insight, sharp positioning, and modern tools into brand systems that connect now and evolve with what's next.
        </p>
      </div>

      {/* Content Images - Exact Figma positioning */}
      <div className="absolute h-[522px] left-[110px] top-[1527px] w-[515px]" data-name="content-mobile device gen z" data-node-id="55:569">
        <Image 
          alt="Content mobile device gen z" 
          src="/images/content-mobile device gen z.jpg"
          width={515}
          height={522}
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        />
      </div>

      <div className="absolute h-[522px] left-[110px] top-[2111px] w-[515px]" data-name="content-group urban running" data-node-id="73:6">
        <Image 
          alt="Content group urban running" 
          src="/images/content-group urban running.jpg"
          width={515}
          height={522}
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        />
      </div>

      <div className="absolute h-[522px] left-[110px] top-[2695px] w-[515px]" data-name="content-woman going shopping" data-node-id="73:8">
        <Image 
          alt="Content woman going shopping" 
          src="/images/content-woman going shopping.jpg"
          width={515}
          height={522}
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        />
      </div>

      <div className="absolute h-[516px] left-[110px] top-[949px] w-[515px]" data-name="content-group of gen z" data-node-id="55:571">
        <Image 
          alt="Content group of gen z" 
          src="/images/content-group of gen z.jpg"
          width={515}
          height={516}
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        />
      </div>

      {/* CTA Button - Always centered */}
      <div className="absolute left-1/2 top-[3448px] transform -translate-x-1/2 w-[169px]" data-name="CTA Button" data-node-id="91:60">
        <Link href="/contact" className="bg-[#1a2e66] h-[44px] rounded-[15px] w-full hover:opacity-90 transition-opacity flex items-center justify-center" data-node-id="35:180">
          <span className="font-['Artifex_Hand_CF',_sans-serif] text-[20px] text-white" data-node-id="35:181">
            Let's talk
          </span>
        </Link>
      </div>

      {/* Footer */}
      <Footer variant="absolute" />
    </div>
  );
}
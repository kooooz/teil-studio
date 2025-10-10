import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="bg-[#f7f2e8] relative min-h-screen">
      {/* Mobile-only layout */}
      <div className="block md:hidden">
        <Navigation currentPage="about" />

        {/* Hero Title */}
        <div className="px-6 pt-24">
          <h1 className="capitalize font-['Artifex_Hand_CF',_sans-serif] leading-[42px] text-[34px] text-[#1a2e66]">
            I've Spent My Career Building And Scaling Brands People Care About.
          </h1>
        </div>

        {/* About Image */}
        <div className="px-6 mt-12">
          <Image 
            alt="About Kolja" 
            src="/images/about image.jpg"
            width={500}
            height={582}
            className="w-full h-auto object-cover rounded-[8px]"
          />
        </div>

        {/* Text Block 1 */}
        <div className="px-6 mt-12">
          <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[20px] text-[#1a2e66] text-[12px]">
            I spent 15+ years at adidas shaping global brand strategy – making sure one of the world's biggest brands could stay sharp, relevant, and connected to culture. Then I built my own ventures: one that flipped how people discover wine online, another that turned a fresh retail idea into a brand people actually lined up for. Big-brand strategy gave me the playbook. Founding gave me the scars. Together, that's what I bring to teil.studio: sharp positioning, cultural foresight, and brand systems built to evolve in an AI-driven world.
          </p>
        </div>

        {/* Text Block 2 */}
        <div className="px-6 mt-12 mb-12">
          <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[20px] text-[#1a2e66] text-[12px]">
            Over the years I've built a network of creatives, strategists, and industry operators who are some of the best at what they do. Designers, storytellers, researchers, and specialists I've worked with and trusted across projects and industries. At teil.studio, you get me as your strategy partner – but when the brief calls for it, I pull in the right people to make sure the work hits the highest level. No bloated teams. Just sharp expertise, plugged in exactly where it matters.
          </p>
        </div>

        {/* Footer */}
        <Footer variant="flow" />
      </div>

      {/* Desktop-only layout */}
      <div className="hidden md:block">
        {/* Navigation */}
        <Navigation currentPage="about" />

        {/* Hero Section */}
        <div className="relative pt-48">
          {/* About Image - Left side */}
              <div className="absolute left-[109px] top-[187px] w-[500px] h-[582px]">
                <Image
                  alt="About Kolja"
                  src="/images/about image.jpg"
                  width={500}
                  height={582}
                  className="w-full h-full object-cover rounded-[8px]"
                />
              </div>

          {/* Hero Title - Right side of image, moved up */}
          <h1 className="absolute left-[720px] top-[187px] w-[591px] h-[582px] capitalize font-['Artifex_Hand_CF',_sans-serif] leading-[100px] text-[80px] text-[#1a2e66] flex items-start">
            I've spent my career building and scaling brands people actually care about.
          </h1>
        </div>

        {/* About Text - Two columns below the image */}
        <div className="relative pt-[681px] px-[109px] pb-32">
          <div className="flex gap-12">
            <div className="w-[501px]">
              <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[20px] md:leading-[25px] text-[#1a2e66] text-[12px] md:text-[14px]">
                I spent 15+ years at adidas shaping global brand strategy — making sure one of the world's biggest brands could stay sharp, relevant, and connected to culture. Then I built my own ventures: one that flipped how people discover wine online, another that turned a fresh retail idea into a brand people actually lined up for. Big-brand strategy gave me the playbook. Founding gave me the scars. Together, that's what I bring to teil.studio: sharp positioning, cultural foresight, and brand systems built to evolve in an AI-driven world.
              </p>
            </div>
            <div className="w-[501px]">
              <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[20px] md:leading-[25px] text-[#1a2e66] text-[12px] md:text-[14px]">
                Over the years I've built a network of creatives, strategists, and industry operators who are some of the best at what they do. Designers, storytellers, researchers, and specialists I've worked with and trusted across projects and industries. At teil.studio, you get me as your strategy partner — but when the brief calls for it, I pull in the right people to make sure the work hits the highest level. No bloated teams. Just sharp expertise, plugged in exactly where it matters.
              </p>
            </div>
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

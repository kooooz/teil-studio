import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="bg-[#f7f2e8] relative min-h-screen">
      {/* Navigation */}
      <Navigation currentPage="about" />

      {/* Main Content */}
      <div className="pt-48 px-[110px] pb-32">
        {/* Hero Section */}
        <h1 className="capitalize font-['Artifex_Hand_CF',_sans-serif] leading-[50px] text-[48px] text-[#1a2e66] w-[500px] mb-12">
          I've spent my career building and scaling brands people actually care about.
        </h1>

        {/* About Image */}
        <div className="mb-12">
          <Image 
            alt="About Kolja" 
            src="/images/about image.jpg"
            width={500}
            height={582}
            className="rounded-lg"
          />
        </div>

        {/* About Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1221px]">
          <div>
            <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[35px] text-[#1a2e66] text-[14px]">
              I spent 15+ years at adidas shaping global brand strategy — making sure one of the world's biggest brands could stay sharp, relevant, and connected to culture. Then I built my own ventures: one that flipped how people discover wine online, another that turned a fresh retail idea into a brand people actually lined up for. Big-brand strategy gave me the playbook. Founding gave me the scars. Together, that's what I bring to teil.studio: sharp positioning, cultural foresight, and brand systems built to evolve in an AI-driven world.
            </p>
          </div>
          <div>
            <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[35px] text-[#1a2e66] text-[14px]">
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
  );
}

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Work() {
  return (
    <div className="bg-[#f7f2e8] relative min-h-screen">
      {/* Navigation */}
      <Navigation currentPage="work" />

      {/* Main Content */}
      <main className="pt-24 pb-0">
        <div>
          {/* Project 1: Olin Skincare */}
          <div className="min-h-screen flex flex-col justify-center gap-10">
            <div className="flex justify-center px-6">
              <Image alt="Olin Skincare Work" src="/images/work-olin skincare.jpg" width={600} height={600} className="rounded-[8px] w-full max-w-[600px] h-auto" />
            </div>
            <div className="w-full px-6 md:pl-[110px] md:pr-0">
              <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[20px] text-[12px] text-[#1a2e66] text-left">
                [work]<br />
                Client: Olin<br />
                Industry: Skincare<br />
                Market Entry Testing - Skincare for men<br />
                2025
              </p>
            </div>
          </div>

          {/* Project 2: KEIT Bakery */}
          <div className="min-h-screen flex flex-col justify-center gap-10">
            <div className="flex justify-center px-6">
              <Image alt="KEIT Bakery Work" src="/images/work-keit bakery-credit robert rieger.jpg" width={600} height={600} className="rounded-[8px] w-full max-w-[600px] h-auto" />
            </div>
            <div className="w-full px-6 md:pl-[110px] md:pr-0">
              <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[20px] text-[12px] text-[#1a2e66] text-left">
                [work]<br />
                Client: KEIT<br />
                Industry: food<br />
                Brand Development — Boutique Bakery Brand<br />
                2025
              </p>
            </div>
          </div>

          {/* Project 3: dokidoki */}
          <div className="min-h-screen flex flex-col justify-center gap-10">
            <div className="flex justify-center px-6">
              <Image alt="dokidoki Newsletter Work" src="/images/work-dokidoki newsletter.jpg" width={600} height={600} className="rounded-[8px] w-full max-w-[600px] h-auto" />
            </div>
            <div className="w-full px-6 md:pl-[110px] md:pr-0">
              <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[20px] text-[12px] text-[#1a2e66] text-left">
                [work]<br />
                Client: dokidoki<br />
                Industry: AI Saas<br />
                Research — identify potential business models<br />
                2025
              </p>
            </div>
          </div>

          {/* Project 4: Geile Weine */}
          <div className="min-h-screen flex flex-col justify-center gap-10">
            <div className="flex justify-center px-6">
              <Image alt="Geile Weine Work" src="/images/work- geile weine.jpg" width={600} height={600} className="rounded-[8px] w-full max-w-[600px] h-auto" />
            </div>
            <div className="w-full px-6 md:pl-[110px] md:pr-0">
              <p className="font-['Maison_Neue_Mono',_sans-serif] leading-[20px] text-[12px] text-[#1a2e66] text-left">
                [work]<br />
                Client: Geile Weine<br />
                Industry: food<br />
                Business Strategy — New Service Offering<br />
                2025
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Extra whitespace before footer */}
      <div className="h-16 md:h-24" aria-hidden="true"></div>

      {/* Footer */}
      <Footer variant="flow" />
    </div>
  );
}

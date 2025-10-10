import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ThePartyMoved() {
  return (
    <div className="bg-[#f7f2e8] relative min-h-screen">
      {/* Mobile-only layout */}
      <div className="block md:hidden">
        <Navigation currentPage="journal" />

        <main className="pt-24 pb-32">
          {/* Full-width hero image */}
          <div className="relative w-full h-[40vh] min-h-[240px]">
            <Image
              alt="The Party Moved"
              src="/images/The Party Moved.png"
              fill
              className="object-cover object-left"
              priority
            />
          </div>

          {/* Article content */}
          <div className="px-6 mt-8">
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-[#1a2e66] mb-4">Sep 1, 2025</p>
            <h1 className="font-['Artifex_Hand_CF',_sans-serif] text-[32px] leading-[38px] text-[#1a2e66] mb-6">
              The Party Moved: From Infinite Scrolling to Finite Moments
            </h1>

            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] leading-[20px] text-[#1a2e66] mb-6">
              The attention economy didn't crash—it leveled off. Tired of endless scrolling and thinner social lives, a feed-raised generation is rethinking how and where they connect. The phone still matters, but its job has changed. It's the RSVP, not the location. The party isn't over. It just changed venues—on and offline at once. The data points in the same direction: time spent socializing among young people has fallen since the early 2000s, even as more of them limit or delete apps. This isn't anti-tech; it's pro-experience. Being present is the premium tier.
            </p>

            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] leading-[20px] text-[#1a2e66] mb-6">
              What's emerging isn't a return to some analog past. It's a reset. Gen Z is cutting background noise—fewer apps, fewer notifications—not to opt out, but to opt in with intent. They want fewer inputs with higher payoff: rooms that smell and sound like something, and moments that last longer than a story. When attention is everywhere, memory is rare. Brands that create memorable, well-made experiences win.
            </p>

            <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[24px] leading-[30px] text-[#1a2e66] mt-8 mb-4">The Connection Paradox</h2>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] leading-[20px] text-[#1a2e66] mb-6">
              For years, brands chose between two extremes: all-digital for reach, or all-physical for "experiential" buzz. Neither path fits where culture is going. The value sits in the handoff. Use digital to plan, invite, and follow up. Use physical spaces to deliver meaning. Platforms recruit; real places convert. Feeds amplify; rooms make it real. The best work treats online as infrastructure and offline as identity.
              You can see this in brands with discipline. They don't post more; they host better. They design for selective presence, not constant availability. They create traditions people plan around and tangible keepsakes people hold onto. That's what brings people back—and brings their friends.
            </p>

            <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[24px] leading-[30px] text-[#1a2e66] mt-8 mb-4">Defining the Presence-First Consumer</h2>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] leading-[20px] text-[#1a2e66] mb-6">
              I call this customer the Presence-First Consumer. They aren't abandoning tech; they're lowering its rank. They use the phone to organize the who, when, and where—then put it away so the why can happen. Their status is no longer about being everywhere online; it's about showing up in the right places offline. They still share, but usually after the fact—the post is the echo, not the event.
              You'll find Presence-First behavior across sports, lifestyle, luxury, and food. Group runs that end with long hangs. Listening bars where sound quality matters more than filming. Bookstores and salons built by fashion houses. Supper clubs that turn strangers into a table, not a grid. Each is a vote for finite moments over infinite scroll.
            </p>

            <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[24px] leading-[30px] text-[#1a2e66] mt-8 mb-4">Cultural Context</h2>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] leading-[20px] text-[#1a2e66] mb-6">
              Three forces explain the shift. First, optimization fatigue. We turned days into habit stacks, and free time started to feel like work. The answer isn't quitting; it's choosing fewer, better inputs—curation over hustle. Second, algorithmic sameness. Feeds keep serving the same songs, shoes, and restaurants, so everything blurs. Physical spaces—run clubs, listening bars, supper tables—bring back surprise and texture. Third, value recalibration. People have learned that "free" attention costs time and peace. They're happy to pay for good sound, good company, and a real story to take home. Culture isn't ditching the internet; it's using it more deliberately.
            </p>

            <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[24px] leading-[30px] text-[#1a2e66] mt-8 mb-4">Early Movers</h2>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] leading-[20px] text-[#1a2e66] mb-6">
              Miu Miu didn't launch another content trick; it launched books. Summer Reads turned fashion into public culture—newsstands and park kiosks gifting literature across major cities, complete with dust jackets and stamps. Luxury showed leadership not with logo walls, but with time well spent. Presence came first; posts came later.
            </p>

            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] leading-[20px] text-[#1a2e66] mb-6">
              Saint Laurent followed with Babylone, a bookstore-gallery on Rue de Grenelle where the products are printed, bound, and pressed to vinyl. It's "quiet culture": rare books, records, exhibitions, and no pressure to film. The message is simple—if you want to matter in the long term, give people a meaningful place to be now.
            </p>

            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] leading-[20px] text-[#1a2e66] mb-6">
              Valentino connected couture and literature by backing the International Booker Prize and supporting access to translated fiction. That's not a campaign; it's cultural investment with reach.
            </p>

            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] leading-[20px] text-[#1a2e66] mb-6">
              In sports, adidas built a studio, not a filter. Inside Manchester's Co-op Live arena, the adidas Originals Recording Studio—engineered with Abbey Road—offers tools, mentorship, and a stage for emerging talent. The content travels online, but the value builds in the room.
            </p>

            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] leading-[20px] text-[#1a2e66] mb-6">
              Running brands show the on/offline dance clearly. Tracksmith's Trackhouse is a clubhouse where training runs, broadcasts, and bib pick-ups mix with coffee and conversation. Rapha's Clubhouses blend cafés, rides, and live racing into the retail floor, turning buying into belonging. On scales the template globally, using stores as hubs for weekly runs, recovery sessions, and even sauna pop-ins around marathon weeks. Here, the feed serves the room, not the other way around.
            </p>

            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] leading-[20px] text-[#1a2e66] mb-6">
              Food is moving the same way. The supper-club revival favors intimacy over spectacle: curated tables, themed menus, and hosts who act like editors. What spreads online isn't just the photo—it's the feeling people try to explain afterward. That's the point.
            </p>

            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] leading-[20px] text-[#1a2e66] mb-6">
              Nightlife is getting quieter and better. Listening bars across the UK and Europe draw on Japan's jazz-kissa DNA—small rooms, great systems, deep attention. The rule of thumb is simple: listen first, film later. High-fidelity sound, careful vinyl curation, and dinners that turn into dancing give attention somewhere to go besides the screen. Presence feels like a luxury again.
            </p>

            <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[24px] leading-[30px] text-[#1a2e66] mt-8 mb-4">What This Means for Brands</h2>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] leading-[20px] text-[#1a2e66] mb-6">
              The shift from reach to rooms isn't a vibe; it's a strategy. If you only rent awareness, you live with rising ad costs and falling trust. If you build traditions, you create value that compounds.
              Start by replacing splashy one-offs with repeatable rituals people plan around. A quarterly reading garden. A weekly listening supper. A standing Thursday track night with a recovery routine and a shared playlist. Design for participation, not just attendance: pre-run zine tables, chef-led prep stations, on-site recording booths, book embossing desks. People remember what they help make.
              Protect presence. Gentle phone norms help—record the last song only, recap goes live tomorrow—so guests can relax without feeling they're missing the moment. You're not banning phones; you're setting the tone. Digital remains your logistics and your amplifier. But the moment belongs to the room.
            </p>

            <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[24px] leading-[30px] text-[#1a2e66] mt-8 mb-4">Category Playbooks</h2>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] leading-[20px] text-[#1a2e66] mb-6">
              Luxury can keep leaning into "quiet culture": reading rooms, salons, listening sessions, artist residencies. Partner with publishers, galleries, and small presses. Let paper, sound, and craft do the work. Let digital carry the echo.
            </p>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] leading-[20px] text-[#1a2e66] mb-6">
              Sports and lifestyle can move from athlete appearances to capability platforms: studios, clinics, route labs, recovery gardens. Make the retail floor a clubhouse. Put your community on the calendar like a gym.
            </p>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] leading-[20px] text-[#1a2e66] mb-6">
              Food can treat dinner as media with a soul. Co-author menus with small producers, add a clear narrative, and send guests home with a simple keepsake that works the next day. Sell the pantry kit later, but lead with the memory.
            </p>

            <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[24px] leading-[30px] text-[#1a2e66] mt-8 mb-4">The Opportunity</h2>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] leading-[20px] text-[#1a2e66] mb-6">
              This isn't a rejection of the internet. It's a return to what brands are for. You're not here to fill feeds. You're here to create meaning that earns its place in culture. The most valuable brands in the next cycle won't post louder; they'll host better. They'll build traditions that make the algorithm chase them.
              The party isn't back. It's better curated. If you're still shouting into the scroll, you're talking to yourself. Build rooms worth showing up for. Build rituals people return to. Create artifacts that outlast the timeline. Do that, and the internet will take care of the rest.
            </p>
          </div>

          {/* Back button */}
          <div className="px-6 mt-10">
            <Link href="/journal" className="inline-flex items-center space-x-2 font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-[#1a2e66] hover:opacity-70 transition-opacity">
              <div className="w-[19px] h-[19px] bg-[#1a2e66] rounded-full flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M5 1L2 4L5 7" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>back</span>
            </Link>
          </div>
        </main>

        <Footer variant="flow" />
      </div>

      {/* Desktop-only layout */}
      <div className="hidden md:block">
        <Navigation currentPage="journal" />

        <main className="pt-32 pb-32">
          {/* Full-width hero image */}
          <div className="relative w-full h-[60vh] min-h-[360px]">
            <Image
              alt="The Party Moved"
              src="/images/The Party Moved.png"
              fill
              className="object-cover object-bottom"
              priority
            />
          </div>

          {/* Article content */}
          <div className="px-[110px] max-w-[980px] mx-auto mt-10">
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-[#1a2e66] mb-4">Sep 1, 2025</p>
            <h1 className="font-['Artifex_Hand_CF',_sans-serif] text-[44px] leading-[52px] text-[#1a2e66] mb-6">
              The Party Moved: From Infinite Scrolling to Finite Moments
            </h1>

            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] leading-[25px] text-[#1a2e66] mb-6">
              The attention economy didn't crash—it leveled off. Tired of endless scrolling and thinner social lives, a feed-raised generation is rethinking how and where they connect. The phone still matters, but its job has changed. It's the RSVP, not the location. The party isn't over. It just changed venues—on and offline at once. The data points in the same direction: time spent socializing among young people has fallen since the early 2000s, even as more of them limit or delete apps. This isn't anti-tech; it's pro-experience. Being present is the premium tier.
            </p>

            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] leading-[25px] text-[#1a2e66] mb-6">
              What's emerging isn't a return to some analog past. It's a reset. Gen Z is cutting background noise—fewer apps, fewer notifications—not to opt out, but to opt in with intent. They want fewer inputs with higher payoff: rooms that smell and sound like something, and moments that last longer than a story. When attention is everywhere, memory is rare. Brands that create memorable, well-made experiences win.
            </p>

            <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[30px] leading-[36px] text-[#1a2e66] mt-8 mb-4">The Connection Paradox</h2>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] leading-[25px] text-[#1a2e66] mb-6">
              For years, brands chose between two extremes: all-digital for reach, or all-physical for "experiential" buzz. Neither path fits where culture is going. The value sits in the handoff. Use digital to plan, invite, and follow up. Use physical spaces to deliver meaning. Platforms recruit; real places convert. Feeds amplify; rooms make it real. The best work treats online as infrastructure and offline as identity.
              You can see this in brands with discipline. They don't post more; they host better. They design for selective presence, not constant availability. They create traditions people plan around and tangible keepsakes people hold onto. That's what brings people back—and brings their friends.
            </p>

            <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[30px] leading-[36px] text-[#1a2e66] mt-8 mb-4">Defining the Presence-First Consumer</h2>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] leading-[25px] text-[#1a2e66] mb-6">
              I call this customer the Presence-First Consumer. They aren't abandoning tech; they're lowering its rank. They use the phone to organize the who, when, and where—then put it away so the why can happen. Their status is no longer about being everywhere online; it's about showing up in the right places offline. They still share, but usually after the fact—the post is the echo, not the event.
              You'll find Presence-First behavior across sports, lifestyle, luxury, and food. Group runs that end with long hangs. Listening bars where sound quality matters more than filming. Bookstores and salons built by fashion houses. Supper clubs that turn strangers into a table, not a grid. Each is a vote for finite moments over infinite scroll.
            </p>

            <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[30px] leading-[36px] text-[#1a2e66] mt-8 mb-4">Cultural Context</h2>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] leading-[25px] text-[#1a2e66] mb-6">
              Three forces explain the shift. First, optimization fatigue. We turned days into habit stacks, and free time started to feel like work. The answer isn't quitting; it's choosing fewer, better inputs—curation over hustle. Second, algorithmic sameness. Feeds keep serving the same songs, shoes, and restaurants, so everything blurs. Physical spaces—run clubs, listening bars, supper tables—bring back surprise and texture. Third, value recalibration. People have learned that "free" attention costs time and peace. They're happy to pay for good sound, good company, and a real story to take home. Culture isn't ditching the internet; it's using it more deliberately.
            </p>

            <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[30px] leading-[36px] text-[#1a2e66] mt-8 mb-4">Early Movers</h2>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] leading-[25px] text-[#1a2e66] mb-6">
              Miu Miu didn't launch another content trick; it launched books. Summer Reads turned fashion into public culture—newsstands and park kiosks gifting literature across major cities, complete with dust jackets and stamps. Luxury showed leadership not with logo walls, but with time well spent. Presence came first; posts came later.
            </p>

            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] leading-[25px] text-[#1a2e66] mb-6">
              Saint Laurent followed with Babylone, a bookstore-gallery on Rue de Grenelle where the products are printed, bound, and pressed to vinyl. It's "quiet culture": rare books, records, exhibitions, and no pressure to film. The message is simple—if you want to matter in the long term, give people a meaningful place to be now.
            </p>

            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] leading-[25px] text-[#1a2e66] mb-6">
              Valentino connected couture and literature by backing the International Booker Prize and supporting access to translated fiction. That's not a campaign; it's cultural investment with reach.
            </p>

            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] leading-[25px] text-[#1a2e66] mb-6">
              In sports, adidas built a studio, not a filter. Inside Manchester's Co-op Live arena, the adidas Originals Recording Studio—engineered with Abbey Road—offers tools, mentorship, and a stage for emerging talent. The content travels online, but the value builds in the room.
            </p>

            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] leading-[25px] text-[#1a2e66] mb-6">
              Running brands show the on/offline dance clearly. Tracksmith's Trackhouse is a clubhouse where training runs, broadcasts, and bib pick-ups mix with coffee and conversation. Rapha's Clubhouses blend cafés, rides, and live racing into the retail floor, turning buying into belonging. On scales the template globally, using stores as hubs for weekly runs, recovery sessions, and even sauna pop-ins around marathon weeks. Here, the feed serves the room, not the other way around.
            </p>

            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] leading-[25px] text-[#1a2e66] mb-6">
              Food is moving the same way. The supper-club revival favors intimacy over spectacle: curated tables, themed menus, and hosts who act like editors. What spreads online isn't just the photo—it's the feeling people try to explain afterward. That's the point.
            </p>

            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] leading-[25px] text-[#1a2e66] mb-6">
              Nightlife is getting quieter and better. Listening bars across the UK and Europe draw on Japan's jazz-kissa DNA—small rooms, great systems, deep attention. The rule of thumb is simple: listen first, film later. High-fidelity sound, careful vinyl curation, and dinners that turn into dancing give attention somewhere to go besides the screen. Presence feels like a luxury again.
            </p>

            <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[30px] leading-[36px] text-[#1a2e66] mt-8 mb-4">What This Means for Brands</h2>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] leading-[25px] text-[#1a2e66] mb-6">
              The shift from reach to rooms isn't a vibe; it's a strategy. If you only rent awareness, you live with rising ad costs and falling trust. If you build traditions, you create value that compounds.
              Start by replacing splashy one-offs with repeatable rituals people plan around. A quarterly reading garden. A weekly listening supper. A standing Thursday track night with a recovery routine and a shared playlist. Design for participation, not just attendance: pre-run zine tables, chef-led prep stations, on-site recording booths, book embossing desks. People remember what they help make.
              Protect presence. Gentle phone norms help—record the last song only, recap goes live tomorrow—so guests can relax without feeling they're missing the moment. You're not banning phones; you're setting the tone. Digital remains your logistics and your amplifier. But the moment belongs to the room.
            </p>

            <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[30px] leading-[36px] text-[#1a2e66] mt-8 mb-4">Category Playbooks</h2>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] leading-[25px] text-[#1a2e66] mb-6">
              Luxury can keep leaning into "quiet culture": reading rooms, salons, listening sessions, artist residencies. Partner with publishers, galleries, and small presses. Let paper, sound, and craft do the work. Let digital carry the echo.
            </p>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] leading-[25px] text-[#1a2e66] mb-6">
              Sports and lifestyle can move from athlete appearances to capability platforms: studios, clinics, route labs, recovery gardens. Make the retail floor a clubhouse. Put your community on the calendar like a gym.
            </p>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] leading-[25px] text-[#1a2e66] mb-6">
              Food can treat dinner as media with a soul. Co-author menus with small producers, add a clear narrative, and send guests home with a simple keepsake that works the next day. Sell the pantry kit later, but lead with the memory.
            </p>

            <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[30px] leading-[36px] text-[#1a2e66] mt-8 mb-4">The Opportunity</h2>
            <p className="font-['Maison_Neue_Mono',_sans-serif] text-[14px] leading-[25px] text-[#1a2e66] mb-6">
              This isn't a rejection of the internet. It's a return to what brands are for. You're not here to fill feeds. You're here to create meaning that earns its place in culture. The most valuable brands in the next cycle won't post louder; they'll host better. They'll build traditions that make the algorithm chase them.
              The party isn't back. It's better curated. If you're still shouting into the scroll, you're talking to yourself. Build rooms worth showing up for. Build rituals people return to. Create artifacts that outlast the timeline. Do that, and the internet will take care of the rest.
            </p>
          </div>

          {/* Back button */}
          <div className="px-[110px] mt-10">
            <Link href="/journal" className="inline-flex items-center space-x-2 font-['Maison_Neue_Mono',_sans-serif] text-[12px] text-[#1a2e66] hover:opacity-70 transition-opacity">
              <div className="w-[19px] h-[19px] bg-[#1a2e66] rounded-full flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M5 1L2 4L5 7" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>back</span>
            </Link>
          </div>
        </main>

        {/* Spacer before footer */}
        <div className="h-screen" aria-hidden="true"></div>

        <Footer variant="flow" />
      </div>
    </div>
  );
}



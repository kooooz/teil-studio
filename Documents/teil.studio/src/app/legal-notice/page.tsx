import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function LegalNotice() {
  return (
    <div className="bg-[#f7f2e8] relative min-h-screen">
      {/* Mobile-only layout */}
      <div className="block md:hidden">
        <Navigation currentPage="" />
        <main className="pt-24 px-6 pb-32">
          <h1 className="font-['Artifex_Hand_CF',_sans-serif] text-[28px] leading-[40px] text-[#1a2e66] mb-8">Impressum</h1>
          
          <div className="font-['Maison_Neue_Mono',_sans-serif] text-[#1a2e66]">
            <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[18px] leading-[35px] mb-2">Angaben gemäß § 5 TMG</h2>
            <p className="text-[12px] leading-[20px] mb-6">
              teil.studio<br />
              Inh. Kolja Orzeszko<br />
              Stubenrauchstraße 62<br />
              12161 Berlin<br />
              Deutschland
            </p>

            <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[18px] leading-[35px] mb-2">Kontakt</h2>
            <p className="text-[12px] leading-[20px] mb-6">
              E-Mail: hello@teil.studio
            </p>

            <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[18px] leading-[35px] mb-4">Haftungsausschluss</h2>

            <h3 className="font-['Artifex_Hand_CF',_sans-serif] text-[14px] leading-[25px] mb-2">Haftung für Inhalte</h3>
            <p className="text-[12px] leading-[20px] mb-6">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h3 className="font-['Artifex_Hand_CF',_sans-serif] text-[14px] leading-[25px] mb-2">Haftung für Links</h3>
            <p className="text-[12px] leading-[20px] mb-6">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <h3 className="font-['Artifex_Hand_CF',_sans-serif] text-[14px] leading-[25px] mb-2">Urheberrecht</h3>
            <p className="text-[12px] leading-[20px] mb-6">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
        </main>

        <Footer variant="flow" />
      </div>

      {/* Desktop-only layout */}
      <div className="hidden md:block">
        <Navigation currentPage="" />
        <main className="pt-48 px-[110px] pb-32 max-w-[1221px] mx-auto">
          <h1 className="font-['Artifex_Hand_CF',_sans-serif] text-[30px] leading-[45px] text-[#1a2e66] mb-8">Impressum</h1>
          
          <div className="font-['Maison_Neue_Mono',_sans-serif] text-[#1a2e66]">
            <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[20px] leading-[45px] mb-2">Angaben gemäß § 5 TMG</h2>
            <p className="text-[14px] leading-[25px] mb-6">
              teil.studio<br />
              Inh. Kolja Orzeszko<br />
              Stubenrauchstraße 62<br />
              12161 Berlin<br />
              Deutschland
            </p>

            <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[20px] leading-[45px] mb-2">Kontakt</h2>
            <p className="text-[14px] leading-[25px] mb-6">
              E-Mail: hello@teil.studio
            </p>

            <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[20px] leading-[45px] mb-4">Haftungsausschluss</h2>

            <h3 className="font-['Artifex_Hand_CF',_sans-serif] text-[14px] leading-[30px] mb-2">Haftung für Inhalte</h3>
            <p className="text-[14px] leading-[30px] mb-6">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h3 className="font-['Artifex_Hand_CF',_sans-serif] text-[14px] leading-[30px] mb-2">Haftung für Links</h3>
            <p className="text-[14px] leading-[30px] mb-6">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <h3 className="font-['Artifex_Hand_CF',_sans-serif] text-[14px] leading-[30px] mb-2">Urheberrecht</h3>
            <p className="text-[14px] leading-[30px] mb-6">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
        </main>

        <div className="h-screen" aria-hidden="true"></div>
        <Footer variant="flow" />
      </div>
    </div>
  );
}

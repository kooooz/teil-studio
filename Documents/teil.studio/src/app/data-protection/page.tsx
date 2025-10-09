import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function DataProtection() {
  return (
    <div className="bg-[#f7f2e8] relative min-h-screen">
      <Navigation currentPage="" />
      <main className="pt-48 px-[110px] pb-32 max-w-[1221px] mx-auto">
        <h1 className="font-['Artifex_Hand_CF',_sans-serif] text-[30px] leading-[45px] text-[#1a2e66] mb-8">Datenschutzerklärung</h1>
        
        <div className="font-['Maison_Neue_Mono',_sans-serif] text-[#1a2e66]">
          <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[20px] leading-[30px] mb-2">1. Datenschutz auf einen Blick</h2>
          <p className="text-[14px] leading-[30px] mb-6">
            Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung informiert Sie darüber, welche Daten auf dieser Website erhoben werden, wie sie genutzt werden und welche Rechte Sie haben.
          </p>

          <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[20px] leading-[30px] mb-2">2. Verantwortliche Stelle</h2>
          <p className="text-[14px] leading-[30px] mb-4">
            teil.studio<br />
            Kolja Orzeszko<br />
            Stubenrauchstraße 62<br />
            12161 Berlin<br />
            Deutschland
          </p>
          <p className="text-[14px] leading-[30px] mb-6">
            E-Mail: hello@teil.studio
          </p>

          <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[20px] leading-[30px] mb-2">3. Erhebung und Speicherung personenbezogener Daten</h2>
          <p className="text-[14px] leading-[30px] mb-2">a) Beim Besuch der Website</p>
          <p className="text-[14px] leading-[30px] mb-4">
            Beim Aufrufen unserer Website werden automatisch Informationen durch den Browser an unseren Server übermittelt. Diese Daten werden temporär in Logfiles gespeichert und können Folgendes umfassen:
          </p>
          <ul className="list-disc ml-6 text-[14px] leading-[30px] mb-4">
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>verwendeter Browser und ggf. Betriebssystem</li>
          </ul>
          <p className="text-[14px] leading-[30px] mb-4">
            Die Verarbeitung erfolgt, um einen reibungslosen Verbindungsaufbau sicherzustellen sowie zur Systemsicherheit und -stabilität.
          </p>
          <p className="text-[14px] leading-[30px] mb-2">b) Bei Nutzung des Kontaktformulars / E-Mail</p>
          <p className="text-[14px] leading-[30px] mb-6">
            Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden Ihre Angaben (Name, E-Mail-Adresse, Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage genutzt.
          </p>

          <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[20px] leading-[30px] mb-2">4. Cookies</h2>
          <p className="text-[14px] leading-[30px] mb-6">
            Unsere Website verwendet Cookies, um die Nutzerfreundlichkeit zu verbessern. Sie können das Speichern von Cookies in den Einstellungen Ihres Browsers deaktivieren.
          </p>

          <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[20px] leading-[30px] mb-2">5. Analyse-Tools und Tools von Drittanbietern</h2>
          <p className="text-[14px] leading-[30px] mb-2">Sofern Analyse-Tools wie Google Analytics oder andere Dienste eingesetzt werden, informieren wir Sie darüber:</p>
          <p className="text-[14px] leading-[30px] mb-2 font-bold">Google Analytics</p>
          <p className="text-[14px] leading-[30px] mb-4">
            Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Inc. Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
          </p>
          <p className="text-[14px] leading-[30px] mb-6">
            Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie ein entsprechendes Browser-Add-on installieren oder Cookies deaktivieren.
          </p>

          <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[20px] leading-[30px] mb-2">6. Weitergabe von Daten</h2>
          <p className="text-[14px] leading-[30px] mb-6">
            Eine Übermittlung Ihrer persönlichen Daten an Dritte findet nicht statt, außer wenn dies zur Erfüllung gesetzlicher Pflichten erforderlich ist.
          </p>

          <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[20px] leading-[30px] mb-2">7. Ihre Rechte</h2>
          <p className="text-[14px] leading-[30px] mb-4">Sie haben das Recht:</p>
          <ul className="list-disc ml-6 text-[14px] leading-[30px] mb-4">
            <li>Auskunft über Ihre gespeicherten Daten zu verlangen,</li>
            <li>Berichtigung unrichtiger Daten zu verlangen,</li>
            <li>Löschung Ihrer gespeicherten Daten zu verlangen („Recht auf Vergessenwerden"),</li>
            <li>Einschränkung der Verarbeitung zu verlangen,</li>
            <li>Widerspruch gegen die Verarbeitung einzulegen,</li>
            <li>Ihre Daten in einem übertragbaren Format zu erhalten (Datenportabilität).</li>
          </ul>
          <p className="text-[14px] leading-[30px] mb-6">
            Bitte richten Sie Anfragen an die oben genannte verantwortliche Stelle.
          </p>

          <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[20px] leading-[30px] mb-2">8. Datensicherheit</h2>
          <p className="text-[14px] leading-[30px] mb-6">
            Wir setzen geeignete technische und organisatorische Maßnahmen ein, um Ihre Daten vor Verlust, Missbrauch oder unbefugtem Zugriff zu schützen.
          </p>

          <h2 className="font-['Artifex_Hand_CF',_sans-serif] text-[20px] leading-[30px] mb-2">9. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p className="text-[14px] leading-[30px] mb-6">
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand [Monat Jahr]. Wir behalten uns vor, diese Erklärung bei Bedarf zu aktualisieren.
          </p>
        </div>
      </main>

      <div className="h-screen" aria-hidden="true"></div>
      <Footer variant="flow" />
    </div>
  );
}

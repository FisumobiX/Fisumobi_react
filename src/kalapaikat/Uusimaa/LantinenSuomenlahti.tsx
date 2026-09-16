import MainLayout from '../../components/MainLayoutComp';
import "../../components/themeComp/Texts.css";
import { FaHouse,  FaMap , FaBookOpen, FaChartSimple, FaCloudSunRain } from 'react-icons/fa6';
import { Browser } from '@capacitor/browser';
import { Link } from 'react-router-dom';
import { usePdfOpener } from "../../hooks/usePdfOpener";

import { useHistory } from 'react-router-dom';

const Kalapaikka: React.FC = () => {

  const history = useHistory(); 
  const { openPdf, loading } = usePdfOpener();

  const openLink = (url: string) => {
     Browser.open({ url });
  };

  const footer = (openPopover: (type: "maps" | "fish") => void) => (
    <div className="footer">
      <FaHouse className="footer_icon" color="#6f6f6f" onClick={() => history.replace("/folder/Home")}/>  
      <FaMap className="footer_icon" onClick={() => openPopover("maps")} color="#1E90FF"/> 
      <FaBookOpen size="20" className="footer_icon" onClick={() => openPopover("fish")} color="#1E90FF"/>
      <FaChartSimple className="footer_icon" onClick={() => history.replace("/folder/Stat")} color="#1E90FF"/> 
      <FaCloudSunRain className="footer_icon" onClick={() => history.replace("/folder/Weather")} color="#1E90FF"/>
    </div>
  );
  
    return (
      <MainLayout title="Fisumobi" pagetitle={<span style={{ fontSize: '0.9rem', color: '#007aff', letterSpacing: '2px', fontStyle: 'italic' }}> - Läntinen Suomenlahti</span>} footer={footer}>
       <article className="articleText"> 
        <div className="textIntroduction">
          <p>
          Läntinen Suomenlahti on osa Itämeren itäisintä lahtea ja ulottuu Suomen etelärannikon länsiosiin. Alueen saaristo on kivikkoinen ja matala, ja keskisyvyys jää useimmiten alle kymmeneen metriin. Tämä ympäristö on erittäin suotuisa monille kalalajeille, minkä vuoksi kalakannat ovat runsaat. 
          </p>
          <p>
          Suomenlahdella on monipuolisia kalastuspaikkoja niin rannalta kuin veneestä kalastaville. Ulkosaariston avoimien selkien lomassa sijaitsee karuja saaria, luotoja ja kareja, kun taas sisäsaariston suojaisissa merenlahdissa rantoja reunustavat usein haukikaislikot. Mantereella on sekä autioita rantoja että mökkialueita ja kaupunkiympäristöä. 
          </p>
          <p>
          Pilkkijäät muodostuvat Suomenlahden rannikolle keskimäärin tammikuusta maaliskuuhun.
          </p>
        </div>
        <section>
        <p>
          <strong>Kalastuskohdelaji</strong>: mm. ahven, hauki, kuha, lohi ja meritaimen. Keväällä lyhyenä sesonkina kalastetaan myös siikaa ja silakkaa sekä talvella madetta
          </p>
          <p>
          <i>Ahven</i><br/>
            Ahvenet löytyvät niin kesällä kuin talvella syvänteiden ja väylien reunoilta sekä vedenalaisilta kareilta ja rinteiltä. Suuret meriahvenet ottavat vieheisiin loppukesällä ja syksyllä. 
         </p>
          <p>
            <i>Hauki</i><br/>
            Kaislikkoiset lahtivedet ja sisäsaariston rannat ja karit ovat erinomaisia hauen kalastuspaikkoja. Haukisaaliit voivat olla runsaita ja myös suurhaukia on mahdollista saada. 
         </p>
         <p>
         <i>Kuha</i><br/>
            Kuha on pääosin pientä, alle kilon painoista. Sitä kalastetaan sekä kesällä että pilkitään talvella. Parhaita paikkoja kuhankalastukseen ovat sameat lahdet ja niiden edustat. 
         </p>
            <p>
            <i>Meritaimen</i><br/>
            Meritaimenia saadaan parhaiten pintavedenlämmön ollessa alle 10 - 12 ℃. Meritaimenen kalastus alkaa heti jäiden lähdettyä ja keskittyy mantereen rannoille ja lähisaarten rannoille. Toukokuussa meritaimenet seuraavat rannikolle kutemaan tulevaa silakkaa. Veden lämmettyä kalat siirtyvät ulkoluodoille. Kevätkautta kestää juhannuksen tienoille. Alkusyksyllä meritaimen on pääasiassa uloimmilla luodoilla, mutta vesien viilentyessä kalat palaavat sisäsaaristoon ja rannikolle. Ensimmäiset syystaimenet saadaan elokuun loppupuolella. Saalismäärät ja saaliin koko kasvaa syksyn edetessä, marraskuulle asti. 
            </p>
            <p>
            <i>Merilohi</i><br/>
            Lohta vetouistellaan ulkosaariston laidalla ja aavalla merellä, joten veneen täytyy soveltua meriolosuhteisiin. Vetouistelija saa saalista touko-syyskuun aikana. Tärpit ovat harvassa, mutta saaliina voi olla suurikin lohi. 
            </p>
            <p>
            <i>Siika</i><br/>
            Siian kevätonginta alkaa jäiden lähdön jälkeen maalis-huhtikuussa. Matalat hiekka- tai sorapohjaiset rannat ja siltojen vierustat ovat suosittuja kalapaikkoja. Siikojen koko on keskimäärin noin 500–700 grammaa.  
            </p>
        </section>
        <section>
            <p>
            <Link to={`/map/Kalakartta?lat=${60.762297}&lng=${24.148923}&zoom=12`}> 


            <FaMap color='#4cd964'/>&nbsp;  Näytä kartalla
            </Link>
            </p>
            <div className="kalapaikkaKuva">
                <img
                src="./images/kalapaikkakuvat/kesa/hauki.png"
                className="imgKalastuspaikka"
                alt="hauki"
                />
            </div> 
            <h3 style={{ textAlign: 'center' }}>Info</h3>

          </section>
          <section>
            <p><strong> Kalastuslupa ja kalastussäännöt</strong></p>
            <p>
            Metsähallituksen hallinnoimilla vesialueilla usealla vavalla kalastettaessa tarvitaan Merialueen vapalupa 7415 Suomenlahti, valtion vedet
            </p>
            <p>
            Kalastus yhdellä vavalla on sallittu, valtion kalastonhoitomaksulla. Rajattujen alueiden kalastuslupia myyvät esim. matkailutoimistot. 
            </p>
            <p>
            Suomenlahdella on useita rauhoituspiirejä, luonnonsuojelualueita yms., joissa kalastus on kielletty. Rajoja ei ole merkitty maastoon tai merelle. Alueista löytyy tietoa internetistä ym. esim. kalastusrajoitus -sivustolta.
            Puolustusvoimien alueilla ei saa mennä 100 m lähemmäs Puolustusvoimien maa-alueita, mutta kalastus on muutoin sallittu. Alueet on merkitty maastoon. 
            </p>
            <p>
            Puolustusvoimien kovapanosammunta-alueet ovat merkitty karttoihin ja niistä tiedotetaan puolustusvoimat.fi sivulla. Maihinnousukieltoja on mm. Helsingissä Santahaminan edustalla ja Kirkkonummen Upinniemessä. 
            </p>
            <p>
            Valtion vesialueella rasvaevällinen taimen on rauhoitettu ja rasvaeväleikatun taimenen alamitta on 65 cm.  
            </p>          
          </section>
          <section>
            <p><br/><strong>Kalastusapaikkoja</strong></p>
            <p><strong>Bromarv – Tenhola</strong></p>
            <div style={{ marginBottom: "2rem", background: 'var(--bg-accordion-header)', padding: '0.5em' }}>
              <p>
              Sijaitsee Raaseporin kunnan länsipuolella. Alue koostuu pääosin Bolaxfjärdenin ja Porsö-Bredsundsfjärdenin ulkosaarivyöhykkeestä, Bromarvin laajaa niemeä ympäröivästä merialueesta sekä pitkälle sisämaahan ulottuvista lahdista mm. Lindöviken ja Hölklötfjärden. 
              </p>
              <p>
              Mantereeseen työntyvät sisälahdet ovat kuha, hauki ja ahvenpaikkoja, kuten myös Bromarvin pohjois-, itä- ja eteläranta. Bromarvin itä- ja eteläpuolella, mutta varsinkin pohjoispuolella on syvää vettä, joissa vertikaalijigaaminenkin onnistuu. Bromarvin eteläpuoli on enemmän karien ja saarten rikkomaa. Bromarvinin ulkomerenpuoleinen länsipuoli on ulkomeren kaltainen karu ja siellä viihtyvät meritaimen ja siika.
              </p>
              <p><strong>Rannalta kalastuspaikkoja</strong></p>
             <p><strong>Stagsundet/Gennarbyviken välinen kannas.</strong><br/>
             Kannaksella ja sen molemmin puolin ei ole asutusta. Ahvenen, hauen ja kuhan kalastukseen sovelias paikka. Gennarbyvikenin puolella makeaa vettä ja isoja kuhia ja ankeriaita.
                Padon molemminpuolin on 100m kalastuksenkieltoalue. 
             </p>
             <p>
             Pysäköinti: Paikalla pysäköintipaikka ja veneenlaskupaikka. Navigaattoriin: Öbyntie 177, Hanko. 
             </p>
             <p><strong>Pilkkiminen</strong></p>
             <p>
             Bromarvinin pohjoispuolen syvänteet ovat isojen kuhien ja ahventen asuinpaikkoja.
             </p>
             <p>
                 <span className='links'
                onClick={() => openLink('https://lansiuudenmaankalatalousalue.fi/')}
              >
                Länsi Uudenmaan kalatalousalue
              </span>
            </p>
            </div>
            <p><strong>Hanko</strong></p>
            <div style={{ marginBottom: "2rem", background: 'var(--bg-accordion-header)', padding: '0.5em' }}>
            <p>
            Hankoniemen etelä- ja länsipuolella oleva saaristo on karua ja kalliorantaista ulkosaariston luontoa. Meritaimenen ja siikojen asuttamia saarten rantoja ja salmia.
            </p>
            <p>
            Pohjoispuolen Bengtsäri ympäristöineen sopii ahvenen, kuhan ja hauen kalastukseen. 
            </p>
            <p>
            Hankoniemen eteläpuolen rannat ja saaret eivät ole kovin suojaista aluetta vaan ulkomeri vaikuttaa myös täällä. Siksi myös meritaimen on tavallinen saaliskala täällä, ahvenen ja hauen lisäksi. 
            </p>
            <p>
            Hankoniemen rannalta kalastaenkin on mahdollista saada meritaimenia. 
            </p>
            <p><strong>Rannalta kalastuspaikkoja</strong></p>
            <p>
            Hankoniemen niemet myös Hangon keskustan lähellä soveltuvat kalastukseen.
            </p>
            <p>
                 <span className='links'
                onClick={() => openLink('https://lansiuudenmaankalatalousalue.fi/')}
              >
                Länsi Uudenmaan kalatalousalue
              </span>
            </p>
            </div>
            <p><strong>Pohjanpitäjänlahti</strong></p>
            <div style={{ marginBottom: "2rem", background: 'var(--bg-accordion-header)', padding: '0.5em' }}>
            <p>
            Noin 15 kilometriä pitkä ja kapea murtovesilahti, Pohjanpitäjänlahti, soveltuu kaislikkoisten rantojensa vuoksi lähinnä veneestä kalastamiseen sekä pilkkimiseen. 
            </p>
            <p><strong>Rannalta kalastuspaikkoja</strong></p>
            <p>
            Raaseporin/Tammisaaren kaupunginlahdessa ja Dragsvikinlahdessa on matalaa hauki, kuha, ahven vettä. 
            </p>
            <p><strong>Kalastusrajoitukset ja säännöt</strong></p>
            <p>
            Mustionjoen ja Fiskarsinjoen edustoilla, mukaan luettuna Fiskarsjoen alaosa Borgbyträsket ja Brunkominpuro on rauhoituspiiri, jossa kalastus kielletty. 
            </p>
            <p><strong>Pohjanpitäjänlahti</strong></p>
            <p>
            Pohjanpitäjänlahti on suosittu ahvenen, mateen ja kuhan pilkkipaikka.
            </p>
            <p>
                 Kalastusohjeita: {' '}<span className='links'
                onClick={() => openLink('https://www.visitraseborg.com/fi/aktiviteetit/merelle/kalastus/')}
              >
                Visit Raseborg
              </span>
            </p>
            <p>
                 <span className='links'
                onClick={() => openLink('https://tammisaari-pohjankalatalousalue.fi/')}
              >
                Tammisaari-Pohjan kalatalousalue
              </span>
            </p>
            </div>
            <p><strong>Raasepori – Snappertuna</strong></p>
            <div style={{ marginBottom: "2rem", background: 'var(--bg-accordion-header)', padding: '0.5em' }}>
            <p>
            Raaseporin edustalla on tiheä saaristo. Rannikon edustalla on ns. puutarhaväylä, mikä on kapea saaristoväylä, jonka varrella vanhoja kalastajatiloja ranta-aittoineen sekä nykyaikaista saaristorakentamista. Väylä soveltuu vetouisteluun ja rannalta kalastamiseen. 
            </p>
            <p>
            Raaseporin välisaaristosta ulkomerelle ulottuvasta saaristosta osa on Raaseporin kansallispuistoa. Puistoon kuuluvia saaria ovat mm. Älgö, Fladalandet ja Modermagan sekä Jussarön länsiosa. Kansallispuistossa on lukuisia luonnonsatamia, joihin veneilijät voivat kiinnittyä. Kansallispuistossa ei ole kalastustusrajoituksia.  
            </p>
            <p>
            Kalastoon kuuluu puutarhaväylällä hauki, ahven ja kuha. Kuhaa on vähemmän Skåldössä, Baggössä ja Torön merenpuoleisilla kirkkailla vesillä, mutta hiekkapohjaisissa salmissa on siikaa. Ulkosaarilla kalastossa on meritaimen.  
            </p>
            <p><strong>Rannalta kalastuspaikkoja</strong></p>
            <p>
            Lossimatkan takana olevat saaret Skåldö, Baggö ja Torsö ovat kuhan, hauen, ahvenen ja siian kalastukseen hyviä paikkoja. 
            </p>
            <p>
            Bäggön sataman länsipuolella on asumaton, kalastukseen sopiva ranta.
            </p>
            <p>
            Muita kalastupaikkoja mm. Gammelbodan, Jomalvikin kanava, Edesvikenin lahti ja Kopparön (Kopparöfladan ) virkistysalueen  vedet. 
            </p>
            <p>
            Torsöntie 737, Raasepori. 50m kalastettavaa kalliorantaa Boxströmmenin salmessa. 
            </p>
            <p><strong>Kalastusrajoitukset ja säännöt ym.</strong></p>
            <p>
                 Kalastusohjeita: {' '}<span className='links'
                onClick={() => openLink('https://www.visitraseborg.com/fi/aktiviteetit/merelle/kalastus/')}
              >
                Visit Raseborg
              </span>
            </p>
            <p>
                Kuhan kalastuskielto kts. <span className='links'
                onClick={() => openLink('https://www.raseborg.fi/fi/artikkelit/asuminen-ja-ymparisto/kadut-puistot-yleiset-alueet/metsat-ja-vesialueet/kalastusluvat/uudet-kalastuskiellot-tammisaari-pohjan-kalatalousalueella-kuhan-kudun-turvaamiseksi')}
              >
                www.raseborg.fi
              </span>
            </p>
            </div>
            <p><strong>Inkoo</strong></p>
            <div style={{ marginBottom: "2rem", background: 'var(--bg-accordion-header)', padding: '0.5em' }}>           
            <p>
            Inkoon länsipuolella on suuri Orslandetin saari ja sitä ympäröivä saaristo. Orslandetissa on salmia ja lahtia rannalta kalastajalle, ja Orslandetin ympärillä ja varsinkin merenpuolella paljon pieniä saaria ja luotoja, mistä löytää veneellä kalastettavaa. Muualla saaristo on harvempaa, rannikolla lahtia ja muutama suurempi niemi. 
            </p>
            <p><strong>Rannalta kalastuspaikkoja</strong></p>
            <p><strong>Korssundetin silta</strong></p>
            <p>
            Sillan molemmin puolin voi rannalta kalastaa. Etelä-puolella on venesatama. Ahven, kuha, keväällä siika. Sillalta kalastetaan keväällä silakkaa. Barösundintie 416, Inkoo
            </p>
            <p><strong>Bergudden/Kopparnäsin eteläranta</strong></p>
            <p>
            Kopparnäsin lounaisniemessä on kalastettavaa kalliorantaa muutama sata metriä. Ahven, kuha, meritaimen. 
            </p>
            <p>
            Palvelut: Nuotiopaikkoja. 
            </p>
            <p>
            Pysäköinti ja kulku: Lounaisniemi. Navigaattoriin Kallioniemi 21, Inkoo, jossa parkkipaikka. Rantaan alle 100m.
            Eteläniemi. Navigaattoriin Kopparnäsintie 644, 10160 Inkoo. Tuolta kääntyy tie etelärantaan ja parkkipaikoille. Rantaan parkkipaikoilta 50m. 
            </p>
            <p>
                 <span className='links'
                onClick={() => openLink('https://inkoonkalatalousalue.fi/')}
              >
                Inkoon kalastusalue
              </span>
            </p>
            </div>
            <p>
             Kirkkonummi – Porkkala
            </p>
            <div style={{ marginBottom: "2rem", background: 'var(--bg-accordion-header)', padding: '0.5em' }}>
            <p>
            Kalapaikkoja löytää Pikkalanlahdelta, Pikkalanselältä ja suurista niemistä, Upinniemestä ja Porkkalanniemestä. Itäosassa ovat Espoon rajalla olevat Soukanlahden ja Kivenlahden vesialueeet. Upinniemi on suljettua sotilasaluetta. 
            </p>
            <p>
            Porkkalanniemessä on Uudenmaan virkistysalueyhdistyksen, Helsingin ja Vantaan kaupunkien, Kirkkonummen ja Nurmijärven kuntien yhteiskäytössä virkistysalueita.
            </p>
            <p>
            Helsingin kaupungin virkistysalueella Lähteelässä on mm. grillikatoksia, kioski, joka on auki pääsiäisestä syyskuun loppuun. Kioskista voi vuokrata veneitä ja satamasta löytyy vierasvenepaikkoja. 
            </p>
            <p><strong>Rannalta kalastuspaikkoja</strong></p>
            <p><strong>Linlo</strong></p>
            <p>
            Linlon saari ja siellä oleva Kirkkonummen kunnan omistama ulkoilualue on lähes rakentamaton ja sen rannoilta on mahdollista kalastaa mm. ahventa, haukea ja kuhaa. Saareen pääsee ponttonisiltaa pitkin.
            </p>
            <p>
            Palvelut: 2 keittokatosta ja useita nuotiopaikkoja missä polttopuut. 
            </p>
            <p>
            Pysäköinti ja kulku: Linlontie 135 Kirkkonummi, jossa parkkipaikka. Parkkipaikalta menee polku ja ponttonisilta saareen. 
            </p>
            <p><strong>Porkkalanniemi</strong></p>
            <p>
            Pampskatanilta eli eteläisimmän niemen kärjen etelä- ja länsipuolelta on mahdollisuus saada kuhaa ja meritaimenta. Itäpuolelta saalis on ahventa, haukea ja lahnaa. Ympäri niemen kalastetaan keväällä siikaa.
            </p>
            <p>
            Helsingin kaupungin virkistysalueen Lähteelän vesiltä saa ahventa ja haukea, vuokraveneellä myös kuhaa. 
            </p>
            <p>
            Palvelut: Virkistysalueilla mm. telttailualueita, nuotiopaikkoja/katoksia vessoja, parkkipaikkoja yms.
            </p>
            <p>
            Pysäköinti: Kirkkonummen ja Nurmijärven virkistysalue: Tullandintie 185 ja 209 02480 Kirkkonummi.<br/>
            Vantaan virkistysalue: Tullandintie 41, 2480 Kirkkonummi.<br/>
            Helsingin virkistysalue Lähteelä: Källvikintie 6 02480 Kirkkonummi.<br/> 
            </p>
            <p><strong>Pilkiminen</strong></p>
            <p>
            Linlon itä- ja eteläpuoli on tunnettu pilkkipaikka, josta saadaan kuhaa, ahventa ja haukea. 
            </p>
            <p>
             Porkkalaniemessä, Vantaa virkistysalueen rannan edusta on pilkkijöiden suosiossa. Syvänteiden laidoilta saadaan isoa ahventa.
            </p>
            <p>
                 <span className='links'
                onClick={() => openLink('https://kirkkonummi-siuntionjoenkalatalousalue.fi/')}
              >
                Kirkkonummi-Siuntionjoen kalatalousalue
              </span>
            </p>
            </div>
            <p>
             Espoo - Helsinki
            </p>
            <div style={{ marginBottom: "2rem", background: 'var(--bg-accordion-header)', padding: '0.5em' }}>
            <p>
                 <span className='links'
                onClick={() => openLink('https://helsinki-espoonkalatalousalue.fi/')}
              >
                Helsinki-Espoon kalatalousalue
              </span>
            </p>
            <p>
             Helsingin kalavedet: <span className='links'
                onClick={() => openLink('https://www.hel.fi/fi/kulttuuri-ja-vapaa-aika/ulkoilu-puistot-ja-luontokohteet/kalastus/helsingin-kalavedet')}
              >                
              Helsingin kaupunki
              </span>
            </p>
            <p>
              <strong>Helsingin kalavesienkartta (avautuu laitteen pdf-lukijaan)</strong>:{' '}
              <span
                  role="button"
                  onClick={() => openPdf("kalavesikartta_2022_web.pdf")}
                  className='pdfText'
                >
                  {loading ? "Ladataan..." : "Helsingin kalavesienkartta"}        
              </span>
            </p>
            </div>
          </section>
        </article>
      </MainLayout>
    );
  };
  
  export default Kalapaikka;
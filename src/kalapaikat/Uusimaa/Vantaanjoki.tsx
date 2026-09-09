import MainLayout from '../../components/MainLayoutComp';
import "../../components/themeComp/Texts.css";
import { FaHouse,  FaMap , FaBookOpen, FaChartSimple, FaCloudSunRain } from 'react-icons/fa6';
import { Browser } from '@capacitor/browser';
import { Link } from 'react-router-dom'
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
      <MainLayout title="Fisumobi" pagetitle={<span style={{ fontSize: '0.9rem', color: '#007aff', letterSpacing: '2px', fontStyle: 'italic' }}> - Kaartjärvi</span>} footer={footer}>
       <article className="articleText"> 
        <div className="textIntroduction">
          <p>
          Vantaanjoki tarjoaa hienot mahdollisuudet perhokalastukseen, heittokalastukseen ja myös rauhaisempaan ongintaan. Joessa elää sekä luonnonkaloja että istukkaita, ja sen eri osuudet tarjoavat hyvin erilaisia kalastuspaikkoja. 
          </p>
          <p>
          Joki on noin 100 kilometriä pitkä. Se saa alkunsa Hausjärveltä ja laskee Helsingin Vanhankaupunginkoskella Suomenlahteen. Alajuoksu on luonteeltaan savisamea, kun taas latvaosilla vesi on kirkkaampaa. Keskijuoksulla korostuvat vehreät rannat ja rauhalliset kalastuspaikat.
          </p>
          <p>
          Vantaanjoki on yksi Suomenlahden merkittävimmistä meritaimenjoista, jossa taimen lisääntyy luontaisesti. Myös lohen luontaista lisääntymistä on havaittu. Tunnetuimpia kalastusalueita ovat Pitkäkoski, Vanhankaupunginkoski, Tikkurilankoski, Nukarinkoski ja Vanhanmyllynkoski.
          </p>
          <p>
          Joki on hyvin saavutettavissa: sen varrella kulkee runsaasti polkuja, siltoja ja pysäköintipaikkoja. Samalla tarjolla on myös syrjäisempiä kohteita luonnonrauhaa etsiville.
          </p>
        </div>
        <section>
        <p>
          <strong>Kalasto ja kalastus </strong>
          </p>
          <p>
          Vantaanjoen kalasto on monipuolinen. Tärkein saalislaji kirjolohen ohella on taimen, jota esiintyy sekä luontaisesti lisääntyvänä että istutettuna. Paikoittain tavataan myös harjusta, ja lohi nousee jokeen satunnaisesti merestä.
          </p>
          <p>
          Muita yleisiä lajeja ovat ahven, hauki, lahna, särki ja made.
          </p>
          <p>
          Onkiminen on sallittua suvantoalueilla, joissa tavallisimpia saaliita ovat lahna ja särki.
          </p>
          <p>
          Joessa on myös talvella sulana pysyviä paikkoja, joissa esimerkiksi perhokalastus voi tuottaa saalista.
          </p>
          <p>
          Vantaanjoki jakautuu useisiin lupa-alueisiin. Suosituimpia ovat Helsingin ja Vantaan kaupungin hallinnoimat alueet sekä yksityiset erityiskalastusalueet. 
          </p>
        </section> 
        <br/>
        <div className="kalapaikkaKuva">
            <img
              src="./images/kalapaikkakuvat/kesa/kuha.png"
              className="imgKalastuspaikka" style={{width: '25%'}}
              alt="kuha"
            />
          </div> 
        <section>
            <p>
            <Link to={`/map/Kalakartta?lat=${60.268419577718646}&lng=${24.89315089048286}&zoom=12`}> 
            <FaMap color='#4cd964'/>&nbsp;  Näytä kartalla
            </Link>
            </p>

            <h3 style={{ textAlign: 'center' }}>Info</h3>
            <p>
              <strong>Alueen kalapaikkaesite (avautuu laitteen pdf-lukijaan)</strong>:{' '}
              <span
                  role="button"
                  onClick={() => openPdf("KALAPAIKKAESITE_2016.pdf")}
                  className='pdfText'
                >
                  {loading ? "Ladataan..." : "Vantaanjoen ja Helsingin seudun vesiensuojeluyhdistys ry esite"}        
              </span>
            </p>
            <p>
            <strong>Hyvinkään erityiskalastusalueet</strong> (kts. linkki luonnonsuojelu):{' '}
              <span className='links'
                onClick={() => openLink('https://www.hyvinkaa.fi/ymparistofoorumi/luonnonsuojelu/kalastus-hyvinkaalla/hyvinkaan-virkistyskalastusalueet/vantaanjoki')}
              >
                Hyvinkään kaupunki
              </span>           
            </p>
            <p>
            <strong>Helsingin kaupungin alueen kalastusluvat- ja säännöt</strong>:{' '}
              <span className='links'
                onClick={() => openLink('https://www.hel.fi/fi/kulttuuri-ja-vapaa-aika/ulkoilu-puistot-ja-luontokohteet/kalastus/kalastusluvat-ja-hinnat/')}
              >
                Helsingin kaupunki
              </span>           
            </p>
            <p>
              <strong>Vantaan kaupungin alueen kalastusluvat- ja säännöt</strong>:{' '}
              <span className='links'
                onClick={() => openLink('https://verkkokauppa.vantaa.fi/tuote-osasto/kalastusluvat/')}
              >
                Vantaa kaupungin verkkokauppa
              </span>           
            </p>
          </section>
          <div className="kalapaikkaKuva">
            <img
              src="./images/kalapaikkakuvat/kesa/taimen3.png"
              className="imgKalastuspaikka" style={{width: '30%'}}
              alt="kuha"
            />
          </div>
          <section>
            <p><strong>Kalastusapaikat</strong></p>
            <p><strong>Helsinki</strong><br/>
            </p>
            <div style={{ marginBottom: "2rem", background: 'var(--bg-accordion-header)', padding: '0.5em' }}>
              <p>
              Vanhankaupunginkoski ja sen suvanto muodostavat suositun ulkoilu- ja kalastusalueen Vantaanjoen suulla. Alueella sijaitsevat muun muassa Tekniikan museo ja ravintola Koskenranta. 
              Koski- ja suvantoalueille tarvitaan erilliset luvat. Kalastussäännöt ovat poikkeukselliset ja kannattaa tarkistaa etukäteen.
              </p>
              <p><strong>Vanhankaupunginkosken suvanto</strong><br/>
              Suvannolla onkiminen on vapaata. Viehekalastukseen tarvitaan lupa:
              </p>
              <p>
              <ul>
                <li>Helsinkiläisille suvantolupa </li>
                <li>Muille matkailijakalastuslupa</li>
                <li>Alle 18-vuotiaat eivät tarvitse suvantolupaa</li>
              </ul>
              </p>
              <p>
              Kalasto on erittäin monipuolinen ja sisältää mm. kuhaa, siikaa, toutainta, ahventa, haukea, karppia, merilohta ja meritaimenta.
              </p>
              <p><strong>Vanhankaupunginkoski</strong><br />
              Koski on kaksiosainen: toinen haara on padottu ja toisessa kulkee kalatie. Koskialueella kalastaminen edellyttää koskilupaa, myös lapsilta.
              </p>
              <p><strong>Pitkäkoski, Ruutinkoski ja Niskalankoski</strong><br/>
              Noin 1,4 km pitkä koskijakso, jolla kalastus tapahtuu Helsingin viehekalastusluvalla tai matkailijakalastusluvalla. Alue on suosittu erityisesti taimenenkalastajien keskuudessa, ja sen ympärillä sijaitsee Pitkäkosken rinnelehdon luonnonsuojelualue.
              </p>
            </div>
            <p><strong>Vantaa</strong></p>
            <div style={{ marginBottom: "2rem", background: 'var(--bg-accordion-header)', padding: '0.5em' }}>
            <p>
            Kaupunkikalastusalueisiin kuuluvat <strong>Vantaankoski</strong>, sen alapuolinen suvanto, <strong>Mustakoski</strong> sekä Vantaanjokeen laskevan Keravanjoen <strong>Tikkurilankoski</strong>. 
            Koskialueille istutetaan pyyntikokoista kirjolohta. Muita lajeja ovat mm. hauki, ahven, taimen, lohi ja harjus.
            </p>
            <p><strong>Nurmijärvi</strong><br/></p>
            <p>
            <strong>Myllykoski</strong> sekä sen yläpuoliset <strong>Niittykoski</strong> ja <strong>Pikkukoski</strong> sijaitsevat rauhallisella retkeilyalueella luontopolun varrella.
            </p>
            <p>
            Nukarinkoski on noin 1,3 km pitkä koskijakso välisuvantoineen ja yksi Vantaanjoen suosituimmista kalastuspaikoista. Alueelle istutetaan kirjolohta, ja lisäksi tavataan mm. haukea, ahventa, taimenta, lohta ja harjusta.
            </p>
            </div>
            <p><strong>Hyvinkää</strong></p>
            <div style={{ marginBottom: "2rem", background: 'var(--bg-accordion-header)', padding: '0.5em' }}>
            <p>
            <strong>Kittelänkosken</strong> erityiskalastusalueella kalastettavaa on noin 1,5 km. Kahlaaminen on vaikeaa joen syvyyden vuoksi.
            </p>
            <p>
            Kytäjänjoki tuo runsaasti lisävirtaamaa Vantaanjokeen. <strong>Vanhanmyllynkoskella</strong> joen virtaama on jo huomattvasti pienempi. Kalastusalue on noin kilometrin mittainen. Huomioithan, että yksityismailla joen länsirannalla kalastus ei ole sallittua.
            </p>
            <p>
            Koskialueille istutetaan vuosittain taimenta, kirjolohta ja harjusta. Muita lajeja ovat mm. lahna, pasuri, kivisimppu, ahven ja hauki.
            </p>
            </div>
            <p><strong>Riihimäki</strong><br/></p>
            <div style={{ marginBottom: "2rem", background: 'var(--bg-accordion-header)', padding: '0.5em' }}>
            <p>
            <strong>Käräjäkoski</strong> sijaitsee Vantaanjoen latvaosalla ja on luonteeltaan puromainen kohde. Alueella kulkee esteetön luontopolku ja polun varrella on kalastuslaituri.
            </p>
            <p>
            Käräjäkoskella istutetaan kirjolohta ja harjusta. Luonnonkalastoon kuuluvat mm. taimen, hauki, ahven, made, nahkiainen ja kivisimppu.
            </p>
            </div>
          </section>
        </article>
      </MainLayout>
    );
  };
  
  export default Kalapaikka;
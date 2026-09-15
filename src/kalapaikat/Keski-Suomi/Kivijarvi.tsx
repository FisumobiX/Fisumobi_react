import MainLayout from '../../components/MainLayoutComp';
import "../../components/themeComp/Texts.css";
import { FaHouse,  FaMap , FaBookOpen, FaChartSimple, FaCloudSunRain } from 'react-icons/fa6';
import { Browser } from '@capacitor/browser';
import { Link } from 'react-router-dom'

import { useHistory } from 'react-router-dom';

const Kalapaikka: React.FC = () => {

  const history = useHistory(); 

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
      <MainLayout title="Fisumobi" pagetitle={<span style={{ fontSize: '0.9rem', color: '#007aff', letterSpacing: '2px', fontStyle: 'italic' }}> - Kivijärvi</span>} footer={footer}>
       <article className="articleText"> 
        <div className="textIntroduction">
            <p>
            Viitasaarenreittiin kuuluva lähes 50 kilometriä pitkä Kivijärvi tarjoaa erinomaiset vapaa-ajankalastusmahdollisuudet. Se tunnetaan nykyisin erityisesti vahvasta ja elinvoimaisesta kuhakannastaan sekä myös taimenistaan. Järvi on varsinkin rannoiltaan nimensä mukaisesti kivinen, mutta pohjanmuodoiltaan vaihteleva, keskisyvyydeltään 8,4 metriä ja syvimmiltään yli 40 metriä. Järven kirkkaat vedet houkuttelevat alueelle niin vetouistelijoita, jigikalastajia kuin talvisia pilkkijöitäkin.
            </p>
            <p>
            Kinnulan kunnan länsipuolella sijaitseva Salamajärven kansallispuisto, jossa on metsähallituksen erityiskalastuskohteita.
            </p>
            <p>
              Jokikalastuskohde Hilmonjoki.
            </p>
        </div>
        <p>
          <h4>Kivijärvi</h4>
        Saarensalmesta pohjoiseen Kivijärven vesi on humuspitoisempaa ja tummempaa. Pohjoispuolella on Kuhasaaliit suurempia. Taimen viihtyy paremmin järven eteläosien selänteillä ja niiden laidoilla.
        </p>
        <p>
            Kivijärvessä voi vetouistella 10 vavalla/venekunta sekä Kivijärven kalastusalueen luvalla että
            laajemmalla <strong>Pohjoisen Keski-Suomen yhteisvieheluvalla</strong>.
        </p>
        <p>
          Samoilla luvilla on oikeus kalastaa myös alueen muilla järvillä mm. Vuosjärvellä kts. alla linkki Kivijärven kalastalousalue.
        </p>
        <p>
            <Link to={`/map/Kalakartta?lat=${63.14121328850435}&lng=${25.17624067991607}&zoom=11`}>  
            <FaMap color='#4cd964'/>&nbsp;  Näytä kartalla
            </Link>
        </p>

        <p>
          <strong>Luvat ja kalastusäännöt ym.</strong>:{' '}
            <span className='links'
                onClick={() => openLink('https://kivijarvenkta.fi/kalastusluvat/')}
              >
                Kivijärven kalastalousalue
            </span>
        </p>
        <p>
          <strong>Luvat ja kalastusäännöt ym.</strong>:{' '}
            <span className='links'
                onClick={() => openLink('https://kskalatalouskeskus.fi/wp-content/uploads/2025/04/KSkalastuspaikkaopas-2025.pdf')}
              >
                Keski-Suomen kalapaikkaopas
            </span>
        </p>
        <p>
        <h4>Jokikalastuskohteet</h4>
        </p>
        <strong>Hilmonjoki</strong> (tunnetaan myös nimellä Hilmonkoski) on Keski-Suomen Kannonkoskella, Vuosjärveen laskeva suosittu koskikalastuskohde. Kosken pituus on noin 3 kilometriä. Joessa kalastetaan luontaisesti esiintyvää harjusta ja haukea sekä istutettua järvitaimenta.
        <p>
          <strong>Luvat ja kalastusäännöt ym.</strong>:{' '}
            <span className='links'
                onClick={() => openLink('https://www.hilmonkoski.fi/')}
              >
                Hilmonkoski
            </span>
            {' '}ja{' '}
            <span className='links'
                onClick={() => openLink('https://kannonkoski.fi/hilmonkoski')}
              >
                Kannonkosken kunta
            </span>
        </p>
        <p>
        <h4>Erityiskalastuskohteet</h4>
        </p>
        <p>
        Iso Koirajärvi Salamajärven kansallispuistossa on erämainen, luonnonkaunis järvi (erälupa 6566). Järven rannalla on Koirasalmen luontotupa, josta voi vuokrata mm. veneen. Järven luontaiset kalalajit ovat hauki ja ahven, istutettuina järvitaimen ja siika.
        </p>
        <p>
        Tälle Metsähallituksen vapalupa-alueelle on tarjolla myös Koirajärvi–Heikinlampi-yhdistelmälupa, jolla Heikinlammessa on mahdollisuus kalastaa kirjolohta.
        </p>
        <p>
          <strong>Infoa</strong>:{' '}
            <span className='links'
                onClick={() => openLink('https://koirasalmi.com/')}
              >
                Koirasalami
            </span>
        </p>
        <p>
        <hr/>
        <br/>

          <strong>Palvelut</strong>: Maksuton matkaparkki Kivijärvellä 1.5 – 31.10. Matkailuauto/vaunu ja telttapaikat. Tilaa noin 15 autolle ja vaunulle. Vesipiste, ajokaivo ja ilmainen sähkö.
                    Paikalla on sähköautoille 11kW laturi.<br/>
                    Peltokankaantie 75, 43800 Kivijärvi
        </p>


        <p>
              Metsähallituksen kalavedet:
        </p>
            Koskikalastukseen Kolima-Keitele-Koskireitti (erälupa 6576) - lupa, jossa kalastupaikkoina Kärnän-, Kellan,- ja Kymönkoski.
          <p>
           Perhokalastukseen Keihärinkoski (erälupa 6586).
          </p>
          <p>
          Kaunislampi (erälupa 6567) johon istutetaan kirjolohta.
          </p>
     

         <div className="kalapaikkaKuva">
            <img
              src="./images/kalapaikkakuvat/kesa/uistelu5.png"
              className="imgKalastuspaikka"
              alt="hauki"
            />
          </div> 
        </article>
      </MainLayout>
    );
  };
  
  export default Kalapaikka;
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
      <MainLayout title="Fisumobi" pagetitle={<span style={{ fontSize: '0.9rem', color: '#007aff', letterSpacing: '2px', fontStyle: 'italic' }}> - Pohjois-Keitele</span>} footer={footer}>
       <article className="articleText"> 
        <div className="textIntroduction">
            <p>
            Keitele on Kymijoen vesistön suurin ja Keski-Suomen toiseksi suurin järvi. 
            Alueen lupien piiriin kuuluu myös Muuruejärvi, jonka vedet laskevat Keihärinkosken kautta Ylä-Keiteleeseen
            </p>
            <p>
              Alueen koskikalastuskohteet ovat Huopanankoski, Kolima–Keitele-koskireitillä Kymönkoski, Kärnänkoski ja Kellankoski vain perhokalastukseen.
            </p>
        </div>
          <h4>Ylä- ja Keski-Keitele</h4>
          <p>
          Ylä-Keiteleen ja Keski-Keiteleen vedet luokitellaan vedenlaadultaan erinomaisiksi ja hyviksi. Ylä-Keiteleen suurinselkä on syvä ja vähäsaarinen Pihkurinselkä, jossa Keiteleen taimen parhaiten viihtyy. Keski-Keiteeleen isoja selkiä ovat Kokon-, Suova- ja Karttuselät, joissa syvänteistä nousee jyrkästi matalikkoja ja karikoita.
          </p>
          <p>
          Ylä- ja Keski-Keiteleen saaliskaloja ovat hauki, kuha, suureksikin kasvavat ahvenet ja suurten selkien taimenet ja järvilohi.
          </p>
        <h4>Muuruejärvi</h4>
        <p>
          Muuruejärvi on luontaisestilisääntyvän Huopanankosken taimenen syönnösalueita.
        </p>
        <p>
            <Link to={`/map/Kalakartta?lat=${63.14121328850435}&lng=${25.17624067991607}&zoom=11`}>  
            <FaMap color='#4cd964'/>&nbsp;  Näytä kartalla
            </Link>
        </p>
        <p>
            Alueen järviin on saatavilla eri kalastuslupia: Pohjois-Keiteleen viehekalastusalue lupa, Koko Keiteleen lupa ja Pohjoisen Keski-Suomen yhteisviehelupa.
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
        <strong>Kolima–Keitele-koskireitti</strong>
        <br/>
        <p>
         Koskilla saa kalastaa 6576  eräluvalla. Koskilla on kalastajakiintiöt. Kastuskohteena lajit ahven, harjus, hauki, siika, taimen.
         </p>
         <strong>Keihärinkoski</strong>
         <p>
          Taimenistaan tunnettu Keihärinkoski Muuruejärven ja Ylä-Keiteleen välissä, jossa kalastus tapahtuu Metsähallituksen Erälupapalvelun 6586 Keihärinkoski -luvalla.
         </p>
         <strong>Huopanankoski</strong> 
         <p>
         Suomen merkittävimpiä ja tunnetuimpia koskikalastusalueita. Huopanan
merkitystä nostaa alueen historia, sillä Huopanankoskella perhokalastusta on
aloitettu harjoittaa jo 1800 -luvun lopulla. Huopanankoski on suomalaisen
urheilukalastuksen historiasta tunnetuimpia sisävesikohteita. Kirjailija Juhani
Aho lienee tunnetuimpia koskella kalastaneista ja sai jopa oman
nimikkokivensä rannalle.
        </p>    
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
        Iso Koirajärvi Salamajärven kansallispuistossa on erämainen, luonnonkaunis järvi (erälupa 6566). Järven rannalla on Koirasalmen luontotupa, josta voi vuokrata veneen. Järven luontaiset kalalajit ovat hauki ja ahven, istutettuina järvitaimen ja siika.
        </p>
        <p>
        Tälle Metsähallituksen vapalupa-alueelle on tarjolla myös Koirajärvi–Heikinlampi-yhdistelmälupa, jolla Heikinlammessa on mahdollisuus kalastaa kirjolohta.
        </p>
        <p>
          <strong>Infoa</strong>:{' '}
            <span className='links'
                onClick={() => openLink('https://koirasalmi.com/')}
              >
                Koirasalmi
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
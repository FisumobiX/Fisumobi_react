import MainLayout from '../../components/MainLayoutComp';
import "../../components/themeComp/Texts.css";
import { FaHouse,  FaMap , FaBookOpen, FaChartSimple, FaCloudSunRain } from 'react-icons/fa6';
import { Browser } from '@capacitor/browser';
import { Link } from 'react-router-dom'

import { useHistory } from 'react-router-dom';

const Paistunturi: React.FC = () => {

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
      <MainLayout title="Fisumobi" pagetitle={<span style={{ fontSize: '0.9rem', color: '#007aff', letterSpacing: '2px', fontStyle: 'italic' }}> - Inarijoki</span>} footer={footer}>
       <article className="articleText"> 
        <div className="textIntroduction">
          <p>
          Utsjoen kunnassa sijaitseva Paistunturin erämaa-alue on Suomen erämaista neljänneksi suurin, laaja ja yhtenäinen erämaa-alue,
           jonka keskiosissa sijaitsee loiva Paistunturien tunturiryhmä. Tässä noudatetaan eräluvat.fi kohteen 1301 Paistunturi vapalupa-alueen rajoja, joten alueeseen kuuluu myös Muotkatunturin tunturialueen luoteisosaa.
          </p>
          <p>
          Paistunturin erämaa tarjoaa kalastajalle puuttomia tunturipaljakoita, kirkasvetisiä puroja, jokia ja lampia, joissa voi tavoitella rautua, taimenta, harjusta ja siikaa. Osa kalastuskohteista on tien lähellä ja helposti saavutettavissa, 
          mutta kauempana erämaassa kalastus yhdistyy vaellukseen ja luonnontilaiseen ympäristöön ja erämaan rauhaan.
          </p>
            <div className="kalapaikkaKuva">
              <img
                src="./images/kalapaikkakuvat/maisema/tunturit.png"
                className="imgKalastuspaikka" style={{width: '100%'}}
                alt="tunturi"
              />
          </div>
        </div>
        <section>
            <p>
            <strong>Kalastuskohdelaji</strong>: rautu, taimen, harjus, ahven ja hauki.
            </p>
            <p>
                Taimenen alamitta täälläkin on 50 cm vaikka taimen ei alueella käytännössä koskaan tuota mittaa saavuta.
            </p>
            <p>
                Luomusjärville on autolta noin kahden kilometrin kävelymatka, ja välillä on puro ylitettävänä.
            </p>
            <p>
                Rautukannat ovat taantuneet tai kalojen koko pienentynyt järvissä joissa on istutusperäistä siikaa: Luomusjärvet, Akujärvi, Hannujärvi (Hannojavri, Sulaoja), Kaamasmukan Rautujärvi.  Akujärven ja Kaamasmukan Rautujärven alkuperäiset rautukannat hävisivät siikaistutusten vuoksi kokonaan, 
                mutta ainakin Akujärveen on siirtoistutettu uusi rautukanta. Luomusjärven Pyhäjärvessä on tehty hoitopyyntejä, joiden ansiosta raudun elinmahdollisuudet ovat parantuneet. 
            </p>
            <p>
                Kuoppilasjärvessä on ollut liian tiheä kalakanta. Järven ovet kansoittaneet vaaksanmittaiset raudut ja taimenet.
            </p>
            <p>
                Petsikon Rautujärveen (Stuora Ravdojavri) on tehty siirtoistutuksia ja raudut kasvoivat jopa 4 kiloisiksi ja katosivat oudosti ehkä verkotettuina. Mahdollisesti istutukset on uusittu.
            </p>
        </section>
        <section>
            <p>
            <Link to={`/map/Kalakartta?lat=${69.653179}&lng=${26.361482}&zoom=12`}>
            <FaMap color='#4cd964'/>&nbsp;  Näytä kartalla
            </Link>
            </p>
            <div className="kalapaikkaKuva">
            <img
              src="./images/kalapaikkakuvat/kesa/taimen2.png"
              className="imgKalastuspaikka"
              alt="taimen"
            />
        </div>
            <h3 style={{ textAlign: 'center' }}>Info</h3>
            <p>
              <strong>Alueen kartta</strong>:{' '}
              <span className='links'
                onClick={() => openLink('https://era-static-public-content-production.s3.eu-central-1.amazonaws.com/media/1301_paistunturi_kartta_7ed99e8696.pdf')}
              >
                Paistunturin kartta
              </span>           
            </p>
            <p>
              <strong>Säännöt ja ohjeet</strong>:{' '}
              <span className='links'
                onClick={() => openLink('https://www.luontoon.fi/fi/kohteet/paistunturin-eramaa/ohjeet-ja-saannot')}
              >
                Luontoon.fi
              </span>           
            </p>
            <p>
               <strong>Alueen sisällä on Kevon luonnonpuisto, jossa kalastussäännöt eivät pidä.</strong>
            </p>
            <p>
            Metsähallituksen 1301 Paistunturi luvalla saa kalastaa osassa alueen virtavesistä sekä alueen erityisvesissä: 
            Rohttoluoppalissa, Ravdojavrissa (Petsikko), Ahkojavrissa (Akujärvi), Vuolimus ja Bajimus Sieiddejavrissa, Hannojavrissa (Karigasniemi), Garegasjavrissa (Karikasjärvi)-, Vuorggotcearjavrissa, Gaskabeaicohkassa-, Solccarjavrissa ja Jalven muorin lammessa.
            </p>
            <p>
              <strong>Luvat ja kalastusäännöt erityisvesille</strong>:{' '}
              <span className='links'
                onClick={() => openLink('https://www.eraluvat.fi/kohteet/1301-paistunturi-1170/')}
              >
                1301 Paistunturi
              </span>           
            </p>
          </section> 
        </article>
      </MainLayout>
    );
  };
  
  export default Paistunturi;
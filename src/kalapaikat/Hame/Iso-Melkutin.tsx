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
      <MainLayout title="Fisumobi" pagetitle={<span style={{ fontSize: '0.9rem', color: '#007aff', letterSpacing: '2px', fontStyle: 'italic' }}> - Kaartjärvi</span>} footer={footer}>
       <article className="articleText"> 
        <div className="textIntroduction">
            <p>
            Hämeen järviylängöllä sijaitseva Iso-Melkutin on kristallinkirkas järvi, jota ympäröivät mäntykankaiset hiekkaharjut.
             Järven suurin syvyys on 27 metriä ja pituus noin 1,7 kilometriä.
            Iso-Melkuttimen ympäri kulkee noin seitsemän kilometrin mittainen merkitty polku.
            </p>
            <p>
                Järven kalastoon kuuluu luontaisesti lisääntyvä siika sekä pieninä määrinä muun muassa ahven, kiiski, hauki ja made.
            </p>
            <p>
            Kesäisin Iso-Melkutin on suosittu retkeily- ja sukelluskohde, mikä voi tehdä siitä kalastukseen ajoittain levottoman. 
            Talvella järvellä sekä viereisellä Vähä-Melkuttimella pilkitään siikaa, jonka tyypillinen koko on noin 300–400 grammaa. 
            </p>
            <div className="kalapaikkaKuva">
                <img
                    src="../images/kalapaikkakuvat/talvi/pilkki3.png" 
                    style={{width: '25%'}}
                    alt="pilkkijä"
                />
            </div>
        </div>
        <section>
            <p>
                <strong>Kalastuskohdelaji</strong>: siika ja ahven.
            </p>
            <p>
                <strong>Palvelut</strong>: 2 laavua, kuivakäymälät, useita tulipaikkoja, sukelluspaikka, uimapaikkoja
            </p>
            <p>
                <strong>Pysäköinti</strong>: Tauluntie 142, Loppi
            </p>
        </section>
        <section>
            <p>
            <Link to={`/map/Kalakartta?lat=${60.7372}&lng=${24.0668}&zoom=12`}> 
            <FaMap color='#4cd964'/>&nbsp;  Näytä kartalla
            </Link>
            </p>

            <h3 style={{ textAlign: 'center' }}>Info</h3>
            <p>
              <strong>Metsähallituksen retkeilykartta</strong>:{' '}
              <span className='links'
                onClick={() => openLink('https://cdn.loppi.fi/uploads/sites/2/2022/12/03-iso-melkuttimen_kierto_a0_pysty_indsta_png_keski96.jpg?strip=all&lossy=1&w=2560&ssl=1')}
              >
                Iso-Melkuttimen kierto
              </span>

            
            </p>
          </section>

         <div className="kalapaikkaKuva">
            <img
              src="./images/kalapaikkakuvat/kesa/siika.png"
              className="imgKalastuspaikka" style={{width:'25%'}}
              alt="siika"
            />
          </div> 

        </article>
      </MainLayout>
    );
  };
  
  export default Kalapaikka;
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
          Vanajaveden reittiin kuuluva kirkasvetinen Kaartjärvi tunnetaan hyvänä hauen uisteluvetenä ja ahvenjärvenä. Järven keskisyvyys on 3,35 m ja syvin kohta 16 m. 
          Järven mataluuden vuoksi vesikasvusto kesällä vaikeuttaa uistelua lukuun ottamatta Selkäsaaren itä- ja pohjoispuoleisia syvännealueita.  
          </p>
          <p>
            Kaartjärvi kuuluu Lopen kalatalousalueen yhtenäislupaan, jolla mm. saa kalastaa 4 vavalla.
          </p>
        </div>
        <section>
        <p>
          <strong>Kalastuskohdelaji</strong>: hauki, ahven.
          </p>
          <p>
          <strong>Palvelut</strong>: Vojakkalan veneranta: wc ja grillikatos. Sähkönokan venevalkama: nuotiopaikka ja wc 
          </p>
          <p>
          <strong>Pysäköinti</strong>: Sähkönokan venevalkama jossa on sorastettu laskupaikka (Räyskäläntie 682, 12920 Topeno). 
          Kaartjärvi Vene- ja uimarannan parkkipaikka (Vojakkalantie 164, 12950 Loppi). Veneenlaskupaikka rannalla jossa on matalaa pitkälle. Pilkille hyvä mennä.
          </p>
        </section>
        <section>
            <p>
            <Link to={`/map/Kalakartta?lat=${60.762297}&lng=${24.148923}&zoom=12`}> 


            <FaMap color='#4cd964'/>&nbsp;  Näytä kartalla
            </Link>
            </p>

            <h3 style={{ textAlign: 'center' }}>Info</h3>
            <p>
              <strong>Luvat ja kalastusäännöt</strong>:{' '}
              <span className='links'
                onClick={() => openLink('https://www.lopenkalatalousalue.fi/')}
              >
                Lopenkalatalousalue
              </span>{' '}
              ja{' '}
              <span className='links'
                onClick={() => openLink('https://www.vanajavesi.fi/kalapaikkaopas/loppijarvi-ja-kaartjarvi-suurhaukea-uistellen/')}
              >
                Vanajavesikeskus
              </span>
            
            </p>
          </section>

         <div className="kalapaikkaKuva">
            <img
              src="./images/kalapaikkakuvat/kesa/hauki.png"
              className="imgKalastuspaikka"
              alt="hauki"
            />
          </div> 

        </article>
      </MainLayout>
    );
  };
  
  export default Kalapaikka;
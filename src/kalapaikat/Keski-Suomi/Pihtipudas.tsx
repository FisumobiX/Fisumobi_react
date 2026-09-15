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
      <MainLayout title="Fisumobi" pagetitle={<span style={{ fontSize: '0.9rem', color: '#007aff', letterSpacing: '2px', fontStyle: 'italic' }}> - Saarijärvi</span>} footer={footer}>
       <article className="articleText"> 
        <div className="textIntroduction">
            <p>
            Pihtipudas tarjoaa vapaa-ajankalastajille hyvät ja monipuoliset puitteet Keski-Suomen puhtaiden ja kalaisien vesistöjen äärellä. Alue tunnetaan erityisesti suurista järvistään, upeista koskikohteistaan sekä runsaista kalaistutuksistaan. Alueen vesistöt sopivat niin vetouistelijoille, perhokalastajille, heittokalastajille kuin pilkinnästä nauttiville.
            </p>
        </div>
        <p>
            Pihtiputaan kalastualueen lupaan kuuluvilta Muurasjärven, Alvajärven, Koliman, Saanijärven saaliskaloja ovat kuha, hauki, ahven ja taimen ja järvilohi. Elämäjärven ja Kolkun saaliskaloja ovat ahven, hauki, kuha.
            Samat järvet kuuluu myös laajempaan <strong>Pohjoisen Keski-Suomen yhteisviehelupaan</strong>.
        </p>
        <p>
            <Link to={`/map/Kalakartta?lat=${63.31926951648436}&lng=${25.700815878128303}&zoom=12`}>  
            <FaMap color='#4cd964'/>&nbsp;  Näytä kartalla
            </Link>
        </p>
        <p>
              <strong>Luvat ja kalastusäännöt ym.</strong>:{' '}
              <span className='links'
                onClick={() => openLink('https://pihtiputaankta.fi/kalastusluvat/')}
              >
                Pihtiputaan kalastalousalue
             </span>
        </p>
    
        <p>
        Koskikalastuskohde Saaninjoen Ruukinkoski Pihtiputaan kylän tuntumassa, jossa saaliina mm. taimen ja harjus.
        </p>
        <p>
            <Link to={`/map/Kalakartta?lat=${63.385382212745405}&lng=${25.582309773717135}&zoom=12`}>  
            <FaMap color='#4cd964'/>&nbsp;  Näytä kartalla 
            </Link>
        </p>
        <p>
            <strong>Luvat ja kalastusäännöt ym.</strong>:{' '}
            <span className='links'
            onClick={() => openLink('https://pihtiputaankta.fi/pihtiputaan-osakaskunta/')}
            >
            Pihtiputaan kalatalousalue
            </span>
        </p>

        
        <p>
                Metsähallituksen kalavedet:
            </p>
            Koskikalastukseen Kolima-Keitele-Koskireitti (erälupa 6576) - lupa, jossa kalastupaikkoina Kärnän-, Kellan,- ja Kymönkoski.
          <p>
           Perhokalastukseen Keihärinkoski (erälupa 6586).
          </p>
          <p>
          Istutusvesi ovat Koirajärvet (erälupa 6566), joihin on istutetaan taimenta ja siikaa. Kaunislampi (erälupa 6567) johon istutetaan kirjolohta.
          </p>
     

         <div className="kalapaikkaKuva">
            <img
              src="./images/kalapaikkakuvat/kesa/uistelijat.png"
              className="imgKalastuspaikka"
              alt="hauki"
            />
          </div> 

        </article>
      </MainLayout>
    );
  };
  
  export default Kalapaikka;
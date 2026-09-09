import MainLayout from '../../components/MainLayoutComp';
import "../../components/themeComp/Texts.css";
import { FaHouse,  FaMap , FaBookOpen, FaChartSimple, FaCloudSunRain } from 'react-icons/fa6';
import { Browser } from '@capacitor/browser';
import { Link } from 'react-router-dom'

import { useHistory } from 'react-router-dom';

const Inarijoki: React.FC = () => {

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
      <MainLayout title="Fisumobi" pagetitle={<span style={{ fontSize: '0.9rem', color: '#007aff', letterSpacing: '2px', fontStyle: 'italic' }}> - Siuronkoski</span>} footer={footer}>
       <article className="articleText"> 
        <div className="textIntroduction">
          <p>
            Siuronkoski on Pirkanmaalla, joka houkuttelee niin paikallisia kuin kauempaakin tulevia kalastajia. Koski kuuluu Kokemäenjoen vesistön Ikaalisten reitiin ja laskee Nokian Siurossa Siuronkosken kautta Kuloveteen. 
          </p>
          <p>
            Koski jakautuu kahteen uomaan: toinen on luonnontilainen, kun taas toisessa sijaitsee voimalaitos. Kalastus painottuu pääasiassa voimalaitoksen alapuoliselle alueelle, ulottuen voimalaitokselta rautatiesillalle. Tällä osuudella sijaitsee myös maantiesilta. Kalastusmahdollisuuksia on kuitenkin tarjolla myös voimalaitoksen yläpuolella.  
          </p>
          <p>
            Siuronkoski on erityisesti tunnettu monipuolisesta kalakannastaan, saalisvarmuudestaan sekä mahdollisuudesta saada suuria kaloja. Sieltä voi saada muun muassa toutainta, kuhaa, haukea, ahventa sekä ajoittain myös istutettua kirjolohta. Kosken virtaavat ja happirikkaat vedet luovat hyvät olosuhteet kaloille, ja vaihtelevat syvyydet sekä kivikkoinen pohja tarjoavat erinomaisia ottipaikkoja eri kalastusmenetelmille.
          </p>
        </div>
        <section>
        <p>
          <strong>Kalastuskohdelaji</strong>: Toutain, kuha ja kirjolohi. Taimenen kalastus on kokonaan kielletty.
          </p>
          <p>
             Navigaattoriin: Satamatie, 37200 Nokia. 
          </p>
        </section>
        <section>
            <p>
            <Link to={`/map/Kalakartta?lat=${61.474818}&lng=${23.331757}&zoom=12`}> 
            <FaMap color='#4cd964'/>&nbsp;  Näytä kartalla
            </Link>
            </p>

            <h3 style={{ textAlign: 'center' }}>Info</h3>
            <p>
              <strong>Luvat ja kalastusäännöt ym.</strong>:{' '}
              <span className='links'
                onClick={() => openLink('https://www.siuronkoski.com ')}
              >
                Siuronkoski
              </span>
            
            </p>
          </section>

         <div className="kalapaikkaKuva">
            <img
              src="./images/kalapaikkakuvat/kesa/toutaimet.png"
              className="imgKalastuspaikka" style={{width: '20%'}}
              alt="toutaimet"
            />
          </div> 

        </article>
      </MainLayout>
    );
  };
  
  export default Inarijoki;
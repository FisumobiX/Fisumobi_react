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
            Saarijärven ympäristössä on useita järvi- ja jokikalastuskohteita.
        </p>
          <p>
             Vetouisteluun Saarijärven ja Pääjärven alueet muodostavat Keski-Suomen sydämessä laajan ja monipuolisen kalastuskokonaisuuden, jota hallinnoi Saarijärven reitin kalatalousalue (SAARKA). Tämä vuonna 2019 perustettu alue yhdistää entiset Pääjärven ja Saarijärven kalastusalueet tarjoten kalastajille pääsyn noin 28 748 hehtaarin vesialueille Kyyjärven, Karstulan, Saarijärven, Uuraisten ja Äänekosken kuntien alueella. 
          </p>
          <p>
          Kalatalousalueella on kaksi yhteislupa-aluetta, Saarijärven yhteislupa ja Pääjärven yhteislupa.
          </p>
        </div>
        <section>
        <p>
          <strong>Kalastuskohdelaji</strong>: ahven, harjus, hauki, kuha ja taimen. Istutettuna järvilohi.
          </p>
          <p>
          <strong>Jokikalastuskohteet</strong>: Heijostenkoski, Tuhmakoski, Vihanninjoki, Karajoki, Selänpäänjoki, Muittarinkoski, Kalmukoski, Lehtolankoski, Riekonkoski, Majakoski, Konttijoki-Kotajoki ja Lannejoki.
          </p>
          <p>
              <strong>Luvat ja kalastusäännöt ym.</strong>:{' '}
              <span className='links'
                onClick={() => openLink('https://www.saarijarvenosakaskunta.net/kalastusluvat/')}
              >
                Saarijärvenosakaskunta
             </span>
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
                onClick={() => openLink('https://www.saarijarvenosakaskunta.net/kalastusluvat/')}
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
import MainLayout from '../../components/MainLayoutComp';
import "../../components/themeComp/Texts.css";
import { FaHouse,  FaMap , FaBookOpen, FaChartSimple, FaCloudSunRain } from 'react-icons/fa6';
import { Browser } from '@capacitor/browser';
import { Link } from 'react-router-dom'

import { useHistory } from 'react-router-dom';

const Hiidenvesi: React.FC = () => {

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
      <MainLayout title="Fisumobi" pagetitle={<span style={{ fontSize: '0.9rem', color: '#007aff', letterSpacing: '2px', fontStyle: 'italic' }}> - Hiidenvesi</span>} footer={footer}>
       <article className="articleText"> 
        <div className="textIntroduction">
          <p>
             Hiidenvesi on Uudenmaan toiseksi suurin järvi ja suosittu kalastuskohde Lohjan kaupungin ja Vihdin kunnan alueella. Sameavetinen järvi muodostuu neljästä lahtimaisesta altaasta: Kirkkojärvestä, Mustionselästä, Nummelanselästä ja Kiihtelysselästä, joita salmet erottavat toisistaan. Järven eri osat poikkeavat toisistaan melko paljon niin ominaisuuksiltaan kuin vedenlaadultaan.  
          </p>
          <p>
            Suurin syvyys, 33 metriä, löytyy Kiihtelysselältä, jonka keskisyvyys on 11,2 metriä. Muut altaat ovat huomattavasti matalampia. Vahva kuhakanta tekee Hiidenvedestä erinomaisen kalastuskohteen esimerkiksi vetouisteluun ja jigikalastukseen.
          </p>
          <p>
            Hiidenveden rannat ovat enimmäkseen asuttuja, joten veneestä kalastaminen on suositeltua.
          </p>
          <p>
            Järvelle myydään yhtenäislupaa, joka ei kata koko järveä.
          </p>
          <div className="kalapaikkaKuva">
            <img
              src="./images/kalapaikkakuvat/kesa/uistelu5.png"
              className="imgKalastuspaikka"
              alt="uistelijat"
            />
          </div> 
        </div>
        <section>
        <p>
          <strong>Kalastuskohdelaji</strong>: kuha, hauki ja ahven.
          </p>
          <p>
          <strong>Palvelut</strong>: Rysätarhan retkisatama Mustionselällä, jossa laavu, käymälä ja hiekkaranta.<br/>
            Hannansaaren retkisatama Maaniitunlahdella, Nummelan rannassa. Saaressa on laavu, mutta ei rantautumislaituria.
          </p>
          <p>
            <strong>Veneenlasku</strong>: Hiidenvesi Nummela venesatama Hiidenrannantie 26, 03100 Vihti. <br/>
            Veneluiska Turuntie 923, 09630 Koisjärvi.<br/>
            Vihdin venerannassa loiva asfaltti/betonilaattaluiska.
          </p>
        </section>
        <section>
            <p>
            <Link to={`/map/Kalakartta?lat=${60.3748}&lng=${24.1989}&zoom=12`}> 
            <FaMap color='#4cd964'/>&nbsp;  Näytä kartalla
            </Link>
            </p>

            <h3 style={{ textAlign: 'center' }}>Info</h3>
            <p>
              <strong>Luvat ja kalastusäännöt ym.</strong>:{' '}
              <span className='links'
                onClick={() => openLink('https://vihdinkalastusseura.fi/')}
              >
               Vihdin kalastusseura
              </span>           
            </p>
            <div className="kalapaikkaKuva">
            <img
              src="./images/kalapaikkakuvat/kesa/kuha.png"
              className="imgKalastuspaikka" style={{width: '20%'}}
              alt="uistelijat"
            />
          </div> 
          </section>
        </article>
      </MainLayout>
    );
  };
  
  export default Hiidenvesi;
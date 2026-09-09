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
          Pääjärvi on matala, runsashumuksinen ja rehevöitynyt järvi. Sen pituus on noin 4,9 kilometriä ja leveys 1,5 kilometriä. 
          Suurin syvyys jää pienialaisessa syvänteessä alle kymmeneen metriin.   
          </p>
          <p>
          Järviallas jakautuu kolmeen pääalueeseen. Läntisin osa on yhteydessä muihin osiin ainoastaan kapean uoman kautta. 
          Järvessä on 17 suurempaa saarta ja 13 luotoa. Itäinen allas (virkistysalueen ranta) on suurelta osin kasvillisuuden valtaama, eikä pilkkiminen onnistu siellä kuin keskiosassa.
          </p>
          <p>
            Järven rannoilla kulkee Pääjärven virkistysalueen retkeilypolkuja.
          </p>
          <p>
            Järven kalalajeja ovat ahven, kiiski, kuha, hauki, made, särki, lahna ja suutari.
          </p>
        </div>
        <section>
        <p>
          <strong>Kalastuskohdelaji</strong>: kuha, ahven, hauki ja lahna.
          </p>
          <p>
          <strong>Palvelut</strong>: laavu, tulipaikka ja kuivakäymälä.
          </p>
          <p>
          <strong>Pysäköinti</strong>: Härkätie 1126, 14300 Hämeenlinna
          </p>
        </section>
        <section>
            <p>
            <Link to={`/map/Kalakartta?lat=${60.7935}&lng=${24.0775}&zoom=12`}> 
            <FaMap color='#4cd964'/>&nbsp;  Näytä kartalla
            </Link>
            </p>

            <h3 style={{ textAlign: 'center' }}>Info</h3>
            <p>
              <strong>Tietoa alueesta</strong>:{' '}
              <span className='links'
                onClick={() => openLink('https://hameenvirkistysalueyhdistys.fi/alue/paajarven-virkistysalue/')}
              >
                Hämeen virkistysalueyhdistys
              </span>           
            </p>
          </section>

         <div className="kalapaikkaKuva">
            <img
              src="./images/kalapaikkakuvat/kesa/kuha.png"
              className="imgKalastuspaikka" style={{width: '25%'}}
              alt="kuha"
            />
          </div> 

        </article>
      </MainLayout>
    );
  };
  
  export default Kalapaikka;
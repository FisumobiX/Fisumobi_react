import MainLayout from '../../components/MainLayoutComp';
import "../../components/themeComp/Texts.css";
import { FaHouse,  FaMap , FaBookOpen, FaChartSimple, FaCloudSunRain } from 'react-icons/fa6';
import { Browser } from '@capacitor/browser';
import { Link } from 'react-router-dom'

import { useHistory } from 'react-router-dom';

const Nuuksio: React.FC = () => {

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
            <strong>Nuuksion kansallispuiston ja Vihdintien viereiset järvet mm. Helsingin kaupungin virkistysalueen järvet</strong>
          </p>
          <p>
          Nuuksion kansallispuisto Espoossa tarjoaa erämaisen ympäristön ylänköalueella lyhyen matkan päässä pääkaupunkiseudulta.  Nuuksion kansallispuistoon kuuluu yli 80 pientä järveä ja lampea. 
          Järvet vaihtelevat ruskeavetisistä, nevarantaisista lammista kirkkaisiin, kalliorantaisiin järviin. 
          </p>
          <p>
          Kaitalampeen ja Halkolampeen tarvitsee erillisen kalastusluvan. Kalastus Myllypurossa ja muissa puiston virtavesissä on kokonaan kielletty. 
          </p>
          <p>
          Telttailu ja tulenteko on sallittu vain merkityillä paikoilla - kts. kansallispuiston ohjeet. Alueella on useita laavuja, tulentekopaikkoja, keittokatoksia polttopuineen, wc:t yms.
          </p>
            <div className="kalapaikkaKuva">
              <img
                src="./images/kalapaikkakuvat/maisema/leiri.png"
                className="imgKalastuspaikka" 
                alt="leiri"
              />
          </div>
        </div>
        <section>
        <p>
          Kaikissa järvissä on ainakin ahventa ja haukea. Merkittävämmät järvet ja lammet:
          <br/><br/>
          </p>
            <p>
            <strong>Kaitalampi ja Halkolampi</strong> – Helsingin kaupungin Luukin ulkoilualueella 
            <ul>
                <li>Kalalajit: Kaitalammelle istutetaan lohikaloja mm. kirjolohi sekä luontaisina lajeina hauki ja ahven. Halkolammelle istutetaan ainoastaan karppeja ja saaliiksi saadut karpit on vapautettava.</li>
                <li>
                    Onkiminen ja viehekalastus yleiskalastusoikeuksina kielletty. Ainoastaan pilkkiminen sallittu ilman vesialueen omistajan lupaa.  Tarvitsee erillisen kalastusluvan, joita myy Helsingin kaupunki.
                </li>
                <li>
                    Järven pohjoispään rantoja kiertää ulkoilupolku, joka on osa Luukkaan ulkoilualuetta. Järven rannalla on uimapaikkoja, grillikatos, keittokatoksia ja telttailualueita.
                </li>
                <li>
                    Pitkä (1,3 km) ja kapea (0,2 km) kalliorantainen järvi. Vesi on kirkasta ja lievästi humuksista.
                </li>
                <li>
                    Autolle on parkkipaikat kummallakin puolella järveä.
                </li>
            </ul>
            </p>
            <p>
            <strong>Kattilajärvi</strong>
            <ul>
                <li>Kalalajit: ahven ja särki, vähän haukea, kiiskeä ja sorvaa.</li>
                <li>
                    950 metriä pitkä, 750 metriä leveä ja kirkasvetinen.  Suurin syvyys on 10 m.
                </li>
                <li>
                    Järven vesi on hyvin kirkasta ja lievästi humuksista.
                </li>
                <li>
                    Pitkä (1,3 km) ja kapea (0,2 km) kalliorantainen järvi. Vesi on kirkasta ja lievästi humuksista.
                </li>
                <li>
                    Autolle parkkipaikka järven eteläpäässä.
                </li>
            </ul>
            </p>
            <p>
            <strong>Vääräjärvi</strong>
            <ul>
                <li>Kalalajit: ahven, hauki särki</li>
                <li>
                    Matala, 1,1 kilometriä pitkä, 800 metriä leveä.
                </li>
                <li>
                    Autolle on parkkipaikka Kattilajärven eteläpäässä..
                </li>
            </ul>
            </p>
            <p>
            <strong>Urja</strong>
            <ul>
                <li>Kalalajit: ahven särki ja hauki ja sorva.</li>
                <li>
                    1,6 kilometriä pitkä, 700 metriä leveä.
                </li>
                <li>
                    Autolle on parkkipaikka Kattilajärven eteläpäässä.
                </li>
            </ul>
            </p>
            <p>
            <strong>Haukkalampi</strong>
            <ul>
                <li>Kalalajit: ahven, hauki, särki.</li>
                <li>
                    Kirkasvetinen ja matalahko lampi, josta voi löytyä pirteää ahventa ja pientä haukea.
                </li>
                <li>
                    Helppokulkuinen ja erinomainen kohde kalastusretkelle.
                </li>
                <li>
                    Suositellaan kevytvälineillä – rannat ovat paikoitellen jyrkkiä.
                </li>
                <li>
                    Autolle parkkipaikka järven länsipuolella.
                </li>
            </ul>
            </p>
            <p>
            <strong>Ruuhijärvi</strong>
            <ul>
                <li>Kalalajit: ahven, hauki, särki.</li>
                <li>
                    Kirkas ja vähähumuksinen. Eteläosan syvyys on jopa 18,5 m .
                </li>
                <li>
                    Voi löytyä myös isompaa ahventa.
                </li>
                <li>
                    Hyvät kalastuspisteet rannoilta ja pitkospuureiteiltä.
                </li>
                <li>
                    Ei autolla perille.
                </li>
            </ul>
            </p>
            <p>
            <strong>Holma-Saarijärvi</strong>
            <ul>
                <li>Kalalajit: ahven, hauki.</li>
                <li>
                    Kaunis erämainen järvi, soveltuu erityisen hyvin heittokalastukseen.
                </li>
                <li>
                    Rantaan on helppo päästä useasta kohdasta.
                </li>
                <li>
                    Autolle parkkipaikka länsipuolella järveä.
                </li>
            </ul>
            </p>
            <p>
            <strong>Pitkäjärvi</strong>
            <ul>
                <li>Kalalajit: ahven, särki, hauki ja istutettuna kuha ja siika.  Heikkona kantana lahna ja made.</li>
                <li>
                    Vesi on kirkasta ja lievästi humuksista.
                </li>
                <li>
                    Pituus on lähes 7 km ja leveys 150-600 m.
                </li>
                <li>
                Suurin syvyys on 16 m ja keskisyvyys 6,5 m. Pitkäjärvessä on kolme syvännettä, joiden syvyydet järven pohjoisosasta etelään ovat 10 m, 11 m ja 16 m.
                </li>
                <li>
                  Rannat on pääasiassa asuttuja, mutta löytyy myös asumatonta rantaa.
                </li>
            </ul>
            </p>
            <p>
            <strong>Siikajärvi</strong>
            <ul>
                <li>Kalalajit: ahven, hauki, särki ja lahna. Istutettuna siika ym.</li>
                <li>
                  Siikajärvessä on useita syvänteitä. Suurin syvyys on noin 14 m.
                </li>
                <li>
                    Rannat on asuttuja, joten kesäkalastukseen tarvitsee veneen.
                </li>
            </ul>
            </p>
            <p>
            <strong>Saarijärvi</strong>– Vihdintien varressa. Huom. ei kuulu Nuuksion kansallispuiston alueeseen
            <ul>
                <li>Kalalajit: ahven, hauki, särki ja siika.</li>
                <li>
                    Rannalla ei ole virallisia telttailu nuotio paikkoja yms.
                </li>
                <li>
                    Kirkasvetinen.
                </li>
                <li>
                  Vihdintien toisella puolella on Helsingin ulkoilualueen parkkipaikka.
                </li>
            </ul>
            </p>
        </section>
        <section>
            <p>
            <Link to={`/map/Kalakartta?lat=${60.3056}&lng=${24.5963}&zoom=12`}>
            <FaMap color='#4cd964'/>&nbsp;  Näytä kartalla
            </Link>
            </p>
            <div className="kalapaikkaKuva">
            <img
              src="./images/kalapaikkakuvat/kesa/ahven.png"
              className="imgKalastuspaikka" style={{width: '30%'}}
              alt="ahven"
            />
        </div>
            <h3 style={{ textAlign: 'center' }}>Info</h3>
            <p>
              <strong>Kalastusluvat ja määräykset ym.</strong>: {' '}
              <span className='links'
                onClick={() => openLink('https://www.hel.fi/fi/kulttuuri-ja-vapaa-aika/ulkoilu-puistot-ja-luontokohteet/kalastus')}
              >
                Helsingin kaupunki
              </span>           
            </p>
            <p>
              <strong>Nuuksion-kansallispuiston ohjeet ja säännöt</strong>:{' '}
              <span className='links'
                onClick={() => openLink('https://www.luontoon.fi/fi/kohteet/nuuksion-kansallispuisto/ohjeet-ja-saannot')}
              >
                Luontoon.fi
              </span>           
            </p>
          </section> 
        </article>
      </MainLayout>
    );
  };
  
  export default Nuuksio;
import MainLayout from '../components/MainLayoutComp';
import "../components/themeComp/Texts.css";
import { FaHouse,  FaMap , FaBookOpen, FaChartSimple, FaCloudSunRain } from 'react-icons/fa6';
import { Browser } from '@capacitor/browser';
import { Link } from 'react-router-dom'

import { useHistory } from 'react-router-dom';



const Paikka: React.FC = () => {

  const history = useHistory(); 

  // const openLink = (url: string) => {
  //    Browser.open({ url });
  // };
  function openLink(url: string) {
    const fixedUrl = url.replace(/^http:\/\//i, 'https://');
    Browser.open({ url: fixedUrl });
  }

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
      <MainLayout title="Fisumobi" pagetitle={<span style={{ fontSize: '0.9rem', color: '#007aff', letterSpacing: '2px', fontStyle: 'italic' }}> - Ahvenanmaa</span>} footer={footer}>
       <article className="articleText"> 
        <div className="textIntroduction">
          <p>
            Ahvenanmaa tarjoaa ainutlaatuisen yhdistelmän kaunista luontoa ja erinomaisia kalastusmahdollisuuksia. 
            Upeaa meri- ja saaristoluontoa riittää yli 6 500 saarella ja luodolla, joista vain pieni osa on asuttuja. 
            Kalastajalle Ahvenanmaa tarkoittaa avointa merta, asumattomia saaria ja karuja kallioluotoja sekä toisaalta pääsaaren ja suurimpien saarten suojaisia lahtia ja salmia.  
            </p>
            <p>
            Pääsaaren ja suurimpien saarten sisälahdissa tavallisimpia saaliskaloja ovat ahven, hauki ja kuha. 
            Ulompana saaristossa ja suurilla lahdilla voi saada myös taimenta ja siikaa.
            </p>
            <p>
            Kalastuksessa parhaat sesongit ovat keväällä ja syksyllä, mutta myös kesällä ahventa ja haukea nousee hyvin. Keväällä suojaisista lahdista ja kareilta tavoittaa taimenta, ja salmien hiekkapohjilta voi kalastaa siikaa. 
            Ahvenkannat ovat vahvoja, ja saalista saa usein ilman pitkää odottelua. Talvella saalisvarmat lahdet soveltuvat erittäin hyvin ahvenen, hauen ja kuhan pilkkimiseen.
            </p>
            <p>
            Hauenkalastuksen huippuajat sijoittuvat kevääseen (huhti–toukokuuhun) sekä erityisesti varhaissyksyyn aina jäiden tuloon asti. 
            Saaliit voivat olla runsaita, ja joukossa on usein myös suurhaukea.
            </p>
            <p>
            Ahvenanmaalla on erinomaisia rantoja meritaimenen kalastukseen, eikä vene ole aina välttämätön. Kivikkoiset rannat ja rakkoleväpohjat tarjoavat hyviä kalapaikkoja. 
            Meritaimenta voi kalastaa syyskuusta aina toukokuuhun saakka veden lämpötilasta ja jäätilanteesta riippuen.
            </p>
            Merilohen vetouistelu on suosittua erityisesti touko- ja kesäkuun aikana, jolloin vaelluslohi siirtyy kohti pohjoista.  Parhaat paikat ovat länsirannikolla: Eckerö, Hammaruddan ja Käringsundin vesialueilla, jotka sijaitsevat lähellä lohen vaellusreittejä Ahvenanmerellä
            <p>
            Kalastuslupakäytännöt voivat olla Ahvenanmaalla hieman monimutkaisia, mutta mökin tai matkailuautopaikan vuokraaminen helpottaa järjestelyjä. Alueella on runsaasti leirintäalueita, mökkikyliä ja vuokramökkejä, joista monet sijaitsevat aivan veden äärellä. 
            Usein majoituspaikan kautta voi vuokrata veneen ja hankkia tarvittavat kalastusluvat.
            </p>
          <div className="kalapaikkaKuva">
            <img
              src="../images/kalapaikkakuvat/kesa/uistelijat.png"
              className="imgKalastuspaikka" style={{width: '20%'}}
              alt="uistelijat"
            />
          </div> 
        </div>
        <section>
        <p>
          <strong>Kalastuskohdelaji</strong>:ahven, hauki, meritaimen, lohi, kuha ja siika.
          </p>
        </section>
        <section>
            <p>
            <Link to={`/map/Kalakartta?lat=${60.1045}&lng=${19.9364}&zoom=10`}> 
            <FaMap color='#4cd964'/>&nbsp;  Näytä kartalla
            </Link>
            </p>
            <div style={{ marginLeft: '25%'}}>
                <img
                src="../images/kalapaikkakuvat/talvi/pilkki3.png"
                style={{width: '20%'}}
                alt="pilkkijä"
                />
            </div> 
            <h3 style={{ textAlign: 'center' }}>Info</h3>
            <p>
                Ahvenanmaalla on oma kalastuslaki, eikä siellä ole yhtä, koko maakunnan vesialueet kattavaa kalastuslupaa. 
                Kalastusalueita on 56 kappaletta sekä 16 maakunnan omistamaa aluetta. Kalastamista varten tarvitset kuitenkin aina kalastuskortin juuri sille alueelle jolla aiot kalastaa. 
                Hyvä on varautua myös ostamaan lupa useammalla alueelle, jos kalastuspaikan lupa-alueet ovat pieniä. 
            </p>
            <p>
                Kalastuslupia myyvät mm. leirintäalueet/mökkikylät, paikalliset kaupat, kalastusoppaat.
                Luvan voi ostaa myös verkosta esim. alla olevista linkeistä.  
            </p>
            <p>
                Rannalta uistelu ja viehekalastus on kielletty 15.4.–15.6. merilintujen pesinnän suojelemiseksi. 
                Myös paikallisia kalastuskieltoalueita on esim. suojelluilla hauenkutualueilla.
            </p>
            <p> 
                Kuhan kalastus on kielletty kesäkuussa.
            </p>
            <p>
                Ahvenanmaalla kaikkeen kalastukseen, myös onkimiseen ja pilkkimiseen, tarvitaan aina kalastusoikeuden haltijan lupa. 
                Ahvenanmaalla kalastavat ei kuitenkaan tarvitse suorittaa kalastuksenhoitomaksua.
            </p>
            <p>
              Visit Åland -Turisti-info, Torggatan 6, Maarianhamina, puh. (018) 24 000, info@visitaland.com.
            </p>
            <p>
              <strong>Kalastusalueet, kalastusluvat ym.</strong>: {' '}
              <span className='links'
                onClick={() => openLink('https://www.ifiske.ax/index.php/fi/kalastus')}
              >
               iFiske
              </span>           
            </p>
            <p>
              <strong>Kalastusäännöt ym.</strong>: {' '}
              <span className='links'
                onClick={() => openLink('https://visitaland.com/fi/koe/aktiivinen-ulkoilu/urheilukalastus/kaytannon-tietoa/')}
              >
               Visit Åland
              </span>           
            </p>
            <p>
              <strong>Luvan myyntipaikkoja eri alueille</strong>: {' '}
              <span className='links'
                onClick={() => openLink('https://visitaland.com/upplev/aktiv-utomhus/sportfiske/fiskekortsinformation/')}
              >
               Visit Åland
              </span>           
            </p>
            <div className="kalapaikkaKuva">
                <img
                src="../images/kalapaikkakuvat/kesa/ahven.png"
                className="imgKalastuspaikka" style={{width: '20%'}}
                alt="ahven"
                />
            </div> 
          </section>
        </article>
      </MainLayout>
    );
  };
  
  export default Paikka;
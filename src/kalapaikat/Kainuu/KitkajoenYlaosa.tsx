import MainLayout from '../../components/MainLayoutComp';
import KalastusPaikka from "../KalastusPaikka";
import "../../components/themeComp/Texts.css";
import { FaHouse,  FaMap , FaBookOpen, FaChartSimple, FaCloudSunRain } from 'react-icons/fa6';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/react';
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
      <MainLayout title="Fisumobi" pagetitle={<span style={{ fontSize: '0.9rem', color: '#007aff', letterSpacing: '2px', fontStyle: 'italic' }}> - Kitkajoen yläosa</span>} footer={footer}>
       <article className="articleText"> 
        <div className="textIntroduction">
            <p>
              Kitkajärvestä alkunsa saava Kitkajoen yläosa kulkee metsä- ja vaaramaisemassa 20 kilometriä Kitkajärvestä Oulangan kansallispuiston rajalle, Jyrävään. Kitkajoki on Oulankajoen suurin sivujoki. Oulanka- ja Kitkajokeen vaeltava taimen ei nouse Jyrävästä ylös Kitkajoen yläosalle, vaan siellä on oma taimenkanta.
            </p>
            <p>
              Joessa on useita kilometrejä koskia ja nivoja. Kosket ovat kivisiä ja voimakasvirtaisia. 14 kilometrin matkalla Käylän ja Juuman välillä on pudotuskorkeutta 17 metriä. Jokirannat ovat pääosin helposti kalastettavia ja rannoilla kulkee hyvät polut.
            </p> 
        </div>
        <section>
            <p>
                <b>Kalastuskohdelaji</b>: Harjus, siika, taimen, ahven ja hauki. Taimenen ja harjuksen poikasistutkisia ja pyyntikokoisen taimenen istutuksia.
            </p>
            <p>
                Helposti saavutettavissa olevat kohteet ovat mm: Kiveskoski ja Käylänkoski.
            </p>
        </section>
        <section>
            <div style={{ marginTop: '2em', marginLeft: '30%'}}>
              <img src="./images/kalapaikkakuvat/kesa/harjus.png"  alt="lohi"/>
            </div> 
            <h3 style={{ textAlign: 'center' }}>Info</h3>
            <p>
              <Link to={`/map/Kalakartta?lat=${66.297091}&lng=${29.264874}&zoom=12`}>
              <FaMap color='#4cd964'/>&nbsp;  Näytä kartalla
              </Link>
            </p>
            <section>
              <summary><strong>Joitain kalastus sääntöjä</strong>&nbsp;(voivat muuttua)</summary>
                <p>
                    Yhteiskalastuslupa-alue Kitkajoessa välillä Kiveskosken niska - Oulangan kansallispuiston raja.<br />
                    Kesäkalastuskausi on 1.6. - 10.9.<br />
                    Viikkorauhoitusta ei ole.
                </p>
                <strong>Saalisrajoitukset</strong>:
                  1 taimenta / vrk ja 3 vrk, 2 taimenta/vko, 5 taimenta/kausi
                  <br/>
                  3 harjusta / vrk
                  <p>
                  <strong>Alamitat</strong>:
                    Taimen 60 cm, rasvaeväleikattu 50 cm, harjus 35 cm.
                  </p>
                <p>
                  Suositellaan väkäsettömien koukkujen käyttöä.  
                </p>
                <p>
                    <b>Rauhoitusalueet</b>:
                    Aallokkokoski, Kelhänkosken alapuolen matalikko, Myllykoskensaaren pikkuväylä (Putaanoja)
                </p>
                <br/>
        </section>
          <p>
            <strong>Tarkempaa tietoa kalastusluvasta ja kalastussäännöistä yms.</strong>.
          </p>

          <p>
            <strong>Kalastuslupa ja kalastussäädökset</strong>:{' '}
            <span className='links'
              onClick={() => openLink('https://uistin.net/kitkajoen-ylaosa//')}
            >
              uistin.net
            </span>{' '}                  
          </p>
        </section>
        <div style={{ marginTop: '2em', marginRight: '30%'}}>
          <img src="./images/kalapaikkakuvat/perhot/uppoperho.png" className="imgKalastupaikka" />
        </div>
        <IonAccordionGroup>
          <IonAccordion value="first" className='ionAccordion'>
            <IonItem slot="header" color="primary" style={{width: 'auto', maxWidth: '200px', margin: '0 auto', height: '2em', borderRadius: '30px', display: 'flex', textAlign: 'center', fontSize: 'auto'}}>
              <IonLabel >Kalastuspaikat</IonLabel>
            </IonItem>
            <section className="ion-padding" slot="content">
            <p>
              <i>Tässä joidenkin koskien ym. kuvauksia</i>...
            </p>
            <KalastusPaikka
                  nimi="Kiveskoski"
                  kuvaus="Noin 200m pitkä kivinen koski on valtatie 5 alapuolella, Kitkajärven ja Keltinjärven välissä.
                  Kosken niska on matalaa, hidasvirtaista aluetta, jonka jälkeen virrannopeus kasvaa. Loppuosaltaan koski levenee ja virta hidastuu.
                  Kahlaaminen on helppoa molemmilta rannoilta, mutta heittämään pääsee myös ilman kahlaamista.
                  Koskessa pääosa saaliista harjusta ja taimenta. Niskan yläpuoli ja kosken loppuliuku ovat hyviä siikapaikkoja kesällä ja alkusyksyllä."
                  pysäkointi="parkkipaikka molemmilla puolilla siltaa."
                  navigaattoriin='Kemijärventie 443, 93999 Kuusamo.'
              />
            <KalastusPaikka
                  nimi="Käylänkoski"
                  kuvaus="Koski kulkee maantien ali kaksihaaraisena ja haarat yhtyvät tien alapuolella. Koski on vuolautensa vuoksi vaikeasti kalastettava kohde. Niskat ja alaosan hidasvirtaisemmat alueet ovat parhaita kalastuspaikkoja.  Saaliina harjuksia ja taimenia."
                  palvelut='Etelärannalla, kalanviljelylaitoksen kupeessa on myös liikuntarajoitteiselle soveltuva heittolaituri, laavu ja tulipaikka'
                  pysäkointi="Parkkipaikalta joelle 100 m"
                  navigaattoriin='Käyläntie 34, 93850 Kuusamo tai Sallantie 60, 93850 Kuusamo.'
              />
            <KalastusPaikka
                  nimi="Saukkoniva, Kiehtäjänniva, Käpäläniva, Vähän-Käylän koski, Nahkaniva, Vääräkoski ja Peurakoski"
                  kuvaus="Kaikki ko. kosket ovat lyhyitä koskia. Kitkan yläosan parhaita paikkoja harjuksen- ja siiankalastukseen ovat näiden koskien ja nivojen niskat ja hidasvirtaisemmat alueet. Kalastajamääriltään rauhallisempaa aluetta."
                  palvelut="Vähän-Käylän kosken ja Peurakosken etelärannan laavu."
                  pysäkointi="Säkkilästä, Tikkuniementie 22, 93850 Kuusamo, ja siitä erkanevaa metsätietä. Kävelymatkaa rantaan 1- 2 km."
                  navigaattoriin=''
              />        
              <KalastusPaikka
                  nimi="Saarikoski"
                  kuvaus="Joki kiertelee saarten välissä noin 400m. Niska on voimakasvirtainen, pitkä ja syvä. Yläosalla on köngäs ja voimakkaammin virtaavaa koskea. Keskiosa on kivikkoista ja voimakasvirtaista keskiväylältään. Alaosalla on pitkä ja hidasvirtainen alue. Niska ja keskiosa ovat sopivia taimenen kalastukseen. Harjusta on koko kosken alueella syvemmissä kuopissa."
                  palvelut='Kota alasuvannon etelärannalla'
                  pysäkointi="Säkkilästä, Tikkuniementie 22, 93850 Kuusamo, ja siitä erkanevaa metsätietä. Kodan lähelle pääsee autolla."
                  navigaattoriin=''
              />
              <KalastusPaikka
                  nimi="Harjakoski"
                  kuvaus="Koskessa useita pieniä könkäitä, joiden välissä monttuja ja peilejä.  Voimakasvirtainen koski harjuksen ja taimenen kalastukseen.
                    Harjakosken alapuolella on lyhyt ja leveä Kelhänkoski, jonka kalastukselta rauhoitettu alaosa leveää Juumanjärveksi."
                  palvelut="Kota ja wc."
                  pysäkointi="Saarikosken kodan parkkipaikalta."
                  navigaattoriin=''
                />

                <p>
                    Lyhyitä virtapaikkoja ja matkailunähtävyyksiä Juuman kylän lähellä ovat Niskakoski ja Myllykoski, joista voi kalastaa harjusta ja taimenta.
                    Aallokkokoskessa on kalastus kielletty.
                </p>
                <p>
                    Uistelijat saavat Juumajärvistä saaliiksi siikaa, haukea ja ahventa.
                </p>
                <summary>Pilkkiminen</summary>
                    <br />
                    <img src="./images/kalapaikkakuvat/talvi/pilkki3.png" className="imgKalastupaikka" height="50" />
                    <p>
                        Kiveskosken niska on suosittu siianpilkintäpaikka.
                    </p>
                    <p>
                        <i>Pysäköinti ja kulku</i>: kts. Kiveskoski.
                    </p>
              </section> 
          </IonAccordion>
        </IonAccordionGroup>
        </article>
      </MainLayout>
    );
  };
  
  export default Inarijoki;
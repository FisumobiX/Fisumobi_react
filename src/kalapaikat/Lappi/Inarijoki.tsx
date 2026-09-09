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
      <MainLayout title="Fisumobi" pagetitle={<span style={{ fontSize: '0.9rem', color: '#007aff', letterSpacing: '2px', fontStyle: 'italic' }}> - Inarijoki</span>} footer={footer}>
       <article className="articleText"> 
        <div className="textIntroduction">
          <p>
          Tenon latvajoet Inarijoki ja Kietsimäjoki laskevat Suomen ja Norjan rajajokena etelään. Angelin kylän yläpuolella Kietsimäjoki yhtyy Inarijokeen, joka jatkaa kohti Karigasniemeä.
          </p>
          <p>
          Noin 70 kilometriä virrattuaan kohti Jäämerta Inarijoki yhtyy Karasjokeen ja muodostuu Tenojoki.
          </p>
          <p>
          Joki on keskikokoinen ja soveltuu hyvin perhokalastukseen. Jäämerestä Inarijokeen nousee pääasiassa pientä lohta eli tittiä, mutta myös suurempaa Atlantinlohta. Harjuskanta on paikoitellen hyvä. Kyttyrälohta on tavattu kymmeniä kilometrejä ylävirtaan Inarijoessa. Nousun laajuus vaihtelee vuosittain, erityisesti parittomina vuosina, jolloin kanta on vahvempi.
          </p>
          <p>
            Inarijokea on mahdollista kalastaa myös Norjanpuolelta siltä osin missä se kulkee rajajokena.
          </p> 
        </div>
        <section>
            <div style={{ marginTop: '2em', marginLeft: '30%'}}>
              <img src="./images/kalapaikkakuvat/kesa/harjus.png"  alt="lohi"/>
            </div> 
            <h3 style={{ textAlign: 'center' }}>Info</h3>
            <p>
            <Link to={`/map/Kalakartta?lat=${69.292716}&lng=${25.745559}&zoom=12`}>
            <FaMap color='#4cd964'/>&nbsp;  Näytä kartalla
            </Link>
            </p>
            <p>
              <strong>Näistä linkeistä löytää tarkempaa tietoa kalastusluvista ja kalastussäännöistä yms</strong>.
            </p>

            <p>
              <strong>Kalastuslupa</strong>:{' '}
              <span className='links'
                onClick={() => openLink('https://tenonkalaluvat.fi/')}
              >
                https://tenonkalaluvat.fi/
              </span>{' '}
              ja{' '}
              <span className='links'
                onClick={() => openLink('https://tana.lakseelv.no/welcome.php')}
              >
                https://tana.lakseelv.no/welcome.php
              </span>
              
              <br />

              <strong>Kalastussäädökset</strong>:{' '}
              <span className='links'
                onClick={() => openLink('https://www.tenonkalatalousalue.fi/saadokset/')}
              >
                https://www.tenonkalatalousalue.fi/saadokset/
              </span>{' '}
              ja{' '}
              <span className='links'
                onClick={() => openLink('https://elinvoimakeskus.fi/kalastus-tenojoella')}
              >
                https://elinvoimakeskus.fi/kalastus-tenojoella
              </span>
            </p>
          </section>

        <section style={{background: '#ffcc00', padding: '1em', marginBottom: '1em', color: "#333"}}>
         <p>
            Tenojoen Atlantinlohta suojellaan sen kannan taannuttua ja kalastussäännöt muuttuvat jopa vuosittain. <strong>Tarkista säännöt!</strong>
         </p> 
         <p> 
            Tässä joitain olennaisia sääntöjä Tenojoen kalastussääntöihin, jonka vesistöön Inarijoki ja Kietsimäjoki kuuluu.
          </p>
          <p>
            Atlannin lohen tai merinieriän kalastus ei ole sallittua.
          </p>
          <p>
            Kalastus veneestä ja veneellä on kielletty.
          </p>
          <p>
            Muiden lajien kuin Atlantin lohi ja merinieriä kalastuslupa oikeuttaa kalastamaan rannalta perholla
            ilman kohoa tai heittopainoa. Alle 16-vuotiaat saavat kalastaa perholla
            ja koholla.
          </p>
          <p>
            Kalastuslupa oikeuttaa kalastamaan yhdellä vavalla
            korkeintaan luokan #6 perhokalastusvälineitä käyttäen.
          </p>
          <p>
            Perukkeen pään maksimipaksuus on 0,25 mm ja koukun maksimikoko 8.
          </p>
          <p>
            Perhosiiman on oltava kelluva ja käytössä saa olla korkeintaan yksi 1-
            haarainen koukku.
          </p>
          <p>
            Viikoittainen rauhoitusaika on voimassa koko kalastuskauden
            sunnuntaista klo 19 maanantaihin klo 19 Suomen aikaa.
          </p>
          <p>
            Taimenen ja harjuksen alamitta on 30 senttiä.
          </p>
          <p>
            Saaliiksi jääneet kyttyrälohet ja kirjolohet on välittömästi otettava hengiltä.
          </p>
          <p>
            Varrellisen nostokoukun käyttäminen kielletty.
          </p>
          <p>
            Kielletty vapakalastusalue kohdasta, jossa Skietsamjoki ja Inarijoki yhtyy:
            alue, joka ulottuu 50 metriä ylävirtaan ja 100 metriä alavirtaan
            lähimmistä sivujoen rannoista jokiuoman poikki.
          </p>
          <p>
            Lupa oikeuttaa kalastamaan vain siinä maassa mistä lupa on ostettu.
          </p>
        </section>

        <IonAccordionGroup>
          <IonAccordion value="first" className='ionAccordion'>
            <IonItem slot="header" color="primary" style={{width: 'auto', maxWidth: '200px', margin: '0 auto', height: '2em', borderRadius: '30px', display: 'flex', textAlign: 'center', fontSize: 'auto'}}>
              <IonLabel >Kalastuspaikat</IonLabel>
            </IonItem>
            <section className="ion-padding" slot="content">
            <p>
              <i>Tässä joidenkin koskien kuvauksia</i>...
            </p>
            <KalastusPaikka
                  nimi="Inarijoen yläosa ja Kietsimäjoki - Skietsamjoki"
                  kuvaus="Kietsimäjoessa on useita koskia ja suvantoja harjuksen kalastukseen. Atlannin lohta nousee vähäsiä määriä Kietsimäjoen Pystykurkkioon asti, mutta merkittäviä määriä lähinnä Inarijoen Porttikoskeen, muutoin alue on harjuksen, taimenen ja haukien valtakuntaa. Inarijoen ja Kietsimäjoen yhtymäkohdassa muista rauhoitusalue!"
                  pysäkointi="Angelista menee jokivartta pitkin jonkin matkaa tie, josta löytyy myös parkki autolle. Tuolta jatkuu polku poroaidan vierustaa."
                  navigaattoriin=''
              />
            <KalastusPaikka
                  nimi="Njuorjjotoquoika"
                  kuvaus="Lyhyt, syvä koski, jossa hyvin harjusta."
                  pysäkointi="Auto on pysäköitävä tiensivuun (69.02861, 25.77309) ja siitä mentävä poroaidan ali ja kävellä noin 50 m joelle. Rannassa risukkoa."
                  navigaattoriin=''
              />
            <KalastusPaikka
                  nimi="Matinkongäs - Inarinköngäs - Maatiskievnis"
                  kuvaus="Jyrkkä luonnonkaunis koski, jonka keskiosalla syvä pooli. Kosken yläosalla hyvin harjusta. Taimeniakin on saatu."
                  palvelut="Grillipaikka."
                  pysäkointi="Viitta osoittaa Angelintieltä poroaidan portin lapi tien rantatörmälle, jossa on leiripaikkoja."
                  navigaattoriin=''
              />        
              <KalastusPaikka
                  nimi="Sammalniva ja Doarrovasguika"
                  kuvaus="Sammalniva ja Doarrovasguika on kaksiosainen niva, joiden välissä ja ylä- ja alapuolella kalastettavaa virtaa. Nivojen väli noin 100 m. Nivan syvän lopun jälkeen kalastettava suvanto."
                  pysäkointi="Nivan alkupään kohdalla parkki (69.28405, 25.74560) muutamalle autolle. Alaosalta 200 m tiessä levennys. Karigasniemeltä noin 15-16 km."
                  navigaattoriin=''
              />
              <KalastusPaikka
                  nimi="Káre Ovllán niva"
                  kuvaus="Noin 300 m kalastettavaa nivaa. Nivan alla hidasvirtainen ja syvä leveä joen kohta."
                  palvelut="Kota ja wc."
                  pysäkointi="Iso parkkipaikka 300 m mutkan pohjoispuolella. Karigasniemeltä noin 13 km."
                  navigaattoriin=''
                />
                <KalastusPaikka
                  nimi="Kuoppaniva"
                  kuvaus="Noin 300 m niva ja 500 m kalastettavaa virta-aluetta. Alaosalla syvempi pääuoma mutkan jälkeen Suomen puolella."
                  pysäkointi="Yläosalla iso parkkipaikka ja portaat rantaan. Alaosalla pieni parkki poroaidan kohdalla. Karigasniemeltä noin 14 km."
                  navigaattoriin=''
                />
                <KalastusPaikka
                  nimi="Antinniva – Bistunjavvi"
                  kuvaus="Kalastettavaa aluetta noin 500 m. Syvyys vaihtelee montuista matalikkoihin. Alaosassa hidasvirtainen syvä pääuoma Suomen puolella."
                  pysäkointi="Karigasniemeltä noin 11 km. Pysäköinti Ylä-Tenon takkatuvalla (asiakkaille) tai tien varteen."
                  navigaattoriin=''
                />
                <KalastusPaikka
                  nimi="Koikkiniva – Goikenjavvi"
                  kuvaus="Satoja metrejä vaihtelevaa nivaa. Suomen puolella voimakasvirtainen haara. Särkän jälkeen virta rauhoittuu."
                  palvelut="Laavu."
                  pysäkointi="Karigasniemeltä noin 8 km. Kaksi pistotietä yläosalle, alaosalle parkki tien viereen."
                  navigaattoriin=''
                />
                <KalastusPaikka
                  nimi="Mustakoski – Cahpessquika – Ränni"
                  kuvaus="Syvällä uomassa noin 800 m jyrkkä ja voimakasvirtainen koski. Kaksi niskaa, joihin muodostuu kalastettavia paikkoja."
                  palvelut="Mustakosken parkkipaikalla on nuotiokatos."
                  pysäkointi="Ampumaradan tien alkupäässä useita pysäköintipaikkoja. Mustajokisuun kohdalla pieni parkki."
                  navigaattoriin=''
                />
                <KalastusPaikka
                  nimi="Pahakoski – Bahásquika"
                  kuvaus="Matala ja kiivasvirtainen noin 200 m koskenpätkä aivan tien vieressä."
                  pysäkointi="Pysäköinti tienvarteen."
                  navigaattoriin=''
                />
                <KalastusPaikka
                  nimi="Hehkenjavvi / Hávgasavu – Haukikallio"
                  kuvaus="Helposti kalastettavaa vaihtelevaa virtaa ja suvantoja. Nimi tulee hauelta muistuttavasta kalliosta."
                  pysäkointi="Karigasjoen siltojen eteläpuolelta noin 500 m pistotie rantaan."
                  navigaattoriin=''
                />
                <KalastusPaikka
                  nimi="Torvikoski"
                  kuvaus="Pitkä ja kivinen koski. Yläkoski voimakasvirtaisempi, alakoski rauhallisempi. Rannat helppokulkuisia."
                  palvelut="Karigasniemen kylän palvelut."
                  pysäkointi="Sillan ylä- ja alapuolella rauhoitusalueita ulkopaikkakuntalaisille."
                  navigaattoriin=''
                /> 
              </section> 
          </IonAccordion>
        </IonAccordionGroup>
        </article>
      </MainLayout>
    );
  };
  
  export default Inarijoki;
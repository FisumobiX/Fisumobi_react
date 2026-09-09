import MainLayout from '../../components/MainLayoutComp';
import "../../components/themeComp/Texts.css";
import { FaHouse,  FaMap , FaBookOpen, FaChartSimple, FaCloudSunRain } from 'react-icons/fa6';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { Browser } from '@capacitor/browser';
import KalastusPaikka from "../KalastusPaikka";

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
      <MainLayout title="Fisumobi" pagetitle={<span style={{ fontSize: '0.9rem', color: '#007aff', letterSpacing: '2px', fontStyle: 'italic' }}> - Karkkilankosket</span>} footer={footer}>
       <article className="articleText"> 
        <div className="textIntroduction">
          <p>
          Karkkilassa on kaksi jokikalastusaluetta, Saava- ja Karjaanjoessa, joiden välissä on Pyhäjärvi. Saavajoessa on kaksi koskikalastuskohdetta: Siikalankoski ja Katlakoski. Karjaanjoessa olevat kalastuskohteet ovat mm. voimalaitospadottu Massakoski sekä Myllykoski, Pitkälänkoski ja Maijalankoski.  
          </p>
          <p>
          Joissa on luontaisesti lisääntyvä harjus- ja taimenkanta. Yleisin kala on kirjolohi, joita istutetaan vuosittain läpi kalastuskauden. Lisäksi jokiin tehdään taimenen ja harjuksen pienpoikasistutuksia. 
          </p>
          <p>
          Maisema vaihtelee Saavanjoen erämaisista kuusikoista Karjaanjoen lehtomaisemaan. Saavajoen kalastuskohteet ovat maaseutu/metsäympäristössä. Karjaanjoen kalastuskohteet Massakoski ja Myllykoski aivan Karkkilan kaupungin keskustassa. Pitkälänkoski ja Maijalankoski 2 - 4 km keskustasta. 
          </p>
          <p>
          Veden väri on ajasta tai paikasta riippuen Saavanjoessa savisameaa ja Karjaanjoessa humuksen ruskeaksi värjäämää, mutta näkösyvyyttä on. 
          </p>
          <p>
          Kosket soveltuvat perhokalastukseen ja kevyeen heittokalastukseen. Myllykoskessa voi kalastaa läpi talven.
          </p>
        </div>
        <section>
        <p>
          <strong>Kalasto ja kalastus </strong>
          </p>
          <p>
          Kalastuskohdelaji: kirjolohi, taimen, ja harjus. 
          </p>

        </section> 
        <section>
            <p>
            <Link to={`/map/Kalakartta?lat=${60.51926596447524}&lng=${24.230119871735624}&zoom=12`}> 
            <FaMap color='#4cd964'/>&nbsp;  Näytä kartalla
            </Link>
            </p>

            <h3 style={{ textAlign: 'center' }}>Info</h3>
            <p>
            <strong>Tietoa kalastuksesta, kalastusluvista ym.</strong>:{' '}
              <span className='links'
                onClick={() => openLink('https://visitkarkkila.fi/liiku-harrasta/karkkilan-kosket/')}
              >
                Visit Karkkila
              </span>           
            </p>
          </section>
          <div className="kalapaikkaKuva">
            <img
              src="./images/kalapaikkakuvat/kesa/taimen3.png"
              className="imgKalastuspaikka" style={{width: '30%'}}
              alt="kuha"
            />
          </div>
          <section>
            <p><strong>Kalastusapaikat</strong></p>
            <p><strong>Saavajoki</strong><br/></p>
            <KalastusPaikka
                  nimi="Siikalankoski"
                  kuvaus="Kalastus on sallittu Siikalantien sillan alapuolella. Kalastusalueen yläosa sillasta noin 50 m alaspäin vain kahlaten kalastettava, koska toisella rannalla on talo ja toisella rannalla jyrkkä ryteikköinen ranta. Yläosa on kivikkoinen, matala ja voimakasvirtainen. Keskiosalla virta hieman hidastuu ja joki syvenee. Kosken loppuosa on keskiuomaltaan - saaren yläpuolella - syvä ja kivien takana on syviä kuoppia. Alaosa on hitaasti virtaavaa ja syvää."
                  pysäkointi="Siikalantieltä noin 150m oikealle eteläpuolelta Saavajoen ylimenevää siltaa."
                  navigaattoriin='Siikalantie 205, Karkkila'
            />
            <KalastusPaikka
                  nimi="Katlakoski"
                  kuvaus="Katlakoskessa Saavajoki kulkee kuusimetsän keskellä kapeassa, jyrkässä uomassa, joka on kunnostettu porrasmaisesti kiveämällä. "
                  pysäkointi="Ratatien varressa on säähavaintopallojen kohdalla pysäköintipaikka ja Katlakosken kohdalla levikkeet. Koski on tien länsipuolella peltojen/kuusimetsän takana, polku menee ojan reunaa joelle."
                  navigaattoriin='Pajuojantie 389, Karkkila. Siikajoentieltä päin tullessa käännytään Pajuojantieltä oikealle, Ratatielle(ei navigaatorissa), jossa näkyy säähavaintopalloja.'
            />
            <p><strong>Karjaanjoki</strong><br/></p>
            <KalastusPaikka
                  nimi="Massakoski"
                  kuvaus="Massakoski on pato, jonka alapuolella on kalastusaluetta Myllykoskelle asti."
                  pysäkointi="Kts. Myllykoski."
                  navigaattoriin=''
            />
            <KalastusPaikka
                  nimi="Myllykoski"
                  kuvaus="Myllykoski on luonnontilassa oleva 3 metriä korkea putous Karkkilan keskustan Myllypuistossa(Koskipuistossa). Putouksen niska on kapea ja kiivasvirtainen. Putouksen alla joki rauhoittuu hidasvirtaiseksi Koskipuiston suvantoon."
                  pysäkointi="Pysäköinti esim. Valurinkadulle, mistä Myllypuistoon on metsän läpi vain pari sataa metriä."
                  navigaattoriin=''
            />
            <KalastusPaikka
                  nimi="Pitkälänkoski"
                  kuvaus="Yläosa on kapea, nopeasti virtaava ja levenee sitten hitaasti virtaavaksi. Monenmuotoista koskea varsinkin perhokalastukseen. Rannat ovat vähä puisia, joten heitto tilaa on hyvin.<br/><br/>
                  Pitkälänkosken ja Maijalankosken välinen jokialue on rauhallisesti virtaavaa ja välillä paikoin syvää vettä. "
                  pysäkointi="Puhdistamontiellä oikealla puolella on parkkipaikka. Paikalla on opastekyltit ja roskikset. Parkkipaikalta lähtee koskelle jokea seuraava suosittu ulkoilupolku."
                  palvelut='laavu'
                  navigaattoriin='Puhdistamontie, Karkkila'
            />
            <KalastusPaikka
                  nimi="Maijalankoski"
                  kuvaus="Maijalankoski on matala, jossa on hieman rikkonaista koskea. Ympäristöltään erilainen kuin yläpuolella oleva Pitkälänkoski. Rannat ovat runsaspuisia ja ranta on jyrkkä. Joen ylle ulottuvia rantapuita on paljon."
                  pysäkointi="Maijalantien päässä on parkkipaikka. Parkkipaikalta on noin 500 m hiekkatietä alas joelle ja laavulle."
                  palvelut='laavu'
                  navigaattoriin='Maijalantie, Karkkila'
            />           
          </section>
        </article>
      </MainLayout>
    );
  };
  
  export default Kalapaikka;
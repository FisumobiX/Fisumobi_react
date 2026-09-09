import React from 'react';
import "../components/themeComp/Texts.css";
import { Browser } from '@capacitor/browser';


const openLink = (url: string) => {
    Browser.open({ url });
 };

const KalastuslakiComp: React.FC = () => {
    return (  
        <article  className='articleText'> 
            <div className="textIntroduction">
                <p>
                Suomen voimassa oleva kalastuslaki on kalastuslaki 379/2015, joka tuli voimaan 1.1.2016 ja korjasi aiemman, hajanaisen vuoden 1982 lain.  Laki säätelee kalastusoikeuksia, kalastusmenetelmiä, kalakantojen hoitoa sekä kalatalouden hallintoa siten, että turvataan kalavarojen ekologisesti, taloudellisesti ja sosiaalisesti kestävä käyttö
                </p>
                <p>
                Elinvoimakeskuksilla on mahdollisuus kieltää kalastus tai rajoittaa sitä, joten kalastusalueilla voi olla tiukempia sääntöjä esim. kalojen yleisistä alamitoista ym.
                Myös erityiskalastuskohteilla on omat säännöt, jotka selviävät vesialueen omistajalta yleensä luvan myynnin ohessa. Ko. alueilla on kielletty jokaisenoikeudella ja läänikohtaisella viehekalastuskortilla kalastaminen.
                </p>
                <p>
                Kalastusrajoitukset löytyvät kalastusrajoitus.fi kartasta (alla on linkki).
                </p>
            </div>                  
            <p>
            Kalastuslaki 379/2015 :{' '}
              <span className='links'
                onClick={() => openLink('https://www.finlex.fi/fi/lainsaadanto/2015/379#chp_1')}
              >
                Finlex
              </span>           
            </p>
            <p>
            Maa- ja metsätalousministeriön verkkosivuilta löytyy lisätietoa laista ja sen soveltamisesta osoitteesta: https://mmm.fi/kalastuslaki. Koska ko. sivu ei toimi mobiililaitteissa niin osa on sivun linkeistä alla:{' '}
            <ul>
              <li>
                <a 
                className="links" 
                href="https://mmm.fi/kalastuslaki/pyyntimitat-ja-rauhoitukset" 
                target="_blank" 
              >
                pyyntimitat ja rauhoitukset
              </a></li>
              <li>
                <a 
                className="links" 
                href="https://mmm.fi/kalastuslaki/usein-kysyttya/kalastustavat" 
                target="_blank" 
              >
                kalastustavat
              </a></li>
              <li>
                <a 
                className="links" 
                href="https://mmm.fi/kalastuslaki/usein-kysyttya/vaelluskalavesistot" 
                target="_blank" 
              >
                vaelluskalavesistöt
              </a></li>
            </ul>        
            </p>          
            <p>
            <strong>Kalastusrajoitukset kartta</strong>:{' '}
              <span className='links'
                onClick={() => openLink('https://kalastusrajoitus.fi/#/kalastusrajoitus')}
              >
                Kalastuksen sähköiset asiointipalvelut
              </span>           
            </p>           
            <p>
            <strong>Jokaisenoikeudet ja -velvollisuudet</strong>:{' '}
              <span className='links'
                onClick={() => openLink('https://www.luontoon.fi/fi/lajit/retkeily-ja-ulkoilu/jokaisenoikeudet')}
              >
                Luontoon
              </span>           
            </p>
        </article> 
    );
}

export default KalastuslakiComp;
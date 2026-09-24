export type Location = {
  paikka: string;
  lajit: string;
  lat: number;
  lng: number;
  url: string 
};

export const kalapaikat: Location[] = [
  {
    paikka: 'Inarijoki',
    lat: 69.292716, 
    lng: 25.745559,
    lajit: 'kyttyrälohi, harjus ja taimen ',
    url:'../inarijoki'
  },
  {
    paikka: 'Inarijoki/Kietsimäjoki',
    lat: 68.89514112131512,
    lng: 25.62738548814221,
    lajit: 'kyttyrälohi, harjus ja taimen ',
    url:'../inarijoki'
  },
  {
    paikka: 'Könkämäeno, alaosa',
    lat: 68.474919,
    lng: 22.125196,
    lajit: 'harjus, lohi, hauki ja ahven',
    url:''
  },
  {
    paikka: 'Könkämäeno, yläosa',
    lat: 68.765419, 
    lng: 21.385725,
    lajit: 'harjus, hauki, siika, ahven ja lohi',
    url:''
  },
  {
    paikka: 'Muonionjoki, Mannakoski',
    lat: 68.483121, 
    lng: 22.343867,
    lajit: 'harjus, lohi, hauki',
    url:''
  },
  {
    paikka: 'Muonionjoki, Äijäkoski',
    lat: 67.90463673364084, 
    lng: 23.603133559536765,
    lajit: 'harjus ja lohi',
    url:''
  },
  {
    paikka: 'Pieni Harjujärvi - Muonio',
    lat: 67.799995, 
    lng: 23.636125,
    lajit: 'kirjolohi',
    url:''
  },
  {
    paikka: 'Paistunturin erämaa-alue',
    lat: 69.653179, 
    lng: 26.361482,
    lajit: 'rautu ja taimen ',
    url:'../paistunturi'
  },

    //Keski-Suomi Pihtipudas, 
    {
      paikka: 'Pihtipudas, Muurasjärvi',
      lat: 63.50358996305205,
      lng: 25.35294414875831,
      lajit: 'kuha, hauki, ahven, taimen ja järvilohi',
      url:'../pihtipudas'
    },
    {
      paikka: 'Pihtipudas, Alvajärvi',
      lat: 63.38274767810891,
      lng: 25.477003759095588,
      lajit: 'kuha, hauki, ahven, taimen ja järvilohi',
      url:'../pihtipudas'
    },
    {
      paikka: 'Pihtipudas, Saanijärvi',
      lat: 63.41035625979797, 
      lng: 25.59817021125304,
      lajit: 'kuha, hauki, ahven, taimen ja järvilohi',
      url:'../pihtipudas'
    },
    {
      paikka: 'Pihtipudas, Elämäjärvi',
      lat: 63.47284783108709, 
      lng: 25.715688786842477,
      lajit: 'kuha, hauki, ahven',
      url:'../pihtipudas'
    },
    {
      paikka: 'Pihtipudas, Saaninjoki',
      lat: 63.38523575641668,
      lng: 25.582190896323468,
      lajit: 'taimen, harjus, ahven ja hauki',
      url:'../pihtipudas'
    },
    {
      paikka: 'Pihtipudas, Kolima',
      lat: 63.31926951648436,
      lng: 25.700815878128303,
      lajit: 'kuha, hauki, ahven, taimen ja järvilohi',
      url:'../pihtipudas'
    },
    {
      paikka: 'Pihtipudas, Kolkku',
      lat: 63.28877046489749,  
      lng: 26.051524386346998,
      lajit: 'kuha, hauki, ahven',
      url:'../pihtipudas'
    },
    //Kivijärvi
    {
      paikka: 'Kivijärvi',
      lat: 63.14121328850435,
      lng: 25.176240679916,
      lajit: 'kuha, taimen, hauki, ahven ja järvilohi',
      url:'../kivijarvi'
    },
    {
      paikka: 'Vuosjärvi',
      lat: 62.99908249092778,
      lng:  25.462902205343248,
      lajit: 'hauki, ahven kuha ja taimen,',
      url:'../kivijarvi'
    },
    {
      paikka: 'Hilmonkoski',
      lat: 63.00118673281347, 
      lng: 25.350901805761588,
      lajit: 'harjus, taimen ja hauki',
      url:'../kivijarvi'
    },
    //Viitasaari
    {
      paikka: 'Muuruejärvi',
      lat: 63.0940991999537, 
      lng: 25.51324066112611 ,
      lajit: 'kuha, ahven, hauki ja taimen',
      url:'../pohjois-keitele'
    },
    {
      paikka: 'Pohjois-Keitele',
      lat:  63.11766365349322, 
      lng: 25.674117828698943,
      lajit: 'kuha, ahven, hauki,taimen ja järvilohi',
      url:'../pohjois-keitele'
    },
    
   
  //Pirkanmaa
  {
    paikka: 'Siuronkoski - Nokia',
    lat: 61.474818,
    lng: 23.331757,
    lajit: 'toutain, kuha ja kirjolohi',
    url:'../siuronkoski'
  },
  {
    paikka: 'Koitajoki, Möhkönkoskien virkistyskalastusalue',
    lat: 62.640204,
    lng: 31.286503,
    lajit: 'taimen ja kirjolohi',
    url:''
  },
  {
    paikka: 'Valkealanreitti - Kouvola, ',
    lat: 60.897689,
    lng: 26.792951,
    lajit: 'taimen ja kirjolohi',
    url:''
  },
  //Kainuu
  {
    paikka: 'Kitkajoen yläosa - Kuusamo',
    lat: 66.295566,
    lng: 29.278105,
    lajit: 'taimen, harjus, siika, ahven ja hauki',
    url: '../kaartjarvi'
  },
  //Häme
  {
    paikka: 'Iso-Melkutin - Loppi',
    lat: 60.7372,
    lng: 24.0668,
    lajit: 'siika ja ahven',
    url: '../isomelkutin'
  },
  {
    paikka: 'Kaartjärvi - Loppi',
    lat: 60.762297,
    lng: 24.148923,
    lajit: 'hauki ja ahven',
    url: '../kaartjarvi'
  },
  {
    paikka: 'Pääjärvi - Loppi',
    lat: 60.7935,
    lng: 24.0775,
    lajit: 'kuha, ahven, hauki ja lahna',
    url: '../paajarvi'
  },
  //Uusimaa
  {
    paikka: 'Hiidenvesi - Lohja, Vihti, Nummela',
    lat: 60.3748,
    lng: 24.1989,
    lajit: 'kuha, hauki ja ahven',
    url:'../hiidenvesi'
  },
  {
    paikka: 'Bromarv – Tenhola - Läntinen Suomenlahti',
    lat: 60.00031444974377,
    lng: 22.973386348402645,
    lajit: 'kuha, hauki, meritaimen ja ahven',
    url:'../lantinenSuomenlahti'
  },
  {
    paikka: 'Hanko - Läntinen Suomenlahti',
    lat: 59.809153789225164, 
    lng: 23.02646509495274,
    lajit: 'kuha, hauki, meritaimen ja ahven',
    url:'../lantinenSuomenlahti'
  },
  {
    paikka: 'Pohjanpitäjänlahti - Läntinen Suomenlahti',
    lat: 60.048297258244006,  
    lng: 23.505267602706105,
    lajit: 'kuha, hauki, meritaimen ja ahven',
    url:'../lantinenSuomenlahti'
  },
  {
    paikka: 'Raasepori – Snappertuna - Läntinen Suomenlahti',
    lat: 59.97094085954843,   
    lng: 23.41399359985205,
    lajit: 'kuha, hauki, meritaimen ja ahven',
    url:'../lantinenSuomenlahti'
  },
  {
    paikka: 'Inkoo - Läntinen Suomenlahti',
    lat: 60.02645945252197,    
    lng: 24.130571073782995,
    lajit: 'kuha, hauki, meritaimen ja ahven',
    url:'../lantinenSuomenlahti'
  },
  {
    paikka: 'Kirkkonummi – Porkkala - Läntinen Suomenlahti',
    lat: 60.01022785997475,     
    lng: 24.419537588125042,
    lajit: 'kuha, hauki, meritaimen ja ahven',
    url:'../lantinenSuomenlahti'
  },
  {
    paikka: 'Espoo - Helsinki - Läntinen Suomenlahti',
    lat: 60.09473782990802,      
    lng: 24.70858171518369,
    lajit: 'kuha, hauki, meritaimen ja ahven',
    url:'../lantinenSuomenlahti'
  },
  {
    paikka: 'siikalankoski - Saavajoki - Karkkilankosket',
    lat: 60.57298828494873,
    lng:  24.21855044015699,
    lajit: 'kirjolohi, taimen ja harjus. ym.',
    url:'../karkkilankosket'
  },
  {
    paikka: 'Katlankoski - Saavajoki - Karkkilankosket',
    lat: 60.560723871141086, 
    lng:  24.223019280494018,
    lajit: 'kirjolohi, taimen ja harjus. ym.',
    url:'../karkkilankosket'
  },
  {
    paikka: 'Massakoski - Karjaajoki - Karkkilankosket',
    lat: 60.529390697822656, 
    lng: 24.226388407791198,
    lajit: 'kirjolohi, taimen ja harjus. ym.',
    url:'../karkkilankosket'
  },
  {
    paikka: 'Maijalankoski - Karjaajoki - Karkkilankosket',
    lat: 60.513149414631314,  
    lng: 24.22784620495455,
    lajit: 'kirjolohi, taimen ja harjus. ym.',
    url:'../karkkilankosket'
  },
  {
    paikka: 'Myllykoski - Karjaajoki - Karkkilankosket',
    lat: 60.53142602119956,
    lng: 24.20900199782516,
    lajit: 'kirjolohi, taimen ja harjus. ym.',
    url:'../karkkilankosket'
  },
  {
    paikka: 'Pitkälänkoski - Karjaajoki - Karkkilankosket',
    lat: 60.51926596447524, 
    lng: 24.230119871735624,
    lajit: 'kirjolohi, taimen ja harjus. ym.',
    url:'../karkkilankosket'
  },
  {
    paikka: 'Nuuksio - Espoo',
    lat: 60.3056,
    lng: 24.5963,
    lajit: 'ahven, hauki, kuha ja siika. ym.',
    url:'../nuuksio'
  },
  {
    paikka: 'Vantaanjoki - Vanhankaupunginkoski',
    lat: 60.215616889619504,   
    lng: 24.984979793755752,
    lajit: 'taimen, siika ja kirjolohi ym.',
    url:'../vantaajoki'
  },
  {
    paikka: 'Vantaanjoki/Keravanjoki - Tikkurilankoski',
    lat: 60.28976160566068,  
    lng: 25.04529908975681,
    lajit: 'taimen ja kirjolohi ym.',
    url:'../vantaajoki'
  },
  {
    paikka: 'Vantaanjoki - Nukarinkoski',
    lat: 60.525823489485454,   
    lng: 24.915501736198117,
    lajit: 'taimen ja kirjolohi ym.',
    url:'../vantaajoki'
  },
  {
    paikka: 'Vantaanjoki - Myllykoski',
    lat: 60.45495975218372,    
    lng: 24.85259191495799,
    lajit: 'taimen ja kirjolohi ym.',
    url:'../vantaajoki'
  },
  //ahvenanmaa
  {
    paikka: 'ahvenanmaa - Mariehamnskortet',
    lat: 60.104520,
    lng: 19.936429,
    lajit: 'ahven, hauki ja siika',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Asterholma',
    lat: 60.307418,
    lng: 21.058640,
    lajit: 'ahven, hauki, meritaimen ja siika',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Björnholma - södra',
    lat: 60.428577,
    lng: 21.039769,
    lajit: 'hauki, ahven ja siika',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Korsö fjärden och Väster fjärden',
    lat: 60.41424205475057,
    lng: 20.98281548803063,
    lajit: 'hauki,  ahven, meritaimen, ja siika',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Hellsö Fiskelag och Samfälldas vattenområde',
    lat: 59.9543467404071, 
    lng: 20.94119300884714,
    lajit: 'ahven, hauki ja siika',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Överboda Fiskelag',
    lat: 59.926659567572436,  
    lng: 20.901367570962133,
    lajit: 'ahven ja hauki',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Finnö bys samfällda vattenområde',
    lat: 59.863739152556086,   
    lng: 21.070466073910676,
    lajit: 'ahven ja hauki',
    url: '../place/ahvenanmaa'
  },

  {
    paikka: 'ahvenanmaa - Kumlinge bys samfällda fiskevatten',
    lat: 60.2607,
    lng: 20.7959,
    lajit: 'ahven, hauki, meritaimen ja siika',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Seglinge fiskevatten',
    lat: 60.19299, 
    lng: 20.69591,
    lajit: 'ahven, hauki ja siika',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Vårdö by samfällda fiskevatten',
    lat: 60.2526, 
    lng:  20.4360,
    lajit: 'ahven, hauki ja siika',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Hulta',
    lat: 60.2929,
    lng: 20.2688,
    lajit: 'hauki, ahven, kuha ja siika',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Västra Delvik',
    lat: 60.2454, 
    lng: 20.2183,
    lajit: 'ahven, hauki, kuha, meritaimen ja siika',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Sonboda Fiskekortsområde',
    lat: 60.049, 
    lng: 20.4875,
    lajit: 'hauki, ahven ja siika',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Wessingsboda',
    lat: 60.04314829399492, 
    lng: 20.17884469925018,
    lajit: 'ahven, hauki, meritaimen ja siika',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Hellestorp',
    lat: 60.07073751784584,  
    lng: 20.089696828726787,
    lajit: 'ahven ja siika',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Ytterbyviken, Ösundet, Lumparn',
    lat: 60.17489082580804, 
    lng: 20.04077333651818,
    lajit: 'ahven, hauki, kuha, meritaimen ja siika',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Söderby samfällda',
    lat: 60.03815138054828, 
    lng: 20.044626087361017,
    lajit: 'hauki, ahven, siika ja kuha',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Önningeby Sammfälligheter',
    lat: 60.11606002153024, 
    lng: 20.024727919551427,
    lajit: 'hauki ja ahven',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Vesterkalmare bys fiskevatten',
    lat: 60.10266610646099,  
    lng: 19.969066125443156,
    lajit: 'ahven, hauki ja siika',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Lemböte',
    lat: 60.079814859233615,    
    lng: 19.975027029557463,
    lajit: 'ahven, hauki, kuha, meritaimen, lohi ja siika',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Landskapets fiskekortsområden',
    lat: 60.071916240498226,   
    lng: 19.926582101608886,
    lajit: 'meritaimen, siika ja ahven',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Hammarudda',
    lat: 60.07106839705427,   
    lng: 19.829232996983542,
    lajit: 'meritaimen, lohi, ahven ja hauki',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Kungsö',
    lat: 60.098733225856996,   
    lng: 19.84123217113263,
    lajit: 'meritaimen, ahven, lohi ja hauki',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Eckerö Torp fiskevatten',
    lat: 60.16740792851902,   
    lng: 19.597875104227136,
    lajit: 'säyne, ahven, hauki, meritaimen ja lohi',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Björnhuvud',
    lat: 60.177424633454045,    
    lng: 19.659314696552865,
    lajit: 'ahven, hauki, lohi, siika ja meritaimen,',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Södra Marsund',
    lat: 60.2048247210915,    
    lng: 19.68235761648442,
    lajit: 'ahven, meritaimen, hauki, lohi ja siika',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Bovik med flera byars fiskelag',
    lat: 60.26485731807998,     
    lng: 19.699009801572966,
    lajit: 'ahven, hauki ja siika',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Eckerökortet',
    lat: 60.21785658293261,      
    lng: 19.58617537753683,
    lajit: 'ahven, hauki, meritaimen, lohi, siika ja säyne',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Kyrkoby Byalags Fiskevatten',
    lat: 60.223308057224,        
    lng: 19.557620684651535,
    lajit: 'ahven, hauki ja säyne',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Storbykortet',
    lat: 60.22544427240099,       
    lng: 19.5607694942101,
    lajit: 'ahven, hauki ja säyne',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Svartsmara By SFF Svartsmara fiskevatten',
    lat: 60.267422379451475,        
    lng: 19.85188137632562,
    lajit: 'ahven, hauki, kuha ja säyne',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Bergö fiskeområde',
    lat: 60.30424536866668,         
    lng: 19.82708694873097,
    lajit: 'ahven, hauki, ja kuha',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Strömma fiskevatten',
    lat: 60.30491428491801,         
    lng: 19.7785518655223,
    lajit: 'ahven, hauki, siika ja kuha',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Vandöfjärden, Ödkarby viken, Tellviken',
    lat: 60.30591538767172,          
    lng: 19.933005759078778,
    lajit: 'ahven, hauki ja kuha',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Skarpnåtö fiskelag Västerfjärden, leviksfjärden',
    lat: 60.33264777591723,           
    lng: 19.733803542055426,
    lajit: 'ahven, hauki, säyne ja siika',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Snäckö',
    lat: 60.35207577132138,            
    lng: 19.795296400275877,
    lajit: 'ahven, hauki, kuha, siika ja säyne',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Dånö',
    lat: 60.40488672642743,             
    lng: 19.771017433748067,
    lajit: 'ahven, hauki, kuha, meritaimen ja siika',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Östergeta vattenområden',
    lat: 60.42153064703469,              
    lng: 19.940345454643165,
    lajit: 'ahven, hauki, siika, säyne, meritaimen ja lohi',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Bertby fiskevatten',
    lat: 60.35992939605624,              
    lng: 20.121343786405806,
    lajit: 'ahven, hauki, siika ja meritaimen',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Tengsöda Tengsöda fiskelag och samfällda',
    lat: 60.3228152333987,               
    lng: 20.215758878082617,
    lajit: 'meritaimen, ahven, hauki ja siika',
    url: '../place/ahvenanmaa'
  },
  {
    paikka: 'ahvenanmaa - Sibby samfällda vattenområde',
    lat: 60.28553406845738,               
    lng: 20.180813214820475,
    lajit: 'ahven, hauki ja siika',
    url: '../place/ahvenanmaa'
  },
];


//Esteettömät 
//Muonio, Pieni Harjujärvi

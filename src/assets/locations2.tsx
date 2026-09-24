export type Location = {
    paikka: string;
    luiskantyyppi: string;
    lat: number;
    lng: number;
  };

export const veneenlaskupaikat: Location[] = [
  //Lappi ja Norja
  {
    paikka: "Gaskajävri - tunturitien käyttö sallittu ajalla 16.6. - 30.9.<br />Paikalla osittainen pysäköintikielto. Katso ohjeet paikalla.",
    lat: 69.76468, 
    lng: 23.84773,
    luiskantyyppi: ""
  },
  {
    paikka: "Talvik – kylän rannassa laiturin vieressä",
    lat: 70.04251,
    lng: 22.95367,
    luiskantyyppi: ""
  },
  {
    paikka: "Sörstaraumen",
    lat: 69.84297,
    lng: 21.87419,
    luiskantyyppi: ""
  },
  {
    paikka: "Yykeänperä/Skibotn - maksullinen? Laiturilla olevan infon sähköpostiin maksusta ei vastattu",
    lat: 69.39432427405744, 
    lng: 20.267288761830137,
    luiskantyyppi: "betoni"
  },
 
  {
    paikka: "Inarijärvi/Ukonlahti",
    lat: 68.75746,
    lng: 27.45969,
    luiskantyyppi: ""
  },
  {
    paikka: 'Könkämäeno, Järämä',
    lat: 68.4823749875361,  
    lng: 22.111800464155817,
    luiskantyyppi:'betoni'
  },
  {
    paikka: 'Könkämäeno, Iittosuvanto/Saukkokoski',
    lat: 68.75227,  
    lng: 21.40703,
    luiskantyyppi:''
  },
  {
    paikka: 'Könkämäeno, Pätikkä',
    lat: 68.623312, 
    lng:  21.713126,
    luiskantyyppi:''
  },
  //Muonionjoki
  {
    paikka: 'Louhiniva/Pahtaniva',
    lat: 68.249604,  
    lng: 23.135441,
    luiskantyyppi:''
  },
  {
    paikka: 'Pahtosensuvanto/Äijäkosken yläpuoli',
    lat: 67.91632711560909,   
    lng: 23.646046203679216,
    luiskantyyppi:''
  },
  //Kuusamo
  {
    paikka: "Jäkälämutkantie/Jäkälämutkanlampi, Kuusamo",
    lat: 66.2955273358234,
    lng: 29.6295945266381,
    luiskantyyppi: ""
  },
  {
    paikka: "Kemijärventie, Kuusamo",
    lat: 66.2567629394693,
    lng: 29.0684445505883,
    luiskantyyppi: ""
  },
  {
    paikka: "Liikasenvaarantie 150, Kuusamo",
    lat: 66.3704731673104,
    lng: 29.3362505861424,
    luiskantyyppi: ""
  },
  {
    paikka: "Nurmisaarenniemi, Kuusamo",
    lat: 66.3500673541947,
    lng: 29.4558690650611,
    luiskantyyppi: ""
  },
  //Keski-Suomi
  //Saarikoski
  {
    paikka: 'Iisniementie 241, 43100 Saarijärvi',
    lat: 62.75149130764591,   
    lng: 25.411720420435888,
    luiskantyyppi:'venesatama/päällystetty'
  },
  //Karstula
  {
    paikka: 'Pääjärvenmäentie 44, 43500 Karstula',
    lat: 62.87051520747337,  
    lng: 24.777121447191316,
    luiskantyyppi:'venesatama'
  },

  //Kivijärvi
  {
    paikka: 'Nuottala, 43300 Kannonkoski',
    lat: 62.97946425821559,  
    lng: 25.251631311657306,
    luiskantyyppi:'venesatama/betoniluiska'
  },
  {
    paikka: 'Sininentie 496, 43300 Kannonkoski',
    lat:  63.02214034891462,  
    lng: 25.18357003619426,
    luiskantyyppi:'venesatama/betoniluiska'
  },

  {
    paikka: 'Lokakylän satama 16935, 43390 Kivijärvi',
    lat:  63.097949239977815,  
    lng: 25.238635934916264,
    luiskantyyppi:'venesatama'
  },
  {
    paikka: 'Satamatie 3, 43800 Kivijärvi',
    lat:  63.118866663128465,  
    lng: 25.077581299258622,
    luiskantyyppi:'venesatama/vierasvenelaituri'
  },
  {
    paikka: 'Vietsaarentie 199, 43800 Kivijärvi',
    lat:  63.15128512221735,  
    lng: 25.13231359997817,
    luiskantyyppi:'betoniluiska'
  },
  {
    paikka: 'Saarenkyläntie 174, 43960 Kinnula',
    lat: 63.26681635640294,  
    lng: 25.125559620790863,
    luiskantyyppi:'venesatama/vierasvenepaikkoja'
  },
  {
    paikka: 'Rannantie, 43900 Kinnula',
    lat: 63.3580858885375,  
    lng: 25.01608743784891,
    luiskantyyppi:'venesatama/vierasvenepaikkoja'
  },
//Pihtipudas
{
  paikka: 'Ukonniementie 101, 44800 Pihtipudas',
  lat: 63.30975956977927,  
  lng: 25.669893763510114,
  luiskantyyppi:'venesatama/vierasvenelaituri'
}, 
{
  paikka: 'Rantatie 30, 44800 Pihtipudas',
  lat: 63.3596623298154,  
  lng: 25.73891306525759,
  luiskantyyppi:''
},
{
  paikka: 'Mainlahden venesatama, 44800 Pihtipudas',
  lat: 63.38091064150477,  
  lng: 25.543819767462228,
  luiskantyyppi:''
},

//Viitasaari

{
  paikka: 'Muurueentie 117, 44760 Viitasaari',
  lat: 63.13567966020309, 
  lng: 25.4919946391384,
  luiskantyyppi:'soraluiska'
},
{
  paikka: 'Koskitie, 44580 Viitasaari',
  lat: 63.04888553642941,  
  lng: 25.542487835360227,
  luiskantyyppi:'betoniliuska kaislikkoväylään'
},
{
  paikka: 'Toivolantie 50, 44760 Viitasaari',
  lat: 63.14778644019693,  
  lng: 25.53693767230778,
  luiskantyyppi:'venesatama/vierasvenelaituri'
}, 
{
  paikka: 'Rantakuja, 44500 Viitasaari',
  lat: 63.07942225006482,  
  lng: 25.850570086264263,
  luiskantyyppi:'venesatama/betoniluiska'
},
{
  paikka: 'Salonpääntie 2, 44500 Viitasaari',
  lat: 63.06753143116999,  
  lng: 25.847909135622704,
  luiskantyyppi:'venesatama/betoniluiska'
},
{
  paikka: 'Kokkosalmentie 7, 44500 Viitasaari',
  lat: 63.07331465681377,  
  lng: 25.862794962716617,
  luiskantyyppi:'venesatama/betoniluiska ABC:n takana'
},
{
  paikka: 'Hanislahdentie 71, 44670 Viitasaari',
  lat: 63.00393751593578,  
  lng: 26.06346162925601,
  luiskantyyppi:'venesatama/betoniluiska'
},
{
  paikka: 'Äänekoskentie 1803, 44480 Viitasaari',
  lat: 62.92467952735445,  
  lng: 25.813894605506288,
  luiskantyyppi:'betoniluiska P-paikalla'
},
{
  paikka: 'Hietarannantie 91, 72350 Vesanto',
  lat: 62.865488230251074,  
  lng: 26.237634905502812,
  luiskantyyppi:'venesatama/vierasvenepaikkoja'
},
{
  paikka: 'Lauttalantie 75-99, 44350 Konnevesi',
  lat: 62.760713858974555,  
  lng: 26.425542005225008,
  luiskantyyppi:'Neiturin laavun veneluiska'
},
{
  paikka: 'Pyhälahti satama, Pyhälahdentie 951, 44370 Konnevesi',
  lat: 62.80794993936829,  
  lng: 26.093883681407483,
  luiskantyyppi:'venesatama/vierasvenepaikkoja'
},
{
  paikka: "Hankasalmentie 453, Konnevesi",
  lat: 62.5658414094133,
  lng: 26.2441412051495,
  luiskantyyppi: ""
},
{
  paikka: "Satamatie 60, Konnevesi",
  lat: 62.6256325778958,
  lng: 26.3441715287627,
  luiskantyyppi: ""
},
//Äänekoski
{
  paikka: 'Konginkankaan satama, 44400 Äänekoski',
  lat: 62.78297869821481,  
  lng: 25.812376536445882,
  luiskantyyppi:'venesatama/betoniluiska'
},
{
  paikka: 'Sumiaisraitti 51, 44280 Äänekoski',
  lat: 62.66282952461134,  
  lng: 26.04461638094837,
  luiskantyyppi:'venesatama/betoniluiska'
},
{
  paikka: 'Härkinsalmen venelaituri, Härkinsalmentie 50, 44260 Vihijärvi',
  lat: 62.67703814754729,  
  lng: 25.93077089835401,
  luiskantyyppi:'venesatama/vierasvenepaikkoja'
},
{
  paikka: 'Halmevalkamantie 96, 44200 Äänekoski',
  lat: 62.61869615290057,  
  lng: 25.799136731998722,
  luiskantyyppi:'venesatama'
},
{
  paikka: 'Satamaraitti 1, 44200 Suolahti',
  lat: 62.56956016166614,  
  lng: 25.858986772904377,
  luiskantyyppi:'venesatama/vierasvenepaikkoja'
},
{
  paikka: 'Vellamontie 25, 44120 Äänekoski',
  lat: 62.61707415483795,  
  lng: 25.730919469956923,
  luiskantyyppi:'venesatama/betoniluiska/vierasvenepaikkoja'
},
{
  paikka: 'Äänekoskentie 373, 44500 Viitasaari',
  lat: 63.044384588160746,  
  lng: 25.82095965725657,
  luiskantyyppi:''
},
{
  paikka: 'Huutoniementie 17, 44190 Äänekoski',
  lat: 62.6435,  
  lng: 25.5134,
  luiskantyyppi:'venesatama'
},
//Muurame
{
  paikka: "Jaakkolantie, Muurame",
  lat: 62.1232239650068,
  lng: 25.6833708958611,
  luiskantyyppi: ""
},
//Jämsä
{
  paikka: "Oinaalantie 41B, Jämsä",
  lat: 61.9305250748395,
  lng: 25.162201590408,
  luiskantyyppi: ""
},
{
  paikka: "Pajulahdentie 240, Jämsä",
  lat: 61.7839895835978,
  lng: 25.4201474148611,
  luiskantyyppi: ""
},
//Hankasalmi
{
  paikka: "Kirkkorannantie, Hankasalmi",
  lat: 62.3817598990281,
  lng: 26.4268227670621,
  luiskantyyppi: ""
},
{
  paikka: "Konnevedentie, Hankasalmi",
  lat: 62.5651782286107,
  lng: 26.2444679575648,
  luiskantyyppi: ""
},
{
  paikka: "Pynnönniementie, Hankasalmi",
  lat: 62.4394286643915,
  lng: 26.5246315696473,
  luiskantyyppi: ""
},
{
  paikka: "Saksalansaarentie 155, Hankasalmi",
  lat: 62.5252083600177,
  lng: 26.2189702278006,
  luiskantyyppi: ""
},
//Pohjois-Savo
{
  paikka: "Ouluntie 1992, Vieremä",
  lat: 63.7392471446185,
  lng: 26.989210161868,
  luiskantyyppi: ""
},
{
  paikka: "Harjulantie 4, Kaavi",
  lat: 62.969543909764,
  lng: 28.4934717601442,
  luiskantyyppi: ""
},
{
  paikka: "Pisamaniementie, Varkaus",
  lat: 62.2918544018465,
  lng: 28.2632057632234,
  luiskantyyppi: ""
},
//Etelä-Savo
{
  paikka: "Niemeläntie 288, Hirvensalmi",
  lat: 61.726795535293,
  lng: 26.6934245474643,
  luiskantyyppi: ""
},

{
  paikka: "Hiekkarannantie, Mikkeli",
  lat: 62.0170248121614,
  lng: 27.1958093729882,
  luiskantyyppi: ""
},
//Pohjois-Karjala
{
  paikka: "Kivilahdentie 155 /Hiiskoski, Ilomantsi",
  lat: 62.8558852459733,
  lng: 30.6372813600881,
  luiskantyyppi: ""
},
{
  paikka: "Koulurannantie 3, Ilomantsi",
  lat: 62.6403435009199,
  lng: 31.2825491674336,
  luiskantyyppi: ""
},
{
  paikka: "Oravaarantie 510, Tohmajärvi",
  lat: 62.190407671897,
  lng: 30.3668602864269,
  luiskantyyppi: ""
},
//Pirkanmaa
{
  paikka: "Kirkkoveräjäntie, Pirkkala",
  lat: 61.4749252309222,
  lng: 23.6795487477071,
  luiskantyyppi: ""
},
{
  paikka: "Kankahuventie, Pälkäne",
  lat: 61.3529729198707,
  lng: 24.473745357917,
  luiskantyyppi: ""
},
//Päijät-Häme

{
  paikka: "Messilän venesatama",
  lat: 61.020203997904126, 
  lng: 25.56189617744653,
  luiskantyyppi: "Venesatama/betoni"
},
{
  paikka: "Aurinkorannantie, Hartola",
  lat: 61.5676114658456,
  lng: 26.0471575658765,
  luiskantyyppi: ""
},
{
  paikka: "Niemistenseläntie, Hartola",
  lat: 61.657912476078,
  lng: 26.0750680413019,
  luiskantyyppi: ""
},
{
  paikka: "Visainlahdentie, Hartola",
  lat: 61.5886009416777,
  lng: 26.0495639698299,
  luiskantyyppi: ""
},
//Suomenlahti
{
  paikka: "Sarkisalo",
  lat: 60.0740641,
  lng: 22.878961,
  luiskantyyppi: "betoniluiska"
},
{
  paikka: "Bromarv",
  lat: 59.9883512,
  lng: 23.0343092,
  luiskantyyppi: ""
},
{
  paikka: 'Padvantie 1567, Raasepori',
  lat: 60.02012673621459, 
  lng: 22.820398521151443,
  luiskantyyppi:'venesatama/betoniluiska'
},
//Uusimaa
{
  paikka: "Stagsundet/Gennarbyviken",
  lat: 59.922789,
  lng: 23.203305,
  luiskantyyppi: ""
},
{
  paikka: "Hangonkylän satama",
  lat: 59.84216779312628, 
  lng: 22.94817912146712,
  luiskantyyppi: "betoni"
},
{
  paikka: "Hangon itäsatama",
  lat: 59.820564,
  lng: 22.966335,
  luiskantyyppi: ""
},
{
  paikka: "Tvärminnen satama – Ruukintie 13, Hanko",
  lat: 59.83929,
  lng: 23.207301,
  luiskantyyppi: ""
},
{
  paikka: "Lapppohjan satama – Satamatie 48, Hanko",
  lat: 59.899016,
  lng: 23.258294,
  luiskantyyppi: ""
},
{
  paikka: "Bäggön satama – Bäggöntie 1281, Raasepori",
  lat: 59.889412,
  lng: 23.511494,
  luiskantyyppi: ""
},
{
  paikka: "Sommarö – Sommrönranta 14, Raasepori",
  lat: 59.899159,
  lng: 23.41279,
  luiskantyyppi: ""
},
{
  paikka: "Boxströmmen – Näsedal 38, Raasepori",
  lat: 59.93853,
  lng: 23.608844,
  luiskantyyppi: ""
},
{
  paikka: "Korssundet, Barösundintie 421, Inkoo",
  lat: 59.992522,
  lng: 23.848632,
  luiskantyyppi: "luonnonluiska"
},
{
  paikka: "Barösundin lossiranta, Barösundintie 708, Inkoo",
  lat: 59.977316,
  lng: 23.876731,
  luiskantyyppi: "luonnonluiska"
},
{
  paikka: "Inkoon keskusta – Rantatie 3, Inkoo",
  lat: 60.04319,
  lng: 24.007525,
  luiskantyyppi: ""
},
{
  paikka: "Räfsö – Ålöntie 244, Inkoo",
  lat: 60.024517,
  lng: 24.090694,
  luiskantyyppi: ""
},
{
  paikka: "Sandfjärden, Kopparnäsintie 720, Inkoo",
  lat: 60.044975,
  lng: 24.266398,
  luiskantyyppi: "luonnonluiska"
},
{
  paikka: "Störsvik – Kotilahdentie, 02580 Siuntio",
  lat: 60.078985,
  lng: 24.301922,
  luiskantyyppi: ""
},
{
  paikka: "Kantvik – Hupisaarentie, 02460 Kantvik",
  lat: 60.085765,
  lng: 24.382804,
  luiskantyyppi: ""
},
{
  paikka: "Linlo – Linlontie 114, 02480 Kirkkonummi",
  lat: 60.032117,
  lng: 24.422827,
  luiskantyyppi: ""
},
{
  paikka: "Merikylä/Porkkala Marin – Dragetintie 109, 02480 Kirkkonummi",
  lat: 59.983714,
  lng: 24.423537,
  luiskantyyppi: ""
},
{
  paikka: "Ehrenströmintie 1a, Helsinki",
  lat: 60.1547927959656,
  lng: 24.952456175706,
  luiskantyyppi: ""
},
{
  paikka: "Eläintarhantie 10, Helsinki",
  lat: 60.1800021223212,
  lng: 24.941774509871,
  luiskantyyppi: ""
},
{
  paikka: "Isonsarvastontie 3, Helsinki",
  lat: 60.1671554359257,
  lng: 25.0587102768368,
  luiskantyyppi: ""
},
{
  paikka: "Laivastokatu 3, Helsinki",
  lat: 60.1696400964007,
  lng: 24.9657634439338,
  luiskantyyppi: ""
},
{
  paikka: "Marjaniemenranta 1a, Helsinki",
  lat: 60.200780732634,
  lng: 25.0977220268649,
  luiskantyyppi: ""
},
{
  paikka: "Merenkulkijankuja 7, Helsinki",
  lat: 60.2100423119052,
  lng: 25.1862265480815,
  luiskantyyppi: ""
},
{
  paikka: "Mustikkamaantie 1, Helsinki",
  lat: 60.1824768531644,
  lng: 24.9945721941033,
  luiskantyyppi: ""
},
{
  paikka: "Niittyranta 21b, Helsinki",
  lat: 60.2048921240586,
  lng: 25.0979396876294,
  luiskantyyppi: ""
},
{
  paikka: "Mellstenintie 6, Espoo",
  lat: 60.1559107083956,
  lng: 24.7717971863576,
  luiskantyyppi: ""
},
{
  paikka: "Ruukinrannantie 29, Espoo",
  lat: 60.2031118334012,
  lng: 24.8293942857947,
  luiskantyyppi: ""
},


      
];
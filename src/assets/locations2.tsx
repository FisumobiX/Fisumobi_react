export type Location = {
    paikka: string;
    luiskantyyppi: string;
    lat: number;
    lng: number;
  };

export const veneenlaskupaikat: Location[] = [
  //Lappi ja Norja
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
    lat: 68.75227,  
    lng: 21.40703,
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
  //Inari
  {
    paikka: 'Inarijärvi/Ukonlahti',
    lat: 68.75746,  
    lng: 27.45969,
    luiskantyyppi:''
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
  paikka: 'Mainlahdentie 55, 44800 Pihtipudas',
  lat: 63.38091777614846,  
  lng: 25.543820180133643,
  luiskantyyppi:'venesatama/betoniluiska'
},
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
  paikka: 'Hietarannantie 91, 72350 Vesanto',
  lat: 62.865488230251074,  
  lng: 26.237634905502812,
  luiskantyyppi:'venesatama/vierasvenepaikkoja'
},
{
  paikka: 'Pyhälahti satama, Pyhälahdentie 951, 44370 Konnevesi',
  lat: 62.80794993936829,  
  lng: 26.093883681407483,
  luiskantyyppi:'venesatama/vierasvenepaikkoja'
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












  //Äänekoski
  {
    paikka: 'Huutoniementie 17, 44190 Äänekoski',
    lat: 62.6435,  
    lng: 25.5134,
    luiskantyyppi:'venesatama'
  },




  //Norja
  {
    paikka: 'Gaskajävri <br />Huom. tunturitien käyttö sallittu ajalla 16.6. - 30.9.<br />',
    lat: 69.76468,  
    lng: 23.84773,
    luiskantyyppi:''
  },
  {
    paikka: 'Gaskajävri <br />Huom. tunturitien käyttö sallittu ajalla 16.6. - 30.9.<br />',
    lat: 69.76468,  
    lng: 23.84773,
    luiskantyyppi:''
  },

      
];
const stores = [
    {
    name:"RS ART DE LIMPIEZA",
    category:"ART LIMPIEZA",
    adress:"Curapaligue 76",
    contact:"",
    picture:"./assets/stores/artlimpieza.jpg",
    cuponClass: "senior",
    facebook:"",
    instagram:"",
    telephone:"5705-9280",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.1217413523927!2d-58.455568185941594!3d-34.626363680453615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca2511736b4d%3A0x3fec41395221f330!2sAv.%20Curapalig%C3%BCe%2076%2C%20C1406%20DAN%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1614538359948!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id: 1
    },
    {
    name:"BBERAZ TIENDA DE BEBIDAS",
    category:"BEBIDAS",
    adress:"Av Diasz velez 5331",
    contact: "bberazx3@gmail.com",
    picture:"./assets/stores/bebidas.jpg",
    cuponClass: "senior",
    facebook:"",
    instagram:"",
    telephone:"4049-1663",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.841349437018!2d-58.444094285608905!3d-34.608173080458286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca1313e47981%3A0x59993d51812fd23d!2sAv.%20D%C3%ADaz%20V%C3%A9lez%205331%2C%20C1405DCI%20CABA%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1614538452628!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id: 2
    },
    {
    name:"SAN – MA CANDY BAR",
    category:"CANDY BAR",
    adress:"Jose Bonifacio 1752 3° A",
    contact:"maraste1956@hotmail.com",
    picture:"./assets/stores/candybar.jpg",
    cuponClass: "senior",
    facebook:"",
    instagram:"",
    telephone:"4036-5315",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.9764116187043!2d-58.455242385608116!3d-34.63003638045275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca2fc9a0c131%3A0xb4cc827e2f0cce1f!2sJos%C3%A9%20Bonifacio%201752%2C%20C1406%20CABA%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1614538816676!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id: 3
    },
    {
    name:"LACA BEAUTY CABALLITO",
    category:"COSMETICA",
    adress:"Av Pedro Goyena 1608",
    contact:"laurabartolis.ldb@gmail.com",
    picture:"./assets/stores/COSMETICA.jpg",
    cuponClass: "senior",
    facebook:"",
    instagram:"",
    telephone:"4431-2085",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.042733065982!2d-58.452739785608046!3d-34.62836038045306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca303cfc6189%3A0xeafc98fb896ad510!2sAv.%20Pedro%20Goyena%201608%2C%20C1424%20CABA%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1614538866396!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id: 4
    },
    {
    name:"MARTA LALE",
    category:"COSMETICOS",
    adress:"Aranguren y Acoyte",
    contact:"espaciofem@gmail.com",
    picture:"./assets/stores/candelaofertas.jpg",
    cuponClass: "master",
    facebook:"",
    instagram:"",
    telephone:"5025-8136",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.65821714874!2d-58.44058918594219!3d-34.612803180457135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca6a940c9df5%3A0xe7a2114a6a3fab19!2sAv.%20Acoyte%20%26%20Dr.%20Juan%20Felipe%20Aranguren%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1615987811413!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id: 5
    },
    {
    name:"GRIMAVE DECORACIONES",
    category:"DECORACION",
    adress:"Cachimayo 21",
    contact:"evamungiardo@hotmail.com",
    picture:"./assets/stores/DECORACIONES.jpg",
    cuponClass: "senior",
    facebook:"",
    instagram:"",
    telephone:"4432-3672",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.304521020061!2d-58.44507438560838!3d-34.6217440804548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca38e475608b%3A0x43b19ce3275a9909!2sCachimayo%2021%2C%20C1424AQA%20CABA%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1614538903299!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id: 6
    },
    {
    name:"TRISKEL",
    category:"ESTETICA",
    adress:"Valle 579",
    contact:"esteticatriskel@gmail.com",
    picture:"./assets/stores/ESTETRISKEL.jpg",
    cuponClass: "senior",
    facebook:"",
    instagram:"",
    telephone:"3321-9366",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26266.03502967847!2d-58.45711275745414!3d-34.62301143821816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca48c1b5884f%3A0x21d817c8ecb7b7e!2sValle%20579%2C%20C1424%20BVK%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1615987875325!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id: 8
    },
    {
    name:"FARMACIA SM",
    category:"FARMACIA",
    adress:"Av Directorio 1249",
    contact:"smdirectorio3@hotmail.com",
    picture:"./assets/stores/FARMACIA.jpg",
    cuponClass: "senior",
    facebook:"",
    instagram:"",
    telephone:"4988-0033",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.0850451563147!2d-58.42958098560812!3d-34.627291080453446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca526a3a812f%3A0x652a884be25a0527!2sAv.%20Directorio%2050%2C%20C1424CIN%20CABA%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1614538998553!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id: 9

    },
    {
    name:"GRANJA L P",
    category:"GRANJA",
    adress:"Franklin 914",
    contact:"tomascastineiras10@gmail.com",
    picture:"./assets/stores/granjalp.jpg",
    cuponClass: "senior",
    facebook:"",
    instagram:"",
    telephone:"2446-1414",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1160.9875589936821!2d-58.446913177670105!3d-34.61000984299245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca1169db453b%3A0xd53b603d2f7ac785!2sFranklin%20914%2C%20C1405%20DEL%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1614539119281!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id: 11
    },
    {
    name:"LA CATEDRAL BURGUER",
    category:"HAMBURGUER",
    adress:"Doblas 607",
    contact:"helohimapitrelli@gmail.com",
    picture:"./assets/stores/HAMBURGUER.jpg",
    cuponClass: "senior",
    facebook:"",
    instagram:"",
    telephone:"3762-4737",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.210249481032!2d-58.43276688560832!3d-34.6241267804541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca4e4b3a0957%3A0x6a17210f80bf34e2!2sDoblas%20607%2C%20C1424%20BLM%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1614539154341!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id:12
    },
    {
    name:"INGLES &PORTUGUES",
    category:"IDIOMA",
    adress:"Victor Martinez 150",
    contact:"",
    picture:"./assets/stores/idiomas.jpg",
    cuponClass: "master",
    facebook:"",
    instagram:"",
    telephone:"5175-5323",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.2153495555385!2d-58.44695088560833!3d-34.62399788045418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3991156c29%3A0x6653027603e95e7c!2sVictor%20Mart%C3%ADnez%20150%2C%20C1406CDD%20CABA%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1614539188265!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id: 13
    },
    {
    name:"MUNDO PAÑAL",
    category:"PAÑALES",
    adress:"Av La Plata 834",
    contact:"gomahler@gmail.com",
    picture:"./assets/stores/pañales.jpg",
    cuponClass: "junior",
    facebook:"",
    instagram:"",
    telephone:"4922-2912",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.147231130275!2d-58.42911558560827!3d-34.62571948045372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca5226b0f41f%3A0x1e1b1713d1dd681b!2sAv.%20La%20Plata%20834%2C%20C1424%20CABA%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1614539209017!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id:14
    },
    {
    name:"PASTAS CIVITAVECCHIA",
    category:"PASTAS FABR",
    adress:"Av Directorio 934",
    contact:"italgam41@gmail.com",
    picture:"./assets/stores/PASTASCIVI.jpg",
    cuponClass: "senior",
    facebook:"",
    instagram:"",
    telephone:"5663-4218",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.013980926677!2d-58.44246988560809!3d-34.62908698045291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3601ba39f7%3A0xff6bf0ab3b55f203!2sAv.%20Directorio%20934%2C%20C1424CIW%20CABA%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1614539234624!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id:15
    },
    {
    name:"FELICITAS",
    category:"PASTELERIA",
    adress:"Eva Peron 1009 (esq. Del Barco Centenera)",
    contact:"",
    picture:"./assets/stores/pasteleria.jpg",
    cuponClass: "senior",
    facebook:"",
    instagram:"",
    telephone:"5351-5492",
    map:'<iframe src="<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.0156434764335!2d-58.44198044883!3d-34.62904496625042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca4a0204a9b9%3A0x31ad5a1e30238e10!2sAv.%20Eva%20Per%C3%B3n%201009%2C%20C1424CJA%20CABA%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1625391902771!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id:26
    },
    {
    name:"DOLCETTO ANIMAL SHOP",
    category:"PET SHOP",
    adress:"Jose Bonifacio 1681",
    contact:"dolcettoanimalpet@gmail.com",
    picture:"./assets/stores/PETSHOP.jpg",
    cuponClass: "senior",
    facebook:"",
    instagram:"",
    telephone:"3512-6969",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.00244984882!2d-58.45401258560812!3d-34.62937838045284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca2fd9bb6f1b%3A0xad328bce6dd923bf!2sJos%C3%A9%20Bonifacio%201681%2C%20C1406%20GXK%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1614539271224!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id:16
    },
    {
    name:"SALUTE GARIBALDI DIRECTORIO",
    category:"PIZZERIA",
    adress:"Av Directorio 902",
    contact:"miguelito1987@hotmail.com",
    picture:"./assets/stores/PIZZA1.jpg",
    cuponClass: "senior",
    facebook:"",
    instagram:"",
    telephone:"3090-7244",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.0158447271024!2d-58.4419226856082!3d-34.629039880452936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca49f8c11251%3A0xfbeac3738a826003!2sAv.%20Directorio%20902%2C%20C1424CIW%20CABA%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1614539293576!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id: 17
    },
    {
    name:"CONSULT. PODOLÓGICO CABALLITO",
    category:"PODOLOGO",
    adress:"Espinosa 68",
    contact:"horacioraposo@ymail.com",
    picture:"./assets/stores/PODOLOGO.jpg",
    cuponClass: "senior",
    facebook:"",
    instagram:"",
    telephone:"3033-2221",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.3055773735414!2d-58.448516985608386!3d-34.62171738045486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3bfb5297f3%3A0xba4ba0a7768be97a!2sEspinosa%2068%2C%20C1406CBB%20CABA%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1614539324719!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id:18
    },
    {
        name:"OKAY CABALLITO - SPIEDO A LA LEÑA",
        category:"RESTAURANTE",
        adress:"Colpayo 303",
        contact:"",
        picture:"./assets/stores/COLPAYO1.jpg",
        cuponClass: "senior",
        facebook:"",
        instagram:"",
        telephone:"6000-6400",
        map:'<iframe src="<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.4999619698942!2d-58.443606684387724!3d-34.61680388045608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3f9ef4b133%3A0xea9e8379aec22858!2sColpayo%20303%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1624241598211!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        id: 10
    },
    {
    name:"ESTUDIO AFRICA",
    category:"ROPA TRABAJO",
    adress:"Rivadavia 5283",
    contact:"info@estudioafrica.com.ar",
    picture:"./assets/stores/indumentaria.jpg",
    cuponClass: "senior",
    facebook:"",
    instagram:"",
    telephone:"5478-9248",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.3884816722207!2d-58.44230958519468!3d-34.619621865845886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca4755f54117%3A0x965b67b6673fb69e!2sGaler%C3%ADa%20Caribe%2C%20Av.%20Rivadavia%205283%2C%20C1424CEH%20CABA%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1615987913377!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id: 19
    },
    {
    name:"SPA EQUILIBRIO CHI",
    category:"SPA – CENTRO",
    adress:"Av Juan B Alberdi 1653",
    contact:"",
    picture:"./assets/stores/SPA.jpg",
    cuponClass: "senior",
    facebook:"",
    instagram:"",
    telephone:"2243-3925",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.087170029603!2d-58.454087685608144!3d-34.627237380453444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca25549a1aff%3A0x2160223cf5e4d2e!2sAv.%20Juan%20Bautista%20Alberdi%201653%2C%20C1406%20CABA%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1614539363087!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id: 20
    },
    {
    name:"TELMAX TELEFONIA",
    category:"TELEFONIA",
    adress:"Av La Plata 814",
    contact:"ventas@telmax.com.ar",
    picture:"./assets/stores/telefonia.jpg",
    cuponClass: "senior",
    facebook:"",
    instagram:"",
    telephone:"3797-9621",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.164941572926!2d-58.42911168560827!3d-34.625271880453845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca51897a0b99%3A0x2fea2479843aa44f!2sAv.%20La%20Plata%20814%2C%20C1424%20CABA%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1614539386463!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id:21
    },
    {
    name:"WINGALAJ VIAJES",
    category:"TURISMO",
    adress:"Av Rivadavia 5283",
    contact:"info@wingalaj.tur.ar",
    picture:"./assets/stores/TURISMO.jpg",
    cuponClass: "junior",
    facebook:"",
    instagram:"",
    telephone:"5602-3580",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.3883070227944!2d-58.442309585608456!3d-34.61962628045531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca4755f54117%3A0x965b67b6673fb69e!2sGaler%C3%ADa%20Caribe%2C%20Av.%20Rivadavia%205283%2C%20C1424CEH%20CABA%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1614539411903!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id:22
    },
    {
    name:"CARNES DE BUENOS AIRES",
    category:"VERDULERIA",
    adress:"Malvinas Argentinas 518",
    contact:"",
    picture:"./assets/stores/verdule1.jpg",
    cuponClass: "senior",
    facebook:"",
    instagram:"",
    telephone:"6402-4215",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.9584932659936!2d-58.45136188560806!3d-34.63048918045255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca31a2387fdb%3A0xc17446cc16f2f4a1!2sMalvinas%20Argentinas%20518%2C%20C1406CXL%20CABA%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1614539442146!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id:23
    },
    {
    name:"LISTA NEGRA",
    category:"VINOTECA",
    adress:"Yerbal 1101",
    contact:"listanegra1100@gmail.com",
    picture:"./assets/stores/VINOTECALISTA.jpg",
    cuponClass: "senior",
    facebook:"",
    instagram:"",
    telephone:"6955-1478",
    map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.3261108445345!2d-58.448889485608426!3d-34.621198380454885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3bf7f5a135%3A0x7486a3a1dc42c4f0!2sYerbal%201101%2C%20C1406GJC%20CABA%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1614539461830!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    id: 24
    }
    
    ]

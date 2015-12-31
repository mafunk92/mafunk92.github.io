
function initMap() {
    //map options
    var options = {
        center: {
            lat: 38.70,
            lng: -120.92
        },
        zoom: 7,
        //scrollwheel: false,
        minZoom: 7,
        maxZoom: 13,
        streetViewControl: false,
        scaleControl: false,
        mapTypeControl:false,

    },
    element = document.getElementById('map-canvas'),
    // map
    map = new google.maps.Map(element, options);

    addRest(37.68974,-121.01222,'22191','https://www.google.com/maps/place/Taco+Bell/@37.5177544,-120.8485919,14z/data=!4m7!1m4!3m3!1s0x809106fd9fb07227:0xd56d5b9b5ba217d8!2s2700+Geer+Rd,+Turlock,+CA+95382!3b1!3m1!1s0x0000000000000000:0xf8e0fd90a0077339');


    addRest(37.51778,-120.84858,'22190','https://www.google.com/maps/place/Taco+Bell/@37.5177544,-120.8485919,14z/data=!4m7!1m4!3m3!1s0x809106fd9fb07227:0xd56d5b9b5ba217d8!2s2700+Geer+Rd,+Turlock,+CA+95382!3b1!3m1!1s0x0000000000000000:0xf8e0fd90a0077339');
    addRest(37.76841,-120.84119,'22192','https://www.google.com/maps/place/Taco+Bell/@37.7683951,-120.8413377,14z/data=!4m7!1m4!3m3!1s0x8090f9c8d5461b8b:0x801d3b7d26b200ed!2s901+E+F+St,+Oakdale,+CA+95361!3b1!3m1!1s0x8090f9ced4257151:0x7279373f2d433361');
    addRest(37.59442,-120.93997,'22194','https://www.google.com/maps/place/Taco+Bell/@37.5944333,-120.9421777,14z/data=!4m7!1m4!3m3!1s0x8091aad66c1a20a7:0xa0654681618aa29f!2s2918+E+Whitmore+Ave,+Ceres,+CA+95307!3b1!3m1!1s0x8091aad66c7b5c0f:0x6959769e5c6dfb14');
    addRest(37.4924,-120.87249,'22195','https://www.google.com/maps/place/Taco+Bell/@37.4923949,-120.8747004,14z/data=!4m7!1m4!3m3!1s0x809107bd6481e375:0xdddbfd5277842450!2s2050+W+Main+St,+Turlock,+CA+95380!3b1!3m1!1s0x809107bd614c6d2d:0xfa73026425bc46a7');
    addRest(36.70572,-119.7704,'22198','https://www.google.com/maps/place/Taco+Bell/@36.7057278,-119.7725998,14z/data=!4m7!1m4!3m3!1s0x80945fc16a925257:0x2b7b409331eedd24!2s2639+S+2nd+St,+Fresno,+CA+93706!3b1!3m1!1s0x80945fc16aeaa7b3:0xdffa03ba904d4f4a');
    addRest(36.77989,-119.77303,'22199','https://www.google.com/maps/place/Taco+Bell/@36.7799008,-119.7752378,14z/data=!4m7!1m4!3m3!1s0x80945deccabbbaa1:0x8b4b0fab11d3e29b!2s3095+E+Shields+Ave,+Fresno,+CA+93726!3b1!3m1!1s0x80945decb543a305:0xc08988d90a9c6648');
    addRest(37.98706,-121.24699,'22201','https://www.google.com/maps/place/Taco+Bell/@37.9870847,-121.2491891,14z/data=!4m7!1m4!3m3!1s0x809072b9684a9b0f:0x4d963c2e78219c96!2s4327+CA-88,+Stockton,+CA+95215!3b1!3m1!1s0x809072b95daa32f9:0xb62c84bee48979a4');
    addRest(37.61037,-120.97475,'22202','https://www.google.com/maps/place/Taco+Bell/@37.6104087,-120.9769249,14z/data=!4m7!1m4!3m3!1s0x80905497ea81f37b:0x74080dc4b5dde17d!2s1493+Herndon+Rd,+Modesto,+CA+95351!3b1!3m1!1s0x80905497d8910d17:0x1b60c1cb93fbb5e5');
    addRest(37.1038,-121.01532,'22203','https://www.google.com/maps/place/Taco+Bell/@37.1038096,-121.0175163,14z/data=!4m7!1m4!3m3!1s0x809184c61c0bab3f:0x966e601bafa30451!2s12780+CA-33,+Santa+Nella+Village,+CA+95322!3b1!3m1!1s0x809184c61c0bab3f:0x95e2791addb320e1');
    addRest(37.67777,-120.95825,'22204','https://www.google.com/maps/place/Taco+Bell/@37.6777636,-120.9604488,14z/data=!4m7!1m4!3m3!1s0x8090569be8a09cc9:0x72da7c0f13cf3e3a!2s2517+Oakdale+Rd,+Modesto,+CA+95355!3b1!3m1!1s0x8090569be6516c67:0x6c3542edadadaf60');
    addRest(37.63842,-121.00019,'22205','https://www.google.com/maps/place/Taco+Bell/@37.6383796,-121.0024043,14z/data=!4m7!1m4!3m3!1s0x809053928bfec1b5:0x1434566389518c8e!2s825+9th+St,+Modesto,+CA+95354!3b1!3m1!1s0x809053928ebd23cb:0x97e3e3c45e60844f');
    addRest(37.69985,-121.06708,'22206','https://www.google.com/maps/place/Taco+Bell/@37.6988493,-121.0693759,14z/data=!4m7!1m4!3m3!1s0x809050178d00c439:0xdd60063f745d84df!2s3900+Pelandale+Ave,+Modesto,+CA+95356!3b1!3m1!1s0x0000000000000000:0xc9d0b0f52c003667');
    addRest(38.0028491,-121.293684,'22207','https://www.google.com/maps/place/Taco+Bell/@38.0029072,-121.2936333,14z/data=!4m7!1m4!3m3!1s0x80900ce41e880dbb:0xb0b4afaa1fc217e8!2s5115+West+Ln,+Stockton,+CA+95210!3b1!3m1!1s0x80900ce41e799b43:0xcad3e432314259fb');
    addRest(36.8366448,-119.7919416,'22209','https://www.google.com/maps/place/Taco+Bell/@36.8366319,-119.7919,14z/data=!4m7!1m4!3m3!1s0x809468003262633d:0x8a23b0d93abd9f8e!2s6776+N+Blackstone+Ave,+Fresno,+CA+93710!3b1!3m1!1s0x80946801c9424d5f:0x799072eba436ad24');
    addRest(36.765214,-119.7922648,'22210','https://www.google.com/maps/place/Taco+Bell/@36.7652702,-119.7922173,14z/data=!4m7!1m4!3m3!1s0x80946757f6dd708f:0x13fba6ffc8b2afd7!2s1612+N+Blackstone+Ave,+Fresno,+CA+93703!3b1!3m1!1s0x809467578b47f10b:0xed62d6b505095347');
    addRest(36.8108491,-119.7569324,'22212','https://www.google.com/maps/place/Taco+Bell/@36.8108615,-119.7569669,14z/data=!4m7!1m4!3m3!1s0x80945d0f67a4f899:0x4b6c104e8ad981ec!2s5145+N+Cedar+Ave,+Fresno,+CA+93710!3b1!3m1!1s0x80945d0f60cb2f75:0xb724fcebcc895e9f');
    addRest(37.8103882,-121.2960974,'22213','https://www.google.com/maps/place/Taco+Bell/@37.810342,-121.296112,14z/data=!4m7!1m4!3m3!1s0x8090156463caaa9f:0xfe31a046ab627acf!2s16905+Harlan+Rd,+Lathrop,+CA+95330!3b1!3m1!1s0x80901564646fd369:0xac6f0e5c0d22dd0');
    addRest(37.6457123,-121.031178,'22214','https://www.google.com/maps/place/Taco+Bell/@37.645695,-121.0311668,14z/data=!4m7!1m4!3m3!1s0x809053d3ec77fb91:0x47ed9986715a0a93!2s1416+Kansas+Ave,+Modesto,+CA+95351!3b1!3m1!1s0x809053d3ecaeb7ed:0x1024844307557e34');
    addRest(38.0208407,-121.2704255,'22215','https://www.google.com/maps/place/Taco+Bell/@38.0208276,-121.2703941,14z/data=!4m7!1m4!3m3!1s0x80900cca2adba949:0xf99c227b5e2d3532!2s3714+E+Hammer+Ln,+Stockton,+CA+95212!3b1!3m1!1s0x80900ccbd51ac715:0xf833a216e864abe4');
    addRest(37.3311404,-119.6589238,'22216','https://www.google.com/maps/place/Taco+Bell/@37.3311582,-119.6588675,14z/data=!4m7!1m4!3m3!1s0x80942770a771b0a5:0xc4da021dddcc0d06!2s40020+CA-49,+Oakhurst,+CA+93644!3b1!3m1!1s0x8094277a0a01f413:0x364a9571bf0a8fd6');
    addRest(37.0564064,-120.8824804,'22217','https://www.google.com/maps/place/Taco+Bell/@37.056403,-120.8824774,14z/data=!4m7!1m4!3m3!1s0x80917f426c708c5d:0x93c269551286452f!2s1571+W+Pacheco+Blvd,+Los+Banos,+CA+93635!3b1!3m1!1s0x80917f4269544b39:0xea634e9ebf507121');
    addRest(37.6732421,-121.0377236,'22218','https://www.google.com/maps/place/Taco+Bell/@37.6716493,-121.0353275,14z/data=!4m7!1m4!3m3!1s0x809051a0cd6fa3cb:0x8325958042220000!2s2225+Plaza+Pkwy,+Modesto,+CA+95350!3b1!3m1!1s0x0000000000000000:0xa87dc64b9c4a1723');
    addRest(36.838713,-119.8500467,'22219','https://www.google.com/maps/place/Taco+Bell/@36.8387377,-119.8500489,14z/data=!4m7!1m4!3m3!1s0x809468ed45cd6b2f:0x7d4ef82c76efb78b!2s7085+N+Marks+Ave,+Fresno,+CA+93711!3b1!3m1!1s0x809468ed4679270b:0x51b405172436146c');
    addRest(37.7988769,-120.9992931,'22220','https://www.google.com/maps/place/Taco+Bell/@37.7988842,-120.9988013,14z/data=!4m7!1m4!3m3!1s0x80905be61ea1cb43:0x8040f728c25b8f3d!2s1100+CA-120,+Escalon,+CA+95320!3b1!3m1!1s0x0000000000000000:0x2dfd23ea7fc06cb8');
    addRest(37.6379939,-120.7696796,'22221','https://www.google.com/maps/place/Taco+Bell/@37.6379939,-120.7696849,14z/data=!4m7!1m4!3m3!1s0x8091026509d560db:0x84c60e24bab58ea0!2s12170+Yosemite+Blvd,+Waterford,+CA+95386!3b1!3m1!1s0x8091026508f9554b:0x7c6c360cb503c705');
    addRest(37.7102727,-120.9976798,'22222','https://www.google.com/maps/place/Taco+Bell/@37.7102709,-120.9977222,14z/data=!4m7!1m4!3m3!1s0x809050ce3758fb61:0x888d0c5000aa45a2!2s4911+McHenry+Ave,+Modesto,+CA+95356!3b1!3m1!1s0x809050ce3a0bd18b:0x25932422f5d0a8b2');
    addRest(36.8335303,-119.9175154,'22223','https://www.google.com/maps/place/Taco+Bell/@36.8335303,-119.9175207,14z/data=!4m7!1m4!3m3!1s0x80946f1b5b2e133d:0x83b40988e07b024f!2s6745+N+Golden+State+Blvd,+Fresno,+CA+93722!3b1!3m1!1s0x80946f1b5cc201cb:0xddc59f4490a0da2');
    addRest(37.6650085,-120.9775181,'22224','https://www.google.com/maps/place/Taco+Bell/@37.6650042,-120.977523,14z/data=!4m7!1m4!3m3!1s0x8090541d25bb5c81:0x2144727dbb3d5b5b!2s1438+Coffee+Rd,+Modesto,+CA+95355!3b1!3m1!1s0x8090541d2ef75361:0x89d19f063c87ef27');
    addRest(36.7356084,-119.7311846,'22225','https://www.google.com/maps/place/Taco+Bell/@36.735587,-119.7311771,14z/data=!4m7!1m4!3m3!1s0x80945ee31d0fbcb1:0xa5e3fa85eaf7ebac!2s4972+E+Kings+Canyon+Rd,+Fresno,+CA+93727!3b1!3m1!1s0x80945ee31c84e88f:0x790c0a4dc55cd88b');
    addRest(36.7086332,-119.5566791,'22226','https://www.google.com/maps/place/Taco+Bell/@36.7086195,-119.55636,14z/data=!4m7!1m4!3m3!1s0x8094f8f88b1224fb:0xe83d56c21703eb67!2s524+Academy+Ave,+Sanger,+CA+93657!3b1!3m1!1s0x0000000000000000:0x0200936f23578c6f');
    addRest(37.0573151,-120.8394913,'22389','https://www.google.com/maps/place/Taco+Bell/@37.0573452,-120.8374266,14z/data=!4m7!1m4!3m3!1s0x80917ef016e2777b:0xdbbbd9d7d7514193!2s1236+E+Pacheco+Blvd,+Los+Banos,+CA+93635!3b1!3m1!1s0x0000000000000000:0xd07a0dcb0b9a507b');
    addRest(36.7654855,-119.7365665,'22805','https://www.google.com/maps/place/Taco+Bell/@36.7655324,-119.7365757,14z/data=!4m7!1m4!3m3!1s0x80945e847b98b365:0x2b2e8fffa565066a!2s4857+E+McKinley+Ave,+Fresno,+CA+93703!3b1!3m1!1s0x80945e847b3b3e43:0x2bd5afbe851f9e02');
    addRest(37.7546389,-121.1418147,'23203','https://www.google.com/maps/place/Taco+Bell/@37.7545868,-121.1418115,14z/data=!4m7!1m4!3m3!1s0x80904469cd46e2f7:0x1947878d20fc7650!2s1421+W+Colony+Rd,+Ripon,+CA+95366!3b1!3m1!1s0x80904469d47fd383:0x8e65c72cc399e03e');
    addRest(36.819697,-119.7920791,'24061','https://www.google.com/maps/place/Taco+Bell/@36.819682,-119.7921119,14z/data=!4m7!1m4!3m3!1s0x809467f609a1e865:0x72573ff87bf3192!2s5610+N+Blackstone+Ave,+Fresno,+CA+93710!3b1!3m1!1s0x809467f60ae924c1:0xfd255dc5349febdb');
    addRest(37.4639247,-121.1452041,'24112','https://www.google.com/maps/place/Taco+Bell/@37.4639742,-121.1452061,14z/data=!4m7!1m4!3m3!1s0x8091b3df57bcf7ad:0xcabdf070b3418807!2s1060+Sperry+Ave,+Patterson,+CA+95363!3b1!3m1!1s0x8091b3df5819569b:0xb17d688961c88c6b');
    addRest(36.6370962,-120.6285513,'27693','https://www.google.com/maps/place/Taco+Bell/@36.6370962,-120.6285513,14z/data=!4m7!1m4!3m3!1s0x8093bb792fbeaa2f:0x3f25dacf245b15ce!2s46365+W+Panoche+Rd,+Firebaugh,+CA+93622!3b1!3m1!1s0x8093bb7933fecf91:0x126011dd8c7b79e9');

    addRest(39.7275151,-121.8087981,'27944','https://www.google.com/maps/place/Taco+Bell/@39.7275266,-121.8087866,14z/data=!3m1!5s0x80832880cf2a26a7:0xcf1d0ccdbbd93960!4m7!1m4!3m3!1s0x808328811fb59807:0x4440da7063b96969!2s1930+E+20th+St,+Chico,+CA+95928!3b1!3m1!1s0x808328811f008bb9:0x15ff7f4d1bff2bc');
    addRest(40.587848,-122.3485337,'27945','https://www.google.com/maps/place/Taco+Bell/@40.5878533,-122.3485523,14z/data=!4m7!1m4!3m3!1s0x54d29331a55f6f5f:0xabb7cd5c73c4642f!2s1020+Old+Alturas+Rd,+Redding,+CA+96003!3b1!3m1!1s0x54d29331aff55a49:0xd0add4a072fe6fd7');
    addRest(39.7606352,-121.8511117,'27946','https://www.google.com/maps/place/Taco+Bell/@39.7606195,-121.8494297,14z/data=!4m7!1m4!3m3!1s0x8082d87ba337f0fd:0x9468757a4a3dc947!2s757+East+Ave,+Chico,+CA+95926!3b1!3m1!1s0x8082d87ba2ef6cb7:0x465e7b566c6a8ad8');
    addRest(37.6386711,-120.9303773,'28013','https://www.google.com/maps/place/Taco+Bell/@37.6386777,-120.930386,14z/data=!4m7!1m4!3m3!1s0x80905508e88c963f:0xce67b37e14b4827e!2s3601+Yosemite+Blvd,+Modesto,+CA+95357!3b1!3m1!1s0x8090550092f83b9f:0xe682c0f7a5e964d8');
    addRest(37.3882441,-120.7395854,'28296','https://www.google.com/maps/place/Taco+Bell/@37.3882441,-120.7395907,14z/data=!4m7!1m4!3m3!1s0x80910da07cd8999f:0x3d1acb6f5afc5a6b!2s339+Joseph+Gallo+Dr,+Livingston,+CA+95334!3b1!3m1!1s0x80910da0697288d1:0x889212a307aedbd8');
    addRest(36.8516621,-119.7772802,'28739','https://www.google.com/maps/place/Taco+Bell/@36.8516631,-119.7772543,14z/data=!4m7!1m4!3m3!1s0x809442bb0d990d4b:0x360bfb9a2dda28d1!2s7785+N+First+St,+Fresno,+CA+93720!3b1!3m1!1s0x809442bb0e7a6041:0x7af30eb9bec3cc10');
    addRest(36.7936592,-119.7191774,'28740','https://www.google.com/maps/place/Taco+Bell/@36.793671,-119.7191887,14z/data=!4m7!1m4!3m3!1s0x80945c151bbd4aef:0x39b18728999095e0!2s290+W+Ashlan+Ave,+Clovis,+CA+93612!3b1!3m1!1s0x80945c151bdb2ddd:0x47fc5a967768851d');
    addRest(36.8088784,-119.6768747,'28741','https://www.google.com/maps/place/Taco+Bell/@36.8092095,-119.6752061,14z/data=!4m2!3m1!1s0x0000000000000000:0xc9def94e79383003');
    addRest(36.8081352,-119.7211856,'28742','https://www.google.com/maps/place/Taco+Bell/@36.808132,-119.7211765,14z/data=!4m7!1m4!3m3!1s0x80945c6766e0017f:0xd964464857bad760!2s434+W+Shaw+Ave,+Clovis,+CA+93612!3b1!3m1!1s0x80945c5df5d2e287:0x90b814c7292e970f');
    addRest(36.8359877,-119.7017614,'28743','https://www.google.com/maps/place/Taco+Bell/@36.8359966,-119.7017374,14z/data=!4m7!1m4!3m3!1s0x80945c9ef3f7f2dd:0xe2baa4f351f0b49d!2s830+Herndon+Ave,+Clovis,+CA+93612!3b1!3m1!1s0x80945c9ef6bad989:0x1b502aad100942ef');
    addRest(36.8714382,-119.7662656,'28744','https://www.google.com/maps/place/Taco+Bell/@36.8714621,-119.7662929,14z/data=!4m7!1m4!3m3!1s0x809442f299e6cbd9:0xcf791e3115ae413f!2s1085+E+Champlain+Dr,+Fresno,+CA+93720!3b1!3m1!1s0x809442f299cfae27:0x8a4492c2d797532d');
    addRest(36.8495651,-119.7313786,'28745','https://www.google.com/maps/place/Taco+Bell/@36.8495735,-119.7313915,14z/data=!4m7!1m4!3m3!1s0x80945ccd167b3395:0x6a63877ee63b75e!2s1097+N+Willow+Ave,+Clovis,+CA+93611!3b1!3m1!1s0x80945ccd40866215:0xa9c483a60e802631');
    addRest(36.7375119,-119.7017904,'28746','https://www.google.com/maps/place/Taco+Bell/@36.7375034,-119.7017876,14z/data=!4m7!1m4!3m3!1s0x80945f2ba22fc143:0x251da1a4ddcbe4b5!2s5651+E+Kings+Canyon+Rd,+Fresno,+CA+93727!3b1!3m1!1s0x80945f2b98c9c60d:0xa426122f309b45ca');
    addRest(37.7330793,-120.9555657,'29617','https://www.google.com/maps/place/Taco+Bell/@37.7330793,-120.955571,14z/data=!4m7!1m4!3m3!1s0x8090576d7d1f64f3:0xb48f082fb2b8b3a2!2s2421+Patterson+Rd,+Riverbank,+CA+95367!3b1!3m1!1s0x809057729d8bb20b:0xfa265d3f3780e3c8');
    addRest(37.406085,-120.8526797,'30365','https://www.google.com/maps/place/Taco+Bell/@37.406085,-120.852685,14z/data=!4m7!1m4!3m3!1s0x8091099d7876dd09:0x7d83e1ee1c3556a1!2s8119+Lander+Ave,+Hilmar,+CA+95324!3b1!3m1!1s0x8091099d7876dd09:0x2bd65ef0964db095');
    addRest(37.525817,-120.8835502,'31409','https://www.google.com/maps/place/Taco+Bell/@37.5258633,-120.883565,14z/data=!4m7!1m4!3m3!1s0x8091074462a511f1:0x8a0887832abd9557!2s3606+N+Golden+State+Blvd,+Turlock,+CA+95382!3b1!3m1!1s0x80910744632bc391:0x251584a950af7e82');
    addRest(36.9525416,-120.0770839,'31642','https://www.google.com/maps/place/Taco+Bell/@36.9525416,-120.0770892,14z/data=!4m7!1m4!3m3!1s0x80940b826169defb:0x78e04366aabd67e3!2s1420+Howard+Rd,+Madera,+CA+93637!3b1!3m1!1s0x80940b82613ccc0f:0x6c523c860cb53d0');
    addRest(36.9741499,-120.086295,'31643','https://www.google.com/maps/place/Taco+Bell/@36.9742548,-120.0859652,14z/data=!4m2!3m1!1s0x0000000000000000:0x65648032cf04e2fb');
    addRest(37.7873369,-121.2560829,'31532','https://www.google.com/maps/place/1968+Daniels+St,+Manteca,+CA+95337/@37.7873369,-121.2560829,14z/data=!4m2!3m1!1s0x8090407ad1f154f3:0xe05dff574d7bfb9b');



    var hq = new google.maps.Marker({
        position: {
            lat: 37.7019305,
            lng: -121.0717194
        },
        map: map,
        icon: 'assets/img/office.png',
        title: 'HQ',
        zIndex: google.maps.Marker.MAX_ZINDEX + 1
    });


    //create Marker(lat,lng,title)
    function addRest(lat,lng,title,url) {
        var marker = new google.maps.Marker({
            position: {
                lat: lat,
                lng: lng
            },
            map: map,
            //icon: 'assets/img/rest.png',
            title: title,
            url: url,
        });

        google.maps.event.addListener(marker, 'click', function() {
          //window.location.href = this.url;
          var win = window.open(this.url, '_blank');
          win.focus();
});
    }


};


$(function() {
  smoothScroll(300);
  mobileNav();
});


function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
}


function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

var main = function() {
  $('current.description').show();

  $('.article').click(function() {
      $('.article').removeClass('current');
      $('.description').hide();

      $(this).addClass('current');
      $(this).children('.description').toggle();
    });
  }

$(document).ready(main);


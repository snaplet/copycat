import { TRANSFORMATIONS, NUM_CHECKS } from './testutils'

test('determinism', () => {
  const input = 'some-value'

  const check = (name: string) => {
    const value1 = TRANSFORMATIONS[name](input)

    let i = -1

    while (++i < NUM_CHECKS) {
      expect(TRANSFORMATIONS[name](input)).toEqual(value1)
    }
  }

  Object.keys(TRANSFORMATIONS).forEach(check)
})

test('generated values', () => {
  const count = 10
  const results = {}

  const addResults = (name: string) => {
    const valueResults: unknown[] = []

    let i = -1

    while (++i < count) {
      valueResults.push(TRANSFORMATIONS[name](i))
    }

    results[name] = valueResults
  }

  Object.keys(TRANSFORMATIONS).forEach(addResults)

  expect(results).toMatchInlineSnapshot(`
    Object {
      "bool": Array [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      "char": Array [
        "w",
        "y",
        "4",
        "q",
        "R",
        "0",
        "K",
        "p",
        "l",
        "h",
      ],
      "city": Array [
        "Rochester",
        "Greenwood",
        "Medford",
        "Ceres",
        "Kannapolis",
        "West Seneca",
        "Bradenton",
        "Attleboro",
        "Hoover",
        "Tracy",
      ],
      "country": Array [
        "Romania",
        "New Zealand",
        "Senegal",
        "Cayman Islands",
        "Lesotho",
        "Montserrat",
        "Slovenia",
        "Somalia",
        "Brunei Darussalam",
        "Tanzania",
      ],
      "countryCode": Array [
        "CU",
        "BZ",
        "TC",
        "MY",
        "MH",
        "BM",
        "SA",
        "DJ",
        "FO",
        "GU",
      ],
      "dateString": Array [
        "2006-03-27T02:28:53.000Z",
        "2018-11-07T23:14:40.000Z",
        "1990-07-19T18:31:49.000Z",
        "2018-03-11T14:54:09.000Z",
        "2007-12-24T12:01:37.000Z",
        "1998-03-03T02:38:51.000Z",
        "1986-07-07T06:20:34.000Z",
        "1985-10-10T21:46:19.000Z",
        "1985-02-26T13:35:13.000Z",
        "2017-10-22T22:09:50.000Z",
      ],
      "digit": Array [
        "6",
        "8",
        "0",
        "8",
        "7",
        "8",
        "6",
        "5",
        "5",
        "7",
      ],
      "email": Array [
        "Tyson_Will811@gmail.com",
        "Hardy.Daniel486@hotmail.com",
        "Uriah_Mertz865@yahoo.com",
        "Filomena_Leannon845@gmail.com",
        "Lurline_Goyette232@hotmail.com",
        "Cathy.McLaughlin406@gmail.com",
        "Erna_Lueilwitz257@yahoo.com",
        "Lloyd.Block46@hotmail.com",
        "Alec_Cummings95@hotmail.com",
        "Irma.Hudson664@hotmail.com",
      ],
      "firstName": Array [
        "Marvin",
        "Horace",
        "Carlos",
        "Madalyn",
        "Gregg",
        "Arno",
        "Alexandrea",
        "Kris",
        "Nico",
        "Ahmad",
      ],
      "float": Array [
        11741052796928,
        5239366311608320,
        2454887976927232,
        3092838530940928,
        6816145284268032,
        1950609609588736,
        3906423033692160,
        7631050902601728,
        4040858834305024,
        1116274954338304,
      ],
      "fullName": Array [
        "Tyson Zieme",
        "Hardy Bauch",
        "Uriah Cremin",
        "Filomena Greenfelder",
        "Lurline Ratke",
        "Cathy Haley",
        "Erna Upton",
        "Lloyd Wintheiser",
        "Alec Wehner",
        "Irma McClure",
      ],
      "hex": Array [
        "a",
        "e",
        "2",
        "e",
        "3",
        "2",
        "6",
        "5",
        "5",
        "5",
      ],
      "int": Array [
        2077186399386362,
        8641435982297838,
        4335334937726850,
        6889375862257150,
        4018409803686147,
        5076898419177362,
        124511310905638,
        4092986023554149,
        8459551250448197,
        557095369561765,
      ],
      "ipv4": Array [
        "89.109.152.147",
        "165.233.12.243",
        "115.113.188.16",
        "90.25.8.222",
        "61.218.176.60",
        "44.239.237.179",
        "251.114.15.162",
        "127.191.253.7",
        "1.141.250.68",
        "31.117.134.1",
      ],
      "lastName": Array [
        "Miller",
        "Lubowitz",
        "Lynch",
        "Christiansen",
        "Upton",
        "Sawayn",
        "Nader",
        "Quitzon",
        "Lebsack",
        "Morissette",
      ],
      "mac": Array [
        "8c:ac:fc:1d:8d:83",
        "3a:c4:07:ca:14:c7",
        "e4:68:d3:81:c9:c1",
        "a7:65:6d:9d:f1:c2",
        "55:54:02:35:80:a5",
        "c9:69:54:c4:68:e0",
        "1f:b7:95:ab:7a:40",
        "da:82:fd:88:74:cd",
        "c8:bc:31:c1:fc:b6",
        "33:95:38:86:3b:8c",
      ],
      "oneOf": Array [
        "blue",
        "red",
        "red",
        "green",
        "green",
        "blue",
        "red",
        "red",
        "green",
        "green",
      ],
      "paragraph": Array [
        "Miavira miraso visomiko vi ramiraso rakora komiavi miravi. Koavi kora rasoviyu vikoyu viso, soakovi viramiko raviayu miako vi miko. Koa yumi korako ra viyu komikomi, rami rayua vi viyua mira ra mira raviyuvi.",
        "Yua viyuso sora koraso rasoyuvi so viayu yukoyuvi, mi rayu so yuavira kora. Mira somiso soayu yua so. Soyuko mikoraso koyu vi visora. Vikovira rami vi yumiyu vi yumira somiako. Ramia mi ramia koviraso so yuso. Soviyuko soa vi viayua ko yukoviso so viyuaso.",
        "Mikoviko somiko so rakovi ravisoa, mia ramiayu yuavia yumi vi. Yumia viyusomi viakovi ra sora miyuami kora ko, sovi via mi raso koa koyu visomiso. Sovisora raviso so somirako vikoa yukoyuvi soayu. Koyu soravi viyu ko rami viamira viyuvi, soyuso soyu mikovi visoayu yuako. Miyu miako sovisora vi koviko, miyuviyu ra kovisovi miko ra mirasora.",
        "Somiso vikoviyu so rami virayu via visomi koa. Rayu viyuvi yu miyumi somi yukomiyu, sora yuramiso visovi kora mikovi yusoa. Korami vira rayuavi mirasovi mira ramiyu somiyumi misomi, ko rasoyu mia visoyu somi miavi vi soyua. Kovia yusovia vi rakomi kora mikoyu vikoa vi. Yurayura koa yumi ravirami mirami mi yumi.",
        "Yuso soamiso rayusomi viaso yusovi koyu, so koravi somirayu yusoa somiso ko mikomira yurayu. Yu yuravira mi rakomi somi, sora soayuvi komikoyu vi somi. Soyuako komiyura yu yuvia yukoyu miayu. Viayuso vi komi yurayuso sovi koamira, viso rasoa koyu miyumi yukomiso so raso rasovi. Vikoyua mi kora so raviso, mi miyuavi viravi ra somiyu. Yusoyu somiraso miko visoa ravisovi ra.",
        "Viyura virakoyu misoyu koviravi kovi, via yu yukomiso yuaso koramira ko. Sora rayua yu soyumi yuko so. Miko viako ravi somiyuvi rakoa koyu virasoa yu.",
        "Komi yuayua viyu viramia virayu viyu yusovi ra. Ra rayuraso vira ko yumirami, yu yumiako soayu komi vi rayuvi. So yuviyu yuavira miso sorayu rami. Soviako rasoyu ko yumikora koyuvi vi vira miyuko, ko koyuvia mira sorami mirayuso. Yu somiavi mikoa yusoayu mi yuko. Vi soviso rako yukoyu so soyumira viso virako, ra somi soayua miso soa soyu vi. Yusoami vikoa ramiako ramisoyu koayuvi so, komira komi via mikovira vi komi soyuvi via.",
        "Yumi ko vira vi yuko miaso, miyuso somi so rakomira viami. Rasoviyu so vikoyu koyu vi. So rakoyu ra yuviyu so. Komiko ko yuko ra yumia soyura vikoa, ra koyua komiyura somira rako so rayuviyu. Yu rayusovi yu ramiso vi viso. Yura rasoyuko vira mi yuko yu soyuvi soa, yumi viravi ravi koviso ko kora yuayu mi.",
        "So ramiyuko yusovi miso ra yuvia kora so. Mi mia vikomi vira ravirayu miyu soviayu. Mira yusovi miakovi koyu miyumiso somiko, mikovi mirayua rasoyuvi yura soyukovi soyuko. Miko yuviyumi yuviko komia yukoyuko so kovirami. Yu miyumi koyu somira koa miso viako, sovi yusoa sora mi miso ramiko ravi.",
        "Yuko yu via kora miyuravi. Rakora so ramisora yu soyu. Sora rayusomi miyu ko koasora rakoviko yu, miyuko koavi viayumi vikorami vi kovia mi.",
      ],
      "password": Array [
        "dy@UU%{Ft&ARh",
        "}5%ntSe4{Ab2",
        "m1o]$d}FJ][8",
        "V@zbemv$3eTv",
        "t4N{&#WH{TerQ",
        "l[Q^GNlc}1smLY",
        "d3M[yIu0Di8qKO",
        "e#O}j8dibYB{a$",
        "%oGCss44oOrdPp",
        "FxEACqP0JPM}@",
      ],
      "phoneNumber": Array [
        "+8006685142357",
        "+2261418082010",
        "+1825996036809",
        "+402780423251472",
        "+07275873859187",
        "+7832624291304",
        "+14395490137195",
        "+2646156726632",
        "+212707505903930",
        "+560160465936046",
      ],
      "postalAddress": Array [
        "16 Meggie Street, Trujillo Alto 4591, Saint Vincent and the Grenadines",
        "919 Jayce Springs, Strongsville 4587, Central African Republic",
        "612 River Mountains, Modesto 4719, Costa Rica",
        "172 Jast Stravenue, Blacksburg 2887, Kiribati",
        "588 Walsh Cove, Monterey Park 7717, Northern Mariana Islands",
        "286 Boehm Groves, Jupiter 6770, Azerbaijan",
        "412 Mark View, Homestead 8024, Seychelles",
        "219 Jamil Camp, Anchorage 2621, Macedonia",
        "635 Renner Motorway, Great Falls 3294, American Samoa",
        "940 Marty Falls, Independence 7113, Saint Kitts and Nevis",
      ],
      "scramble": Array [
        "Jjvmu Jylly",
        "Aybad Kfvzl",
        "Ejtya Jlurkq",
        "Wuzztcxb Qytdnshznuy",
        "Qkbbzey Unqub",
        "Songl Pocgs",
        "Ymbo Obztg",
        "Guuyj Nntgmzmaoe",
        "Obsc Izabhc",
        "Uypf LrUjlay",
      ],
      "sentence": Array [
        "Vi misora yu ravi mia yu komiraso, soyu so mikomi misorako yu miayumi so.",
        "Ko yuvi koviko soaviko viyu, vi miko so mikorako rami so vira.",
        "Viako miraviyu soyumi ramisovi yuviko misoako misoyu mirakomi, so korako soayu miyuko soyukovi so.",
        "Virasoyu yuko soviso yua ko somia koyu.",
        "Mi koamia vira yu yusoviso rasoyu sovi, mirasoyu rayuavi miso ramiso rayu.",
        "Vi somiyu komiyuvi misora yu kora.",
        "Ra yuvisoa vikoyu viayu viko ko sorako ko.",
        "Rakoavi vi yuvikomi soviyu mi rasovi yuami misoayu.",
        "Rakomia korayu kovia miyumi yu.",
        "Rakorako raviko viaso ko sorasoyu rayuso yuaviyu, vi soravi raso viyuso yu visoa yuakomi ko.",
      ],
      "streetAddress": Array [
        "246 Fabian Mountains",
        "816 Block Harbors",
        "987 Stark Estates",
        "112 Lemke Track",
        "155 Emard Inlet",
        "527 Towne Flat",
        "178 VonRueden Circle",
        "445 Jaden Manor",
        "611 Nikolaus Knolls",
        "408 Khalil Path",
      ],
      "streetName": Array [
        "Senger Brook",
        "Laron Summit",
        "Becker Streets",
        "Cole Road",
        "Kailyn Lodge",
        "Turner Points",
        "Moore Heights",
        "Mac Square",
        "Reinger Terrace",
        "Delbert Row",
      ],
      "times": Array [
        Array [
          "Soamira",
          "Kovikoyu",
          "Rako",
          "Ramiyu",
          "Viamira",
        ],
        Array [
          "Sovi",
          "Kovi",
          "Rasomi",
          "Yuami",
        ],
        Array [
          "Vira",
          "Mirako",
          "Kovi",
          "Miyumi",
        ],
        Array [
          "Miasora",
          "Kora",
          "Vikoravi",
          "Yuako",
          "Miaso",
        ],
        Array [
          "Kovirami",
          "Rami",
          "Yuviso",
          "Koramira",
        ],
        Array [
          "Visovi",
          "Rakoaso",
          "Mikoyumi",
          "Mikovira",
          "Miayu",
        ],
        Array [
          "Miko",
          "Miyumiyu",
          "Yuaviko",
          "Rakora",
          "Mirayu",
        ],
        Array [
          "Ramirako",
          "Viko",
          "Yuasoa",
          "Raso",
          "Raso",
        ],
        Array [
          "Mirakoa",
          "Rasoa",
          "Ravira",
          "Sovia",
        ],
        Array [
          "Yura",
          "Mira",
          "Ramia",
          "Koasovi",
        ],
      ],
      "timezone": Array [
        "Europe/Berlin",
        "Australia/Sydney",
        "Pacific/Guam",
        "America/Chihuahua",
        "Europe/Belgrade",
        "Australia/Darwin",
        "America/Santiago",
        "America/Monterrey",
        "Europe/Zagreb",
        "Europe/Skopje",
      ],
      "userAgent": Array [
        "Mozilla/5.0 (Windows NT 5.3; rv:12.5) Gecko/20100101 Firefox/12.5.8",
        "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6 rv:5.0; KA) AppleWebKit/536.0.1 (KHTML, like Gecko) Version/7.0.4 Safari/536.0.1",
        "Mozilla/5.0 (Windows; U; Windows NT 5.0) AppleWebKit/536.0.1 (KHTML, like Gecko) Chrome/20.0.815.0 Safari/536.0.1",
        "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.9.9; rv:5.3) Gecko/20100101 Firefox/5.3.4",
        "Mozilla/5.0 (Windows NT 5.0; Win64; x64; rv:9.0) Gecko/20100101 Firefox/9.0.3",
        "Mozilla/5.0 (Windows; U; Windows NT 5.0) AppleWebKit/531.0.0 (KHTML, like Gecko) Chrome/29.0.813.0 Safari/531.0.0",
        "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko",
        "Mozilla/5.0 (Windows; U; Windows NT 6.3) AppleWebKit/534.1.2 (KHTML, like Gecko) Chrome/29.0.884.0 Safari/534.1.2",
        "Mozilla/5.0 (Windows NT 5.2; rv:8.7) Gecko/20100101 Firefox/8.7.1",
        "Mozilla/5.0 (Windows; U; Windows NT 6.2) AppleWebKit/538.1.0 (KHTML, like Gecko) Chrome/34.0.859.0 Safari/538.1.0",
      ],
      "username": Array [
        "Tyson_Will811",
        "Hardy.Daniel486",
        "Uriah_Mertz865",
        "Filomena_Leannon845",
        "Lurline_Goyette232",
        "Cathy.McLaughlin406",
        "Erna_Lueilwitz257",
        "Lloyd.Block46",
        "Alec_Cummings95",
        "Irma.Hudson664",
      ],
      "uuid": Array [
        "061daecd-0821-5236-afd2-f0a6ce4ce23e",
        "d3d3f7bc-24bf-5bf8-8386-375305de949d",
        "65f55fc4-b415-531a-a9b5-e96d0ddaa9b2",
        "280757d1-8704-5be3-ac38-7bc3a920ea92",
        "be7ddc45-4131-5f14-80a9-6acb5e6a630b",
        "899bc5e6-1ed4-5ac6-bd09-da8d997d8aa0",
        "e9551996-1296-5ccf-be01-ae886c75e71f",
        "6af00b2c-f974-53aa-9b72-b131b894045a",
        "9ef6a144-44ac-56ac-9e40-154884e86ab1",
        "8e272f65-cfcb-5992-9b38-ae40774bd14d",
      ],
      "word": Array [
        "Koyuraso",
        "Miyuaso",
        "Yuravi",
        "Rasoviko",
        "Virakora",
        "Rayu",
        "Miko",
        "Rasoami",
        "Viyuko",
        "Yurayumi",
      ],
      "words": Array [
        "Rako yumiko",
        "Misoyumi virami",
        "Somi yumiso",
        "Korami kovi",
        "Mirayu vira miramiyu",
        "Mikorayu yuaviyu",
        "Visoraso vikoyu",
        "Yurami somiavi miko",
        "Komi sovia miko",
        "Vira raviko yurayumi",
      ],
    }
  `)
})

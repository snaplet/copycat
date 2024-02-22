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
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
      ],
      "char": Array [
        "B",
        "D",
        "S",
        "5",
        "2",
        "8",
        "l",
        "X",
        "8",
        "l",
      ],
      "city": Array [
        "Brooklyn Park",
        "Sparks",
        "Canton",
        "St. Peters",
        "Hilo",
        "Cape Coral",
        "Fayetteville",
        "Decatur",
        "Melbourne",
        "Beaumont",
      ],
      "country": Array [
        "Mali",
        "Israel",
        "Congo",
        "Djibouti",
        "Mauritius",
        "Mauritius",
        "Morocco",
        "Cote d'Ivoire",
        "Algeria",
        "Estonia",
      ],
      "countryCode": Array [
        "GE",
        "SN",
        "VC",
        "MS",
        "RU",
        "MA",
        "PG",
        "MK",
        "HR",
        "IO",
      ],
      "dateString": Array [
        "1989-02-02T01:50:46.000Z",
        "2019-08-16T07:35:00.000Z",
        "1996-09-17T09:12:15.000Z",
        "2005-02-06T01:39:33.000Z",
        "1988-09-25T08:24:37.000Z",
        "1984-05-17T04:05:19.000Z",
        "2017-10-10T22:04:02.000Z",
        "2015-04-28T03:27:56.000Z",
        "2012-05-01T17:08:34.000Z",
        "2001-02-18T13:05:43.000Z",
      ],
      "digit": Array [
        "9",
        "9",
        "6",
        "5",
        "8",
        "4",
        "7",
        "5",
        "2",
        "1",
      ],
      "email": Array [
        "Filiberto_Walker71127@bleakcricket.org",
        "Pete.Kassulke82520@fox-min.com",
        "Sam.Dickinson32909@memorableparticular.org",
        "Kyla_Crist96556@cancollaboration.biz",
        "Arielle.Oberbrunner94321@fulljuggernaut.org",
        "Yasmeen_Kutch71216@trainedmower.biz",
        "Mohammed.Streich64013@lost-award.net",
        "Jon_Kovacek49987@treasured-appeal.name",
        "Leopoldo.Hahn37105@twinhusband.net",
        "Vince_Mante46530@strip-lapdog.biz",
      ],
      "firstName": Array [
        "Daphnee",
        "Pearline",
        "Elisa",
        "Lenny",
        "Kailee",
        "Herman",
        "Wilhelmine",
        "Keshawn",
        "Sharon",
        "Cayla",
      ],
      "float": Array [
        7160713753216129,
        8623714756216519,
        2907664520202416,
        5728929856562785,
        8925207268309328,
        1821974564375044,
        7708818009107637,
        7634997838687995,
        5847863928185272,
        1039041630284941,
      ],
      "fullName": Array [
        "Elody Trantow",
        "Betsy Prohaska",
        "Alessandra Waelchi",
        "Stacey Harris",
        "Hertha Turcotte",
        "Terrence Breitenberg",
        "Hiram Rippin",
        "Dock Skiles",
        "Laverne Huel",
        "Bridget Metz",
      ],
      "hex": Array [
        "1",
        "7",
        "0",
        "1",
        "0",
        "4",
        "5",
        "b",
        "8",
        "d",
      ],
      "int": Array [
        7160713753216129,
        8623714756216519,
        2907664520202416,
        5728929856562785,
        8925207268309328,
        1821974564375044,
        7708818009107637,
        7634997838687995,
        5847863928185272,
        1039041630284941,
      ],
      "ipv4": Array [
        "18.25.41.248",
        "236.20.8.162",
        "245.48.91.221",
        "187.131.135.19",
        "230.60.25.183",
        "71.244.188.100",
        "1.23.188.18",
        "216.63.228.225",
        "86.200.206.250",
        "225.122.18.42",
      ],
      "lastName": Array [
        "Gleason",
        "Huel",
        "Moore",
        "Koch",
        "Hills",
        "McDermott",
        "Crooks",
        "Treutel",
        "Kohler",
        "Ebert",
      ],
      "mac": Array [
        "7c:3a:88:43:c3:cd",
        "ed:d8:14:a9:48:2d",
        "aa:46:a1:c2:c1:27",
        "2e:8e:07:27:c3:88",
        "44:73:6e:57:7b:b5",
        "e4:05:da:78:28:72",
        "15:8e:b5:8f:be:23",
        "a6:54:72:a3:17:41",
        "58:cd:4e:df:ed:69",
        "1d:46:62:63:0b:43",
      ],
      "oneOf": Array [
        "red",
        "red",
        "blue",
        "green",
        "green",
        "green",
        "green",
        "blue",
        "green",
        "red",
      ],
      "oneOfString": Array [
        "qua",
        "rer",
        "vit",
        "his",
        "vol",
        "ac",
        "eiu",
        "fod",
        "bon",
        "vol",
      ],
      "paragraph": Array [
        "Tua vita non quam scriberamus unt, caderror sunt numquam id haec consentio ibus finitista. Poetae cupis aut et iis et atis sed, maximper cur stulti nisi ius coniunt. Dixitas cupid quam sit nocet a. Aiunt mirars in quo osarum tamentiumve ne.",
        "Ent libiderat stoicis maxim bene levatum, in habenimum et potes se. Voce autem legenti magnosci omni, iudicis sic at sapientia dolore. Abillud patiat probarum ituro in sine quidem, probam si quod alesse cur quod.",
        "Cuius efficilit confidetur ex itia sed linatem, quidem as non caderi etiam claris. Non pueril secut tamenda ut laetamaris sensibi. Genuit inas exerne omnia laetitos, nunc eos epicabduc stabiliusteq simae estiae. Atque voluptatem sapiens quis in tamentantam nec, quod nomini titudinem insequantur ego sublata. Sent physicis ut non privamus autem. Multa voluptas pacem quae affecere scriptorquate non, aeque rescernimus non sanciret multis inam tot. Int rationem recte publiciatur esto sit quos tem, modus praeterudo dem ad autem quam.",
        "Locum aliquid potendum aut dente. Afranius beate inflammatur endisseren tradit scilicipsa. Quoniam ad doloresse a ad mediocrem malunt, ini quid eodem estias honesse. Praetorest etur beate exis has dicant us, dissidiarit exisse nam posse ut non nostris voluptat. Metu magnam notae ex faciuntur. Consententiae et quid ilo iucunturum, vetuitatque invenus nati autem nam ates non rationum.",
        "Iniuria orum missum quod familla et fecis, placeat poetae sentire factorquem aperitat beatam homin. Liberius etiam voluptatum iucunt sine. Anium as cupiscuntur ades intuemurbes doctrina, quod im aut ferat inmenticiam enda scripta. Ferate malista eas quae auditiam. Dolore incorrupis tamen eganumque conduce ut ego, reiciat est grata interunum cum exis plane. Mala virtutiorem est ea faciunturpius atque affectrice, liberia ineriungim hoc quidem ratio sit deinde voce. Ratione inquitatio aetatione et hoc haereturo, sic vero parant debillum finitatio per perii.",
        "Sciscat voluptas his corrupti pacuvii, nominum si quo necesse multa posuit si dissentitum. Sit inum ne supplicab ab eum, erimpedir est vitae facere de quis sed. Tament aegriti quidemus in autem, vivat atur perveniat neces sit te reprehenim si. Fidam pleris imper omnino qui fuisset us, ne quod dicta munico efacesse maxim. Legis omnino carerit sublat efficercit mihi cupiderem et.",
        "Libidcircum nulla responsumer ipsi probitas. Faciam in quidem tamquam affirmavit praeterum vidercendi. Loco non dolorum sint se quia admodi et, praetulis futurus suis ex entibusque es.",
        "Quidemus tamenturbat tranquillitter pernare utent quidem voluptatem, ponitus et enimo sed nihilique cum. Eius aut legum statua minim, cursio esset et qui quantus eris. Ationiscun et quem beate voluptatem, sunt nam dictum autem migrarere aequi animpensa quam. Eidola est anime numeriter quia alique voluptatem aegritatius.",
        "In habet melius videt negatum qui. Cuius sane expedire fruitur ores, nec teri ullus sensibus aliquam geomet. Tamenimos tam minim siculis quae. Ore quaerenimis videamus dicunumque studiis videat.",
        "Tum afflueret qui omnium omni deniquisse int quod, copullo ut quid sit alienum. Quos cum neque et quam extremum male, nostram tam sitne si quae. Qui atum maximi es theseo et doloratque quanta, inter de fabulis voluptat tamquam. Placetitur quo pugnantium parum fore illis apudines disputaris. Bono vetuit is potestia ad nec esse ne.",
      ],
      "password": Array [
        "UFr0Q]w^BczvdD",
        "rbHi0$XCeXlQSt",
        "JyG9j%ZVW!qAGC",
        "sj%up2&v%JDJ",
        "nWkE]GB3XMMG",
        "}3xW05p7EBB]5",
        "Xx{*}r81B4eeK",
        "Vtm]d6QVFNGQ",
        "l3QBiIfYRMKFL",
        "00FsocgN!#I^4J",
      ],
      "phoneNumber": Array [
        "+160793753216129",
        "+623804756216519",
        "+907694520202416",
        "+728989856562785",
        "+925297268309328",
        "+821994564375044",
        "+708898009107637",
        "+635077838687995",
        "+847923928185272",
        "+39061630284941",
      ],
      "postalAddress": Array [
        "773 Vivienne Crest, Pleasanton 4408, Romania",
        "208 Fay Lane, Revere 1270, Burkina Faso",
        "814 Macejkovic Plaza, Billings 5605, New Zealand",
        "50 Nitzsche Greens, Charleston 6176, Chile",
        "215 Delia Bridge, Malden 7620, Senegal",
        "464 Cummings Bridge, Waipahu 9786, Syrian Arab Republic",
        "119 Cronin Rest, Lincoln 7764, San Marino",
        "367 Herman Groves, Caguas 8057, Armenia",
        "654 Hailie Mountains, Kansas City 7565, Rwanda",
        "525 Sanford Motorway, Vallejo 5388, Western Sahara",
      ],
      "scramble": Array [
        "Hiqez Catragh",
        "Ffuda Jdulaevc",
        "Ctfeyeerfy Hcrbqck",
        "Ycwlmr Qpsuir",
        "Vkzlft Gmakggiv",
        "Idffkjqi Mxvtvnszlkz",
        "Xwjtu Kebocu",
        "Ttwd Xlfcxq",
        "Laawmvr Gubp",
        "Uficzsd Ekox",
      ],
      "sentence": Array [
        "Discens sibus possitatque fatem quos.",
        "Advero quisquamquam inquam ii possit est dolorem synephebos.",
        "Dicunt ut nulla in odia qui doctis et, recte quisitural ita beate sitata voluptatem nostri quoniam.",
        "Vel democullo pronunt sedullam possit suas autem, non faciantur dominter alii antium.",
        "Geometiam vestra ant endum ait necesse cumantiquis.",
        "Ille saepe me voluptat de sentenebas arbitrantur im.",
        "Beateque quibus autem platonium numquam amare peranumquam praetullo.",
        "Etiam migrarernum iis agam ut, nec putatus advertere rerum enim autem.",
        "Omnisi ut sent quibus quia.",
        "Famillius et complectitia eten se perspicuum composset, pertinguantur adipsi et estiae studiosum facimo.",
      ],
      "someOf": Array [
        Array [
          "rock",
        ],
        Array [
          "paper",
          "rock",
        ],
        Array [
          "paper",
        ],
        Array [
          "scissors",
          "paper",
        ],
        Array [
          "rock",
        ],
        Array [
          "scissors",
        ],
        Array [
          "scissors",
          "rock",
        ],
        Array [
          "scissors",
        ],
        Array [
          "paper",
          "scissors",
        ],
        Array [
          "paper",
          "rock",
        ],
      ],
      "state": Array [
        "Massachusetts",
        "Vermont",
        "South Dakota",
        "Kansas",
        "Alaska",
        "Tennessee",
        "Hawaii",
        "Utah",
        "Washington",
        "Maryland",
      ],
      "streetAddress": Array [
        "88 Purdy Trace",
        "195 Michele Mission",
        "73 Nikko Crest",
        "564 Dallas Mount",
        "307 Runolfsson Forks",
        "599 Floy Flats",
        "86 Rath Manor",
        "326 Wiegand Course",
        "782 Bauch View",
        "906 Frami Spurs",
      ],
      "streetName": Array [
        "Horace Trail",
        "Hessel Pine",
        "Wuckert Glen",
        "Meghan Summit",
        "Toy Forge",
        "Alia Street",
        "Jacobs Via",
        "Grace Island",
        "Hansen Junctions",
        "Baylee Street",
      ],
      "times": Array [
        Array [
          "Modo",
          "Ut",
          "Em",
          "Sitne",
        ],
        Array [
          "Volum",
          "Parendum",
          "Deditatem",
          "Artes",
        ],
        Array [
          "Menandis",
          "Una",
          "Tam",
          "An",
          "Nunc",
        ],
        Array [
          "Depravatae",
          "Probest",
          "Ore",
          "Desid",
        ],
        Array [
          "Deteriti",
          "Iis",
          "Quoddam",
          "Quas",
        ],
        Array [
          "Torquatus",
          "Tam",
          "Is",
          "Numquam",
        ],
        Array [
          "Cetere",
          "Aut",
          "Malivola",
          "Ut",
        ],
        Array [
          "Iliorem",
          "Legita",
          "Amicis",
          "Legittantum",
          "Er",
        ],
        Array [
          "Bene",
          "Ut",
          "Quam",
          "Sum",
        ],
        Array [
          "Inut",
          "Enime",
          "Vituptatum",
          "Ad",
          "Verum",
        ],
      ],
      "timezone": Array [
        "Pacific/Auckland",
        "Europe/Berlin",
        "Asia/Muscat",
        "America/Mexico_City",
        "Asia/Dhaka",
        "America/Juneau",
        "America/Mexico_City",
        "Pacific/Honolulu",
        "Asia/Tokyo",
        "Europe/Skopje",
      ],
      "url": Array [
        "https://losehyena.net",
        "https://violentkeyboarding.name",
        "https://troubledmanufacturing.info",
        "https://viethistle.biz",
        "https://deplorebreadcrumb.net",
        "https://uniformrutabaga.com",
        "https://bankruptstake.net",
        "https://riffle-thermals.info",
        "https://long-vodka.net",
        "https://picturepup.biz",
      ],
      "userAgent": Array [
        "Mozilla/5.0 (Windows; U; Windows NT 6.2) AppleWebKit/534.0.0 (KHTML, like Gecko) Chrome/4029.1630.3593.0 Safari/534.0.0",
        "Mozilla/5.0 (Windows; U; Windows NT 6.0) AppleWebKit/533.1.1 (KHTML, like Gecko) Chrome/1869.8131.9851.0 Safari/533.1.1",
        "Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_5_3 rv:2.0; RO) AppleWebKit/538.0.2 (KHTML, like Gecko) Version/6841.576.856 Safari/538.0.2",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10.8; rv:9.7) Gecko/20100101 Firefox/3648.7998.2471",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_0 rv:2.0; MS) AppleWebKit/535.0.2 (KHTML, like Gecko) Version/4687.8503.9710 Safari/535.0.2",
        "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 5.2; Trident/6.0; .NET CLR 1.8.33152.0) Version/8144.604.7400",
        "Mozilla/5.0 (Windows; U; Windows NT 6.2) AppleWebKit/538.0.2 (KHTML, like Gecko) Chrome/179.1078.5152.0 Safari/538.0.2",
        "Mozilla/5.0 (Windows; U; Windows NT 6.1) AppleWebKit/538.1.1 (KHTML, like Gecko) Chrome/3748.9931.8190.0 Safari/538.1.1",
        "Mozilla/5.0 (Windows; U; Windows NT 6.2) AppleWebKit/534.1.1 (KHTML, like Gecko) Chrome/13.7277.6005.0 Safari/534.1.1",
        "Mozilla/5.0 (Windows; U; Windows NT 6.2) AppleWebKit/531.1.1 (KHTML, like Gecko) Chrome/6118.2408.1925.0 Safari/531.1.1",
      ],
      "username": Array [
        "sneer.courthouse71127",
        "pungent.marble82520",
        "amazing.hobbit32909",
        "webbed.elevator96556",
        "dark.valley94321",
        "filthy.bump71216",
        "tug.instinct64013",
        "remediate-spring49987",
        "piddle_sea37105",
        "Vince_Mante46530",
      ],
      "uuid": Array [
        "bf77f3f3-3419-52ef-9354-55f20a169c25",
        "8712a510-02d2-5579-a73a-72373fa4e846",
        "22d47378-a85d-5d75-a3a8-86cb61eb3a0e",
        "e7da5e07-a7fe-5dac-91ab-6b0f529430c5",
        "7fe30a2c-40b1-5492-abe2-3e6fce736dad",
        "1074f696-7128-5378-a2b8-e747c0940ea0",
        "a225b74f-d2c9-5afe-81b6-b9908b36aa36",
        "e11f16ce-3f06-56b6-862f-9b68a20cc735",
        "cc963b7e-a353-588f-825a-279190b206d3",
        "8c766997-b4d2-500c-8d22-e007954d571e",
      ],
      "word": Array [
        "Is",
        "Quod",
        "Quidem",
        "Principlinab",
        "Es",
        "Aequo",
        "Vivam",
        "Inum",
        "Ita",
        "Amicur",
      ],
      "words": Array [
        "Igimus gratiam quod",
        "Erisfacio quid apere",
        "Militaque idua",
        "Esse et fonte",
        "Corporis facil",
        "Cursu stabile",
        "Non dixis sapiena",
        "Conscientia pertinctio ad",
        "Sic oriisque",
        "Eo potest ratio",
      ],
    }
  `)
})

module.exports._countriesrules = {
  ITA: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_2'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: true,
    postalCode: true,
  },
  GBR: {
    state: {
      valueIn: 'short_name',
      types: ['postal_town'],
    },
    city: {
      valueIn: 'long_name',
      types: ['administrative_area_level_2'],
    },
    number: false,
    postalCode: true,
  },
  SMR: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    number: true,
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    postalCode: true,
  },
  USA: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: false,
    postalCode: true,
  },
  CAN: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: false,
    postalCode: true,
  },
  ESP: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_2'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: true,
    postalCode: true,
  },
  NLD: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    city: {
      valueIn: 'short_name',
      types: ['administrative_area_level_2'],
    },
    number: false,
    postalCode: true,
    postalCodeLength: 6,
  },
  BEL: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    city: {
      valueIn: 'short_name',
      types: ['administrative_area_level_2'],
    },
    number: false,
    postalCode: true,
  },
  AUT: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    neighborhood: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    city: {
      valueIn: 'short_name',
      types: ['administrative_area_level_2'],
    },
    number: true,
    postalCode: true,
  },
  HRV: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: false,
    postalCode: true,
    postalCodeLength: 5,
  },
  CYP: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: false,
    postalCode: true,
    postalCodeLength: 4,
  },
  DNK: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    neighborhood: {
      valueIn: 'short_name',
      types: ['sublocality_level_1'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: false,
    postalCode: true,
    postalCodeLength: 4,
  },
  EST: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    neighborhood: {
      valueIn: 'short_name',
      types: ['sublocality_level_1'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: false,
    postalCode: true,
    postalCodeLength: 5,
  },
  FIN: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: false,
    postalCode: true,
    postalCodeLength: 5,
  },
  DEU: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    complement: {
      valueIn: 'long_name',
      types: ['subpremise'],
    },
    neighborhood: {
      valueIn: 'long_name',
      types: ['administrative_area_level_3'],
    },
    number: true,
    postalCode: true,
    postalCodeLength: 5,
  },
  GRC: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    neighborhood: {
      valueIn: 'long_name',
      types: ['administrative_area_level_3'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: false,
    postalCode: true,
    postalCodeLength: 5,
  },
  CZE: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    city: {
      valueIn: 'short_name',
      types: ['sublocality_level_1'],
    },
    neighborhood: false,
    number: false,
    postalCode: true,
    postalCodeLength: 5,
  },
  CHE: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: true,
    postalCode: true,
    postalCodeLength: 4,
  },
  ROU: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: true,
    postalCode: true,
    postalCodeLength: 6,
  },
  HUN: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    neighborhood: {
      valueIn: 'short_name',
      types: ['sublocality_level_1'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: false,
    postalCode: true,
    postalCodeLength: 4,
  },
  IRL: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    neighborhood: {
      valueIn: 'short_name',
      types: ['sublocality_level_1'],
    },
    city: {
      valueIn: 'short_name',
      types: ['postal_town'],
    },
    number: false,
    postalCode: true,
    postalCodeLength: 7,
  },
  LVA: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    neighborhood: {
      valueIn: 'short_name',
      types: ['sublocality_level_1'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: false,
    postalCode: true,
    postalCodeLength: 4,
  },
  LTU: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    city: {
      valueIn: 'short_name',
      types: ['administrative_area_level_2'],
    },
    number: false,
    postalCode: true,
    postalCodeLength: 5,
  },
  LUX: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: false,
    postalCode: true,
    postalCodeLength: 4,
  },
  MLT: {
    state: false,
    number: false,
    street: {
      valueIn: 'long_name',
      types: ['route'],
    },
    neighborhood: {
      valueIn: 'long_name',
      types: [
        'neighborhood',
        'sublocality_level_1',
        'sublocality_level_2',
        'sublocality_level_3',
        'sublocality_level_4',
        'sublocality_level_5',
      ],
    },
    city: {
      valueIn: 'long_name',
      types: ['administrative_area_level_2', 'locality'],
    },
    receiverName: {
      required: true,
    },
    postalCode: true,
  },
  PRT: {
    state: false,
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: false,
    postalCode: true,
    postalCodeLength: 7,
  },
  SVK: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    neighborhood: {
      valueIn: 'short_name',
      types: ['sublocality_level_1'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: false,
    postalCode: true,
    postalCodeLength: 5,
  },
  SVN: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    neighborhood: {
      valueIn: 'short_name',
      types: ['sublocality_level_1'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: false,
    postalCode: true,
    postalCodeLength: 5,
  },
  SWE: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    neighborhood: {
      valueIn: 'short_name',
      types: ['postal_town'],
    },
    city: {
      valueIn: 'short_name',
      types: ['sublocality_level_1'],
    },
    number: true,
    postalCode: true,
  },
  ARG: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    city: {
      valueIn: 'short_name',
      types: ['administrative_area_level_2'],
    },
    number: false,
    postalCode: true,
    postalCodeLength: 4,
  },
  VAT: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: true,
    postalCode: true,
  },
  BRA: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: false,
    postalCode: true,
  },
  ARE: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    city: {
      valueIn: 'short_name',
      types: [
        {
          valueIn: 'long_name',
          types: ['locality'],
        },
      ],
    },
    number: true,
    postalCode: false,
  },
  RUS: {
    number: false,
    city: {
      valueIn: 'long_name',
      types: ['locality', 'administrative_area_level_2'],
    },
    state: false,
    neighborhood: {
      valueIn: 'long_name',
      types: ['administrative_area_level_3'],
    },
    postalCode: true,
  },
  WWD: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: false,
    postalCode: true,
  },
  ZAF: {
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
    },
    city: {
      valueIn: 'long_name',
      types: ['locality'],
    },
    number: true,
    postalCode: true,
  },
  PAN: {
    state: 'administrative_area_level_1',
    city: 'administrative_are_level_2',
    neighborhood: 'locality',
    number: false,
    postalCode: true,
  },
  PRI: {
    state: 'administrative_area_level_1',
    city: 'administrative_are_level_2',
    neighborhood: 'locality',
    number: false,
    postalCode: true,
  },
}

// _countries.find(i=>i[0]=="US")
module.exports._countries = [
  ['AF', 'AFG'],
  ['AX', 'ALA'],
  ['AL', 'ALB'],
  ['DZ', 'DZA'],
  ['AS', 'ASM'],
  ['AD', 'AND'],
  ['AO', 'AGO'],
  ['AI', 'AIA'],
  ['AQ', 'ATA'],
  ['AG', 'ATG'],
  ['AR', 'ARG'],
  ['AM', 'ARM'],
  ['AW', 'ABW'],
  ['AU', 'AUS'],
  ['AT', 'AUT'],
  ['AZ', 'AZE'],
  ['BS', 'BHS'],
  ['BH', 'BHR'],
  ['BD', 'BGD'],
  ['BB', 'BRB'],
  ['BY', 'BLR'],
  ['BE', 'BEL'],
  ['BZ', 'BLZ'],
  ['BJ', 'BEN'],
  ['BM', 'BMU'],
  ['BT', 'BTN'],
  ['BO', 'BOL'],
  ['BQ', 'BES'],
  ['BA', 'BIH'],
  ['BW', 'BWA'],
  ['BV', 'BVT'],
  ['BR', 'BRA'],
  ['IO', 'IOT'],
  ['BN', 'BRN'],
  ['BG', 'BGR'],
  ['BF', 'BFA'],
  ['BI', 'BDI'],
  ['KH', 'KHM'],
  ['CM', 'CMR'],
  ['CA', 'CAN'],
  ['CV', 'CPV'],
  ['KY', 'CYM'],
  ['CF', 'CAF'],
  ['TD', 'TCD'],
  ['CL', 'CHL'],
  ['CN', 'CHN'],
  ['CX', 'CXR'],
  ['CC', 'CCK'],
  ['CO', 'COL'],
  ['KM', 'COM'],
  ['CG', 'COG'],
  ['CD', 'COD'],
  ['CK', 'COK'],
  ['CR', 'CRI'],
  ['CI', 'CIV'],
  ['HR', 'HRV'],
  ['CU', 'CUB'],
  ['CW', 'CUW'],
  ['CY', 'CYP'],
  ['CZ', 'CZE'],
  ['DK', 'DNK'],
  ['DJ', 'DJI'],
  ['DM', 'DMA'],
  ['DO', 'DOM'],
  ['EC', 'ECU'],
  ['EG', 'EGY'],
  ['SV', 'SLV'],
  ['GQ', 'GNQ'],
  ['ER', 'ERI'],
  ['EE', 'EST'],
  ['ET', 'ETH'],
  ['FK', 'FLK'],
  ['FO', 'FRO'],
  ['FJ', 'FJI'],
  ['FI', 'FIN'],
  ['FR', 'FRA'],
  ['GF', 'GUF'],
  ['PF', 'PYF'],
  ['TF', 'ATF'],
  ['GA', 'GAB'],
  ['GM', 'GMB'],
  ['GE', 'GEO'],
  ['DE', 'DEU'],
  ['GH', 'GHA'],
  ['GI', 'GIB'],
  ['GR', 'GRC'],
  ['GL', 'GRL'],
  ['GD', 'GRD'],
  ['GP', 'GLP'],
  ['GU', 'GUM'],
  ['GT', 'GTM'],
  ['GG', 'GGY'],
  ['GN', 'GIN'],
  ['GW', 'GNB'],
  ['GY', 'GUY'],
  ['HT', 'HTI'],
  ['HM', 'HMD'],
  ['VA', 'VAT'],
  ['HN', 'HND'],
  ['HK', 'HKG'],
  ['HU', 'HUN'],
  ['IS', 'ISL'],
  ['IN', 'IND'],
  ['ID', 'IDN'],
  ['IR', 'IRN'],
  ['IQ', 'IRQ'],
  ['IE', 'IRL'],
  ['IM', 'IMN'],
  ['IL', 'ISR'],
  ['IT', 'ITA'],
  ['JM', 'JAM'],
  ['JP', 'JPN'],
  ['JE', 'JEY'],
  ['JO', 'JOR'],
  ['KZ', 'KAZ'],
  ['KE', 'KEN'],
  ['KI', 'KIR'],
  ['KP', 'PRK'],
  ['KR', 'KOR'],
  ['KW', 'KWT'],
  ['KG', 'KGZ'],
  ['LA', 'LAO'],
  ['LV', 'LVA'],
  ['LB', 'LBN'],
  ['LS', 'LSO'],
  ['LR', 'LBR'],
  ['LY', 'LBY'],
  ['LI', 'LIE'],
  ['LT', 'LTU'],
  ['LU', 'LUX'],
  ['MO', 'MAC'],
  ['MK', 'MKD'],
  ['MG', 'MDG'],
  ['MW', 'MWI'],
  ['MY', 'MYS'],
  ['MV', 'MDV'],
  ['ML', 'MLI'],
  ['MT', 'MLT'],
  ['MH', 'MHL'],
  ['MQ', 'MTQ'],
  ['MR', 'MRT'],
  ['MU', 'MUS'],
  ['YT', 'MYT'],
  ['MX', 'MEX'],
  ['FM', 'FSM'],
  ['MD', 'MDA'],
  ['MC', 'MCO'],
  ['MN', 'MNG'],
  ['ME', 'MNE'],
  ['MS', 'MSR'],
  ['MA', 'MAR'],
  ['MZ', 'MOZ'],
  ['MM', 'MMR'],
  ['NA', 'NAM'],
  ['NR', 'NRU'],
  ['NP', 'NPL'],
  ['NL', 'NLD'],
  ['NC', 'NCL'],
  ['NZ', 'NZL'],
  ['NI', 'NIC'],
  ['NE', 'NER'],
  ['NG', 'NGA'],
  ['NU', 'NIU'],
  ['NF', 'NFK'],
  ['MP', 'MNP'],
  ['NO', 'NOR'],
  ['OM', 'OMN'],
  ['PK', 'PAK'],
  ['PW', 'PLW'],
  ['PS', 'PSE'],
  ['PA', 'PAN'],
  ['PG', 'PNG'],
  ['PY', 'PRY'],
  ['PE', 'PER'],
  ['PH', 'PHL'],
  ['PN', 'PCN'],
  ['PL', 'POL'],
  ['PT', 'PRT'],
  ['PR', 'PRI'],
  ['QA', 'QAT'],
  ['RE', 'REU'],
  ['RO', 'ROU'],
  ['RU', 'RUS'],
  ['RW', 'RWA'],
  ['BL', 'BLM'],
  ['SH', 'SHN'],
  ['KN', 'KNA'],
  ['LC', 'LCA'],
  ['MF', 'MAF'],
  ['PM', 'SPM'],
  ['VC', 'VCT'],
  ['WS', 'WSM'],
  ['SM', 'SMR'],
  ['ST', 'STP'],
  ['SA', 'SAU'],
  ['SN', 'SEN'],
  ['RS', 'SRB'],
  ['SC', 'SYC'],
  ['SL', 'SLE'],
  ['SG', 'SGP'],
  ['SX', 'SXM'],
  ['SK', 'SVK'],
  ['SI', 'SVN'],
  ['SB', 'SLB'],
  ['SO', 'SOM'],
  ['ZA', 'ZAF'],
  ['GS', 'SGS'],
  ['SS', 'SSD'],
  ['ES', 'ESP'],
  ['LK', 'LKA'],
  ['SD', 'SDN'],
  ['SR', 'SUR'],
  ['SJ', 'SJM'],
  ['SZ', 'SWZ'],
  ['SE', 'SWE'],
  ['CH', 'CHE'],
  ['SY', 'SYR'],
  ['TW', 'TWN'],
  ['TJ', 'TJK'],
  ['TZ', 'TZA'],
  ['TH', 'THA'],
  ['TL', 'TLS'],
  ['TG', 'TGO'],
  ['TK', 'TKL'],
  ['TO', 'TON'],
  ['TT', 'TTO'],
  ['TN', 'TUN'],
  ['TR', 'TUR'],
  ['TM', 'TKM'],
  ['TC', 'TCA'],
  ['TV', 'TUV'],
  ['UG', 'UGA'],
  ['UA', 'UKR'],
  ['AE', 'ARE'],
  ['GB', 'GBR'],
  ['US', 'USA'],
  ['UM', 'UMI'],
  ['UY', 'URY'],
  ['UZ', 'UZB'],
  ['VU', 'VUT'],
  ['VE', 'VEN'],
  ['VN', 'VNM'],
  ['VG', 'VGB'],
  ['VI', 'VIR'],
  ['WF', 'WLF'],
  ['EH', 'ESH'],
  ['YE', 'YEM'],
  ['ZM', 'ZMB'],
  ['ZW', 'ZWE'],
  ['XK', 'XKX'],
]

// _cities.find(i => i.countryShortCode=="US")
module.exports._cities = [
  {
    countryName: 'Albania',
    countryShortCode: 'AL',
    regions: [
      {
        name: 'Berat',
        shortCode: '01',
      },
      {
        name: 'Dibër',
        shortCode: '09',
      },
      {
        name: 'Durrës',
        shortCode: '02',
      },
      {
        name: 'Elbasan',
        shortCode: '03',
      },
      {
        name: 'Fier',
        shortCode: '04',
      },
      {
        name: 'Gjirokastër',
        shortCode: '05',
      },
      {
        name: 'Korçë',
        shortCode: '06',
      },
      {
        name: 'Kukës',
        shortCode: '07',
      },
      {
        name: 'Lezhë',
        shortCode: '08',
      },
      {
        name: 'Shkodër',
        shortCode: '10',
      },
      {
        name: 'Tirana',
        shortCode: '11',
      },
      {
        name: 'Vlorë',
        shortCode: '12',
      },
    ],
  },
  {
    countryName: 'Algeria',
    countryShortCode: 'DZ',
    regions: [
      {
        name: 'Adrar',
        shortCode: '01',
      },
      {
        name: 'Aïn Defla',
        shortCode: '44',
      },
      {
        name: 'Aïn Témouchent',
        shortCode: '46',
      },
      {
        name: 'Algiers',
        shortCode: '16',
      },
      {
        name: 'Annaba',
        shortCode: '23',
      },
      {
        name: 'Batna',
        shortCode: '05',
      },
      {
        name: 'Béchar',
        shortCode: '08',
      },
      {
        name: 'Béjaïa',
        shortCode: '06',
      },
      {
        name: 'Biskra',
        shortCode: '07',
      },
      {
        name: 'Blida',
        shortCode: '09',
      },
      {
        name: 'Bordj Bou Arréridj',
        shortCode: '34',
      },
      {
        name: 'Bouïra',
        shortCode: '10',
      },
      {
        name: 'Boumerdès',
        shortCode: '35',
      },
      {
        name: 'Chlef',
        shortCode: '02',
      },
      {
        name: 'Constantine',
        shortCode: '25',
      },
      {
        name: 'Djelfa',
        shortCode: '17',
      },
      {
        name: 'El Bayadh',
        shortCode: '32',
      },
      {
        name: 'El Oued',
        shortCode: '39',
      },
      {
        name: 'El Tarf',
        shortCode: '36',
      },
      {
        name: 'Ghardaïa',
        shortCode: '47',
      },
      {
        name: 'Guelma',
        shortCode: '24',
      },
      {
        name: 'Illizi',
        shortCode: '33',
      },
      {
        name: 'Jijel',
        shortCode: '18',
      },
      {
        name: 'Khenchela',
        shortCode: '40',
      },
      {
        name: 'Laghouat',
        shortCode: '03',
      },
      {
        name: 'Mascara',
        shortCode: '29',
      },
      {
        name: 'Médéa',
        shortCode: '26',
      },
      {
        name: 'Mila',
        shortCode: '43',
      },
      {
        name: 'Mostaganem',
        shortCode: '27',
      },
      {
        name: 'Msila',
        shortCode: '28',
      },
      {
        name: 'Naâma',
        shortCode: '45',
      },
      {
        name: 'Oran',
        shortCode: '31',
      },
      {
        name: 'Ouargla',
        shortCode: '30',
      },
      {
        name: 'Oum el Bouaghi',
        shortCode: '04',
      },
      {
        name: 'Relizane',
        shortCode: '48',
      },
      {
        name: 'Saïda',
        shortCode: '20',
      },
      {
        name: 'Sétif',
        shortCode: '19',
      },
      {
        name: 'Sidi Bel Abbès',
        shortCode: '22',
      },
      {
        name: 'Skikda',
        shortCode: '21',
      },
      {
        name: 'Souk Ahras',
        shortCode: '41',
      },
      {
        name: 'Tamanghasset',
        shortCode: '11',
      },
      {
        name: 'Tébessa',
        shortCode: '12',
      },
      {
        name: 'Tiaret',
        shortCode: '14',
      },
      {
        name: 'Tindouf',
        shortCode: '37',
      },
      {
        name: 'Tipaza',
        shortCode: '42',
      },
      {
        name: 'Tissemsilt',
        shortCode: '38',
      },
      {
        name: 'Tizi Ouzou',
        shortCode: '15',
      },
      {
        name: 'Tlemcen',
        shortCode: '13',
      },
    ],
  },
  {
    countryName: 'Andorra',
    countryShortCode: 'AD',
    regions: [
      {
        name: 'Andorra la Vella',
        shortCode: '07',
      },
      {
        name: 'Canillo',
        shortCode: '02',
      },
      {
        name: 'Encamp',
        shortCode: '03',
      },
      {
        name: 'Escaldes-Engordany',
        shortCode: '08',
      },
      {
        name: 'La Massana',
        shortCode: '04',
      },
      {
        name: 'Ordino',
        shortCode: '05',
      },
      {
        name: 'Sant Julià de Lòria',
        shortCode: '06',
      },
    ],
  },
  {
    countryName: 'Angola',
    countryShortCode: 'AO',
    regions: [
      {
        name: 'Bengo',
        shortCode: 'BGO',
      },
      {
        name: 'Benguela',
        shortCode: 'BGU',
      },
      {
        name: 'Bié',
        shortCode: 'BIE',
      },
      {
        name: 'Cabinda',
        shortCode: 'CAB',
      },
      {
        name: 'Cuando Cubango',
        shortCode: 'CCU',
      },
      {
        name: 'Cuanza Norte',
        shortCode: 'CNO',
      },
      {
        name: 'Cuanza Sul',
        shortCode: 'CUS',
      },
      {
        name: 'Cunene',
        shortCode: 'CNN',
      },
      {
        name: 'Huambo',
        shortCode: 'HUA',
      },
      {
        name: 'Huíla',
        shortCode: 'HUI',
      },
      {
        name: 'Luanda',
        shortCode: 'LUA',
      },
      {
        name: 'Lunda Norte',
        shortCode: 'LNO',
      },
      {
        name: 'Lunda Sul',
        shortCode: 'LSU',
      },
      {
        name: 'Malanje',
        shortCode: 'MAL',
      },
      {
        name: 'Moxico',
        shortCode: 'MOX',
      },
      {
        name: 'Namibe',
        shortCode: 'NAM',
      },
      {
        name: 'Uíge',
        shortCode: 'UIG',
      },
      {
        name: 'Zaire',
        shortCode: 'ZAI',
      },
    ],
  },
  {
    countryName: 'Anguilla',
    countryShortCode: 'AI',
    regions: [
      {
        name: 'Anguilla',
        shortCode: '01',
      },
      {
        name: 'Anguillita Island',
        shortCode: '02',
      },
      {
        name: 'Blowing Rock',
        shortCode: '03',
      },
      {
        name: 'Cove Cay',
        shortCode: '04',
      },
      {
        name: 'Crocus Cay',
        shortCode: '05',
      },
      {
        name: "Deadman's Cay",
        shortCode: '06',
      },
      {
        name: 'Dog Island',
        shortCode: '07',
      },
      {
        name: 'East Cay',
        shortCode: '08',
      },
      {
        name: 'Little Island',
        shortCode: '09',
      },
      {
        name: 'Little Scrub Island',
        shortCode: '10',
      },
      {
        name: 'Mid Cay',
        shortCode: '11',
      },
      {
        name: 'North Cay',
        shortCode: '12',
      },
      {
        name: 'Prickly Pear Cays',
        shortCode: '13',
      },
      {
        name: 'Rabbit Island',
        shortCode: '14',
      },
      {
        name: 'Sandy Island/Sand Island',
        shortCode: '15',
      },
      {
        name: 'Scilly Cay',
        shortCode: '16',
      },
      {
        name: 'Scrub Island',
        shortCode: '17',
      },
      {
        name: 'Seal Island',
        shortCode: '18',
      },
      {
        name: 'Sombrero/Hat Island',
        shortCode: '19',
      },
      {
        name: 'South Cay',
        shortCode: '20',
      },
      {
        name: 'South Wager Island',
        shortCode: '21',
      },
      {
        name: 'West Cay',
        shortCode: '22',
      },
    ],
  },
  {
    countryName: 'Antigua and Barbuda',
    countryShortCode: 'AG',
    regions: [
      {
        name: 'Antigua Island',
        shortCode: '01',
      },
      {
        name: 'Barbuda Island',
        shortCode: '02',
      },
      {
        name: 'Bird Island',
        shortCode: '04',
      },
      {
        name: 'Bishop Island',
        shortCode: '05',
      },
      {
        name: 'Blake Island',
        shortCode: '06',
      },
      {
        name: 'Crump Island',
        shortCode: '09',
      },
      {
        name: 'Dulcina Island',
        shortCode: '10',
      },
      {
        name: 'Exchange Island',
        shortCode: '11',
      },
      {
        name: 'Five Islands',
        shortCode: '12',
      },
      {
        name: 'Great Bird Island',
        shortCode: '13',
      },
      {
        name: 'Green Island',
        shortCode: '14',
      },
      {
        name: 'Guiana Island',
        shortCode: '15',
      },
      {
        name: 'Hawes Island',
        shortCode: '17',
      },
      {
        name: 'Hells Gate Island',
        shortCode: '16',
      },
      {
        name: 'Henry Island',
        shortCode: '18',
      },
      {
        name: 'Johnson Island',
        shortCode: '19',
      },
      {
        name: 'Kid Island',
        shortCode: '20',
      },
      {
        name: 'Lobster Island',
        shortCode: '22',
      },
      {
        name: 'Maiden Island',
        shortCode: '24',
      },
      {
        name: 'Moor Island',
        shortCode: '25',
      },
      {
        name: 'Nanny Island',
        shortCode: '26',
      },
      {
        name: 'Pelican Island',
        shortCode: '27',
      },
      {
        name: 'Prickly Pear Island',
        shortCode: '28',
      },
      {
        name: 'Rabbit Island',
        shortCode: '29',
      },
      {
        name: 'Red Head Island',
        shortCode: '31',
      },
      {
        name: 'Redonda Island',
        shortCode: '03',
      },
      {
        name: 'Sandy Island',
        shortCode: '32',
      },
      {
        name: 'Smith Island',
        shortCode: '33',
      },
      {
        name: 'The Sisters',
        shortCode: '34',
      },
      {
        name: 'Vernon Island',
        shortCode: '35',
      },
      {
        name: 'Wicked Will Island',
        shortCode: '36',
      },
      {
        name: 'York Island',
        shortCode: '37',
      },
    ],
  },
  {
    countryName: 'Argentina',
    countryShortCode: 'AR',
    regions: [
      {
        name: 'Ciudad Autónoma de Buenos Aires',
        shortCode: 'Ciudad Autónoma de Buenos Aires',
      },
      {
        name: 'Buenos Aires',
        shortCode: 'Buenos Aires',
      },
      {
        name: 'Catamarca',
        shortCode: 'Catamarca',
      },
      {
        name: 'Chaco',
        shortCode: 'Chaco',
      },
      {
        name: 'Chubut',
        shortCode: 'Chubut',
      },
      {
        name: 'Córdoba',
        shortCode: 'Córdoba',
      },
      {
        name: 'Corrientes',
        shortCode: 'Corrientes',
      },
      {
        name: 'Entre Ríos',
        shortCode: 'Entre Ríos',
      },
      {
        name: 'Formosa',
        shortCode: 'Formosa',
      },
      {
        name: 'Jujuy',
        shortCode: 'Jujuy',
      },
      {
        name: 'La Pampa',
        shortCode: 'La Pampa',
      },
      {
        name: 'La Rioja',
        shortCode: 'La Rioja',
      },
      {
        name: 'Mendoza',
        shortCode: 'Mendoza',
      },
      {
        name: 'Misiones',
        shortCode: 'Misiones',
      },
      {
        name: 'Neuquén',
        shortCode: 'Neuquén',
      },
      {
        name: 'Río Negro',
        shortCode: 'Río Negro',
      },
      {
        name: 'Salta',
        shortCode: 'Salta',
      },
      {
        name: 'San Juan',
        shortCode: 'San Juan',
      },
      {
        name: 'San Luis',
        shortCode: 'San Luis',
      },
      {
        name: 'Santa Cruz',
        shortCode: 'Santa Cruz',
      },
      {
        name: 'Santa Fe',
        shortCode: 'Santa Fe',
      },
      {
        name: 'Santiago del Estero',
        shortCode: 'Santiago del Estero',
      },
      {
        name: 'Tierra del Fuego',
        shortCode: 'Tierra del Fuego',
      },
      {
        name: 'Tucumán',
        shortCode: 'Tucumán',
      },
    ],
  },
  {
    countryName: 'Armenia',
    countryShortCode: 'AM',
    regions: [
      {
        name: 'Aragatsotn',
        shortCode: 'AG',
      },
      {
        name: 'Ararat',
        shortCode: 'AR',
      },
      {
        name: 'Armavir',
        shortCode: 'AV',
      },
      {
        name: 'Gegharkunik',
        shortCode: 'GR',
      },
      {
        name: 'Kotayk',
        shortCode: 'KT',
      },
      {
        name: 'Lori',
        shortCode: 'LO',
      },
      {
        name: 'Shirak',
        shortCode: 'SH',
      },
      {
        name: 'Syunik',
        shortCode: 'SU',
      },
      {
        name: 'Tavush',
        shortCode: 'TV',
      },
      {
        name: 'Vayots Dzor',
        shortCode: 'VD',
      },
      {
        name: 'Yerevan',
        shortCode: 'ER',
      },
    ],
  },
  {
    countryName: 'Australia',
    countryShortCode: 'AU',
    regions: [
      {
        name: 'Australian Capital Territory',
        shortCode: 'ACT',
      },
      {
        name: 'New South Wales',
        shortCode: 'NSW',
      },
      {
        name: 'Northern Territory',
        shortCode: 'NT',
      },
      {
        name: 'Queensland',
        shortCode: 'QLD',
      },
      {
        name: 'South Australia',
        shortCode: 'SA',
      },
      {
        name: 'Tasmania',
        shortCode: 'TAS',
      },
      {
        name: 'Victoria',
        shortCode: 'VIC',
      },
      {
        name: 'Western Australia',
        shortCode: 'WA',
      },
    ],
  },
  {
    countryName: 'Austria',
    countryShortCode: 'AT',
    regions: [
      {
        name: 'Burgenland',
        shortCode: 'Burgenland',
      },
      {
        name: 'Kärnten',
        shortCode: 'Kärnten',
      },
      {
        name: 'Niederösterreich',
        shortCode: 'Niederösterreich',
      },
      {
        name: 'Oberösterreich',
        shortCode: 'Oberösterreich',
      },
      {
        name: 'Salzburg',
        shortCode: 'Salzburg',
      },
      {
        name: 'Steiermark',
        shortCode: 'Steiermark',
      },
      {
        name: 'Tirol',
        shortCode: 'Tirol',
      },
      {
        name: 'Vorarlberg',
        shortCode: 'Vorarlberg',
      },
      {
        name: 'Wien',
        shortCode: 'Wien',
      },
    ],
  },
  {
    countryName: 'Bahamas',
    countryShortCode: 'BS',
    regions: [
      {
        name: 'Acklins Island',
        shortCode: '01',
      },
      {
        name: 'Berry Islands',
        shortCode: '22',
      },
      {
        name: 'Bimini',
        shortCode: '02',
      },
      {
        name: 'Black Point',
        shortCode: '23',
      },
      {
        name: 'Cat Island',
        shortCode: '03',
      },
      {
        name: 'Central Abaco',
        shortCode: '24',
      },
      {
        name: 'Crooked Island and Long Cay',
        shortCode: '28',
      },
      {
        name: 'East Grand Bahama',
        shortCode: '29',
      },
      {
        name: 'Exuma',
        shortCode: '04',
      },
      {
        name: 'Freeport',
        shortCode: '05',
      },
      {
        name: 'Fresh Creek',
        shortCode: '06',
      },
      {
        name: "Governor's Harbour",
        shortCode: '07',
      },
      {
        name: 'Green Turtle Cay',
        shortCode: '08',
      },
      {
        name: 'Harbour Island',
        shortCode: '09',
      },
      {
        name: 'High Rock',
        shortCode: '10',
      },
      {
        name: 'Inagua',
        shortCode: '11',
      },
      {
        name: 'Kemps Bay',
        shortCode: '12',
      },
      {
        name: 'Long Island',
        shortCode: '13',
      },
      {
        name: 'Marsh Harbour',
        shortCode: '14',
      },
      {
        name: 'Mayaguana',
        shortCode: '15',
      },
      {
        name: 'Moore’s Island',
        shortCode: '40',
      },
      {
        name: 'New Providence',
        shortCode: '16',
      },
      {
        name: 'Nichollstown and Berry Islands',
        shortCode: '17',
      },
      {
        name: 'North Abaco',
        shortCode: '42',
      },
      {
        name: 'North Andros',
        shortCode: '41',
      },
      {
        name: 'North Eleuthera',
        shortCode: '33',
      },
      {
        name: 'Ragged Island',
        shortCode: '18',
      },
      {
        name: 'Rock Sound',
        shortCode: '19',
      },
      {
        name: 'San Salvador and Rum Cay',
        shortCode: '20',
      },
      {
        name: 'Sandy Point',
        shortCode: '21',
      },
      {
        name: 'South Abaco',
        shortCode: '35',
      },
      {
        name: 'South Andros',
        shortCode: '36',
      },
      {
        name: 'South Eleuthera',
        shortCode: '37',
      },
      {
        name: 'West Grand Bahama',
        shortCode: '39',
      },
    ],
  },
  {
    countryName: 'Bahrain',
    countryShortCode: 'BH',
    regions: [
      {
        name: 'Al Janūbīyah',
        shortCode: '14',
      },
      {
        name: 'Al Manāmah',
        shortCode: '13',
      },
      {
        name: 'Al Muḩarraq',
        shortCode: '15',
      },
      {
        name: 'Al Wusţá',
        shortCode: '16',
      },
      {
        name: 'Ash Shamālīyah',
        shortCode: '17',
      },
    ],
  },
  {
    countryName: 'Barbados',
    countryShortCode: 'BB',
    regions: [
      {
        name: 'Christ Church',
        shortCode: '01',
      },
      {
        name: 'Saint Andrew',
        shortCode: '02',
      },
      {
        name: 'Saint George',
        shortCode: '03',
      },
      {
        name: 'Saint James',
        shortCode: '04',
      },
      {
        name: 'Saint John',
        shortCode: '05',
      },
      {
        name: 'Saint Joseph',
        shortCode: '06',
      },
      {
        name: 'Saint Lucy',
        shortCode: '07',
      },
      {
        name: 'Saint Michael',
        shortCode: '08',
      },
      {
        name: 'Saint Peter',
        shortCode: '09',
      },
      {
        name: 'Saint Philip',
        shortCode: '10',
      },
      {
        name: 'Saint Thomas',
        shortCode: '11',
      },
    ],
  },
  {
    countryName: 'Belarus',
    countryShortCode: 'BY',
    regions: [
      {
        name: 'Brest voblast',
        shortCode: 'BR',
      },
      {
        name: 'Gorod Minsk',
        shortCode: 'HM',
      },
      {
        name: 'Homiel voblast',
        shortCode: 'HO',
      },
      {
        name: 'Hrodna voblast',
        shortCode: 'HR',
      },
      {
        name: 'Mahilyow voblast',
        shortCode: 'MA',
      },
      {
        name: 'Minsk voblast',
        shortCode: 'MI',
      },
      {
        name: 'Vitsebsk voblast',
        shortCode: 'VI',
      },
    ],
  },
  {
    countryName: 'Belgium',
    countryShortCode: 'BE',
    regions: [
      {
        name: 'Brussels',
        shortCode: 'BRU',
      },
      {
        name: 'Flanders',
        shortCode: 'VLG',
      },
      {
        name: 'Wallonia',
        shortCode: 'WAL',
      },
    ],
  },
  {
    countryName: 'Belize',
    countryShortCode: 'BZ',
    regions: [
      {
        name: 'Belize District',
        shortCode: 'BZ',
      },
      {
        name: 'Cayo District',
        shortCode: 'CY',
      },
      {
        name: 'Corozal District',
        shortCode: 'CZL',
      },
      {
        name: 'Orange Walk District',
        shortCode: 'OW',
      },
      {
        name: 'Stann Creek District',
        shortCode: 'SC',
      },
      {
        name: 'Toledo District',
        shortCode: 'TOL',
      },
    ],
  },
  {
    countryName: 'Benin',
    countryShortCode: 'BJ',
    regions: [
      {
        name: 'Alibori',
        shortCode: 'AL',
      },
      {
        name: 'Atakora',
        shortCode: 'AK',
      },
      {
        name: 'Atlantique',
        shortCode: 'AQ',
      },
      {
        name: 'Borgou',
        shortCode: 'BO',
      },
      {
        name: 'Collines Department',
        shortCode: 'CO',
      },
      {
        name: 'Donga',
        shortCode: 'DO',
      },
      {
        name: 'Kouffo',
        shortCode: 'KO',
      },
      {
        name: 'Littoral Department',
        shortCode: 'LI',
      },
      {
        name: 'Mono Department',
        shortCode: 'MO',
      },
      {
        name: 'Ouémé',
        shortCode: 'OU',
      },
      {
        name: 'Plateau',
        shortCode: 'PL',
      },
      {
        name: 'Zou',
        shortCode: 'ZO',
      },
    ],
  },
  {
    countryName: 'Bermuda',
    countryShortCode: 'BM',
    regions: [
      {
        name: 'City of Hamilton',
        shortCode: '03',
      },
      {
        name: 'Devonshire Parish',
        shortCode: '01',
      },
      {
        name: 'Hamilton Parish',
        shortCode: '02',
      },
      {
        name: 'Paget Parish',
        shortCode: '04',
      },
      {
        name: 'Pembroke Parish',
        shortCode: '05',
      },
      {
        name: 'Sandys Parish',
        shortCode: '08',
      },
      {
        name: "Smith's Parish",
        shortCode: '09',
      },
      {
        name: 'Southampton Parish',
        shortCode: '10',
      },
      {
        name: "St. George's Parish",
        shortCode: '07',
      },
      {
        name: 'Town of St. George',
        shortCode: '06',
      },
      {
        name: 'Warwick Parish',
        shortCode: '11',
      },
    ],
    countryName: 'Bhutan',
    countryShortCode: 'BT',
    regions: [
      {
        name: 'Bumthang',
        shortCode: '33',
      },
      {
        name: 'Chhukha',
        shortCode: '12',
      },
      {
        name: 'Dagana',
        shortCode: '22',
      },
      {
        name: 'Gasa',
        shortCode: 'GA',
      },
      {
        name: 'Haa',
        shortCode: '13',
      },
      {
        name: 'Lhuntse',
        shortCode: '44',
      },
      {
        name: 'Mongar',
        shortCode: '42',
      },
      {
        name: 'Paro',
        shortCode: '11',
      },
      {
        name: 'Pemagatshel',
        shortCode: '43',
      },
      {
        name: 'Punakha',
        shortCode: '23',
      },
      {
        name: 'Samdrup Jongkhar',
        shortCode: '45',
      },
      {
        name: 'Samtse',
        shortCode: '14',
      },
      {
        name: 'Sarpang',
        shortCode: '31',
      },
      {
        name: 'Thimphu',
        shortCode: '15',
      },
      {
        name: 'Trashigang',
        shortCode: '41',
      },
      {
        name: 'Trashiyangtse',
        shortCode: 'TY',
      },
      {
        name: 'Trongsa',
        shortCode: '32',
      },
      {
        name: 'Tsirang',
        shortCode: '21',
      },
      {
        name: 'Wangdue Phodrang',
        shortCode: '24',
      },
      {
        name: 'Zhemgang',
        shortCode: '34',
      },
    ],
  },
  {
    countryName: 'Bolivia',
    countryShortCode: 'BO',
    regions: [
      {
        name: 'Beni',
        shortCode: 'B',
      },
      {
        name: 'Chuquisaca',
        shortCode: 'H',
      },
      {
        name: 'Cochabamba',
        shortCode: 'C',
      },
      {
        name: 'La Paz',
        shortCode: 'L',
      },
      {
        name: 'Oruro',
        shortCode: 'O',
      },
      {
        name: 'Pando',
        shortCode: 'N',
      },
      {
        name: 'Potosí',
        shortCode: 'P',
      },
      {
        name: 'Santa Cruz',
        shortCode: 'S',
      },
      {
        name: 'Tarija',
        shortCode: 'T',
      },
    ],
  },
  {
    countryName: 'Bosnia and Herzegovina',
    countryShortCode: 'BA',
    regions: [
      {
        name: 'Brčko Distrikt',
        shortCode: 'BRC',
      },
      {
        name: 'Federacija Bosne i Hercegovine',
        shortCode: 'BIH',
      },
      {
        name: 'Republika Srpska',
        shortCode: 'SRP',
      },
    ],
  },
  {
    countryName: 'Brazil',
    countryShortCode: 'BR',
    regions: [
      {
        name: 'Acre',
        shortCode: 'AC',
      },
      {
        name: 'Alagoas',
        shortCode: 'AL',
      },
      {
        name: 'Amapá',
        shortCode: 'AP',
      },
      {
        name: 'Amazonas',
        shortCode: 'AM',
      },
      {
        name: 'Bahia',
        shortCode: 'BA',
      },
      {
        name: 'Ceará',
        shortCode: 'CE',
      },
      {
        name: 'Distrito Federal',
        shortCode: 'DF',
      },
      {
        name: 'Espírito Santo',
        shortCode: 'ES',
      },
      {
        name: 'Goiás',
        shortCode: 'GO',
      },
      {
        name: 'Maranhão',
        shortCode: 'MA',
      },
      {
        name: 'Mato Grosso',
        shortCode: 'MT',
      },
      {
        name: 'Mato Grosso do Sul',
        shortCode: 'MS',
      },
      {
        name: 'Minas Gerais',
        shortCode: 'MG',
      },
      {
        name: 'Pará',
        shortCode: 'PA',
      },
      {
        name: 'Paraíba',
        shortCode: 'PB',
      },
      {
        name: 'Paraná',
        shortCode: 'PR',
      },
      {
        name: 'Pernambuco',
        shortCode: 'PE',
      },
      {
        name: 'Piauí',
        shortCode: 'PI',
      },
      {
        name: 'Rio de Janeiro',
        shortCode: 'RJ',
      },
      {
        name: 'Rio Grande do Norte',
        shortCode: 'RN',
      },
      {
        name: 'Rio Grande do Sul',
        shortCode: 'RS',
      },
      {
        name: 'Rondônia',
        shortCode: 'RO',
      },
      {
        name: 'Roraima',
        shortCode: 'RR',
      },
      {
        name: 'Santa Catarina',
        shortCode: 'SC',
      },
      {
        name: 'São Paulo',
        shortCode: 'SP',
      },
      {
        name: 'Sergipe',
        shortCode: 'SE',
      },
      {
        name: 'Tocantins',
        shortCode: 'TO',
      },
    ],
  },
  {
    countryName: 'British Indian Ocean Territory',
    countryShortCode: 'IO',
    regions: [
      {
        name: 'British Indian Ocean Territory',
        shortCode: 'IO',
      },
    ],
  },
  {
    countryName: 'Brunei Darussalam',
    countryShortCode: 'BN',
    regions: [
      {
        name: 'Belait',
        shortCode: 'BE',
      },
      {
        name: 'Brunei Muara',
        shortCode: 'BM',
      },
      {
        name: 'Temburong',
        shortCode: 'TE',
      },
      {
        name: 'Tutong',
        shortCode: 'TU',
      },
    ],
  },
  {
    countryName: 'Bulgaria',
    countryShortCode: 'BG',
    regions: [
      {
        name: 'Blagoevgrad',
        shortCode: '01',
      },
      {
        name: 'Burgas',
        shortCode: '02',
      },
      {
        name: 'Dobrich',
        shortCode: '08',
      },
      {
        name: 'Gabrovo',
        shortCode: '07',
      },
      {
        name: 'Jambol',
        shortCode: '28',
      },
      {
        name: 'Khaskovo',
        shortCode: '26',
      },
      {
        name: 'Kjustendil',
        shortCode: '10',
      },
      {
        name: 'Kurdzhali',
        shortCode: '09',
      },
      {
        name: 'Lovech',
        shortCode: '11',
      },
      {
        name: 'Montana',
        shortCode: '12',
      },
      {
        name: 'Pazardzhik',
        shortCode: '13',
      },
      {
        name: 'Pernik',
        shortCode: '14',
      },
      {
        name: 'Pleven',
        shortCode: '15',
      },
      {
        name: 'Plovdiv',
        shortCode: '16',
      },
      {
        name: 'Razgrad',
        shortCode: '17',
      },
      {
        name: 'Ruse',
        shortCode: '18',
      },
      {
        name: 'Shumen',
        shortCode: '27',
      },
      {
        name: 'Silistra',
        shortCode: '19',
      },
      {
        name: 'Sliven',
        shortCode: '20',
      },
      {
        name: 'Smoljan',
        shortCode: '21',
      },
      {
        name: 'Sofija',
        shortCode: '23',
      },
      {
        name: 'Sofija-Grad',
        shortCode: '22',
      },
      {
        name: 'Stara Zagora',
        shortCode: '24',
      },
      {
        name: 'Turgovishhe',
        shortCode: '25',
      },
      {
        name: 'Varna',
        shortCode: '03',
      },
      {
        name: 'Veliko Turnovo',
        shortCode: '04',
      },
      {
        name: 'Vidin',
        shortCode: '05',
      },
      {
        name: 'Vraca',
        shortCode: '06',
      },
    ],
  },
  {
    countryName: 'Cambodia',
    countryShortCode: 'KH',
    regions: [
      {
        name: 'Baat Dambang',
        shortCode: '2',
      },
      {
        name: 'Banteay Mean Chey',
        shortCode: '1',
      },
      {
        name: 'Kampong Chaam',
        shortCode: '3',
      },
      {
        name: 'Kampong Chhnang',
        shortCode: '4',
      },
      {
        name: 'Kampong Spueu',
        shortCode: '5',
      },
      {
        name: 'Kampong Thum',
        shortCode: '6',
      },
      {
        name: 'Kampot',
        shortCode: '7',
      },
      {
        name: 'Kandaal',
        shortCode: '8',
      },
      {
        name: 'Kaoh Kong',
        shortCode: '9',
      },
      {
        name: 'Kracheh',
        shortCode: '10',
      },
      {
        name: 'Krong Kaeb',
        shortCode: '23',
      },
      {
        name: 'Krong Pailin',
        shortCode: '24',
      },
      {
        name: 'Krong Preah Sihanouk',
        shortCode: '18',
      },
      {
        name: 'Mondol Kiri',
        shortCode: '11',
      },
      {
        name: 'Otdar Mean Chey',
        shortCode: '22',
      },
      {
        name: 'Phnom Penh',
        shortCode: '12',
      },
      {
        name: 'Pousaat',
        shortCode: '15',
      },
      {
        name: 'Preah Vihear',
        shortCode: '13',
      },
      {
        name: 'Prey Veaeng',
        shortCode: '14',
      },
      {
        name: 'Rotanah Kiri',
        shortCode: '16',
      },
      {
        name: 'Siem Reab',
        shortCode: '17',
      },
      {
        name: 'Stueng Treng',
        shortCode: '19',
      },
      {
        name: 'Svaay Rieng',
        shortCode: '20',
      },
      {
        name: 'Taakaev',
        shortCode: '21',
      },
      {
        name: 'Tbong Khmum',
        shortCode: '25',
      },
    ],
  },
  {
    countryName: 'Canada',
    countryShortCode: 'CA',
    regions: [
      {
        name: 'Alberta',
        shortCode: 'AB',
      },
      {
        name: 'British Columbia',
        shortCode: 'BC',
      },
      {
        name: 'Manitoba',
        shortCode: 'MB',
      },
      {
        name: 'New Brunswick',
        shortCode: 'NB',
      },
      {
        name: 'Newfoundland and Labrador',
        shortCode: 'NL',
      },
      {
        name: 'Northwest Territories',
        shortCode: 'NT',
      },
      {
        name: 'Nova Scotia',
        shortCode: 'NS',
      },
      {
        name: 'Nunavut',
        shortCode: 'NU',
      },
      {
        name: 'Ontario',
        shortCode: 'ON',
      },
      {
        name: 'Prince Edward Island',
        shortCode: 'PE',
      },
      {
        name: 'Quebec',
        shortCode: 'QC',
      },
      {
        name: 'Saskatchewan',
        shortCode: 'SK',
      },
      {
        name: 'Yukon',
        shortCode: 'YT',
      },
    ],
  },
  {
    countryName: 'Cape Verde',
    countryShortCode: 'CV',
    regions: [
      {
        name: 'Boa Vista',
        shortCode: 'BV',
      },
      {
        name: 'Brava',
        shortCode: 'BR',
      },
      {
        name: 'Calheta de São Miguel',
        shortCode: 'CS',
      },
      {
        name: 'Maio',
        shortCode: 'MA',
      },
      {
        name: 'Mosteiros',
        shortCode: 'MO',
      },
      {
        name: 'Paúl',
        shortCode: 'PA',
      },
      {
        name: 'Porto Novo',
        shortCode: 'PN',
      },
      {
        name: 'Praia',
        shortCode: 'PR',
      },
      {
        name: 'Ribeira Brava',
        shortCode: 'RB',
      },
      {
        name: 'Ribeira Grande',
        shortCode: 'RG',
      },
      {
        name: 'Sal',
        shortCode: 'SL',
      },
      {
        name: 'Santa Catarina',
        shortCode: 'CA',
      },
      {
        name: 'Santa Cruz',
        shortCode: 'CR',
      },
      {
        name: 'São Domingos',
        shortCode: 'SD',
      },
      {
        name: 'São Filipe',
        shortCode: 'SF',
      },
      {
        name: 'São Nicolau',
        shortCode: 'SN',
      },
      {
        name: 'São Vicente',
        shortCode: 'SV',
      },
      {
        name: 'Tarrafal',
        shortCode: 'TA',
      },
      {
        name: 'Tarrafal de São Nicolau',
        shortCode: 'TS',
      },
    ],
  },
  {
    countryName: 'Cayman Islands',
    countryShortCode: 'KY',
    regions: [
      {
        name: 'Creek',
      },
      {
        name: 'Eastern',
      },
      {
        name: 'Midland',
      },
      {
        name: 'South Town',
      },
      {
        name: 'Spot Bay',
      },
      {
        name: 'Stake Bay',
      },
      {
        name: 'West End',
      },
      {
        name: 'Western',
      },
    ],
  },
  {
    countryName: 'Central African Republic',
    countryShortCode: 'CF',
    regions: [
      {
        name: 'Bamingui-Bangoran',
        shortCode: 'BB',
      },
      {
        name: 'Bangui',
        shortCode: 'BGF',
      },
      {
        name: 'Basse-Kotto',
        shortCode: 'BK',
      },
      {
        name: 'Haute-Kotto',
        shortCode: 'HK',
      },
      {
        name: 'Haut-Mbomou',
        shortCode: 'HM',
      },
      {
        name: 'Kémo',
        shortCode: 'KG',
      },
      {
        name: 'Lobaye',
        shortCode: 'LB',
      },
      {
        name: 'Mambéré-Kadéï',
        shortCode: 'HS',
      },
      {
        name: 'Mbomou',
        shortCode: 'MB',
      },
      {
        name: 'Nana-Grebizi',
        shortCode: '10',
      },
      {
        name: 'Nana-Mambéré',
        shortCode: 'NM',
      },
      {
        name: "Ombella-M'Poko",
        shortCode: 'MP',
      },
      {
        name: 'Ouaka',
        shortCode: 'UK',
      },
      {
        name: 'Ouham',
        shortCode: 'AC',
      },
      {
        name: 'Ouham Péndé',
        shortCode: 'OP',
      },
      {
        name: 'Sangha-Mbaéré',
        shortCode: 'SE',
      },
      {
        name: 'Vakaga',
        shortCode: 'VK',
      },
    ],
  },
  {
    countryName: 'Chad',
    countryShortCode: 'TD',
    regions: [
      {
        name: 'Bahr el Ghazal',
        shortCode: 'BG',
      },
      {
        name: 'Batha',
        shortCode: 'BA',
      },
      {
        name: 'Borkou',
        shortCode: 'BO',
      },
      {
        name: 'Chari-Baguirmi',
        shortCode: 'CB',
      },
      {
        name: 'Ennedi-Est',
        shortCode: 'EE',
      },
      {
        name: 'Ennedi-Ouest',
        shortCode: 'EO',
      },
      {
        name: 'Guéra',
        shortCode: 'GR',
      },
      {
        name: 'Hadjer Lamis',
        shortCode: 'HL',
      },
      {
        name: 'Kanem',
        shortCode: 'KA',
      },
      {
        name: 'Lac',
        shortCode: 'LC',
      },
      {
        name: 'Logone Occidental',
        shortCode: 'LO',
      },
      {
        name: 'Logone Oriental',
        shortCode: 'LR',
      },
      {
        name: 'Mondoul',
        shortCode: 'MA',
      },
      {
        name: 'Mayo-Kébbi-Est',
        shortCode: 'ME',
      },
      {
        name: 'Moyen-Chari',
        shortCode: 'MC',
      },
      {
        name: 'Ouaddai',
        shortCode: 'OD',
      },
      {
        name: 'Salamat',
        shortCode: 'SA',
      },
      {
        name: 'Sila',
        shortCode: 'SI',
      },
      {
        name: 'Tandjilé',
        shortCode: 'TA',
      },
      {
        name: 'Tibesti',
        shortCode: 'TI',
      },
      {
        name: 'Ville de Ndjamena',
        shortCode: 'ND',
      },
      {
        name: 'Wadi Fira',
        shortCode: 'WF',
      },
    ],
  },
  {
    countryName: 'Chile',
    countryShortCode: 'CL',
    regions: [
      {
        name: 'Aisén del General Carlos Ibáñez del Campo',
        shortCode: 'AI',
      },
      {
        name: 'Antofagasta',
        shortCode: 'AN',
      },
      {
        name: 'Araucanía',
        shortCode: 'AR',
      },
      {
        name: 'Arica y Parinacota',
        shortCode: 'AP',
      },
      {
        name: 'Atacama',
        shortCode: 'AT',
      },
      {
        name: 'Bío-Bío',
        shortCode: 'BI',
      },
      {
        name: 'Coquimbo',
        shortCode: 'CO',
      },
      {
        name: "Libertador General Bernardo O'Higgins",
        shortCode: 'LI',
      },
      {
        name: 'Los Lagos',
        shortCode: 'LL',
      },
      {
        name: 'Los Ríos',
        shortCode: 'LR',
      },
      {
        name: 'Magallanes y Antartica Chilena',
        shortCode: 'MA',
      },
      {
        name: 'Marga-Marga',
        shortCode: '',
      },
      {
        name: 'Maule',
        shortCode: 'ML',
      },
      {
        name: 'Ñuble',
        shortCode: 'NB',
      },
      {
        name: 'Región Metropolitana de Santiago',
        shortCode: 'RM',
      },
      {
        name: 'Tarapacá',
        shortCode: 'TA',
      },
      {
        name: 'Valparaíso',
        shortCode: 'VS',
      },
    ],
  },
  {
    countryName: 'China',
    countryShortCode: 'CN',
    regions: [
      {
        name: 'Anhui',
        shortCode: '34',
      },
      {
        name: 'Beijing',
        shortCode: '11',
      },
      {
        name: 'Chongqing',
        shortCode: '50',
      },
      {
        name: 'Fujian',
        shortCode: '35',
      },
      {
        name: 'Gansu',
        shortCode: '62',
      },
      {
        name: 'Guangdong',
        shortCode: '44',
      },
      {
        name: 'Guangxi',
        shortCode: '45',
      },
      {
        name: 'Guizhou',
        shortCode: '52',
      },
      {
        name: 'Hainan',
        shortCode: '46',
      },
      {
        name: 'Hebei',
        shortCode: '13',
      },
      {
        name: 'Heilongjiang',
        shortCode: '23',
      },
      {
        name: 'Henan',
        shortCode: '41',
      },
      {
        name: 'Hong Kong',
        shortCode: '91',
      },
      {
        name: 'Hubei',
        shortCode: '42',
      },
      {
        name: 'Hunan',
        shortCode: '43',
      },
      {
        name: 'Inner Mongolia',
        shortCode: '15',
      },
      {
        name: 'Jiangsu',
        shortCode: '32',
      },
      {
        name: 'Jiangxi',
        shortCode: '36',
      },
      {
        name: 'Jilin',
        shortCode: '22',
      },
      {
        name: 'Liaoning',
        shortCode: '21',
      },
      {
        name: 'Macau',
        shortCode: '92',
      },
      {
        name: 'Ningxia',
        shortCode: '64',
      },
      {
        name: 'Qinghai',
        shortCode: '63',
      },
      {
        name: 'Shaanxi',
        shortCode: '61',
      },
      {
        name: 'Shandong',
        shortCode: '37',
      },
      {
        name: 'Shanghai',
        shortCode: '31',
      },
      {
        name: 'Shanxi',
        shortCode: '14',
      },
      {
        name: 'Sichuan',
        shortCode: '51',
      },
      {
        name: 'Tianjin',
        shortCode: '12',
      },
      {
        name: 'Tibet',
        shortCode: '54',
      },
      {
        name: 'Xinjiang',
        shortCode: '65',
      },
      {
        name: 'Yunnan',
        shortCode: '53',
      },
      {
        name: 'Zhejiang',
        shortCode: '33',
      },
    ],
  },
  {
    countryName: 'Christmas Island',
    countryShortCode: 'CX',
    regions: [
      {
        name: 'Christmas Island',
        shortCode: 'CX',
      },
    ],
  },
  {
    countryName: 'Colombia',
    countryShortCode: 'CO',
    regions: [
      {
        name: 'Amazonas',
        shortCode: 'AMA',
      },
      {
        name: 'Antioquia',
        shortCode: 'ANT',
      },
      {
        name: 'Arauca',
        shortCode: 'ARA',
      },
      {
        name: 'Archipiélago de San Andrés',
        shortCode: 'SAP',
      },
      {
        name: 'Atlántico',
        shortCode: 'ATL',
      },
      {
        name: 'Bogotá D.C.',
        shortCode: 'DC',
      },
      {
        name: 'Bolívar',
        shortCode: 'BOL',
      },
      {
        name: 'Boyacá',
        shortCode: 'BOY',
      },
      {
        name: 'Caldas',
        shortCode: 'CAL',
      },
      {
        name: 'Caquetá',
        shortCode: 'CAQ',
      },
      {
        name: 'Casanare',
        shortCode: 'CAS',
      },
      {
        name: 'Cauca',
        shortCode: 'CAU',
      },
      {
        name: 'Cesar',
        shortCode: 'CES',
      },
      {
        name: 'Chocó',
        shortCode: 'CHO',
      },
      {
        name: 'Córdoba',
        shortCode: 'COR',
      },
      {
        name: 'Cundinamarca',
        shortCode: 'CUN',
      },
      {
        name: 'Guainía',
        shortCode: 'GUA',
      },
      {
        name: 'Guaviare',
        shortCode: 'GUV',
      },
      {
        name: 'Huila',
        shortCode: 'HUI',
      },
      {
        name: 'La Guajira',
        shortCode: 'LAG',
      },
      {
        name: 'Magdalena',
        shortCode: 'MAG',
      },
      {
        name: 'Meta',
        shortCode: 'MET',
      },
      {
        name: 'Nariño',
        shortCode: 'NAR',
      },
      {
        name: 'Norte de Santander',
        shortCode: 'NSA',
      },
      {
        name: 'Putumayo',
        shortCode: 'PUT',
      },
      {
        name: 'Quindío',
        shortCode: 'QUI',
      },
      {
        name: 'Risaralda',
        shortCode: 'RIS',
      },
      {
        name: 'Santander',
        shortCode: 'SAN',
      },
      {
        name: 'Sucre',
        shortCode: 'SUC',
      },
      {
        name: 'Tolima',
        shortCode: 'TOL',
      },
      {
        name: 'Valle del Cauca',
        shortCode: 'VAC',
      },
      {
        name: 'Vaupés',
        shortCode: 'VAU',
      },
      {
        name: 'Vichada',
        shortCode: 'VID',
      },
    ],
  },
  {
    countryName: 'Comoros',
    countryShortCode: 'KM',
    regions: [
      {
        name: 'Andjazîdja',
        shortCode: 'G',
      },
      {
        name: 'Andjouân',
        shortCode: 'A',
      },
      {
        name: 'Moûhîlî',
        shortCode: 'M',
      },
    ],
  },
  {
    countryName: 'Congo, Republic of the (Brazzaville)',
    countryShortCode: 'CG',
    regions: [
      {
        name: 'Bouenza',
        shortCode: '11',
      },
      {
        name: 'Brazzaville',
        shortCode: 'BZV',
      },
      {
        name: 'Cuvette',
        shortCode: '8',
      },
      {
        name: 'Cuvette-Ouest',
        shortCode: '15',
      },
      {
        name: 'Kouilou',
        shortCode: '5',
      },
      {
        name: 'Lékoumou',
        shortCode: '2',
      },
      {
        name: 'Likouala',
        shortCode: '7',
      },
      {
        name: 'Niari',
        shortCode: '9',
      },
      {
        name: 'Plateaux',
        shortCode: '14',
      },
      {
        name: 'Pointe-Noire',
        shortCode: '16',
      },
      {
        name: 'Pool',
        shortCode: '12',
      },
      {
        name: 'Sangha',
        shortCode: '13',
      },
    ],
  },
  {
    countryName: 'Congo, the Democratic Republic of the (Kinshasa)',
    countryShortCode: 'CD',
    regions: [
      {
        name: 'Bandundu',
        shortCode: 'BN',
      },
      {
        name: 'Bas-Congo',
        shortCode: 'BC',
      },
      {
        name: 'Équateur',
        shortCode: 'EQ',
      },
      {
        name: 'Kasaï-Occidental',
        shortCode: 'KE',
      },
      {
        name: 'Kasaï-Oriental',
        shortCode: 'KW',
      },
      {
        name: 'Katanga',
        shortCode: 'KA',
      },
      {
        name: 'Kinshasa',
        shortCode: 'KN',
      },
      {
        name: 'Maniema',
        shortCode: 'MA',
      },
      {
        name: 'Nord-Kivu',
        shortCode: 'NK',
      },
      {
        name: 'Orientale',
        shortCode: 'OR',
      },
      {
        name: 'Sud-Kivu',
        shortCode: 'SK',
      },
    ],
  },
  {
    countryName: 'Cook Islands',
    countryShortCode: 'CK',
    regions: [
      {
        name: 'Aitutaki',
      },
      {
        name: 'Atiu',
      },
      {
        name: 'Avarua',
      },
      {
        name: 'Mangaia',
      },
      {
        name: 'Manihiki',
      },
      {
        name: "Ma'uke",
      },
      {
        name: 'Mitiaro',
      },
      {
        name: 'Nassau',
      },
      {
        name: 'Palmerston',
      },
      {
        name: 'Penrhyn',
      },
      {
        name: 'Pukapuka',
      },
      {
        name: 'Rakahanga',
      },
    ],
  },
  {
    countryName: 'Costa Rica',
    countryShortCode: 'CR',
    regions: [
      {
        name: 'Alajuela',
        shortCode: '2',
      },
      {
        name: 'Cartago',
        shortCode: '3',
      },
      {
        name: 'Guanacaste',
        shortCode: '5',
      },
      {
        name: 'Heredia',
        shortCode: '4',
      },
      {
        name: 'Limón',
        shortCode: '7',
      },
      {
        name: 'Puntarenas',
        shortCode: '6',
      },
      {
        name: 'San José',
        shortCode: '1',
      },
    ],
  },
  {
    countryName: "Côte d'Ivoire, Republic of",
    countryShortCode: 'CI',
    regions: [
      {
        name: 'Agnéby',
        shortCode: '16',
      },
      {
        name: 'Bafing',
        shortCode: '17',
      },
      {
        name: 'Bas-Sassandra',
        shortCode: '09',
      },
      {
        name: 'Denguélé',
        shortCode: '10',
      },
      {
        name: 'Dix-Huit Montagnes',
        shortCode: '06',
      },
      {
        name: 'Fromager',
        shortCode: '18',
      },
      {
        name: 'Haut-Sassandra',
        shortCode: '02',
      },
      {
        name: 'Lacs',
        shortCode: '07',
      },
      {
        name: 'Lagunes',
        shortCode: '01',
      },
      {
        name: 'Marahoué',
        shortCode: '12',
      },
      {
        name: 'Moyen-Cavally',
        shortCode: '19',
      },
      {
        name: 'Moyen-Comoé',
        shortCode: '05',
      },
      {
        name: "N'zi-Comoé",
        shortCode: '11',
      },
      {
        name: 'Savanes',
        shortCode: '03',
      },
      {
        name: 'Sud-Bandama',
        shortCode: '15',
      },
      {
        name: 'Sud-Comoé',
        shortCode: '13',
      },
      {
        name: 'Vallée du Bandama',
        shortCode: '04',
      },
      {
        name: 'Worodougou',
        shortCode: '14',
      },
      {
        name: 'Zanzan',
        shortCode: '08',
      },
    ],
  },
  {
    countryName: 'Croatia',
    countryShortCode: 'HR',
    regions: [
      {
        name: 'Bjelovarsko-bilogorska županija',
        shortCode: 'Bjelovarsko-bilogorska županija',
      },
      {
        name: 'Brodsko-posavska županija',
        shortCode: 'Brodsko-posavska županija',
      },
      {
        name: 'Dubrovačko-neretvanska županija',
        shortCode: 'Dubrovačko-neretvanska županija',
      },
      {
        name: 'Grad Zagreb',
        shortCode: 'Grad Zagreb',
      },
      {
        name: 'Istarska županija',
        shortCode: 'Istarska županija',
      },
      {
        name: 'Karlovačka županija',
        shortCode: 'Karlovačka županija',
      },
      {
        name: 'Koprivničko-križevačka županija',
        shortCode: 'Koprivničko-križevačka županija',
      },
      {
        name: 'Krapinsko-zagorska županija',
        shortCode: 'Krapinsko-zagorska županija',
      },
      {
        name: 'Ličko-senjska županija',
        shortCode: 'Ličko-senjska županija',
      },
      {
        name: 'Međimurska županija',
        shortCode: 'Međimurska županija',
      },
      {
        name: 'Osječko-baranjska županija',
        shortCode: 'Osijek-Baranja County',
      },
      {
        name: 'Požeško-slavonska županija',
        shortCode: 'Požeško-slavonska županija',
      },
      {
        name: 'Primorsko-goranska županija',
        shortCode: 'Primorsko-goranska županija',
      },
      {
        name: 'Sisačko-moslavačka županija',
        shortCode: 'Sisačko-moslavačka županija',
      },
      {
        name: 'Splitsko-dalmatinska županija',
        shortCode: 'Splitsko-dalmatinska županija',
      },
      {
        name: 'Šibensko-kninska županija',
        shortCode: 'Šibensko-kninska županija',
      },
      {
        name: 'Varaždinska županija',
        shortCode: 'Varaždinska županija',
      },
      {
        name: 'Virovitičko-podravska županija',
        shortCode: 'Virovitičko-podravska županija',
      },
      {
        name: 'Vukovarsko-srijemska županija',
        shortCode: 'Vukovarsko-srijemska županija',
      },
      {
        name: 'Zadarska županija',
        shortCode: 'Zadarska županija',
      },
      {
        name: 'Zagrebačka županija',
        shortCode: 'Zagrebačka županija',
      },
    ],
  },
  {
    countryName: 'Cuba',
    countryShortCode: 'CU',
    regions: [
      {
        name: 'Artemisa',
        shortCode: '15',
      },
      {
        name: 'Camagüey',
        shortCode: '09',
      },
      {
        name: 'Ciego de Ávila',
        shortCode: '08',
      },
      {
        name: 'Cienfuegos',
        shortCode: '06',
      },
      {
        name: 'Granma',
        shortCode: '12',
      },
      {
        name: 'Guantánamo',
        shortCode: '14',
      },
      {
        name: 'Holguín',
        shortCode: '11',
      },
      {
        name: 'Isla de la Juventud',
        shortCode: '99',
      },
      {
        name: 'La Habana',
        shortCode: '03',
      },
      {
        name: 'Las Tunas',
        shortCode: '10',
      },
      {
        name: 'Matanzas',
        shortCode: '04',
      },
      {
        name: 'Mayabeque',
        shortCode: '16',
      },
      {
        name: 'Pinar del Río',
        shortCode: '01',
      },
      {
        name: 'Sancti Spíritus',
        shortCode: '07',
      },
      {
        name: 'Santiago de Cuba',
        shortCode: '13',
      },
      {
        name: 'Villa Clara',
        shortCode: '05',
      },
    ],
  },
  {
    countryName: 'Curaçao',
    countryShortCode: 'CW',
    regions: [
      {
        name: 'Curaçao',
        shortCode: 'CW',
      },
    ],
  },
  {
    countryName: 'Cyprus',
    countryShortCode: 'CY',
    regions: [
      {
        name: 'Ammochostos',
        shortCode: 'Famagusta',
      },
      {
        name: 'Keryneia',
        shortCode: '05',
      },
      {
        name: 'Larnaka',
        shortCode: 'Larnaca',
      },
      {
        name: 'Lefkosia',
        shortCode: 'Nicosia',
      },
      {
        name: 'Lemesos',
        shortCode: 'Limassol',
      },
      {
        name: 'Pafos',
        shortCode: 'Paphos',
      },
    ],
  },
  {
    countryName: 'Czech Republic',
    countryShortCode: 'CZ',
    regions: [
      {
        name: 'Hlavní město Praha',
        shortCode: 'Hlavní město Praha',
      },
      {
        name: 'Jihočeský kraj',
        shortCode: 'Jihočeský kraj',
      },
      {
        name: 'Jihomoravský kraj',
        shortCode: 'Jihomoravský kraj',
      },
      {
        name: 'Karlovarský kraj',
        shortCode: 'Karlovarský kraj',
      },
      {
        name: 'Královéhradecký kraj',
        shortCode: 'Královéhradecký kraj',
      },
      {
        name: 'Liberecký kraj',
        shortCode: 'Liberecký kraj',
      },
      {
        name: 'Moravskoslezský kraj',
        shortCode: 'Moravskoslezský kraj',
      },
      {
        name: 'Olomoucký kraj',
        shortCode: 'Olomoucký kraj',
      },
      {
        name: 'Pardubický kraj',
        shortCode: 'Pardubický kraj',
      },
      {
        name: 'Plzeňský kraj',
        shortCode: 'Plzeňský kraj',
      },
      {
        name: 'Středočeský kraj',
        shortCode: 'Středočeský kraj',
      },
      {
        name: 'Ústecký kraj',
        shortCode: 'Ústecký kraj',
      },
      {
        name: 'Vysočina',
        shortCode: 'Kraj Vysočina',
      },
      {
        name: 'Zlínský kraj',
        shortCode: 'Zlínský kraj',
      },
    ],
  },
  {
    countryName: 'Denmark',
    countryShortCode: 'DK',
    regions: [
      {
        name: 'Hovedstaden',
        shortCode: '84',
      },
      {
        name: 'Kujalleq',
        shortCode: 'GL-KU',
      },
      {
        name: 'Midtjylland',
        shortCode: '82',
      },
      {
        name: 'Norderøerne',
        shortCode: 'FO-01',
      },
      {
        name: 'Nordjylland',
        shortCode: '81',
      },
      {
        name: 'Østerø',
        shortCode: 'FO-06',
      },
      {
        name: 'Qaasuitsup',
        shortCode: 'GL-QA',
      },
      {
        name: 'Qeqqata',
        shortCode: 'GL-QE',
      },
      {
        name: 'Sandø',
        shortCode: 'FO-02',
      },
      {
        name: 'Sermersooq',
        shortCode: 'GL-SM',
      },
      {
        name: 'Sjælland',
        shortCode: '85',
      },
      {
        name: 'Strømø',
        shortCode: 'FO-03',
      },
      {
        name: 'Suderø',
        shortCode: 'FO-04',
      },
      {
        name: 'Syddanmark',
        shortCode: '83',
      },
      {
        name: 'Vågø',
        shortCode: 'FO-05',
      },
    ],
  },
  {
    countryName: 'Djibouti',
    countryShortCode: 'DJ',
    regions: [
      {
        name: 'Ali Sabieh',
        shortCode: 'AS',
      },
      {
        name: 'Arta',
        shortCode: 'AR',
      },
      {
        name: 'Dikhil',
        shortCode: 'DI',
      },
      {
        name: 'Obock',
        shortCode: 'OB',
      },
      {
        name: 'Tadjourah',
        shortCode: 'TA',
      },
    ],
  },
  {
    countryName: 'Dominica',
    countryShortCode: 'DM',
    regions: [
      {
        name: 'Saint Andrew Parish',
        shortCode: '02',
      },
      {
        name: 'Saint David Parish',
        shortCode: '03',
      },
      {
        name: 'Saint George Parish',
        shortCode: '04',
      },
      {
        name: 'Saint John Parish',
        shortCode: '05',
      },
      {
        name: 'Saint Joseph Parish',
        shortCode: '06',
      },
      {
        name: 'Saint Luke Parish',
        shortCode: '07',
      },
      {
        name: 'Saint Mark Parish',
        shortCode: '08',
      },
      {
        name: 'Saint Patrick Parish',
        shortCode: '09',
      },
      {
        name: 'Saint Paul Parish',
        shortCode: '10',
      },
      {
        name: 'Saint Peter Parish',
        shortCode: '11',
      },
    ],
  },
  {
    countryName: 'Dominican Republic',
    countryShortCode: 'DO',
    regions: [
      {
        name: 'Cibao Central',
        shortCode: '02',
      },
      {
        name: 'Del Valle',
        shortCode: '37',
      },
      {
        name: 'Distrito Nacional',
        shortCode: '01',
      },
      {
        name: 'Enriquillo',
        shortCode: '38',
      },
      {
        name: 'Norcentral',
        shortCode: '04',
      },
      {
        name: 'Nordeste',
        shortCode: '34',
      },
      {
        name: 'Noroeste',
        shortCode: '34',
      },
      {
        name: 'Norte',
        shortCode: '35',
      },
      {
        name: 'Valdesia',
        shortCode: '42',
      },
    ],
  },
  {
    countryName: 'Ecuador',
    countryShortCode: 'EC',
    regions: [
      {
        name: 'Azuay',
        shortCode: 'A',
      },
      {
        name: 'Bolívar',
        shortCode: 'B',
      },
      {
        name: 'Cañar',
        shortCode: 'F',
      },
      {
        name: 'Carchi',
        shortCode: 'C',
      },
      {
        name: 'Chimborazo',
        shortCode: 'H',
      },
      {
        name: 'Cotopaxi',
        shortCode: 'X',
      },
      {
        name: 'El Oro',
        shortCode: 'O',
      },
      {
        name: 'Esmeraldas',
        shortCode: 'E',
      },
      {
        name: 'Galápagos',
        shortCode: 'W',
      },
      {
        name: 'Guayas',
        shortCode: 'G',
      },
      {
        name: 'Imbabura',
        shortCode: 'I',
      },
      {
        name: 'Loja',
        shortCode: 'L',
      },
      {
        name: 'Los Ríos',
        shortCode: 'R',
      },
      {
        name: 'Manabí',
        shortCode: 'M',
      },
      {
        name: 'Morona-Santiago',
        shortCode: 'S',
      },
      {
        name: 'Napo',
        shortCode: 'N',
      },
      {
        name: 'Orellana',
        shortCode: 'D',
      },
      {
        name: 'Pastaza',
        shortCode: 'Y',
      },
      {
        name: 'Pichincha',
        shortCode: 'P',
      },
      {
        name: 'Santa Elena',
        shortCode: 'SE',
      },
      {
        name: 'Santo Domingo de los Tsáchilas',
        shortCode: 'SD',
      },
      {
        name: 'Sucumbíos',
        shortCode: 'U',
      },
      {
        name: 'Tungurahua',
        shortCode: 'T',
      },
      {
        name: 'Zamora-Chinchipe',
        shortCode: 'Z',
      },
    ],
  },
  {
    countryName: 'Egypt',
    countryShortCode: 'EG',
    regions: [
      {
        name: 'Alexandria',
        shortCode: 'ALX',
      },
      {
        name: 'Aswan',
        shortCode: 'ASN',
      },
      {
        name: 'Asyout',
        shortCode: 'AST',
      },
      {
        name: 'Bani Sueif',
        shortCode: 'BNS',
      },
      {
        name: 'Beheira',
        shortCode: 'BH',
      },
      {
        name: 'Cairo',
        shortCode: 'C',
      },
      {
        name: 'Daqahlia',
        shortCode: 'DK',
      },
      {
        name: 'Dumiat',
        shortCode: 'DT',
      },
      {
        name: 'El Bahr El Ahmar',
        shortCode: 'BA',
      },
      {
        name: 'El Ismailia',
        shortCode: 'IS',
      },
      {
        name: 'El Suez',
        shortCode: 'SUZ',
      },
      {
        name: 'El Wadi El Gedeed',
        shortCode: 'WAD',
      },
      {
        name: 'Fayoum',
        shortCode: 'FYM',
      },
      {
        name: 'Gharbia',
        shortCode: 'GH',
      },
      {
        name: 'Giza',
        shortCode: 'SUZ',
      },
      {
        name: 'Helwan',
        shortCode: 'HU',
      },
      {
        name: 'Kafr El Sheikh',
        shortCode: 'KFS',
      },
      {
        name: 'Luxor',
        shortCode: 'LX',
      },
      {
        name: 'Matrouh',
        shortCode: 'MT',
      },
      {
        name: 'Menia',
        shortCode: 'MN',
      },
      {
        name: 'Menofia',
        shortCode: 'MNF',
      },
      {
        name: 'North Sinai',
        shortCode: 'SIN',
      },
      {
        name: 'Port Said',
        shortCode: 'PTS',
      },
      {
        name: 'Qalubia',
        shortCode: 'KB',
      },
      {
        name: 'Qena',
        shortCode: 'KN',
      },
      {
        name: 'Sharqia',
        shortCode: 'SHR',
      },
      {
        name: 'Sixth of October',
        shortCode: 'SU',
      },
      {
        name: 'Sohag',
        shortCode: 'SHG',
      },
      {
        name: 'South Sinai',
        shortCode: 'JS',
      },
    ],
  },
  {
    countryName: 'El Salvador',
    countryShortCode: 'SV',
    regions: [
      {
        name: 'Ahuachapán',
        shortCode: 'AH',
      },
      {
        name: 'Cabañas',
        shortCode: 'CA',
      },
      {
        name: 'Cuscatlán',
        shortCode: 'CU',
      },
      {
        name: 'Chalatenango',
        shortCode: 'CH',
      },
      {
        name: 'La Libertad',
        shortCode: 'LI',
      },
      {
        name: 'La Paz',
        shortCode: 'PA',
      },
      {
        name: 'La Unión',
        shortCode: 'UN',
      },
      {
        name: 'Morazán',
        shortCode: 'MO',
      },
      {
        name: 'San Miguel',
        shortCode: 'SM',
      },
      {
        name: 'San Salvador',
        shortCode: 'SS',
      },
      {
        name: 'Santa Ana',
        shortCode: 'SA',
      },
      {
        name: 'San Vicente',
        shortCode: 'SV',
      },
      {
        name: 'Sonsonate',
        shortCode: 'SO',
      },
      {
        name: 'Usulután',
        shortCode: 'US',
      },
    ],
  },
  {
    countryName: 'Equatorial Guinea',
    countryShortCode: 'GQ',
    regions: [
      {
        name: 'Annobón',
        shortCode: 'AN',
      },
      {
        name: 'Bioko Norte',
        shortCode: 'BN',
      },
      {
        name: 'Bioko Sur',
        shortCode: 'BS',
      },
      {
        name: 'Centro Sur',
        shortCode: 'CS',
      },
      {
        name: 'Kié-Ntem',
        shortCode: 'KN',
      },
      {
        name: 'Litoral',
        shortCode: 'LI',
      },
      {
        name: 'Wele-Nzas',
        shortCode: 'WN',
      },
    ],
  },
  {
    countryName: 'Eritrea',
    countryShortCode: 'ER',
    regions: [
      {
        name: 'Anseba',
        shortCode: 'AN',
      },
      {
        name: 'Debub',
        shortCode: 'DU',
      },
      {
        name: 'Debub-Keih-Bahri',
        shortCode: 'DK',
      },
      {
        name: 'Gash-Barka',
        shortCode: 'GB',
      },
      {
        name: 'Maekel',
        shortCode: 'MA',
      },
      {
        name: 'Semien-Keih-Bahri',
        shortCode: 'SK',
      },
    ],
  },
  {
    countryName: 'Estonia',
    countryShortCode: 'EE',
    regions: [
      {
        name: 'Harjumaa (Tallinn)',
        shortCode: 'Harju County',
      },
      {
        name: 'Hiiumaa (Kardla)',
        shortCode: 'Hiiu County',
      },
      {
        name: 'Ida-Virumaa (Johvi)',
        shortCode: 'Ida-Viru County',
      },
      {
        name: 'Järvamaa (Paide)',
        shortCode: 'Järva County',
      },
      {
        name: 'Jõgevamaa (Jogeva)',
        shortCode: 'Jõgeva County',
      },
      {
        name: 'Läänemaa',
        shortCode: 'Lääne County',
      },
      {
        name: 'Lääne-Virumaa (Rakvere)',
        shortCode: 'Lääne-Viru County',
      },
      {
        name: 'Pärnumaa (Parnu)',
        shortCode: 'Pärnu County',
      },
      {
        name: 'Põlvamaa (Polva)',
        shortCode: 'Põlva County',
      },
      {
        name: 'Raplamaa (Rapla)',
        shortCode: 'Rapla County',
      },
      {
        name: 'Saaremaa (Kuessaare)',
        shortCode: 'Saare County',
      },
      {
        name: 'Tartumaa (Tartu)',
        shortCode: 'Tartu County',
      },
      {
        name: 'Valgamaa (Valga)',
        shortCode: 'Valga County',
      },
      {
        name: 'Viljandimaa (Viljandi)',
        shortCode: 'Viljandi County',
      },
      {
        name: 'Võrumaa (Voru)',
        shortCode: 'Võru County',
      },
    ],
  },
  {
    countryName: 'Ethiopia',
    countryShortCode: 'ET',
    regions: [
      {
        name: 'Addis Ababa',
        shortCode: 'AA',
      },
      {
        name: 'Afar',
        shortCode: 'AF',
      },
      {
        name: 'Amhara',
        shortCode: 'AM',
      },
      {
        name: 'Benshangul-Gumaz',
        shortCode: 'BE',
      },
      {
        name: 'Dire Dawa',
        shortCode: 'DD',
      },
      {
        name: 'Gambela',
        shortCode: 'GA',
      },
      {
        name: 'Harari',
        shortCode: 'HA',
      },
      {
        name: 'Oromia',
        shortCode: 'OR',
      },
      {
        name: 'Somali',
        shortCode: 'SO',
      },
      {
        name: "Southern Nations Nationalities and People's Region",
        shortCode: 'SN',
      },
      {
        name: 'Tigray',
        shortCode: 'TI',
      },
    ],
  },
  {
    countryName: 'Falkland Islands (Islas Malvinas)',
    countryShortCode: 'FK',
    regions: [
      {
        name: 'Falkland Islands (Islas Malvinas)',
      },
    ],
  },
  {
    countryName: 'Faroe Islands',
    countryShortCode: 'FO',
    regions: [
      {
        name: 'Bordoy',
      },
      {
        name: 'Eysturoy',
      },
      {
        name: 'Mykines',
      },
      {
        name: 'Sandoy',
      },
      {
        name: 'Skuvoy',
      },
      {
        name: 'Streymoy',
      },
      {
        name: 'Suduroy',
      },
      {
        name: 'Tvoroyri',
      },
      {
        name: 'Vagar',
      },
    ],
  },
  {
    countryName: 'Fiji',
    countryShortCode: 'FJ',
    regions: [
      {
        name: 'Ba',
        shortCode: '01',
      },
      {
        name: 'Bua',
        shortCode: '01',
      },
      {
        name: 'Cakaudrove',
        shortCode: '03',
      },
      {
        name: 'Kadavu',
        shortCode: '04',
      },
      {
        name: 'Lau',
        shortCode: '05',
      },
      {
        name: 'Lomaiviti',
        shortCode: '06',
      },
      {
        name: 'Macuata',
        shortCode: '07',
      },
      {
        name: 'Nadroga and Navosa',
        shortCode: '08',
      },
      {
        name: 'Naitasiri',
        shortCode: '09',
      },
      {
        name: 'Namosi',
        shortCode: '10',
      },
      {
        name: 'Ra',
        shortCode: '011',
      },
      {
        name: 'Rewa',
        shortCode: '12',
      },
      {
        name: 'Rotuma',
        shortCode: 'R',
      },
      {
        name: 'Serua',
        shortCode: '12',
      },
      {
        name: 'Tailevu',
        shortCode: '14',
      },
    ],
  },
  {
    countryName: 'Finland',
    countryShortCode: 'FI',
    regions: [
      {
        name: 'Ahvenanmaan maakunta',
        shortCode: 'FI-01',
      },
      {
        name: 'Etelä-Karjala',
        shortCode: 'FI-02',
      },
      {
        name: 'Etelä-Pohjanmaa',
        shortCode: 'FI-03',
      },
      {
        name: 'Etelä-Savo',
        shortCode: 'FI-04',
      },
      {
        name: 'Kainuu',
        shortCode: 'FI-05',
      },
      {
        name: 'Kanta-Häme',
        shortCode: 'FI-06',
      },
      {
        name: 'Keski-Pohjanmaa',
        shortCode: 'FI-07',
      },
      {
        name: 'Keski-Suomi',
        shortCode: 'FI-08',
      },
      {
        name: 'Kymenlaakso',
        shortCode: 'FI-09',
      },
      {
        name: 'Lappi',
        shortCode: 'FI-10',
      },
      {
        name: 'Pirkanmaa',
        shortCode: 'FI-11',
      },
      {
        name: 'Pohjanmaa',
        shortCode: 'FI-12',
      },
      {
        name: 'Pohjois-Karjala',
        shortCode: 'FI-13',
      },
      {
        name: 'Pohjois-Pohjanmaa',
        shortCode: 'FI-14',
      },
      {
        name: 'Pohjois-Savo',
        shortCode: 'FI-15',
      },
      {
        name: 'Päijät-Häme',
        shortCode: 'FI-16',
      },
      {
        name: 'Satakunta',
        shortCode: 'FI-17',
      },
      {
        name: 'Uusimaa',
        shortCode: 'FI-18',
      },
      {
        name: 'Varsinais-Suomi',
        shortCode: 'FI-19',
      },
    ],
  },
  {
    countryName: 'France',
    countryShortCode: 'FR',
    regions: [
      {
        name: 'Auvergne-Rhône-Alpes',
        shortCode: 'ARA',
      },
      {
        name: 'Bourgogne-Franche-Comté',
        shortCode: 'BFC',
      },
      {
        name: 'Bretagne',
        shortCode: 'BRE',
      },
      {
        name: 'Centre-Val de Loire',
        shortCode: 'CVL',
      },
      {
        name: 'Corse',
        shortCode: 'COR',
      },
      {
        name: 'Grand Est',
        shortCode: 'GES',
      },
      {
        name: 'Hauts-de-France',
        shortCode: 'HDF',
      },
      {
        name: 'Île-de-France',
        shortCode: 'IDF',
      },
      {
        name: 'Normandie',
        shortCode: 'NOR',
      },
      {
        name: 'Nouvelle-Aquitaine',
        shortCode: 'NAQ',
      },
      {
        name: 'Occitanie',
        shortCode: 'OCC',
      },
      {
        name: 'Pays de la Loire',
        shortCode: 'PDL',
      },
      {
        name: "Provence-Alpes-Côte d'Azur",
        shortCode: 'PAC',
      },
      {
        name: 'Clipperton',
        shortCode: 'CP',
      },
      {
        name: 'Guadeloupe',
        shortCode: 'GP',
      },
      {
        name: 'Guyane',
        shortCode: 'GF',
      },
      {
        name: 'Martinique',
        shortCode: 'MQ',
      },
      {
        name: 'Mayotte',
        shortCode: 'YT',
      },
      {
        name: 'Novelle-Calédonie',
        shortCode: 'NC',
      },
      {
        name: 'Polynésie',
        shortCode: 'PF',
      },
      {
        name: 'Saint-Pierre-et-Miquelon',
        shortCode: 'PM',
      },
      {
        name: 'Saint Barthélemy',
        shortCode: 'BL',
      },
      {
        name: 'Saint Martin',
        shortCode: 'MF',
      },
      {
        name: 'Réunion',
        shortCode: 'RE',
      },
      {
        name: 'Terres Australes Françaises',
        shortCode: 'TF',
      },
      {
        name: 'Wallis-et-Futuna',
        shortCode: 'WF',
      },
    ],
  },
  {
    countryName: 'French Guiana',
    countryShortCode: 'GF',
    regions: [
      {
        name: 'French Guiana',
      },
    ],
  },
  {
    countryName: 'French Polynesia',
    countryShortCode: 'PF',
    regions: [
      {
        name: 'Archipel des Marquises',
      },
      {
        name: 'Archipel des Tuamotu',
      },
      {
        name: 'Archipel des Tubuai',
      },
      {
        name: 'Iles du Vent',
      },
      {
        name: 'Iles Sous-le-Vent',
      },
    ],
  },
  {
    countryName: 'French Southern and Antarctic Lands',
    countryShortCode: 'TF',
    regions: [
      {
        name: 'Adelie Land',
      },
      {
        name: 'Ile Crozet',
      },
      {
        name: 'Iles Kerguelen',
      },
      {
        name: 'Iles Saint-Paul et Amsterdam',
      },
    ],
  },
  {
    countryName: 'Gabon',
    countryShortCode: 'GA',
    regions: [
      {
        name: 'Estuaire',
        shortCode: '1',
      },
      {
        name: 'Haut-Ogooué',
        shortCode: '2',
      },
      {
        name: 'Moyen-Ogooué',
        shortCode: '3',
      },
      {
        name: 'Ngounié',
        shortCode: '4',
      },
      {
        name: 'Nyanga',
        shortCode: '5',
      },
      {
        name: 'Ogooué-Ivindo',
        shortCode: '6',
      },
      {
        name: 'Ogooué-Lolo',
        shortCode: '7',
      },
      {
        name: 'Ogooué-Maritime',
        shortCode: '8',
      },
      {
        name: 'Woleu-Ntem',
        shortCode: '9',
      },
    ],
  },
  {
    countryName: 'Gambia, The',
    countryShortCode: 'GM',
    regions: [
      {
        name: 'Banjul',
        shortCode: 'B',
      },
      {
        name: 'Central River',
        shortCode: 'M',
      },
      {
        name: 'Lower River',
        shortCode: 'L',
      },
      {
        name: 'North Bank',
        shortCode: 'N',
      },
      {
        name: 'Upper River',
        shortCode: 'U',
      },
      {
        name: 'Western',
        shortCode: 'W',
      },
    ],
  },
  {
    countryName: 'Georgia',
    countryShortCode: 'GE',
    regions: [
      {
        name: 'Abkhazia (Sokhumi)',
        shortCode: 'AB',
      },
      {
        name: "Ajaria (Bat'umi)",
        shortCode: 'AJ',
      },
      {
        name: 'Guria',
        shortCode: 'GU',
      },
      {
        name: 'Imereti',
        shortCode: 'IM',
      },
      {
        name: "K'akheti",
        shortCode: 'KA',
      },
      {
        name: 'Kvemo Kartli',
        shortCode: 'KK',
      },
      {
        name: 'Mtshkheta-Mtianeti',
        shortCode: 'MM',
      },
      {
        name: "Rach'a-Lexhkumi-KvemoSvaneti",
        shortCode: 'RL',
      },
      {
        name: 'Samegrelo-Zemo Svaneti',
        shortCode: 'SZ',
      },
      {
        name: 'Samtskhe-Javakheti',
        shortCode: 'SJ',
      },
      {
        name: 'Shida Kartli',
        shortCode: 'SK',
      },
      {
        name: 'Tbilisi',
        shortCode: 'TB',
      },
    ],
  },
  {
    countryName: 'Germany',
    countryShortCode: 'DE',
    regions: [
      {
        name: 'Baden-Württemberg',
        shortCode: 'Baden-Württemberg',
      },
      {
        name: 'Bayern',
        shortCode: 'Bayern',
      },
      {
        name: 'Berlin',
        shortCode: 'Berlin',
      },
      {
        name: 'Brandenburg',
        shortCode: 'Brandenburg',
      },
      {
        name: 'Bremen',
        shortCode: 'Brandenburg',
      },
      {
        name: 'Hamburg',
        shortCode: 'Hamburg',
      },
      {
        name: 'Hessen',
        shortCode: 'Hessen',
      },
      {
        name: 'Mecklenburg-Vorpommern',
        shortCode: 'Mecklenburg-Vorpommern',
      },
      {
        name: 'Niedersachsen',
        shortCode: 'Niedersachsen',
      },
      {
        name: 'Nordrhein-Westfalen',
        shortCode: 'Nordrhein-Westfalen',
      },
      {
        name: 'Rheinland-Pfalz',
        shortCode: 'Rheinland-Pfalz',
      },
      {
        name: 'Saarland',
        shortCode: 'Saarland',
      },
      {
        name: 'Sachsen',
        shortCode: 'Sachsen',
      },
      {
        name: 'Sachsen-Anhalt',
        shortCode: 'Sachsen-Anhalt',
      },
      {
        name: 'Schleswig-Holstein',
        shortCode: 'Schleswig-Holstein',
      },
      {
        name: 'Thüringen',
        shortCode: 'Thüringen',
      },
    ],
  },
  {
    countryName: 'Ghana',
    countryShortCode: 'GH',
    regions: [
      {
        name: 'Ahafo',
      },
      {
        name: 'Ashanti',
        shortCode: 'AH',
      },
      {
        name: 'Bono',
      },
      {
        name: 'Bono East',
      },
      {
        name: 'Central',
        shortCode: 'CP',
      },
      {
        name: 'Eastern',
        shortCode: 'EP',
      },
      {
        name: 'Greater Accra',
        shortCode: 'AA',
      },
      {
        name: 'Northern',
        shortCode: 'NP',
      },
      {
        name: 'North East',
      },
      {
        name: 'Oti',
      },
      {
        name: 'Savannah',
      },
      {
        name: 'Upper East',
        shortCode: 'UE',
      },
      {
        name: 'Upper West',
        shortCode: 'UW',
      },
      {
        name: 'Volta',
        shortCode: 'TV',
      },
      {
        name: 'Western',
        shortCode: 'WP',
      },
      {
        name: 'Western North',
      },
    ],
  },
  {
    countryName: 'Gibraltar',
    countryShortCode: 'GI',
    regions: [
      {
        name: 'Gibraltar',
      },
    ],
  },
  {
    countryName: 'Greece',
    countryShortCode: 'GR',
    regions: [
      {
        name: 'Anatolikí Makedonía kai Thráki',
        shortCode: 'A',
      },
      {
        name: 'Attikḯ',
        shortCode: 'I',
      },
      {
        name: 'Dytikí Elláda',
        shortCode: 'G',
      },
      {
        name: 'Dytikí Makedonía',
        shortCode: 'C',
      },
      {
        name: 'Ionía Nísia',
        shortCode: 'F',
      },
      {
        name: 'Kentrikí Makedonía',
        shortCode: 'B',
      },
      {
        name: 'Krítí',
        shortCode: 'M',
      },
      {
        name: 'Notío Aigaío',
        shortCode: 'L',
      },
      {
        name: 'Peloponnísos',
        shortCode: 'J',
      },
      {
        name: 'Stereá Elláda',
        shortCode: 'H',
      },
      {
        name: 'Thessalía',
        shortCode: 'E',
      },
      {
        name: 'Voreío Aigaío',
        shortCode: 'K',
      },
      {
        name: 'Ípeiros',
        shortCode: 'D',
      },
      {
        name: 'Ágion Óros',
        shortCode: '69',
      },
    ],
  },
  {
    countryName: 'Greenland',
    countryShortCode: 'GL',
    regions: [
      {
        name: 'Kommune Kujalleq',
        shortCode: 'KU',
      },
      {
        name: 'Kommuneqarfik Sermersooq',
        shortCode: 'SM',
      },
      {
        name: 'Qaasuitsup Kommunia',
        shortCode: 'QA',
      },
      {
        name: 'Qeqqata Kommunia',
        shortCode: 'QE',
      },
    ],
  },
  {
    countryName: 'Grenada',
    countryShortCode: 'GD',
    regions: [
      {
        name: 'Saint Andrew',
        shortCode: '01',
      },
      {
        name: 'Saint David',
        shortCode: '02',
      },
      {
        name: 'Saint George',
        shortCode: '03',
      },
      {
        name: 'Saint John',
        shortCode: '04',
      },
      {
        name: 'Saint Mark',
        shortCode: '05',
      },
      {
        name: 'Saint Patrick',
        shortCode: '06',
      },
      {
        name: 'Southern Grenadine Islands',
        shortCode: '10',
      },
    ],
  },
  {
    countryName: 'Guadeloupe',
    countryShortCode: 'GP',
    regions: [
      {
        name: 'Guadeloupe',
      },
    ],
  },
  {
    countryName: 'Guam',
    countryShortCode: 'GU',
    regions: [
      {
        name: 'Guam',
      },
    ],
  },
  {
    countryName: 'Guatemala',
    countryShortCode: 'GT',
    regions: [
      {
        name: 'Alta Verapaz',
        shortCode: 'AV',
      },
      {
        name: 'Baja Verapaz',
        shortCode: 'BV',
      },
      {
        name: 'Chimaltenango',
        shortCode: 'CM',
      },
      {
        name: 'Chiquimula',
        shortCode: 'CQ',
      },
      {
        name: 'El Progreso',
        shortCode: 'PR',
      },
      {
        name: 'Escuintla',
        shortCode: 'ES',
      },
      {
        name: 'Guatemala',
        shortCode: 'GU',
      },
      {
        name: 'Huehuetenango',
        shortCode: 'HU',
      },
      {
        name: 'Izabal',
        shortCode: 'IZ',
      },
      {
        name: 'Jalapa',
        shortCode: 'JA',
      },
      {
        name: 'Jutiapa',
        shortCode: 'JU',
      },
      {
        name: 'Petén',
        shortCode: 'PE',
      },
      {
        name: 'Quetzaltenango',
        shortCode: 'QZ',
      },
      {
        name: 'Quiché',
        shortCode: 'QC',
      },
      {
        name: 'Retalhuleu',
        shortCode: 'Re',
      },
      {
        name: 'Sacatepéquez',
        shortCode: 'SA',
      },
      {
        name: 'San Marcos',
        shortCode: 'SM',
      },
      {
        name: 'Santa Rosa',
        shortCode: 'SR',
      },
      {
        name: 'Sololá',
        shortCode: 'SO',
      },
      {
        name: 'Suchitepéquez',
        shortCode: 'SU',
      },
      {
        name: 'Totonicapán',
        shortCode: 'TO',
      },
      {
        name: 'Zacapa',
        shortCode: 'ZA',
      },
    ],
  },
  {
    countryName: 'Guernsey',
    countryShortCode: 'GG',
    regions: [
      {
        name: 'Castel',
      },
      {
        name: 'Forest',
      },
      {
        name: 'St. Andrew',
      },
      {
        name: 'St. Martin',
      },
      {
        name: 'St. Peter Port',
      },
      {
        name: 'St. Pierre du Bois',
      },
      {
        name: 'St. Sampson',
      },
      {
        name: 'St. Saviour',
      },
      {
        name: 'Torteval',
      },
      {
        name: 'Vale',
      },
    ],
  },
  {
    countryName: 'Guinea',
    countryShortCode: 'GN',
    regions: [
      {
        name: 'Boké',
        shortCode: 'B',
      },
      {
        name: 'Conakry',
        shortCode: 'C',
      },
      {
        name: 'Faranah',
        shortCode: 'F',
      },
      {
        name: 'Kankan',
        shortCode: 'K',
      },
      {
        name: 'Kindia',
        shortCode: 'D',
      },
      {
        name: 'Labé',
        shortCode: 'L',
      },
      {
        name: 'Mamou',
        shortCode: 'M',
      },
      {
        name: 'Nzérékoré',
        shortCode: 'N',
      },
    ],
  },
  {
    countryName: 'Guinea-Bissau',
    countryShortCode: 'GW',
    regions: [
      {
        name: 'Bafatá',
        shortCode: 'BA',
      },
      {
        name: 'Biombo',
        shortCode: 'BM',
      },
      {
        name: 'Bissau',
        shortCode: 'BS',
      },
      {
        name: 'Bolama-Bijagos',
        shortCode: 'BL',
      },
      {
        name: 'Cacheu',
        shortCode: 'CA',
      },
      {
        name: 'Gabú',
        shortCode: 'GA',
      },
      {
        name: 'Oio',
        shortCode: 'OI',
      },
      {
        name: 'Quinara',
        shortCode: 'QU',
      },
      {
        name: 'Tombali',
        shortCode: 'TO',
      },
    ],
  },
  {
    countryName: 'Guyana',
    countryShortCode: 'GY',
    regions: [
      {
        name: 'Barima-Waini',
        shortCode: 'BA',
      },
      {
        name: 'Cuyuni-Mazaruni',
        shortCode: 'CU',
      },
      {
        name: 'Demerara-Mahaica',
        shortCode: 'DE',
      },
      {
        name: 'East Berbice-Corentyne',
        shortCode: 'EB',
      },
      {
        name: 'Essequibo Islands-West Demerara',
        shortCode: 'ES',
      },
      {
        name: 'Mahaica-Berbice',
        shortCode: 'MA',
      },
      {
        name: 'Pomeroon-Supenaam',
        shortCode: 'PM',
      },
      {
        name: 'Potaro-Siparuni',
        shortCode: 'PT',
      },
      {
        name: 'Upper Demerara-Berbice',
        shortCode: 'UD',
      },
      {
        name: 'Upper Takutu-Upper Essequibo',
        shortCode: 'UT',
      },
    ],
  },
  {
    countryName: 'Haiti',
    countryShortCode: 'HT',
    regions: [
      {
        name: 'Artibonite',
        shortCode: 'AR',
      },
      {
        name: 'Centre',
        shortCode: 'CE',
      },
      {
        name: "Grand'Anse",
        shortCode: 'GA',
      },
      {
        name: 'Nippes',
        shortCode: 'NI',
      },
      {
        name: 'Nord',
        shortCode: 'ND',
      },
      {
        name: 'Nord-Est',
        shortCode: 'NE',
      },
      {
        name: 'Nord-Ouest',
        shortCode: 'NO',
      },
      {
        name: 'Ouest',
        shortCode: 'OU',
      },
      {
        name: 'Sud',
        shortCode: 'SD',
      },
      {
        name: 'Sud-Est',
        shortCode: 'SE',
      },
    ],
  },
  {
    countryName: 'Heard Island and McDonald Islands',
    countryShortCode: 'HM',
    regions: [
      {
        name: 'Heard Island and McDonald Islands',
      },
    ],
  },
  {
    countryName: 'Holy See (Vatican City)',
    countryShortCode: 'VA',
    regions: [
      {
        name: 'Holy See (Vatican City)',
        shortCode: 'VA',
      },
    ],
  },
  {
    countryName: 'Honduras',
    countryShortCode: 'HN',
    regions: [
      {
        name: 'Atlántida',
        shortCode: 'AT',
      },
      {
        name: 'Choluteca',
        shortCode: 'CH',
      },
      {
        name: 'Colón',
        shortCode: 'CL',
      },
      {
        name: 'Comayagua',
        shortCode: 'CM',
      },
      {
        name: 'Copán',
        shortCode: 'CP',
      },
      {
        name: 'Cortés',
        shortCode: 'CR',
      },
      {
        name: 'El Paraíso',
        shortCode: 'EP',
      },
      {
        name: 'Francisco Morazan',
        shortCode: 'FM',
      },
      {
        name: 'Gracias a Dios',
        shortCode: 'GD',
      },
      {
        name: 'Intibucá',
        shortCode: 'IN',
      },
      {
        name: 'Islas de la Bahía',
        shortCode: 'IB',
      },
      {
        name: 'La Paz',
        shortCode: 'LP',
      },
      {
        name: 'Lempira',
        shortCode: 'LE',
      },
      {
        name: 'Ocotepeque',
        shortCode: 'OC',
      },
      {
        name: 'Olancho',
        shortCode: 'OL',
      },
      {
        name: 'Santa Bárbara',
        shortCode: 'SB',
      },
      {
        name: 'Valle',
        shortCode: 'VA',
      },
      {
        name: 'Yoro',
        shortCode: 'YO',
      },
    ],
  },
  {
    countryName: 'Hong Kong',
    countryShortCode: 'HK',
    regions: [
      {
        name: 'Hong Kong',
        shortCode: 'HK',
      },
    ],
  },
  {
    countryName: 'Hungary',
    countryShortCode: 'HU',
    regions: [
      {
        name: 'Bács-Kiskun',
        shortCode: 'BK',
      },
      {
        name: 'Baranya',
        shortCode: 'BA',
      },
      {
        name: 'Békés',
        shortCode: 'BE',
      },
      {
        name: 'Békéscsaba',
        shortCode: 'BC',
      },
      {
        name: 'Borsod-Abauj-Zemplen',
        shortCode: 'BZ',
      },
      {
        name: 'Budapest',
        shortCode: 'BU',
      },
      {
        name: 'Csongrád',
        shortCode: 'CS',
      },
      {
        name: 'Debrecen',
        shortCode: 'DE',
      },
      {
        name: 'Dunaújváros',
        shortCode: 'DU',
      },
      {
        name: 'Eger',
        shortCode: 'EG',
      },
      {
        name: 'Érd',
        shortCode: 'ER',
      },
      {
        name: 'Fejér',
        shortCode: 'FE',
      },
      {
        name: 'Győr',
        shortCode: 'GY',
      },
      {
        name: 'Győr-Moson-Sopron',
        shortCode: 'GS',
      },
      {
        name: 'Hajdú-Bihar',
        shortCode: 'HB',
      },
      {
        name: 'Heves',
        shortCode: 'HE',
      },
      {
        name: 'Hódmezővásárhely',
        shortCode: 'HV',
      },
      {
        name: 'Jász-Nagykun-Szolnok',
        shortCode: 'N',
      },
      {
        name: 'Kaposvár',
        shortCode: 'KV',
      },
      {
        name: 'Kecskemét',
        shortCode: 'KM',
      },
      {
        name: 'Komárom-Esztergom',
        shortCode: 'KE',
      },
      {
        name: 'Miskolc',
        shortCode: 'MI',
      },
      {
        name: 'Nagykanizsa',
        shortCode: 'NK',
      },
      {
        name: 'Nógrád',
        shortCode: 'NO',
      },
      {
        name: 'Nyíregyháza',
        shortCode: 'NY',
      },
      {
        name: 'Pécs',
        shortCode: 'PS',
      },
      {
        name: 'Pest',
        shortCode: 'PE',
      },
      {
        name: 'Salgótarján',
        shortCode: 'ST',
      },
      {
        name: 'Somogy',
        shortCode: 'SO',
      },
      {
        name: 'Sopron',
        shortCode: 'SN',
      },
      {
        name: 'Szabolcs-á-Bereg',
        shortCode: 'SZ',
      },
      {
        name: 'Szeged',
        shortCode: 'SD',
      },
      {
        name: 'Székesfehérvár',
        shortCode: 'SF',
      },
      {
        name: 'Szekszárd',
        shortCode: 'SS',
      },
      {
        name: 'Szolnok',
        shortCode: 'SK',
      },
      {
        name: 'Szombathely',
        shortCode: 'SH',
      },
      {
        name: 'Tatabánya',
        shortCode: 'TB',
      },
      {
        name: 'Tolna',
        shortCode: 'TO',
      },
      {
        name: 'Vas',
        shortCode: 'VA',
      },
      {
        name: 'Veszprém',
        shortCode: 'VE',
      },
      {
        name: 'Veszprém (City)',
        shortCode: 'VM',
      },
      {
        name: 'Zala',
        shortCode: 'ZA',
      },
      {
        name: 'Zalaegerszeg',
        shortCode: 'ZE',
      },
    ],
  },
  {
    countryName: 'Iceland',
    countryShortCode: 'IS',
    regions: [
      {
        name: 'Austurland',
        shortCode: '7',
      },
      {
        name: 'Höfuðborgarsvæði utan Reykjavíkur',
        shortCode: '1',
      },
      {
        name: 'Norðurland eystra',
        shortCode: '6',
      },
      {
        name: 'Norðurland vestra',
        shortCode: '5',
      },
      {
        name: 'Suðurland',
        shortCode: '8',
      },
      {
        name: 'Suðurnes',
        shortCode: '2',
      },
      {
        name: 'Vestfirðir',
        shortCode: '4',
      },
      {
        name: 'Vesturland',
        shortCode: '3',
      },
    ],
  },
  {
    countryName: 'India',
    countryShortCode: 'IN',
    regions: [
      {
        name: 'Andaman and Nicobar Islands',
        shortCode: 'AN',
      },
      {
        name: 'Andhra Pradesh',
        shortCode: 'AP',
      },
      {
        name: 'Arunachal Pradesh',
        shortCode: 'AR',
      },
      {
        name: 'Assam',
        shortCode: 'AS',
      },
      {
        name: 'Bihar',
        shortCode: 'BR',
      },
      {
        name: 'Chandigarh',
        shortCode: 'CH',
      },
      {
        name: 'Chhattisgarh',
        shortCode: 'CT',
      },
      {
        name: 'Dadra and Nagar Haveli',
        shortCode: 'DN',
      },
      {
        name: 'Daman and Diu',
        shortCode: 'DD',
      },
      {
        name: 'Delhi',
        shortCode: 'DL',
      },
      {
        name: 'Goa',
        shortCode: 'GA',
      },
      {
        name: 'Gujarat',
        shortCode: 'GJ',
      },
      {
        name: 'Haryana',
        shortCode: 'HR',
      },
      {
        name: 'Himachal Pradesh',
        shortCode: 'HP',
      },
      {
        name: 'Jammu and Kashmir',
        shortCode: 'JK',
      },
      {
        name: 'Jharkhand',
        shortCode: 'JH',
      },
      {
        name: 'Karnataka',
        shortCode: 'KA',
      },
      {
        name: 'Kerala',
        shortCode: 'KL',
      },
      {
        name: 'Lakshadweep',
        shortCode: 'LD',
      },
      {
        name: 'Madhya Pradesh',
        shortCode: 'MP',
      },
      {
        name: 'Maharashtra',
        shortCode: 'MH',
      },
      {
        name: 'Manipur',
        shortCode: 'MN',
      },
      {
        name: 'Meghalaya',
        shortCode: 'ML',
      },
      {
        name: 'Mizoram',
        shortCode: 'MZ',
      },
      {
        name: 'Nagaland',
        shortCode: 'NL',
      },
      {
        name: 'Odisha',
        shortCode: 'OR',
      },
      {
        name: 'Puducherry',
        shortCode: 'PY',
      },
      {
        name: 'Punjab',
        shortCode: 'PB',
      },
      {
        name: 'Rajasthan',
        shortCode: 'RJ',
      },
      {
        name: 'Sikkim',
        shortCode: 'WK',
      },
      {
        name: 'Tamil Nadu',
        shortCode: 'TN',
      },
      {
        name: 'Telangana',
        shortCode: 'TG',
      },
      {
        name: 'Tripura',
        shortCode: 'TR',
      },
      {
        name: 'Uttarakhand',
        shortCode: 'UT',
      },
      {
        name: 'Uttar Pradesh',
        shortCode: 'UP',
      },
      {
        name: 'West Bengal',
        shortCode: 'WB',
      },
    ],
  },
  {
    countryName: 'Indonesia',
    countryShortCode: 'ID',
    regions: [
      {
        name: 'Aceh',
        shortCode: 'AC',
      },
      {
        name: 'Bali',
        shortCode: 'BA',
      },
      {
        name: 'Bangka Belitung',
        shortCode: 'BB',
      },
      {
        name: 'Banten',
        shortCode: 'BT',
      },
      {
        name: 'Bengkulu',
        shortCode: 'BE',
      },
      {
        name: 'Gorontalo',
        shortCode: 'GO',
      },
      {
        name: 'Jakarta Raya',
        shortCode: 'JK',
      },
      {
        name: 'Jambi',
        shortCode: 'JA',
      },
      {
        name: 'Jawa Barat',
        shortCode: 'JB',
      },
      {
        name: 'Jawa Tengah',
        shortCode: 'JT',
      },
      {
        name: 'Jawa Timur',
        shortCode: 'JI',
      },
      {
        name: 'Kalimantan Barat',
        shortCode: 'KB',
      },
      {
        name: 'Kalimantan Selatan',
        shortCode: 'KS',
      },
      {
        name: 'Kalimantan Tengah',
        shortCode: 'KT',
      },
      {
        name: 'Kalimantan Timur',
        shortCode: 'KI',
      },
      {
        name: 'Kalimantan Utara',
        shortCode: 'KU',
      },
      {
        name: 'Kepulauan Riau',
        shortCode: 'KR',
      },
      {
        name: 'Lampung',
        shortCode: 'LA',
      },
      {
        name: 'Maluku',
        shortCode: 'MA',
      },
      {
        name: 'Maluku Utara',
        shortCode: 'MU',
      },
      {
        name: 'Nusa Tenggara Barat',
        shortCode: 'NB',
      },
      {
        name: 'Nusa Tenggara Timur',
        shortCode: 'NT',
      },
      {
        name: 'Papua',
        shortCode: 'PA',
      },
      {
        name: 'Papua Barat',
        shortCode: 'PB',
      },
      {
        name: 'Riau',
        shortCode: 'RI',
      },
      {
        name: 'Sulawesi Selatan',
        shortCode: 'SR',
      },
      {
        name: 'Sulawesi Tengah',
        shortCode: 'ST',
      },
      {
        name: 'Sulawesi Tenggara',
        shortCode: 'SG',
      },
      {
        name: 'Sulawesi Utara',
        shortCode: 'SA',
      },
      {
        name: 'Sumatera Barat',
        shortCode: 'SB',
      },
      {
        name: 'Sumatera Selatan',
        shortCode: 'SS',
      },
      {
        name: 'Sumatera Utara',
        shortCode: 'SU',
      },
      {
        name: 'Yogyakarta',
        shortCode: 'YO',
      },
    ],
  },
  {
    countryName: 'Iran, Islamic Republic of',
    countryShortCode: 'IR',
    regions: [
      {
        name: 'Alborz',
        shortCode: '32',
      },
      {
        name: 'Ardabīl',
        shortCode: '03',
      },
      {
        name: 'Āz̄arbāyjān-e Gharbī',
        shortCode: '02',
      },
      {
        name: 'Āz̄arbāyjān-e Sharqī',
        shortCode: '01',
      },
      {
        name: 'Būshehr',
        shortCode: '06',
      },
      {
        name: 'Chahār Maḩāl va Bakhtīārī',
        shortCode: '08',
      },
      {
        name: 'Eşfahān',
        shortCode: '04',
      },
      {
        name: 'Fārs',
        shortCode: '14',
      },
      {
        name: 'Gīlān',
        shortCode: '19',
      },
      {
        name: 'Golestān',
        shortCode: '27',
      },
      {
        name: 'Hamadān',
        shortCode: '24',
      },
      {
        name: 'Hormozgān',
        shortCode: '23',
      },
      {
        name: 'Īlām',
        shortCode: '05',
      },
      {
        name: 'Kermān',
        shortCode: '15',
      },
      {
        name: 'Kermānshāh',
        shortCode: '17',
      },
      {
        name: 'Khorāsān-e Jonūbī',
        shortCode: '29',
      },
      {
        name: 'Khorāsān-e Raẕavī',
        shortCode: '30',
      },
      {
        name: 'Khorāsān-e Shomālī',
        shortCode: '61',
      },
      {
        name: 'Khūzestān',
        shortCode: '10',
      },
      {
        name: 'Kohgīlūyeh va Bowyer Aḩmad',
        shortCode: '18',
      },
      {
        name: 'Kordestān',
        shortCode: '16',
      },
      {
        name: 'Lorestān',
        shortCode: '20',
      },
      {
        name: 'Markazi',
        shortCode: '22',
      },
      {
        name: 'Māzandarān',
        shortCode: '21',
      },
      {
        name: 'Qazvīn',
        shortCode: '28',
      },
      {
        name: 'Qom',
        shortCode: '26',
      },
      {
        name: 'Semnān',
        shortCode: '12',
      },
      {
        name: 'Sīstān va Balūchestān',
        shortCode: '13',
      },
      {
        name: 'Tehrān',
        shortCode: '07',
      },
      {
        name: 'Yazd',
        shortCode: '25',
      },
      {
        name: 'Zanjān',
        shortCode: '11',
      },
    ],
  },
  {
    countryName: 'Iraq',
    countryShortCode: 'IQ',
    regions: [
      {
        name: 'Al Anbār',
        shortCode: 'AN',
      },
      {
        name: 'Al Başrah',
        shortCode: 'BA',
      },
      {
        name: 'Al Muthanná',
        shortCode: 'MU',
      },
      {
        name: 'Al Qādisīyah',
        shortCode: 'QA',
      },
      {
        name: 'An Najaf',
        shortCode: 'NA',
      },
      {
        name: 'Arbīl',
        shortCode: 'AR',
      },
      {
        name: 'As Sulaymānīyah',
        shortCode: 'SU',
      },
      {
        name: 'Bābil',
        shortCode: 'BB',
      },
      {
        name: 'Baghdād',
        shortCode: 'BG',
      },
      {
        name: 'Dohuk',
        shortCode: 'DA',
      },
      {
        name: 'Dhī Qār',
        shortCode: 'DQ',
      },
      {
        name: 'Diyālá',
        shortCode: 'DI',
      },
      {
        name: "Karbalā'",
        shortCode: 'KA',
      },
      {
        name: 'Kirkuk',
        shortCode: 'KI',
      },
      {
        name: 'Maysān',
        shortCode: 'MA',
      },
      {
        name: 'Nīnawá',
        shortCode: 'NI',
      },
      {
        name: 'Şalāḩ ad Dīn',
        shortCode: 'SD',
      },
      {
        name: 'Wāsiţ',
        shortCode: 'WA',
      },
    ],
  },
  {
    countryName: 'Ireland',
    countryShortCode: 'IE',
    regions: [
      {
        name: 'Carlow',
        shortCode: 'CW',
      },
      {
        name: 'Cavan',
        shortCode: 'CN',
      },
      {
        name: 'Clare',
        shortCode: 'CE',
      },
      {
        name: 'Cork',
        shortCode: 'CO',
      },
      {
        name: 'Donegal',
        shortCode: 'DL',
      },
      {
        name: 'Dublin',
        shortCode: 'D',
      },
      {
        name: 'Galway',
        shortCode: 'G',
      },
      {
        name: 'Kerry',
        shortCode: 'KY',
      },
      {
        name: 'Kildare',
        shortCode: 'KE',
      },
      {
        name: 'Kilkenny',
        shortCode: 'KK',
      },
      {
        name: 'Laois',
        shortCode: 'LS',
      },
      {
        name: 'Leitrim',
        shortCode: 'LM',
      },
      {
        name: 'Limerick',
        shortCode: 'LK',
      },
      {
        name: 'Longford',
        shortCode: 'LD',
      },
      {
        name: 'Louth',
        shortCode: 'LH',
      },
      {
        name: 'Mayo',
        shortCode: 'MO',
      },
      {
        name: 'Meath',
        shortCode: 'MH',
      },
      {
        name: 'Monaghan',
        shortCode: 'MN',
      },
      {
        name: 'Offaly',
        shortCode: 'OY',
      },
      {
        name: 'Roscommon',
        shortCode: 'RN',
      },
      {
        name: 'Sligo',
        shortCode: 'SO',
      },
      {
        name: 'Tipperary',
        shortCode: 'TA',
      },
      {
        name: 'Waterford',
        shortCode: 'WD',
      },
      {
        name: 'Westmeath',
        shortCode: 'WH',
      },
      {
        name: 'Wexford',
        shortCode: 'WX',
      },
      {
        name: 'Wicklow',
        shortCode: 'WW',
      },
    ],
  },
  {
    countryName: 'Isle of Man',
    countryShortCode: 'IM',
    regions: [
      {
        name: 'Isle of Man',
      },
    ],
  },
  {
    countryName: 'Israel',
    countryShortCode: 'IL',
    regions: [
      {
        name: 'HaDarom',
        shortCode: 'D',
      },
      {
        name: 'HaMerkaz',
        shortCode: 'M',
      },
      {
        name: 'HaTsafon',
        shortCode: 'Z',
      },
      {
        name: 'H̱efa',
        shortCode: 'HA',
      },
      {
        name: 'Tel-Aviv',
        shortCode: 'TA',
      },
      {
        name: 'Yerushalayim',
        shortCode: 'JM',
      },
    ],
  },
  {
    countryName: 'Italy',
    countryShortCode: 'IT',
    regions: [
      {
        name: 'Agrigento',
        shortCode: 'AG',
      },
      {
        name: 'Alessandria',
        shortCode: 'AL',
      },
      {
        name: 'Ancona',
        shortCode: 'AN',
      },
      {
        name: 'Aosta',
        shortCode: 'AO',
      },
      {
        name: 'Arezzo',
        shortCode: 'AR',
      },
      {
        name: 'Ascoli Piceno',
        shortCode: 'AP',
      },
      {
        name: 'Asti',
        shortCode: 'AT',
      },
      {
        name: 'Avellino',
        shortCode: 'AV',
      },
      {
        name: 'Bari',
        shortCode: 'BA',
      },
      {
        name: 'Barletta-Andria-Trani',
        shortCode: 'BT',
      },
      {
        name: 'Belluno',
        shortCode: 'BL',
      },
      {
        name: 'Benevento',
        shortCode: 'BN',
      },
      {
        name: 'Bergamo',
        shortCode: 'BG',
      },
      {
        name: 'Biella',
        shortCode: 'BI',
      },
      {
        name: 'Bologna',
        shortCode: 'BO',
      },
      {
        name: 'Bolzano',
        shortCode: 'BZ',
      },
      {
        name: 'Brescia',
        shortCode: 'BS',
      },
      {
        name: 'Brindisi',
        shortCode: 'BR',
      },
      {
        name: 'Cagliari',
        shortCode: 'CA',
      },
      {
        name: 'Caltanissetta',
        shortCode: 'CL',
      },
      {
        name: 'Campobasso',
        shortCode: 'CB',
      },
      {
        name: 'Carbonia-Iglesias',
        shortCode: 'CI',
      },
      {
        name: 'Caserta',
        shortCode: 'CE',
      },
      {
        name: 'Catania',
        shortCode: 'CT',
      },
      {
        name: 'Catanzaro',
        shortCode: 'CZ',
      },
      {
        name: 'Chieti',
        shortCode: 'CH',
      },
      {
        name: 'Como',
        shortCode: 'CO',
      },
      {
        name: 'Cosenza',
        shortCode: 'CS',
      },
      {
        name: 'Cremona',
        shortCode: 'CR',
      },
      {
        name: 'Crotone',
        shortCode: 'KR',
      },
      {
        name: 'Cuneo',
        shortCode: 'CN',
      },
      {
        name: 'Enna',
        shortCode: 'EN',
      },
      {
        name: 'Fermo',
        shortCode: 'FM',
      },
      {
        name: 'Ferrara',
        shortCode: 'FE',
      },
      {
        name: 'Firenze',
        shortCode: 'FI',
      },
      {
        name: 'Foggia',
        shortCode: 'FG',
      },
      {
        name: 'Forlì-Cesena',
        shortCode: 'FC',
      },
      {
        name: 'Frosinone',
        shortCode: 'FR',
      },
      {
        name: 'Genova',
        shortCode: 'GE',
      },
      {
        name: 'Gorizia',
        shortCode: 'GO',
      },
      {
        name: 'Grosseto',
        shortCode: 'GR',
      },
      {
        name: 'Imperia',
        shortCode: 'IM',
      },
      {
        name: 'Isernia',
        shortCode: 'IS',
      },
      {
        name: "L'Aquila",
        shortCode: 'AQ',
      },
      {
        name: 'La Spezia',
        shortCode: 'SP',
      },
      {
        name: 'Latina',
        shortCode: 'LT',
      },
      {
        name: 'Lecce',
        shortCode: 'LE',
      },
      {
        name: 'Lecco',
        shortCode: 'LC',
      },
      {
        name: 'Livorno',
        shortCode: 'LI',
      },
      {
        name: 'Lodi',
        shortCode: 'LO',
      },
      {
        name: 'Lucca',
        shortCode: 'LU',
      },
      {
        name: 'Macerata',
        shortCode: 'MC',
      },
      {
        name: 'Mantova',
        shortCode: 'MN',
      },
      {
        name: 'Massa-Carrara',
        shortCode: 'MS',
      },
      {
        name: 'Matera',
        shortCode: 'MT',
      },
      {
        name: 'Medio Campidano',
        shortCode: 'VS',
      },
      {
        name: 'Messina',
        shortCode: 'ME',
      },
      {
        name: 'Milano',
        shortCode: 'MI',
      },
      {
        name: 'Modena',
        shortCode: 'MO',
      },
      {
        name: 'Monza e Brianza',
        shortCode: 'MB',
      },
      {
        name: 'Napoli',
        shortCode: 'NA',
      },
      {
        name: 'Novara',
        shortCode: 'NO',
      },
      {
        name: 'Nuoro',
        shortCode: 'NU',
      },
      {
        name: 'Ogliastra',
        shortCode: 'OG',
      },
      {
        name: 'Olbia-Tempio',
        shortCode: 'OT',
      },
      {
        name: 'Oristano',
        shortCode: 'OR',
      },
      {
        name: 'Padova',
        shortCode: 'PD',
      },
      {
        name: 'Palermo',
        shortCode: 'PA',
      },
      {
        name: 'Parma',
        shortCode: 'PR',
      },
      {
        name: 'Pavia',
        shortCode: 'PV',
      },
      {
        name: 'Perugia',
        shortCode: 'PG',
      },
      {
        name: 'Pesaro e Urbino',
        shortCode: 'PU',
      },
      {
        name: 'Pescara',
        shortCode: 'PE',
      },
      {
        name: 'Piacenza',
        shortCode: 'PC',
      },
      {
        name: 'Pisa',
        shortCode: 'PI',
      },
      {
        name: 'Pistoia',
        shortCode: 'PT',
      },
      {
        name: 'Pordenone',
        shortCode: 'PN',
      },
      {
        name: 'Potenza',
        shortCode: 'PZ',
      },
      {
        name: 'Prato',
        shortCode: 'PO',
      },
      {
        name: 'Ragusa',
        shortCode: 'RG',
      },
      {
        name: 'Ravenna',
        shortCode: 'RA',
      },
      {
        name: 'Reggio Calabria',
        shortCode: 'RC',
      },
      {
        name: 'Reggio Emilia',
        shortCode: 'RE',
      },
      {
        name: 'Rieti',
        shortCode: 'RI',
      },
      {
        name: 'Rimini',
        shortCode: 'RN',
      },
      {
        name: 'Roma',
        shortCode: 'RM',
      },
      {
        name: 'Rovigo',
        shortCode: 'RO',
      },
      {
        name: 'Salerno',
        shortCode: 'SA',
      },
      {
        name: 'Sassari',
        shortCode: 'SS',
      },
      {
        name: 'Savona',
        shortCode: 'SV',
      },
      {
        name: 'Siena',
        shortCode: 'SI',
      },
      {
        name: 'Siracusa',
        shortCode: 'SR',
      },
      {
        name: 'Sondrio',
        shortCode: 'SO',
      },
      {
        name: 'Taranto',
        shortCode: 'TA',
      },
      {
        name: 'Teramo',
        shortCode: 'TE',
      },
      {
        name: 'Terni',
        shortCode: 'TR',
      },
      {
        name: 'Torino',
        shortCode: 'TO',
      },
      {
        name: 'Trapani',
        shortCode: 'TP',
      },
      {
        name: 'Trento',
        shortCode: 'TN',
      },
      {
        name: 'Treviso',
        shortCode: 'TV',
      },
      {
        name: 'Trieste',
        shortCode: 'TS',
      },
      {
        name: 'Udine',
        shortCode: 'UD',
      },
      {
        name: 'Varese',
        shortCode: 'VA',
      },
      {
        name: 'Venezia',
        shortCode: 'VE',
      },
      {
        name: 'Verbano-Cusio-Ossola',
        shortCode: 'VB',
      },
      {
        name: 'Vercelli',
        shortCode: 'VC',
      },
      {
        name: 'Verona',
        shortCode: 'VR',
      },
      {
        name: 'Vibo Valentia',
        shortCode: 'VV',
      },
      {
        name: 'Vicenza',
        shortCode: 'VI',
      },
      {
        name: 'Viterbo',
        shortCode: 'VT',
      },
    ],
  },
  {
    countryName: 'Jamaica',
    countryShortCode: 'JM',
    regions: [
      {
        name: 'Clarendon',
        shortCode: '13',
      },
      {
        name: 'Hanover',
        shortCode: '09',
      },
      {
        name: 'Kingston',
        shortCode: '01',
      },
      {
        name: 'Manchester',
        shortCode: '12',
      },
      {
        name: 'Portland',
        shortCode: '04',
      },
      {
        name: 'Saint Andrew',
        shortCode: '02',
      },
      {
        name: 'Saint Ann',
        shortCode: '06',
      },
      {
        name: 'Saint Catherine',
        shortCode: '14',
      },
      {
        name: 'Saint Elizabeth',
        shortCode: '11',
      },
      {
        name: 'Saint James',
        shortCode: '08',
      },
      {
        name: 'Saint Mary',
        shortCode: '05',
      },
      {
        name: 'Saint Thomas',
        shortCode: '03',
      },
      {
        name: 'Trelawny',
        shortCode: '07',
      },
      {
        name: 'Westmoreland',
        shortCode: '10',
      },
    ],
  },
  {
    countryName: 'Japan',
    countryShortCode: 'JP',
    regions: [
      {
        name: 'Aichi',
        shortCode: '23',
      },
      {
        name: 'Akita',
        shortCode: '05',
      },
      {
        name: 'Aomori',
        shortCode: '02',
      },
      {
        name: 'Chiba',
        shortCode: '12',
      },
      {
        name: 'Ehime',
        shortCode: '38',
      },
      {
        name: 'Fukui',
        shortCode: '18',
      },
      {
        name: 'Fukuoka',
        shortCode: '40',
      },
      {
        name: 'Fukushima',
        shortCode: '07',
      },
      {
        name: 'Gifu',
        shortCode: '21',
      },
      {
        name: 'Gunma',
        shortCode: '10',
      },
      {
        name: 'Hiroshima',
        shortCode: '34',
      },
      {
        name: 'Hokkaido',
        shortCode: '01',
      },
      {
        name: 'Hyogo',
        shortCode: '28',
      },
      {
        name: 'Ibaraki',
        shortCode: '08',
      },
      {
        name: 'Ishikawa',
        shortCode: '17',
      },
      {
        name: 'Iwate',
        shortCode: '03',
      },
      {
        name: 'Kagawa',
        shortCode: '37',
      },
      {
        name: 'Kagoshima',
        shortCode: '46',
      },
      {
        name: 'Kanagawa',
        shortCode: '14',
      },
      {
        name: 'Kochi',
        shortCode: '39',
      },
      {
        name: 'Kumamoto',
        shortCode: '43',
      },
      {
        name: 'Kyoto',
        shortCode: '26',
      },
      {
        name: 'Mie',
        shortCode: '24',
      },
      {
        name: 'Miyagi',
        shortCode: '04',
      },
      {
        name: 'Miyazaki',
        shortCode: '45',
      },
      {
        name: 'Nagano',
        shortCode: '20',
      },
      {
        name: 'Nagasaki',
        shortCode: '42',
      },
      {
        name: 'Nara',
        shortCode: '29',
      },
      {
        name: 'Niigata',
        shortCode: '15',
      },
      {
        name: 'Oita',
        shortCode: '44',
      },
      {
        name: 'Okayama',
        shortCode: '33',
      },
      {
        name: 'Okinawa',
        shortCode: '47',
      },
      {
        name: 'Osaka',
        shortCode: '27',
      },
      {
        name: 'Saga',
        shortCode: '41',
      },
      {
        name: 'Saitama',
        shortCode: '11',
      },
      {
        name: 'Shiga',
        shortCode: '25',
      },
      {
        name: 'Shimane',
        shortCode: '32',
      },
      {
        name: 'Shizuoka',
        shortCode: '22',
      },
      {
        name: 'Tochigi',
        shortCode: '09',
      },
      {
        name: 'Tokushima',
        shortCode: '36',
      },
      {
        name: 'Tokyo',
        shortCode: '13',
      },
      {
        name: 'Tottori',
        shortCode: '31',
      },
      {
        name: 'Toyama',
        shortCode: '16',
      },
      {
        name: 'Wakayama',
        shortCode: '30',
      },
      {
        name: 'Yamagata',
        shortCode: '06',
      },
      {
        name: 'Yamaguchi',
        shortCode: '35',
      },
      {
        name: 'Yamanashi',
        shortCode: '19',
      },
    ],
  },
  {
    countryName: 'Jersey',
    countryShortCode: 'JE',
    regions: [
      {
        name: 'Jersey',
      },
    ],
  },
  {
    countryName: 'Jordan',
    countryShortCode: 'JO',
    regions: [
      {
        name: '‘Ajlūn',
        shortCode: 'AJ',
      },
      {
        name: "Al 'Aqabah",
        shortCode: 'AQ',
      },
      {
        name: 'Al Balqā’',
        shortCode: 'BA',
      },
      {
        name: 'Al Karak',
        shortCode: 'KA',
      },
      {
        name: 'Al Mafraq',
        shortCode: 'MA',
      },
      {
        name: 'Al ‘A̅şimah',
        shortCode: 'AM',
      },
      {
        name: 'Aţ Ţafīlah',
        shortCode: 'AT',
      },
      {
        name: 'Az Zarqā’',
        shortCode: 'AZ',
      },
      {
        name: 'Irbid',
        shortCode: 'IR',
      },
      {
        name: 'Jarash',
        shortCode: 'JA',
      },
      {
        name: 'Ma‘ān',
        shortCode: 'MN',
      },
      {
        name: 'Mādabā',
        shortCode: 'MD',
      },
    ],
  },
  {
    countryName: 'Kazakhstan',
    countryShortCode: 'KZ',
    regions: [
      {
        name: 'Almaty',
        shortCode: 'ALA',
      },
      {
        name: 'Aqmola',
        shortCode: 'AKM',
      },
      {
        name: 'Aqtobe',
        shortCode: 'AKT',
      },
      {
        name: 'Astana',
        shortCode: 'AST',
      },
      {
        name: 'Atyrau',
        shortCode: 'ATY',
      },
      {
        name: 'Batys Qazaqstan',
        shortCode: 'ZAP',
      },
      {
        name: 'Bayqongyr',
      },
      {
        name: 'Mangghystau',
        shortCode: 'MAN',
      },
      {
        name: 'Ongtustik Qazaqstan',
        shortCode: 'YUZ',
      },
      {
        name: 'Pavlodar',
        shortCode: 'PAV',
      },
      {
        name: 'Qaraghandy',
        shortCode: 'KAR',
      },
      {
        name: 'Qostanay',
        shortCode: 'KUS',
      },
      {
        name: 'Qyzylorda',
        shortCode: 'KZY',
      },
      {
        name: 'Shyghys Qazaqstan',
        shortCode: 'VOS',
      },
      {
        name: 'Soltustik Qazaqstan',
        shortCode: 'SEV',
      },
      {
        name: 'Zhambyl',
        shortCode: 'ZHA',
      },
    ],
  },
  {
    countryName: 'Kenya',
    countryShortCode: 'KE',
    regions: [
      {
        name: 'Baringo',
        shortCode: '01',
      },
      {
        name: 'Bomet',
        shortCode: '02',
      },
      {
        name: 'Bungoma',
        shortCode: '03',
      },
      {
        name: 'Busia',
        shortCode: '04',
      },
      {
        name: 'Eleyo/Marakwet',
        shortCode: '05',
      },
      {
        name: 'Embu',
        shortCode: '06',
      },
      {
        name: 'Garissa',
        shortCode: '07',
      },
      {
        name: 'Homa Bay',
        shortCode: '08',
      },
      {
        name: 'Isiolo',
        shortCode: '09',
      },
      {
        name: 'Kajiado',
        shortCode: '10',
      },
      {
        name: 'Kakamega',
        shortCode: '11',
      },
      {
        name: 'Kericho',
        shortCode: '12',
      },
      {
        name: 'Kiambu',
        shortCode: '13',
      },
      {
        name: 'Kilifi',
        shortCode: '14',
      },
      {
        name: 'Kirinyaga',
        shortCode: '15',
      },
      {
        name: 'Kisii',
        shortCode: '16',
      },
      {
        name: 'Kisumu',
        shortCode: '17',
      },
      {
        name: 'Kitui',
        shortCode: '18',
      },
      {
        name: 'Kwale',
        shortCode: '19',
      },
      {
        name: 'Laikipia',
        shortCode: '20',
      },
      {
        name: 'Lamu',
        shortCode: '21',
      },
      {
        name: 'Machakos',
        shortCode: '22',
      },
      {
        name: 'Makueni',
        shortCode: '23',
      },
      {
        name: 'Mandera',
        shortCode: '24',
      },
      {
        name: 'Marsabit',
        shortCode: '25',
      },
      {
        name: 'Meru',
        shortCode: '26',
      },
      {
        name: 'Migori',
        shortCode: '27',
      },
      {
        name: 'Mombasa',
        shortCode: '28',
      },
      {
        name: "Murang'a",
        shortCode: '29',
      },
      {
        name: 'Nairobi City',
        shortCode: '30',
      },
      {
        name: 'Nakuru',
        shortCode: '31',
      },
      {
        name: 'Nandi',
        shortCode: '32',
      },
      {
        name: 'Narok',
        shortCode: '33',
      },
      {
        name: 'Nyamira',
        shortCode: '34',
      },
      {
        name: 'Nyandarua',
        shortCode: '35',
      },
      {
        name: 'Nyeri',
        shortCode: '36',
      },
      {
        name: 'Samburu',
        shortCode: '37',
      },
      {
        name: 'Siaya',
        shortCode: '38',
      },
      {
        name: 'Taita/Taveta',
        shortCode: '39',
      },
      {
        name: 'Tana River',
        shortCode: '40',
      },
      {
        name: 'Tharaka-Nithi',
        shortCode: '41',
      },
      {
        name: 'Trans Nzoia',
        shortCode: '42',
      },
      {
        name: 'Turkana',
        shortCode: '43',
      },
      {
        name: 'Uasin Gishu',
        shortCode: '44',
      },
      {
        name: 'Vihiga',
        shortCode: '45',
      },
      {
        name: 'Wajir',
        shortCode: '46',
      },
      {
        name: 'West Pokot',
        shortCode: '47',
      },
    ],
  },
  {
    countryName: 'Kiribati',
    countryShortCode: 'KI',
    regions: [
      {
        name: 'Abaiang',
      },
      {
        name: 'Abemama',
      },
      {
        name: 'Aranuka',
      },
      {
        name: 'Arorae',
      },
      {
        name: 'Banaba',
      },
      {
        name: 'Beru',
      },
      {
        name: 'Butaritari',
      },
      {
        name: 'Central Gilberts',
      },
      {
        name: 'Gilbert Islands',
        shortCode: 'G',
      },
      {
        name: 'Kanton',
      },
      {
        name: 'Kiritimati',
      },
      {
        name: 'Kuria',
      },
      {
        name: 'Line Islands',
        shortCode: 'L',
      },
      {
        name: 'Maiana',
      },
      {
        name: 'Makin',
      },
      {
        name: 'Marakei',
      },
      {
        name: 'Nikunau',
      },
      {
        name: 'Nonouti',
      },
      {
        name: 'Northern Gilberts',
      },
      {
        name: 'Onotoa',
      },
      {
        name: 'Phoenix Islands',
        shortCode: 'P',
      },
      {
        name: 'Southern Gilberts',
      },
      {
        name: 'Tabiteuea',
      },
      {
        name: 'Tabuaeran',
      },
      {
        name: 'Tamana',
      },
      {
        name: 'Tarawa',
      },
      {
        name: 'Teraina',
      },
    ],
  },
  {
    countryName: "Korea, Democratic People's Republic of",
    countryShortCode: 'KP',
    regions: [
      {
        name: 'Chagang-do (Chagang Province)',
        shortCode: '04',
      },
      {
        name: 'Hamgyong-bukto (North Hamgyong Province)',
        shortCode: '09',
      },
      {
        name: 'Hamgyong-namdo (South Hamgyong Province)',
        shortCode: '08',
      },
      {
        name: 'Hwanghae-bukto (North Hwanghae Province)',
        shortCode: '06',
      },
      {
        name: 'Hwanghae-namdo (South Hwanghae Province)',
        shortCode: '05',
      },
      {
        name: 'Kangwon-do (Kangwon Province)',
        shortCode: '07',
      },
      {
        name: 'Nasŏn (Najin-Sŏnbong)',
        shortCode: '13',
      },
      {
        name: "P'yongan-bukto (North P'yongan Province)",
        shortCode: '03',
      },
      {
        name: "P'yongan-namdo (South P'yongan Province)",
        shortCode: '02',
      },
      {
        name: "P'yongyang-si (P'yongyang City)",
        shortCode: '01',
      },
      {
        name: 'Yanggang-do (Yanggang Province)',
        shortCode: '10',
      },
    ],
  },
  {
    countryName: 'Korea, Republic of',
    countryShortCode: 'KR',
    regions: [
      {
        name: "Ch'ungch'ongbuk-do",
        shortCode: '43',
      },
      {
        name: "Ch'ungch'ongnam-do",
        shortCode: '44',
      },
      {
        name: 'Cheju-do',
        shortCode: '49',
      },
      {
        name: 'Chollabuk-do',
        shortCode: '45',
      },
      {
        name: 'Chollanam-do',
        shortCode: '46',
      },
      {
        name: "Inch'on-Kwangyokhi",
        shortCode: '28',
      },
      {
        name: 'Kang-won-do',
        shortCode: '42',
      },
      {
        name: 'Kwangju-Kwangyokshi',
        shortCode: '28',
      },
      {
        name: 'Kyonggi-do',
        shortCode: '41',
      },
      {
        name: 'Kyongsangbuk-do',
        shortCode: '47',
      },
      {
        name: 'Kyongsangnam-do',
        shortCode: '48',
      },
      {
        name: 'Pusan-Kwangyokshi',
        shortCode: '26',
      },
      {
        name: "Seoul-T'ukpyolshi",
        shortCode: '11',
      },
      {
        name: 'Sejong',
        shortCode: '50',
      },
      {
        name: 'Taegu-Kwangyokshi',
        shortCode: '27',
      },
      {
        name: 'Taejon-Kwangyokshi',
        shortCode: '30',
      },
      {
        name: 'Ulsan-Kwangyokshi',
        shortCode: '31',
      },
    ],
  },
  {
    countryName: 'Kuwait',
    countryShortCode: 'KW',
    regions: [
      {
        name: 'Al Aḩmadi',
        shortCode: 'AH',
      },
      {
        name: 'Al Farwānīyah',
        shortCode: 'FA',
      },
      {
        name: 'Al Jahrā’',
        shortCode: 'JA',
      },
      {
        name: 'Al ‘Āşimah',
        shortCode: 'KU',
      },
      {
        name: 'Ḩawallī',
        shortCode: 'HA',
      },
      {
        name: 'Mubārak al Kabir',
        shortCode: 'MU',
      },
    ],
  },
  {
    countryName: 'Kyrgyzstan',
    countryShortCode: 'KG',
    regions: [
      {
        name: 'Batken Oblasty',
        shortCode: 'B',
      },
      {
        name: 'Bishkek Shaary',
        shortCode: 'GB',
      },
      {
        name: 'Chuy Oblasty (Bishkek)',
        shortCode: 'C',
      },
      {
        name: 'Jalal-Abad Oblasty',
        shortCode: 'J',
      },
      {
        name: 'Naryn Oblasty',
        shortCode: 'N',
      },
      {
        name: 'Osh Oblasty',
        shortCode: 'O',
      },
      {
        name: 'Talas Oblasty',
        shortCode: 'T',
      },
      {
        name: 'Ysyk-Kol Oblasty (Karakol)',
        shortCode: 'Y',
      },
    ],
  },
  {
    countryName: 'Laos',
    countryShortCode: 'LA',
    regions: [
      {
        name: 'Attapu',
        shortCode: 'AT',
      },
      {
        name: 'Bokèo',
        shortCode: 'BK',
      },
      {
        name: 'Bolikhamxai',
        shortCode: 'BL',
      },
      {
        name: 'Champasak',
        shortCode: 'CH',
      },
      {
        name: 'Houaphan',
        shortCode: 'HO',
      },
      {
        name: 'Khammouan',
        shortCode: 'KH',
      },
      {
        name: 'Louang Namtha',
        shortCode: 'LM',
      },
      {
        name: 'Louangphabang',
        shortCode: 'LP',
      },
      {
        name: 'Oudômxai',
        shortCode: 'OU',
      },
      {
        name: 'Phôngsali',
        shortCode: 'PH',
      },
      {
        name: 'Salavan',
        shortCode: 'SL',
      },
      {
        name: 'Savannakhét',
        shortCode: 'SV',
      },
      {
        name: 'Vientiane',
        shortCode: 'VI',
      },
      {
        name: 'Xaignabouli',
        shortCode: 'XA',
      },
      {
        name: 'Xékong',
        shortCode: 'XE',
      },
      {
        name: 'Xaisomboun',
        shortCode: 'XS',
      },
      {
        name: 'Xiangkhouang',
        shortCode: 'XI',
      },
    ],
  },
  {
    countryName: 'Latvia',
    countryShortCode: 'LV',
    regions: [
      {
        name: 'Aglona',
        shortCode: '001',
      },
      {
        name: 'Aizkraukle',
        shortCode: '002',
      },
      {
        name: 'Aizpute',
        shortCode: '003',
      },
      {
        name: 'Aknīste',
        shortCode: '004',
      },
      {
        name: 'Aloja',
        shortCode: '005',
      },
      {
        name: 'Alsunga',
        shortCode: '06',
      },
      {
        name: 'Alūksne',
        shortCode: '007',
      },
      {
        name: 'Amata',
        shortCode: '008',
      },
      {
        name: 'Ape',
        shortCode: '009',
      },
      {
        name: 'Auce',
        shortCode: '010',
      },
      {
        name: 'Ādaži',
        shortCode: '011',
      },
      {
        name: 'Babīte',
        shortCode: '012',
      },
      {
        name: 'Baldone',
        shortCode: '013',
      },
      {
        name: 'Baltinava',
        shortCode: '014',
      },
      {
        name: 'Balvi',
        shortCode: '015',
      },
      {
        name: 'Bauska',
        shortCode: '016',
      },
      {
        name: 'Beverīna',
        shortCode: '017',
      },
      {
        name: 'Brocēni',
        shortCode: '018',
      },
      {
        name: 'Burtnieki',
        shortCode: '019',
      },
      {
        name: 'Carnikava',
        shortCode: '020',
      },
      {
        name: 'Cesvaine',
        shortCode: '021',
      },
      {
        name: 'Cēsis',
        shortCode: '022',
      },
      {
        name: 'Cibla',
        shortCode: '023',
      },
      {
        name: 'Dagda',
        shortCode: '024',
      },
      {
        name: 'Daugavpils',
        shortCode: '025',
      },
      {
        name: 'Daugavpils (City)',
        shortCode: 'DGV',
      },
      {
        name: 'Dobele',
        shortCode: '026',
      },
      {
        name: 'Dundaga',
        shortCode: '027',
      },
      {
        name: 'Durbe',
        shortCode: '028',
      },
      {
        name: 'Engure',
        shortCode: '029',
      },
      {
        name: 'Ērgļi',
        shortCode: '030',
      },
      {
        name: 'Garkalne',
        shortCode: '031',
      },
      {
        name: 'Grobiņa',
        shortCode: '032',
      },
      {
        name: 'Gulbene',
        shortCode: '033',
      },
      {
        name: 'Iecava',
        shortCode: '034',
      },
      {
        name: 'Ikšķile',
        shortCode: '035',
      },
      {
        name: 'Ilūkste',
        shortCode: '036',
      },
      {
        name: 'Inčukalns',
        shortCode: '037',
      },
      {
        name: 'Jaunjelgava',
        shortCode: '038',
      },
      {
        name: 'Jaunpiebalga',
        shortCode: '039',
      },
      {
        name: 'Jaunpils',
        shortCode: '040',
      },
      {
        name: 'Jelgava',
        shortCode: '041',
      },
      {
        name: 'Jelgava (City)',
        shortCode: 'JEL',
      },
      {
        name: 'Jēkabpils',
        shortCode: '042',
      },
      {
        name: 'Jēkabpils (City)',
        shortCode: 'JKB',
      },
      {
        name: 'Jūrmala (City)',
        shortCode: 'JUR',
      },
      {
        name: 'Kandava',
        shortCode: '043',
      },
      {
        name: 'Kārsava',
        shortCode: '044',
      },
      {
        name: 'Kocēni',
        shortCode: '045',
      },
      {
        name: 'Koknese',
        shortCode: '046',
      },
      {
        name: 'Krāslava',
        shortCode: '047',
      },
      {
        name: 'Krimulda',
        shortCode: '048',
      },
      {
        name: 'Krustpils',
        shortCode: '049',
      },
      {
        name: 'Kuldīga',
        shortCode: '050',
      },
      {
        name: 'Ķegums',
        shortCode: '051',
      },
      {
        name: 'Ķekava',
        shortCode: '052',
      },
      {
        name: 'Lielvārde',
        shortCode: '053',
      },
      {
        name: 'Liepāja',
        shortCode: 'LPX',
      },
      {
        name: 'Limbaži',
        shortCode: '054',
      },
      {
        name: 'Līgatne',
        shortCode: '055',
      },
      {
        name: 'Līvāni',
        shortCode: '056',
      },
      {
        name: 'Lubāna',
        shortCode: '057',
      },
      {
        name: 'Ludza',
        shortCode: '058',
      },
      {
        name: 'Madona',
        shortCode: '059',
      },
      {
        name: 'Mazsalaca',
        shortCode: '060',
      },
      {
        name: 'Mālpils',
        shortCode: '061',
      },
      {
        name: 'Mārupe',
        shortCode: '062',
      },
      {
        name: 'Mērsrags',
        shortCode: '063',
      },
      {
        name: 'Naukšēni',
        shortCode: '064',
      },
      {
        name: 'Nereta',
        shortCode: '065',
      },
      {
        name: 'Nīca',
        shortCode: '066',
      },
      {
        name: 'Ogre',
        shortCode: '067',
      },
      {
        name: 'Olaine',
        shortCode: '068',
      },
      {
        name: 'Ozolnieki',
        shortCode: '069',
      },
      {
        name: 'Pārgauja',
        shortCode: '070',
      },
      {
        name: 'Pāvilosta',
        shortCode: '071',
      },
      {
        name: 'Pļaviņas',
        shortCode: '072',
      },
      {
        name: 'Preiļi',
        shortCode: '073',
      },
      {
        name: 'Priekule',
        shortCode: '074',
      },
      {
        name: 'Priekuļi',
        shortCode: '075',
      },
      {
        name: 'Rauna',
        shortCode: '076',
      },
      {
        name: 'Rēzekne',
        shortCode: '077',
      },
      {
        name: 'Rēzekne (City)',
        shortCode: 'REZ',
      },
      {
        name: 'Riebiņi',
        shortCode: '078',
      },
      {
        name: 'Rīga',
        shortCode: 'RIX',
      },
      {
        name: 'Roja',
        shortCode: '079',
      },
      {
        name: 'Ropaži',
        shortCode: '080',
      },
      {
        name: 'Rucava',
        shortCode: '081',
      },
      {
        name: 'Rugāji',
        shortCode: '082',
      },
      {
        name: 'Rundāle',
        shortCode: '083',
      },
      {
        name: 'Rūjiena',
        shortCode: '084',
      },
      {
        name: 'Sala',
        shortCode: '085',
      },
      {
        name: 'Salacgrīva',
        shortCode: '086',
      },
      {
        name: 'Salaspils',
        shortCode: '087',
      },
      {
        name: 'Saldus',
        shortCode: '088',
      },
      {
        name: 'Saulkrasti',
        shortCode: '089',
      },
      {
        name: 'Sēja',
        shortCode: '090',
      },
      {
        name: 'Sigulda',
        shortCode: '091',
      },
      {
        name: 'Skrīveri',
        shortCode: '092',
      },
      {
        name: 'Skrunda',
        shortCode: '093',
      },
      {
        name: 'Smiltene',
        shortCode: '094',
      },
      {
        name: 'Stopiņi',
        shortCode: '095',
      },
      {
        name: 'Strenči',
        shortCode: '096',
      },
      {
        name: 'Talsi',
        shortCode: '097',
      },
      {
        name: 'Tērvete',
        shortCode: '098',
      },
      {
        name: 'Tukums',
        shortCode: '099',
      },
      {
        name: 'Vaiņode',
        shortCode: '100',
      },
      {
        name: 'Valka',
        shortCode: '101',
      },
      {
        name: 'Valmiera',
        shortCode: 'VMR',
      },
      {
        name: 'Varakļāni',
        shortCode: '102',
      },
      {
        name: 'Vārkava',
        shortCode: '103',
      },
      {
        name: 'Vecpiebalga',
        shortCode: '104',
      },
      {
        name: 'Vecumnieki',
        shortCode: '105',
      },
      {
        name: 'Ventspils',
        shortCode: '106',
      },
      {
        name: 'Ventspils (City)',
        shortCode: 'VEN',
      },
      {
        name: 'Viesīte',
        shortCode: '107',
      },
      {
        name: 'Viļaka',
        shortCode: '108',
      },
      {
        name: 'Viļāni',
        shortCode: '109',
      },
      {
        name: 'Zilupe',
        shortCode: '110',
      },
    ],
  },
  {
    countryName: 'Lebanon',
    countryShortCode: 'LB',
    regions: [
      {
        name: 'Aakkâr',
        shortCode: 'AK',
      },
      {
        name: 'Baalbelk-Hermel',
        shortCode: 'BH',
      },
      {
        name: 'Béqaa',
        shortCode: 'BI',
      },
      {
        name: 'Beyrouth',
        shortCode: 'BA',
      },
      {
        name: 'Liban-Nord',
        shortCode: 'AS',
      },
      {
        name: 'Liban-Sud',
        shortCode: 'JA',
      },
      {
        name: 'Mont-Liban',
        shortCode: 'JL',
      },
      {
        name: 'Nabatîyé',
        shortCode: 'NA',
      },
    ],
  },
  {
    countryName: 'Lesotho',
    countryShortCode: 'LS',
    regions: [
      {
        name: 'Berea',
        shortCode: 'D',
      },
      {
        name: 'Butha-Buthe',
        shortCode: 'B',
      },
      {
        name: 'Leribe',
        shortCode: 'C',
      },
      {
        name: 'Mafeteng',
        shortCode: 'E',
      },
      {
        name: 'Maseru',
        shortCode: 'A',
      },
      {
        name: 'Mohales Hoek',
        shortCode: 'F',
      },
      {
        name: 'Mokhotlong',
        shortCode: 'J',
      },
      {
        name: "Qacha's Nek",
        shortCode: 'H',
      },
      {
        name: 'Quthing',
        shortCode: 'G',
      },
      {
        name: 'Thaba-Tseka',
        shortCode: 'K',
      },
    ],
  },
  {
    countryName: 'Liberia',
    countryShortCode: 'LR',
    regions: [
      {
        name: 'Bomi',
        shortCode: 'BM',
      },
      {
        name: 'Bong',
        shortCode: 'BG',
      },
      {
        name: 'Gbarpolu',
        shortCode: 'GP',
      },
      {
        name: 'Grand Bassa',
        shortCode: 'GB',
      },
      {
        name: 'Grand Cape Mount',
        shortCode: 'CM',
      },
      {
        name: 'Grand Gedeh',
        shortCode: 'GG',
      },
      {
        name: 'Grand Kru',
        shortCode: 'GK',
      },
      {
        name: 'Lofa',
        shortCode: 'LO',
      },
      {
        name: 'Margibi',
        shortCode: 'MG',
      },
      {
        name: 'Maryland',
        shortCode: 'MY',
      },
      {
        name: 'Montserrado',
        shortCode: 'MO',
      },
      {
        name: 'Nimba',
        shortCode: 'NI',
      },
      {
        name: 'River Cess',
        shortCode: 'RI',
      },
      {
        name: 'River Geee',
        shortCode: 'RG',
      },
      {
        name: 'Sinoe',
        shortCode: 'SI',
      },
    ],
  },
  {
    countryName: 'Libya',
    countryShortCode: 'LY',
    regions: [
      {
        name: 'Al Buţnān',
        shortCode: 'BU',
      },
      {
        name: 'Al Jabal al Akhḑar',
        shortCode: 'JA',
      },
      {
        name: 'Al Jabal al Gharbī',
        shortCode: 'JG',
      },
      {
        name: 'Al Jafārah',
        shortCode: 'JA',
      },
      {
        name: 'Al Jufrah',
        shortCode: 'JU',
      },
      {
        name: 'Al Kufrah',
        shortCode: 'FK',
      },
      {
        name: 'Al Marj',
        shortCode: 'MJ',
      },
      {
        name: 'Al Marquab',
        shortCode: 'MB',
      },
      {
        name: 'Al Wāḩāt',
        shortCode: 'WA',
      },
      {
        name: 'An Nuqaţ al Khams',
        shortCode: 'NQ',
      },
      {
        name: 'Az Zāwiyah',
        shortCode: 'ZA',
      },
      {
        name: 'Banghāzī',
        shortCode: 'BA',
      },
      {
        name: 'Darnah',
        shortCode: 'DR',
      },
      {
        name: 'Ghāt',
        shortCode: 'GH',
      },
      {
        name: 'Mişrātah',
        shortCode: 'MI',
      },
      {
        name: 'Murzuq',
        shortCode: 'MQ',
      },
      {
        name: 'Nālūt',
        shortCode: 'NL',
      },
      {
        name: 'Sabhā',
        shortCode: 'SB',
      },
      {
        name: 'Surt',
        shortCode: 'SR',
      },
      {
        name: 'Ţarābulus',
        shortCode: 'TB',
      },
      {
        name: 'Yafran',
        shortCode: 'WD',
      },
      {
        name: 'Wādī ash Shāţiʾ',
        shortCode: 'WS',
      },
    ],
  },
  {
    countryName: 'Liechtenstein',
    countryShortCode: 'LI',
    regions: [
      {
        name: 'Balzers',
        shortCode: '01',
      },
      {
        name: 'Eschen',
        shortCode: '02',
      },
      {
        name: 'Gamprin',
        shortCode: '03',
      },
      {
        name: 'Mauren',
        shortCode: '04',
      },
      {
        name: 'Planken',
        shortCode: '05',
      },
      {
        name: 'Ruggell',
        shortCode: '06',
      },
      {
        name: 'Schaan',
        shortCode: '07',
      },
      {
        name: 'Schellenberg',
        shortCode: '08',
      },
      {
        name: 'Triesen',
        shortCode: '09',
      },
      {
        name: 'Triesenberg',
        shortCode: '10',
      },
      {
        name: 'Vaduz',
        shortCode: '11',
      },
    ],
  },
  {
    countryName: 'Lithuania',
    countryShortCode: 'LT',
    regions: [
      {
        name: 'Alytaus',
        shortCode: 'AL',
      },
      {
        name: 'Kauno',
        shortCode: 'KU',
      },
      {
        name: 'Klaipėdos',
        shortCode: 'KL',
      },
      {
        name: 'Marijampolės',
        shortCode: 'MR',
      },
      {
        name: 'Panevėžio',
        shortCode: 'PN',
      },
      {
        name: 'Šiaulių',
        shortCode: 'SA',
      },
      {
        name: 'Tauragės',
        shortCode: 'TA',
      },
      {
        name: 'Telšių',
        shortCode: 'TE',
      },
      {
        name: 'Utenos',
        shortCode: 'UT',
      },
      {
        name: 'Vilniaus',
        shortCode: 'VL',
      },
    ],
  },
  {
    countryName: 'Luxembourg',
    countryShortCode: 'LU',
    regions: [
      {
        name: 'Capellen',
        shortCode: 'CA',
      },
      {
        name: 'Clevaux',
        shortCode: 'CL',
      },
      {
        name: 'Diekirch',
        shortCode: 'DI',
      },
      {
        name: 'Echternach',
        shortCode: 'EC',
      },
      {
        name: 'Esch-sur-Alzette',
        shortCode: 'ES',
      },
      {
        name: 'Grevenmacher',
        shortCode: 'GR',
      },
      {
        name: 'Luxembourg',
        shortCode: 'LU',
      },
      {
        name: 'Mersch',
        shortCode: 'ME',
      },
      {
        name: 'Redange',
        shortCode: 'RD',
      },
      {
        name: 'Remich',
        shortCode: 'RM',
      },
      {
        name: 'Vianden',
        shortCode: 'VD',
      },
      {
        name: 'Wiltz',
        shortCode: 'WI',
      },
    ],
  },
  {
    countryName: 'Macao',
    countryShortCode: 'MO',
    regions: [
      {
        name: 'Macao',
      },
    ],
  },
  {
    countryName: 'Macedonia, Republic of',
    countryShortCode: 'MK',
    regions: [
      {
        name: 'Aračinovo',
        shortCode: '02',
      },
      {
        name: 'Berovo',
        shortCode: '03',
      },
      {
        name: 'Bitola',
        shortCode: '04',
      },
      {
        name: 'Bogdanci',
        shortCode: '05',
      },
      {
        name: 'Bogovinje',
        shortCode: '06',
      },
      {
        name: 'Bosilovo',
        shortCode: '07',
      },
      {
        name: 'Brvenica',
        shortCode: '08',
      },
      {
        name: 'Centar Župa',
        shortCode: '78',
      },
      {
        name: 'Čaška',
        shortCode: '08',
      },
      {
        name: 'Češinovo-Obleševo',
        shortCode: '81',
      },
      {
        name: 'Čučer Sandevo',
        shortCode: '82',
      },
      {
        name: 'Debar',
        shortCode: '21',
      },
      {
        name: 'Debarca',
        shortCode: '22',
      },
      {
        name: 'Delčevo',
        shortCode: '23',
      },
      {
        name: 'Demir Hisar',
        shortCode: '25',
      },
      {
        name: 'Demir Kapija',
        shortCode: '24',
      },
      {
        name: 'Doran',
        shortCode: '26',
      },
      {
        name: 'Dolneni',
        shortCode: '27',
      },
      {
        name: 'Gevgelija',
        shortCode: '18',
      },
      {
        name: 'Gostivar',
        shortCode: '19',
      },
      {
        name: 'Gradsko',
        shortCode: '20',
      },
      {
        name: 'Ilinden',
        shortCode: '34',
      },
      {
        name: 'Jegunovce',
        shortCode: '35',
      },
      {
        name: 'Karbinci',
        shortCode: '37',
      },
      {
        name: 'Kavadarci',
        shortCode: '36',
      },
      {
        name: 'Kičevo',
        shortCode: '40',
      },
      {
        name: 'Kočani',
        shortCode: '42',
      },
      {
        name: 'Konče',
        shortCode: '41',
      },
      {
        name: 'Kratovo',
        shortCode: '43',
      },
      {
        name: 'Kriva Palanka',
        shortCode: '44',
      },
      {
        name: 'Krivogaštani',
        shortCode: '45',
      },
      {
        name: 'Kruševo',
        shortCode: '46',
      },
      {
        name: 'Kumanovo',
        shortCode: '47',
      },
      {
        name: 'Lipkovo',
        shortCode: '48',
      },
      {
        name: 'Lozovo',
        shortCode: '49',
      },
      {
        name: 'Makedonska Kamenica',
        shortCode: '51',
      },
      {
        name: 'Makedonski Brod',
        shortCode: '52',
      },
      {
        name: 'Mavrovo i Rostuša',
        shortCode: '50',
      },
      {
        name: 'Mogila',
        shortCode: '53',
      },
      {
        name: 'Negotino',
        shortCode: '54',
      },
      {
        name: 'Novaci',
        shortCode: '55',
      },
      {
        name: 'Novo Selo',
        shortCode: '56',
      },
      {
        name: 'Ohrid',
        shortCode: '58',
      },
      {
        name: 'Pehčevo',
        shortCode: '60',
      },
      {
        name: 'Petrovec',
        shortCode: '59',
      },
      {
        name: 'Plasnica',
        shortCode: '61',
      },
      {
        name: 'Prilep',
        shortCode: '62',
      },
      {
        name: 'Probištip',
        shortCode: '63',
      },
      {
        name: 'Radoviš',
        shortCode: '',
      },
      {
        name: 'Rankovce',
        shortCode: '65',
      },
      {
        name: 'Resen',
        shortCode: '66',
      },
      {
        name: 'Rosoman',
        shortCode: '67',
      },
      {
        name: 'Skopje',
        shortCode: '85',
      },
      {
        name: 'Sopište',
        shortCode: '70',
      },
      {
        name: 'Staro Nagoričane',
        shortCode: '71',
      },
      {
        name: 'Struga',
        shortCode: '72',
      },
      {
        name: 'Strumica',
        shortCode: '73',
      },
      {
        name: 'Studeničani',
        shortCode: '74',
      },
      {
        name: 'Sveti Nikole',
        shortCode: '69',
      },
      {
        name: 'Štip',
        shortCode: '83',
      },
      {
        name: 'Tearce',
        shortCode: '75',
      },
      {
        name: 'Tetovo',
        shortCode: '76',
      },
      {
        name: 'Valandovo',
        shortCode: '10',
      },
      {
        name: 'Vasilevo',
        shortCode: '11',
      },
      {
        name: 'Veles',
        shortCode: '13',
      },
      {
        name: 'Vevčani',
        shortCode: '12',
      },
      {
        name: 'Vinica',
        shortCode: '14',
      },
      {
        name: 'Vrapčište',
        shortCode: '16',
      },
      {
        name: 'Zelenikovo',
        shortCode: '32',
      },
      {
        name: 'Zrnovci',
        shortCode: '33',
      },
      {
        name: 'Želino',
        shortCode: '30',
      },
    ],
  },
  {
    countryName: 'Madagascar',
    countryShortCode: 'MG',
    regions: [
      {
        name: 'Antananarivo',
        shortCode: 'T',
      },
      {
        name: 'Antsiranana',
        shortCode: 'D',
      },
      {
        name: 'Fianarantsoa',
        shortCode: 'F',
      },
      {
        name: 'Mahajanga',
        shortCode: 'M',
      },
      {
        name: 'Toamasina',
        shortCode: 'A',
      },
      {
        name: 'Toliara',
        shortCode: 'U',
      },
    ],
  },
  {
    countryName: 'Malawi',
    countryShortCode: 'MW',
    regions: [
      {
        name: 'Balaka',
        shortCode: 'BA',
      },
      {
        name: 'Blantyre',
        shortCode: 'BL',
      },
      {
        name: 'Chikwawa',
        shortCode: 'CK',
      },
      {
        name: 'Chiradzulu',
        shortCode: 'CR',
      },
      {
        name: 'Chitipa',
        shortCode: 'CT',
      },
      {
        name: 'Dedza',
        shortCode: 'DE',
      },
      {
        name: 'Dowa',
        shortCode: 'DO',
      },
      {
        name: 'Karonga',
        shortCode: 'KR',
      },
      {
        name: 'Kasungu',
        shortCode: 'KS',
      },
      {
        name: 'Likoma',
        shortCode: 'LK',
      },
      {
        name: 'Lilongwe',
        shortCode: 'LI',
      },
      {
        name: 'Machinga',
        shortCode: 'MH',
      },
      {
        name: 'Mangochi',
        shortCode: 'MG',
      },
      {
        name: 'Mchinji',
        shortCode: 'MC',
      },
      {
        name: 'Mulanje',
        shortCode: 'MU',
      },
      {
        name: 'Mwanza',
        shortCode: 'MW',
      },
      {
        name: 'Mzimba',
        shortCode: 'MZ',
      },
      {
        name: 'Nkhata Bay',
        shortCode: 'NE',
      },
      {
        name: 'Nkhotakota',
        shortCode: 'NB',
      },
      {
        name: 'Nsanje',
        shortCode: 'NS',
      },
      {
        name: 'Ntcheu',
        shortCode: 'NU',
      },
      {
        name: 'Ntchisi',
        shortCode: 'NI',
      },
      {
        name: 'Phalombe',
        shortCode: 'PH',
      },
      {
        name: 'Rumphi',
        shortCode: 'RU',
      },
      {
        name: 'Salima',
        shortCode: 'SA',
      },
      {
        name: 'Thyolo',
        shortCode: 'TH',
      },
      {
        name: 'Zomba',
        shortCode: 'ZO',
      },
    ],
  },
  {
    countryName: 'Malaysia',
    countryShortCode: 'MY',
    regions: [
      {
        name: 'Johor',
        shortCode: '01',
      },
      {
        name: 'Kedah',
        shortCode: '02',
      },
      {
        name: 'Kelantan',
        shortCode: '03',
      },
      {
        name: 'Melaka',
        shortCode: '04',
      },
      {
        name: 'Negeri Sembilan',
        shortCode: '05',
      },
      {
        name: 'Pahang',
        shortCode: '06',
      },
      {
        name: 'Perak',
        shortCode: '08',
      },
      {
        name: 'Perlis',
        shortCode: '09',
      },
      {
        name: 'Pulau Pinang',
        shortCode: '07',
      },
      {
        name: 'Sabah',
        shortCode: '12',
      },
      {
        name: 'Sarawak',
        shortCode: '13',
      },
      {
        name: 'Selangor',
        shortCode: '10',
      },
      {
        name: 'Terengganu',
        shortCode: '11',
      },
      {
        name: 'Wilayah Persekutuan (Kuala Lumpur)',
        shortCode: '14',
      },
      {
        name: 'Wilayah Persekutuan (Labuan)',
        shortCode: '15',
      },
      {
        name: 'Wilayah Persekutuan (Putrajaya)',
        shortCode: '16',
      },
    ],
  },
  {
    countryName: 'Maldives',
    countryShortCode: 'MV',
    regions: [
      {
        name: 'Alifu Alifu',
        shortCode: '02',
      },
      {
        name: 'Alifu Dhaalu',
        shortCode: '00',
      },
      {
        name: 'Baa',
        shortCode: '20',
      },
      {
        name: 'Dhaalu',
        shortCode: '17',
      },
      {
        name: 'Faafu',
        shortCode: '14',
      },
      {
        name: 'Gaafu Alifu',
        shortCode: '27',
      },
      {
        name: 'Gaafu Dhaalu',
        shortCode: '28',
      },
      {
        name: 'Gnaviyani',
        shortCode: '29',
      },
      {
        name: 'Haa Alifu',
        shortCode: '07',
      },
      {
        name: 'Haa Dhaalu',
        shortCode: '23',
      },
      {
        name: 'Kaafu',
        shortCode: '29',
      },
      {
        name: 'Laamu',
        shortCode: '05',
      },
      {
        name: 'Lhaviyani',
        shortCode: '03',
      },
      {
        name: 'Malé',
        shortCode: 'MLE',
      },
      {
        name: 'Meemu',
        shortCode: '12',
      },
      {
        name: 'Noonu',
        shortCode: '25',
      },
      {
        name: 'Raa',
        shortCode: '13',
      },
      {
        name: 'Seenu',
        shortCode: '01',
      },
      {
        name: 'Shaviyani',
        shortCode: '24',
      },
      {
        name: 'Thaa',
        shortCode: '08',
      },
      {
        name: 'Vaavu',
        shortCode: '04',
      },
    ],
  },
  {
    countryName: 'Mali',
    countryShortCode: 'ML',
    regions: [
      {
        name: 'Bamako',
        shortCode: 'BKO',
      },
      {
        name: 'Gao',
        shortCode: '7',
      },
      {
        name: 'Kayes',
        shortCode: '1',
      },
      {
        name: 'Kidal',
        shortCode: '8',
      },
      {
        name: 'Koulikoro',
        shortCode: '2',
      },
      {
        name: 'Mopti',
        shortCode: '5',
      },
      {
        name: 'Segou',
        shortCode: '4',
      },
      {
        name: 'Sikasso',
        shortCode: '3',
      },
      {
        name: 'Tombouctou',
        shortCode: '6',
      },
    ],
  },
  {
    countryName: 'Malta',
    countryShortCode: 'MT',
    regions: [
      {
        name: 'Attard',
        shortCode: 'Attard (Attard)',
      },
      {
        name: 'Balzan',
        shortCode: 'Balzan (Balzan)',
      },
      {
        name: 'Birkirkara',
        shortCode: 'Birkirkara (Birkirkara)',
      },
      {
        name: 'Birżebbuġa',
        shortCode: 'Birżebbuġa (Birzebbuga)',
      },
      {
        name: 'Cospicua',
        shortCode: 'Cospicua (Cospicua)',
      },
      {
        name: 'Dingli',
        shortCode: 'Dingli (Dingli)',
      },
      {
        name: 'Fgura',
        shortCode: 'Fgura (Fgura)',
      },
      {
        name: 'Floriana',
        shortCode: 'Floriana (Floriana)',
      },
      {
        name: 'Fontana',
        shortCode: 'Fontana (Fontana)',
      },
      {
        name: 'Għajnsielem',
        shortCode: 'Għajnsielem (Ghajnsielem)',
      },
      {
        name: 'Għarb',
        shortCode: 'Għarb (Gharb)',
      },
      {
        name: 'Għargħur',
        shortCode: 'Għargħur (Gharghur)',
      },
      {
        name: 'Għasri',
        shortCode: 'Għasri (Ghasri)',
      },
      {
        name: 'Għaxaq',
        shortCode: 'Għaxaq (Ghaxaq)',
      },
      {
        name: 'Gudja',
        shortCode: 'Gudja (Gudja)',
      },
      {
        name: 'Gżira',
        shortCode: 'Gżira (Gzira)',
      },
      {
        name: 'Ħamrun',
        shortCode: 'Ħamrun (Hamrun)',
      },
      {
        name: 'Iklin',
        shortCode: 'Iklin (Iklin)',
      },
      {
        name: 'Kalkara',
        shortCode: 'Kalkara (Kalkara)',
      },
      {
        name: 'Kercem',
        shortCode: 'Kercem (Kercem)',
      },
      {
        name: 'Kirkop',
        shortCode: 'Kirkop (Kirkop)',
      },
      {
        name: 'Lija',
        shortCode: 'Lija (Lija)',
      },
      {
        name: 'Luqa',
        shortCode: 'Luqa (Luqa)',
      },
      {
        name: 'Marsa',
        shortCode: 'Marsa (Marsa)',
      },
      {
        name: 'Marsaskala',
        shortCode: 'Marsaskala (Marsaskala)',
      },
      {
        name: 'Marsaxlokk',
        shortCode: 'Marsaxlokk (Marsaxlokk)',
      },
      {
        name: 'Mdina',
        shortCode: 'Mdina (Mdina)',
      },
      {
        name: 'Mellieha',
        shortCode: 'Mellieha (Mellieha)',
      },
      {
        name: 'Mgarr',
        shortCode: 'Mgarr (Mgarr)',
      },
      {
        name: 'Mosta',
        shortCode: 'Mosta (Mosta)',
      },
      {
        name: 'Mqabba',
        shortCode: 'Mqabba (Mqabba)',
      },
      {
        name: 'Msida',
        shortCode: 'Msida (Msida)',
      },
      {
        name: 'Mtarfa',
        shortCode: 'Mtarfa (Imtarfa)',
      },
      {
        name: 'Munxar',
        shortCode: 'Munxar (Munxar)',
      },
      {
        name: 'Nadur',
        shortCode: 'Nadur (Nadur)',
      },
      {
        name: 'Naxxar',
        shortCode: 'Naxxar (Naxxar)',
      },
      {
        name: 'Paola',
        shortCode: 'Paola (Paola)',
      },
      {
        name: 'Pembroke',
        shortCode: 'Pembroke (Pembroke)',
      },
      {
        name: 'Pietà',
        shortCode: 'Pietà (Pietà)',
      },
      {
        name: 'Qala',
        shortCode: 'Qala (Qala)',
      },
      {
        name: 'Qormi',
        shortCode: 'Qormi (Qormi)',
      },
      {
        name: 'Qrendi',
        shortCode: 'Qrendi (Qrendi)',
      },
      {
        name: 'Rabat',
        shortCode: 'Rabat (Rabat)',
      },
      {
        name: 'Safi',
        shortCode: 'Safi (Safi)',
      },
      {
        name: "St. Julian's",
        shortCode: "St. Julian’s (St. Julian's)",
      },
      {
        name: 'San Gwann ',
        shortCode: 'San Gwann (San gwann)',
      },
      {
        name: 'San Lawrenz ',
        shortCode: 'San Lawrenz (San Lawrenz)',
      },
      {
        name: 'Senglea',
        shortCode: 'Senglea (Senglea)',
      },
      {
        name: "St. Paul's Bay",
        shortCode: "St. Paul’s Bay (St. Paul's Bay)",
      },
      {
        name: 'Sannat',
        shortCode: 'Sannat (Sannat)',
      },
      {
        name: 'Santa Lucija ',
        shortCode: 'Santa Lucija (Santa Lucija)',
      },
      {
        name: 'Santa Venera ',
        shortCode: 'Santa Venera (Santa Venera)',
      },
      {
        name: 'Siggiewi',
        shortCode: 'Siggiewi (Siggiewi)',
      },
      {
        name: 'Sliema',
        shortCode: 'Sliema (Sliema)',
      },
      {
        name: 'Swieqi',
        shortCode: 'Swieqi (Swieqi)',
      },
      {
        name: 'Tarxien',
        shortCode: 'Tarxien (Tarxien)',
      },
      {
        name: "Ta' Xbiex",
        shortCode: "Ta' Xbiex (Ta' Xbiex)",
      },
      {
        name: 'Valletta',
        shortCode: 'Valletta (Valletta)',
      },
      {
        name: 'Victoria',
        shortCode: 'Victoria (Victoria-Gozo)',
      },
      {
        name: 'Vittoriosa',
        shortCode: 'Vittoriosa (Birgu)',
      },
      {
        name: 'Xaghra',
        shortCode: 'Xaghra (Xaghra)',
      },
      {
        name: 'Xewkija',
        shortCode: 'Xewkija (Xewkija)',
      },
      {
        name: 'Xghajra',
        shortCode: 'Xghajra (Xaghjra)',
      },
      {
        name: 'Zabbar',
        shortCode: 'Zabbar (Zabbar)',
      },
      {
        name: 'Żebbuġ',
        shortCode: 'Żebbuġ (Zebbug)',
      },
      {
        name: 'Zebbug',
        shortCode: 'Zebbug (Zebbug-Gozo)',
      },
      {
        name: 'Zejtun',
        shortCode: 'Zejtun (Zejtun)',
      },
      {
        name: 'Zurrieq',
        shortCode: 'Zurrieq (Zurrieq)',
      },
    ],
  },
  {
    countryName: 'Marshall Islands',
    countryShortCode: 'MH',
    regions: [
      {
        name: 'Ailinglaplap',
        shortCode: 'ALL',
      },
      {
        name: 'Ailuk',
        shortCode: 'ALK',
      },
      {
        name: 'Arno',
        shortCode: 'ARN',
      },
      {
        name: 'Aur',
        shortCode: 'AUR',
      },
      {
        name: 'Bikini and Kili',
        shortCode: 'KIL',
      },
      {
        name: 'Ebon',
        shortCode: 'EBO',
      },
      {
        name: 'Jabat',
        shortCode: 'JAB',
      },
      {
        name: 'Jaluit',
        shortCode: 'JAL',
      },
      {
        name: 'Kwajalein',
        shortCode: 'KWA',
      },
      {
        name: 'Lae',
        shortCode: 'LAE',
      },
      {
        name: 'Lib',
        shortCode: 'LIB',
      },
      {
        name: 'Likiep',
        shortCode: 'LIK',
      },
      {
        name: 'Majuro',
        shortCode: 'MAJ',
      },
      {
        name: 'Maloelap',
        shortCode: 'MAL',
      },
      {
        name: 'Mejit',
        shortCode: 'MEJ',
      },
      {
        name: 'Namdrik',
        shortCode: 'NMK',
      },
      {
        name: 'Namu',
        shortCode: 'NMU',
      },
      {
        name: 'Rongelap',
        shortCode: 'RON',
      },
      {
        name: 'Ujae',
        shortCode: 'UJA',
      },
      {
        name: 'Utrik',
        shortCode: 'UTI',
      },
      {
        name: 'Wotho',
        shortCode: 'WTH',
      },
      {
        name: 'Wotje',
        shortCode: 'WTJ',
      },
    ],
  },
  {
    countryName: 'Martinique',
    countryShortCode: 'MQ',
    regions: [
      {
        name: 'Martinique',
      },
    ],
  },
  {
    countryName: 'Mauritania',
    countryShortCode: 'MR',
    regions: [
      {
        name: 'Adrar',
        shortCode: '07',
      },
      {
        name: 'Assaba',
        shortCode: '03',
      },
      {
        name: 'Brakna',
        shortCode: '05',
      },
      {
        name: 'Dakhlet Nouadhibou',
        shortCode: '08',
      },
      {
        name: 'Gorgol',
        shortCode: '04',
      },
      {
        name: 'Guidimaka',
        shortCode: '10',
      },
      {
        name: 'Hodh Ech Chargui',
        shortCode: '01',
      },
      {
        name: 'Hodh El Gharbi',
        shortCode: '02',
      },
      {
        name: 'Inchiri',
        shortCode: '12',
      },
      {
        name: 'Nouakchott Nord',
        shortCode: '14',
      },
      {
        name: 'Nouakchott Ouest',
        shortCode: '13',
      },
      {
        name: 'Nouakchott Sud',
        shortCode: '15',
      },
      {
        name: 'Tagant',
        shortCode: '09',
      },
      {
        name: 'Tiris Zemmour',
        shortCode: '11',
      },
      {
        name: 'Trarza',
        shortCode: '06',
      },
    ],
  },
  {
    countryName: 'Mauritius',
    countryShortCode: 'MU',
    regions: [
      {
        name: 'Agalega Islands',
        shortCode: 'AG',
      },
      {
        name: 'Beau Bassin-Rose Hill',
        shortCode: 'BR',
      },
      {
        name: 'Black River',
        shortCode: 'BL',
      },
      {
        name: 'Cargados Carajos Shoals',
        shortCode: 'CC',
      },
      {
        name: 'Curepipe',
        shortCode: 'CU',
      },
      {
        name: 'Flacq',
        shortCode: 'FL',
      },
      {
        name: 'Grand Port',
        shortCode: 'GP',
      },
      {
        name: 'Moka',
        shortCode: 'MO',
      },
      {
        name: 'Pamplemousses',
        shortCode: 'PA',
      },
      {
        name: 'Plaines Wilhems',
        shortCode: 'PW',
      },
      {
        name: 'Port Louis (City)',
        shortCode: 'PU',
      },
      {
        name: 'Port Louis',
        shortCode: 'PL',
      },
      {
        name: 'Riviere du Rempart',
        shortCode: 'RR',
      },
      {
        name: 'Rodrigues Island',
        shortCode: 'RO',
      },
      {
        name: 'Savanne',
        shortCode: 'SA',
      },
      {
        name: 'Vacoas-Phoenix',
        shortCode: 'CP',
      },
    ],
  },
  {
    countryName: 'Mayotte',
    countryShortCode: 'YT',
    regions: [
      {
        name: 'Dzaoudzi',
        shortCode: '01',
      },
      {
        name: 'Pamandzi',
        shortCode: '02',
      },
      {
        name: 'Mamoudzou',
        shortCode: '03',
      },
      {
        name: 'Dembeni',
        shortCode: '04',
      },
      {
        name: 'Bandrélé',
        shortCode: '05',
      },
      {
        name: 'Kani-Kéli',
        shortCode: '06',
      },
      {
        name: 'Bouéni',
        shortCode: '07',
      },
      {
        name: 'Chirongui',
        shortCode: '08',
      },
      {
        name: 'Sada',
        shortCode: '09',
      },
      {
        name: 'Ouangani',
        shortCode: '10',
      },
      {
        name: 'Chiconi',
        shortCode: '11',
      },
      {
        name: 'Tsingoni',
        shortCode: '12',
      },
      {
        name: "M'Tsangamouji",
        shortCode: '13',
      },
      {
        name: 'Acoua',
        shortCode: '14',
      },
      {
        name: 'Mtsamboro',
        shortCode: '15',
      },
      {
        name: 'Bandraboua',
        shortCode: '16',
      },
      {
        name: 'Koungou',
        shortCode: '17',
      },
    ],
  },
  {
    countryName: 'Mexico',
    countryShortCode: 'MX',
    regions: [
      {
        name: 'Aguascalientes',
        shortCode: 'Aguascalientes',
      },
      {
        name: 'Baja California',
        shortCode: 'Baja California',
      },
      {
        name: 'Baja California Sur',
        shortCode: 'Baja California Sur',
      },
      {
        name: 'Campeche',
        shortCode: 'Campeche',
      },
      {
        name: 'Ciudad de México',
        shortCode: 'Ciudad de México',
      },
      {
        name: 'Chiapas',
        shortCode: 'Chiapas',
      },
      {
        name: 'Chihuahua',
        shortCode: 'Chihuahua',
      },
      {
        name: 'Coahuila de Zaragoza',
        shortCode: 'Coahuila de Zaragoza',
      },
      {
        name: 'Colima',
        shortCode: 'Colima',
      },
      {
        name: 'Durango',
        shortCode: 'Durango',
      },
      {
        name: 'Estado de México',
        shortCode: 'Estado de México',
      },
      {
        name: 'Guanajuato',
        shortCode: 'Guanajuato',
      },
      {
        name: 'Guerrero',
        shortCode: 'Guerrero',
      },
      {
        name: 'Hidalgo',
        shortCode: 'Hidalgo',
      },
      {
        name: 'Jalisco',
        shortCode: 'Jalisco',
      },
      {
        name: 'Michoacán de Ocampo',
        shortCode: 'Michoacán de Ocampo',
      },
      {
        name: 'Morelos',
        shortCode: 'Morelos',
      },
      {
        name: 'Nayarit',
        shortCode: 'Nayarit',
      },
      {
        name: 'Nuevo León',
        shortCode: 'Nuevo León',
      },
      {
        name: 'Oaxaca',
        shortCode: 'Oaxaca',
      },
      {
        name: 'Puebla',
        shortCode: 'Puebla',
      },
      {
        name: 'Querétaro de Arteaga',
        shortCode: 'Querétaro de Arteaga',
      },
      {
        name: 'Quintana Roo',
        shortCode: 'Quintana Roo',
      },
      {
        name: 'San Luis Potosí',
        shortCode: 'San Luis Potosí',
      },
      {
        name: 'Sinaloa',
        shortCode: 'Sinaloa',
      },
      {
        name: 'Sonora',
        shortCode: 'Sonora',
      },
      {
        name: 'Tabasco',
        shortCode: 'Tabasco',
      },
      {
        name: 'Tamaulipas',
        shortCode: 'Tamaulipas',
      },
      {
        name: 'Tlaxcala',
        shortCode: 'Tlaxcala',
      },
      {
        name: 'Veracruz',
        shortCode: 'Veracruz',
      },
      {
        name: 'Yucatán',
        shortCode: 'Yucatán',
      },
      {
        name: 'Zacatecas',
        shortCode: 'Zacatecas',
      },
    ],
  },
  {
    countryName: 'Micronesia, Federated States of',
    countryShortCode: 'FM',
    regions: [
      {
        name: 'Chuuk (Truk)',
        shortCode: 'TRK',
      },
      {
        name: 'Kosrae',
        shortCode: 'KSA',
      },
      {
        name: 'Pohnpei',
        shortCode: 'PNI',
      },
      {
        name: 'Yap',
        shortCode: 'YAP',
      },
    ],
  },
  {
    countryName: 'Moldova',
    countryShortCode: 'MD',
    regions: [
      {
        name: 'Aenii Noi',
        shortCode: 'AN',
      },
      {
        name: 'Basarabeasca',
        shortCode: 'BS',
      },
      {
        name: 'Bălți',
        shortCode: 'BA',
      },
      {
        name: 'Bender',
        shortCode: 'BD',
      },
      {
        name: 'Briceni',
        shortCode: 'BR',
      },
      {
        name: 'Cahul',
        shortCode: 'CA',
      },
      {
        name: 'Cantemir',
        shortCode: 'CT',
      },
      {
        name: 'Călărași',
        shortCode: 'CL',
      },
      {
        name: 'Căușeni',
        shortCode: 'CS',
      },
      {
        name: 'Chișinău',
        shortCode: 'CU',
      },
      {
        name: 'Cimișlia',
        shortCode: 'CM',
      },
      {
        name: 'Criuleni',
        shortCode: 'CR',
      },
      {
        name: 'Dondușeni',
        shortCode: 'DO',
      },
      {
        name: 'Drochia',
        shortCode: 'DR',
      },
      {
        name: 'Dubăsari',
        shortCode: 'DU',
      },
      {
        name: 'Edineț',
        shortCode: 'ED',
      },
      {
        name: 'Fălești',
        shortCode: 'FA',
      },
      {
        name: 'Florești',
        shortCode: 'FL',
      },
      {
        name: 'Găgăuzia',
        shortCode: 'GA',
      },
      {
        name: 'Glodeni',
        shortCode: 'GL',
      },
      {
        name: 'Hîncești',
        shortCode: 'HI',
      },
      {
        name: 'Ialoveni',
        shortCode: 'IA',
      },
      {
        name: 'Leova',
        shortCode: 'LE',
      },
      {
        name: 'Nisporeni',
        shortCode: 'NI',
      },
      {
        name: 'Ocnița',
        shortCode: 'OC',
      },
      {
        name: 'Orhei',
        shortCode: 'OR',
      },
      {
        name: 'Rezina',
        shortCode: 'RE',
      },
      {
        name: 'Rîșcani',
        shortCode: 'RI',
      },
      {
        name: 'Sîngerei',
        shortCode: 'SI',
      },
      {
        name: 'Soroca',
        shortCode: 'SO',
      },
      {
        name: 'Stînga Nistrului',
        shortCode: 'SN',
      },
      {
        name: 'Strășeni',
        shortCode: 'ST',
      },
      {
        name: 'Șoldănești',
        shortCode: 'SD',
      },
      {
        name: 'Ștefan Vodă',
        shortCode: 'SV',
      },
      {
        name: 'Taraclia',
        shortCode: 'TA',
      },
      {
        name: 'Telenești',
        shortCode: 'TE',
      },
      {
        name: 'Ungheni',
        shortCode: 'UN',
      },
    ],
  },
  {
    countryName: 'Monaco',
    countryShortCode: 'MC',
    regions: [
      {
        name: 'Colle',
        shortCode: 'CL',
      },
      {
        name: 'Condamine',
        shortCode: 'CO',
      },
      {
        name: 'Fontvieille',
        shortCode: 'FO',
      },
      {
        name: 'Gare',
        shortCode: 'GA',
      },
      {
        name: 'Jardin Exotique',
        shortCode: 'JE',
      },
      {
        name: 'Larvotto',
        shortCode: 'LA',
      },
      {
        name: 'Malbousquet',
        shortCode: 'MA',
      },
      {
        name: 'Monaco-Ville',
        shortCode: 'MO',
      },
      {
        name: 'Moneghetti',
        shortCode: 'MG',
      },
      {
        name: 'Monte-Carlo',
        shortCode: 'MC',
      },
      {
        name: 'Moulins',
        shortCode: 'MU',
      },
      {
        name: 'Port-Hercule',
        shortCode: 'PH',
      },
      {
        name: 'Saint-Roman',
        shortCode: 'SR',
      },
      {
        name: 'Sainte-Dévote',
        shortCode: 'SD',
      },
      {
        name: 'Source',
        shortCode: 'SO',
      },
      {
        name: 'Spélugues',
        shortCode: 'SP',
      },
      {
        name: 'Vallon de la Rousse',
        shortCode: 'VR',
      },
    ],
  },
  {
    countryName: 'Mongolia',
    countryShortCode: 'MN',
    regions: [
      {
        name: 'Arhangay',
        shortCode: '073',
      },
      {
        name: 'Bayan-Olgiy',
        shortCode: '071',
      },
      {
        name: 'Bayanhongor',
        shortCode: '069',
      },
      {
        name: 'Bulgan',
        shortCode: '067',
      },
      {
        name: 'Darhan',
        shortCode: '037',
      },
      {
        name: 'Dornod',
        shortCode: '061',
      },
      {
        name: 'Dornogovi',
        shortCode: '063',
      },
      {
        name: 'Dundgovi',
        shortCode: '059',
      },
      {
        name: 'Dzavhan',
        shortCode: '065',
      },
      {
        name: 'Govi-Altay',
        shortCode: '065',
      },
      {
        name: 'Govi-Sumber',
        shortCode: '064',
      },
      {
        name: 'Hovd',
        shortCode: '043',
      },
      {
        name: 'Hovsgol',
        shortCode: '041',
      },
      {
        name: 'Omnogovi',
        shortCode: '053',
      },
      {
        name: 'Ovorhangay',
        shortCode: '055',
      },
      {
        name: 'Selenge',
        shortCode: '049',
      },
      {
        name: 'Suhbaatar',
        shortCode: '051',
      },
      {
        name: 'Tov',
        shortCode: '047',
      },
      {
        name: 'Ulaanbaatar',
        shortCode: '1',
      },
      {
        name: 'Uvs',
        shortCode: '046',
      },
    ],
  },
  {
    countryName: 'Montenegro',
    countryShortCode: 'ME',
    regions: [
      {
        name: 'Andrijevica',
        shortCode: '01',
      },
      {
        name: 'Bar',
        shortCode: '02',
      },
      {
        name: 'Berane',
        shortCode: '03',
      },
      {
        name: 'Bijelo Polje',
        shortCode: '04',
      },
      {
        name: 'Budva',
        shortCode: '05',
      },
      {
        name: 'Cetinje',
        shortCode: '06',
      },
      {
        name: 'Danilovgrad',
        shortCode: '07',
      },
      {
        name: 'Gusinje',
        shortCode: '22',
      },
      {
        name: 'Herceg Novi',
        shortCode: '08',
      },
      {
        name: 'Kolašin',
        shortCode: '09',
      },
      {
        name: 'Kotor',
        shortCode: '10',
      },
      {
        name: 'Mojkovac',
        shortCode: '11',
      },
      {
        name: 'Nikšić',
        shortCode: '12',
      },
      {
        name: 'Petnica',
        shortCode: '23',
      },
      {
        name: 'Plav',
        shortCode: '13',
      },
      {
        name: 'Plužine',
        shortCode: '14',
      },
      {
        name: 'Pljevlja',
        shortCode: '15',
      },
      {
        name: 'Podgorica',
        shortCode: '16',
      },
      {
        name: 'Rožaje',
        shortCode: '17',
      },
      {
        name: 'Šavnik',
        shortCode: '18',
      },
      {
        name: 'Tivat',
        shortCode: '19',
      },
      {
        name: 'Ulcinj',
        shortCode: '20',
      },
      {
        name: 'Žabljak',
        shortCode: '21',
      },
    ],
  },
  {
    countryName: 'Montserrat',
    countryShortCode: 'MS',
    regions: [
      {
        name: 'Saint Anthony',
      },
      {
        name: 'Saint Georges',
      },
      {
        name: "Saint Peter's",
      },
    ],
  },
  {
    countryName: 'Morocco',
    countryShortCode: 'MA',
    regions: [
      {
        name: 'Chaouia-Ouardigha',
        shortCode: '09',
      },
      {
        name: 'Doukhala-Abda',
        shortCode: '10',
      },
      {
        name: 'Fès-Boulemane',
        shortCode: '05',
      },
      {
        name: 'Gharb-Chrarda-Beni Hssen',
        shortCode: '02',
      },
      {
        name: 'Grand Casablanca',
        shortCode: '08',
      },
      {
        name: 'Guelmim-Es Semara',
        shortCode: '14',
      },
      {
        name: 'Laâyoune-Boujdour-Sakia el Hamra',
        shortCode: '15',
      },
      {
        name: 'Marrakech-Tensift-Al Haouz',
        shortCode: '11',
      },
      {
        name: 'Meknès-Tafilalet',
        shortCode: '06',
      },
      {
        name: 'Oriental',
        shortCode: '04',
      },
      {
        name: 'Oued ed Dahab-Lagouira',
        shortCode: '16',
      },
      {
        name: 'Souss-Massa-Drâa',
        shortCode: '13',
      },
      {
        name: 'Tadla-Azilal',
        shortCode: '12',
      },
      {
        name: 'Tanger-Tétouan',
        shortCode: '01',
      },
      {
        name: 'Taza-Al Hoceima-Taounate',
        shortCode: '03',
      },
    ],
  },
  {
    countryName: 'Mozambique',
    countryShortCode: 'MZ',
    regions: [
      {
        name: 'Cabo Delgado',
        shortCode: 'P',
      },
      {
        name: 'Gaza',
        shortCode: 'G',
      },
      {
        name: 'Inhambane',
        shortCode: 'I',
      },
      {
        name: 'Manica',
        shortCode: 'B',
      },
      {
        name: 'Maputo',
        shortCode: 'L',
      },
      {
        name: 'Maputo (City)',
        shortCode: 'MPM',
      },
      {
        name: 'Nampula',
        shortCode: 'N',
      },
      {
        name: 'Niassa',
        shortCode: 'A',
      },
      {
        name: 'Sofala',
        shortCode: 'S',
      },
      {
        name: 'Tete',
        shortCode: 'T',
      },
      {
        name: 'Zambezia',
        shortCode: 'Q',
      },
    ],
  },
  {
    countryName: 'Myanmar',
    countryShortCode: 'MM',
    regions: [
      {
        name: 'Ayeyarwady',
        shortCode: '07',
      },
      {
        name: 'Bago',
        shortCode: '02',
      },
      {
        name: 'Chin',
        shortCode: '14',
      },
      {
        name: 'Kachin',
        shortCode: '11',
      },
      {
        name: 'Kayah',
        shortCode: '12',
      },
      {
        name: 'Kayin',
        shortCode: '13',
      },
      {
        name: 'Magway',
        shortCode: '03',
      },
      {
        name: 'Mandalay',
        shortCode: '04',
      },
      {
        name: 'Mon',
        shortCode: '15',
      },
      {
        name: 'Nay Pyi Taw',
        shortCode: '18',
      },
      {
        name: 'Rakhine',
        shortCode: '16',
      },
      {
        name: 'Sagaing',
        shortCode: '01',
      },
      {
        name: 'Shan',
        shortCode: '17',
      },
      {
        name: 'Tanintharyi',
        shortCode: '05',
      },
      {
        name: 'Yangon',
        shortCode: '06',
      },
    ],
  },
  {
    countryName: 'Namibia',
    countryShortCode: 'NA',
    regions: [
      {
        name: 'Erongo',
        shortCode: 'ER',
      },
      {
        name: 'Hardap',
        shortCode: 'HA',
      },
      {
        name: 'Kavango East',
        shortCode: 'KE',
      },
      {
        name: 'Kavango West',
        shortCode: 'KW',
      },
      {
        name: 'Karas',
        shortCode: 'KA',
      },
      {
        name: 'Khomas',
        shortCode: 'KH',
      },
      {
        name: 'Kunene',
        shortCode: 'KU',
      },
      {
        name: 'Ohangwena',
        shortCode: 'OW',
      },
      {
        name: 'Omaheke',
        shortCode: 'OH',
      },
      {
        name: 'Omusati',
        shortCode: 'OS',
      },
      {
        name: 'Oshana',
        shortCode: 'ON',
      },
      {
        name: 'Oshikoto',
        shortCode: 'OT',
      },
      {
        name: 'Otjozondjupa',
        shortCode: 'OD',
      },
      {
        name: 'Zambezi',
        shortCode: 'CA',
      },
    ],
  },
  {
    countryName: 'Nauru',
    countryShortCode: 'NR',
    regions: [
      {
        name: 'Aiwo',
        shortCode: '01',
      },
      {
        name: 'Anabar',
        shortCode: '02',
      },
      {
        name: 'Anetan',
        shortCode: '03',
      },
      {
        name: 'Anibare',
        shortCode: '04',
      },
      {
        name: 'Baiti',
        shortCode: '05',
      },
      {
        name: 'Boe',
        shortCode: '06',
      },
      {
        name: 'Buada',
        shortCode: '07',
      },
      {
        name: 'Denigomodu',
        shortCode: '08',
      },
      {
        name: 'Ewa',
        shortCode: '09',
      },
      {
        name: 'Ijuw',
        shortCode: '10',
      },
      {
        name: 'Meneng',
        shortCode: '11',
      },
      {
        name: 'Nibok',
        shortCode: '12',
      },
      {
        name: 'Uaboe',
        shortCode: '13',
      },
      {
        name: 'Yaren',
        shortCode: '14',
      },
    ],
  },
  {
    countryName: 'Nepal',
    countryShortCode: 'NP',
    regions: [
      {
        name: 'Bagmati',
        shortCode: 'BA',
      },
      {
        name: 'Bheri',
        shortCode: 'BH',
      },
      {
        name: 'Dhawalagiri',
        shortCode: 'DH',
      },
      {
        name: 'Gandaki',
        shortCode: 'GA',
      },
      {
        name: 'Janakpur',
        shortCode: 'JA',
      },
      {
        name: 'Karnali',
        shortCode: 'KA',
      },
      {
        name: 'Kosi',
        shortCode: 'KO',
      },
      {
        name: 'Lumbini',
        shortCode: 'LU',
      },
      {
        name: 'Mahakali',
        shortCode: 'MA',
      },
      {
        name: 'Mechi',
        shortCode: 'ME',
      },
      {
        name: 'Narayani',
        shortCode: 'NA',
      },
      {
        name: 'Rapti',
        shortCode: 'RA',
      },
      {
        name: 'Sagarmatha',
        shortCode: 'SA',
      },
      {
        name: 'Seti',
        shortCode: 'SE',
      },
    ],
  },
  {
    countryName: 'Netherlands',
    countryShortCode: 'NL',
    regions: [
      {
        name: 'Drenthe',
        shortCode: 'DR',
      },
      {
        name: 'Flevoland',
        shortCode: 'FL',
      },
      {
        name: 'Friesland',
        shortCode: 'FR',
      },
      {
        name: 'Gelderland',
        shortCode: 'GE',
      },
      {
        name: 'Groningen',
        shortCode: 'GR',
      },
      {
        name: 'Limburg',
        shortCode: 'LI',
      },
      {
        name: 'Noord-Brabant',
        shortCode: 'NB',
      },
      {
        name: 'Noord-Holland',
        shortCode: 'NH',
      },
      {
        name: 'Overijssel',
        shortCode: 'OV',
      },
      {
        name: 'Utrecht',
        shortCode: 'UT',
      },
      {
        name: 'Zeeland',
        shortCode: 'ZE',
      },
      {
        name: 'Zuid-Holland',
        shortCode: 'ZH',
      },
    ],
  },
  {
    countryName: 'New Caledonia',
    countryShortCode: 'NC',
    regions: [
      {
        name: 'Iles Loyaute',
      },
      {
        name: 'Nord',
      },
      {
        name: 'Sud',
      },
    ],
  },
  {
    countryName: 'New Zealand',
    countryShortCode: 'NZ',
    regions: [
      {
        name: 'Auckland',
        shortCode: 'AUK',
      },
      {
        name: 'Bay of Plenty',
        shortCode: 'BOP',
      },
      {
        name: 'Canterbury',
        shortCode: 'CAN',
      },
      {
        name: 'Gisborne',
        shortCode: 'GIS',
      },
      {
        name: "Hawke's Bay",
        shortCode: 'HKB',
      },
      {
        name: 'Marlborough',
        shortCode: 'MBH',
      },
      {
        name: 'Manawatu-Wanganui',
        shortCode: 'MWT',
      },
      {
        name: 'Northland',
        shortCode: 'NTL',
      },
      {
        name: 'Nelson',
        shortCode: 'NSN',
      },
      {
        name: 'Otago',
        shortCode: 'OTA',
      },
      {
        name: 'Southland',
        shortCode: 'STL',
      },
      {
        name: 'Taranaki',
        shortCode: 'TKI',
      },
      {
        name: 'Tasman',
        shortCode: 'TAS',
      },
      {
        name: 'Waikato',
        shortCode: 'WKO',
      },
      {
        name: 'Wellington',
        shortCode: 'WGN',
      },
      {
        name: 'West Coast',
        shortCode: 'WTC',
      },
      {
        name: 'Chatham Islands Territory',
        shortCode: 'CIT',
      },
    ],
  },
  {
    countryName: 'Nicaragua',
    countryShortCode: 'NI',
    regions: [
      {
        name: 'Boaco',
        shortCode: 'BO',
      },
      {
        name: 'Carazo',
        shortCode: 'CA',
      },
      {
        name: 'Chinandega',
        shortCode: 'CI',
      },
      {
        name: 'Chontales',
        shortCode: 'CO',
      },
      {
        name: 'Estelí',
        shortCode: 'ES',
      },
      {
        name: 'Granada',
        shortCode: 'GR',
      },
      {
        name: 'Jinotega',
        shortCode: 'JI',
      },
      {
        name: 'León',
        shortCode: 'LE',
      },
      {
        name: 'Madriz',
        shortCode: 'MD',
      },
      {
        name: 'Managua',
        shortCode: 'MN',
      },
      {
        name: 'Masaya',
        shortCode: 'MS',
      },
      {
        name: 'Matagalpa',
        shortCode: 'MT',
      },
      {
        name: 'Nueva Segovia',
        shortCode: 'NS',
      },
      {
        name: 'Río San Juan',
        shortCode: 'SJ',
      },
      {
        name: 'Rivas',
        shortCode: 'RI',
      },
      {
        name: 'Atlántico Norte',
        shortCode: 'AN',
      },
      {
        name: 'Atlántico Sur',
        shortCode: 'AS',
      },
    ],
  },
  {
    countryName: 'Niger',
    countryShortCode: 'NE',
    regions: [
      {
        name: 'Agadez',
        shortCode: '1',
      },
      {
        name: 'Diffa',
        shortCode: '2',
      },
      {
        name: 'Dosso',
        shortCode: '3',
      },
      {
        name: 'Maradi',
        shortCode: '4',
      },
      {
        name: 'Niamey',
        shortCode: '8',
      },
      {
        name: 'Tahoua',
        shortCode: '5',
      },
      {
        name: 'Tillabéri',
        shortCode: '6',
      },
      {
        name: 'Zinder',
        shortCode: '7',
      },
    ],
  },
  {
    countryName: 'Nigeria',
    countryShortCode: 'NG',
    regions: [
      {
        name: 'Abia',
        shortCode: 'AB',
      },
      {
        name: 'Abuja Federal Capital Territory',
        shortCode: 'FC',
      },
      {
        name: 'Adamawa',
        shortCode: 'AD',
      },
      {
        name: 'Akwa Ibom',
        shortCode: 'AK',
      },
      {
        name: 'Anambra',
        shortCode: 'AN',
      },
      {
        name: 'Bauchi',
        shortCode: 'BA',
      },
      {
        name: 'Bayelsa',
        shortCode: 'BY',
      },
      {
        name: 'Benue',
        shortCode: 'BE',
      },
      {
        name: 'Borno',
        shortCode: 'BO',
      },
      {
        name: 'Cross River',
        shortCode: 'CR',
      },
      {
        name: 'Delta',
        shortCode: 'DE',
      },
      {
        name: 'Ebonyi',
        shortCode: 'EB',
      },
      {
        name: 'Edo',
        shortCode: 'ED',
      },
      {
        name: 'Ekiti',
        shortCode: 'EK',
      },
      {
        name: 'Enugu',
        shortCode: 'EN',
      },
      {
        name: 'Gombe',
        shortCode: 'GO',
      },
      {
        name: 'Imo',
        shortCode: 'IM',
      },
      {
        name: 'Jigawa',
        shortCode: 'JI',
      },
      {
        name: 'Kaduna',
        shortCode: 'KD',
      },
      {
        name: 'Kano',
        shortCode: 'KN',
      },
      {
        name: 'Katsina',
        shortCode: 'KT',
      },
      {
        name: 'Kebbi',
        shortCode: 'KE',
      },
      {
        name: 'Kogi',
        shortCode: 'KO',
      },
      {
        name: 'Kwara',
        shortCode: 'KW',
      },
      {
        name: 'Lagos',
        shortCode: 'LA',
      },
      {
        name: 'Nassarawa',
        shortCode: 'NA',
      },
      {
        name: 'Niger',
        shortCode: 'NI',
      },
      {
        name: 'Ogun',
        shortCode: 'OG',
      },
      {
        name: 'Ondo',
        shortCode: 'ON',
      },
      {
        name: 'Osun',
        shortCode: 'OS',
      },
      {
        name: 'Oyo',
        shortCode: 'OY',
      },
      {
        name: 'Plateau',
        shortCode: 'PL',
      },
      {
        name: 'Rivers',
        shortCode: 'RI',
      },
      {
        name: 'Sokoto',
        shortCode: 'SO',
      },
      {
        name: 'Taraba',
        shortCode: 'TA',
      },
      {
        name: 'Yobe',
        shortCode: 'YO',
      },
      {
        name: 'Zamfara',
        shortCode: 'ZA',
      },
    ],
  },
  {
    countryName: 'Niue',
    countryShortCode: 'NU',
    regions: [
      {
        name: 'Niue',
      },
    ],
  },
  {
    countryName: 'Norfolk Island',
    countryShortCode: 'NF',
    regions: [
      {
        name: 'Norfolk Island',
      },
    ],
  },
  {
    countryName: 'Northern Mariana Islands',
    countryShortCode: 'MP',
    regions: [
      {
        name: 'Northern Islands',
      },
      {
        name: 'Rota',
      },
      {
        name: 'Saipan',
      },
      {
        name: 'Tinian',
      },
    ],
  },
  {
    countryName: 'Norway',
    countryShortCode: 'NO',
    regions: [
      {
        name: 'Akershus',
        shortCode: '02',
      },
      {
        name: 'Aust-Agder',
        shortCode: '09',
      },
      {
        name: 'Buskerud',
        shortCode: '06',
      },
      {
        name: 'Finnmark',
        shortCode: '20',
      },
      {
        name: 'Hedmark',
        shortCode: '04',
      },
      {
        name: 'Hordaland',
        shortCode: '12',
      },
      {
        name: 'Møre og Romsdal',
        shortCode: '15',
      },
      {
        name: 'Nordland',
        shortCode: '18',
      },
      {
        name: 'Nord-Trøndelag',
        shortCode: '17',
      },
      {
        name: 'Oppland',
        shortCode: '05',
      },
      {
        name: 'Oslo',
        shortCode: '03',
      },
      {
        name: 'Rogaland',
        shortCode: '11',
      },
      {
        name: 'Sogn og Fjordane',
        shortCode: '14',
      },
      {
        name: 'Sør-Trøndelag',
        shortCode: '16',
      },
      {
        name: 'Telemark',
        shortCode: '08',
      },
      {
        name: 'Troms',
        shortCode: '19',
      },
      {
        name: 'Vest-Agder',
        shortCode: '10',
      },
      {
        name: 'Vestfold',
        shortCode: '07',
      },
      {
        name: 'Østfold',
        shortCode: '01',
      },
      {
        name: 'Jan Mayen',
        shortCode: '22',
      },
      {
        name: 'Svalbard',
        shortCode: '21',
      },
    ],
  },
  {
    countryName: 'Oman',
    countryShortCode: 'OM',
    regions: [
      {
        name: 'Ad Dakhiliyah',
        shortCode: 'DA',
      },
      {
        name: 'Al Buraymi',
        shortCode: 'BU',
      },
      {
        name: 'Al Wusta',
        shortCode: 'WU',
      },
      {
        name: 'Az Zahirah',
        shortCode: 'ZA',
      },
      {
        name: 'Janub al Batinah',
        shortCode: 'BS',
      },
      {
        name: 'Janub ash Sharqiyah',
        shortCode: 'SS',
      },
      {
        name: 'Masqat',
        shortCode: 'MA',
      },
      {
        name: 'Musandam',
        shortCode: 'MU',
      },
      {
        name: 'Shamal al Batinah',
        shortCode: 'BJ',
      },
      {
        name: 'Shamal ash Sharqiyah',
        shortCode: 'SJ',
      },
      {
        name: 'Zufar',
        shortCode: 'ZU',
      },
    ],
  },
  {
    countryName: 'Pakistan',
    countryShortCode: 'PK',
    regions: [
      {
        name: 'Āzād Kashmīr',
        shortCode: 'JK',
      },
      {
        name: 'Balōchistān',
        shortCode: 'BA',
      },
      {
        name: 'Gilgit-Baltistān',
        shortCode: 'GB',
      },
      {
        name: 'Islāmābād',
        shortCode: 'IS',
      },
      {
        name: 'Khaībar Pakhtūnkhwās',
        shortCode: 'KP',
      },
      {
        name: 'Punjāb',
        shortCode: 'PB',
      },
      {
        name: 'Sindh',
        shortCode: 'SD',
      },
      {
        name: 'Federally Administered Tribal Areas',
        shortCode: 'TA',
      },
    ],
  },
  {
    countryName: 'Palau',
    countryShortCode: 'PW',
    regions: [
      {
        name: 'Aimeliik',
        shortCode: '002',
      },
      {
        name: 'Airai',
        shortCode: '004',
      },
      {
        name: 'Angaur',
        shortCode: '010',
      },
      {
        name: 'Hatobohei',
        shortCode: '050',
      },
      {
        name: 'Kayangel',
        shortCode: '100',
      },
      {
        name: 'Koror',
        shortCode: '150',
      },
      {
        name: 'Melekeok',
        shortCode: '212',
      },
      {
        name: 'Ngaraard',
        shortCode: '214',
      },
      {
        name: 'Ngarchelong',
        shortCode: '218',
      },
      {
        name: 'Ngardmau',
        shortCode: '222',
      },
      {
        name: 'Ngatpang',
        shortCode: '224',
      },
      {
        name: 'Ngchesar',
        shortCode: '226',
      },
      {
        name: 'Ngeremlengui',
        shortCode: '227',
      },
      {
        name: 'Ngiwal',
        shortCode: '228',
      },
      {
        name: 'Peleliu',
        shortCode: '350',
      },
      {
        name: 'Sonsoral',
        shortCode: '350',
      },
    ],
  },
  {
    countryName: 'Palestine, State of',
    countryShortCode: 'PS',
    regions: [
      {
        name: 'Ak Khalīl',
        shortCode: 'HBN',
      },
      {
        name: 'Al Quds',
        shortCode: 'JEM',
      },
      {
        name: 'Arīḩā wal Aghwār',
        shortCode: 'JRH',
      },
      {
        name: 'Bayt Laḩm',
        shortCode: 'BTH',
      },
      {
        name: 'Dayr al Balaḩ',
        shortCode: 'DEB',
      },
      {
        name: 'Ghazzah',
        shortCode: 'GZA',
      },
      {
        name: 'Janīn',
        shortCode: 'JEN',
      },
      {
        name: 'Khān Yūnis',
        shortCode: 'KYS',
      },
      {
        name: 'Nāblus',
        shortCode: 'NBS',
      },
      {
        name: 'Qalqīyah',
        shortCode: 'QQA',
      },
      {
        name: 'Rafaḩ',
        shortCode: 'RFH',
      },
      {
        name: 'Rām Allāh wal Bīrah',
        shortCode: 'RBH',
      },
      {
        name: 'Salfīt',
        shortCode: 'SLT',
      },
      {
        name: 'Shamāl Ghazzah',
        shortCode: 'NGZ',
      },
      {
        name: 'Ţūbās',
        shortCode: 'TBS',
      },
      {
        name: 'Ţūlkarm',
        shortCode: 'TKM',
      },
    ],
  },
  {
    countryName: 'Panama',
    countryShortCode: 'PA',
    regions: [
      {
        name: 'Bocas del Toro',
        shortCode: '1',
      },
      {
        name: 'Chiriquí',
        shortCode: '4',
      },
      {
        name: 'Coclé',
        shortCode: '2',
      },
      {
        name: 'Colón',
        shortCode: '3',
      },
      {
        name: 'Darién',
        shortCode: '5',
      },
      {
        name: 'Emberá',
        shortCode: 'EM',
      },
      {
        name: 'Herrera',
        shortCode: '6',
      },
      {
        name: 'Kuna Yala',
        shortCode: 'KY',
      },
      {
        name: 'Los Santos',
        shortCode: '7',
      },
      {
        name: 'Ngäbe-Buglé',
        shortCode: 'NB',
      },
      {
        name: 'Panamá',
        shortCode: '8',
      },
      {
        name: 'Panamá Oeste',
        shortCode: '10',
      },
      {
        name: 'Veraguas',
        shortCode: '9',
      },
    ],
  },
  {
    countryName: 'Papua New Guinea',
    countryShortCode: 'PG',
    regions: [
      {
        name: 'Bougainville',
        shortCode: 'NSB',
      },
      {
        name: 'Central',
        shortCode: 'CPM',
      },
      {
        name: 'Chimbu',
        shortCode: 'CPK',
      },
      {
        name: 'East New Britain',
        shortCode: 'EBR',
      },
      {
        name: 'East Sepik',
        shortCode: 'ESW',
      },
      {
        name: 'Eastern Highlands',
        shortCode: 'EHG',
      },
      {
        name: 'Enga',
        shortCode: 'EPW',
      },
      {
        name: 'Gulf',
        shortCode: 'GPK',
      },
      {
        name: 'Hela',
        shortCode: 'HLA',
      },
      {
        name: 'Jiwaka',
        shortCode: 'JWK',
      },
      {
        name: 'Madang',
        shortCode: 'MOM',
      },
      {
        name: 'Manus',
        shortCode: 'MRL',
      },
      {
        name: 'Milne Bay',
        shortCode: 'MBA',
      },
      {
        name: 'Morobe',
        shortCode: 'MPL',
      },
      {
        name: 'Port Moresby',
        shortCode: 'NCD',
      },
      {
        name: 'New Ireland',
        shortCode: 'NIK',
      },
      {
        name: 'Northern',
        shortCode: 'NPP',
      },
      {
        name: 'Southern Highlands',
        shortCode: 'SHM',
      },
      {
        name: 'West New Britain',
        shortCode: 'WBK',
      },
      {
        name: 'West Sepik',
        shortCode: 'SAN',
      },
      {
        name: 'Western',
        shortCode: 'WPD',
      },
      {
        name: 'Western Highlands',
        shortCode: 'WHM',
      },
    ],
  },
  {
    countryName: 'Paraguay',
    countryShortCode: 'PY',
    regions: [
      {
        name: 'Alto Paraguay',
        shortCode: '16',
      },
      {
        name: 'Alto Parana',
        shortCode: '10',
      },
      {
        name: 'Amambay',
        shortCode: '13',
      },
      {
        name: 'Asuncion',
        shortCode: 'ASU',
      },
      {
        name: 'Caaguazu',
        shortCode: '5',
      },
      {
        name: 'Caazapa',
        shortCode: '6',
      },
      {
        name: 'Canindeyu',
        shortCode: '14',
      },
      {
        name: 'Central',
        shortCode: '11',
      },
      {
        name: 'Concepcion',
        shortCode: '1',
      },
      {
        name: 'Cordillera',
        shortCode: '3',
      },
      {
        name: 'Boqueron',
        shortCode: '17',
      },
      {
        name: 'Guaira',
        shortCode: '4',
      },
      {
        name: 'Itapua',
        shortCode: '7',
      },
      {
        name: 'Misiones',
        shortCode: '8',
      },
      {
        name: 'Neembucu',
        shortCode: '12',
      },
      {
        name: 'Paraguari',
        shortCode: '9',
      },
      {
        name: 'Presidente Hayes',
        shortCode: '15',
      },
      {
        name: 'San Pedro',
        shortCode: '2',
      },
    ],
  },
  {
    countryName: 'Peru',
    countryShortCode: 'PE',
    regions: [
      {
        name: 'Amazonas',
        shortCode: 'AMA',
      },
      {
        name: 'Ancash',
        shortCode: 'ANC',
      },
      {
        name: 'Apurimac',
        shortCode: 'APU',
      },
      {
        name: 'Arequipa',
        shortCode: 'ARE',
      },
      {
        name: 'Ayacucho',
        shortCode: 'AYA',
      },
      {
        name: 'Cajamarca',
        shortCode: 'CAJ',
      },
      {
        name: 'Callao',
        shortCode: 'CAL',
      },
      {
        name: 'Cusco',
        shortCode: 'CUS',
      },
      {
        name: 'Huancavelica',
        shortCode: 'HUV',
      },
      {
        name: 'Huanuco',
        shortCode: 'HUC',
      },
      {
        name: 'Ica',
        shortCode: 'ICA',
      },
      {
        name: 'Junin',
        shortCode: 'JUN',
      },
      {
        name: 'La Libertad',
        shortCode: 'LAL',
      },
      {
        name: 'Lambayeque',
        shortCode: 'LAM',
      },
      {
        name: 'Lima',
        shortCode: 'LIM',
      },
      {
        name: 'Loreto',
        shortCode: 'LOR',
      },
      {
        name: 'Madre de Dios',
        shortCode: 'MDD',
      },
      {
        name: 'Moquegua',
        shortCode: 'MOQ',
      },
      {
        name: 'Municipalidad Metropolitana de Lima',
        shortCode: 'LMA',
      },
      {
        name: 'Pasco',
        shortCode: 'PAS',
      },
      {
        name: 'Piura',
        shortCode: 'PIU',
      },
      {
        name: 'Puno',
        shortCode: 'PUN',
      },
      {
        name: 'San Martin',
        shortCode: 'SAM',
      },
      {
        name: 'Tacna',
        shortCode: 'TAC',
      },
      {
        name: 'Tumbes',
        shortCode: 'TUM',
      },
      {
        name: 'Ucayali',
        shortCode: 'UCA',
      },
    ],
  },
  {
    countryName: 'Philippines',
    countryShortCode: 'PH',
    regions: [
      {
        name: 'Abra',
        shortCode: 'ABR',
      },
      {
        name: 'Agusan del Norte',
        shortCode: 'AGN',
      },
      {
        name: 'Agusan del Sur',
        shortCode: 'AGS',
      },
      {
        name: 'Aklan',
        shortCode: 'AKL',
      },
      {
        name: 'Albay',
        shortCode: 'ALB',
      },
      {
        name: 'Antique',
        shortCode: 'ANT',
      },
      {
        name: 'Apayao',
        shortCode: 'APA',
      },
      {
        name: 'Aurora',
        shortCode: 'AUR',
      },
      {
        name: 'Basilan',
        shortCode: 'BAS',
      },
      {
        name: 'Bataan',
        shortCode: 'BAN',
      },
      {
        name: 'Batanes',
        shortCode: 'BTN',
      },
      {
        name: 'Batangas',
        shortCode: 'BTG',
      },
      {
        name: 'Benguet',
        shortCode: 'BEN',
      },
      {
        name: 'Biliran',
        shortCode: 'BIL',
      },
      {
        name: 'Bohol',
        shortCode: 'BOH',
      },
      {
        name: 'Bukidnon',
        shortCode: 'BUK',
      },
      {
        name: 'Bulacan',
        shortCode: 'BUL',
      },
      {
        name: 'Cagayan',
        shortCode: 'CAG',
      },
      {
        name: 'Camarines Norte',
        shortCode: 'CAN',
      },
      {
        name: 'Camarines Sur',
        shortCode: 'CAS',
      },
      {
        name: 'Camiguin',
        shortCode: 'CAM',
      },
      {
        name: 'Capiz',
        shortCode: 'CAP',
      },
      {
        name: 'Catanduanes',
        shortCode: 'CAT',
      },
      {
        name: 'Cavite',
        shortCode: 'CAV',
      },
      {
        name: 'Cebu',
        shortCode: 'CEB',
      },
      {
        name: 'Compostela',
        shortCode: 'COM',
      },
      {
        name: 'Cotabato',
        shortCode: 'NCO',
      },
      {
        name: 'Davao del Norte',
        shortCode: 'DAV',
      },
      {
        name: 'Davao del Sur',
        shortCode: 'DAS',
      },
      {
        name: 'Davao Occidental',
        shortCode: 'DVO',
      },
      {
        name: 'Davao Oriental',
        shortCode: 'DAO',
      },
      {
        name: 'Dinagat Islands',
        shortCode: 'DIN',
      },
      {
        name: 'Eastern Samar',
        shortCode: 'EAS',
      },
      {
        name: 'Guimaras',
        shortCode: 'GUI',
      },
      {
        name: 'Ifugao',
        shortCode: 'IFU',
      },
      {
        name: 'Ilocos Norte',
        shortCode: 'ILN',
      },
      {
        name: 'Ilocos Sur',
        shortCode: 'ILS',
      },
      {
        name: 'Iloilo',
        shortCode: 'ILI',
      },
      {
        name: 'Isabela',
        shortCode: 'ISA',
      },
      {
        name: 'Kalinga',
        shortCode: 'KAL',
      },
      {
        name: 'La Union',
        shortCode: 'LUN',
      },
      {
        name: 'Laguna',
        shortCode: 'LAG',
      },
      {
        name: 'Lanao del Norte',
        shortCode: 'LAN',
      },
      {
        name: 'Lanao del Sur',
        shortCode: 'LAS',
      },
      {
        name: 'Leyte',
        shortCode: 'LEY',
      },
      {
        name: 'Maguindanao',
        shortCode: 'MAG',
      },
      {
        name: 'Masbate',
        shortCode: 'MAS',
      },
      {
        name: 'Metro Manila',
        shortCode: '00',
      },
      {
        name: 'Mindoro Occidental',
        shortCode: 'MDC',
      },
      {
        name: 'Mindoro Oriental',
        shortCode: 'MDR',
      },
      {
        name: 'Misamis Occidental',
        shortCode: 'MSC',
      },
      {
        name: 'Misamis Oriental',
        shortCode: 'MSR',
      },
      {
        name: 'Mountain Province',
        shortCode: 'MOU',
      },
      {
        name: 'Negros Occidental',
        shortCode: 'NEC',
      },
      {
        name: 'Negros Oriental',
        shortCode: 'NER',
      },
      {
        name: 'Northern Samar',
        shortCode: 'NSA',
      },
      {
        name: 'Nueva Ecija',
        shortCode: 'NUE',
      },
      {
        name: 'Nueva Vizcaya',
        shortCode: 'NUV',
      },
      {
        name: 'Palawan',
        shortCode: 'PLW',
      },
      {
        name: 'Pampanga',
        shortCode: 'PAM',
      },
      {
        name: 'Pangasinan',
        shortCode: 'PAN',
      },
      {
        name: 'Quezon',
        shortCode: 'QUE',
      },
      {
        name: 'Quirino',
        shortCode: 'QUI',
      },
      {
        name: 'Rizal',
        shortCode: 'RIZ',
      },
      {
        name: 'Romblon',
        shortCode: 'ROM',
      },
      {
        name: 'Samar',
        shortCode: 'WSA',
      },
      {
        name: 'Sarangani',
        shortCode: 'SAR',
      },
      {
        name: 'Siquijor',
        shortCode: 'SIG',
      },
      {
        name: 'Sorsogon',
        shortCode: 'SOR',
      },
      {
        name: 'Southern Leyte',
        shortCode: 'SLE',
      },
      {
        name: 'Sultan Kudarat',
        shortCode: 'AUK',
      },
      {
        name: 'Sulu',
        shortCode: 'SLU',
      },
      {
        name: 'Surigao del Norte',
        shortCode: 'SUN',
      },
      {
        name: 'Surigao del Sur',
        shortCode: 'SUR',
      },
      {
        name: 'Tarlac',
        shortCode: 'TAR',
      },
      {
        name: 'Tawi-Tawi',
        shortCode: 'TAW',
      },
      {
        name: 'Zambales',
        shortCode: 'ZMB',
      },
      {
        name: 'Zamboanga del Norte',
        shortCode: 'ZAN',
      },
      {
        name: 'Zamboanga del Sur',
        shortCode: 'ZAS',
      },
      {
        name: 'Zamboanga Sibugay',
        shortCode: 'ZSI',
      },
    ],
  },
  {
    countryName: 'Pitcairn',
    countryShortCode: 'PN',
    regions: [
      {
        name: 'Pitcairn Islands',
      },
    ],
  },
  {
    countryName: 'Poland',
    countryShortCode: 'PL',
    regions: [
      {
        name: 'Dolnośląskie',
        shortCode: 'DS',
      },
      {
        name: 'Kujawsko-pomorskie',
        shortCode: 'KP',
      },
      {
        name: 'Łódzkie',
        shortCode: 'LD',
      },
      {
        name: 'Lubelskie',
        shortCode: 'LU',
      },
      {
        name: 'Lubuskie',
        shortCode: 'LB',
      },
      {
        name: 'Małopolskie',
        shortCode: 'MA',
      },
      {
        name: 'Mazowieckie',
        shortCode: 'MZ',
      },
      {
        name: 'Opolskie',
        shortCode: 'OP',
      },
      {
        name: 'Podkarpackie',
        shortCode: 'PK',
      },
      {
        name: 'Podlaskie',
        shortCode: 'PD',
      },
      {
        name: 'Pomorskie',
        shortCode: 'PM',
      },
      {
        name: 'Śląskie',
        shortCode: 'SL',
      },
      {
        name: 'Świętokrzyskie',
        shortCode: 'SK',
      },
      {
        name: 'Warmińsko-mazurskie',
        shortCode: 'WN',
      },
      {
        name: 'Wielkopolskie',
        shortCode: 'WP',
      },
      {
        name: 'Zachodniopomorskie',
        shortCode: 'ZP',
      },
    ],
  },
  {
    countryName: 'Portugal',
    countryShortCode: 'PT',
    regions: [
      {
        name: 'Açores',
        shortCode: 'Aveiro District',
      },
      {
        name: 'Aveiro',
        shortCode: 'Aveiro District',
      },
      {
        name: 'Beja',
        shortCode: 'Beja District',
      },
      {
        name: 'Braga',
        shortCode: 'Braga',
      },
      {
        name: 'Bragança',
        shortCode: 'Bragança District',
      },
      {
        name: 'Castelo Branco',
        shortCode: 'Castelo Branco District',
      },
      {
        name: 'Coimbra',
        shortCode: 'Coimbra District',
      },
      {
        name: 'Évora',
        shortCode: 'Évora District',
      },
      {
        name: 'Faro',
        shortCode: 'Faro District',
      },
      {
        name: 'Guarda',
        shortCode: 'Guarda District',
      },
      {
        name: 'Leiria',
        shortCode: 'Leiria District',
      },
      {
        name: 'Lisboa',
        shortCode: 'Lisbon',
      },
      {
        name: 'Madeira',
        shortCode: 'Castelo Branco',
      },
      {
        name: 'Portalegre',
        shortCode: 'Portalegre District',
      },
      {
        name: 'Porto',
        shortCode: 'Porto District',
      },
      {
        name: 'Santarém',
        shortCode: 'Santarém District',
      },
      {
        name: 'Setúbal',
        shortCode: 'Setubal',
      },
      {
        name: 'Viana do Castelo',
        shortCode: 'Viana do Castelo District',
      },
      {
        name: 'Vila Real',
        shortCode: 'Vila Real District',
      },
      {
        name: 'Viseu',
        shortCode: 'Viseu District',
      },
    ],
  },
  {
    countryName: 'Puerto Rico',
    countryShortCode: 'PR',
    regions: [
      {
        name: 'Adjuntas',
        shortCode: 'Adjuntas',
      },
      {
        name: 'Aguada',
        shortCode: 'Aguada',
      },
      {
        name: 'Aguadilla',
        shortCode: 'Aguadilla',
      },
      {
        name: 'Aguas Buenas',
        shortCode: 'Aguas Buenas',
      },
      {
        name: 'Aibonito',
        shortCode: 'Aibonito',
      },
      {
        name: 'Anasco',
        shortCode: 'Anasco',
      },
      {
        name: 'Arecibo',
        shortCode: 'Arecibo',
      },
      {
        name: 'Arroyo',
        shortCode: 'Arroyo',
      },
      {
        name: 'Barceloneta',
        shortCode: 'Barceloneta',
      },
      {
        name: 'Barranquitas',
        shortCode: 'Barranquitas',
      },
      {
        name: 'Bayamon',
        shortCode: 'Bayamon',
      },
      {
        name: 'Cabo Rojo',
        shortCode: 'Cabo Rojo',
      },
      {
        name: 'Caguas',
        shortCode: 'Caguas',
      },
      {
        name: 'Camuy',
        shortCode: 'Camuy',
      },
      {
        name: 'Canovanas',
        shortCode: 'Canovanas',
      },
      {
        name: 'Carolina',
        shortCode: 'Carolina',
      },
      {
        name: 'Cat',
        shortCode: 'Cat',
      },
      {
        name: 'Ceiba',
        shortCode: 'Ceiba',
      },
      {
        name: 'Ciales',
        shortCode: 'Ciales',
      },
      {
        name: 'Cidra',
        shortCode: 'Cidra',
      },
      {
        name: 'Coamo',
        shortCode: 'Coamo',
      },
      {
        name: 'Comerio',
        shortCode: 'Comerio',
      },
      {
        name: 'Corozal',
        shortCode: 'Corozal',
      },
      {
        name: 'Culebra',
        shortCode: 'Culebra',
      },
      {
        name: 'Dorado',
        shortCode: 'Dorado',
      },
      {
        name: 'Fajardo',
        shortCode: 'Fajardo',
      },
      {
        name: 'Florida',
        shortCode: 'Florida',
      },
      {
        name: 'Guanica',
        shortCode: 'Guanica',
      },
      {
        name: 'Guayama',
        shortCode: 'Guayama',
      },
      {
        name: 'Guayanilla',
        shortCode: 'Guayanilla',
      },
      {
        name: 'Guaynabo',
        shortCode: 'Guaynabo',
      },
      {
        name: 'Gurabo',
        shortCode: 'Gurabo',
      },
      {
        name: 'Hatillo',
        shortCode: 'Hatillo',
      },
      {
        name: 'Hormigueros',
        shortCode: 'Hormigueros',
      },
      {
        name: 'Humacao',
        shortCode: 'Humacao',
      },
      {
        name: 'Isabe',
        shortCode: 'Isabe',
      },
      {
        name: 'Juana Diaz',
        shortCode: 'Juana Diaz',
      },
      {
        name: 'Juncos',
        shortCode: 'Juncos',
      },
      {
        name: 'Lajas',
        shortCode: 'Lajas',
      },
      {
        name: 'Lares',
        shortCode: 'Lares',
      },
      {
        name: 'Las Marias',
        shortCode: 'Las Marias',
      },
      {
        name: 'Las oiza',
        shortCode: 'Las oiza',
      },
      {
        name: 'Luquillo',
        shortCode: 'Luquillo',
      },
      {
        name: 'Manati',
        shortCode: 'Manati',
      },
      {
        name: 'Maricao',
        shortCode: 'Maricao',
      },
      {
        name: 'Maunabo',
        shortCode: 'Maunabo',
      },
      {
        name: 'Mayaguez',
        shortCode: 'Mayaguez',
      },
      {
        name: 'Moca',
        shortCode: 'Moca',
      },
      {
        name: 'Morovis',
        shortCode: 'Morovis',
      },
      {
        name: 'Naguabo',
        shortCode: 'Naguabo',
      },
      {
        name: 'Naranjito',
        shortCode: 'Naranjito',
      },
      {
        name: 'Orocovis',
        shortCode: 'Orocovis',
      },
      {
        name: 'Patillas',
        shortCode: 'Patillas',
      },
      {
        name: 'Penuelas',
        shortCode: 'Penuelas',
      },
      {
        name: 'Ponce',
        shortCode: 'Ponce',
      },
      {
        name: 'Quebradillas',
        shortCode: 'Quebradillas',
      },
      {
        name: 'Rincon',
        shortCode: 'Rincon',
      },
      {
        name: 'Rio Grande',
        shortCode: 'Rio Grande',
      },
      {
        name: 'Sabana linas',
        shortCode: 'Sabana linas',
      },
      {
        name: 'San German',
        shortCode: 'San German',
      },
      {
        name: 'San Juan',
        shortCode: 'San Juan',
      },
      {
        name: 'San Lorenzo',
        shortCode: 'San Lorenzo',
      },
      {
        name: 'San Sebastian',
        shortCode: 'San Sebastian',
      },
      {
        name: 'Santa Isabel',
        shortCode: 'Santa Isabel',
      },
      {
        name: 'Toa Alta',
        shortCode: 'Toa Alta',
      },
      {
        name: 'Toa Baja',
        shortCode: 'Toa Baja',
      },
      {
        name: 'Trujillo Alto',
        shortCode: 'Trujillo Alto',
      },
      {
        name: 'Utuado',
        shortCode: 'Utuado',
      },
      {
        name: 'Vega Alta',
        shortCode: 'Vega Alta',
      },
      {
        name: 'Vega ues',
        shortCode: 'Vega ues',
      },
      {
        name: 'Villalba',
        shortCode: 'Villalba',
      },
      {
        name: 'Yabucoa',
        shortCode: 'Yabucoa',
      },
      {
        name: 'Yauco',
        shortCode: 'Yauco',
      },
    ],
  },
  {
    countryName: 'Qatar',
    countryShortCode: 'QA',
    regions: [
      {
        name: 'Ad Dawḩah',
        shortCode: 'DA',
      },
      {
        name: 'Al Khawr wa adh Dhakhīrah',
        shortCode: 'KH',
      },
      {
        name: 'Al Wakrah',
        shortCode: 'WA',
      },
      {
        name: 'Ar Rayyān',
        shortCode: 'RA',
      },
      {
        name: 'Ash Shamāl',
        shortCode: 'MS',
      },
      {
        name: 'Az̧ Za̧`āyin',
        shortCode: 'ZA',
      },
      {
        name: 'Umm Şalāl',
        shortCode: 'US',
      },
    ],
  },
  {
    countryName: 'Réunion',
    countryShortCode: 'RE',
    regions: [
      {
        name: 'Réunion',
      },
    ],
  },
  {
    countryName: 'Romania',
    countryShortCode: 'RO',
    regions: [
      {
        name: 'Alba',
        shortCode: 'AB',
      },
      {
        name: 'Arad',
        shortCode: 'AR',
      },
      {
        name: 'Arges',
        shortCode: 'AG',
      },
      {
        name: 'Bacau',
        shortCode: 'BC',
      },
      {
        name: 'Bihor',
        shortCode: 'BH',
      },
      {
        name: 'Bistrita-Nasaud',
        shortCode: 'BN',
      },
      {
        name: 'Botosani',
        shortCode: 'BT',
      },
      {
        name: 'Braila',
        shortCode: 'BR',
      },
      {
        name: 'Brasov',
        shortCode: 'BV',
      },
      {
        name: 'Bucuresti',
        shortCode: 'B',
      },
      {
        name: 'Buzau',
        shortCode: 'BZ',
      },
      {
        name: 'Calarasi',
        shortCode: 'CL',
      },
      {
        name: 'Caras-Severin',
        shortCode: 'CS',
      },
      {
        name: 'Cluj',
        shortCode: 'CJ',
      },
      {
        name: 'Constanta',
        shortCode: 'CT',
      },
      {
        name: 'Covasna',
        shortCode: 'CV',
      },
      {
        name: 'Dambovita',
        shortCode: 'DB',
      },
      {
        name: 'Dolj',
        shortCode: 'DJ',
      },
      {
        name: 'Galati',
        shortCode: 'GL',
      },
      {
        name: 'Giurgiu',
        shortCode: 'GR',
      },
      {
        name: 'Gorj',
        shortCode: 'GJ',
      },
      {
        name: 'Harghita',
        shortCode: 'HR',
      },
      {
        name: 'Hunedoara',
        shortCode: 'HD',
      },
      {
        name: 'Ialomita',
        shortCode: 'IL',
      },
      {
        name: 'Iasi',
        shortCode: 'IS',
      },
      {
        name: 'Maramures',
        shortCode: 'MM',
      },
      {
        name: 'Mehedinti',
        shortCode: 'MH',
      },
      {
        name: 'Mures',
        shortCode: 'MS',
      },
      {
        name: 'Neamt',
        shortCode: 'NT',
      },
      {
        name: 'Olt',
        shortCode: 'OT',
      },
      {
        name: 'Prahova',
        shortCode: 'PH',
      },
      {
        name: 'Salaj',
        shortCode: 'SJ',
      },
      {
        name: 'Satu Mare',
        shortCode: 'SM',
      },
      {
        name: 'Sibiu',
        shortCode: 'SB',
      },
      {
        name: 'Suceava',
        shortCode: 'SV',
      },
      {
        name: 'Teleorman',
        shortCode: 'TR',
      },
      {
        name: 'Timis',
        shortCode: 'TM',
      },
      {
        name: 'Tulcea',
        shortCode: 'TL',
      },
      {
        name: 'Valcea',
        shortCode: 'VL',
      },
      {
        name: 'Vaslui',
        shortCode: 'VS',
      },
      {
        name: 'Vrancea',
        shortCode: 'VN',
      },
    ],
  },
  {
    countryName: 'Russian Federation',
    countryShortCode: 'RU',
    regions: [
      {
        name: 'Admiralteyskiy',
        shortCode: 'Admiralteyskiy',
      },
      {
        name: 'Moskva',
        shortCode: 'Moskva',
      },
      {
        name: 'Republic of Adygea',
        shortCode: 'AD',
      },
      {
        name: 'Republic of Altai (Gorno-Altaysk)',
        shortCode: 'AL',
      },
      {
        name: 'Altai Krai',
        shortCode: 'ALT',
      },
      {
        name: 'Amur Oblast',
        shortCode: 'AMU',
      },
      {
        name: 'Arkhangelsk Oblast',
        shortCode: 'ARK',
      },
      {
        name: 'Astrakhan Oblast',
        shortCode: 'AST',
      },
      {
        name: 'Republic of Bashkortostan',
        shortCode: 'BA',
      },
      {
        name: 'Belgorod Oblast',
        shortCode: 'BEL',
      },
      {
        name: 'Bryansk Oblast',
        shortCode: 'BRY',
      },
      {
        name: 'Republic of Buryatia',
        shortCode: 'BU',
      },
      {
        name: 'Chechen Republic',
        shortCode: 'CE',
      },
      {
        name: 'Chelyabinsk Oblast',
        shortCode: 'CHE',
      },
      {
        name: 'Chukotka Autonomous Okrug',
        shortCode: 'CHU',
      },
      {
        name: 'Chuvash Republic',
        shortCode: 'CU',
      },
      {
        name: 'Republic of Dagestan',
        shortCode: 'DA',
      },
      {
        name: 'Republic of Ingushetia',
        shortCode: 'IN',
      },
      {
        name: 'Irkutsk Oblast',
        shortCode: 'IRK',
      },
      {
        name: 'Ivanovo Oblast',
        shortCode: 'IVA',
      },
      {
        name: 'Jewish Autonomous Oblast',
        shortCode: 'JEW',
      },
      {
        name: 'Kabardino-Balkar Republic',
        shortCode: 'KB',
      },
      {
        name: 'Kaliningrad Oblast',
        shortCode: 'KLN',
      },
      {
        name: 'Republic of Kalmykia',
        shortCode: 'KL',
      },
      {
        name: 'Kaluga Oblast',
        shortCode: 'KLU',
      },
      {
        name: 'Kamchatka Krai',
        shortCode: 'KAM',
      },
      {
        name: 'Karachay-Cherkess Republic',
        shortCode: 'KC',
      },
      {
        name: 'Republic of Karelia',
        shortCode: 'KR',
      },
      {
        name: 'Khabarovsk Krai',
        shortCode: 'KHA',
      },
      {
        name: 'Republic of Khakassia',
        shortCode: 'KK',
      },
      {
        name: 'Khanty-Mansi Autonomous Okrug - Yugra',
        shortCode: 'KHM',
      },
      {
        name: 'Kemerovo Oblast',
        shortCode: 'KEM',
      },
      {
        name: 'Kirov Oblast',
        shortCode: 'KIR',
      },
      {
        name: 'Komi Republic',
        shortCode: 'KO',
      },
      {
        name: 'Kostroma Oblast',
        shortCode: 'KOS',
      },
      {
        name: 'Krasnodar Krai',
        shortCode: 'KDA',
      },
      {
        name: 'Krasnoyarsk Krai',
        shortCode: 'KYA',
      },
      {
        name: 'Kurgan Oblast',
        shortCode: 'KGN',
      },
      {
        name: 'Kursk Oblast',
        shortCode: 'KRS',
      },
      {
        name: 'Leningrad Oblast',
        shortCode: 'LEN',
      },
      {
        name: 'Lipetsk Oblast',
        shortCode: 'LIP',
      },
      {
        name: 'Magadan Oblast',
        shortCode: 'MAG',
      },
      {
        name: 'Mari El Republic',
        shortCode: 'ME',
      },
      {
        name: 'Republic of Mordovia',
        shortCode: 'MO',
      },
      {
        name: 'Moscow Oblast',
        shortCode: 'MOS',
      },
      {
        name: 'Moscow',
        shortCode: 'MOW',
      },
      {
        name: 'Murmansk Oblast',
        shortCode: 'MU',
      },
      {
        name: 'Nenets Autonomous Okrug',
        shortCode: 'NEN',
      },
      {
        name: 'Nizhny Novgorod Oblast',
        shortCode: 'NIZ',
      },
      {
        name: 'Novgorod Oblast',
        shortCode: 'NGR',
      },
      {
        name: 'Novosibirsk Oblast',
        shortCode: 'NVS',
      },
      {
        name: 'Omsk Oblast',
        shortCode: 'OMS',
      },
      {
        name: 'Orenburg Oblast',
        shortCode: 'ORE',
      },
      {
        name: 'Oryol Oblast',
        shortCode: 'ORL',
      },
      {
        name: 'Penza Oblast',
        shortCode: 'PNZ',
      },
      {
        name: 'Perm Krai',
        shortCode: 'PER',
      },
      {
        name: 'Primorsky Krai',
        shortCode: 'PRI',
      },
      {
        name: 'Pskov Oblast',
        shortCode: 'PSK',
      },
      {
        name: 'Rostov Oblast',
        shortCode: 'ROS',
      },
      {
        name: 'Ryazan Oblast',
        shortCode: 'RYA',
      },
      {
        name: 'Saint Petersburg',
        shortCode: 'SPE',
      },
      {
        name: 'Sakha (Yakutia) Republic',
        shortCode: 'SA',
      },
      {
        name: 'Sakhalin Oblast',
        shortCode: 'SAK',
      },
      {
        name: 'Samara Oblast',
        shortCode: 'SAM',
      },
      {
        name: 'Saratov Oblast',
        shortCode: 'SAR',
      },
      {
        name: 'Republic of North Ossetia-Alania',
        shortCode: 'NOA',
      },
      {
        name: 'Smolensk Oblast',
        shortCode: 'SMO',
      },
      {
        name: 'Stavropol Krai',
        shortCode: 'STA',
      },
      {
        name: 'Sverdlovsk Oblast',
        shortCode: 'SVE',
      },
      {
        name: 'Tambov Oblast',
        shortCode: 'TAM',
      },
      {
        name: 'Republic of Tatarstan',
        shortCode: 'TA',
      },
      {
        name: 'Tomsk Oblast',
        shortCode: 'TOM',
      },
      {
        name: 'Tuva Republic',
        shortCode: 'TU',
      },
      {
        name: 'Tula Oblast',
        shortCode: 'TUL',
      },
      {
        name: 'Tver Oblast',
        shortCode: 'TVE',
      },
      {
        name: 'Tyumen Oblast',
        shortCode: 'TYU',
      },
      {
        name: 'Udmurt Republic',
        shortCode: 'UD',
      },
      {
        name: 'Ulyanovsk Oblast',
        shortCode: 'ULY',
      },
      {
        name: 'Vladimir Oblast',
        shortCode: 'VLA',
      },
      {
        name: 'Volgograd Oblast',
        shortCode: 'VGG',
      },
      {
        name: 'Vologda Oblast',
        shortCode: 'VLG',
      },
      {
        name: 'Voronezh Oblast',
        shortCode: 'VOR',
      },
      {
        name: 'Yamalo-Nenets Autonomous Okrug',
        shortCode: 'YAN',
      },
      {
        name: 'Yaroslavl Oblast',
        shortCode: 'YAR',
      },
      {
        name: 'Zabaykalsky Krai',
        shortCode: 'ZAB',
      },
    ],
  },
  {
    countryName: 'Rwanda',
    countryShortCode: 'RW',
    regions: [
      {
        name: 'Kigali',
        shortCode: '01',
      },
      {
        name: 'Eastern',
        shortCode: '02',
      },
      {
        name: 'Northern',
        shortCode: '03',
      },
      {
        name: 'Western',
        shortCode: '04',
      },
      {
        name: 'Southern',
        shortCode: '05',
      },
    ],
  },
  {
    countryName: 'Saint Barthélemy',
    countryShortCode: 'BL',
    regions: [
      {
        name: 'Au Vent',
        shortCode: '02',
      },
      {
        name: 'Sous le Vent',
        shortCode: '01',
      },
    ],
  },
  {
    countryName: 'Saint Helena, Ascension and Tristan da Cunha',
    countryShortCode: 'SH',
    regions: [
      {
        name: 'Ascension',
        shortCode: 'AC',
      },
      {
        name: 'Saint Helena',
        shortCode: 'HL',
      },
      {
        name: 'Tristan da Cunha',
        shortCode: 'TA',
      },
    ],
  },
  {
    countryName: 'Saint Kitts and Nevis',
    countryShortCode: 'KN',
    regions: [
      {
        name: 'Saint Kitts',
        shortCode: 'K',
      },
      {
        name: 'Nevis',
        shortCode: 'N',
      },
    ],
  },
  {
    countryName: 'Saint Lucia',
    countryShortCode: 'LC',
    regions: [
      {
        name: 'Anse-la-Raye',
        shortCode: '01',
      },
      {
        name: 'Canaries',
        shortCode: '12',
      },
      {
        name: 'Castries',
        shortCode: '02',
      },
      {
        name: 'Choiseul',
        shortCode: '03',
      },
      {
        name: 'Dennery',
        shortCode: '05',
      },
      {
        name: 'Gros Islet',
        shortCode: '06',
      },
      {
        name: 'Laborie',
        shortCode: '07',
      },
      {
        name: 'Micoud',
        shortCode: '08',
      },
      {
        name: 'Soufriere',
        shortCode: '10',
      },
      {
        name: 'Vieux Fort',
        shortCode: '11',
      },
    ],
  },
  {
    countryName: 'Saint Martin',
    countryShortCode: 'MF',
    regions: [
      {
        name: 'Saint Martin',
      },
    ],
  },
  {
    countryName: 'Saint Pierre and Miquelon',
    countryShortCode: 'PM',
    regions: [
      {
        name: 'Miquelon',
      },
      {
        name: 'Saint Pierre',
      },
    ],
  },
  {
    countryName: 'Saint Vincent and the Grenadines',
    countryShortCode: 'VC',
    regions: [
      {
        name: 'Charlotte',
        shortCode: '01',
      },
      {
        name: 'Grenadines',
        shortCode: '06',
      },
      {
        name: 'Saint Andrew',
        shortCode: '02',
      },
      {
        name: 'Saint David',
        shortCode: '03',
      },
      {
        name: 'Saint George',
        shortCode: '04',
      },
      {
        name: 'Saint Patrick',
        shortCode: '05',
      },
    ],
  },
  {
    countryName: 'Samoa',
    countryShortCode: 'WS',
    regions: [
      {
        name: "A'ana",
        shortCode: 'AA',
      },
      {
        name: 'Aiga-i-le-Tai',
        shortCode: 'AL',
      },
      {
        name: 'Atua',
        shortCode: 'AT',
      },
      {
        name: "Fa'asaleleaga",
        shortCode: 'FA',
      },
      {
        name: "Gaga'emauga",
        shortCode: 'GE',
      },
      {
        name: 'Gagaifomauga',
        shortCode: 'GI',
      },
      {
        name: 'Palauli',
        shortCode: 'PA',
      },
      {
        name: "Satupa'itea",
        shortCode: 'SA',
      },
      {
        name: 'Tuamasaga',
        shortCode: 'TU',
      },
      {
        name: "Va'a-o-Fonoti",
        shortCode: 'VF',
      },
      {
        name: 'Vaisigano',
        shortCode: 'VS',
      },
    ],
  },
  {
    countryName: 'San Marino',
    countryShortCode: 'SM',
    regions: [
      {
        name: 'San Marino',
        shortCode: 'SM',
      },
    ],
  },
  {
    countryName: 'Sao Tome and Principe',
    countryShortCode: 'ST',
    regions: [
      {
        name: 'Principe',
        shortCode: 'P',
      },
      {
        name: 'Sao Tome',
        shortCode: 'S',
      },
    ],
  },
  {
    countryName: 'Saudi Arabia',
    countryShortCode: 'SA',
    regions: [
      {
        name: "'Asir",
        shortCode: '14',
      },
      {
        name: 'Al Bahah',
        shortCode: '11',
      },
      {
        name: 'Al Hudud ash Shamaliyah',
        shortCode: '08',
      },
      {
        name: 'Al Jawf',
        shortCode: '12',
      },
      {
        name: 'Al Madinah al Munawwarah',
        shortCode: '03',
      },
      {
        name: 'Al Qasim',
        shortCode: '05',
      },
      {
        name: 'Ar Riyad',
        shortCode: '01',
      },
      {
        name: 'Ash Sharqiyah',
        shortCode: '04',
      },
      {
        name: "Ha'il",
        shortCode: '06',
      },
      {
        name: 'Jazan',
        shortCode: '09',
      },
      {
        name: 'Makkah al Mukarramah',
        shortCode: '02',
      },
      {
        name: 'Najran',
        shortCode: '10',
      },
      {
        name: 'Tabuk',
        shortCode: '07',
      },
    ],
  },
  {
    countryName: 'Senegal',
    countryShortCode: 'SN',
    regions: [
      {
        name: 'Dakar',
        shortCode: 'DK',
      },
      {
        name: 'Diourbel',
        shortCode: 'DB',
      },
      {
        name: 'Fatick',
        shortCode: 'FK',
      },
      {
        name: 'Kaffrine',
        shortCode: 'KA',
      },
      {
        name: 'Kaolack',
        shortCode: 'KL',
      },
      {
        name: 'Kedougou',
        shortCode: 'KE',
      },
      {
        name: 'Kolda',
        shortCode: 'KD',
      },
      {
        name: 'Louga',
        shortCode: 'LG',
      },
      {
        name: 'Matam',
        shortCode: 'MT',
      },
      {
        name: 'Saint-Louis',
        shortCode: 'SL',
      },
      {
        name: 'Sedhiou',
        shortCode: 'SE',
      },
      {
        name: 'Tambacounda',
        shortCode: 'TC',
      },
      {
        name: 'Thies',
        shortCode: 'TH',
      },
      {
        name: 'Ziguinchor',
        shortCode: 'ZG',
      },
    ],
  },
  {
    countryName: 'Serbia',
    countryShortCode: 'RS',
    regions: [
      {
        name: 'Beograd (Belgrade)',
        shortCode: '00',
      },
      {
        name: 'Borski',
        shortCode: '14',
      },
      {
        name: 'Braničevski',
        shortCode: '11',
      },
      {
        name: 'Jablanički',
        shortCode: '23',
      },
      {
        name: 'Južnobački',
        shortCode: '06',
      },
      {
        name: 'Južnobanatski',
        shortCode: '04',
      },
      {
        name: 'Kolubarski',
        shortCode: '09',
      },
      {
        name: 'Kosovski',
        shortCode: '25',
      },
      {
        name: 'Kosovsko-Mitrovački',
        shortCode: '28',
      },
      {
        name: 'Kosovsko-Pomoravski',
        shortCode: '29',
      },
      {
        name: 'Mačvanski',
        shortCode: '08',
      },
      {
        name: 'Moravički',
        shortCode: '17',
      },
      {
        name: 'Nišavski',
        shortCode: '20',
      },
      {
        name: 'Pčinjski',
        shortCode: '24',
      },
      {
        name: 'Pećki',
        shortCode: '26',
      },
      {
        name: 'Pirotski',
        shortCode: '22',
      },
      {
        name: 'Podunavski',
        shortCode: '10',
      },
      {
        name: 'Pomoravski',
        shortCode: '13',
      },
      {
        name: 'Prizrenski',
        shortCode: '27',
      },
      {
        name: 'Rasinski',
        shortCode: '19',
      },
      {
        name: 'Raški',
        shortCode: '18',
      },
      {
        name: 'Severnobački',
        shortCode: '01',
      },
      {
        name: 'Severnobanatski',
        shortCode: '03',
      },
      {
        name: 'Srednjebanatski',
        shortCode: '02',
      },
      {
        name: 'Sremski',
        shortCode: '07',
      },
      {
        name: 'Šumadijski',
        shortCode: '12',
      },
      {
        name: 'Toplički',
        shortCode: '21',
      },
      {
        name: 'Zaječarski',
        shortCode: '15',
      },
      {
        name: 'Zapadnobački',
        shortCode: '05',
      },
      {
        name: 'Zlatiborski',
        shortCode: '16',
      },
    ],
  },
  {
    countryName: 'Seychelles',
    countryShortCode: 'SC',
    regions: [
      {
        name: 'Anse aux Pins',
        shortCode: '01',
      },
      {
        name: 'Anse Boileau',
        shortCode: '02',
      },
      {
        name: 'Anse Etoile',
        shortCode: '03',
      },
      {
        name: 'Anse Royale',
        shortCode: '05',
      },
      {
        name: 'Anu Cap',
        shortCode: '04',
      },
      {
        name: 'Baie Lazare',
        shortCode: '06',
      },
      {
        name: 'Baie Sainte Anne',
        shortCode: '07',
      },
      {
        name: 'Beau Vallon',
        shortCode: '08',
      },
      {
        name: 'Bel Air',
        shortCode: '09',
      },
      {
        name: 'Bel Ombre',
        shortCode: '10',
      },
      {
        name: 'Cascade',
        shortCode: '11',
      },
      {
        name: 'Glacis',
        shortCode: '12',
      },
      {
        name: "Grand'Anse Mahe",
        shortCode: '13',
      },
      {
        name: "Grand'Anse Praslin",
        shortCode: '14',
      },
      {
        name: 'La Digue',
        shortCode: '15',
      },
      {
        name: 'La Riviere Anglaise',
        shortCode: '16',
      },
      {
        name: 'Les Mamelles',
        shortCode: '24',
      },
      {
        name: 'Mont Buxton',
        shortCode: '17',
      },
      {
        name: 'Mont Fleuri',
        shortCode: '18',
      },
      {
        name: 'Plaisance',
        shortCode: '19',
      },
      {
        name: 'Pointe La Rue',
        shortCode: '20',
      },
      {
        name: 'Port Glaud',
        shortCode: '21',
      },
      {
        name: 'Roche Caiman',
        shortCode: '25',
      },
      {
        name: 'Saint Louis',
        shortCode: '22',
      },
      {
        name: 'Takamaka',
        shortCode: '23',
      },
    ],
  },
  {
    countryName: 'Sierra Leone',
    countryShortCode: 'SL',
    regions: [
      {
        name: 'Eastern',
        shortCode: 'E',
      },
      {
        name: 'Northern',
        shortCode: 'N',
      },
      {
        name: 'Southern',
        shortCode: 'S',
      },
      {
        name: 'Western',
        shortCode: 'W',
      },
    ],
  },
  {
    countryName: 'Singapore',
    countryShortCode: 'SG',
    regions: [
      {
        name: 'Central Singapore',
        shortCode: '01',
      },
      {
        name: 'North East',
        shortCode: '02',
      },
      {
        name: 'North West',
        shortCode: '03',
      },
      {
        name: 'South East',
        shortCode: '04',
      },
      {
        name: 'South West',
        shortCode: '05',
      },
    ],
  },
  {
    countryName: 'Sint Maarten (Dutch part)',
    countryShortCode: 'SX',
    regions: [
      {
        name: 'Sint Maarten',
      },
    ],
  },
  {
    countryName: 'Slovakia',
    countryShortCode: 'SK',
    regions: [
      {
        name: 'Banskobystricky',
        shortCode: 'BC',
      },
      {
        name: 'Bratislavsky',
        shortCode: 'BL',
      },
      {
        name: 'Kosicky',
        shortCode: 'KI',
      },
      {
        name: 'Nitriansky',
        shortCode: 'NI',
      },
      {
        name: 'Presovsky',
        shortCode: 'PV',
      },
      {
        name: 'Trenciansky',
        shortCode: 'TC',
      },
      {
        name: 'Trnavsky',
        shortCode: 'TA',
      },
      {
        name: 'Zilinsky',
        shortCode: 'ZI',
      },
    ],
  },
  {
    countryName: 'Slovenia',
    countryShortCode: 'SI',
    regions: [
      {
        name: 'Ajdovscina',
        shortCode: 'Ajdovščina',
      },
      {
        name: 'Apace',
        shortCode: 'Gornja Radgona',
      },
      {
        name: 'Beltinci',
        shortCode: 'Murska Sobota',
      },
      {
        name: 'Benedikt',
        shortCode: 'Lenart',
      },
      {
        name: 'Bistrica ob Sotli',
        shortCode: 'Šmarje pri Jelšah',
      },
      {
        name: 'Bled',
        shortCode: 'Radovljica',
      },
      {
        name: 'Bloke',
        shortCode: 'Cerknica',
      },
      {
        name: 'Bohinj',
        shortCode: 'Radovljica',
      },
      {
        name: 'Borovnica',
        shortCode: 'Vrhnika',
      },
      {
        name: 'Bovec',
        shortCode: 'Tolmin',
      },
      {
        name: 'Braslovce',
        shortCode: 'Žalec',
      },
      {
        name: 'Brda',
        shortCode: 'Radovljica',
      },
      {
        name: 'Brezice',
        shortCode: 'Brežice',
      },
      {
        name: 'Brezovica',
        shortCode: 'Radovljica',
      },
      {
        name: 'Cankova',
        shortCode: 'Murska Sobota',
      },
      {
        name: 'Celje',
        shortCode: 'Celje',
      },
      {
        name: 'Cerklje na Gorenjskem',
        shortCode: 'Kranj',
      },
      {
        name: 'Cerknica',
        shortCode: 'Cerknica',
      },
      {
        name: 'Cerkno',
        shortCode: 'Idrija',
      },
      {
        name: 'Cerkvenjak',
        shortCode: 'Lenart',
      },
      {
        name: 'Cirkulane',
        shortCode: 'Ptuj',
      },
      {
        name: 'Crensovci',
        shortCode: 'Lendava',
      },
      {
        name: 'Crna na Koroskem',
        shortCode: 'Ravne na Koroškem',
      },
      {
        name: 'Crnomelj',
        shortCode: 'Črnomelj',
      },
      {
        name: 'Destrnik',
        shortCode: 'Ptuj',
      },
      {
        name: 'Divaca',
        shortCode: 'Sežana',
      },
      {
        name: 'Dobje',
        shortCode: 'Litija',
      },
      {
        name: 'Dobrepolje',
        shortCode: 'Grosuplje',
      },
      {
        name: 'Dobrna',
        shortCode: 'Celje',
      },
      {
        name: 'Dobrova-Polhov Gradec',
        shortCode: 'Ljubljana',
      },
      {
        name: 'Dobrovnik',
        shortCode: 'Lendava',
      },
      {
        name: 'Dol pri Ljubljani',
        shortCode: 'Ljubljana',
      },
      {
        name: 'Dolenjske Toplice',
        shortCode: 'Novo Mesto',
      },
      {
        name: 'Domzale',
        shortCode: 'Domžale',
      },
      {
        name: 'Dornava',
        shortCode: 'Ptuj',
      },
      {
        name: 'Dravograd',
        shortCode: 'Dravograd',
      },
      {
        name: 'Duplek',
        shortCode: 'Administrative unit Maribor',
      },
      {
        name: 'Gorenja Vas-Poljane',
        shortCode: 'Škofja Loka',
      },
      {
        name: 'Gorisnica',
        shortCode: 'Ptuj',
      },
      {
        name: 'Gorje',
        shortCode: 'Idrija',
      },
      {
        name: 'Gornja Radgona',
        shortCode: 'Gornja Radgona',
      },
      {
        name: 'Gornji Grad',
        shortCode: 'Mozirje',
      },
      {
        name: 'Gornji Petrovci',
        shortCode: 'Murska Sobota',
      },
      {
        name: 'Grad',
        shortCode: 'Murska Sobota',
      },
      {
        name: 'Grosuplje',
        shortCode: 'Grosuplje',
      },
      {
        name: 'Hajdina',
        shortCode: 'Ptuj',
      },
      {
        name: 'Hoce-Slivnica',
        shortCode: 'Administrative unit Maribor',
      },
      {
        name: 'Hodos',
        shortCode: 'Murska Sobota',
      },
      {
        name: 'Horjul',
        shortCode: 'Ljubljana',
      },
      {
        name: 'Hrastnik',
        shortCode: 'Municipality of Hrastnik',
      },
      {
        name: 'Hrpelje-Kozina',
        shortCode: 'Sežana',
      },
      {
        name: 'Idrija',
        shortCode: 'Idrija',
      },
      {
        name: 'Ig',
        shortCode: 'Ljubljana',
      },
      {
        name: 'Ilirska Bistrica',
        shortCode: 'Ilirska Bistrica',
      },
      {
        name: 'Ivancna Gorica',
        shortCode: 'Grosuplje',
      },
      {
        name: 'Izola',
        shortCode: 'Izola',
      },
      {
        name: 'Jesenice',
        shortCode: 'Jesenice',
      },
      {
        name: 'Jursinci',
        shortCode: 'Ptuj',
      },
      {
        name: 'Kamnik',
        shortCode: 'Kamnik',
      },
      {
        name: 'Kanal',
        shortCode: 'Nova Gorica',
      },
      {
        name: 'Kidricevo',
        shortCode: 'Ptuj',
      },
      {
        name: 'Kobarid',
        shortCode: 'Tolmin',
      },
      {
        name: 'Kobilje',
        shortCode: 'Lendava',
      },
      {
        name: 'Kocevje',
        shortCode: 'Kočevje',
      },
      {
        name: 'Komen',
        shortCode: 'Sežana',
      },
      {
        name: 'Komenda',
        shortCode: 'Kamnik',
      },
      {
        name: 'Koper',
        shortCode: 'Koper',
      },
      {
        name: 'Kodanjevica na Krki',
        shortCode: 'Krško',
      },
      {
        name: 'Kostel',
        shortCode: 'Kočevje',
      },
      {
        name: 'Kozje',
        shortCode: 'Šmarje pri Jelšah',
      },
      {
        name: 'Kranj',
        shortCode: 'Kranj',
      },
      {
        name: 'Kranjska Gora',
        shortCode: 'Jesenice',
      },
      {
        name: 'Krizevci',
        shortCode: 'Murska Sobota',
      },
      {
        name: 'Krsko',
        shortCode: 'Krško',
      },
      {
        name: 'Kungota',
        shortCode: 'Pesnica',
      },
      {
        name: 'Kuzma',
        shortCode: 'Murska Sobota',
      },
      {
        name: 'Lasko',
        shortCode: 'Laško',
      },
      {
        name: 'Lenart',
        shortCode: 'Lenart',
      },
      {
        name: 'Lendava',
        shortCode: 'Lendava',
      },
      {
        name: 'Litija',
        shortCode: 'Litija',
      },
      {
        name: 'Ljubljana',
        shortCode: 'Ljubljana',
      },
      {
        name: 'Ljubno',
        shortCode: 'Radovljica',
      },
      {
        name: 'Ljutomer',
        shortCode: 'Ljutomer',
      },
      {
        name: 'Log-Dragomer',
        shortCode: 'Vrhnika',
      },
      {
        name: 'Logatec',
        shortCode: 'Logatec',
      },
      {
        name: 'Loska Dolina',
        shortCode: 'Cerknica',
      },
      {
        name: 'Loski Potok',
        shortCode: 'Ribnica',
      },
      {
        name: 'Lovrenc na Pohorju',
        shortCode: 'Ruše',
      },
      {
        name: 'Lukovica',
        shortCode: 'Domžale',
      },
      {
        name: 'Luce',
        shortCode: 'Mozirje',
      },
      {
        name: 'Majsperk',
        shortCode: 'Ptuj',
      },
      {
        name: 'Makole',
        shortCode: 'Slovenska Bistrica',
      },
      {
        name: 'Maribor',
        shortCode: 'Administrative unit Maribor',
      },
      {
        name: 'Markovci',
        shortCode: 'Ptuj',
      },
      {
        name: 'Medvode',
        shortCode: 'Ljubljana',
      },
      {
        name: 'Menges',
        shortCode: 'Domžale',
      },
      {
        name: 'Metlika',
        shortCode: 'Metlika',
      },
      {
        name: 'Mezica',
        shortCode: 'Ravne na Koroškem',
      },
      {
        name: 'Miklavz na Dravskem Polju',
        shortCode: 'Administrative unit Maribor',
      },
      {
        name: 'Miren-Kostanjevica',
        shortCode: 'Nova Gorica',
      },
      {
        name: 'Mirna',
        shortCode: 'Trebnje',
      },
      {
        name: 'Mirna Pec',
        shortCode: 'Novo Mesto',
      },
      {
        name: 'Mislinja',
        shortCode: 'Slovenj Gradec',
      },
      {
        name: 'Mokronog-Trebelno',
        shortCode: 'Trebnje',
      },
      {
        name: 'Moravce',
        shortCode: 'Domžale',
      },
      {
        name: 'Moravske Toplice',
        shortCode: 'Murska Sobota',
      },
      {
        name: 'Mozirje',
        shortCode: 'Mozirje',
      },
      {
        name: 'Murska Sobota',
        shortCode: 'Murska Sobota',
      },
      {
        name: 'Naklo',
        shortCode: 'Kranj',
      },
      {
        name: 'Nazarje',
        shortCode: 'Mozirje',
      },
      {
        name: 'Nova Gorica',
        shortCode: 'Nova Gorica',
      },
      {
        name: 'Novo Mesto',
        shortCode: 'Novo Mesto',
      },
      {
        name: 'Odranci',
        shortCode: 'Lendava',
      },
      {
        name: 'Ormoz',
        shortCode: 'Ormož',
      },
      {
        name: 'Osilnica',
        shortCode: 'Kočevje',
      },
      {
        name: 'Pesnica',
        shortCode: 'Pesnica',
      },
      {
        name: 'Piran',
        shortCode: 'Piran',
      },
      {
        name: 'Pivka',
        shortCode: 'Postojna',
      },
      {
        name: 'Podcetrtek',
        shortCode: 'Šmarje pri Jelšah',
      },
      {
        name: 'Podlehnik',
        shortCode: 'Ptuj',
      },
      {
        name: 'Podvelka',
        shortCode: 'Radlje ob DraviRadlje ob Dravi',
      },
      {
        name: 'Poljcane',
        shortCode: 'Slovenska Bistrica',
      },
      {
        name: 'Postojna',
        shortCode: 'Slovenska Bistrica',
      },
      {
        name: 'Prebold',
        shortCode: 'Žalec',
      },
      {
        name: 'Preddvor',
        shortCode: 'Kranj',
      },
      {
        name: 'Prevalje',
        shortCode: 'Ravne na Koroškem',
      },
      {
        name: 'Ptuj',
        shortCode: 'Ptuj',
      },
      {
        name: 'Race-Fram',
        shortCode: 'Administrative unit Maribor',
      },
      {
        name: 'Radece',
        shortCode: 'Laško',
      },
      {
        name: 'Radenci',
        shortCode: 'Gornja Radgona',
      },
      {
        name: 'Radlje ob Dravi',
        shortCode: 'Radlje ob Dravi',
      },
      {
        name: 'Radovljica',
        shortCode: 'Radovljica',
      },
      {
        name: 'Ravne na Koroskem',
        shortCode: 'Ravne na Koroškem',
      },
      {
        name: 'Razkrizje',
        shortCode: 'Ljutomer',
      },
      {
        name: 'Recica ob Savinji',
        shortCode: 'Mozirje',
      },
      {
        name: 'Rence-Vogrsko',
        shortCode: 'Nova Gorica',
      },
      {
        name: 'Ribnica',
        shortCode: 'Ribnica',
      },
      {
        name: 'Ribnica na Pohorju',
        shortCode: 'Radlje ob Dravi',
      },
      {
        name: 'Rogaska Slatina',
        shortCode: 'Šmarje pri JelšahŠmarje pri Jelšah',
      },
      {
        name: 'Rogasovci',
        shortCode: 'Murska Sobota',
      },
      {
        name: 'Rogatec',
        shortCode: 'Šmarje pri Jelšah',
      },
      {
        name: 'Ruse',
        shortCode: 'Ruše',
      },
      {
        name: 'Salovci',
        shortCode: 'Murska Sobota',
      },
      {
        name: 'Selnica ob Dravi',
        shortCode: 'Ruše',
      },
      {
        name: 'Semic',
        shortCode: 'Črnomelj',
      },
      {
        name: 'Sempeter-Vrtojba',
        shortCode: 'Nova Gorica',
      },
      {
        name: 'Sencur',
        shortCode: 'Nova Gorica',
      },
      {
        name: 'Sentilj',
        shortCode: 'Pesnica',
      },
      {
        name: 'Sentjernej',
        shortCode: 'Novo Mesto',
      },
      {
        name: 'Sentjur',
        shortCode: 'Šentjur',
      },
      {
        name: 'Sentrupert',
        shortCode: 'Trebnje',
      },
      {
        name: 'Sevnica',
        shortCode: 'Sevnica',
      },
      {
        name: 'Sezana',
        shortCode: 'Sežana',
      },
      {
        name: 'Skocjan',
        shortCode: 'Novo Mesto',
      },
      {
        name: 'Skofja Loka',
        shortCode: 'Škofja Loka',
      },
      {
        name: 'Skofljica',
        shortCode: 'Ljubljana',
      },
      {
        name: 'Slovenj Gradec',
        shortCode: 'Slovenj Gradec',
      },
      {
        name: 'Slovenska Bistrica',
        shortCode: 'Slovenska Bistrica',
      },
      {
        name: 'Slovenske Konjice',
        shortCode: 'Slovenske Konjice',
      },
      {
        name: 'Smarje pri elsah',
        shortCode: 'Šmarje pri Jelšah',
      },
      {
        name: 'Smarjeske Toplice',
        shortCode: 'Novo Mesto',
      },
      {
        name: 'Smartno ob Paki',
        shortCode: 'Velenje',
      },
      {
        name: 'Smartno pri Litiji',
        shortCode: 'Litija',
      },
      {
        name: 'Sodrazica',
        shortCode: 'Ribnica',
      },
      {
        name: 'Solcava',
        shortCode: 'Mozirje',
      },
      {
        name: 'Sostanj',
        shortCode: 'Velenje',
      },
      {
        name: 'Sredisce ob Dravi',
        shortCode: 'Ormož',
      },
      {
        name: 'Starse',
        shortCode: 'Administrative unit Maribor',
      },
      {
        name: 'Store',
        shortCode: 'Celje',
      },
      {
        name: 'Straza',
        shortCode: 'Celje',
      },
      {
        name: 'Sveta Ana',
        shortCode: 'Lenart',
      },
      {
        name: 'Sveta Trojica v Slovenskih Goricah',
        shortCode: 'Lenart',
      },
      {
        name: 'Sveta Andraz v Slovenskih Goricah',
        shortCode: 'Lenart',
      },
      {
        name: 'Sveti Jurij',
        shortCode: 'Murska Sobota',
      },
      {
        name: 'Sveti Jurij v Slovenskih Goricah',
        shortCode: 'Lenart',
      },
      {
        name: 'Sveti Tomaz',
        shortCode: 'Ormož',
      },
      {
        name: 'Tabor',
        shortCode: 'Žalec',
      },
      {
        name: 'Tisina',
        shortCode: 'Murska Sobota',
      },
      {
        name: 'Tolmin',
        shortCode: 'Tolmin',
      },
      {
        name: 'Trbovlje',
        shortCode: 'Tolmin',
      },
      {
        name: 'Trebnje',
        shortCode: 'Trebnje',
      },
      {
        name: 'Trnovska Vas',
        shortCode: 'Ptuj',
      },
      {
        name: 'Trzin',
        shortCode: 'Domžale',
      },
      {
        name: 'Trzic',
        shortCode: 'Tržič',
      },
      {
        name: 'Turnisce',
        shortCode: 'Lendava',
      },
      {
        name: 'Velenje',
        shortCode: 'Lendava',
      },
      {
        name: 'Velika Polana',
        shortCode: 'Lendava',
      },
      {
        name: 'Velike Lasce',
        shortCode: 'Ljubljana',
      },
      {
        name: 'Verzej',
        shortCode: 'Ljutomer',
      },
      {
        name: 'Videm',
        shortCode: 'Grosuplje',
      },
      {
        name: 'Vipava',
        shortCode: 'Ajdovščina',
      },
      {
        name: 'Vitanje',
        shortCode: 'Slovenske Konjice',
      },
      {
        name: 'Vodice',
        shortCode: 'Slovenske Konjice',
      },
      {
        name: 'Vojnik',
        shortCode: 'Celje',
      },
      {
        name: 'Vransko',
        shortCode: 'Žalec',
      },
      {
        name: 'Vrhnika',
        shortCode: 'Vrhnika',
      },
      {
        name: 'Vuzenica',
        shortCode: 'Radlje ob Dravi',
      },
      {
        name: 'Zagorje ob Savi',
        shortCode: 'Zagorje ob Savi',
      },
      {
        name: 'Zavrc',
        shortCode: 'Ptuj',
      },
      {
        name: 'Zrece',
        shortCode: 'Slovenske Konjice',
      },
      {
        name: 'Zalec',
        shortCode: 'Žalec',
      },
      {
        name: 'Zelezniki',
        shortCode: 'Škofja Loka',
      },
      {
        name: 'Zetale',
        shortCode: 'Ptuj',
      },
      {
        name: 'Ziri',
        shortCode: 'Škofja Loka',
      },
      {
        name: 'Zirovnica',
        shortCode: 'Jesenice',
      },
      {
        name: 'Zuzemberk',
        shortCode: 'Novo Mesto',
      },
    ],
  },
  {
    countryName: 'Solomon Islands',
    countryShortCode: 'SB',
    regions: [
      {
        name: 'Central',
        shortCode: 'CE',
      },
      {
        name: 'Choiseul',
        shortCode: 'CH',
      },
      {
        name: 'Guadalcanal',
        shortCode: 'GU',
      },
      {
        name: 'Honiara',
        shortCode: 'CT',
      },
      {
        name: 'Isabel',
        shortCode: 'IS',
      },
      {
        name: 'Makira-Ulawa',
        shortCode: 'MK',
      },
      {
        name: 'Malaita',
        shortCode: 'ML',
      },
      {
        name: 'Rennell and Bellona',
        shortCode: 'RB',
      },
      {
        name: 'Temotu',
        shortCode: 'TE',
      },
      {
        name: 'Western',
        shortCode: 'WE',
      },
    ],
  },
  {
    countryName: 'Somalia',
    countryShortCode: 'SO',
    regions: [
      {
        name: 'Awdal',
        shortCode: 'AW',
      },
      {
        name: 'Bakool',
        shortCode: 'BK',
      },
      {
        name: 'Banaadir',
        shortCode: 'BN',
      },
      {
        name: 'Bari',
        shortCode: 'BR',
      },
      {
        name: 'Bay',
        shortCode: 'BY',
      },
      {
        name: 'Galguduud',
        shortCode: 'GA',
      },
      {
        name: 'Gedo',
        shortCode: 'GE',
      },
      {
        name: 'Hiiraan',
        shortCode: 'HI',
      },
      {
        name: 'Jubbada Dhexe',
        shortCode: 'JD',
      },
      {
        name: 'Jubbada Hoose',
        shortCode: 'JH',
      },
      {
        name: 'Mudug',
        shortCode: 'MU',
      },
      {
        name: 'Nugaal',
        shortCode: 'NU',
      },
      {
        name: 'Sanaag',
        shortCode: 'SA',
      },
      {
        name: 'Shabeellaha Dhexe',
        shortCode: 'SD',
      },
      {
        name: 'Shabeellaha Hoose',
        shortCode: 'SH',
      },
      {
        name: 'Sool',
        shortCode: 'SO',
      },
      {
        name: 'Togdheer',
        shortCode: 'TO',
      },
      {
        name: 'Woqooyi Galbeed',
        shortCode: 'WO',
      },
    ],
  },
  {
    countryName: 'South Africa',
    countryShortCode: 'ZA',
    regions: [
      {
        name: 'Eastern Cape',
        shortCode: 'EC',
      },
      {
        name: 'Free State',
        shortCode: 'FS',
      },
      {
        name: 'Gauteng',
        shortCode: 'GP',
      },
      {
        name: 'KwaZulu-Natal',
        shortCode: 'KZN',
      },
      {
        name: 'Limpopo',
        shortCode: 'LP',
      },
      {
        name: 'Mpumalanga',
        shortCode: 'MP',
      },
      {
        name: 'Northern Cape',
        shortCode: 'NC',
      },
      {
        name: 'North West',
        shortCode: 'NW',
      },
      {
        name: 'Western Cape',
        shortCode: 'WC',
      },
    ],
  },
  {
    countryName: 'South Georgia and South Sandwich Islands',
    countryShortCode: 'GS',
    regions: [
      {
        name: 'Bird Island',
      },
      {
        name: 'Bristol Island',
      },
      {
        name: 'Clerke Rocks',
      },
      {
        name: 'Montagu Island',
      },
      {
        name: 'Saunders Island',
      },
      {
        name: 'South Georgia',
      },
      {
        name: 'Southern Thule',
      },
      {
        name: 'Traversay Islands',
      },
    ],
  },
  {
    countryName: 'South Sudan',
    countryShortCode: 'SS',
    regions: [
      {
        name: 'Central Equatoria',
        shortCode: 'CE',
      },
      {
        name: 'Eastern Equatoria',
        shortCode: 'EE',
      },
      {
        name: 'Jonglei',
        shortCode: 'JG',
      },
      {
        name: 'Lakes',
        shortCode: 'LK',
      },
      {
        name: 'Northern Bahr el Ghazal',
        shortCode: 'BN',
      },
      {
        name: 'Unity',
        shortCode: 'UY',
      },
      {
        name: 'Upper Nile',
        shortCode: 'NU',
      },
      {
        name: 'Warrap',
        shortCode: 'WR',
      },
      {
        name: 'Western Bahr el Ghazal',
        shortCode: 'BW',
      },
      {
        name: 'Western Equatoria',
        shortCode: 'EW',
      },
    ],
  },
  {
    countryName: 'Spain',
    countryShortCode: 'ES',
    regions: [
      {
        name: 'Albacete',
        shortCode: 'Albacete',
      },
      {
        name: 'Alicante',
        shortCode: 'Alicante',
      },
      {
        name: 'Almería',
        shortCode: 'Almería',
      },
      {
        name: 'Araba/Álava',
        shortCode: 'Álava',
      },
      {
        name: 'Asturias',
        shortCode: 'Asturias',
      },
      {
        name: 'Ávila',
        shortCode: 'Avila',
      },
      {
        name: 'Badajoz',
        shortCode: 'Badajoz',
      },
      {
        name: 'Barcelona',
        shortCode: 'Barcelona',
      },
      {
        name: 'Bizkaia',
        shortCode: 'Vizcaya',
      },
      {
        name: 'Burgos',
        shortCode: 'Burgos',
      },
      {
        name: 'Cáceres',
        shortCode: 'Cáceres',
      },
      {
        name: 'Cádiz',
        shortCode: 'Cádiz',
      },
      {
        name: 'Cantabria',
        shortCode: 'Cantabria',
      },
      {
        name: 'Castellón/Castelló',
        shortCode: 'Castellón',
      },
      {
        name: 'Ceuta',
        shortCode: 'Ceuta',
      },
      {
        name: 'Ciudad Real',
        shortCode: 'Ciudad Real',
      },
      {
        name: 'Córdoba',
        shortCode: 'Córdoba',
      },
      {
        name: 'LA Coruña',
        shortCode: 'La Coruña',
      },
      {
        name: 'Cuenca',
        shortCode: 'Cuenca',
      },
      {
        name: 'Gipuzkoa',
        shortCode: 'Guipúzcoa',
      },
      {
        name: 'Girona',
        shortCode: 'Gerona',
      },
      {
        name: 'Granada',
        shortCode: 'Granada',
      },
      {
        name: 'Guadalajara',
        shortCode: 'Guadalajara',
      },
      {
        name: 'Huelva',
        shortCode: 'Huelva',
      },
      {
        name: 'Huesca',
        shortCode: 'Huesca',
      },
      {
        name: 'Illes Balears',
        shortCode: 'Islas Baleares',
      },
      {
        name: 'Jaén',
        shortCode: 'Jaen',
      },
      {
        name: 'León',
        shortCode: 'León',
      },
      {
        name: 'Lleida',
        shortCode: 'Lérida',
      },
      {
        name: 'Lugo',
        shortCode: 'Lugo',
      },
      {
        name: 'Madrid',
        shortCode: 'Madrid',
      },
      {
        name: 'Málaga',
        shortCode: 'Málaga',
      },
      {
        name: 'Melilla',
        shortCode: 'Melilla',
      },
      {
        name: 'Murcia',
        shortCode: 'Murcia',
      },
      {
        name: 'Navarra/Nafarroa',
        shortCode: 'Navarra',
      },
      {
        name: 'Ourense',
        shortCode: 'Orense',
      },
      {
        name: 'Palencia',
        shortCode: 'Palencia',
      },
      {
        name: 'Las Palmas',
        shortCode: 'Las Palmas',
      },
      {
        name: 'Pontevedra',
        shortCode: 'Pontevedra',
      },
      {
        name: 'La Rioja',
        shortCode: 'La Rioja',
      },
      {
        name: 'Salamanca',
        shortCode: 'Salamanca',
      },
      {
        name: 'Santa Cruz de Tenerife',
        shortCode: 'S.C.Tenerife',
      },
      {
        name: 'Segovia',
        shortCode: 'Segovia',
      },
      {
        name: 'Sevilla',
        shortCode: 'Sevilla',
      },
      {
        name: 'Soria',
        shortCode: 'Soria',
      },
      {
        name: 'Tarragona',
        shortCode: 'Tarragona',
      },
      {
        name: 'Teruel',
        shortCode: 'Teruel',
      },
      {
        name: 'Toledo',
        shortCode: 'Toledo',
      },
      {
        name: 'Valencia/València',
        shortCode: 'Valencia',
      },
      {
        name: 'Valladolid',
        shortCode: 'Valladolid',
      },
      {
        name: 'Zamora',
        shortCode: 'Zamora',
      },
      {
        name: 'Zaragoza',
        shortCode: 'Zaragoza',
      },
    ],
  },
  {
    countryName: 'Sri Lanka',
    countryShortCode: 'LK',
    regions: [
      {
        name: 'Basnahira',
        shortCode: '1',
      },
      {
        name: 'Dakunu',
        shortCode: '3',
      },
      {
        name: 'Madhyama',
        shortCode: '2',
      },
      {
        name: 'Naegenahira',
        shortCode: '5',
      },
      {
        name: 'Sabaragamuwa',
        shortCode: '9',
      },
      {
        name: 'Uturu',
        shortCode: '4',
      },
      {
        name: 'Uturumaeda',
        shortCode: '7',
      },
      {
        name: 'Vayamba',
        shortCode: '6',
      },
      {
        name: 'Uva',
        shortCode: '8',
      },
    ],
  },
  {
    countryName: 'Sudan',
    countryShortCode: 'SD',
    regions: [
      {
        name: 'Al Bahr al Ahmar',
        shortCode: 'RS',
      },
      {
        name: 'Al Jazirah',
        shortCode: 'GZ',
      },
      {
        name: 'Al Khartum',
        shortCode: 'KH',
      },
      {
        name: 'Al Qadarif',
        shortCode: 'GD',
      },
      {
        name: 'An Nil al Abyad',
        shortCode: 'NW',
      },
      {
        name: 'An Nil al Azraq',
        shortCode: 'NB',
      },
      {
        name: 'Ash Shamaliyah',
        shortCode: 'NO',
      },
      {
        name: 'Gharb Darfur',
        shortCode: 'DW',
      },
      {
        name: 'Gharb Kurdufan',
        shortCode: 'GK',
      },
      {
        name: 'Janub Darfur',
        shortCode: 'DS',
      },
      {
        name: 'Janub Kurdufan',
        shortCode: 'KS',
      },
      {
        name: 'Kassala',
        shortCode: 'KA',
      },
      {
        name: 'Nahr an Nil',
        shortCode: 'NR',
      },
      {
        name: 'Shamal Darfur',
        shortCode: 'DN',
      },
      {
        name: 'Sharq Darfur',
        shortCode: 'DE',
      },
      {
        name: 'Shiamal Kurdufan',
        shortCode: 'KN',
      },
      {
        name: 'Sinnar',
        shortCode: 'SI',
      },
      {
        name: 'Wasat Darfur Zalinjay',
        shortCode: 'DC',
      },
    ],
  },
  {
    countryName: 'Suriname',
    countryShortCode: 'SR',
    regions: [
      {
        name: 'Brokopondo',
        shortCode: 'BR',
      },
      {
        name: 'Commewijne',
        shortCode: 'CM',
      },
      {
        name: 'Coronie',
        shortCode: 'CR',
      },
      {
        name: 'Marowijne',
        shortCode: 'MA',
      },
      {
        name: 'Nickerie',
        shortCode: 'NI',
      },
      {
        name: 'Para',
        shortCode: 'PR',
      },
      {
        name: 'Paramaribo',
        shortCode: 'PM',
      },
      {
        name: 'Saramacca',
        shortCode: 'SA',
      },
      {
        name: 'Sipaliwini',
        shortCode: 'SI',
      },
      {
        name: 'Wanica',
        shortCode: 'WA',
      },
    ],
  },
  {
    countryName: 'Swaziland',
    countryShortCode: 'SZ',
    regions: [
      {
        name: 'Hhohho',
        shortCode: 'HH',
      },
      {
        name: 'Lubombo',
        shortCode: 'LU',
      },
      {
        name: 'Manzini',
        shortCode: 'MA',
      },
      {
        name: 'Shiselweni',
        shortCode: 'SH',
      },
    ],
  },
  {
    countryName: 'Sweden',
    countryShortCode: 'SE',
    regions: [
      {
        name: 'Blekinge',
        shortCode: 'K',
      },
      {
        name: 'Dalarna',
        shortCode: 'W',
      },
      {
        name: 'Gävleborg',
        shortCode: 'X',
      },
      {
        name: 'Gotland',
        shortCode: 'I',
      },
      {
        name: 'Halland',
        shortCode: 'N',
      },
      {
        name: 'Jämtland',
        shortCode: 'Z',
      },
      {
        name: 'Jönköping',
        shortCode: 'F',
      },
      {
        name: 'Kalmar',
        shortCode: 'H',
      },
      {
        name: 'Kronoberg',
        shortCode: 'G',
      },
      {
        name: 'Norrbotten',
        shortCode: 'BD',
      },
      {
        name: 'Örebro',
        shortCode: 'T',
      },
      {
        name: 'Östergötland',
        shortCode: 'E',
      },
      {
        name: 'Skåne',
        shortCode: 'M',
      },
      {
        name: 'Södermanland',
        shortCode: 'D',
      },
      {
        name: 'Stockholm',
        shortCode: 'AB',
      },
      {
        name: 'Uppsala',
        shortCode: 'C',
      },
      {
        name: 'Värmland',
        shortCode: 'S',
      },
      {
        name: 'Västerbotten',
        shortCode: 'AC',
      },
      {
        name: 'Västernorrland',
        shortCode: 'Y',
      },
      {
        name: 'Västmanland',
        shortCode: 'U',
      },
      {
        name: 'Västra Götaland',
        shortCode: 'O',
      },
    ],
  },
  {
    countryName: 'Switzerland',
    countryShortCode: 'CH',
    regions: [
      {
        name: 'Aargau',
        shortCode: 'AG',
      },
      {
        name: 'Appenzell Ausserrhoden',
        shortCode: 'AR',
      },
      {
        name: 'Appenzell Innerhoden',
        shortCode: 'AI',
      },
      {
        name: 'Basel-Landschaft',
        shortCode: 'BL',
      },
      {
        name: 'Basel-Stadt',
        shortCode: 'BS',
      },
      {
        name: 'Bern',
        shortCode: 'BE',
      },
      {
        name: 'Fribourg',
        shortCode: 'FR',
      },
      {
        name: 'Genève',
        shortCode: 'GE',
      },
      {
        name: 'Glarus',
        shortCode: 'GL',
      },
      {
        name: 'Graubünden',
        shortCode: 'GR',
      },
      {
        name: 'Jura',
        shortCode: 'JU',
      },
      {
        name: 'Luzern',
        shortCode: 'LU',
      },
      {
        name: 'Neuchâtel',
        shortCode: 'NE',
      },
      {
        name: 'Nidwalden',
        shortCode: 'NW',
      },
      {
        name: 'Obwalden',
        shortCode: 'OW',
      },
      {
        name: 'Sankt Gallen',
        shortCode: 'SG',
      },
      {
        name: 'Schaffhausen',
        shortCode: 'SH',
      },
      {
        name: 'Schwyz',
        shortCode: 'SZ',
      },
      {
        name: 'Solothurn',
        shortCode: 'SO',
      },
      {
        name: 'Thurgau',
        shortCode: 'TG',
      },
      {
        name: 'Ticino',
        shortCode: 'TI',
      },
      {
        name: 'Uri',
        shortCode: 'UR',
      },
      {
        name: 'Valais',
        shortCode: 'VS',
      },
      {
        name: 'Vaud',
        shortCode: 'VD',
      },
      {
        name: 'Zug',
        shortCode: 'ZG',
      },
      {
        name: 'Zürich',
        shortCode: 'ZH',
      },
    ],
  },
  {
    countryName: 'Syrian Arab Republic',
    countryShortCode: 'SY',
    regions: [
      {
        name: 'Al Hasakah',
        shortCode: 'HA',
      },
      {
        name: 'Al Ladhiqiyah',
        shortCode: 'LA',
      },
      {
        name: 'Al Qunaytirah',
        shortCode: 'QU',
      },
      {
        name: 'Ar Raqqah',
        shortCode: 'RA',
      },
      {
        name: "As Suwayda'",
        shortCode: 'SU',
      },
      {
        name: "Dar'a",
        shortCode: 'DR',
      },
      {
        name: 'Dayr az Zawr',
        shortCode: 'DY',
      },
      {
        name: 'Dimashq',
        shortCode: 'DI',
      },
      {
        name: 'Halab',
        shortCode: 'HL',
      },
      {
        name: 'Hamah',
        shortCode: 'HM',
      },
      {
        name: 'Hims',
        shortCode: 'HI',
      },
      {
        name: 'Idlib',
        shortCode: 'ID',
      },
      {
        name: 'Rif Dimashq',
        shortCode: 'RD',
      },
      {
        name: 'Tartus',
        shortCode: 'TA',
      },
    ],
  },
  {
    countryName: 'Taiwan',
    countryShortCode: 'TW',
    regions: [
      {
        name: 'Chang-hua',
        shortCode: 'CHA',
      },
      {
        name: 'Chia-i',
        shortCode: 'CYQ',
      },
      {
        name: 'Hsin-chu',
        shortCode: 'HSQ',
      },
      {
        name: 'Hua-lien',
        shortCode: 'HUA',
      },
      {
        name: 'Kao-hsiung',
        shortCode: 'KHH',
      },
      {
        name: 'Keelung',
        shortCode: 'KEE',
      },
      {
        name: 'Kinmen',
        shortCode: 'KIN',
      },
      {
        name: 'Lienchiang',
        shortCode: 'LIE',
      },
      {
        name: 'Miao-li',
        shortCode: 'MIA',
      },
      {
        name: "Nan-t'ou",
        shortCode: 'NAN',
      },
      {
        name: "P'eng-hu",
        shortCode: 'PEN',
      },
      {
        name: 'New Taipei',
        shortCode: 'NWT',
      },
      {
        name: "P'ing-tung",
        shortCode: 'PING',
      },
      {
        name: "T'ai-chung",
        shortCode: 'TXG',
      },
      {
        name: "T'ai-nan",
        shortCode: 'TNN',
      },
      {
        name: "T'ai-pei",
        shortCode: 'TPE',
      },
      {
        name: "T'ai-tung",
        shortCode: 'TTT',
      },
      {
        name: "T'ao-yuan",
        shortCode: 'TAO',
      },
      {
        name: 'Yi-lan',
        shortCode: 'ILA',
      },
      {
        name: 'Yun-lin',
        shortCode: 'YUN',
      },
    ],
  },
  {
    countryName: 'Tajikistan',
    countryShortCode: 'TJ',
    regions: [
      {
        name: 'Dushanbe',
        shortCode: 'DU',
      },
      {
        name: 'Kŭhistoni Badakhshon',
        shortCode: 'GB',
      },
      {
        name: 'Khatlon',
        shortCode: 'KT',
      },
      {
        name: 'Sughd',
        shortCode: 'SU',
      },
    ],
  },
  {
    countryName: 'Tanzania, United Republic of',
    countryShortCode: 'TZ',
    regions: [
      {
        name: 'Arusha',
        shortCode: '01',
      },
      {
        name: 'Coast',
        shortCode: '19',
      },
      {
        name: 'Dar es Salaam',
        shortCode: '02',
      },
      {
        name: 'Dodoma',
        shortCode: '03',
      },
      {
        name: 'Iringa',
        shortCode: '04',
      },
      {
        name: 'Kagera',
        shortCode: '05',
      },
      {
        name: 'Kigoma',
        shortCode: '08',
      },
      {
        name: 'Kilimanjaro',
        shortCode: '09',
      },
      {
        name: 'Lindi',
        shortCode: '12',
      },
      {
        name: 'Manyara',
        shortCode: '26',
      },
      {
        name: 'Mara',
        shortCode: '13',
      },
      {
        name: 'Mbeya',
        shortCode: '14',
      },
      {
        name: 'Morogoro',
        shortCode: '16',
      },
      {
        name: 'Mtwara',
        shortCode: '17',
      },
      {
        name: 'Mwanza',
        shortCode: '18',
      },
      {
        name: 'Pemba North',
        shortCode: '06',
      },
      {
        name: 'Pemba South',
        shortCode: '10',
      },
      {
        name: 'Rukwa',
        shortCode: '20',
      },
      {
        name: 'Ruvuma',
        shortCode: '21',
      },
      {
        name: 'Shinyanga',
        shortCode: '22',
      },
      {
        name: 'Singida',
        shortCode: '23',
      },
      {
        name: 'Tabora',
        shortCode: '24',
      },
      {
        name: 'Tanga',
        shortCode: '25',
      },
      {
        name: 'Zanzibar North',
        shortCode: '07',
      },
      {
        name: 'Zanzibar Central/South',
        shortCode: '11',
      },
      {
        name: 'Zanzibar Urban/West',
        shortCode: '15',
      },
    ],
  },
  {
    countryName: 'Thailand',
    countryShortCode: 'TH',
    regions: [
      {
        name: 'Amnat Charoen',
        shortCode: '37',
      },
      {
        name: 'Ang Thong',
        shortCode: '15',
      },
      {
        name: 'Bueng Kan',
        shortCode: '38',
      },
      {
        name: 'Buri Ram',
        shortCode: '31',
      },
      {
        name: 'Chachoengsao',
        shortCode: '24',
      },
      {
        name: 'Chai Nat',
        shortCode: '18',
      },
      {
        name: 'Chaiyaphum',
        shortCode: '36',
      },
      {
        name: 'Chanthaburi',
        shortCode: '22',
      },
      {
        name: 'Chiang Mai',
        shortCode: '50',
      },
      {
        name: 'Chiang Rai',
        shortCode: '57',
      },
      {
        name: 'Chon Buri',
        shortCode: '20',
      },
      {
        name: 'Chumphon',
        shortCode: '86',
      },
      {
        name: 'Kalasin',
        shortCode: '46',
      },
      {
        name: 'Kamphaeng Phet',
        shortCode: '62',
      },
      {
        name: 'Kanchanaburi',
        shortCode: '71',
      },
      {
        name: 'Khon Kaen',
        shortCode: '40',
      },
      {
        name: 'Krabi',
        shortCode: '81',
      },
      {
        name: 'Krung Thep Mahanakhon (Bangkok)',
        shortCode: '10',
      },
      {
        name: 'Lampang',
        shortCode: '52',
      },
      {
        name: 'Lamphun',
        shortCode: '51',
      },
      {
        name: 'Loei',
        shortCode: '42',
      },
      {
        name: 'Lop Buri',
        shortCode: '16',
      },
      {
        name: 'Mae Hong Son',
        shortCode: '58',
      },
      {
        name: 'Maha Sarakham',
        shortCode: '44',
      },
      {
        name: 'Mukdahan',
        shortCode: '49',
      },
      {
        name: 'Nakhon Nayok',
        shortCode: '26',
      },
      {
        name: 'Nakhon Phathom',
        shortCode: '73',
      },
      {
        name: 'Nakhon Phanom',
        shortCode: '48',
      },
      {
        name: 'Nakhon Ratchasima',
        shortCode: '30',
      },
      {
        name: 'Nakhon Sawan',
        shortCode: '60',
      },
      {
        name: 'Nakhon Si Thammarat',
        shortCode: '80',
      },
      {
        name: 'Nan',
        shortCode: '55',
      },
      {
        name: 'Narathiwat',
        shortCode: '96',
      },
      {
        name: 'Nong Bua Lam Phu',
        shortCode: '39',
      },
      {
        name: 'Nong Khai',
        shortCode: '43',
      },
      {
        name: 'Nonthaburi',
        shortCode: '12',
      },
      {
        name: 'Pathum Thani',
        shortCode: '13',
      },
      {
        name: 'Pattani',
        shortCode: '94',
      },
      {
        name: 'Phangnga',
        shortCode: '82',
      },
      {
        name: 'Phatthalung',
        shortCode: '93',
      },
      {
        name: 'Phayao',
        shortCode: '56',
      },
      {
        name: 'Phetchabun',
        shortCode: '76',
      },
      {
        name: 'Phetchaburi',
        shortCode: '76',
      },
      {
        name: 'Phichit',
        shortCode: '66',
      },
      {
        name: 'Phitsanulok',
        shortCode: '65',
      },
      {
        name: 'Phra Nakhon Si Ayutthaya',
        shortCode: '14',
      },
      {
        name: 'Phrae',
        shortCode: '54',
      },
      {
        name: 'Phuket',
        shortCode: '83',
      },
      {
        name: 'Prachin Buri',
        shortCode: '25',
      },
      {
        name: 'Prachuap Khiri Khan',
        shortCode: '77',
      },
      {
        name: 'Ranong',
        shortCode: '85',
      },
      {
        name: 'Ratchaburi',
        shortCode: '70',
      },
      {
        name: 'Rayong',
        shortCode: '21',
      },
      {
        name: 'Roi Et',
        shortCode: '45',
      },
      {
        name: 'Sa Kaeo',
        shortCode: '27',
      },
      {
        name: 'Sakon Nakhon',
        shortCode: '47',
      },
      {
        name: 'Samut Prakan',
        shortCode: '11',
      },
      {
        name: 'Samut Sakhon',
        shortCode: '74',
      },
      {
        name: 'Samut Songkhram',
        shortCode: '75',
      },
      {
        name: 'Saraburi',
        shortCode: '19',
      },
      {
        name: 'Satun',
        shortCode: '91',
      },
      {
        name: 'Sing Buri',
        shortCode: '17',
      },
      {
        name: 'Si Sa ket',
        shortCode: '33',
      },
      {
        name: 'Songkhla',
        shortCode: '90',
      },
      {
        name: 'Sukhothai',
        shortCode: '64',
      },
      {
        name: 'Suphan Buri',
        shortCode: '72',
      },
      {
        name: 'Surat Thani',
        shortCode: '84',
      },
      {
        name: 'Surin',
        shortCode: '32',
      },
      {
        name: 'Tak',
        shortCode: '63',
      },
      {
        name: 'Trang',
        shortCode: '92',
      },
      {
        name: 'Trat',
        shortCode: '23',
      },
      {
        name: 'Ubon Ratchathani',
        shortCode: '34',
      },
      {
        name: 'Udon Thani',
        shortCode: '41',
      },
      {
        name: 'Uthai Thani',
        shortCode: '61',
      },
      {
        name: 'Uttaradit',
        shortCode: '53',
      },
      {
        name: 'Yala',
        shortCode: '95',
      },
      {
        name: 'Yasothon',
        shortCode: '35',
      },
    ],
  },
  {
    countryName: 'Timor-Leste',
    countryShortCode: 'TL',
    regions: [
      {
        name: 'Aileu',
        shortCode: 'AL',
      },
      {
        name: 'Ainaro',
        shortCode: 'AN',
      },
      {
        name: 'Baucau',
        shortCode: 'BA',
      },
      {
        name: 'Bobonaro',
        shortCode: 'BO',
      },
      {
        name: 'Cova Lima',
        shortCode: 'CO',
      },
      {
        name: 'Dili',
        shortCode: 'DI',
      },
      {
        name: 'Ermera',
        shortCode: 'ER',
      },
      {
        name: 'Lautem',
        shortCode: 'LA',
      },
      {
        name: 'Liquica',
        shortCode: 'LI',
      },
      {
        name: 'Manatuto',
        shortCode: 'MT',
      },
      {
        name: 'Manufahi',
        shortCode: 'MF',
      },
      {
        name: 'Oecussi',
        shortCode: 'OE',
      },
      {
        name: 'Viqueque',
        shortCode: 'VI',
      },
    ],
  },
  {
    countryName: 'Togo',
    countryShortCode: 'TG',
    regions: [
      {
        name: 'Centre',
        shortCode: 'C',
      },
      {
        name: 'Kara',
        shortCode: 'K',
      },
      {
        name: 'Maritime',
        shortCode: 'M',
      },
      {
        name: 'Plateaux',
        shortCode: 'P',
      },
      {
        name: 'Savannes',
        shortCode: 'S',
      },
    ],
  },
  {
    countryName: 'Tokelau',
    countryShortCode: 'TK',
    regions: [
      {
        name: 'Atafu',
      },
      {
        name: 'Fakaofo',
      },
      {
        name: 'Nukunonu',
      },
    ],
  },
  {
    countryName: 'Tonga',
    countryShortCode: 'TO',
    regions: [
      {
        name: "'Eua",
        shortCode: '01',
      },
      {
        name: "Ha'apai",
        shortCode: '02',
      },
      {
        name: 'Niuas',
        shortCode: '03',
      },
      {
        name: 'Tongatapu',
        shortCode: '04',
      },
      {
        name: "Vava'u",
        shortCode: '05',
      },
    ],
  },
  {
    countryName: 'Trinidad and Tobago',
    countryShortCode: 'TT',
    regions: [
      {
        name: 'Arima',
        shortCode: 'ARI',
      },
      {
        name: 'Chaguanas',
        shortCode: 'CHA',
      },
      {
        name: 'Couva-Tabaquite-Talparo',
        shortCode: 'CTT',
      },
      {
        name: 'Diefo Martin',
        shortCode: 'DMN',
      },
      {
        name: 'Mayaro-Rio Claro',
        shortCode: 'MRC',
      },
      {
        name: 'Penal-Debe',
        shortCode: 'PED',
      },
      {
        name: 'Point Fortin',
        shortCode: 'PTF',
      },
      {
        name: 'Port-of-Spain',
        shortCode: 'POS',
      },
      {
        name: 'Princes Town',
        shortCode: 'PRT',
      },
      {
        name: 'San Fernando',
        shortCode: 'SFO',
      },
      {
        name: 'San Juan-Laventille',
        shortCode: 'SJL',
      },
      {
        name: 'Sangre Grande',
        shortCode: 'SGE',
      },
      {
        name: 'Siparia',
        shortCode: 'SIP',
      },
      {
        name: 'Tobago',
        shortCode: 'TOB',
      },
      {
        name: 'Tunapuna-Piarco',
        shortCode: 'TUP',
      },
    ],
  },
  {
    countryName: 'Tunisia',
    countryShortCode: 'TN',
    regions: [
      {
        name: 'Ariana',
        shortCode: '12',
      },
      {
        name: 'Beja',
        shortCode: '31',
      },
      {
        name: 'Ben Arous',
        shortCode: '13',
      },
      {
        name: 'Bizerte',
        shortCode: '23',
      },
      {
        name: 'Gabes',
        shortCode: '81',
      },
      {
        name: 'Gafsa',
        shortCode: '71',
      },
      {
        name: 'Jendouba',
        shortCode: '32',
      },
      {
        name: 'Kairouan',
        shortCode: '41',
      },
      {
        name: 'Kasserine',
        shortCode: '42',
      },
      {
        name: 'Kebili',
        shortCode: '73',
      },
      {
        name: 'Kef',
        shortCode: '33',
      },
      {
        name: 'Mahdia',
        shortCode: '53',
      },
      {
        name: 'Medenine',
        shortCode: '82',
      },
      {
        name: 'Monastir',
        shortCode: '52',
      },
      {
        name: 'Nabeul',
        shortCode: '21',
      },
      {
        name: 'Sfax',
        shortCode: '61',
      },
      {
        name: 'Sidi Bouzid',
        shortCode: '43',
      },
      {
        name: 'Siliana',
        shortCode: '34',
      },
      {
        name: 'Sousse',
        shortCode: '51',
      },
      {
        name: 'Tataouine',
        shortCode: '83',
      },
      {
        name: 'Tozeur',
        shortCode: '72',
      },
      {
        name: 'Tunis',
        shortCode: '11',
      },
      {
        name: 'Zaghouan',
        shortCode: '22',
      },
    ],
  },
  {
    countryName: 'Turkey',
    countryShortCode: 'TR',
    regions: [
      {
        name: 'Adana',
        shortCode: '01',
      },
      {
        name: 'Adiyaman',
        shortCode: '02',
      },
      {
        name: 'Afyonkarahisar',
        shortCode: '03',
      },
      {
        name: 'Agri',
        shortCode: '04',
      },
      {
        name: 'Aksaray',
        shortCode: '68',
      },
      {
        name: 'Amasya',
        shortCode: '05',
      },
      {
        name: 'Ankara',
        shortCode: '06',
      },
      {
        name: 'Antalya',
        shortCode: '07',
      },
      {
        name: 'Ardahan',
        shortCode: '75',
      },
      {
        name: 'Artvin',
        shortCode: '08',
      },
      {
        name: 'Aydin',
        shortCode: '09',
      },
      {
        name: 'Balikesir',
        shortCode: '10',
      },
      {
        name: 'Bartin',
        shortCode: '74',
      },
      {
        name: 'Batman',
        shortCode: '72',
      },
      {
        name: 'Bayburt',
        shortCode: '69',
      },
      {
        name: 'Bilecik',
        shortCode: '11',
      },
      {
        name: 'Bingol',
        shortCode: '12',
      },
      {
        name: 'Bitlis',
        shortCode: '13',
      },
      {
        name: 'Bolu',
        shortCode: '14',
      },
      {
        name: 'Burdur',
        shortCode: '15',
      },
      {
        name: 'Bursa',
        shortCode: '16',
      },
      {
        name: 'Canakkale',
        shortCode: '17',
      },
      {
        name: 'Cankiri',
        shortCode: '18',
      },
      {
        name: 'Corum',
        shortCode: '19',
      },
      {
        name: 'Denizli',
        shortCode: '20',
      },
      {
        name: 'Diyarbakir',
        shortCode: '21',
      },
      {
        name: 'Duzce',
        shortCode: '81',
      },
      {
        name: 'Edirne',
        shortCode: '22',
      },
      {
        name: 'Elazig',
        shortCode: '23',
      },
      {
        name: 'Erzincan',
        shortCode: '24',
      },
      {
        name: 'Erzurum',
        shortCode: '25',
      },
      {
        name: 'Eskisehir',
        shortCode: '26',
      },
      {
        name: 'Gaziantep',
        shortCode: '27',
      },
      {
        name: 'Giresun',
        shortCode: '28',
      },
      {
        name: 'Gumushane',
        shortCode: '29',
      },
      {
        name: 'Hakkari',
        shortCode: '30',
      },
      {
        name: 'Hatay',
        shortCode: '31',
      },
      {
        name: 'Igdir',
        shortCode: '76',
      },
      {
        name: 'Isparta',
        shortCode: '32',
      },
      {
        name: 'Istanbul',
        shortCode: '34',
      },
      {
        name: 'Izmir',
        shortCode: '35',
      },
      {
        name: 'Kahramanmaras',
        shortCode: '46',
      },
      {
        name: 'Karabuk',
        shortCode: '78',
      },
      {
        name: 'Karaman',
        shortCode: '70',
      },
      {
        name: 'Kars',
        shortCode: '36',
      },
      {
        name: 'Kastamonu',
        shortCode: '37',
      },
      {
        name: 'Kayseri',
        shortCode: '38',
      },
      {
        name: 'Kilis',
        shortCode: '79',
      },
      {
        name: 'Kirikkale',
        shortCode: '71',
      },
      {
        name: 'Kirklareli',
        shortCode: '39',
      },
      {
        name: 'Kirsehir',
        shortCode: '40',
      },
      {
        name: 'Kocaeli',
        shortCode: '41',
      },
      {
        name: 'Konya',
        shortCode: '42',
      },
      {
        name: 'Kutahya',
        shortCode: '43',
      },
      {
        name: 'Malatya',
        shortCode: '44',
      },
      {
        name: 'Manisa',
        shortCode: '45',
      },
      {
        name: 'Mardin',
        shortCode: '47',
      },
      {
        name: 'Mersin',
        shortCode: '33',
      },
      {
        name: 'Mugla',
        shortCode: '48',
      },
      {
        name: 'Mus',
        shortCode: '49',
      },
      {
        name: 'Nevsehir',
        shortCode: '50',
      },
      {
        name: 'Nigde',
        shortCode: '51',
      },
      {
        name: 'Ordu',
        shortCode: '52',
      },
      {
        name: 'Osmaniye',
        shortCode: '80',
      },
      {
        name: 'Rize',
        shortCode: '53',
      },
      {
        name: 'Sakarya',
        shortCode: '54',
      },
      {
        name: 'Samsun',
        shortCode: '55',
      },
      {
        name: 'Sanliurfa',
        shortCode: '63',
      },
      {
        name: 'Siirt',
        shortCode: '56',
      },
      {
        name: 'Sinop',
        shortCode: '57',
      },
      {
        name: 'Sirnak',
        shortCode: '73',
      },
      {
        name: 'Sivas',
        shortCode: '58',
      },
      {
        name: 'Tekirdag',
        shortCode: '59',
      },
      {
        name: 'Tokat',
        shortCode: '60',
      },
      {
        name: 'Trabzon',
        shortCode: '61',
      },
      {
        name: 'Tunceli',
        shortCode: '62',
      },
      {
        name: 'Usak',
        shortCode: '64',
      },
      {
        name: 'Van',
        shortCode: '65',
      },
      {
        name: 'Yalova',
        shortCode: '77',
      },
      {
        name: 'Yozgat',
        shortCode: '66',
      },
      {
        name: 'Zonguldak',
        shortCode: '67',
      },
    ],
  },
  {
    countryName: 'Turkmenistan',
    countryShortCode: 'TM',
    regions: [
      {
        name: 'Ahal',
        shortCode: 'A',
      },
      {
        name: 'Asgabat',
        shortCode: 'S',
      },
      {
        name: 'Balkan',
        shortCode: 'B',
      },
      {
        name: 'Dashoguz',
        shortCode: 'D',
      },
      {
        name: 'Lebap',
        shortCode: 'L',
      },
      {
        name: 'Mary',
        shortCode: 'M',
      },
    ],
  },
  {
    countryName: 'Turks and Caicos Islands',
    countryShortCode: 'TC',
    regions: [
      {
        name: 'Turks and Caicos Islands',
      },
    ],
  },
  {
    countryName: 'Tuvalu',
    countryShortCode: 'TV',
    regions: [
      {
        name: 'Funafuti',
        shortCode: 'FUN',
      },
      {
        name: 'Nanumanga',
        shortCode: 'NMG',
      },
      {
        name: 'Nanumea',
        shortCode: 'NMA',
      },
      {
        name: 'Niutao',
        shortCode: 'NIT',
      },
      {
        name: 'Nui',
        shortCode: 'NUI',
      },
      {
        name: 'Nukufetau',
        shortCode: 'NKF',
      },
      {
        name: 'Nukulaelae',
        shortCode: 'NKL',
      },
      {
        name: 'Vaitupu',
        shortCode: 'VAU',
      },
    ],
  },
  {
    countryName: 'Uganda',
    countryShortCode: 'UG',
    regions: [
      {
        name: 'Abim',
        shortCode: '317',
      },
      {
        name: 'Adjumani',
        shortCode: '301',
      },
      {
        name: 'Amolatar',
        shortCode: '314',
      },
      {
        name: 'Amuria',
        shortCode: '216',
      },
      {
        name: 'Amuru',
        shortCode: '319',
      },
      {
        name: 'Apac',
        shortCode: '302',
      },
      {
        name: 'Arua',
        shortCode: '303',
      },
      {
        name: 'Budaka',
        shortCode: '217',
      },
      {
        name: 'Bududa',
        shortCode: '223',
      },
      {
        name: 'Bugiri',
        shortCode: '201',
      },
      {
        name: 'Bukedea',
        shortCode: '224',
      },
      {
        name: 'Bukwa',
        shortCode: '218',
      },
      {
        name: 'Buliisa',
        shortCode: '419',
      },
      {
        name: 'Bundibugyo',
        shortCode: '401',
      },
      {
        name: 'Bushenyi',
        shortCode: '402',
      },
      {
        name: 'Busia',
        shortCode: '202',
      },
      {
        name: 'Butaleja',
        shortCode: '219',
      },
      {
        name: 'Dokolo',
        shortCode: '318',
      },
      {
        name: 'Gulu',
        shortCode: '304',
      },
      {
        name: 'Hoima',
        shortCode: '403',
      },
      {
        name: 'Ibanda',
        shortCode: '416',
      },
      {
        name: 'Iganga',
        shortCode: '203',
      },
      {
        name: 'Isingiro',
        shortCode: '417',
      },
      {
        name: 'Jinja',
        shortCode: '204',
      },
      {
        name: 'Kaabong',
        shortCode: '315',
      },
      {
        name: 'Kabale',
        shortCode: '404',
      },
      {
        name: 'Kabarole',
        shortCode: '405',
      },
      {
        name: 'Kaberamaido',
        shortCode: '213',
      },
      {
        name: 'Kalangala',
        shortCode: '101',
      },
      {
        name: 'Kaliro',
        shortCode: '220',
      },
      {
        name: 'Kampala',
        shortCode: '102',
      },
      {
        name: 'Kamuli',
        shortCode: '205',
      },
      {
        name: 'Kamwenge',
        shortCode: '413',
      },
      {
        name: 'Kanungu',
        shortCode: '414',
      },
      {
        name: 'Kapchorwa',
        shortCode: '206',
      },
      {
        name: 'Kasese',
        shortCode: '406',
      },
      {
        name: 'Katakwi',
        shortCode: '207',
      },
      {
        name: 'Kayunga',
        shortCode: '112',
      },
      {
        name: 'Kibaale',
        shortCode: '407',
      },
      {
        name: 'Kiboga',
        shortCode: '103',
      },
      {
        name: 'Kiruhura',
        shortCode: '418',
      },
      {
        name: 'Kisoro',
        shortCode: '408',
      },
      {
        name: 'Kitgum',
        shortCode: '305',
      },
      {
        name: 'Koboko',
        shortCode: '316',
      },
      {
        name: 'Kotido',
        shortCode: '306',
      },
      {
        name: 'Kumi',
        shortCode: '208',
      },
      {
        name: 'Kyenjojo',
        shortCode: '415',
      },
      {
        name: 'Lira',
        shortCode: '307',
      },
      {
        name: 'Luwero',
        shortCode: '104',
      },
      {
        name: 'Lyantonde',
        shortCode: '116',
      },
      {
        name: 'Manafwa',
        shortCode: '221',
      },
      {
        name: 'Maracha',
        shortCode: '320',
      },
      {
        name: 'Masaka',
        shortCode: '105',
      },
      {
        name: 'Masindi',
        shortCode: '409',
      },
      {
        name: 'Mayuge',
        shortCode: '214',
      },
      {
        name: 'Mbale',
        shortCode: '209',
      },
      {
        name: 'Mbarara',
        shortCode: '410',
      },
      {
        name: 'Mityana',
        shortCode: '114',
      },
      {
        name: 'Moroto',
        shortCode: '308',
      },
      {
        name: 'Moyo',
        shortCode: '309',
      },
      {
        name: 'Mpigi',
        shortCode: '106',
      },
      {
        name: 'Mubende',
        shortCode: '107',
      },
      {
        name: 'Mukono',
        shortCode: '108',
      },
      {
        name: 'Nakapiripirit',
        shortCode: '311',
      },
      {
        name: 'Nakaseke',
        shortCode: '115',
      },
      {
        name: 'Nakasongola',
        shortCode: '109',
      },
      {
        name: 'Namutumba',
        shortCode: '222',
      },
      {
        name: 'Nebbi',
        shortCode: '310',
      },
      {
        name: 'Ntungamo',
        shortCode: '411',
      },
      {
        name: 'Oyam',
        shortCode: '321',
      },
      {
        name: 'Pader',
        shortCode: '312',
      },
      {
        name: 'Pallisa',
        shortCode: '210',
      },
      {
        name: 'Rakai',
        shortCode: '110',
      },
      {
        name: 'Rukungiri',
        shortCode: '412',
      },
      {
        name: 'Sembabule',
        shortCode: '111',
      },
      {
        name: 'Sironko',
        shortCode: '215',
      },
      {
        name: 'Soroti',
        shortCode: '211',
      },
      {
        name: 'Tororo',
        shortCode: '212',
      },
      {
        name: 'Wakiso',
        shortCode: '113',
      },
      {
        name: 'Yumbe',
        shortCode: '313',
      },
    ],
  },
  {
    countryName: 'Ukraine',
    countryShortCode: 'UA',
    regions: [
      {
        name: 'Cherkasy',
        shortCode: '71',
      },
      {
        name: 'Chernihiv',
        shortCode: '74',
      },
      {
        name: 'Chernivtsi',
        shortCode: '77',
      },
      {
        name: 'Dnipropetrovsk',
        shortCode: '12',
      },
      {
        name: 'Donetsk',
        shortCode: '14',
      },
      {
        name: 'Ivano-Frankivsk',
        shortCode: '26',
      },
      {
        name: 'Kharkiv',
        shortCode: '63',
      },
      {
        name: 'Kherson',
        shortCode: '65',
      },
      {
        name: 'Khmelnytskyi',
        shortCode: '68',
      },
      {
        name: 'Kiev',
        shortCode: '32',
      },
      {
        name: 'Kirovohrad',
        shortCode: '35',
      },
      {
        name: 'Luhansk',
        shortCode: '09',
      },
      {
        name: 'Lviv',
        shortCode: '46',
      },
      {
        name: 'Mykolaiv',
        shortCode: '48',
      },
      {
        name: 'Odessa',
        shortCode: '51',
      },
      {
        name: 'Poltava',
        shortCode: '53',
      },
      {
        name: 'Rivne',
        shortCode: '56',
      },
      {
        name: 'Sumy',
        shortCode: '59',
      },
      {
        name: 'Ternopil',
        shortCode: '61',
      },
      {
        name: 'Vinnytsia',
        shortCode: '05',
      },
      {
        name: 'Volyn',
        shortCode: '07',
      },
      {
        name: 'Zakarpattia',
        shortCode: '21',
      },
      {
        name: 'Zaporizhia',
        shortCode: '23',
      },
      {
        name: 'Zhytomyr',
        shortCode: '18',
      },
      {
        name: 'Avtonomna Respublika Krym',
        shortCode: '43',
      },
      {
        name: 'Kyïv',
        shortCode: '30',
      },
      {
        name: 'Sevastopol',
        shortCode: '40',
      },
    ],
  },
  {
    countryName: 'United Arab Emirates',
    countryShortCode: 'AE',
    regions: [
      {
        name: 'Abu Dhabi',
        shortCode: 'AZ',
      },
      {
        name: 'Ajman',
        shortCode: 'AJ',
      },
      {
        name: 'Dubai',
        shortCode: 'DU',
      },
      {
        name: 'Fujairah',
        shortCode: 'FU',
      },
      {
        name: 'Ras al Khaimah',
        shortCode: 'RK',
      },
      {
        name: 'Sharjah',
        shortCode: 'SH',
      },
      {
        name: 'Umm Al Quwain',
        shortCode: 'UQ',
      },
    ],
  },
  {
    countryName: 'United Kingdom',
    countryShortCode: 'GB',
    regions: [
      {
        name: 'Aberdeen City',
        shortCode: 'Aberdeen City',
      },
      {
        name: 'Aberdeenshire',
        shortCode: 'Aberdeenshire',
      },
      {
        name: 'Angus',
        shortCode: 'Angus',
      },
      {
        name: 'Antrim and Newtownabbey',
        shortCode: 'Antrim and Newtownabbey',
      },
      {
        name: 'Ards and North Down',
        shortCode: 'Ards and North Down',
      },
      {
        name: 'Argyll and Bute',
        shortCode: 'Argyll and Bute',
      },
      {
        name: 'Armagh, Banbridge and Craigavon',
        shortCode: 'Armagh, Banbridge and Craigavon',
      },
      {
        name: 'Barking and Dagenham',
        shortCode: 'Barking and Dagenham',
      },
      {
        name: 'Barnet',
        shortCode: 'Barnet',
      },
      {
        name: 'Barnsley',
        shortCode: 'Barnsley',
      },
      {
        name: 'Bath and North East Somerset',
        shortCode: 'Bath and North East Somerset',
      },
      {
        name: 'Bedford',
        shortCode: 'Bedford',
      },
      {
        name: 'Belfast',
        shortCode: 'Belfast',
      },
      {
        name: 'Bexley',
        shortCode: 'Bexley',
      },
      {
        name: 'Birmingham',
        shortCode: 'Birmingham',
      },
      {
        name: 'Blackburn with Darwen',
        shortCode: 'Blackburn with Darwen',
      },
      {
        name: 'Blackpool',
        shortCode: 'Blackpool',
      },
      {
        name: 'Blaenau Gwent',
        shortCode: 'Blaenau Gwent',
      },
      {
        name: 'Bolton',
        shortCode: 'Bolton',
      },
      {
        name: 'Bournemouth',
        shortCode: 'Bournemouth',
      },
      {
        name: 'Bracknell Forest',
        shortCode: 'Bracknell Forest',
      },
      {
        name: 'Bradford',
        shortCode: 'Bradford',
      },
      {
        name: 'Brent',
        shortCode: 'Brent',
      },
      {
        name: 'Bridgend',
        shortCode: 'Bridgend',
      },
      {
        name: 'Brighton and Hove',
        shortCode: 'Brighton and Hove',
      },
      {
        name: 'Bristol, City of',
        shortCode: 'Bristol, City of',
      },
      {
        name: 'Bromley',
        shortCode: 'Bromley',
      },
      {
        name: 'Buckinghamshire',
        shortCode: 'Buckinghamshire',
      },
      {
        name: 'Bury',
        shortCode: 'Bury',
      },
      {
        name: 'Caerphilly',
        shortCode: 'Caerphilly',
      },
      {
        name: 'Calderdale',
        shortCode: 'Calderdale',
      },
      {
        name: 'Cambridgeshire',
        shortCode: 'Cambridgeshire',
      },
      {
        name: 'Camden',
        shortCode: 'Camden',
      },
      {
        name: 'Cardiff',
        shortCode: 'Cardiff',
      },
      {
        name: 'Carmarthenshire',
        shortCode: 'Carmarthenshire',
      },
      {
        name: 'Causeway Coast and Glens',
        shortCode: 'Causeway Coast and Glens',
      },
      {
        name: 'Central Bedfordshire',
        shortCode: 'Central Bedfordshire',
      },
      {
        name: 'Ceredigion',
        shortCode: 'Ceredigion',
      },
      {
        name: 'Cheshire East',
        shortCode: 'Cheshire East',
      },
      {
        name: 'Cheshire West and Chester',
        shortCode: 'Cheshire West and Chester',
      },
      {
        name: 'Clackmannanshire',
        shortCode: 'Clackmannanshire',
      },
      {
        name: 'Conwy',
        shortCode: 'Conwy',
      },
      {
        name: 'Cornwall',
        shortCode: 'Cornwall',
      },
      {
        name: 'Coventry',
        shortCode: 'Coventry',
      },
      {
        name: 'Croydon',
        shortCode: 'Croydon',
      },
      {
        name: 'Cumbria',
        shortCode: 'Cumbria',
      },
      {
        name: 'Darlington',
        shortCode: 'Darlington',
      },
      {
        name: 'Denbighshire',
        shortCode: 'Denbighshire',
      },
      {
        name: 'Derby',
        shortCode: 'Derby',
      },
      {
        name: 'Derbyshire',
        shortCode: 'Derbyshire',
      },
      {
        name: 'Derry and Strabane',
        shortCode: 'Derry and Strabane',
      },
      {
        name: 'Devon',
        shortCode: 'Devon',
      },
      {
        name: 'Doncaster',
        shortCode: 'Doncaster',
      },
      {
        name: 'Dorset',
        shortCode: 'Dorset',
      },
      {
        name: 'Dudley',
        shortCode: 'Dudley',
      },
      {
        name: 'Dumfries and Galloway',
        shortCode: 'Dumfries and Galloway',
      },
      {
        name: 'Dundee City',
        shortCode: 'Dundee City',
      },
      {
        name: 'Durham County',
        shortCode: 'Durham County',
      },
      {
        name: 'Ealing',
        shortCode: 'Ealing',
      },
      {
        name: 'East Ayrshire',
        shortCode: 'East Ayrshire',
      },
      {
        name: 'East Dunbartonshire',
        shortCode: 'East Dunbartonshire',
      },
      {
        name: 'East Lothian',
        shortCode: 'East Lothian',
      },
      {
        name: 'East Renfrewshire',
        shortCode: 'East Renfrewshire',
      },
      {
        name: 'East Riding of Yorkshire',
        shortCode: 'East Riding of Yorkshire',
      },
      {
        name: 'East Sussex',
        shortCode: 'East Sussex',
      },
      {
        name: 'Edinburgh, City of',
        shortCode: 'Edinburgh, City of',
      },
      {
        name: 'Eilean Siar',
        shortCode: 'Eilean Siar',
      },
      {
        name: 'Enfield',
        shortCode: 'Enfield',
      },
      {
        name: 'Essex',
        shortCode: 'Essex',
      },
      {
        name: 'Falkirk',
        shortCode: 'Falkirk',
      },
      {
        name: 'Fermanagh and Omagh',
        shortCode: 'Fermanagh and Omagh',
      },
      {
        name: 'Fife',
        shortCode: 'Fife',
      },
      {
        name: 'Flintshire',
        shortCode: 'Flintshire',
      },
      {
        name: 'Gateshead',
        shortCode: 'Gateshead',
      },
      {
        name: 'Glasgow City',
        shortCode: 'Glasgow City',
      },
      {
        name: 'Gloucestershire',
        shortCode: 'Gloucestershire',
      },
      {
        name: 'Greenwich',
        shortCode: 'Greenwich',
      },
      {
        name: 'Gwynedd',
        shortCode: 'Gwynedd',
      },
      {
        name: 'Hackney',
        shortCode: 'Hackney',
      },
      {
        name: 'Halton',
        shortCode: 'Halton',
      },
      {
        name: 'Hammersmith and Fulham',
        shortCode: 'Hammersmith and Fulham',
      },
      {
        name: 'Hampshire',
        shortCode: 'Hampshire',
      },
      {
        name: 'Haringey',
        shortCode: 'Haringey',
      },
      {
        name: 'Harrow',
        shortCode: 'Harrow',
      },
      {
        name: 'Hartlepool',
        shortCode: 'Hartlepool',
      },
      {
        name: 'Havering',
        shortCode: 'Havering',
      },
      {
        name: 'Herefordshire',
        shortCode: 'Herefordshire',
      },
      {
        name: 'Hertfordshire',
        shortCode: 'Hertfordshire',
      },
      {
        name: 'Highland',
        shortCode: 'Highland',
      },
      {
        name: 'Hillingdon',
        shortCode: 'Hillingdon',
      },
      {
        name: 'Hounslow',
        shortCode: 'Hounslow',
      },
      {
        name: 'Inverclyde',
        shortCode: 'Inverclyde',
      },
      {
        name: 'Isle of Anglesey',
        shortCode: 'Isle of Anglesey',
      },
      {
        name: 'Isle of Wight',
        shortCode: 'Isle of Wight',
      },
      {
        name: 'Isles of Scilly',
        shortCode: 'Isles of Scilly',
      },
      {
        name: 'Islington',
        shortCode: 'Islington',
      },
      {
        name: 'Kensington and Chelsea',
        shortCode: 'Kensington and Chelsea',
      },
      {
        name: 'Kent',
        shortCode: 'Kent',
      },
      {
        name: 'Kingston upon Hull',
        shortCode: 'Kingston upon Hull',
      },
      {
        name: 'Kingston upon Thames',
        shortCode: 'Kingston upon Thames',
      },
      {
        name: 'Kirklees',
        shortCode: 'Kirklees',
      },
      {
        name: 'Knowsley',
        shortCode: 'Knowsley',
      },
      {
        name: 'Lambeth',
        shortCode: 'Lambeth',
      },
      {
        name: 'Lancashire',
        shortCode: 'Lancashire',
      },
      {
        name: 'Leeds',
        shortCode: 'Leeds',
      },
      {
        name: 'Leicester',
        shortCode: 'Leicester',
      },
      {
        name: 'Leicestershire',
        shortCode: 'Leicestershire',
      },
      {
        name: 'Lewisham',
        shortCode: 'Lewisham',
      },
      {
        name: 'Lincolnshire',
        shortCode: 'Lincolnshire',
      },
      {
        name: 'Lisburn and Castlereagh',
        shortCode: 'Lisburn and Castlereagh',
      },
      {
        name: 'Liverpool',
        shortCode: 'Liverpool',
      },
      {
        name: 'London',
        shortCode: 'London',
      },
      {
        name: 'Luton',
        shortCode: 'Luton',
      },
      {
        name: 'Manchester',
        shortCode: 'Manchester',
      },
      {
        name: 'Medway',
        shortCode: 'Medway',
      },
      {
        name: 'Merthyr Tydfil',
        shortCode: 'Merthyr Tydfil',
      },
      {
        name: 'Merton',
        shortCode: 'Merton',
      },
      {
        name: 'Mid and East Antrim',
        shortCode: 'Mid and East Antrim',
      },
      {
        name: 'Mid Ulster',
        shortCode: 'Mid Ulster',
      },
      {
        name: 'Middlesbrough',
        shortCode: 'Middlesbrough',
      },
      {
        name: 'Midlothian',
        shortCode: 'Midlothian',
      },
      {
        name: 'Milton Keynes',
        shortCode: 'Milton Keynes',
      },
      {
        name: 'Monmouthshire',
        shortCode: 'Monmouthshire',
      },
      {
        name: 'Moray',
        shortCode: 'Moray',
      },
      {
        name: 'Neath Port Talbot',
        shortCode: 'Neath Port Talbot',
      },
      {
        name: 'Newcastle upon Tyne',
        shortCode: 'Newcastle upon Tyne',
      },
      {
        name: 'Newham',
        shortCode: 'Newham',
      },
      {
        name: 'Newport',
        shortCode: 'Newport',
      },
      {
        name: 'Newry, Mourne and Down',
        shortCode: 'Newry, Mourne and Down',
      },
      {
        name: 'Norfolk',
        shortCode: 'Norfolk',
      },
      {
        name: 'North Ayrshire',
        shortCode: 'North Ayrshire',
      },
      {
        name: 'North East Lincolnshire',
        shortCode: 'North East Lincolnshire',
      },
      {
        name: 'North Lanarkshire',
        shortCode: 'North Lanarkshire',
      },
      {
        name: 'North Lincolnshire',
        shortCode: 'North Lincolnshire',
      },
      {
        name: 'North Somerset',
        shortCode: 'North Somerset',
      },
      {
        name: 'North Tyneside',
        shortCode: 'North Tyneside',
      },
      {
        name: 'North Yorkshire',
        shortCode: 'North Yorkshire',
      },
      {
        name: 'Northamptonshire',
        shortCode: 'Northamptonshire',
      },
      {
        name: 'Northumberland',
        shortCode: 'Northumberland',
      },
      {
        name: 'Nottingham',
        shortCode: 'Nottingham',
      },
      {
        name: 'Nottinghamshire',
        shortCode: 'Nottinghamshire',
      },
      {
        name: 'Oldham',
        shortCode: 'Oldham',
      },
      {
        name: 'Orkney Islands',
        shortCode: 'Orkney Islands',
      },
      {
        name: 'Oxfordshire',
        shortCode: 'Oxfordshire',
      },
      {
        name: 'Pembrokeshire',
        shortCode: 'Pembrokeshire',
      },
      {
        name: 'Perth and Kinross',
        shortCode: 'Perth and Kinross',
      },
      {
        name: 'Peterborough',
        shortCode: 'Peterborough',
      },
      {
        name: 'Plymouth',
        shortCode: 'Plymouth',
      },
      {
        name: 'Poole',
        shortCode: 'Poole',
      },
      {
        name: 'Portsmouth',
        shortCode: 'Portsmouth',
      },
      {
        name: 'Powys',
        shortCode: 'Powys',
      },
      {
        name: 'Reading',
        shortCode: 'Reading',
      },
      {
        name: 'Redbridge',
        shortCode: 'Redbridge',
      },
      {
        name: 'Redcar and Cleveland',
        shortCode: 'Redcar and Cleveland',
      },
      {
        name: 'Renfrewshire',
        shortCode: 'Renfrewshire',
      },
      {
        name: 'Rhondda, Cynon, Taff',
        shortCode: 'Rhondda, Cynon, Taff',
      },
      {
        name: 'Richmond upon Thames',
        shortCode: 'Richmond upon Thames',
      },
      {
        name: 'Rochdale',
        shortCode: 'Rochdale',
      },
      {
        name: 'Rotherham',
        shortCode: 'Rotherham',
      },
      {
        name: 'Rutland',
        shortCode: 'Rutland',
      },
      {
        name: 'St. Helens',
        shortCode: 'St. Helens',
      },
      {
        name: 'Salford',
        shortCode: 'Salford',
      },
      {
        name: 'Sandwell',
        shortCode: 'Sandwell',
      },
      {
        name: 'Scottish Borders, The',
        shortCode: 'Scottish Borders, The',
      },
      {
        name: 'Sefton',
        shortCode: 'Sefton',
      },
      {
        name: 'Sheffield',
        shortCode: 'Sheffield',
      },
      {
        name: 'Shetland Islands',
        shortCode: 'Shetland Islands',
      },
      {
        name: 'Shropshire',
        shortCode: 'Shropshire',
      },
      {
        name: 'Slough',
        shortCode: 'Slough',
      },
      {
        name: 'Solihull',
        shortCode: 'Solihull',
      },
      {
        name: 'Somerset',
        shortCode: 'Somerset',
      },
      {
        name: 'South Ayrshire',
        shortCode: 'South Ayrshire',
      },
      {
        name: 'South Gloucestershire',
        shortCode: 'South Gloucestershire',
      },
      {
        name: 'South Lanarkshire',
        shortCode: 'South Lanarkshire',
      },
      {
        name: 'South Tyneside',
        shortCode: 'South Tyneside',
      },
      {
        name: 'Southampton',
        shortCode: 'Southampton',
      },
      {
        name: 'Southend-on-Sea',
        shortCode: 'Southend-on-Sea',
      },
      {
        name: 'Southwark',
        shortCode: 'Southwark',
      },
      {
        name: 'Staffordshire',
        shortCode: 'Staffordshire',
      },
      {
        name: 'Stirling',
        shortCode: 'Stirling',
      },
      {
        name: 'Stockport',
        shortCode: 'Stockport',
      },
      {
        name: 'Stockton-on-Tees',
        shortCode: 'Stockton-on-Tees',
      },
      {
        name: 'Stoke-on-Trent',
        shortCode: 'Stoke-on-Trent',
      },
      {
        name: 'Suffolk',
        shortCode: 'Suffolk',
      },
      {
        name: 'Sunderland',
        shortCode: 'Sunderland',
      },
      {
        name: 'Surrey',
        shortCode: 'Surrey',
      },
      {
        name: 'Sutton',
        shortCode: 'Sutton',
      },
      {
        name: 'Swansea',
        shortCode: 'Swansea',
      },
      {
        name: 'Swindon',
        shortCode: 'Swindon',
      },
      {
        name: 'Tameside',
        shortCode: 'Tameside',
      },
      {
        name: 'Telford and Wrekin',
        shortCode: 'Telford and Wrekin',
      },
      {
        name: 'Thurrock',
        shortCode: 'Thurrock',
      },
      {
        name: 'Torbay',
        shortCode: 'Torbay',
      },
      {
        name: 'Torfaen',
        shortCode: 'Torfaen',
      },
      {
        name: 'Tower Hamlets',
        shortCode: 'Tower Hamlets',
      },
      {
        name: 'Trafford',
        shortCode: 'Trafford',
      },
      {
        name: 'Vale of Glamorgan, The',
        shortCode: 'Vale of Glamorgan, The',
      },
      {
        name: 'Wakefield',
        shortCode: 'Wakefield',
      },
      {
        name: 'Walsall',
        shortCode: 'Walsall',
      },
      {
        name: 'Waltham Forest',
        shortCode: 'Waltham Forest',
      },
      {
        name: 'Wandsworth',
        shortCode: 'Wandsworth',
      },
      {
        name: 'Warrington',
        shortCode: 'Warrington',
      },
      {
        name: 'Warwickshire',
        shortCode: 'Warwickshire',
      },
      {
        name: 'West Berkshire',
        shortCode: 'West Berkshire',
      },
      {
        name: 'West Dunbartonshire',
        shortCode: 'West Dunbartonshire',
      },
      {
        name: 'West Lothian',
        shortCode: 'West Lothian',
      },
      {
        name: 'West Sussex',
        shortCode: 'West Sussex',
      },
      {
        name: 'Westminster',
        shortCode: 'Westminster',
      },
      {
        name: 'Wigan',
        shortCode: 'Wigan',
      },
      {
        name: 'Wiltshire',
        shortCode: 'Wiltshire',
      },
      {
        name: 'Windsor and Maidenhead',
        shortCode: 'Windsor and Maidenhead',
      },
      {
        name: 'Wirral',
        shortCode: 'Wirral',
      },
      {
        name: 'Wokingham',
        shortCode: 'Wokingham',
      },
      {
        name: 'Wolverhampton',
        shortCode: 'Wolverhampton',
      },
      {
        name: 'Worcestershire',
        shortCode: 'Worcestershire',
      },
      {
        name: 'Wrexham',
        shortCode: 'Wrexham',
      },
      {
        name: 'York',
        shortCode: 'York',
      },
    ],
  },
  {
    countryName: 'United States',
    countryShortCode: 'US',
    regions: [
      {
        name: 'Alabama',
        shortCode: 'AL',
      },
      {
        name: 'Alaska',
        shortCode: 'AK',
      },
      {
        name: 'American Samoa',
        shortCode: 'AS',
      },
      {
        name: 'Arizona',
        shortCode: 'AZ',
      },
      {
        name: 'Arkansas',
        shortCode: 'AR',
      },
      {
        name: 'California',
        shortCode: 'CA',
      },
      {
        name: 'Colorado',
        shortCode: 'CO',
      },
      {
        name: 'Connecticut',
        shortCode: 'CT',
      },
      {
        name: 'Delaware',
        shortCode: 'DE',
      },
      {
        name: 'District of Columbia',
        shortCode: 'DC',
      },
      {
        name: 'Micronesia',
        shortCode: 'FM',
      },
      {
        name: 'Florida',
        shortCode: 'FL',
      },
      {
        name: 'Georgia',
        shortCode: 'GA',
      },
      {
        name: 'Guam',
        shortCode: 'GU',
      },
      {
        name: 'Hawaii',
        shortCode: 'HI',
      },
      {
        name: 'Idaho',
        shortCode: 'ID',
      },
      {
        name: 'Illinois',
        shortCode: 'IL',
      },
      {
        name: 'Indiana',
        shortCode: 'IN',
      },
      {
        name: 'Iowa',
        shortCode: 'IA',
      },
      {
        name: 'Kansas',
        shortCode: 'KS',
      },
      {
        name: 'Kentucky',
        shortCode: 'KY',
      },
      {
        name: 'Louisiana',
        shortCode: 'LA',
      },
      {
        name: 'Maine',
        shortCode: 'ME',
      },
      {
        name: 'Marshall Islands',
        shortCode: 'MH',
      },
      {
        name: 'Maryland',
        shortCode: 'MD',
      },
      {
        name: 'Massachusetts',
        shortCode: 'MA',
      },
      {
        name: 'Michigan',
        shortCode: 'MI',
      },
      {
        name: 'Minnesota',
        shortCode: 'MN',
      },
      {
        name: 'Mississippi',
        shortCode: 'MS',
      },
      {
        name: 'Missouri',
        shortCode: 'MO',
      },
      {
        name: 'Montana',
        shortCode: 'MT',
      },
      {
        name: 'Nebraska',
        shortCode: 'NE',
      },
      {
        name: 'Nevada',
        shortCode: 'NV',
      },
      {
        name: 'New Hampshire',
        shortCode: 'NH',
      },
      {
        name: 'New Jersey',
        shortCode: 'NJ',
      },
      {
        name: 'New Mexico',
        shortCode: 'NM',
      },
      {
        name: 'New York',
        shortCode: 'NY',
      },
      {
        name: 'North Carolina',
        shortCode: 'NC',
      },
      {
        name: 'North Dakota',
        shortCode: 'ND',
      },
      {
        name: 'Northern Mariana Islands',
        shortCode: 'MP',
      },
      {
        name: 'Ohio',
        shortCode: 'OH',
      },
      {
        name: 'Oklahoma',
        shortCode: 'OK',
      },
      {
        name: 'Oregon',
        shortCode: 'OR',
      },
      {
        name: 'Palau',
        shortCode: 'PW',
      },
      {
        name: 'Pennsylvania',
        shortCode: 'PA',
      },
      {
        name: 'Puerto Rico',
        shortCode: 'PR',
      },
      {
        name: 'Rhode Island',
        shortCode: 'RI',
      },
      {
        name: 'South Carolina',
        shortCode: 'SC',
      },
      {
        name: 'South Dakota',
        shortCode: 'SD',
      },
      {
        name: 'Tennessee',
        shortCode: 'TN',
      },
      {
        name: 'Texas',
        shortCode: 'TX',
      },
      {
        name: 'Utah',
        shortCode: 'UT',
      },
      {
        name: 'Vermont',
        shortCode: 'VT',
      },
      {
        name: 'Virgin Islands',
        shortCode: 'VI',
      },
      {
        name: 'Virginia',
        shortCode: 'VA',
      },
      {
        name: 'Washington',
        shortCode: 'WA',
      },
      {
        name: 'West Virginia',
        shortCode: 'WV',
      },
      {
        name: 'Wisconsin',
        shortCode: 'WI',
      },
      {
        name: 'Wyoming',
        shortCode: 'WY',
      },
      {
        name: 'Armed Forces Americas',
        shortCode: 'AA',
      },
      {
        name: 'Armed Forces Europe, Canada, Africa and Middle East',
        shortCode: 'AE',
      },
      {
        name: 'Armed Forces Pacific',
        shortCode: 'AP',
      },
    ],
  },
  {
    countryName: 'Vietnam',
    countryShortCode: 'VN',
    regions: [
      {
        name: 'Đồng Nai',
        shortCode: '39',
      },
      {
        name: 'Đồng Tháp',
        shortCode: '45',
      },
      {
        name: 'Gia Lai',
        shortCode: '30',
      },
      {
        name: 'Hà Giang',
        shortCode: '03',
      },
      {
        name: 'Hà Nam',
        shortCode: '63',
      },
      {
        name: 'Hà Tây',
        shortCode: '15',
      },
      {
        name: 'Hà Tĩnh',
        shortCode: '23',
      },
      {
        name: 'Hải Dương',
        shortCode: '61',
      },
      {
        name: 'Hậu Giang',
        shortCode: '73',
      },
      {
        name: 'Hòa Bình',
        shortCode: '14',
      },
      {
        name: 'Hưng Yên',
        shortCode: '66',
      },
      {
        name: 'Khánh Hòa',
        shortCode: '34',
      },
      {
        name: 'Kiên Giang',
        shortCode: '47',
      },
      {
        name: 'Kon Tum',
        shortCode: '28',
      },
      {
        name: 'Lai Châu',
        shortCode: '01',
      },
      {
        name: 'Lâm Đồng',
        shortCode: '35',
      },
      {
        name: 'Lạng Sơn',
        shortCode: '09',
      },
      {
        name: 'Lào Cai',
        shortCode: '02',
      },
      {
        name: 'Long An',
        shortCode: '41',
      },
      {
        name: 'Nam Định',
        shortCode: '67',
      },
      {
        name: 'Nghệ An',
        shortCode: '22',
      },
      {
        name: 'Ninh Bình',
        shortCode: '18',
      },
      {
        name: 'Ninh Thuận',
        shortCode: '36',
      },
      {
        name: 'Phú Thọ',
        shortCode: '68',
      },
      {
        name: 'Phú Yên',
        shortCode: '32',
      },
      {
        name: 'Quảng Bình',
        shortCode: '24',
      },
      {
        name: 'Quảng Nam',
        shortCode: '27',
      },
      {
        name: 'Quảng Ngãi',
        shortCode: '29',
      },
      {
        name: 'Quảng Ninh',
        shortCode: '13',
      },
      {
        name: 'Quảng Trị',
        shortCode: '25',
      },
      {
        name: 'Sóc Trăng',
        shortCode: '52',
      },
      {
        name: 'Sơn La',
        shortCode: '05',
      },
      {
        name: 'Tây Ninh',
        shortCode: '37',
      },
      {
        name: 'Thái Bình',
        shortCode: '20',
      },
      {
        name: 'Thái Nguyên',
        shortCode: '69',
      },
      {
        name: 'Thanh Hóa',
        shortCode: '21',
      },
      {
        name: 'Thừa Thiên–Huế',
        shortCode: '26',
      },
      {
        name: 'Tiền Giang',
        shortCode: '46',
      },
      {
        name: 'Trà Vinh',
        shortCode: '51',
      },
      {
        name: 'Tuyên Quang',
        shortCode: '07',
      },
      {
        name: 'Vĩnh Long',
        shortCode: '49',
      },
      {
        name: 'Vĩnh Phúc',
        shortCode: '70',
      },
      {
        name: 'Yên Bái',
        shortCode: '06',
      },
      {
        name: 'Cần Thơ',
        shortCode: 'CT',
      },
      {
        name: 'Đà Nẵng',
        shortCode: 'DN',
      },
      {
        name: 'Hà Nội',
        shortCode: 'HN',
      },
      {
        name: 'Hải Phòng',
        shortCode: 'HP',
      },
      {
        name: 'Hồ Chí Minh (Sài Gòn)',
        shortCode: 'SG',
      },
    ],
  },
  {
    countryName: 'Virgin Islands, British',
    countryShortCode: 'VG',
    regions: [
      {
        name: 'Anegada',
        shortCode: 'ANG',
      },
      {
        name: 'Jost Van Dyke',
        shortCode: 'JVD',
      },
      {
        name: 'Tortola',
        shortCode: 'TTA',
      },
      {
        name: 'Virgin Gorda',
        shortCode: 'VGD',
      },
    ],
  },
  {
    countryName: 'Virgin Islands, U.S.',
    countryShortCode: 'VI',
    regions: [
      {
        name: 'St. Thomas',
        shortCode: 'STH',
      },
      {
        name: 'St. John',
        shortCode: 'SJO',
      },
      {
        name: 'St. Croix',
        shortCode: 'SCR',
      },
    ],
  },
]

module.exports._addressPlaceholder = {
  ARG: 'Eg: Av. del Libertador 1473, Buenos Aires',
  BOL: 'Eg: Av Arce, 2556, La Paz',
  BRA: 'Ex: Av Paulista, 1578, São Paulo',
  CAN: 'Eg: 450 Wilbrod St, Ottawa',
  CHL: 'Eg: Los Militares, 6191, Santiago',
  COL: 'Eg: Calle 93 # 14-20, Bogotá',
  ECU: 'Eg: Av Rio Amazonas, N 37-61, Quito',
  ESP: 'Eg: Calle Fernando el Santo, 6, Madrid',
  GTM: 'Eg: 6A Calle 6, Guatemala',
  MEX: 'Eg: Calle de Tacuba 8, Ciudad de México',
  PER: 'Eg: Av. José Pardo, 850, Miraflores, Lima',
  PRT: 'Eg: Av. da França 20, Porto',
  PRY: 'Eg: Avenida Eusebio Ayala, 100, Assunção',
  UNI: 'Eg: 225 East 41st Street, New York',
  URY: 'Eg: Bulevar Artigas, 1394, Montevidéu',
  USA: 'Eg: 225 East 41st Street, New York',
  VEN: 'Eg: Avenida Mohedano, Caracas',
  ROU: 'Eg: Bulevardul Ion Mihalache, București 011192, Romania',
  BGR: 'Eg: улица Елин Пелин 13, София',
  DEU: 'Eg: Rheinalleee 95, Düsseldorf',
  FRA: 'Eg: 7 Rue Hautefeuille, Paris',
  GBR: 'Eg: 29 High Street Poole BH15 1AB',
  ITA: 'Eg: Corso Vittorio Emanuele 69, Milano',
  NLD: 'Eg: Surinamestraat 27, Amsterdam',
  POL: 'Eg: Ulica Twarda 3, Szczecin',
  ZAF: 'Eg: 234 Brickfield Rd, Salt River, Cape Town, 7501, South Africa',
  PAN: 'Eg: C. Enrique Linares 4502',
  RUS: 'Eg: Arbat St, 3 Moscow, Russia',
}

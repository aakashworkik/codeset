export default {
  values: {
    _requestOnly: false,
    rooms: [
      {
        adultCount: 1,
        children: [],
        room: null,
        wish: ""
      }
    ],
    departureAirport: "XXZ",
    selectedFareId: "",
    participant_0_salutation: "female",
    participant_0_title: "",
    participant_0_firstName: "",
    participant_0_lastName: "",
    participant_0_birthdate: "",
    participant_0_nationality: "DE",
    customerNumber: "",
    addressLine1: "",
    addressLine2: "",
    zip: "",
    city: "",
    country: "DE",
    email: "",
    phone: "",
    mobile: "",
    participant_0_note: "",
    agree_entry_visa: false,
    _commissionReceiver: "",
    agb: false,
    allowEmailCampaign: false
  },
  touched: {},
  isSubmitting: false,
  isValidating: false,
  submitCount: 0,
  initialValues: {
    _requestOnly: false,
    rooms: [
      {
        adultCount: 1,
        children: [],
        room: null,
        wish: ""
      }
    ],
    departureAirport: "XXZ",
    selectedFareId: "",
    participant_0_salutation: "female",
    participant_0_title: "",
    participant_0_firstName: "",
    participant_0_lastName: "",
    participant_0_birthdate: "",
    participant_0_nationality: "DE",
    customerNumber: "",
    addressLine1: "",
    addressLine2: "",
    zip: "",
    city: "",
    country: "DE",
    email: "",
    phone: "",
    mobile: "",
    participant_0_note: "",
    agree_entry_visa: false,
    _commissionReceiver: "",
    agb: false,
    allowEmailCampaign: false
  },
  initialErrors: {},
  initialTouched: {},
  isValid: true,
  dirty: false,
  validateOnBlur: true,
  validateOnChange: true,
  validateOnMount: false,
  config: {
    layout: "wizard",
    current: "tourism-order/participant-count",
    required: true,
    min: 1,
    max: 10,
    steps: [
      {
        id: "tourism-order/participant-count",
        weight: -100,
        label: "Teilnehmer und Zimmer",
        summary: []
      },
      {
        id: "tourism-order/flight",
        weight: -94,
        label: "Anreise",
        summary: []
      },
      {
        id: "tourism-order/invoice-data",
        weight: -90,
        label: "Reisende",
        summary: []
      },
      {
        id: "tourism-order/finish",
        weight: 100,
        label: "Anfrage abschließen",
        summary: []
      }
    ],
    labels: {
      submit: "Verbindliche Anfrage",
      nextStep: "Weiter"
    },
    additionalValues: {
      action: "request"
    },
    fields: [
      {
        property: "_requestOnly",
        type: "hidden",
        default: false,
        required: false,
        step: "tourism-order/participant-count",
        checkboxLabel: ""
      },
      {
        property: "rooms",
        type: "participantRooms",
        label: "room selection",
        required: true,
        defaultFreeConfigure: false,
        labels: {
          addRoomLabel: "Weiteres Zimmer hinzufügen",
          roomLabel: "Zimmer",
          freeConfigureLabel: "Zimmer frei konfigurieren",
          selectAdultLabel: "Anzahl der Erwachsenen",
          selectParticipantLabel: "Anzahl der Teilnehmer",
          selectChildLabel: "Anzahl der Kinder",
          ageLabel: "Jahre",
          childLabel: "Kind",
          noRoomFoundLabel:
            "Für diese Auswahl gibt es leider keine verfügbaren Zimmer. Bitte wählen Sie weniger Teilnehmer oder fügen Sie unten ein weiteres Zimmer hinzu.",
          selectAgeLabel: "Bitte wählen Sie das Alter für alle Kinder aus"
        },
        children: true,
        enableWishField: false,
        wishFieldPhoneNumber: "02331 9046",
        product: {
          individual: false,
          type: "default",
          modelId: "tourism/journey",
          id: "61a73a890bb4432cce5b6743"
        },
        step: "tourism-order/participant-count"
      },
      {
        property: "departureAirport",
        type: "choice",
        label: "Hinflug ab",
        required: true,
        column: "col-12 col-xs-12 col-sm-6 col-md-6",
        step: "tourism-order/flight",
        choices: [
          {
            label: "",
            values: [
              {
                value: "XXZ",
                label: "Eigenanreise"
              },
              {
                label: "BER Berlin Berlin Brandenburg (auf Anfrage)",
                value: "BER"
              },
              {
                label: "CGN Köln Bonn 'Konrad Adenauer' (auf Anfrage)",
                value: "CGN"
              },
              {
                label: "FRA Frankfurt Frankfurt Int. (auf Anfrage)",
                value: "FRA"
              },
              {
                label: "HAM Hamburg (auf Anfrage)",
                value: "HAM"
              },
              {
                label: "MUC München 'Franz Josef Strauß' (auf Anfrage)",
                value: "MUC"
              },
              {
                label: "STR Stuttgart Echterdingen (auf Anfrage)",
                value: "STR"
              }
            ]
          }
        ]
      },
      {
        property: "selectedFareId",
        type: "hidden",
        subType: "text",
        label: "Flug",
        required: false,
        readonly: true,
        step: "tourism-order/flight"
      },
      {
        property: "participant_0_salutation",
        type: "choice",
        default: "female",
        label: "Anrede",
        required: true,
        column: "col-12 col-xs-12 col-md-6",
        step: "tourism-order/invoice-data",
        choices: [
          {
            label: "Frau",
            value: "female"
          },
          {
            label: "Herr",
            value: "male"
          },
          {
            label: "divers",
            value: "unspecified"
          }
        ]
      },
      {
        property: "participant_0_title",
        type: "choice",
        label: "Titel",
        required: false,
        column: "col-12 col-xs-12 col-md-6",
        step: "tourism-order/invoice-data",
        choices: [
          {
            label: "Dr.",
            value: "Dr.",
            locales: ["de", "de_CH", "de_AT"]
          },
          {
            label: "Prof.",
            value: "Prof.",
            locales: ["de", "de_CH", "de_AT"]
          },
          {
            label: "Prof. Dr.",
            value: "Prof. Dr.",
            locales: ["de", "de_CH", "de_AT"]
          },
          {
            label: "Dr. med.",
            value: "Dr. med.",
            locales: ["de", "de_CH", "de_AT"]
          },
          {
            label: "Prof. Dr. med.",
            value: "Prof. Dr. med.",
            locales: ["de", "de_CH", "de_AT"]
          },
          {
            label: "Mag",
            value: "Mag",
            locales: ["de", "de_CH", "de_AT"]
          },
          {
            label: "Ing",
            value: "Ing",
            locales: ["de", "de_CH", "de_AT"]
          },
          {
            label: "DI",
            value: "DI",
            locales: ["de", "de_CH", "de_AT"]
          },
          {
            label: "Dipl.-Ing.",
            value: "Dipl.-Ing.",
            locales: ["de", "de_CH", "de_AT"]
          }
        ]
      },
      {
        property: "participant_0_firstName",
        type: "text",
        subType: "text",
        label: "Vorname(n) (wie im Reisepass)",
        required: true,
        column: "col-12 col-xs-12 col-md-6",
        autocomplete: "given-name",
        step: "tourism-order/invoice-data"
      },
      {
        property: "participant_0_lastName",
        type: "text",
        subType: "text",
        label: "Nachname",
        required: true,
        column: "col-12 col-xs-12 col-md-6",
        autocomplete: "family-name",
        step: "tourism-order/invoice-data"
      },
      {
        property: "participant_0_birthdate",
        type: "birthdate",
        subType: "choices",
        label: "Geburtsdatum",
        required: true,
        column: "col-12 col-xs-12 col-md-6",
        withTime: false,
        step: "tourism-order/invoice-data"
      },
      {
        property: "participant_0_nationality",
        type: "choice",
        default: "DE",
        label: "Nationalität",
        required: true,
        column: "col-12 col-xs-12 col-md-6",
        autocomplete: "country",
        step: "tourism-order/invoice-data",
        choices: [
          {
            label: "",
            values: [
              {
                label: "Belgien",
                value: "BE"
              },
              {
                label: "Deutschland",
                value: "DE"
              },
              {
                label: "Italien",
                value: "IT"
              },
              {
                label: "Luxemburg",
                value: "LU"
              },
              {
                label: "Niederlande",
                value: "NL"
              },
              {
                label: "Österreich",
                value: "AT"
              },
              {
                label: "Schweiz",
                value: "CH"
              }
            ]
          },
          {
            label: "-------------------------",
            values: [
              {
                label: "Afghanistan",
                value: "AF"
              },
              {
                label: "Ägypten",
                value: "EG"
              },
              {
                label: "Ålandinseln",
                value: "AX"
              },
              {
                label: "Albanien",
                value: "AL"
              },
              {
                label: "Algerien",
                value: "DZ"
              },
              {
                label: "Amerikanisch-Samoa",
                value: "AS"
              },
              {
                label: "Amerikanische Jungferninseln",
                value: "VI"
              },
              {
                label: "Amerikanische Überseeinseln",
                value: "UM"
              },
              {
                label: "Andorra",
                value: "AD"
              },
              {
                label: "Angola",
                value: "AO"
              },
              {
                label: "Anguilla",
                value: "AI"
              },
              {
                label: "Antarktis",
                value: "AQ"
              },
              {
                label: "Antigua und Barbuda",
                value: "AG"
              },
              {
                label: "Äquatorialguinea",
                value: "GQ"
              },
              {
                label: "Argentinien",
                value: "AR"
              },
              {
                label: "Armenien",
                value: "AM"
              },
              {
                label: "Aruba",
                value: "AW"
              },
              {
                label: "Aserbaidschan",
                value: "AZ"
              },
              {
                label: "Äthiopien",
                value: "ET"
              },
              {
                label: "Australien",
                value: "AU"
              },
              {
                label: "Bahamas",
                value: "BS"
              },
              {
                label: "Bahrain",
                value: "BH"
              },
              {
                label: "Bangladesch",
                value: "BD"
              },
              {
                label: "Barbados",
                value: "BB"
              },
              {
                label: "Belarus",
                value: "BY"
              },
              {
                label: "Belgien",
                value: "BE"
              },
              {
                label: "Belize",
                value: "BZ"
              },
              {
                label: "Benin",
                value: "BJ"
              },
              {
                label: "Bermuda",
                value: "BM"
              },
              {
                label: "Bhutan",
                value: "BT"
              },
              {
                label: "Bolivien",
                value: "BO"
              },
              {
                label: "Bosnien und Herzegowina",
                value: "BA"
              },
              {
                label: "Botsuana",
                value: "BW"
              },
              {
                label: "Bouvetinsel",
                value: "BV"
              },
              {
                label: "Brasilien",
                value: "BR"
              },
              {
                label: "Britische Jungferninseln",
                value: "VG"
              },
              {
                label: "Britisches Territorium im Indischen Ozean",
                value: "IO"
              },
              {
                label: "Brunei Darussalam",
                value: "BN"
              },
              {
                label: "Bulgarien",
                value: "BG"
              },
              {
                label: "Burkina Faso",
                value: "BF"
              },
              {
                label: "Burundi",
                value: "BI"
              },
              {
                label: "Cabo Verde",
                value: "CV"
              },
              {
                label: "Chile",
                value: "CL"
              },
              {
                label: "China",
                value: "CN"
              },
              {
                label: "Cookinseln",
                value: "CK"
              },
              {
                label: "Costa Rica",
                value: "CR"
              },
              {
                label: "Côte d’Ivoire",
                value: "CI"
              },
              {
                label: "Curaçao",
                value: "CW"
              },
              {
                label: "Dänemark",
                value: "DK"
              },
              {
                label: "Deutschland",
                value: "DE"
              },
              {
                label: "Dominica",
                value: "DM"
              },
              {
                label: "Dominikanische Republik",
                value: "DO"
              },
              {
                label: "Dschibuti",
                value: "DJ"
              },
              {
                label: "Ecuador",
                value: "EC"
              },
              {
                label: "El Salvador",
                value: "SV"
              },
              {
                label: "Eritrea",
                value: "ER"
              },
              {
                label: "Estland",
                value: "EE"
              },
              {
                label: "Eswatini",
                value: "SZ"
              },
              {
                label: "Falklandinseln",
                value: "FK"
              },
              {
                label: "Färöer",
                value: "FO"
              },
              {
                label: "Fidschi",
                value: "FJ"
              },
              {
                label: "Finnland",
                value: "FI"
              },
              {
                label: "Frankreich",
                value: "FR"
              },
              {
                label: "Französisch-Guayana",
                value: "GF"
              },
              {
                label: "Französisch-Polynesien",
                value: "PF"
              },
              {
                label: "Französische Süd- und Antarktisgebiete",
                value: "TF"
              },
              {
                label: "Gabun",
                value: "GA"
              },
              {
                label: "Gambia",
                value: "GM"
              },
              {
                label: "Georgien",
                value: "GE"
              },
              {
                label: "Ghana",
                value: "GH"
              },
              {
                label: "Gibraltar",
                value: "GI"
              },
              {
                label: "Grenada",
                value: "GD"
              },
              {
                label: "Griechenland",
                value: "GR"
              },
              {
                label: "Grönland",
                value: "GL"
              },
              {
                label: "Guadeloupe",
                value: "GP"
              },
              {
                label: "Guam",
                value: "GU"
              },
              {
                label: "Guatemala",
                value: "GT"
              },
              {
                label: "Guernsey",
                value: "GG"
              },
              {
                label: "Guinea",
                value: "GN"
              },
              {
                label: "Guinea-Bissau",
                value: "GW"
              },
              {
                label: "Guyana",
                value: "GY"
              },
              {
                label: "Haiti",
                value: "HT"
              },
              {
                label: "Heard und McDonaldinseln",
                value: "HM"
              },
              {
                label: "Honduras",
                value: "HN"
              },
              {
                label: "Indien",
                value: "IN"
              },
              {
                label: "Indonesien",
                value: "ID"
              },
              {
                label: "Irak",
                value: "IQ"
              },
              {
                label: "Iran",
                value: "IR"
              },
              {
                label: "Irland",
                value: "IE"
              },
              {
                label: "Island",
                value: "IS"
              },
              {
                label: "Isle of Man",
                value: "IM"
              },
              {
                label: "Israel",
                value: "IL"
              },
              {
                label: "Italien",
                value: "IT"
              },
              {
                label: "Jamaika",
                value: "JM"
              },
              {
                label: "Japan",
                value: "JP"
              },
              {
                label: "Jemen",
                value: "YE"
              },
              {
                label: "Jersey",
                value: "JE"
              },
              {
                label: "Jordanien",
                value: "JO"
              },
              {
                label: "Kaimaninseln",
                value: "KY"
              },
              {
                label: "Kambodscha",
                value: "KH"
              },
              {
                label: "Kamerun",
                value: "CM"
              },
              {
                label: "Kanada",
                value: "CA"
              },
              {
                label: "Karibische Niederlande",
                value: "BQ"
              },
              {
                label: "Kasachstan",
                value: "KZ"
              },
              {
                label: "Katar",
                value: "QA"
              },
              {
                label: "Kenia",
                value: "KE"
              },
              {
                label: "Kirgisistan",
                value: "KG"
              },
              {
                label: "Kiribati",
                value: "KI"
              },
              {
                label: "Kokosinseln",
                value: "CC"
              },
              {
                label: "Kolumbien",
                value: "CO"
              },
              {
                label: "Komoren",
                value: "KM"
              },
              {
                label: "Kongo-Brazzaville",
                value: "CG"
              },
              {
                label: "Kongo-Kinshasa",
                value: "CD"
              },
              {
                label: "Kroatien",
                value: "HR"
              },
              {
                label: "Kuba",
                value: "CU"
              },
              {
                label: "Kuwait",
                value: "KW"
              },
              {
                label: "Laos",
                value: "LA"
              },
              {
                label: "Lesotho",
                value: "LS"
              },
              {
                label: "Lettland",
                value: "LV"
              },
              {
                label: "Libanon",
                value: "LB"
              },
              {
                label: "Liberia",
                value: "LR"
              },
              {
                label: "Libyen",
                value: "LY"
              },
              {
                label: "Liechtenstein",
                value: "LI"
              },
              {
                label: "Litauen",
                value: "LT"
              },
              {
                label: "Luxemburg",
                value: "LU"
              },
              {
                label: "Madagaskar",
                value: "MG"
              },
              {
                label: "Malawi",
                value: "MW"
              },
              {
                label: "Malaysia",
                value: "MY"
              },
              {
                label: "Malediven",
                value: "MV"
              },
              {
                label: "Mali",
                value: "ML"
              },
              {
                label: "Malta",
                value: "MT"
              },
              {
                label: "Marokko",
                value: "MA"
              },
              {
                label: "Marshallinseln",
                value: "MH"
              },
              {
                label: "Martinique",
                value: "MQ"
              },
              {
                label: "Mauretanien",
                value: "MR"
              },
              {
                label: "Mauritius",
                value: "MU"
              },
              {
                label: "Mayotte",
                value: "YT"
              },
              {
                label: "Mexiko",
                value: "MX"
              },
              {
                label: "Mikronesien",
                value: "FM"
              },
              {
                label: "Monaco",
                value: "MC"
              },
              {
                label: "Mongolei",
                value: "MN"
              },
              {
                label: "Montenegro",
                value: "ME"
              },
              {
                label: "Montserrat",
                value: "MS"
              },
              {
                label: "Mosambik",
                value: "MZ"
              },
              {
                label: "Myanmar",
                value: "MM"
              },
              {
                label: "Namibia",
                value: "NA"
              },
              {
                label: "Nauru",
                value: "NR"
              },
              {
                label: "Nepal",
                value: "NP"
              },
              {
                label: "Neukaledonien",
                value: "NC"
              },
              {
                label: "Neuseeland",
                value: "NZ"
              },
              {
                label: "Nicaragua",
                value: "NI"
              },
              {
                label: "Niederlande",
                value: "NL"
              },
              {
                label: "Niger",
                value: "NE"
              },
              {
                label: "Nigeria",
                value: "NG"
              },
              {
                label: "Niue",
                value: "NU"
              },
              {
                label: "Nordkorea",
                value: "KP"
              },
              {
                label: "Nördliche Marianen",
                value: "MP"
              },
              {
                label: "Nordmazedonien",
                value: "MK"
              },
              {
                label: "Norfolkinsel",
                value: "NF"
              },
              {
                label: "Norwegen",
                value: "NO"
              },
              {
                label: "Oman",
                value: "OM"
              },
              {
                label: "Österreich",
                value: "AT"
              },
              {
                label: "Pakistan",
                value: "PK"
              },
              {
                label: "Palästinensische Autonomiegebiete",
                value: "PS"
              },
              {
                label: "Palau",
                value: "PW"
              },
              {
                label: "Panama",
                value: "PA"
              },
              {
                label: "Papua-Neuguinea",
                value: "PG"
              },
              {
                label: "Paraguay",
                value: "PY"
              },
              {
                label: "Peru",
                value: "PE"
              },
              {
                label: "Philippinen",
                value: "PH"
              },
              {
                label: "Pitcairninseln",
                value: "PN"
              },
              {
                label: "Polen",
                value: "PL"
              },
              {
                label: "Portugal",
                value: "PT"
              },
              {
                label: "Puerto Rico",
                value: "PR"
              },
              {
                label: "Republik Moldau",
                value: "MD"
              },
              {
                label: "Réunion",
                value: "RE"
              },
              {
                label: "Ruanda",
                value: "RW"
              },
              {
                label: "Rumänien",
                value: "RO"
              },
              {
                label: "Russland",
                value: "RU"
              },
              {
                label: "Salomonen",
                value: "SB"
              },
              {
                label: "Sambia",
                value: "ZM"
              },
              {
                label: "Samoa",
                value: "WS"
              },
              {
                label: "San Marino",
                value: "SM"
              },
              {
                label: "São Tomé und Príncipe",
                value: "ST"
              },
              {
                label: "Saudi-Arabien",
                value: "SA"
              },
              {
                label: "Schweden",
                value: "SE"
              },
              {
                label: "Schweiz",
                value: "CH"
              },
              {
                label: "Senegal",
                value: "SN"
              },
              {
                label: "Serbien",
                value: "RS"
              },
              {
                label: "Seychellen",
                value: "SC"
              },
              {
                label: "Sierra Leone",
                value: "SL"
              },
              {
                label: "Simbabwe",
                value: "ZW"
              },
              {
                label: "Singapur",
                value: "SG"
              },
              {
                label: "Sint Maarten",
                value: "SX"
              },
              {
                label: "Slowakei",
                value: "SK"
              },
              {
                label: "Slowenien",
                value: "SI"
              },
              {
                label: "Somalia",
                value: "SO"
              },
              {
                label: "Sonderverwaltungsregion Hongkong",
                value: "HK"
              },
              {
                label: "Sonderverwaltungsregion Macau",
                value: "MO"
              },
              {
                label: "Spanien",
                value: "ES"
              },
              {
                label: "Spitzbergen und Jan Mayen",
                value: "SJ"
              },
              {
                label: "Sri Lanka",
                value: "LK"
              },
              {
                label: "St. Barthélemy",
                value: "BL"
              },
              {
                label: "St. Helena",
                value: "SH"
              },
              {
                label: "St. Kitts und Nevis",
                value: "KN"
              },
              {
                label: "St. Lucia",
                value: "LC"
              },
              {
                label: "St. Martin",
                value: "MF"
              },
              {
                label: "St. Pierre und Miquelon",
                value: "PM"
              },
              {
                label: "St. Vincent und die Grenadinen",
                value: "VC"
              },
              {
                label: "Südafrika",
                value: "ZA"
              },
              {
                label: "Sudan",
                value: "SD"
              },
              {
                label: "Südgeorgien und die Südlichen Sandwichinseln",
                value: "GS"
              },
              {
                label: "Südkorea",
                value: "KR"
              },
              {
                label: "Südsudan",
                value: "SS"
              },
              {
                label: "Suriname",
                value: "SR"
              },
              {
                label: "Syrien",
                value: "SY"
              },
              {
                label: "Tadschikistan",
                value: "TJ"
              },
              {
                label: "Taiwan",
                value: "TW"
              },
              {
                label: "Tansania",
                value: "TZ"
              },
              {
                label: "Thailand",
                value: "TH"
              },
              {
                label: "Timor-Leste",
                value: "TL"
              },
              {
                label: "Togo",
                value: "TG"
              },
              {
                label: "Tokelau",
                value: "TK"
              },
              {
                label: "Tonga",
                value: "TO"
              },
              {
                label: "Trinidad und Tobago",
                value: "TT"
              },
              {
                label: "Tschad",
                value: "TD"
              },
              {
                label: "Tschechien",
                value: "CZ"
              },
              {
                label: "Tunesien",
                value: "TN"
              },
              {
                label: "Türkei",
                value: "TR"
              },
              {
                label: "Turkmenistan",
                value: "TM"
              },
              {
                label: "Turks- und Caicosinseln",
                value: "TC"
              },
              {
                label: "Tuvalu",
                value: "TV"
              },
              {
                label: "Uganda",
                value: "UG"
              },
              {
                label: "Ukraine",
                value: "UA"
              },
              {
                label: "Ungarn",
                value: "HU"
              },
              {
                label: "Uruguay",
                value: "UY"
              },
              {
                label: "Usbekistan",
                value: "UZ"
              },
              {
                label: "Vanuatu",
                value: "VU"
              },
              {
                label: "Vatikanstadt",
                value: "VA"
              },
              {
                label: "Venezuela",
                value: "VE"
              },
              {
                label: "Vereinigte Arabische Emirate",
                value: "AE"
              },
              {
                label: "Vereinigte Staaten",
                value: "US"
              },
              {
                label: "Vereinigtes Königreich",
                value: "GB"
              },
              {
                label: "Vietnam",
                value: "VN"
              },
              {
                label: "Wallis und Futuna",
                value: "WF"
              },
              {
                label: "Weihnachtsinsel",
                value: "CX"
              },
              {
                label: "Westsahara",
                value: "EH"
              },
              {
                label: "Zentralafrikanische Republik",
                value: "CF"
              },
              {
                label: "Zypern",
                value: "CY"
              }
            ]
          }
        ]
      },
      {
        property: "customerNumber",
        type: "hidden",
        subType: "text",
        label: "",
        required: false,
        step: "tourism-order/invoice-data"
      },
      {
        property: "addressLine1",
        type: "text",
        subType: "text",
        label: "Straße, Hausnummer",
        required: true,
        autocomplete: "invoice address-line1",
        fieldset: "Kontakt",
        step: "tourism-order/invoice-data"
      },
      {
        property: "addressLine2",
        type: "text",
        subType: "text",
        label: "Adresszusatz",
        required: false,
        autocomplete: "invoice address-line2",
        fieldset: "Kontakt",
        step: "tourism-order/invoice-data"
      },
      {
        property: "zip",
        type: "text",
        subType: "text",
        label: "PLZ",
        required: true,
        column: "col-12 col-xs-12 col-md-2",
        autocomplete: "invoice postal-code",
        fieldset: "Kontakt",
        step: "tourism-order/invoice-data"
      },
      {
        property: "city",
        type: "text",
        subType: "text",
        label: "Ort",
        required: true,
        column: "col-12 col-xs-12 col-md-4",
        autocomplete: "invoice address-level2",
        fieldset: "Kontakt",
        step: "tourism-order/invoice-data"
      },
      {
        property: "country",
        type: "choice",
        default: "DE",
        label: "Land",
        required: true,
        column: "col-12 col-xs-12 col-md-6",
        autocomplete: "invoice country-code",
        fieldset: "Kontakt",
        step: "tourism-order/invoice-data",
        choices: [
          {
            label: "",
            values: [
              {
                label: "Belgien",
                value: "BE"
              },
              {
                label: "Deutschland",
                value: "DE"
              },
              {
                label: "Italien",
                value: "IT"
              },
              {
                label: "Luxemburg",
                value: "LU"
              },
              {
                label: "Niederlande",
                value: "NL"
              },
              {
                label: "Österreich",
                value: "AT"
              },
              {
                label: "Schweiz",
                value: "CH"
              }
            ]
          },
          {
            label: "-------------------------",
            values: [
              {
                label: "Afghanistan",
                value: "AF"
              },
              {
                label: "Ägypten",
                value: "EG"
              },
              {
                label: "Ålandinseln",
                value: "AX"
              },
              {
                label: "Albanien",
                value: "AL"
              },
              {
                label: "Algerien",
                value: "DZ"
              },
              {
                label: "Amerikanisch-Samoa",
                value: "AS"
              },
              {
                label: "Amerikanische Jungferninseln",
                value: "VI"
              },
              {
                label: "Amerikanische Überseeinseln",
                value: "UM"
              },
              {
                label: "Andorra",
                value: "AD"
              },
              {
                label: "Angola",
                value: "AO"
              },
              {
                label: "Anguilla",
                value: "AI"
              },
              {
                label: "Antarktis",
                value: "AQ"
              },
              {
                label: "Antigua und Barbuda",
                value: "AG"
              },
              {
                label: "Äquatorialguinea",
                value: "GQ"
              },
              {
                label: "Argentinien",
                value: "AR"
              },
              {
                label: "Armenien",
                value: "AM"
              },
              {
                label: "Aruba",
                value: "AW"
              },
              {
                label: "Aserbaidschan",
                value: "AZ"
              },
              {
                label: "Äthiopien",
                value: "ET"
              },
              {
                label: "Australien",
                value: "AU"
              },
              {
                label: "Bahamas",
                value: "BS"
              },
              {
                label: "Bahrain",
                value: "BH"
              },
              {
                label: "Bangladesch",
                value: "BD"
              },
              {
                label: "Barbados",
                value: "BB"
              },
              {
                label: "Belarus",
                value: "BY"
              },
              {
                label: "Belgien",
                value: "BE"
              },
              {
                label: "Belize",
                value: "BZ"
              },
              {
                label: "Benin",
                value: "BJ"
              },
              {
                label: "Bermuda",
                value: "BM"
              },
              {
                label: "Bhutan",
                value: "BT"
              },
              {
                label: "Bolivien",
                value: "BO"
              },
              {
                label: "Bosnien und Herzegowina",
                value: "BA"
              },
              {
                label: "Botsuana",
                value: "BW"
              },
              {
                label: "Bouvetinsel",
                value: "BV"
              },
              {
                label: "Brasilien",
                value: "BR"
              },
              {
                label: "Britische Jungferninseln",
                value: "VG"
              },
              {
                label: "Britisches Territorium im Indischen Ozean",
                value: "IO"
              },
              {
                label: "Brunei Darussalam",
                value: "BN"
              },
              {
                label: "Bulgarien",
                value: "BG"
              },
              {
                label: "Burkina Faso",
                value: "BF"
              },
              {
                label: "Burundi",
                value: "BI"
              },
              {
                label: "Cabo Verde",
                value: "CV"
              },
              {
                label: "Chile",
                value: "CL"
              },
              {
                label: "China",
                value: "CN"
              },
              {
                label: "Cookinseln",
                value: "CK"
              },
              {
                label: "Costa Rica",
                value: "CR"
              },
              {
                label: "Côte d’Ivoire",
                value: "CI"
              },
              {
                label: "Curaçao",
                value: "CW"
              },
              {
                label: "Dänemark",
                value: "DK"
              },
              {
                label: "Deutschland",
                value: "DE"
              },
              {
                label: "Dominica",
                value: "DM"
              },
              {
                label: "Dominikanische Republik",
                value: "DO"
              },
              {
                label: "Dschibuti",
                value: "DJ"
              },
              {
                label: "Ecuador",
                value: "EC"
              },
              {
                label: "El Salvador",
                value: "SV"
              },
              {
                label: "Eritrea",
                value: "ER"
              },
              {
                label: "Estland",
                value: "EE"
              },
              {
                label: "Eswatini",
                value: "SZ"
              },
              {
                label: "Falklandinseln",
                value: "FK"
              },
              {
                label: "Färöer",
                value: "FO"
              },
              {
                label: "Fidschi",
                value: "FJ"
              },
              {
                label: "Finnland",
                value: "FI"
              },
              {
                label: "Frankreich",
                value: "FR"
              },
              {
                label: "Französisch-Guayana",
                value: "GF"
              },
              {
                label: "Französisch-Polynesien",
                value: "PF"
              },
              {
                label: "Französische Süd- und Antarktisgebiete",
                value: "TF"
              },
              {
                label: "Gabun",
                value: "GA"
              },
              {
                label: "Gambia",
                value: "GM"
              },
              {
                label: "Georgien",
                value: "GE"
              },
              {
                label: "Ghana",
                value: "GH"
              },
              {
                label: "Gibraltar",
                value: "GI"
              },
              {
                label: "Grenada",
                value: "GD"
              },
              {
                label: "Griechenland",
                value: "GR"
              },
              {
                label: "Grönland",
                value: "GL"
              },
              {
                label: "Guadeloupe",
                value: "GP"
              },
              {
                label: "Guam",
                value: "GU"
              },
              {
                label: "Guatemala",
                value: "GT"
              },
              {
                label: "Guernsey",
                value: "GG"
              },
              {
                label: "Guinea",
                value: "GN"
              },
              {
                label: "Guinea-Bissau",
                value: "GW"
              },
              {
                label: "Guyana",
                value: "GY"
              },
              {
                label: "Haiti",
                value: "HT"
              },
              {
                label: "Heard und McDonaldinseln",
                value: "HM"
              },
              {
                label: "Honduras",
                value: "HN"
              },
              {
                label: "Indien",
                value: "IN"
              },
              {
                label: "Indonesien",
                value: "ID"
              },
              {
                label: "Irak",
                value: "IQ"
              },
              {
                label: "Iran",
                value: "IR"
              },
              {
                label: "Irland",
                value: "IE"
              },
              {
                label: "Island",
                value: "IS"
              },
              {
                label: "Isle of Man",
                value: "IM"
              },
              {
                label: "Israel",
                value: "IL"
              },
              {
                label: "Italien",
                value: "IT"
              },
              {
                label: "Jamaika",
                value: "JM"
              },
              {
                label: "Japan",
                value: "JP"
              },
              {
                label: "Jemen",
                value: "YE"
              },
              {
                label: "Jersey",
                value: "JE"
              },
              {
                label: "Jordanien",
                value: "JO"
              },
              {
                label: "Kaimaninseln",
                value: "KY"
              },
              {
                label: "Kambodscha",
                value: "KH"
              },
              {
                label: "Kamerun",
                value: "CM"
              },
              {
                label: "Kanada",
                value: "CA"
              },
              {
                label: "Karibische Niederlande",
                value: "BQ"
              },
              {
                label: "Kasachstan",
                value: "KZ"
              },
              {
                label: "Katar",
                value: "QA"
              },
              {
                label: "Kenia",
                value: "KE"
              },
              {
                label: "Kirgisistan",
                value: "KG"
              },
              {
                label: "Kiribati",
                value: "KI"
              },
              {
                label: "Kokosinseln",
                value: "CC"
              },
              {
                label: "Kolumbien",
                value: "CO"
              },
              {
                label: "Komoren",
                value: "KM"
              },
              {
                label: "Kongo-Brazzaville",
                value: "CG"
              },
              {
                label: "Kongo-Kinshasa",
                value: "CD"
              },
              {
                label: "Kroatien",
                value: "HR"
              },
              {
                label: "Kuba",
                value: "CU"
              },
              {
                label: "Kuwait",
                value: "KW"
              },
              {
                label: "Laos",
                value: "LA"
              },
              {
                label: "Lesotho",
                value: "LS"
              },
              {
                label: "Lettland",
                value: "LV"
              },
              {
                label: "Libanon",
                value: "LB"
              },
              {
                label: "Liberia",
                value: "LR"
              },
              {
                label: "Libyen",
                value: "LY"
              },
              {
                label: "Liechtenstein",
                value: "LI"
              },
              {
                label: "Litauen",
                value: "LT"
              },
              {
                label: "Luxemburg",
                value: "LU"
              },
              {
                label: "Madagaskar",
                value: "MG"
              },
              {
                label: "Malawi",
                value: "MW"
              },
              {
                label: "Malaysia",
                value: "MY"
              },
              {
                label: "Malediven",
                value: "MV"
              },
              {
                label: "Mali",
                value: "ML"
              },
              {
                label: "Malta",
                value: "MT"
              },
              {
                label: "Marokko",
                value: "MA"
              },
              {
                label: "Marshallinseln",
                value: "MH"
              },
              {
                label: "Martinique",
                value: "MQ"
              },
              {
                label: "Mauretanien",
                value: "MR"
              },
              {
                label: "Mauritius",
                value: "MU"
              },
              {
                label: "Mayotte",
                value: "YT"
              },
              {
                label: "Mexiko",
                value: "MX"
              },
              {
                label: "Mikronesien",
                value: "FM"
              },
              {
                label: "Monaco",
                value: "MC"
              },
              {
                label: "Mongolei",
                value: "MN"
              },
              {
                label: "Montenegro",
                value: "ME"
              },
              {
                label: "Montserrat",
                value: "MS"
              },
              {
                label: "Mosambik",
                value: "MZ"
              },
              {
                label: "Myanmar",
                value: "MM"
              },
              {
                label: "Namibia",
                value: "NA"
              },
              {
                label: "Nauru",
                value: "NR"
              },
              {
                label: "Nepal",
                value: "NP"
              },
              {
                label: "Neukaledonien",
                value: "NC"
              },
              {
                label: "Neuseeland",
                value: "NZ"
              },
              {
                label: "Nicaragua",
                value: "NI"
              },
              {
                label: "Niederlande",
                value: "NL"
              },
              {
                label: "Niger",
                value: "NE"
              },
              {
                label: "Nigeria",
                value: "NG"
              },
              {
                label: "Niue",
                value: "NU"
              },
              {
                label: "Nordkorea",
                value: "KP"
              },
              {
                label: "Nördliche Marianen",
                value: "MP"
              },
              {
                label: "Nordmazedonien",
                value: "MK"
              },
              {
                label: "Norfolkinsel",
                value: "NF"
              },
              {
                label: "Norwegen",
                value: "NO"
              },
              {
                label: "Oman",
                value: "OM"
              },
              {
                label: "Österreich",
                value: "AT"
              },
              {
                label: "Pakistan",
                value: "PK"
              },
              {
                label: "Palästinensische Autonomiegebiete",
                value: "PS"
              },
              {
                label: "Palau",
                value: "PW"
              },
              {
                label: "Panama",
                value: "PA"
              },
              {
                label: "Papua-Neuguinea",
                value: "PG"
              },
              {
                label: "Paraguay",
                value: "PY"
              },
              {
                label: "Peru",
                value: "PE"
              },
              {
                label: "Philippinen",
                value: "PH"
              },
              {
                label: "Pitcairninseln",
                value: "PN"
              },
              {
                label: "Polen",
                value: "PL"
              },
              {
                label: "Portugal",
                value: "PT"
              },
              {
                label: "Puerto Rico",
                value: "PR"
              },
              {
                label: "Republik Moldau",
                value: "MD"
              },
              {
                label: "Réunion",
                value: "RE"
              },
              {
                label: "Ruanda",
                value: "RW"
              },
              {
                label: "Rumänien",
                value: "RO"
              },
              {
                label: "Russland",
                value: "RU"
              },
              {
                label: "Salomonen",
                value: "SB"
              },
              {
                label: "Sambia",
                value: "ZM"
              },
              {
                label: "Samoa",
                value: "WS"
              },
              {
                label: "San Marino",
                value: "SM"
              },
              {
                label: "São Tomé und Príncipe",
                value: "ST"
              },
              {
                label: "Saudi-Arabien",
                value: "SA"
              },
              {
                label: "Schweden",
                value: "SE"
              },
              {
                label: "Schweiz",
                value: "CH"
              },
              {
                label: "Senegal",
                value: "SN"
              },
              {
                label: "Serbien",
                value: "RS"
              },
              {
                label: "Seychellen",
                value: "SC"
              },
              {
                label: "Sierra Leone",
                value: "SL"
              },
              {
                label: "Simbabwe",
                value: "ZW"
              },
              {
                label: "Singapur",
                value: "SG"
              },
              {
                label: "Sint Maarten",
                value: "SX"
              },
              {
                label: "Slowakei",
                value: "SK"
              },
              {
                label: "Slowenien",
                value: "SI"
              },
              {
                label: "Somalia",
                value: "SO"
              },
              {
                label: "Sonderverwaltungsregion Hongkong",
                value: "HK"
              },
              {
                label: "Sonderverwaltungsregion Macau",
                value: "MO"
              },
              {
                label: "Spanien",
                value: "ES"
              },
              {
                label: "Spitzbergen und Jan Mayen",
                value: "SJ"
              },
              {
                label: "Sri Lanka",
                value: "LK"
              },
              {
                label: "St. Barthélemy",
                value: "BL"
              },
              {
                label: "St. Helena",
                value: "SH"
              },
              {
                label: "St. Kitts und Nevis",
                value: "KN"
              },
              {
                label: "St. Lucia",
                value: "LC"
              },
              {
                label: "St. Martin",
                value: "MF"
              },
              {
                label: "St. Pierre und Miquelon",
                value: "PM"
              },
              {
                label: "St. Vincent und die Grenadinen",
                value: "VC"
              },
              {
                label: "Südafrika",
                value: "ZA"
              },
              {
                label: "Sudan",
                value: "SD"
              },
              {
                label: "Südgeorgien und die Südlichen Sandwichinseln",
                value: "GS"
              },
              {
                label: "Südkorea",
                value: "KR"
              },
              {
                label: "Südsudan",
                value: "SS"
              },
              {
                label: "Suriname",
                value: "SR"
              },
              {
                label: "Syrien",
                value: "SY"
              },
              {
                label: "Tadschikistan",
                value: "TJ"
              },
              {
                label: "Taiwan",
                value: "TW"
              },
              {
                label: "Tansania",
                value: "TZ"
              },
              {
                label: "Thailand",
                value: "TH"
              },
              {
                label: "Timor-Leste",
                value: "TL"
              },
              {
                label: "Togo",
                value: "TG"
              },
              {
                label: "Tokelau",
                value: "TK"
              },
              {
                label: "Tonga",
                value: "TO"
              },
              {
                label: "Trinidad und Tobago",
                value: "TT"
              },
              {
                label: "Tschad",
                value: "TD"
              },
              {
                label: "Tschechien",
                value: "CZ"
              },
              {
                label: "Tunesien",
                value: "TN"
              },
              {
                label: "Türkei",
                value: "TR"
              },
              {
                label: "Turkmenistan",
                value: "TM"
              },
              {
                label: "Turks- und Caicosinseln",
                value: "TC"
              },
              {
                label: "Tuvalu",
                value: "TV"
              },
              {
                label: "Uganda",
                value: "UG"
              },
              {
                label: "Ukraine",
                value: "UA"
              },
              {
                label: "Ungarn",
                value: "HU"
              },
              {
                label: "Uruguay",
                value: "UY"
              },
              {
                label: "Usbekistan",
                value: "UZ"
              },
              {
                label: "Vanuatu",
                value: "VU"
              },
              {
                label: "Vatikanstadt",
                value: "VA"
              },
              {
                label: "Venezuela",
                value: "VE"
              },
              {
                label: "Vereinigte Arabische Emirate",
                value: "AE"
              },
              {
                label: "Vereinigte Staaten",
                value: "US"
              },
              {
                label: "Vereinigtes Königreich",
                value: "GB"
              },
              {
                label: "Vietnam",
                value: "VN"
              },
              {
                label: "Wallis und Futuna",
                value: "WF"
              },
              {
                label: "Weihnachtsinsel",
                value: "CX"
              },
              {
                label: "Westsahara",
                value: "EH"
              },
              {
                label: "Zentralafrikanische Republik",
                value: "CF"
              },
              {
                label: "Zypern",
                value: "CY"
              }
            ]
          }
        ]
      },
      {
        property: "email",
        type: "text",
        subType: "email",
        label: "E-Mail-Adresse",
        required: true,
        column: "col-12 col-xs-12 col-md-6",
        autocomplete: "email",
        fieldset: "Kontakt",
        step: "tourism-order/invoice-data"
      },
      {
        property: "phone",
        type: "text",
        subType: "tel",
        label: "Telefon",
        required: true,
        column: "col-12 col-xs-12 col-md-6",
        autocomplete: "tel",
        fieldset: "Kontakt",
        step: "tourism-order/invoice-data"
      },
      {
        property: "mobile",
        type: "text",
        subType: "tel",
        label: "Mobil",
        required: false,
        column: "col-12 col-xs-12 col-md-6",
        fieldset: "Kontakt",
        step: "tourism-order/invoice-data"
      },
      {
        property: "participant_0_note",
        type: "text",
        subType: "textarea",
        label: "Was Sie uns noch mitteilen wollen",
        required: false,
        rows: 3,
        step: "tourism-order/invoice-data"
      },
      {
        property: "agree_entry_visa",
        type: "checkbox",
        default: false,
        required: true,
        popup: '<div class="entry-and-visa">\n    \n</div>',
        popupTitle: "Einreise- und Visa-Bestimmungen",
        step: "tourism-order/finish",
        checkboxLabel:
          "Die Einreise- und Visabestimmungen für Schweden habe ich zur Kenntnis genommen"
      },
      {
        property: "_commissionReceiver",
        type: "hidden",
        subType: "text",
        label: "",
        required: false,
        step: "tourism-order/finish"
      },
      {
        property: "agb",
        type: "checkbox",
        default: false,
        required: true,
        disabled: false,
        html: true,
        step: "tourism-order/finish",
        checkboxLabel: "<p>Ich akzeptiere die AGB</p>"
      },
      {
        property: "allowEmailCampaign",
        type: "checkbox",
        default: false,
        required: false,
        disabled: false,
        html: true,
        step: "tourism-order/finish",
        checkboxLabel: "<p>Newsletter möchte ich haben</p>"
      }
    ],
    url:
      "https://wikinger-gkaz.system.sio.com/api/v2/tourism-order/booking-wizard/step/61a73a890bb4432cce5b6743",
    locale: "de",
    summaryContext: {
      adultCount: 0,
      childrenCount: 0,
      individualTrip: false,
      summary: [],
      dates: {
        startDate: "2022-07-14T00:00:00+00:00",
        endDate: "2022-07-14T00:00:00+00:00"
      },
      itinerary: {
        modelId: "tourism/itinerary",
        createdAt: "2021-12-01T09:02:39+00:00",
        updatedAt: "2021-12-15T10:48:55+00:00",
        updatedBy: {
          id: "604e0be962ac1c52995b8ae3",
          modelId: "user/user"
        },
        watchers: [],
        tags: [],
        executedWorkflows: [],
        legacyImportId: "5220R",
        id: "61a73a2fa137610f305f0ec8",
        archived: false,
        tour: {
          id: "61483bc631592329b86b57cd",
          modelId: "tourism/tour"
        },
        tourNumber: "5220R",
        brandColor: "#ba1320",
        titleWithTourNumber: "5220R Radeln im Naturparadies Südschweden",
        type: "group",
        priceCalculation: "default",
        name: "Standard",
        nameSlug: "standard",
        default: true,
        nextDefault: false,
        categories: [
          {
            id: "61483bb1853a0958e4610f76",
            modelId: "tourism/journey-category"
          }
        ],
        countries: [
          {
            id: "6046790d0a545a6e3229337d",
            modelId: "tourism/country"
          }
        ],
        regions: [
          {
            id: "61483b915132311c9946cc61",
            modelId: "tourism/region"
          }
        ],
        locales: ["de"],
        continents: [],
        futureJourneysCount: 4,
        isTravelable: "partially",
        firstJourneyDate: "2022-07-14T00:00:00+00:00",
        lastJourneyDate: "2022-08-18T00:00:00+00:00",
        availableExtensions: [],
        publish: true,
        alwaysDisplayInSearch: false,
        frontendUrl:
          "http://wikinger.client.sio.com/5220r-radeln-im-naturparadies-suedschweden",
        websites: [
          {
            id: "6086d5938cded6403e5248f2",
            modelId: "frontend/website"
          }
        ],
        suitableForReducedMobility: false,
        infantLogic: "count-infant",
        contingentExpiration: 0,
        contingentExpirationRules: [],
        travelInsurancePolicy: true,
        hasMarginTax: false,
        boost: 1,
        randomHotel: false,
        agenciesAllowed: [],
        agenciesNotAllowed: [],
        additionalServices: [],
        calculatedPrice: false,
        allowedAirlines: [],
        maxSegments: 0,
        displayInSearch: true,
        cheapestJourneyPrice: {
          amount: 152500,
          currency: "EUR"
        },
        cheapestRoomLabel:
          "Unterbringung im Zweibettzimmer (2er-Belegung) mit Bad oder Dusche/WC Laut Programm",
        cheapestFare: {
          id: "61a74015a9803913f01c42f2",
          modelId: "tourism-room/fare"
        },
        cheapestHasDiscount: false,
        pricePerDay: {
          amount: 19100,
          currency: "EUR"
        },
        etag: "7ca42d1c3ca3d445e07700ad78b5d515",
        hasGuaranteedJourney: false,
        bookingCount: 0,
        crsServiceType: "H",
        bistroJourneyCategories: [],
        equipment: [
          {
            modelId: "tourism-journey-equipment/journey-equipment",
            id: "61b88bd5e6465a728b1df524"
          }
        ],
        checklistGroups: [],
        accommodationPerType: [],
        difficulty: ["12R"],
        operationManagers: [],
        productManagers: [],
        flightManagers: [],
        map: {
          id: "614753635ec0cd2d490c60e2",
          modelId: "media-database/media-item"
        },
        images: [],
        startLocation: {
          id: "6188fed4ed22aa35881c9178",
          modelId: "tourism-places/place"
        },
        minParticipants: 10,
        maxParticipants: 18,
        accommodations: [],
        subtitle: "Untertitel der Reise",
        eyeCatcherText: "",
        highlights: [
          "Bilderbuchlandschaft Småland",
          "Klare Seen und grüne Wälder",
          "Hervorragende Küche im Hotel Björkhaga"
        ],
        shortTeaser: "",
        teaser:
          "<P>In Småland entdecken wir auf unseren Radtouren die Bilderbuchlandschaft Südschwedens von ihrer schönsten Seite. Wir erkunden die Heimat der weltberühmten Kinderbuchautorin Astrid Lindgren und radeln durch unberührte Wälder mit ihren zahlreichen einsamen, glasklaren Seen und Badeplätzen. Mit Kanus erleben wir unsere Wildnisträume hautnah und gleiten durch die Gewässer Skandinaviens. Der intensive Sommer mit seinen hellen und warmen Nächten sowie die schmackhafte Hotelküche sind ideale Bedingungen für einen erholsamen Urlaub.</P>",
        includedActivities: "",
        remarksText: "",
        localTeamText: "",
        localTransportationText: "",
        flightInformationText: "",
        vaccinationsAndEntryRequirementsText: "",
        additionalCostsText: "",
        titleOverwrite: "",
        title: "Radeln im Naturparadies Südschweden",
        travelTopics: [],
        organization: {
          id: "607fd96ac5f2e81bdd244d82",
          modelId: "organization/organization"
        },
        excludedServices: [],
        excludedServicesAsList: [],
        includedServices: [
          {
            modelId: "tourism/service",
            createdAt: "2021-09-20T09:04:15+00:00",
            updatedAt: "2021-09-20T09:04:15+00:00",
            watchers: [],
            tags: [],
            executedWorkflows: [],
            id: "61484e8f9e3f3038e54115fd",
            title:
              "Flug mit Lufthansa, Eurowings oder SAS Scandinavian Airlines in der Economyclass nach Jönköping oder Göteborg und zurück",
            publish: true
          },
          {
            modelId: "tourism/service",
            createdAt: "2021-09-20T09:04:02+00:00",
            updatedAt: "2021-09-20T09:04:02+00:00",
            watchers: [],
            tags: [],
            executedWorkflows: [],
            id: "61484e829e3f3038e54113f6",
            title: "Transfers in Schweden",
            publish: true
          },
          {
            modelId: "tourism/service",
            createdAt: "2021-09-20T08:59:53+00:00",
            updatedAt: "2021-09-20T08:59:53+00:00",
            watchers: [],
            tags: [],
            executedWorkflows: [],
            id: "61484d899e3f3038e540dd60",
            title: "7 Übernachtungen im Doppelzimmer mit Bad oder Dusche/WC",
            publish: true
          },
          {
            modelId: "tourism/service",
            createdAt: "2021-09-20T08:59:54+00:00",
            updatedAt: "2021-09-20T08:59:54+00:00",
            watchers: [],
            tags: [],
            executedWorkflows: [],
            id: "61484d8a9e3f3038e540dda5",
            title: "Halbpension",
            publish: true
          },
          {
            modelId: "tourism/service",
            createdAt: "2021-09-20T09:00:46+00:00",
            updatedAt: "2021-09-20T09:00:46+00:00",
            watchers: [],
            tags: [],
            executedWorkflows: [],
            id: "61484dbe9e3f3038e540eb73",
            title: "Programm wie beschrieben (5 geführte Radtouren)",
            publish: true
          },
          {
            modelId: "tourism/service",
            createdAt: "2021-09-20T09:04:15+00:00",
            updatedAt: "2021-09-20T09:04:15+00:00",
            watchers: [],
            tags: [],
            executedWorkflows: [],
            id: "61484e8f9e3f3038e54115fe",
            title: "Kanu-Tour an Tag 5",
            publish: true
          },
          {
            modelId: "tourism/service",
            createdAt: "2021-09-20T09:04:15+00:00",
            updatedAt: "2021-09-20T09:04:15+00:00",
            watchers: [],
            tags: [],
            executedWorkflows: [],
            id: "61484e8f9e3f3038e54115ff",
            title: "Eintritt Gunillaberg an Tag 6",
            publish: true
          },
          {
            modelId: "tourism/service",
            createdAt: "2021-09-20T09:00:38+00:00",
            updatedAt: "2021-09-20T09:00:38+00:00",
            watchers: [],
            tags: [],
            executedWorkflows: [],
            id: "61484db69e3f3038e540e8b1",
            title:
              "Radmiete (7-Gang-Tourenrad oder 21-Gang-Trekkingrad und Wikinger-Gepäcktasche)",
            publish: true
          },
          {
            modelId: "tourism/service",
            createdAt: "2021-09-20T08:59:18+00:00",
            updatedAt: "2021-09-20T08:59:18+00:00",
            watchers: [],
            tags: [],
            executedWorkflows: [],
            id: "61484d669e3f3038e540cd62",
            title:
              "Immer für dich da: deutschsprachige, qualifizierte Wikinger-Reiseleitung",
            publish: true
          }
        ],
        includedServicesAsList: [],
        overwriteDayAttributes: false,
        daysCount: 8,
        maxAltitudeUp: 0,
        maxAltitudeDown: 0,
        cateringBreakfastCount: 0,
        cateringLunchCount: 0,
        cateringPackedLunchCount: 0,
        cateringDinnerCount: 0,
        slug: "5220r-radeln-im-naturparadies-suedschweden",
        programTypes: [],
        days: [
          {
            modelId: "tourism/itinerary-day",
            id: "61b88bd5e6465a728b1df525",
            title: "Anreise",
            description:
              "Flug nach Schweden und Transfer zum Hotel in Mullsjö.",
            images: [],
            accommodation: {
              id: "61a7398bb7ab9854cc1c8097",
              modelId: "tourism-accommodation/accommodation"
            },
            cateringBreakfast: 0,
            cateringLunch: 0,
            cateringPackedLunch: 0,
            cateringDinner: 0,
            realWorldDuration: 1,
            realWorldInterval: "1",
            startIndex: 0,
            customServices: []
          },
          {
            modelId: "tourism/itinerary-day",
            id: "61b88bd5e6465a728b1df526",
            title: "ca. 41 km, Natur pur",
            description:
              "Die heutige Tour steht ganz im Sinne der Natur: Durch die nordischen Nadelwälder, die zahlreichen Seen und die roten Holzhäuser bekommen wir einen ersten Eindruck dieser faszinierenden Landschaft. Auf der Rückfahrt unternehmen wir eine kleine Wanderung im Naturreservat Ryfors Gammelskog, das einem Märchenwald ähnelt.",
            images: [],
            accommodation: {
              id: "61a7398bb7ab9854cc1c8097",
              modelId: "tourism-accommodation/accommodation"
            },
            cateringBreakfast: 0,
            cateringLunch: 0,
            cateringPackedLunch: 0,
            cateringDinner: 0,
            realWorldDuration: 1,
            realWorldInterval: "2",
            startIndex: 1,
            customServices: []
          },
          {
            modelId: "tourism/itinerary-day",
            id: "61b88bd5e6465a728b1df527",
            title: "ca. 37 km, Islandpferde",
            description:
              "Auf abgeschiedenen Wegen radeln wir gen Norden zu einer Pferdefarm und besuchen dort die grasenden Islandpferde. Wir queren den Tidan-Fluss und erreichen die beschauliche Ortschaft Sandhem, wo wir eine Rast am Sandhemssjön-See einlegen. Ein Sprung in den See lohnt sich. Gemütlich radeln wir entlang des Flusses zurück zum Hotel.",
            images: [],
            accommodation: {
              id: "61a7398bb7ab9854cc1c8097",
              modelId: "tourism-accommodation/accommodation"
            },
            cateringBreakfast: 0,
            cateringLunch: 0,
            cateringPackedLunch: 0,
            cateringDinner: 0,
            realWorldDuration: 1,
            realWorldInterval: "3",
            startIndex: 2,
            customServices: []
          },
          {
            modelId: "tourism/itinerary-day",
            id: "61b88bd5e6465a728b1df528",
            title: "ca. 57 km, Hökensås",
            description:
              "Wir fahren durch behagliche Bauernlandschaften mit ihren typischen Schwedenhäusern und queren das Naturschutzgebiet Hökensås, das eine ganz besondere Atmosphäre versprüht. Auf dem Rückweg kehren wir in eine kleine Molkerei ein und können im hauseigenen Garten-Café die Erzeugnisse vom Bauern genießen.",
            images: [],
            accommodation: {
              id: "61a7398bb7ab9854cc1c8097",
              modelId: "tourism-accommodation/accommodation"
            },
            cateringBreakfast: 0,
            cateringLunch: 0,
            cateringPackedLunch: 0,
            cateringDinner: 0,
            realWorldDuration: 1,
            realWorldInterval: "4",
            startIndex: 3,
            customServices: []
          },
          {
            modelId: "tourism/itinerary-day",
            id: "61b88bd5e6465a728b1df529",
            title: "ca. 19 km, Kanufahrt",
            description:
              "Mit unseren Rädern fahren wir zur Anlegestelle an der Brücke südlich von Mullsjö. Nach einer kurzen Anweisung paddeln wir mit den Kanus stromabwärts auf dem Tidan-Fluss und bestaunen unter anderem die kulturhistorischen Mühlwehre. Von der Anlegestelle radeln wir zurück zum Hotel (Kanufahrt: ca. 3-4 Stunden). Am Abend haben wir die Gelegenheit, auf Elch-Safari zu gehen (fakultativ).",
            images: [],
            accommodation: {
              id: "61a7398bb7ab9854cc1c8097",
              modelId: "tourism-accommodation/accommodation"
            },
            cateringBreakfast: 0,
            cateringLunch: 0,
            cateringPackedLunch: 0,
            cateringDinner: 0,
            realWorldDuration: 1,
            realWorldInterval: "5",
            startIndex: 4,
            customServices: []
          },
          {
            modelId: "tourism/itinerary-day",
            id: "61b88bd5e6465a728b1df52a",
            title: "ca. 60 km, Kunst und Kultur",
            description:
              "Auf einsamen Wegen radeln wir zur Kirche von Habo, eine der schönsten in Schweden. Sie ist ganz aus Holz und beherbergt kunstvolle Schnitzereien im Innenbereich. Unterwegs fahren wir am Stråkensee vorbei und genießen spektakuläre Ausblicke auf die Seenlandschaft. Wir besuchen das einzigartige Kulturzentrum Gunillaberg, wo sich Natur und Kunst vermischen.",
            images: [],
            accommodation: {
              id: "61a7398bb7ab9854cc1c8097",
              modelId: "tourism-accommodation/accommodation"
            },
            cateringBreakfast: 0,
            cateringLunch: 0,
            cateringPackedLunch: 0,
            cateringDinner: 0,
            realWorldDuration: 1,
            realWorldInterval: "6",
            startIndex: 5,
            customServices: []
          },
          {
            modelId: "tourism/itinerary-day",
            id: "61b88bd5e6465a728b1df52b",
            title: "Freier Tag",
            description:
              "Einfach mal abschalten, oder doch eine kurze Radtour nördlich von Mullsjö und in den nahegelegenen Seen ein erfrischendes Bad genießen?",
            images: [],
            accommodation: {
              id: "61a7398bb7ab9854cc1c8097",
              modelId: "tourism-accommodation/accommodation"
            },
            cateringBreakfast: 0,
            cateringLunch: 0,
            cateringPackedLunch: 0,
            cateringDinner: 0,
            realWorldDuration: 1,
            realWorldInterval: "7",
            startIndex: 6,
            customServices: []
          },
          {
            modelId: "tourism/itinerary-day",
            id: "61b88bd5e6465a728b1df52c",
            title: "Hej då Sverige",
            description: "Transfer zum Flughafen und Rückflug.",
            images: [],
            accommodation: {
              id: "61a7398bb7ab9854cc1c8097",
              modelId: "tourism-accommodation/accommodation"
            },
            cateringBreakfast: 0,
            cateringLunch: 0,
            cateringPackedLunch: 0,
            cateringDinner: 0,
            realWorldDuration: 1,
            realWorldInterval: "8",
            startIndex: 7,
            customServices: []
          }
        ],
        accommodationList: [
          {
            modelId: "wikinger/accommodation-list",
            id: "61b88bd5e6465a728b1df52d",
            accommodation: {
              id: "61a7398bb7ab9854cc1c8097",
              modelId: "tourism-accommodation/accommodation"
            },
            variant: false
          }
        ],
        tourCharacter:
          "Die 5 Radetappen zwischen 19 und 60 km führen durch flaches und teilweise hügeliges Gelände mit gemäßigten Anstiegen. Wir nutzen vorwiegend asphaltierte Radwege sowie verkehrsarme Landstraßen und Waldwege mit festem Untergrund.",
        label: "5220R Standard",
        individualTrip: false,
        excludedServicesCombined: [],
        includedServicesCombined: [
          {
            modelId: "tourism/service",
            createdAt: "2021-09-20T09:04:15+00:00",
            updatedAt: "2021-09-20T09:04:15+00:00",
            watchers: [],
            tags: [],
            executedWorkflows: [],
            id: "61484e8f9e3f3038e54115fd",
            title:
              "Flug mit Lufthansa, Eurowings oder SAS Scandinavian Airlines in der Economyclass nach Jönköping oder Göteborg und zurück",
            publish: true
          },
          {
            modelId: "tourism/service",
            createdAt: "2021-09-20T09:04:02+00:00",
            updatedAt: "2021-09-20T09:04:02+00:00",
            watchers: [],
            tags: [],
            executedWorkflows: [],
            id: "61484e829e3f3038e54113f6",
            title: "Transfers in Schweden",
            publish: true
          },
          {
            modelId: "tourism/service",
            createdAt: "2021-09-20T08:59:53+00:00",
            updatedAt: "2021-09-20T08:59:53+00:00",
            watchers: [],
            tags: [],
            executedWorkflows: [],
            id: "61484d899e3f3038e540dd60",
            title: "7 Übernachtungen im Doppelzimmer mit Bad oder Dusche/WC",
            publish: true
          },
          {
            modelId: "tourism/service",
            createdAt: "2021-09-20T08:59:54+00:00",
            updatedAt: "2021-09-20T08:59:54+00:00",
            watchers: [],
            tags: [],
            executedWorkflows: [],
            id: "61484d8a9e3f3038e540dda5",
            title: "Halbpension",
            publish: true
          },
          {
            modelId: "tourism/service",
            createdAt: "2021-09-20T09:00:46+00:00",
            updatedAt: "2021-09-20T09:00:46+00:00",
            watchers: [],
            tags: [],
            executedWorkflows: [],
            id: "61484dbe9e3f3038e540eb73",
            title: "Programm wie beschrieben (5 geführte Radtouren)",
            publish: true
          },
          {
            modelId: "tourism/service",
            createdAt: "2021-09-20T09:04:15+00:00",
            updatedAt: "2021-09-20T09:04:15+00:00",
            watchers: [],
            tags: [],
            executedWorkflows: [],
            id: "61484e8f9e3f3038e54115fe",
            title: "Kanu-Tour an Tag 5",
            publish: true
          },
          {
            modelId: "tourism/service",
            createdAt: "2021-09-20T09:04:15+00:00",
            updatedAt: "2021-09-20T09:04:15+00:00",
            watchers: [],
            tags: [],
            executedWorkflows: [],
            id: "61484e8f9e3f3038e54115ff",
            title: "Eintritt Gunillaberg an Tag 6",
            publish: true
          },
          {
            modelId: "tourism/service",
            createdAt: "2021-09-20T09:00:38+00:00",
            updatedAt: "2021-09-20T09:00:38+00:00",
            watchers: [],
            tags: [],
            executedWorkflows: [],
            id: "61484db69e3f3038e540e8b1",
            title:
              "Radmiete (7-Gang-Tourenrad oder 21-Gang-Trekkingrad und Wikinger-Gepäcktasche)",
            publish: true
          },
          {
            modelId: "tourism/service",
            createdAt: "2021-09-20T08:59:18+00:00",
            updatedAt: "2021-09-20T08:59:18+00:00",
            watchers: [],
            tags: [],
            executedWorkflows: [],
            id: "61484d669e3f3038e540cd62",
            title:
              "Immer für dich da: deutschsprachige, qualifizierte Wikinger-Reiseleitung",
            publish: true
          }
        ]
      },
      settings: {
        modelId: "tourism-order/frontend-booking-form-settings",
        id: "607fd96ac5f2e81bdd244da9",
        participantCategory: "adult-child",
        bookingAction: "book",
        requestAction: "request",
        participantAdditionalFields: ["note"],
        finalRequirements: [
          {
            modelId: "tourism-order/final-requirement",
            id: "6131e092e80324074a4833ba",
            property: "agb",
            title: "<p>Ich akzeptiere die AGB</p>",
            required: true,
            checked: false,
            case: "boths",
            notForAffiliates: false,
            locale: "de"
          },
          {
            modelId: "tourism-order/final-requirement",
            id: "6131e092e80324074a4833bb",
            agreement: "allowEmailCampaign",
            title: "<p>Newsletter möchte ich haben</p>",
            required: false,
            checked: false,
            case: "boths",
            notForAffiliates: false,
            locale: "de"
          }
        ],
        ignoreEntryRequirementCountries: [],
        showPricePerPerson: true,
        showImageInSummary: false,
        showSeasonPrices: true,
        hideIncludedServices: false,
        enableRoomWishField: "never-show",
        showCabinClassChoice: false,
        flightBookingNotice: "<p>Die Flugzeiten sind nicht final. Bla bla</p>",
        saveBookingRemarkInInternalNote: false,
        allowVoucherCodesRedemption: false
      },
      requestData: {
        _locale: "de"
      },
      journey: {
        modelId: "tourism/journey",
        updatedAt: "2021-12-13T16:38:39+00:00",
        watchers: [],
        tags: [],
        executedWorkflows: [],
        legacyImportId: "5220R",
        id: "61a73a890bb4432cce5b6743",
        archived: false,
        startDate: "2022-07-14T00:00:00+00:00",
        endDate: "2022-07-14T00:00:00+00:00",
        journeyNumber: "5220R",
        tour: {
          id: "61483bc631592329b86b57cd",
          modelId: "tourism/tour"
        },
        itinerary: {
          id: "61a73a2fa137610f305f0ec8",
          modelId: "tourism/itinerary"
        },
        hidden: false,
        type: "default",
        name: {
          de: "Standard"
        },
        publish: true,
        categories: [
          {
            id: "61483bb1853a0958e4610f76",
            modelId: "tourism/journey-category"
          }
        ],
        countries: [
          {
            id: "6046790d0a545a6e3229337d",
            modelId: "tourism/country"
          }
        ],
        regions: [
          {
            id: "61483b915132311c9946cc61",
            modelId: "tourism/region"
          }
        ],
        continents: [],
        tourNumber: "5220R",
        title: {
          de: "Radeln im Naturparadies Südschweden"
        },
        organization: {
          id: "607fd96ac5f2e81bdd244d82",
          modelId: "organization/organization"
        },
        websites: [
          {
            id: "6086d5938cded6403e5248f2",
            modelId: "frontend/website"
          }
        ],
        locales: ["de"],
        hasMarginTax: false,
        minBookableParticipants: 1,
        isTravelable: true,
        cheapestHasDiscount: false,
        displayInSearch: true,
        boost: 1,
        accommodations: [],
        agenciesAllowed: [],
        agenciesNotAllowed: [],
        cheapestOption: {
          id: "61a74038a9803913f01c6ded",
          modelId: "tourism-journey/occupancy-choice"
        },
        cheapestOptionRawPrice: {
          amount: 152500,
          currency: "EUR"
        },
        cheapestOptionPrice: {
          amount: 152500,
          currency: "EUR"
        },
        cheapestOptionRoomLabel:
          "Unterbringung im Zweibettzimmer (2er-Belegung) mit Bad oder Dusche/WC Laut Programm",
        cheapestOptionFare: {
          id: "61a74015a9803913f01c42f2",
          modelId: "tourism-room/fare"
        },
        requestable: true,
        bookable: false,
        canWaitList: false,
        canPreBook: false,
        additionalServices: [],
        occupancyChoices: [
          {
            id: "61a74038a9803913f01c6df0",
            modelId: "tourism-journey/occupancy-choice"
          },
          {
            id: "61a74038a9803913f01c6ded",
            modelId: "tourism-journey/occupancy-choice"
          },
          {
            id: "61a74038a9803913f01c6dea",
            modelId: "tourism-journey/occupancy-choice"
          }
        ],
        crsApplicationsCombined: [
          {
            id: "607fd96ac5f2e81bdd244d82",
            modelId: "organization/organization"
          },
          {
            id: "607fd96ac5f2e81bdd244d82",
            modelId: "organization/organization"
          },
          {
            id: "607fd96ac5f2e81bdd244d82",
            modelId: "organization/organization"
          },
          {
            id: "607fd96ac5f2e81bdd244d82",
            modelId: "organization/organization"
          }
        ],
        guidesLink: [],
        guideIntroduction: [],
        operationManagers: [],
        productManagers: [],
        flightManagers: [],
        calculatedPrice: false,
        smallGroup: [],
        state: "free",
        freeParticipants: [],
        freeRooms: [],
        bookingStatus: {
          modelId: "order/booking-status",
          booked: 0,
          option: 0,
          reserved: 0,
          cancelled: 0,
          notBooked: 0,
          preBooked: 0,
          queue: 0
        },
        flights: [],
        difficulty: ["12R"],
        individualJourney: false,
        calculations: []
      }
    },
    journeyTitle: "Radeln im Naturparadies Südschweden",
    journeySubtitle: "Untertitel der Reise"
  },
  fields: {},
  renderers: {},
  modal: false
};

const produktyBaza = [
    {
        id: "drabina-alu-1-cz",
        dzial: 1,
        podkategoria: 1,
        gabaryt: true,
        nazwa: "Drabina ALUMINIOWA uniwersalna 1-częściowa",
        zdjecie: "assets/products/Drabina ALUMINIOWA 1-czesciowa.png",
        wariantyTekst: "9 Wariantów",
        opisLista: [
            "Wysokiej jakości <strong>drabina aluminiowa</strong> oparta na mocnych profilach.",
            "Lekka, łatwa w transporcie i obsłudze.",
            "Wyposażona w antypoślizgowe stopki zapewniające stabilność."
        ],
        legenda: [
            "A – ilość stopni",
            "B – max. wysokość drabiny [mm]",
            "C – max. wysokość robocza [mm]",
            "D – masa drabiny [kg]",
            "E – po złożeniu do przewiezienia [mm]"
        ],
        tabelaNaglowki: ["Kod towaru", "A", "B", "C", "D"],
        tabelaWiersze: [
            ["DRAALUN-107", "7", "1920", "2940", "3,10"],
            ["DRAALUN-108", "8", "2130", "3150", "3,40"],
            ["DRAALUN-109", "9", "2390", "3450", "3,80"],
            ["DRAALUN-110", "10", "2650", "3720", "4,30"],
            ["DRAALUN-111", "11", "2910", "3920", "4,70"],
            ["DRAALUN-112", "12", "3180", "4210", "5,40"],
            ["DRAALUN-113", "13", "3450", "4450", "6,00"],
            ["DRAALUN-114", "14", "3710", "4710", "6,40"],
            ["DRAALUN-116", "16", "4250", "5210", "8,90"],
            ["DRAALUN-118", "18", "4790", "5750", "10,00"]
        ]
    },
    {
        id: "drabina-alu-2-cz",
        dzial: 1,
        podkategoria: 1,
        gabaryt: true,
        nazwa: "Drabina ALUMINIOWA uniwersalna 2-częściowa",
        zdjecie: "assets/products/Drabina ALUMINIOWA 2-czesciowa.png",
        wariantyTekst: "5 Wariantów",
        opisLista: [
            "Funkcjonalna drabina dwuelementowa.",
            "Możliwość używania jako drabina przystawna lub rozsuwana."
        ],
        legenda: [
            "A – ilość stopni",
            "B – max. wysokość drabiny [mm]",
            "C – max. wysokość robocza [mm]",
            "D – masa drabiny [kg]",
            "E – po złożeniu do przewiezienia [mm]"
        ],
        tabelaNaglowki: ["Kod towaru", "A", "B", "C", "D", "E"],
        tabelaWiersze: [
            ["DRAALUN-207", "7", "3170", "4190", "7,30", "1850"],
            ["DRAALUN-209", "9", "3970", "4960", "9,20", "2380"],
            ["DRAALUN-210", "10", "4490", "5450", "10,00", "2640"],
            ["DRAALUN-211", "11", "5030", "5980", "10,70", "2910"],
            ["DRAALUN-213", "13", "6090", "6760", "15,30", "3440"]
        ]
    },
    {
        id: "drabina-alu-3-cz",
        dzial: 1,
        podkategoria: 1,
        gabaryt: true,
        badge: "Bestseller",
        nazwa: "Drabina ALUMINIOWA uniwersalna 3-częściowa",
        zdjecie: "assets/products/Drabina ALUMINIOWA 3-czesciowa.png",
        wariantyTekst: "11 Wariantów",
        opisLista: [
            "Najbardziej wszechstronna <strong>drabina 3-częściowa</strong>.",
            "Możliwość ustawienia jako drabina wolnostojąca, przystawna lub z wysuniętym trzecim elementem.",
            "Posiada szeroki stabilizator poprzeczny."
        ],
        legenda: [
            "A – ilość stopni",
            "B – max. wysokość drabiny [mm]",
            "C – max. wysokość robocza [mm]",
            "D – masa drabiny [kg]",
            "E – po złożeniu do przewiezienia [mm]"
        ],
        tabelaNaglowki: ["Kod towaru", "A", "B", "C", "D", "E"],
        tabelaWiersze: [
            ["DRAALUN-306", "6", "3710", "4440", "9,60", "1600"],
            ["DRAALUN-307", "7", "4230", "5190", "10,70", "1850"],
            ["DRAALUN-308", "8", "4770", "5720", "12,20", "2140"],
            ["DRAALUN-309", "9", "5300", "6250", "14,40", "2380"],
            ["DRAALUN-310", "10", "5830", "6740", "14,70", "2640"],
            ["DRAALUN-311", "11", "6360", "7240", "16,00", "2910"],
            ["DRAALUN-312", "12", "7140", "7990", "21,00", "3170"],
            ["DRAALUN-313", "13", "7930", "8760", "22,50", "3440"],
            ["DRAALUN-314", "14", "8720", "9520", "25,00", "3700"],
            ["DRAALUN-315", "15", "10300", "10750", "27,50", "3960"],
            ["DRAALUN-316", "16", "11100", "11520", "30,00", "4220"]
        ]
    },
    {
        id: "drabina-alu-profi",
        dzial: 1,
        podkategoria: 1,
        gabaryt: true,
        badge: "Premium",
        nazwa: "Drabina ALUMINIOWA PROFI",
        zdjecie: "assets/products/Drabina ALUMINIOWA PROFI.png",
        wariantyTekst: "6 Wariantów",
        opisLista: [
            "Drabina wolnostojąca jednostronna.",
            "Szerokie na 80 mm stopnie ze specjalnymi karbami antypoślizgowymi.",
            "Wysoki na 600 mm pałąk zabezpieczający przed upadkiem.",
            "Duży, bezpieczny podest roboczy o wymiarach: 25x25 cm.",
            "<strong class='text-red-600 uppercase'>Obciążenie do 150 kg</strong>",
            "<span class='font-black text-blue-800'>PN</span> Zgodne z normą <em class='text-red-500 font-medium'>EN131</em>"
        ],
        legenda: [
            "A – ilość stopni",
            "B – wysokość platformy [m]",
            "C – max. wysokość robocza [m]",
            "D – masa drabiny [kg]",
            "E – po złożeniu do przewiezienia [m]"
        ],
        tabelaNaglowki: ["Kod towaru", "A", "B", "C", "D", "E"],
        tabelaWiersze: [
            ["DRAAL-UC3", "3", "0,54", "2,54", "3,20", "1,21"],
            ["DRAAL-UC4", "4", "0,75", "2,75", "3,70", "1,45"],
            ["DRAAL-UC5", "5", "0,97", "2,97", "4,30", "1,68"],
            ["DRAAL-UC6", "6", "1,19", "3,19", "5,10", "1,91"],
            ["DRAAL-UC7", "7", "1,40", "3,40", "5,80", "2,15"],
            ["DRAAL-UC8", "8", "1,62", "3,62", "6,60", "2,37"]
        ]
    },
    {
        id: "drabina-alu-domowa",
        dzial: 1,
        podkategoria: 1,
        gabaryt: true,
        nazwa: "Drabina ALUMINIOWA domowa",
        zdjecie: "assets/products/Drabina ALUMINIOWA domowa.png",
        wariantyTekst: "6 Wariantów",
        opisLista: [
            "Lekka drabina domowa jednostronna.",
            "Idealna do prac porządkowych i remontowych."
        ],
        legenda: [
            "A – ilość stopni",
            "B – wysokość platformy [mm]",
            "C – max. wysokość robocza [mm]"
        ],
        tabelaNaglowki: ["Kod towaru", "A", "B", "C"],
        tabelaWiersze: [
            ["DRAALDO3", "3", "600", "1200"],
            ["DRAALDO4", "4", "800", "1500"],
            ["DRAALDO5", "5", "1000", "1700"],
            ["DRAALDO6", "6", "1200", "1900"],
            ["DRAALDO7", "7", "1400", "2200"],
            ["DRAALDO8", "8", "1600", "2400"]
        ]
    },
    {
        id: "drabina-alu-obustronna",
        dzial: 1,
        podkategoria: 1,
        gabaryt: true,
        nazwa: "Drabina aluminiowa OBUSTRONNA",
        zdjecie: "assets/products/Drabina aluminiowa OBUSTRONNA.png",
        wariantyTekst: "5 Wariantów",
        opisLista: [
            "Drabina wolnostojąca ze stopniami po obu stronach.",
            "Trwałe pasy zabezpieczające przed rozsunięciem."
        ],
        legenda: [
            "A – ilość stopni",
            "B – wysokość platformy [mm]",
            "C – max. wysokość robocza [mm]",
            "D – masa drabiny [kg]",
            "E – po złożeniu do przewiezienia [mm]"
        ],
        tabelaNaglowki: ["Kod towaru", "A", "B", "C"],
        tabelaWiersze: [
            ["DRAALOB2", "2", "400", "400"],
            ["DRAALOB3", "3", "600", "700"],
            ["DRAALOB4", "4", "800", "900"],
            ["DRAALOB5", "5", "1000", "1100"],
            ["DRAALOB6", "6", "1300", "1400"]
        ]
    },
    {
        id: "drabinka-stalowa-minifero",
        dzial: 1,
        podkategoria: 1,
        nazwa: "Drabinka stalowa rozkładana MINIFERO",
        zdjecie: "assets/products/Drabinka stalowa rozkladana MINIFERO.png",
        wariantyTekst: "2 Warianty",
        opisLista: [
            "Wytrzymała, kompaktowa drabinka stalowa.",
            "Szerokie, wygodne stopnie."
        ],
        legenda: [
            "A – ilość stopni"
        ],
        tabelaNaglowki: ["Kod towaru", "A"],
        tabelaWiersze: [
            ["DRAAL-ST-2", "2"],
            ["DRAAL-ST-3", "3"]
        ]
    },
    {
        id: "rusztowanie-aluminiowe-2x7",
        dzial: 1,
        podkategoria: 1,
        gabaryt: true,
        nazwa: "Aluminiowe rusztowanie drabinowe 2x7",
        zdjecie: "assets/products/Aluminiowe rusztowanie drabinowe 2x7.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Kompaktowe rusztowanie opierające się na dwóch drabinkach.",
            "Szybki montaż i demontaż, stabilny podest roboczy."
        ],
        legenda: [
            "A – ilość stopni"
        ],
        tabelaNaglowki: ["Kod towaru", "A"],
        tabelaWiersze: [
            ["DRAAL-R-207", "2 x 7"]
        ]
    },
    {
        id: "drabinka-warsztatowa",
        dzial: 1,
        podkategoria: 1,
        badge: "Nowość",
        nazwa: "Drabinka warsztatowa",
        zdjecie: "assets/products/Drabinka warsztatowa.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Składana, dwustopniowa drabinka warsztatowa.",
            "Powierzchnia antypoślizgowa na stopniach po obu stronach.",
            "Nóżki antypoślizgowe.",
            "Utrzyma ciężar <strong>do 150 kg</strong>."
        ],
        tabelaNaglowki: ["Kod towaru"],
        tabelaWiersze: [
            ["DRAWAR"]
        ]
    },
    {
        id: "drabina-z-podestem",
        dzial: 1,
        podkategoria: 1,
        gabaryt: true,
        nazwa: "Drabina uniwersalna + podest w komplecie",
        zdjecie: "assets/products/Drabina uniwersalna + podest w komplecie.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Łamana drabina przegubowa z dołączonym, bezpiecznym podestem.",
            "Możliwość użycia w różnych konfiguracjach (np. jako stół warsztatowy)."
        ],
        tabelaNaglowki: ["Kod towaru", "Ilość stopni"],
        tabelaWiersze: [
            ["DRAAUN-403", "12"]
        ]
    },
    {
        id: "drabina-drewniana",
        dzial: 1,
        podkategoria: 1,
        gabaryt: true,
        nazwa: "Drabina DREWNIANA",
        zdjecie: "assets/products/Drabina DREWNIANA.png",
        wariantyTekst: "8 Wariantów",
        opisLista: [
            "Klasyczna, dwustronna <strong>drabina drewniana</strong> (tzw. malarska).",
            "Zabezpieczona stalowym łańcuszkiem przed nadmiernym rozstawieniem.",
            "Masywne, ocynkowane zawiasy."
        ],
        tabelaNaglowki: ["Kod towaru", "Ilość stopni", "Wysokość [mm]"],
        tabelaWiersze: [
            ["DRADR-3", "3", "950"],
            ["DRADR-4", "4", "1240"],
            ["DRADR-5", "5", "1530"],
            ["DRADR-6", "6", "1820"],
            ["DRADR-7", "7", "2110"],
            ["DRADR-8", "8", "2400"],
            ["DRADR-9", "9", "2640"],
            ["DRADR10", "10", "2940"]
        ]
    },
    {
        id: "zawias-hak-drewniana",
        dzial: 1,
        podkategoria: 1,
        nazwa: "Zawias z hakiem do drabiny drewnianej",
        zdjecie: "assets/products/Zawias z hakiem do drabiny drewnianej.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Wytrzymały stalowy zawias montażowy."
        ],
        tabelaNaglowki: ["Kod towaru"],
        tabelaWiersze: [
            ["DRAD-R-ZAW"]
        ]
    },
    {
        id: "polka-do-drabiny",
        dzial: 1,
        podkategoria: 1,
        nazwa: "Półka do drabiny domowej",
        zdjecie: "assets/products/Polka do drabiny domowej.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Wygodna nadstawka ułatwiająca organizację narzędzi na wysokości."
        ],
        tabelaNaglowki: ["Kod towaru"],
        tabelaWiersze: [
            ["DRA-P"]
        ]
    },
    {
        id: "kobylka-titan",
        dzial: 1,
        podkategoria: 1,
        badge: "Nowość",
        nazwa: "Kobyłka warsztatowa TITAN STAND",
        zdjecie: "assets/products/Kobylka warsztatowa TITAN STAND.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Maksymalny udźwig: <strong>175 kg</strong>.",
            "Górna krawędź posiada zintegrowaną linijkę oraz żłobienie ułatwiające cięcie rur i prętów.",
            "Wyposażona w elastyczne, antypoślizgowe nóżki zapobiegające wibracjom i przemieszczaniu."
        ],
        tabelaNaglowki: ["Kod towaru", "Wysokość robocza [cm]", "Wymiary [mm]", "Ciężar [kg]"],
        tabelaWiersze: [
            ["KOBWAR", "77", "580 x 415 x 770", "2,5"]
        ]
    },
    {
        id: "poprzeczka-stabilizatora",
        dzial: 1,
        podkategoria: 1,
        nazwa: "Poprzeczka stabilizatora do drabiny",
        zdjecie: "assets/products/Poprzeczka stabilizatora do drabiny.png",
        wariantyTekst: "2 Warianty",
        opisLista: [
            "Zwiększa stabilność i bezpieczeństwo pracy na drabinie aluminiowej."
        ],
        tabelaNaglowki: ["Kod towaru", "Długość [mm]"],
        tabelaWiersze: [
            ["DRAALU-P-080", "800"],
            ["DRAALU-P-110", "1100"]
        ]
    }, {
        id: "szpachla-nierdzewna-al-gumowy",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Szpachla nierdzewna AL. 60 mm uchwyt gumowy",
        zdjecie: "assets/products/Szpachla nierdzewna AL 60 mm uchwyt gumowy.png",
        wariantyTekst: "6 Wariantów",
        opisLista: [
            "Solidna szpachla nierdzewna z aluminiowym profilem usztywniającym.",
            "Wygodny, ergonomiczny uchwyt gumowy zapewniający pewny chwyt."
        ],
        tabelaNaglowki: ["Kod towaru", "Rodzaj [mm]"],
        tabelaWiersze: [
            ["SZPGP150", "150"],
            ["SZPGP200", "200"],
            ["SZPGP250", "250"],
            ["SZPGP350", "350"],
            ["SZPGP450", "450"],
            ["SZPGP600", "600"]
        ]
    },
    {
        id: "szpachla-kwasoodporna-zeby",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Szpachla z rączką plastikową ze stali nierdzewnej kwasoodpornej",
        zdjecie: "assets/products/Szpachla z rączką plastikową ze stali nierdzewnej kwasoodpornej.png",
        wariantyTekst: "6 Wariantów",
        opisLista: [
            "Specjalistyczna wersja <strong>z zębami do kleju</strong>.",
            "Wykonana z odpornej stali nierdzewnej kwasoodpornej.",
            "Trwały, plastikowy uchwyt z otworem do zawieszenia."
        ],
        tabelaNaglowki: ["Kod towaru", "Rodzaj [mm]"],
        tabelaWiersze: [
            ["SZPZ150/-6", "150 / 6"],
            ["SZPZ150/-8", "150 / 8"],
            ["SZPZ150/10", "150 / 10"],
            ["SZPZ250/-6", "250 / 6"],
            ["SZPZ250/-8", "250 / 8"],
            ["SZPZ250/10", "250 / 10"]
        ]
    },
    {
        id: "szpachle-fugi-silikonowe",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Szpachle do fug silikonowych",
        zdjecie: "assets/products/Szpachle do fug silikonowych.png",
        wariantyTekst: "Zestaw 4 szt.",
        opisLista: [
            "Praktyczny komplet elastycznych profili do fugowania.",
            "Zapewniają równe i gładkie wykończenie spoin silikonowych o różnych kształtach."
        ],
        tabelaNaglowki: ["Kod towaru", "Ilość szpachelek"],
        tabelaWiersze: [
            ["SZPFS4", "4"]
        ]
    },
    {
        id: "szpachelki-silikon-bez-obcinaka",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Szpachelki do silikonu bez obcinaka",
        zdjecie: "assets/products/Szpachelki do silikonu bez obcinaka.png",
        wariantyTekst: "Zestaw 4 szt.",
        opisLista: [
            "Zestaw ułatwiający profesjonalne nakładanie i profilowanie silikonu.",
            "Różne rozmiary i kąty pozwalają na precyzyjne dopasowanie do każdej szczeliny."
        ],
        tabelaNaglowki: ["Kod towaru", "Ilość szpachelek"],
        tabelaWiersze: [
            ["SZPFS4-G", "4"]
        ]
    },
    {
        id: "szpachelki-silikon-z-obcinakiem",
        dzial: 1,
        podkategoria: 2,
        badge: "Polecane",
        nazwa: "Szpachelki do silikonu z obcinakiem 3+1",
        zdjecie: "assets/products/Szpachelki do silikonu z obcinakiem.png",
        wariantyTekst: "Zestaw 4 szt.",
        opisLista: [
            "Kompleksowy zestaw narzędzi (3 profilowane szpachelki + 1 zintegrowany obcinak).",
            "Wielofunkcyjny obcinak ułatwia usuwanie starych fug oraz precyzyjne otwieranie kartuszy."
        ],
        tabelaNaglowki: ["Kod towaru", "Ilość szpachelek"],
        tabelaWiersze: [
            ["SZPFS3", "3 + 1"]
        ]
    },
    {
        id: "szpachla-do-fugowania",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Szpachla do fugowania",
        zdjecie: "assets/products/Szpachla do fugowania.png",
        wariantyTekst: "4 Warianty",
        opisLista: [
            "Klasyczna szpachla z czarną gumą, idealna do dokładnego wypełniania spoin.",
            "Wyposażona w solidny, ergonomiczny uchwyt drewniany."
        ],
        tabelaNaglowki: ["Kod towaru", "Rodzaj [mm]"],
        tabelaWiersze: [
            ["SZPF150", "150"],
            ["SZPF200", "200"],
            ["SZPF250", "250"],
            ["SZPF300", "300"]
        ]
    },
    {
        id: "szpachla-profi",
        dzial: 1,
        podkategoria: 2,
        badge: "Bestseller",
        nazwa: "Szpachla z rączką plastikową nierdzewna PROFI",
        zdjecie: "assets/products/Szpachla z rączką plastikową.png",
        wariantyTekst: "4 Warianty",
        opisLista: [
            "Część robocza wykonana z wysokiej jakości <strong>stali nierdzewnej</strong>.",
            "Wygodny, ergonomiczny uchwyt wykonany z wytrzymałego tworzywa sztucznego."
        ],
        tabelaNaglowki: ["Kod towaru", "Rodzaj [mm]"],
        tabelaWiersze: [
            ["SZPP-40", "40"], ["SZPP-60", "60"], ["SZPP-80", "80"], ["SZPP-100", "100"]
        ]
    },
    {
        id: "szpachla-kwasoodporna",
        dzial: 1,
        podkategoria: 2,
        badge: "Premium",
        nazwa: "Szpachla z rączką plastikową ze stali nierdzewnej kwasoodpornej",
        zdjecie: "assets/products/Szpachla z stali nierdzewnej kwasoodpornej.png",
        wariantyTekst: "9 Wariantów",
        opisLista: [
            "Wykonana z wysokiej jakości <strong>stali nierdzewnej kwasoodpornej</strong>.",
            "Trwały uchwyt z tworzywa sztucznego.",
            "Idealna do prac wymagających odporności na agresywne środowisko chemiczne."
        ],
        tabelaNaglowki: ["Kod towaru", "Rodzaj [mm]"],
        tabelaWiersze: [
            ["SZPN-20", "20"],
            ["SZPN-40", "40"],
            ["SZPN-60", "60"],
            ["SZPN-80", "80"],
            ["SZPN-100", "100"],
            ["super blacha PROFI", ""],
            ["SZPNP-40", "40"],
            ["SZPNP-60", "60"],
            ["SZPNP-80", "80"],
            ["SZPNP-100", "100"]
        ]
    },
    {
        id: "szpachla-kwas-duza",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Szpachla z rączką plastikową ze stali nierdzewnej kwasoodpornej",
        zdjecie: "assets/products/Szpachla ze stali nierdzewnej kwasoodpornej1.png",
        wariantyTekst: "6 Wariantów",
        opisLista: [
            "Wykonana z wysokiej jakości <strong>stali nierdzewnej kwasoodpornej</strong>.",
            "Szeroki profil części roboczej idealny do dużych powierzchni.",
            "Wygodny uchwyt zapewniający stabilne prowadzenie narzędzia."
        ],
        tabelaNaglowki: ["Kod towaru", "Rodzaj [mm]"],
        tabelaWiersze: [
            ["SZPG150", "150"],
            ["SZPG200", "200"],
            ["SZPG250", "250"],
            ["SZPG350", "350"],
            ["SZPG450", "450"],
            ["SZPG600", "600"]
        ]
    },
    {
        id: "szpachle-japonki",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Szpachle japonki 5, 8, 10, 12 cm",
        zdjecie: "assets/products/Szpachle japonki.png",
        wariantyTekst: "2 Warianty",
        opisLista: [
            "Zestaw 4 szpachli o szerokościach: <strong>50, 80, 100 i 120 mm</strong>.",
            "Dostępne w wersji z <strong>elastycznego tworzywa</strong> lub <strong>stali</strong>.",
            "Przeznaczone do precyzyjnego szpachlowania małych powierzchni i trudno dostępnych miejsc."
        ],
        tabelaNaglowki: ["Kod towaru", "Rodzaj"],
        tabelaWiersze: [
            ["SZPJAP-P", "plastikowe"],
            ["SZPJAP-M", "metalowe"]
        ]
    },
];
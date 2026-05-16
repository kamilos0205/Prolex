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
    {
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
        id: "szpachla-6w1",
        dzial: 1,
        podkategoria: 2,
        badge: "Polecane",
        nazwa: "Szpachla WIELOFUNKCYJNA 6w1",
        zdjecie: "assets/products/Szpachla WIELOFUNKCYJNA 6w1.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Narzędzie łączące 6 funkcji w jednym: skrobak, czyszczenie wałków, otwieranie butelek, wyciąganie gwoździ, podważanie puszek, czyszczenie powierzchni wypukłych/wklęsłych.",
            "Wyposażona w ergonomiczny uchwyt dwukomponentowy (2K)."
        ],
        tabelaNaglowki: ["Kod towaru", "Rodzaj"],
        tabelaWiersze: [
            ["SZPW-6", "6 w 1"]
        ]
    },
    {
        id: "kielnia-trapezowa",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Kielnia trapezowa",
        zdjecie: "assets/products/Kielnia trapezowa.png",
        wariantyTekst: "4 Warianty",
        opisLista: [
            "Niezbędne narzędzie murarskie i sztukatorskie z klasycznym, drewnianym uchwytem.",
            "Dostępne wersje ze <strong>stali węglowej</strong> oraz <strong>stali nierdzewnej</strong>."
        ],
        tabelaNaglowki: ["Kod towaru", "Rodzaj [mm]"],
        tabelaWiersze: [
            ["KIE-TZ120", "120-130"],
            ["KIE-TZ190", "180-190"],
            ["ze stali nierdzewnej", ""],
            ["KIE-TZN130", "130"],
            ["KIE-TZN180", "180"]
        ]
    },
    {
        id: "kielnia-sztukatorska-nierdzewna",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Kielnia sztukatorska nierdzewna",
        zdjecie: "assets/products/Kielnia sztukatorska nierdzewna.png",
        wariantyTekst: "3 Warianty",
        opisLista: [
            "Kielnia przeznaczona do precyzyjnych prac wykończeniowych i sztukatorskich.",
            "Część robocza wykonana z wysokiej jakości stali nierdzewnej.",
            "Wygodny, profilowany uchwyt drewniany."
        ],
        tabelaNaglowki: ["Kod towaru", "Rodzaj [mm]"],
        tabelaWiersze: [
            ["KIE-SZTN-50", "50"],
            ["KIE-SZTN-80", "80"],
            ["KIE-SZTN-100", "100"]
        ]
    },
    {
        id: "czerpak-murarski",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Czerpak murarski",
        zdjecie: "assets/products/Czerpak murarski.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Solidny, metalowy czerpak niezbędny na każdej budowie.",
            "Ułatwia nabieranie i precyzyjne nakładanie zaprawy murarskiej.",
            "Posiada wytrzymały drewniany uchwyt z metalowym wzmocnieniem."
        ],
        tabelaNaglowki: ["Kod towaru"],
        tabelaWiersze: [
            ["CZERP-M"]
        ]
    },
    {
        id: "kielnia-trapez-nierdzewna-gumowy-profi",
        dzial: 1,
        podkategoria: 2,
        badge: "Premium",
        nazwa: "Kielnia trapez nierdzewna uchwyt gumowy PROFI",
        zdjecie: "assets/products/Kielnia trapez nierdzewna uchwyt gumowy PROFI.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Profesjonalna kielnia trapezowa wykonana ze stali nierdzewnej.",
            "Wyposażona w innowacyjny uchwyt gumowy z możliwością zawieszenia.",
            "Gwarantuje pewny chwyt i komfort nawet podczas długotrwałej pracy."
        ],
        tabelaNaglowki: ["Kod towaru", "Rodzaj [mm]"],
        tabelaWiersze: [
            ["KIE-TZN180-PRG", "180"]
        ]
    },
    {
        id: "kielnia-sztukatorska-waska-koci-jezyk",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Kielnia sztukatorska wąska Koci Język",
        zdjecie: "assets/products/Kielnia sztukatorska waska Koci Jezyk.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Wąska kielnia typu 'koci język', idealna do spoinowania i miejsc trudnodostępnych.",
            "Ergonomiczny, drewniany uchwyt i wyprofilowany kształt blachy."
        ],
        tabelaNaglowki: ["Kod towaru", "Dł. [mm]"],
        tabelaWiersze: [
            ["KIE-SZT-KJW", "160"]
        ]
    },
    {
        id: "czerpak-gospodarczy-5l",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Czerpak gospodarczy 5L",
        zdjecie: "assets/products/Czerpak gospodarczy 5L.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Pojemny i uniwersalny czerpak o pojemności 5 litrów.",
            "Wykonany z wytrzymałej blachy ocynkowanej, odpornej na uszkodzenia mechaniczne.",
            "Praktyczny uchwyt rurkowy."
        ],
        tabelaNaglowki: ["Kod towaru"],
        tabelaWiersze: [
            ["CZERP-G"]
        ]
    },
    {
        id: "kielnia-trapez-nierdzewna-drewniany-profi-fsc",
        dzial: 1,
        podkategoria: 2,
        badge: "PROFI",
        nazwa: "Kielnia trapez nierdzewna uchwyt drewniany PROFI-FSC",
        zdjecie: "assets/products/Kielnia trapez nierdzewna uchwyt drewniany PROFI-FSC.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Kielnia z wysokogatunkowej stali nierdzewnej dla wymagających rzemieślników.",
            "Wyposażona w certyfikowany uchwyt drewniany FSC."
        ],
        tabelaNaglowki: ["Kod towaru", "Rodzaj [mm]"],
        tabelaWiersze: [
            ["KIE-TZN180-PR", "180"]
        ]
    },
    {
        id: "kielnia-sztukatorska-zewnetrzna",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Kielnia sztukatorska zewnętrzna",
        zdjecie: "assets/products/Kielnia sztukatorska zewnetrzna.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Specjalistyczne narzędzie przeznaczone do precyzyjnego formowania narożników zewnętrznych.",
            "Ułatwia i przyspiesza prace tynkarskie i wykończeniowe."
        ],
        tabelaNaglowki: ["Kod towaru", "Rodzaj"],
        tabelaWiersze: [
            ["KIE-SZTNZ", "zewnętrzna"]
        ]
    },
    {
        id: "skrobak-malarski",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Skrobak malarski",
        zdjecie: "assets/products/Skrobak malarski.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Niezawodne narzędzie do zdzierania starych powłok malarskich, tapet i zanieczyszczeń.",
            "Posiada sztywną klingę i wygodny profilowany uchwyt z tworzywa."
        ],
        tabelaNaglowki: ["Kod towaru", "Rodzaj [mm]"],
        tabelaWiersze: [
            ["SKROBAK-110", "110"]
        ]
    },
    {
        id: "skrobak-z-wymiennym-ostrzem",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Skrobak z wymiennym ostrzem",
        zdjecie: "assets/products/Skrobak z wymiennym ostrzem.png",
        wariantyTekst: "2 Warianty",
        opisLista: [
            "Solidny skrobak z uchwytem z tworzywa sztucznego.",
            "Posiada system łatwej wymiany ostrza."
        ],
        tabelaNaglowki: ["Kod towaru", "Rodzaj"],
        tabelaWiersze: [
            ["SKRW-OST", "ostrze do skrobaka"],
            ["SKRWO", "skrobak z wymiennym ostrzem"]
        ]
    },
    {
        id: "skrobak-do-fug",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Skrobak do fug",
        zdjecie: "assets/products/Skrobak do fug.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Poręczne narzędzie do szybkiego usuwania starych spoin między płytkami.",
            "Wyposażony w zębate ostrze ułatwiające pracę."
        ],
        tabelaNaglowki: ["Kod towaru"],
        tabelaWiersze: [
            ["SKR-FUG"]
        ]
    },
    {
        id: "skrobak-do-fug-wolframowy",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Skrobak do fug wolframowy",
        zdjecie: "assets/products/Skrobak do fug wolframowy.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Skrobak wyposażony w bardzo twarde ostrze z nasypem wolframowym.",
            "Zaprojektowany do usuwania najtwardszych i zaschniętych zapraw fugowych."
        ],
        tabelaNaglowki: ["Kod towaru"],
        tabelaWiersze: [
            ["SKR-FUG-W"]
        ]
    },
    {
        id: "skrobak-do-szyb",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Skrobak do szyb",
        zdjecie: "assets/products/Skrobak do szyb.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Lekki skrobak przeznaczony do czyszczenia szyb i delikatnych powierzchni płaskich.",
            "Szerokość ostrza wynosi 60 mm."
        ],
        tabelaNaglowki: ["Kod towaru", "Szerokość ostrza [mm]"],
        tabelaWiersze: [
            ["SKR-SZ", "60"]
        ]
    },
    {
        id: "skrobak-z-wysuwanym-ostrzem",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Skrobak z wysuwanym ostrzem metalowym",
        zdjecie: "assets/products/Skrobak z wysuwanym ostrzem metalowym.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Kompaktowy skrobak z bezpiecznym, suwakowym systemem chowania ostrza.",
            "Obudowa z tworzywa sztucznego, szerokość ostrza to 39,50 mm."
        ],
        tabelaNaglowki: ["Kod towaru", "Szerokość ostrza [mm]"],
        tabelaWiersze: [
            ["SKRW", "39,50"]
        ]
    },
    {
        id: "kielnia-trojkatna",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Kielnia trójkątna",
        zdjecie: "assets/products/Kielnia trojkatna.png",
        wariantyTekst: "5 Wariantów",
        opisLista: [
            "Klasyczna kielnia trójkątna, niezastąpiona przy pracach murarskich.",
            "Dostępna w wersji ze stali węglowej oraz nierdzewnej."
        ],
        tabelaNaglowki: ["Kod towaru", "Rodzaj [mm]"],
        tabelaWiersze: [
            ["KIE-TK180", "180"],
            ["KIE-TK200", "200"],
            ["KIE-TK220", "220"],
            ["ze stali nierdzewnej", ""],
            ["KIE-TKN180", "180"],
            ["KIE-TKN200", "200"]
        ]
    },
    {
        id: "kielnia-sztukatorska-wewnetrzna",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Kielnia sztukatorska wewnętrzna",
        zdjecie: "assets/products/Kielnia sztukatorska wewnetrzna.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Kielnia kątowa, profilowana pod kątem 90 stopni.",
            "Idealna do równego wykańczania narożników wewnętrznych."
        ],
        tabelaNaglowki: ["Kod towaru", "Rodzaj"],
        tabelaWiersze: [
            ["KIE-SZTNW", "wewnętrzna"]
        ]
    },
    {
        id: "skrobak-malarski-drewniana-raczka",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Skrobak malarski",
        zdjecie: "assets/products/Skrobak malarski drewniana raczka.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Sztywny skrobak malarski ze wzmocnioną częścią roboczą.",
            "Posiada klasyczną, wygodną drewnianą rączkę."
        ],
        tabelaNaglowki: ["Kod towaru", "Rodzaj"],
        tabelaWiersze: [
            ["SKR-RDREW", "drewniana rączka"]
        ]
    },
    {
        id: "kielnia-fugowa",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Kielnia fugowa",
        zdjecie: "assets/products/Kielnia fugowa.png",
        wariantyTekst: "3 Warianty",
        opisLista: [
            "Wąska kielnia (spoinówka) przeznaczona do fugowania cegły i klinkieru.",
            "Część robocza wykonana ze stali sprężystej."
        ],
        tabelaNaglowki: ["Kod towaru", "Rodzaj [mm]"],
        tabelaWiersze: [
            ["KIE-FUG-8", "8"],
            ["KIE-FUG10", "10"],
            ["KIE-FUG12", "12"]
        ]
    },
    {
        id: "paca-kwasoodporna-zeby-plastik",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Paca ze stali nierdzewnej kwasoodpornej z zębami (plastikowa rączka)",
        zdjecie: "assets/products/Paca ze stali nierdzewnej kwasoodpornej z zebami plastikowa raczka.png",
        wariantyTekst: "5 Wariantów",
        opisLista: [
            "Paca do nakładania i rozprowadzania klejów oraz zapraw.",
            "Wykonana ze stali nierdzewnej kwasoodpornej. Zęby po dwóch stronach blachy."
        ],
        tabelaNaglowki: ["Kod towaru", "Wymiary [mm]"],
        tabelaWiersze: [
            ["PACZN270/04", "130 x 270 / 4"],
            ["PACZN270/06", "130 x 270 / 6"],
            ["PACZN270/08", "130 x 270 / 8"],
            ["PACZN270/10", "130 x 270 / 10"],
            ["PACZN270/12", "130 x 270 / 12"]
        ]
    },
    {
        id: "paca-kwasoodporna-zeby-drewno",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Paca ze stali nierdzewnej kwasoodpornej z zębami (drewniana rączka)",
        zdjecie: "assets/products/Paca ze stali nierdzewnej kwasoodpornej z zebami drewniana raczka.png",
        wariantyTekst: "8 Wariantów",
        opisLista: [
            "Paca do kleju wykonana z najwyższej jakości stali kwasoodpornej.",
            "Wydłużone blachy (380, 480 i 580 mm) idealne do dużych formatów płytek.",
            "Klasyczna drewniana rączka."
        ],
        tabelaNaglowki: ["Kod towaru", "Wymiary [mm]"],
        tabelaWiersze: [
            ["PACZN380/06", "130 x 380 / 6"],
            ["PACZN380/08", "130 x 380 / 8"],
            ["PACZN380/10", "130 x 380 / 10"],
            ["PACZN480/06", "130 x 480 / 6"],
            ["PACZN480/08", "130 x 480 / 8"],
            ["PACZN480/10", "130 x 480 / 10"],
            ["PACZN580/06", "130 x 580 / 6"],
            ["PACZN580/08", "130 x 580 / 8"]
        ]
    },
    {
        id: "paca-plastikowa-gladka",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Paca plastikowa gładka",
        zdjecie: "assets/products/Paca plastikowa gladka.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Lekka paca z tworzywa sztucznego z uchwytem.",
            "Sprawdza się przy nakładaniu gładzi i zapraw cienkowarstwowych."
        ],
        tabelaNaglowki: ["Kod towaru", "Wymiary [mm]"],
        tabelaWiersze: [
            ["PACPLGŁ", "130 x 270"]
        ]
    },
    {
        id: "paca-styropianowa-twarda",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Paca styropianowa TWARDA",
        zdjecie: "assets/products/Paca styropianowa TWARDA.png",
        wariantyTekst: "6 Wariantów",
        opisLista: [
            "Zacieraczka wykonana z twardego, zbitego styropianu EPS.",
            "Zwiększona żywotność, idealna do zacierania tynków."
        ],
        tabelaNaglowki: ["Kod towaru", "Wymiary [mm]"],
        tabelaWiersze: [
            ["PACST-270", "130 x 270"],
            ["PACST-320", "160 x 320"],
            ["PACST-450", "130 x 450"],
            ["PACST-600", "130 x 600"],
            ["PACST-750", "130 x 750"],
            ["PACST-900", "130 x 900"]
        ]
    },
    {
        id: "paca-plastikowa-z-filcem",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Paca plastikowa z filcem",
        zdjecie: "assets/products/Paca plastikowa z filcem.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Paca z blatem z tworzywa sztucznego, podbita chłonnym filcem.",
            "Używana do wygładzania i zacierania tynków gipsowych."
        ],
        tabelaNaglowki: ["Kod towaru", "Wymiary [mm]"],
        tabelaWiersze: [
            ["PACPLFIL", "130 x 270"]
        ]
    },
    {
        id: "paca-plastikowa-z-filcem-8mm",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Paca plastikowa z filcem 8 mm",
        zdjecie: "assets/products/Paca plastikowa z filcem 8 mm.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Paca tynkarska podbita grubym, 8-milimetrowym filcem technicznym."
        ],
        tabelaNaglowki: ["Kod towaru", "Wymiary [mm]"],
        tabelaWiersze: [
            ["PACPLFIL/8", "140 x 280"]
        ]
    },
    {
        id: "paca-styropianowa-z-filcem",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Paca styropianowa z filcem",
        zdjecie: "assets/products/Paca styropianowa z filcem.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Ultra lekka paca z twardego styropianu podklejona filcem.",
            "Ułatwia długotrwałe zacieranie powierzchni."
        ],
        tabelaNaglowki: ["Kod towaru", "Wymiary [mm]"],
        tabelaWiersze: [
            ["PACS-270+F", "130 x 270"]
        ]
    },
    {
        id: "paca-kwasoodporna-gladka",
        dzial: 1,
        podkategoria: 2,
        nazwa: "Paca ze stali nierdzewnej kwasoodpornej gładka",
        zdjecie: "assets/products/Paca ze stali nierdzewnej kwasoodpornej gladka.png",
        wariantyTekst: "1 Wariant",
        opisLista: [
            "Gładka blacha z elastycznej, kwasoodpornej stali.",
            "Profilowana rączka z tworzywa sztucznego."
        ],
        tabelaNaglowki: ["Kod towaru", "Wymiary [mm]"],
        tabelaWiersze: [
            ["PACGN270", "130 x 270"]
        ]
    }
];
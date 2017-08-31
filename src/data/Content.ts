import {StatisticCard} from "../models/StatisticCard";
import {PersonData} from "../models/PersonData";

export const StatisticCards: StatisticCard[] = [
  {
    HeaderNumber: 1.7,
    isMln: true,
    FirstText:'klientów z morizon.pl',
    SecondText:'Nasze serwisy odwiedza miesięcznie ok. 1,7 mln użytkowników. Osoby zainteresowane wzięciem kredytu skierujemy bezpośrednio do Ciebie.'
  },
  {
    HeaderNumber: 3500,
    isMln: false,
    FirstText:'biur nieruchomości i deweloperów',
    SecondText:'Współpracujemy z ponad 3500 deweloperami i biurami nieruchomości. To partnerzy, którzy dostarczą Ci klientów zainteresowanych kredytami hipotecznymi.'
  },
  {
    HeaderNumber: 140,
    isMln: false,
    FirstText:'pasjonatów w całej Polsce.pl',
    SecondText:'Nasi eksperci są spełnieniem obietnicy nowej jakości na rynku usług finansowych, dlatego współpracujemy wyłącznie z ludźmi dla których finanse to nie tylko pracą, ale życiowa pasja.'
  }
];

export const PeopleData: PersonData[] = [
  {
    Name:'Michał',
    City: 'Kraków',
    PhotoUrl:'./assets/1-michal-krakow.jpg',
    Reference: 'Zapytaj Michała o referencje',
    Description:'Od ponad 9 lat zajmuję się pośrednictwem finansowym. Doświadczenie zdobywałem pracując w wiodących bankach oraz firmach doradztwa finansowego. Cel jaki sobie stawiam to pomóc Wam w znalezieniu najlepszego rozwiązania. Każdego Klienta traktuje indywidualnie koncentrując się na jego potrzebach. Dokładna analiza finansowa Twojej sytuacji jest kluczem do sukcesu. Przez te lata pracy zaufało mi setki Klientów indywidualnych i dziesiątki firm powierzając mi swoje finanse.'
  },
  {
    Name:'Ania',
    City: 'Wrocław',
    PhotoUrl:'./assets/2-ania-wroclaw.jpg',
    Reference: 'Zapytaj Anie o referencje',
    Description:'Od ponad 9 lat zajmuję się pośrednictwem finansowym. Doświadczenie zdobywałem pracując w wiodących bankach oraz firmach doradztwa finansowego. Cel jaki sobie stawiam to pomóc Wam w znalezieniu najlepszego rozwiązania. Każdego Klienta traktuje indywidualnie koncentrując się na jego potrzebach. Dokładna analiza finansowa Twojej sytuacji jest kluczem do sukcesu. Przez te lata pracy zaufało mi setki Klientów indywidualnych i dziesiątki firm powierzając mi swoje finanse.'
  },
  {
    Name:'Tomek',
    City: 'Warszawa',
    PhotoUrl:'./assets/4-tomek-warszawa.jpg',
    Reference: 'Zapytaj Tomka o referencje',
    Description:'Od ponad 9 lat zajmuję się pośrednictwem finansowym. Doświadczenie zdobywałem pracując w wiodących bankach oraz firmach doradztwa finansowego. Cel jaki sobie stawiam to pomóc Wam w znalezieniu najlepszego rozwiązania. Każdego Klienta traktuje indywidualnie koncentrując się na jego potrzebach. Dokładna analiza finansowa Twojej sytuacji jest kluczem do sukcesu. Przez te lata pracy zaufało mi setki Klientów indywidualnych i dziesiątki firm powierzając mi swoje finanse.'
  },
  {
    Name:'Jacek',
    City: 'Wrocław',
    PhotoUrl:'./assets/5-jacek-wroclaw.png',
    Reference: 'Zapytaj Jacka o referencje',
    Description:'Od ponad 9 lat zajmuję się pośrednictwem finansowym. Doświadczenie zdobywałem pracując w wiodących bankach oraz firmach doradztwa finansowego. Cel jaki sobie stawiam to pomóc Wam w znalezieniu najlepszego rozwiązania. Każdego Klienta traktuje indywidualnie koncentrując się na jego potrzebach. Dokładna analiza finansowa Twojej sytuacji jest kluczem do sukcesu. Przez te lata pracy zaufało mi setki Klientów indywidualnych i dziesiątki firm powierzając mi swoje finanse.'
  },
  {
    Name:'Sebastian',
    City: 'Bydgoszcz',
    PhotoUrl:'./assets/6-sebastian-bydgoszcz.jpg',
    Reference: 'Zapytaj Sebastiana o referencje',
    Description:'Od ponad 9 lat zajmuję się pośrednictwem finansowym. Doświadczenie zdobywałem pracując w wiodących bankach oraz firmach doradztwa finansowego. Cel jaki sobie stawiam to pomóc Wam w znalezieniu najlepszego rozwiązania. Każdego Klienta traktuje indywidualnie koncentrując się na jego potrzebach. Dokładna analiza finansowa Twojej sytuacji jest kluczem do sukcesu. Przez te lata pracy zaufało mi setki Klientów indywidualnych i dziesiątki firm powierzając mi swoje finanse.'
  }
]

export const ContentData = {
  Header: {},
  FirstSegment: {},
  SecondSegment: {
    StatisticCards: StatisticCards
  },
  ThirdSegment: {
    FirstPhotoData:{
      Header:'Uzyskaj dostęp do najlepszych narzędzi',
      Descritpion:'Dzięki naszym rozwiązaniom w prosty sposób sprawdzisz zdolność kredytową swoich klientów, wybierzesz dla nich najlepszą ofertę, a nawet jednym kliknięciem wypełnisz wnioski do banków',
      ButtonText:'WYBRÓBUJ SYSTEM'
    },
    SecondPhotoData:{
      Header:'Zagwarantuj sobie najwyższe stawki',
      Descritpion:'Dzięki dużym obrotom udało nam się wynegocjować atrakcyjne prowizje na kredyty hipoteczne oraz gotówkowe. Pokażemy Ci, ile wynoszą oraz jaki procent prowizji zostanie u Ciebie. Stawiamy na pełną przejrzystość.',
      ButtonText:'POZNAJ STAWKI'
    },
    FinalData:{
      Text: 'morizon finanse to zespół niezależnych doradców, którzy działają na partnerskich zasadach i wspólnie dzielą się sukcesem.',
      ButtonText:'DOŁĄCZ DO NAS'
    },
  },
  FourthSegment:{
    SwiperData:PeopleData,
    Form:{
      Title:'Dołącz do nas już teraz!',
      Placeholders:{
        Name:'Imię i nazwisko',
        PhoneNumber:'Twój numer np. 609 123 456',
        Email: 'Twój email'
      },
      SubmitButton:'DOŁĄCZ DO NAS'
    }
  },
  FifthSegment:{
    Title:'Zostań jednym z nas',
    Description:'W lipcu 2017r. dołączyliśmy do grona spółek notowanych na GPW. Nie byłoby tego sukcesu, gdyby nie 180 świetnych profesjonalistów, którzy codziennie razem z nami zmieniają przyszłość usług pośrednictwa kredytowego. Dołącz do nas i pomóż nam zbudować nową jakość pośrednictwa kredytowego w Polsce.'
  },
  Modals:{
    JoinUs:{
      Title:'Dołącz do nas już teraz!',
      Placeholders:{
        Name:'Imię i nazwisko',
        PhoneNumber:'Twój numer np. 609 123 456',
        Email: 'Twój email'
      },
      SubmitButton:'DOŁĄCZ DO NAS'
    }
  },
  Slide:{
    Title:'Zobacz co o nas mówią',
    Description: 'So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive that my own individuality was now merged in a joint stock company of two;',
    NameAndCity:'— Jacek, Warszawa'
  }

};
/*Dane do kart z segmentu drugiego*/

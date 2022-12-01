import { cardInfo } from "./../types/card";
export const cardsContent: cardInfo[] = [
  {
    type: "band",
    title: { src: "/artists/swell_maps", title: "Swell Maps" },
    image: {
      src: "https://lastfm.freetls.fastly.net/i/u/237x178/20e26f47a8230ede69fdb0c06b208e37.jpg",
      alt: "Swell Maps",
    },
    listeners: 106267,
    info: {
      similar: [
        { title: "Wire", src: "/artists/wire" },
        { title: "The Fall", src: "/artists/the_fall" },
        { title: "Disco Inferno", src: "/artists/disco_inferno" },
      ],
    },
  },
  {
    type: "song",
    title: { src: "/songs/", title: "Winter Lady" },
    duration: 135000,
    info: { scrobbles: 5 },
    listeners: 161360,
    band: { title: "Leonard Cohen", src: "/artists/leonard_cohen" },
    image: {
      src: "https://lastfm.freetls.fastly.net/i/u/300x300/714bb7c07755e002d49f144bfcdfcdc7.jpg",
      alt: "Leonard Cohen",
    },
  },
  {
    type: "album",
    title: { src: "/songs/", title: "Холодные врата" },
    info: { band: { title: "Жарок", src: "/artists/" } },
    listeners: 436,
    tracks: 12,
    band: { title: "Жарок", src: "/artists/" },
    image: {
      src: "https://lastfm.freetls.fastly.net/i/u/300x300/86d1b3a85b023365e099a3eec6ca8571.jpg",
      alt: "Холодные врата",
    },
  },
];

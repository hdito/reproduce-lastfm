interface commonCardInfo {
  image: { src: string; alt: string };
  title: link;
  listeners: number;
}

export interface link {
  title: string;
  src: string;
}

interface songCard extends commonCardInfo {
  type: "song";
  duration: number;
  band: link;
  info: { similar: [link, link, link] } | { scrobbles: number };
}

interface bandCard extends commonCardInfo {
  type: "band";
  info: { similar: [link, link, link] };
}

interface albumCard extends commonCardInfo {
  type: "album";
  band: link;
  tracks: number;
  info: { similar: [link, link, link] } | { band: link };
}

export type cardInfo = songCard | bandCard | albumCard;

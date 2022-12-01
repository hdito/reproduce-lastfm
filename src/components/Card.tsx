import { cardInfo } from "../types/card";
import { CardIcon } from "./CardIcon";
import { format } from "date-fns";
import { CardsInfo } from "./CardInfo";

export const Card = ({ cardInfo }: { cardInfo: cardInfo }) => {
  return (
    <div className="p-4 bg-lastfm-platinum border-y border-lunar flex gap-4">
      <div className="h-20 w-20 relative">
        <img
          className="block object-cover object-center h-full"
          src={cardInfo.image.src}
          alt={cardInfo.image.alt}
        />
        <CardIcon type={cardInfo.type} />
      </div>
      <div>
        {(() => {
          switch (cardInfo.type) {
            case "song":
              return (
                <>
                  <a className="hover:underline" href={cardInfo.title.src}>
                    <h3 className="font-bold">
                      {cardInfo.title.title}{" "}
                      <span className="font-normal">
                        ({format(cardInfo.duration, "m:s")})
                      </span>
                    </h3>
                  </a>
                  <a className="hover:underline" href={cardInfo.band.src}>
                    {cardInfo.band.title}
                  </a>
                  <p>
                    {cardInfo.listeners}{" "}
                    {cardInfo.listeners > 1 ? "listeners" : "listener"}
                  </p>
                </>
              );
            case "band":
              return (
                <>
                  <a className="hover:underline" href={cardInfo.title.src}>
                    <h3 className="font-bold">{cardInfo.title.title}</h3>
                  </a>
                  <p>
                    {cardInfo.listeners}{" "}
                    {cardInfo.listeners > 1 ? "listeners" : "listener"}
                  </p>
                </>
              );
            case "album":
              return (
                <>
                  <a className="hover:underline" href={cardInfo.title.src}>
                    <h3 className="font-bold">{cardInfo.title.title}</h3>
                  </a>
                  <a className="hover:underline" href={cardInfo.band.src}>
                    {cardInfo.band.title}
                  </a>
                  <p>
                    {cardInfo.tracks}
                    {" tracks"}
                    {cardInfo.listeners}{" "}
                    {cardInfo.listeners > 1 ? "listeners" : "listener"}
                  </p>
                </>
              );
          }
        })()}
        <CardsInfo info={{ info: cardInfo.info }} />
      </div>
    </div>
  );
};

import { cardInfo } from "../types/card";
import { CardIcon } from "./CardIcon";
import { format } from "date-fns";
import { CardsInfo } from "./CardInfo";
import { HiPlay } from "react-icons/hi2";

export const Card = ({ cardInfo }: { cardInfo: cardInfo }) => {
  return (
    <div className="flex gap-4 border-y border-lastfm-lunar bg-lastfm-platinum p-4 lg:relative lg:block lg:border-x lg:p-0">
      <div className="relative aspect-square h-fit max-h-20 lg:max-h-full lg:w-full">
        <img
          className="block h-full object-cover object-center brightness-75"
          src={cardInfo.image.src}
          alt={cardInfo.image.alt}
        />
        <CardIcon type={cardInfo.type} />
        <div className="absolute inset-4 hidden flex-col justify-between text-white lg:flex">
          <div className="flex items-center justify-center self-start rounded-full border border-lastfm-lunar bg-lastfm-lunar p-2 text-xl text-lastfm-mineshaft">
            <HiPlay />
          </div>
          <div>
            <a className="hover:underline" href={cardInfo.title.src}>
              <h3 className="font-bold">
                {cardInfo.title.title}{" "}
                {"duration" in cardInfo ? (
                  <span className="font-normal">
                    ({format(cardInfo.duration, "m:s")})
                  </span>
                ) : null}
              </h3>
            </a>
            {"band" in cardInfo ? (
              <a className="hover:underline" href={cardInfo.band.src}>
                {cardInfo.band.title}
              </a>
            ) : null}
            <p>
              {"tracks" in cardInfo ? `${cardInfo.tracks} tracks ` : null}
              {`${cardInfo.listeners.toLocaleString()} ${
                cardInfo.listeners > 1 ? "listeners" : "listener"
              }`}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="lg:hidden">
          <a className="hover:underline" href={cardInfo.title.src}>
            <h3 className="font-bold">
              {cardInfo.title.title}{" "}
              {"duration" in cardInfo ? (
                <span className="font-normal">
                  ({format(cardInfo.duration, "m:s")})
                </span>
              ) : null}
            </h3>
          </a>
          <p>
            {"band" in cardInfo ? (
              <a className="hover:underline" href={cardInfo.band.src}>
                {cardInfo.band.title}
              </a>
            ) : null}
            {"tracks" in cardInfo ? `${cardInfo.tracks} tracks` : null}
            {cardInfo.listeners}{" "}
            {cardInfo.listeners > 1 ? "listeners" : "listener"}
          </p>
        </div>
        <CardsInfo info={{ info: cardInfo.info }} />
      </div>
    </div>
  );
};

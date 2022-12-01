import { cardInfo, link } from "../types/card";

export const CardsInfo = ({
  info: { info },
}: {
  info: Pick<cardInfo, "info">;
}) => {
  return (
    <>
      <p className="text-gray-700">
        {"similar" in info ? (
          <>
            Similar to{" "}
            <a
              className="text-lastfm-navy hover:underline"
              href={info.similar[0].src}
            >
              {info.similar[0].title}
            </a>
            {", "}
            <a
              className="text-lastfm-navy hover:underline"
              href={info.similar[1].src}
            >
              {info.similar[1].title}
            </a>
            {" and "}
            <a
              className="text-lastfm-navy hover:underline"
              href={info.similar[2].src}
            >
              {info.similar[2].title}
            </a>
          </>
        ) : "scrobbles" in info ? (
          <>You have scrobbled this track {info.scrobbles} times</>
        ) : (
          <>
            You've scrobbled{" "}
            <a
              className="text-lastfm-navy hover:underline"
              href={info.band.src}
            >
              {info.band.title}
            </a>{" "}
            before, but not this release
          </>
        )}
      </p>
    </>
  );
};

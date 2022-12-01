import { cva, VariantProps } from "class-variance-authority";
import { IoMusicalNotes, IoStar } from "react-icons/io5";
import { RiAlbumFill } from "react-icons/ri";

const icon = cva(
  "absolute right-0 bottom-0 translate-x-2 translate-y-2 rounded-full text-white p-1.5 text-xl",
  {
    variants: {
      type: {
        song: "bg-lastfm-blue",
        album: "bg-lastfm-green",
        band: "bg-lastfm-gold",
      },
    },
  }
);
type iconProps = VariantProps<typeof icon>;

export const CardIcon = ({ type }: iconProps) => (
  <div className={icon({ type })}>
    {type === "song" ? (
      <IoMusicalNotes />
    ) : type === "album" ? (
      <RiAlbumFill />
    ) : (
      <IoStar />
    )}
  </div>
);

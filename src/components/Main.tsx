import { HiPlay } from "react-icons/hi2";
import { mainContent } from "../content/mainContent";
import { Cards } from "./Cards";

export const Main = () => {
  return (
    <div className="m-auto grid max-w-screen-xl gap-4 py-4 lg:grid-cols-[3fr_1fr] lg:p-4">
      <Cards />
      <div className="hidden lg:block">
        {mainContent.map((link) => (
          <a
            className="flex items-center gap-2 border-b border-lastfm-lunar py-2 text-sm hover:underline"
            href="#"
          >
            <div className="flex items-center justify-center rounded-full border border-lastfm-lunar p-2 text-xl">
              <HiPlay />
            </div>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

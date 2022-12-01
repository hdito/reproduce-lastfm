export const Tabs = () => {
  return (
    <div className="shadow-border-b">
      <div className="m-auto flex max-w-screen-xl gap-4 overflow-scroll px-4 pt-2 ">
        <a href="#" className="relative whitespace-nowrap py-3 font-bold">
          All recomendations
          <div className="absolute bottom-0 h-1 w-full bg-red-800"></div>
        </a>
        <a className="whitespace-nowrap py-3" href="#">
          Artists
        </a>
        <a className="whitespace-nowrap py-3" href="#">
          Albums
        </a>
        <a className="whitespace-nowrap py-3" href="#">
          Tracks
        </a>
        <a className="whitespace-nowrap py-3" href="#">
          Events
        </a>
      </div>
    </div>
  );
};

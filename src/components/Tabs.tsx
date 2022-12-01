export const Tabs = () => {
  return (
    <div className="flex gap-4 pt-2 overflow-scroll px-4 shadow-border-b">
      <a href="#" className="relative font-bold whitespace-nowrap py-3">
        All recomendations
        <div className="absolute h-1 w-full bg-red-800 bottom-0 z-10"></div>
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
  );
};

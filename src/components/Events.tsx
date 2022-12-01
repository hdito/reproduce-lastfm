import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";

export const Events = () => {
  return (
    <div className="relative h-64">
      <img
        className="block w-full h-full object-cover object-top brightness-90"
        src="https://lastfm.freetls.fastly.net/i/u/400x300/1d26db0d890f5c398459ed9a74446205"
        alt="Library search"
      />
      <button className="absolute left-4 top-4 p-2 rounded-full border-2 bg-black/20 text-white text-2xl border-white">
        <TfiArrowLeft />
      </button>
      <button className="absolute right-4 top-4 p-2 rounded-full  border-2 bg-black/20 text-white text-2xl border-white">
        <TfiArrowRight />
      </button>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
        <button className="h-2 w-2 rounded-full bg-white" />
        <button className="h-2 w-2 rounded-full bg-gray-500" />
        <button className="h-2 w-2 rounded-full bg-gray-500" />
        <button className="h-2 w-2 rounded-full bg-gray-500" />
        <button className="h-2 w-2 rounded-full bg-gray-500" />
        <button className="h-2 w-2 rounded-full bg-gray-500" />
        <button className="h-2 w-2 rounded-full bg-gray-500" />
      </div>
    </div>
  );
};

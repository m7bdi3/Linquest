import Flags from "country-flag-icons/react/3x2";

export const Footer = () => {
  return (
    <footer className="hidden lg:flex lg:flex-col h-20 w-full rounded-t-3xl p-2 bg-opacity-30 bg-stone-500 backdrop-blur-md shadow-lg ">
      <div className="flex h-5 mt-2 w-full justify-center items-center gap-2">
        <Flags.SA className="rounded w-8 h-8" />
        <Flags.FR className="rounded w-8 h-8" />
        <Flags.DE className="rounded w-8 h-8" />
        <Flags.ES className="rounded w-8 h-8" />
        <Flags.GB className="rounded w-8 h-8" />
        <Flags.IT className="rounded w-8 h-8" />
        <Flags.JP className="rounded w-8 h-8" />
        <Flags.KR className="rounded w-8 h-8" />
        <Flags.RU className="rounded w-8 h-8" />
        
      </div>
      <div className="flex w-full h-full items-end justify-center ">
        <p className="text-stone-200 text-center font-extralight">copy rights reserverd &copy;Badi3 </p>
      </div>
    </footer>
  );
};

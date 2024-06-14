import Image from "next/image";
import { MobileSidebar } from "./mobile-sidebar";

export const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-[50px] w-[95%]  flex gap-x-4 items-center p-4 bg-opacity-60 bg-[#f8a95f] backdrop-blur-md shadow-lg fixed top-0 left-1/2 transform -translate-x-1/2  max-w-screen-lg rounded-b-md z-50">
      <MobileSidebar />
      <div className="flex items-center w-full h-full">
          <Image src={"/logo.png"} alt="creature" height={40} width={40} />
          <h1 className="text-2xl font-extrabold text-white text-center ">
        Linquest
          </h1>
        </div>
    </nav>
  );
};

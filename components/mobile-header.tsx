import { MobileSidebar } from "./mobile-sidebar";

export const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-[50px] w-[95%]  flex items-center p-4 bg-opacity-60 bg-stone-600 backdrop-blur-md shadow-lg fixed top-0 left-1/2 transform -translate-x-1/2  max-w-screen-lg rounded-b-md z-50">
      <MobileSidebar />
    </nav>
  );
};

import { Footer } from "./footer";
import { Header } from "./header";

type props = {
  children: React.ReactNode;
};
export default function MarketingLayout({ children }: props) {
  return (
      <main className="flex-1 flex flex-col items-center justify-center w-full h-full">
      <Header />
        {children}
      <Footer />
      </main>
  );
}

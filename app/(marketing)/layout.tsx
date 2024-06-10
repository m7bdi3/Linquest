import { Footer } from "./footer";
import { Header } from "./header";

type props = {
  children: React.ReactNode;
};
export default function MarketingLayout({ children }: props) {
  return (
    <>
      <div
        className="min-h-screen flex flex-col"
        style={{
          backgroundImage: `url('./Homepage.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center w-full h-full">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightCircleIcon, Loader } from "lucide-react";

export const Header = () => {
  const images1 = [
    { src: "/es.svg", alt: "Spanish" },
    { src: "/fr.svg", alt: "French" },
    { src: "/sa.svg", alt: "Arabic" },
    { src: "/us.svg", alt: "English" },
    { src: "/de.svg", alt: "German" },
    { src: "/it.svg", alt: "Italian" },
    { src: "/jp.svg", alt: "Japanese" },
    { src: "/kr.svg", alt: "Korean" },
    { src: "/ru.svg", alt: "Russian" },
    { src: "/cn.svg", alt: "Chinese" },
    { src: "/tr.svg", alt: "Turkish" },
    { src: "/gr.svg", alt: "Greek" },
    { src: "/cz.svg", alt: "Czech" },
    { src: "/id.svg", alt: "Indonesian" },
  ];

  const images2 = [
    { src: "/kr.svg", alt: "Korean" },
    { src: "/ru.svg", alt: "Russian" },
    { src: "/cn.svg", alt: "Chinese" },
    { src: "/tr.svg", alt: "Turkish" },
    { src: "/gr.svg", alt: "Greek" },
    { src: "/cz.svg", alt: "Czech" },
    { src: "/sa.svg", alt: "Arabic" },
    { src: "/id.svg", alt: "Indonesian" },
    { src: "/es.svg", alt: "Spanish" },
    { src: "/fr.svg", alt: "French" },
    { src: "/us.svg", alt: "English" },
    { src: "/de.svg", alt: "German" },
    { src: "/it.svg", alt: "Italian" },
    { src: "/jp.svg", alt: "Japanese" },
  ];
  return (
    <main className="flex flex-col lg:flex-row md:flex-row h-full w-full justify-between items-center max-h-[70%] lg:max-h-full md:max-h-full">
      <div className="h-full flex flex-col justify-center max-h-fit lg:max-w-[60%] lg:ml-[8%] md:max-w-[30%] md:ml-[8%] text-center lg:text-start md:text-start gap-y-4">
        <h1 className="font-bold text-6xl xl:text-[9rem] lg:text-9xl md:text-8xl">
          Embark on a language learning adventure
        </h1>
        <p className="md:text-xl lg:text-2xl text-base text-neutral-600">
          Discover the joy of learning languages with Linquest. Our interactive
          quests and challenges make language acquisition fun and effective.
        </p>
        <div className="flex w-full  justify-center lg:justify-start md:justify-start">
          <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <div className="flex flex-col w-[180px] gap-y-1 pt-4 ">
                <SignUpButton mode="modal">
                  <Button size={"lg"} variant={"secondary"} className="w-full ">
                    Get Started
                  </Button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <p className=" text-[#f8a95f] hover:underline focus:underline cursor-pointer w-[185px]">
                    I already have an account
                  </p>
                </SignInButton>
              </div>
            </SignedOut>
            <SignedIn>
              <Button size={"lg"} variant={"homePage"} asChild>
                <Link
                  href="/learn"
                  className="flex w-fit gap-4 items-center justify-between"
                >
                  <p className="">Continue Learnig</p>
                  <ArrowRightCircleIcon className="h-5 w-5 " />
                </Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
      <div className="h-full w-full lg:max-w-[30%] md:max-w-[40%] max-h-[40%] lg:max-h-full md:max-h-full overflow-hidden p-12 lg:p-0 md:p-0">
        <div className="flex w-full h-full gap-x-2">
          <div className="-mt-[120%] flex flex-col hover:animate-loop-vertically gap-4 self-center">
            {images1.map((image, index) => (
              <div
                key={index}
                className="flex hover:animate-loop-vertically flex-col gap-6"
              >
                <div className="relative w-full ">
                  <Image
                    className=" inset-0 object-cover rounded-md shadow-md"
                    src={image.src}
                    alt={image.alt}
                    width={260}
                    height={260}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col hover:animate-loop-vertically gap-4 self-center">
            {images2.map((image, index) => (
              <div
                key={index}
                className="flex hover:animate-loop-vertically flex-col gap-6"
              >
                <div className="relative w-full ">
                  <Image
                    className=" inset-0 object-cover rounded-md shadow-md"
                    src={image.src}
                    alt={image.alt}
                    width={260}
                    height={260}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

import Image from "next/image";
import React from "react";
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
export function Hero() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row w-full min-h-[350px] max-h-[370px] items-center bg-opacity-20 bg-stone-500 backdrop-blur-md shadow-lg lg:rounded-r-full md:rounded-r-full">
      <div
        className="flex flex-col lg:min-h-[350px] lg:max-h-[370px] md:min-h-[350px] md:max-h-[370px] h-fit w-full lg:justify-evenly md:justify-evenly justify-center items-center lg:flex-1 md:flex-1 transition-all duration-1000 ease-out animate-fadeIn p-4 gap-2"
        style={{ transitionDelay: `200ms` }}
      >
        <div className="flex flex-col justify-center lg:self-start md:self-start lg:flex-1 md:flex-1 items-center gap-4 ">
          <h1 className="lg:text-6xl font-extrabold md:text-5xl text-3xl text-white text-center lg:text-start md:text-start">
            Embark on Your Linguistic Adventure
          </h1>
          <p className="md:text-xl lg:text-2xl font-light text-neutral-200 w-full text-center lg:text-start md:text-start">
            Explore New Languages with Our Quest-Based Learning App!
          </p>
        </div>
        <div className="flex w-full h-full justify-center lg:justify-start md:justify-start">
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
      <div className="flex mx-auto">
        <Image
          src={"/home2.png"}
          alt={"character"}
          priority
          sizes="40vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={300}
          height={100}
        />
      </div>
    </div>
  );
}

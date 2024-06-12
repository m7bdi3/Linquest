import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { Loader } from "lucide-react";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="absolute top-0 h-16 w-[95%] rounded-lg mt-4 mx-auto p-4 bg-opacity-20 bg-stone-500 backdrop-blur-md shadow-lg z-50">
      <div className="mx-auto flex items-center justify-between h-full">
        <div className="flex items-center w-full h-full">
          <Image src={"/logo.png"} alt="creature" height={40} width={40} />
          <h1 className="text-3xl font-extrabold text-neutral-600 h-full text-center ">
        Linquest
          </h1>
        </div>
        <ClerkLoading>
          <Loader className="w-5 h-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton 
            />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
            >
              <Button size={'lg'}>
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
     
    </header>
  );
};

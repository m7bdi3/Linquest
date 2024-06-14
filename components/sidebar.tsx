import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-items";
import {
  GoalIcon,
  HomeIcon,
  Loader,
  Medal,
  ShoppingBasketIcon,
} from "lucide-react";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
type Props = {
  className: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        " flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="flex items-center w-full gap-x-3 pt-4">
          <Image src={"/logo.png"} alt="creature" height={40} width={40} />
          <h1 className="text-3xl font-extrabold text-[#f8a95f] h-full text-center ">
            Linquest
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1 w-full justify-between">
        <div>
          <SidebarItem
            icon={<HomeIcon className="w-7 h-7 text-[#F8A95F]" />}
            label="Learn"
            href="/learn"
          />
          <SidebarItem
            icon={<Medal className="w-7 h-7 text-[#F8A95F]" />}
            label="Leaderboard"
            href="/leaderboard"
          />
          <SidebarItem
            icon={<GoalIcon className="w-7 h-7 text-[#F8A95F]" />}
            label="quests"
            href="/quests"
          />
          <SidebarItem
            icon={<ShoppingBasketIcon className="w-7 h-7 text-[#F8A95F]" />}
            label="shop"
            href="/shop"
          />
        </div>

        <div className="p-4">
          <ClerkLoading>
            <Loader className="h-5 w-5 texxt-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
};

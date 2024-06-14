"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  icon: React.ReactNode;
  label: string;
  href: string;
};
export const SidebarItem = ({ icon, label, href }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <div className="w-full pt-4">
      <Button
        variant={active ? "sidebarOutline" : "sidebar"}
        className=" justify-start h-[52px] w-full"
      >
        <Link href={href} className="flex items-center gap-x-2 justify-start w-full h-full ">
        {icon}
        <p className=" text-base font-semibold  text-neutral-500">
        {label}
        </p>
        </Link>
      </Button>
    </div>
  );
};

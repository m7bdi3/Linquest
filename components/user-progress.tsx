import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";
import { courses } from "@/db/schema";

type Props = {
  activeCourse: typeof courses.$inferSelect;
  hearts: number;
  points: number;
  hasActiveSub: boolean;
};

export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSub,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href={"/courses"}>
        <Button variant={"ghost"}>
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-full border-4 border-[#f8a95f] "
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href={"/shop"}>
        <Button variant={"ghost"} className="text-[#f8a95f]">
          <Image
            src="/points.svg"
            height={32}
            width={32}
            alt="points"
            className="mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href={"/shop"}>
        <Button variant={"ghost"} className="text-rose-500">
          <Image
            src="/heart.svg"
            height={32}
            width={32}
            alt="heart"
            className="mr-2 shrink-0"
          />
          {hasActiveSub ? (
            <InfinityIcon className="h-4 w-4 stroke-3" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
};

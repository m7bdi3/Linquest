"use client";

import { Check, Crown, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
type Props = {
  id: number;
  index: number;
  totalcount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
};

export const LessonButton = ({
  id,
  index,
  totalcount,
  locked,
  current,
  percentage,
}: Props) => {
  const isLast = index === totalcount;
  const isCompleted = !current && !locked;

  const Icon = isCompleted ? Check : isLast ? Crown : Star;

  const href = isCompleted ? `/lesson/${id}` : "/lesson";

  return (
    <Link
      href={href}
      aria-disabled={locked}
      style={{ pointerEvents: locked ? "none" : "auto" }}
    >
      <div className="flex ">
        {current ? (
          <div className="h-[102px] w-[102px] relative">
            <div className=" absolute -top-6 left-3 px-3 border-2 font-bold uppercase text-[#495C61] bg-white rounded-xl animate-bounce z-10">
              start
              <div className="absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2" />
            </div>
            <CircularProgressbarWithChildren
              value={Number.isNaN(percentage) ? 0 : percentage}
              styles={{
                path: {
                  stroke: "#f8a95f",
                },
                trail: {
                  stroke: "#e5e7eb",
                },
              }}
            >
              <Button
                size={"rounded"}
                variant={locked ? "locked" : "secondary"}
                className="h-[70px] w-[70px] border-b-8 bg-[#f8a95f] border-[#8B6D51] hover:bg-[#8B6D51]"
              >
                <Icon
                  className={cn(
                    "h-10 w-10",
                    locked
                      ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                      : "fill-primary-foreground text-primary-foreground",
                    isCompleted && "fill-none stroke-[4]"
                  )}
                />
              </Button>
            </CircularProgressbarWithChildren>
          </div>
        ) : (
          <Button
            size={"rounded"}
            variant={locked ? "locked" : "secondary"}
            className="h-[70px] w-[70px] border-b-8"
          >
            <Icon
              className={cn(
                "h-10 w-10",
                locked
                  ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                  : "fill-primary-foreground text-primary-foreground",
                isCompleted && "fill-none stroke-[4]"
              )}
            />
          </Button>
        )}
      </div>
    </Link>
  );
};

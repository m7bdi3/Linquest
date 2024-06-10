import React from "react";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress, getUserSub } from "@/db/queries";
import { Goal } from "lucide-react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Promo } from "@/components/promo";
import { quest } from "@/constants";


export default async function QuestsPage() {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSub();

  const [userProgress, userSubscription] = await Promise.all([
    userProgressData,
    userSubscriptionData,
  ]);

  if (!userProgress || !userProgress.activeCourse) redirect("/courses");

  const isPro = !!userSubscription?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSub={isPro}
        />
        {!isPro && <Promo />}
      </StickyWrapper>
      <FeedWrapper>
        <div className="flex flex-col items-center w-full">
          <Goal className="w-16 h-16 text-[#f8a95f] shrink-0" />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Quests
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            Complete quests by earning points
          </p>
          <ul className="w-full">
            {quest.map((q) => {
              const progress = (userProgress.points / q.value) * 100;
              return (
                <div
                  key={q.title}
                  className="flex items-center w-full p-4 gap-x-4 border-t-2"
                >
                  <Image
                    src={"/points.svg"}
                    alt="points"
                    width={60}
                    height={60}
                  />
                  <div className="flex flex-col gap-y-2 w-full">
                    <p className="text-neutral-700 text-xl font-bold">
                      {q.title}
                    </p>
                    <Progress value={progress} className="h-3" />
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </FeedWrapper>
    </div>
  );
}

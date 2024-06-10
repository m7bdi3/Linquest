import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress, getUserSub } from "@/db/queries";
import { ShoppingBasket } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import { Items } from "./items";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";

export default async function ShopPage() {
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
        <Quests points={userProgress.points}/>
      </StickyWrapper>
      <FeedWrapper>
        <div className="flex flex-col items-center w-full">
          <ShoppingBasket className="w-16 h-16 text-[#f8a95f]" />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Shop
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            Spend your points on cool stuff!
          </p>
          <Items
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSub={isPro}
          />
        </div>
      </FeedWrapper>
    </div>
  );
}

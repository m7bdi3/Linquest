"use server";

import { POINTS_TO_REFILL } from "@/constants";
import db from "@/db/drizzle";
import { getCourseByID, getUserProgress, getUserSub } from "@/db/queries";
import {
  challengeProgress,
  challenges,
  lessons,
  userProgress,
} from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upsertUserProgress = async (courseId: number) => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    throw new Error("Unauthorized");
  }

  const course = await getCourseByID(courseId);

  if (!course) {
    throw new Error("Course not found");
  }

  if(!course.units.length || !course.units[0].lessons.length) {
      throw new Error('Course is empty')
  }

  const existingUSerProgress = await getUserProgress();

  if (existingUSerProgress) {
    await db.update(userProgress).set({
      activeCourseId: courseId,
      userName: user.firstName || "user",
      userImageSrc: user.imageUrl || "/avatar.svg",
    });
    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    userName: user.firstName || "user",
    userImageSrc: user.imageUrl || "/avatar.svg",
  });

  revalidatePath("/courses");
  revalidatePath("/learn");
  redirect("/learn");
};

export const reduceHearts = async (challengeId: number) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const currentUserProgress = await getUserProgress();
  const userSub = await getUserSub();

  const challenge = await db.query.challenges.findFirst({
    where: eq(challenges.id, challengeId),
  });

  if (!challenge) {
    throw new Error("Challenge not found");
  }

  const existingChallengeProgress = await db.query.challengeProgress.findFirst({
    where: and(
      eq(challengeProgress.userId, userId),
      eq(challengeProgress.challengeId, challengeId)
    ),
  });

  const isPractice = !!existingChallengeProgress;

  if (isPractice) {
    return { error: "practice" };
  }

  if (!currentUserProgress) {
    throw new Error("User progress not found");
  }

  if(userSub?.isActive) {
    return { error: "subscription" };
  }

  if (currentUserProgress.hearts === 0) {
    return { error: "hearts" };
  }

  await db
    .update(userProgress)
    .set({
      hearts: Math.max(currentUserProgress.hearts - 1, 0),
    })
    .where(eq(userProgress.userId, userId));

  revalidatePath("/learn");
  revalidatePath("/lesson");
  revalidatePath("/courses");
  revalidatePath("/shop");
  revalidatePath("/quests");
  revalidatePath("/leaderboard ");
  revalidatePath(`/lesson/${challenge.lessonId}`);
};

export const refillHearts = async () => {
  const currentUSerProgress = await getUserProgress();
  if (!currentUSerProgress) {
    throw new Error("User progress not found");
  }

  if (currentUSerProgress.hearts === 5) {
    throw new Error("You have 5 hearts");
  }

  if (currentUSerProgress.points < POINTS_TO_REFILL) {
    throw new Error("Not enough points");
  }

  await db
    .update(userProgress)
    .set({
      hearts: 5,
      points: currentUSerProgress.points - POINTS_TO_REFILL,
    })
    .where(eq(userProgress.userId, currentUSerProgress.userId));

  revalidatePath("/shops");
  revalidatePath("/learn");
  revalidatePath("/quests");
  revalidatePath("/leaderboard");
};

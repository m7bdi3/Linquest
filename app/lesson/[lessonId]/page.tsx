import { getLesson, getUserProgress, getUserSub } from "@/db/queries";
import { redirect } from "next/navigation";
import React from "react";
import { Quiz } from "../quiz";

type Props = {
  params : {
    lessonId: number;
  }
}

export default async function LessonIdPage({params}:Props) {

  const lessonData = getLesson(params.lessonId);
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSub();

  const [lesson, userProgress, userSubscription] = await Promise.all([
    lessonData,
    userProgressData,
    userSubscriptionData,
  ]);

  if (!lesson || !userProgress) {
    redirect("/learn");
  }

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSub={userSubscription}
    />
  );
}

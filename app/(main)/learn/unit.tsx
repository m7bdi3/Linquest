import { lessons, units } from "@/db/schema";
import { UnitBanner } from "./unit-banner";
import { LessonButton } from "./lesson-button";

type Props = {
  id: number;
  order: number;
  description: string;
  title: string;
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean;
  })[];
  activeLesson:
    | (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
      })
    | undefined;
  activeLessonPercentage: number;
};

export const Unit = ({
  id,
  order,
  description,
  title,
  lessons,
  activeLesson,
  activeLessonPercentage,
}: Props) => {
  return (
    <div className="flex flex-col gap-y-4">
      <UnitBanner title={title} description={description} />

      <div className="flex items-center w-full gap-x-4 justify-between mt-6">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <>
              <LessonButton
                key={lesson.id}
                id={lesson.id}
                index={index}
                totalcount={lessons.length - 1}
                current={isCurrent}
                locked={isLocked}
                percentage={activeLessonPercentage}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

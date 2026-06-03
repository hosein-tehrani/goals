import type { CourseGoal } from "../types/goals";
import CourseGoalCard from "./CourseGoalCard";
import InfoBox from "./layout/InfoBox";

export default function CourseGoalsList({
  goals,
  onDelete,
}: {
  goals: CourseGoal[];
  onDelete: (id: number | string) => void;
}) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">you set no goals!</InfoBox>;
  }
  return (
    <>
      {goals.length > 3 && (
        <InfoBox mode="warning" severity="high">
          you set to many goals. Don't put to much on your plate.
        </InfoBox>
      )}

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoalCard
              title={goal.title}
              description={goal.description}
              id={goal.id}
              onDelete={onDelete}
            ></CourseGoalCard>
          </li>
        ))}
      </ul>
    </>
  );
}

import type { CourseGoal } from "../types/goals";
import CourseGoalCard from "./CourseGoalCard";

export default function CourseGoalsList({ goals }: { goals: CourseGoal[] }) {
  return (
    <ul>
      {goals.length !== 0 ? (
        goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoalCard
              title={goal.title}
              description={goal.description}
              id={goal.id}
            ></CourseGoalCard>
          </li>
        ))
      ) : (
        <p className="center">you set no goals!</p>
      )}
    </ul>
  );
}

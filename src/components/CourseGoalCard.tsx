import type {
  PropsWithChildren,
  //   ReactNode
} from "react";
import type { CourseGoal } from "../types/goals";

// type GoalsProps = {
//   title: string;
//   description: string;
//   id: number | string;
//   children: ReactNode; //react specefic type
// };

// -------or-------
type GoalCardProps = CourseGoal & {
  onDelete: (id: number | string) => void;
};

export default function CourseGoalCard({
  title,
  description,
  children,
  id,
  onDelete,
}: PropsWithChildren<GoalCardProps>) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <button onClick={() => onDelete(id)}>delete</button>
      </div>
      {children}
    </article>
  );
}

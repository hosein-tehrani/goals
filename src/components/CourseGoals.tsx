import type {
  PropsWithChildren,
  //   ReactNode
} from "react";

// type GoalsProps = {
//   title: string;
//   description: string;
//   id: number | string;
//   children: ReactNode; //react specefic type
// };

// -------or-------

type GoalsProps = PropsWithChildren<{
  title: string;
  description: string;
  id: number | string;
}>;

export default function CourseGoals({
  title,
  description,
  children,
}: GoalsProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <button>delete</button>
      </div>
      {children}
    </article>
  );
}

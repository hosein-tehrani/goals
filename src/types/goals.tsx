export type CourseGoal = {
  title: string;
  description: string;
  id: string | number;
  onDelete: (id: number | string) => void;
};

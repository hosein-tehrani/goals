import logo from "./assets/goals.jpg";
import CourseGoalsList from "./components/CourseGoalsList";
import Header from "./components/layout/Header";
import { useState } from "react";
import type { CourseGoal } from "./types/goals";
import NewGoal from "./components/NewGoal";

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const addGoalsHandler = (title: string, description: string) => {
    setGoals((prev) => {
      const newGoal: CourseGoal = {
        title,
        description,
        id: Math.random(),
      };
      return [...prev, newGoal];
    });
  };

  const deleteGoalHandler = (id: number | string) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };
  return (
    <main>
      <Header image={{ src: logo, alt: "a list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal addGoal={addGoalsHandler} />
      <CourseGoalsList goals={goals} onDelete={deleteGoalHandler} />
    </main>
  );
}

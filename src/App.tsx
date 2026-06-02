import logo from "./assets/goals.jpg";
import CourseGoalsList from "./components/CourseGoalsList";
import Header from "./components/layout/Header";
import { useState } from "react";
import type { CourseGoal } from "./types/goals";

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const addGoalsHandler = () => {
    setGoals((prev) => {
      const newGoal: CourseGoal = {
        title: "React + type",
        description: "learn react now with typescript",
        id: Math.random(),
      };
      return [...prev, newGoal];
    });
  };

  const deleteGoalHandler = (id: number | string) => {
    setGoals(prev => prev.filter(goal=> goal.id !== id))
  }
  return (
    <main>
      <Header image={{ src: logo, alt: "a list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={addGoalsHandler}>add</button>
      <CourseGoalsList goals={goals} onDelete={deleteGoalHandler}/>
    </main>
  );
}

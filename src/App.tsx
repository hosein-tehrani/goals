import CourseGoals from "./components/CourseGoals";
import logo from "./assets/goals.jpg";
import Header from "./components/layout/Header";
import { useState } from "react";

type CourseGoal = {
  title: string;
  description: string;
  id: string | number;
};

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
  return (
    <main>
      <Header image={{ src: logo, alt: "a list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={addGoalsHandler}>add</button>
      <ul>
        {goals.length !== 0 ? (
          goals.map((goal) => (
            <li key={goal.id}>
              <CourseGoals
                title={goal.title}
                description={goal.description}
                id={goal.id}
              ></CourseGoals>
            </li>
          ))
        ) : (
          <p className="center">you set no goals!</p>
        )}
      </ul>
    </main>
  );
}

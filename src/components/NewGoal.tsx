import { useRef, type SubmitEvent } from "react";

type newGoalProp = {
  addGoal: (title: string, description: string) => void;
};

export default function NewGoal({ addGoal }: newGoalProp) {
  const form = useRef<HTMLFormElement>(null); //nemoone baraye useRef
  const submitHandler = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    console.log(formData);

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    addGoal(title, description);
    // form.current!.reset();
    event.currentTarget.reset();
  };
  return (
    <form ref={form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="title">Your Goal</label>
        <input id="title" type="text" name="title" />
      </p>
      <p>
        <label htmlFor="description">Short Description</label>
        <input id="description" type="text" name="description" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}

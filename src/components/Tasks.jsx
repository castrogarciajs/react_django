import { Task } from "./Task";

export function Tasks({ data }) {
  return (
    <>
      {data.map((task) => (
        <Task data={task} key={task.id} />
      ))}
    </>
  );
}

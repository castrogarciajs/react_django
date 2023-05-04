import { Task } from "./Task";

export function Tasks({ data }) {
  return (
    <>
      {data.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </>
  );
}

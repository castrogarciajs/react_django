import { Task } from "./Task";

export function Tasks({ data }) {
  return (
    <div>
      {data.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
}

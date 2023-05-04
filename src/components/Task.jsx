export function Task({ data }) {
  return (
    <div>
      {data.map((task) => (
        <h2>{task.title}</h2>
      ))}
    </div>
  );
}

import { useNavigate } from "react-router-dom";

export function Task({ task }) {
  const redirect = useNavigate();
  return (
    <div>
      <h2
        onClick={() => {
          redirect(`/Create/${task.id}`);
        }}
      >
        {task.title}
      </h2>
    </div>
  );
}

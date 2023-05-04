import { useEffect, useState } from "react";
import { get } from "../api/api";
import { Tasks } from "../components/Tasks";

export function HomePage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function start() {
      const response = await get();

      setTasks(response.data);
    }
    start();
  }, []);
  return <Tasks data={tasks} />;
}

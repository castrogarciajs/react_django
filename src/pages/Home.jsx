import { useEffect } from "react";
import { get } from "../api/api";
import { Tasks } from "../components/Tasks";

export function HomePage() {
  useEffect(() => {
    async function start() {
      const response = await get();
      console.log(response);
    }
    start();
  });
  return <Tasks />;
}

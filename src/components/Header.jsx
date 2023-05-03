import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav>
      <Link to="/Tasks">
        <h1>React With Django</h1>
      </Link>

      <Link to="/Create">Create Tasks</Link>
    </nav>
  );
}

import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { CreatePage } from "./pages/Create";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Tasks" />} />
      <Route path="/Tasks" element={<HomePage />} />
      <Route path="/Create" element={<CreatePage />} />
    </Routes>
  );
}

export default App;

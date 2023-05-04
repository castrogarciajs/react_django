import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { CreatePage } from "./pages/Create";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Tasks" />} />
        <Route path="/Tasks" element={<HomePage />} />
        <Route path="/Create" element={<CreatePage />} />
        <Route path="/Create/:id" element={<CreatePage />} />
      </Routes>
    </>
  );
}

export default App;

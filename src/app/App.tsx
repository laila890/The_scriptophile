import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { NotebookPage } from "./components/NotebookPage";

function PoemsPage() {
  const navigate = useNavigate();
  return <NotebookPage onBack={() => navigate("/")} />;
}

function JournalPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center text-6xl">
      Journal Page
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <HomePage
              onEnter={() => {
                window.location.href = "/poems";
              }}
            />
          }
        />

        {/* POEMS & STORIES (split-view) */}
        <Route path="/poems" element={<PoemsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
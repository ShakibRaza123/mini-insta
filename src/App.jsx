import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import SearchPage from "./pages/SearchPage";
import ReelPage from "./pages/ReelPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./components/common/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔐 Login */}
        <Route path="/" element={<AuthPage />} />

        {/* 🔥 Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* 🔍 Search */}
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <SearchPage />
            </ProtectedRoute>
          }
        />

        {/* 👤 Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        {/* 🎬 Reel */}
        <Route
          path="/reel/:id"
          element={
            <ProtectedRoute>
              <ReelPage />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
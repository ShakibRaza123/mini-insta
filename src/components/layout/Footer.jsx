import { Home, Search, Plus, Clapperboard, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) =>
        location.pathname === path
            ? "text-blue-500 scale-110"
            : "text-gray-400";

    return (
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-16 z-50 
        bg-white border-t border-gray-200 flex items-center justify-around">

            {/* Home */}
            <button onClick={() => navigate("/dashboard")}>
                <Home size={26} className={isActive("/dashboard")} />
            </button>

            {/* Search */}
            <button onClick={() => navigate("/search")}>
                <Search size={26} className={isActive("/search")} />
            </button>

            {/* 🔥 Center Upload Button */}
            <button
                onClick={() => navigate("/upload")}
                className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 
                p-3 rounded-full shadow-lg -mt-8"
            >
                <Plus size={26} className="text-white" />
            </button>

            {/* Reels */}
            <button onClick={() => navigate("/reels")}>
                <Clapperboard size={26} className={isActive("/reels")} />
            </button>

            {/* Profile */}
            <button onClick={() => navigate("/profile")}>
                <User size={26} className={isActive("/profile")} />
            </button>

        </div>
    );
}
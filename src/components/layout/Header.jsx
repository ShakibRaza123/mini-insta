import { Camera, Send } from "lucide-react";

export default function Header() {
    return (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[420px] h-16 z-50 
        bg-white/80 backdrop-blur-xl flex items-center justify-between px-5 
        border-b border-gray-200">

            {/* Left Icon */}
            <button className="text-gray-500 hover:opacity-70 transition active:scale-95">
                <Camera size={22} />
            </button>

            {/* Logo */}
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
                MiniInsta
            </h1>

            {/* Right Icon */}
            <button className="text-blue-600 hover:opacity-70 transition active:scale-95">
                <Send size={22} />
            </button>
        </div>
    );
}
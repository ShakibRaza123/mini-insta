import { ArrowLeft, Play, Search, PlusSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";
export default function SearchPage() {
    const navigate = useNavigate();

    const videos = [
        { id: 1, src: "https://www.w3schools.com/html/mov_bbb.mp4", views: "1.2M" },
        { id: 2, src: "https://www.w3schools.com/html/movie.mp4", views: "842K" },
        { id: 3, src: "https://www.w3schools.com/html/mov_bbb.mp4", views: "3.5M" },
        { id: 4, src: "https://www.w3schools.com/html/movie.mp4", views: "950K" },
        { id: 5, src: "https://www.w3schools.com/html/mov_bbb.mp4", views: "670K" },
        { id: 6, src: "https://www.w3schools.com/html/movie.mp4", views: "1.1M" },
        { id: 7, src: "https://www.w3schools.com/html/mov_bbb.mp4", views: "1.2M" },
        { id: 8, src: "https://www.w3schools.com/html/movie.mp4", views: "842K" },
        { id: 9, src: "https://www.w3schools.com/html/mov_bbb.mp4", views: "3.5M" },
        { id: 10, src: "https://www.w3schools.com/html/movie.mp4", views: "950K" },
        { id: 11, src: "https://www.w3schools.com/html/mov_bbb.mp4", views: "670K" },
        { id: 12, src: "https://www.w3schools.com/html/movie.mp4", views: "1.1M" },
    ];

    return (
        <div className="flex justify-center">

            {/* MAIN CONTAINER */}
            <div className="w-[420px] h-screen flex flex-col bg-[#23020f] text-white overflow-hidden">

                <div className="px-4 pt-4 pb-3 bg-gradient-to-b from-[#3a0015] to-[#23020f] shrink-0">

                    {/* 🔝 Top Bar */}
                    <div className="flex items-center justify-between mb-3">

                        {/* 🔙 Back */}
                        <button
                            onClick={() => navigate(-1)}
                            className="w-8 h-8 flex items-center justify-center 
                -ml-2   /* 👈 align with text */
                rounded-full hover:bg-white/10 
                active:scale-95 transition"
                        >
                            <ArrowLeft size={20} className="text-white" />
                        </button>

                        {/* ➕ Upload */}
                        <button
                            onClick={() => navigate("/upload")}
                            className="w-8 h-8 flex items-center justify-center 
                rounded-full hover:bg-white/10 
                active:scale-95 transition"
                        >
                            <PlusSquare size={20} className="text-pink-400" />
                        </button>

                    </div>

                    {/* 🧠 Title Block */}
                    <div className="px-0">
                        <h2 className="text-2xl font-bold tracking-tight leading-tight">
                            Explore Reels
                        </h2>

                        <p className="text-sm text-pink-200 mt-1">
                            Curated masterpieces for your feed
                        </p>
                    </div>

                    {/* 🔍 Search */}
                    <div className="mt-4">
                        <div className="flex items-center gap-2 
            bg-white/10 backdrop-blur-md 
            border border-white/10 
            rounded-xl px-3 py-2 
            focus-within:border-pink-400 
            focus-within:bg-white/15 
            transition">

                            <Search size={18} className="text-gray-300" />

                            <input
                                type="text"
                                placeholder="Search reels, creators..."
                                className="bg-transparent outline-none text-sm w-full 
                    placeholder-gray-400 text-white rounded-md"
                            />
                        </div>
                    </div>

                </div>

                {/* 🎬 SCROLL AREA */}
                <div className="flex-1 overflow-y-auto no-scrollbar pb-20">

                    <div className="grid grid-cols-3 gap-[2px] p-[2px]">

                        {videos.map((video) => (
                            <div
                                key={video.id} onClick={() => navigate(`/reel/${video.id}`)}
                                className="relative aspect-[9/16] overflow-hidden"
                            >
                                <video
                                    src={video.src}
                                    className="w-full h-full object-cover"
                                    muted
                                    loop
                                    autoPlay
                                    playsInline
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                                {/* Views */}
                                <div className="absolute bottom-1 left-1 flex items-center gap-1 text-[10px] text-white">
                                    <Play size={12} />
                                    <span>{video.views}</span>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

                {/* Footer */}
                <Footer />

            </div>
        </div>
    );
}
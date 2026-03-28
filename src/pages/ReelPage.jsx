import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import Footer from "../components/layout/Footer";

export default function ReelPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const videos = [
        { id: 1, src: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { id: 2, src: "https://www.w3schools.com/html/movie.mp4" },
        { id: 3, src: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { id: 4, src: "https://www.w3schools.com/html/movie.mp4" },
    ];

    return (
        <div className="flex justify-center">

            {/* MAIN CONTAINER */}
            <div className="w-[420px] h-screen flex flex-col bg-black text-white overflow-hidden relative">

                {/* 🔙 Back */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-4 left-4 z-50 bg-black/60 p-2 rounded-full backdrop-blur-md hover:scale-105 active:scale-95 transition"
                >
                    <ArrowLeft size={18} />
                </button>

                {/* 🎬 REELS */}
                <div className="flex-1 overflow-y-scroll snap-y snap-mandatory no-scrollbar scroll-smooth">

                    {videos.map((video) => (
                        <div key={video.id} className="h-full snap-start relative">

                            {/* 🎬 VIDEO */}
                            <video
                                src={video.src}
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />

                            {/* 🌫️ SOFT OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80"></div>

                            {/* ❤️ RIGHT SIDE */}
                            <div className="absolute right-3 bottom-24 flex flex-col items-center gap-4 z-20">

                                <div className="bg-white/10 p-3 rounded-full backdrop-blur-lg border border-white/10 hover:bg-white/20 transition">
                                    <Heart size={22} />
                                </div>

                            </div>

                            {/* 👤 BOTTOM CONTENT */}
                            <div className="absolute bottom-20 left-4 right-16 z-20">

                                <div className="flex items-center gap-2 mb-2">
                                    <img
                                        src="https://i.pravatar.cc/100"
                                        className="w-8 h-8 rounded-full border border-white/20"
                                    />
                                    <span className="text-sm font-medium">@username</span>
                                </div>

                                <p className="text-xs text-white/80 leading-relaxed">
                                    Reel {video.id} • Clean modern reel UI ✨
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}
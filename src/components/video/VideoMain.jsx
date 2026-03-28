import { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";

const posts = [
    {
        id: 1,
        type: "image",
        user: "ELIAS STERN",
        avatar: "https://i.pravatar.cc/40?img=3",
        src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
        likes: "1,248"
    },
    {
        id: 2,
        type: "video",
        user: "ANIKA VOSS",
        avatar: "https://i.pravatar.cc/40?img=5",
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        likes: "8,532"
    },
    {
        id: 3,
        type: "image",
        user: "MILA",
        avatar: "https://i.pravatar.cc/40?img=6",
        src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        likes: "3,210"
    },
    {
        id: 4,
        type: "video",
        user: "SØREN",
        avatar: "https://i.pravatar.cc/40?img=7",
        src: "https://www.w3schools.com/html/movie.mp4",
        likes: "12,450"
    },
    {
        id: 5,
        type: "image",
        user: "ELARA",
        avatar: "https://i.pravatar.cc/40?img=8",
        src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
        likes: "5,890"
    }
];

export default function VideoMain() {
    return (
        <div className="flex justify-center">
            <div className="w-[420px] h-[calc(100vh-120px)] overflow-y-auto no-scrollbar pt-2 pb-24 bg-white">

                {posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}

            </div>
        </div>
    );
}


function Post({ post }) {

    const [liked, setLiked] = useState(false);
    const [showHeart, setShowHeart] = useState(false);
    const [burstHearts, setBurstHearts] = useState([]);
    const [particles, setParticles] = useState([]);

    const handleLike = () => {
        setLiked(!liked);
    };

    const handleDoubleTap = () => {
        setLiked(true);
        setShowHeart(true);

        setTimeout(() => setShowHeart(false), 700);

        // ❤️ FLOATING HEARTS
        const hearts = Array.from({ length: 6 }).map((_, i) => ({
            id: Date.now() + i,
            left: Math.random() * 80 + 10,
        }));
        setBurstHearts(hearts);

        setTimeout(() => setBurstHearts([]), 1200);

        // 🎆 PARTICLES
        const parts = Array.from({ length: 8 }).map((_, i) => ({
            id: Date.now() + i,
            x: Math.random() * 100,
            y: Math.random() * 100,
        }));
        setParticles(parts);

        setTimeout(() => setParticles([]), 600);
    };

    return (
        <div className="mb-6">

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                    <img src={post.avatar} className="w-8 h-8 rounded-full" />
                    <p className="text-sm font-semibold">{post.user}</p>
                </div>
                <span>⋯</span>
            </div>

            {/* Image / Video */}
            <div onDoubleClick={handleDoubleTap} className="relative">

                {post.type === "image" ? (
                    <img src={post.src} className="w-full h-[420px] object-cover" />
                ) : (
                    <video
                        src={post.src}
                        className="w-full h-[420px] object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                )}

                {/* 💥 CENTER HEART */}
                {showHeart && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <Heart
                            size={120}
                            className="text-white fill-white animate-boom"
                        />
                    </div>
                )}

                {/* ❤️ FLOATING HEARTS */}
                {burstHearts.map((h) => (
                    <Heart
                        key={h.id}
                        size={24}
                        className="absolute z-10 text-red-500 fill-red-500 animate-float pointer-events-none"
                        style={{
                            left: `${h.left}%`,
                            top: "50%",
                            transform: "translateY(-50%)",
                        }}
                    />
                ))}

                {/* 🎆 PARTICLES */}
                {particles.map((p) => (
                    <span
                        key={p.id}
                        className="absolute w-2 h-2 bg-white rounded-full animate-particle pointer-events-none"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                        }}
                    />
                ))}

            </div>

            {/* Actions */}
            <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-5">

                    <Heart
                        size={26}
                        onClick={handleLike}
                        className={`cursor-pointer transition-transform duration-200 ${liked
                            ? "text-red-500 fill-red-500 scale-110 active:scale-95"
                            : "text-black hover:scale-105"
                            }`}
                    />


                    <Send size={24} />
                </div>

                <Bookmark size={24} />
            </div>

            {/* Likes */}
            <div className="px-4 text-sm font-semibold text-black">
                {liked ? "You liked this" : post.likes + " likes"}
            </div>



            {/* Time */}
            <div className="px-4 text-[10px] tracking-widest text-gray-400 mt-2 uppercase">
                5 hours ago
            </div>

            {/* Old Likes */}
            <div className="px-4 text-sm font-semibold">
                {post.likes} likes
            </div>

        </div>
    );
}
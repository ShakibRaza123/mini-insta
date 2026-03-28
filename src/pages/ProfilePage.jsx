import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import {
    ArrowLeft,
    Settings,
    Phone,
    Mail,
    Calendar,
    Heart,
    Eye,
    Plus,
    Bookmark,
    Upload
} from "lucide-react";
import Footer from "../components/layout/Footer";

export default function ProfilePage() {
    const navigate = useNavigate();

    return (
        <div className="w-screen min-h-screen flex justify-center overflow-hidden">

            {/* 📱 MOBILE FRAME */}
            <div className="w-[420px] h-screen flex flex-col overflow-hidden bg-gradient-to-br from-[#1a0010] via-[#2b0018] to-[#0d0010] text-white">

                <div className="relative flex items-center justify-between px-4 py-4 bg-white/5 backdrop-blur-xl border-b border-white/10">

                    {/* 🔙 BACK BUTTON */}
                    <button
                        onClick={() => navigate(-1)}
                        className="group"
                    >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 shadow-md transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110 active:scale-95">

                            <ArrowLeft
                                size={18}
                                className="text-white/90 group-hover:-translate-x-0.5 transition"
                            />

                        </div>
                    </button>

                    {/* 🧠 TITLE CENTER PERFECT */}
                    <h2 className="absolute left-1/2 -translate-x-1/2 font-semibold text-lg tracking-wide">
                        Profile
                    </h2>

                    {/* ⚙️ SETTINGS BUTTON */}
                    <button className="group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 shadow-md transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110 active:scale-95">

                            <Settings
                                size={18}
                                className="text-white/80"
                            />

                        </div>
                    </button>

                </div>

                {/* 📜 SCROLL AREA */}
                <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-24">

                    {/* 👤 PROFILE CARD */}
                    <div className="mt-6 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                        <div className="flex gap-4 items-center">

                            <div className="relative">
                                <img
                                    src="https://i.pravatar.cc/150"
                                    className="w-20 h-20 rounded-full object-cover border-2 border-pink-500"
                                />
                                <div className="absolute bottom-0 right-0 w-5 h-5 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full border border-black"></div>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold leading-tight">
                                    Alexandria <br /> Sterling
                                </h2>

                                <div className="mt-1 px-3 py-1 text-[10px] bg-pink-500/20 text-pink-400 rounded-full inline-block">
                                    ● ACCOUNT ACTIVE
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* 📊 STATS */}
                    <div className="mt-6 grid grid-cols-2 gap-4">


                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">

                            {/* LEFT */}
                            <div>
                                <p className="text-xs text-white/40 uppercase tracking-wide">
                                    Uploaded
                                </p>
                                <h2 className="text-2xl font-semibold text-white mt-1">
                                    124
                                </h2>
                                <p className="text-xs text-white/40">
                                    videos
                                </p>
                            </div>

                            {/* RIGHT ICON */}
                            <div className="bg-white/10 p-2 rounded-full">
                                <Upload size={18} className="text-white/80" />
                            </div>

                        </div>

                        <div className="flex flex-col gap-4">

                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex justify-between items-center">
                                <div>
                                    <p className="text-xs text-white/50">Liked</p>
                                    <p className="font-bold">8.2k</p>
                                </div>
                                <Heart className="text-pink-400" size={18} />
                            </div>

                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex justify-between items-center">
                                <div>
                                    <p className="text-xs text-white/50">Views</p>
                                    <p className="font-bold">45k</p>
                                </div>
                                <Eye className="text-purple-400" size={18} />
                            </div>

                        </div>
                    </div>

                    {/* 📄 DETAILS */}
                    <div className="mt-8">
                        <h3 className="text-xs text-white/40 uppercase mb-3 tracking-widest">
                            Account Details
                        </h3>

                        <div className="space-y-3">

                            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                                <Phone className="text-pink-400" size={18} />
                                <div>
                                    <p className="text-xs text-white/40">Mobile</p>
                                    <p className="font-semibold text-sm">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                                <Mail className="text-purple-400" size={18} />
                                <div>
                                    <p className="text-xs text-white/40">Email</p>
                                    <p className="font-semibold text-sm">alex@email.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                                <Calendar className="text-blue-400" size={18} />
                                <div>
                                    <p className="text-xs text-white/40">Member Since</p>
                                    <p className="font-semibold text-sm">October 2023</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* 🎞 COLLECTIONS */}

                    <div className="mt-10">

                        {/* HEADER */}
                        <div className="flex justify-between items-center mb-5">
                            <h3 className="text-[11px] text-white/40 uppercase tracking-[0.25em]">
                                Collections
                            </h3>
                            <button className="text-xs text-pink-400 font-semibold hover:text-pink-300 transition">
                                See All
                            </button>
                        </div>

                        {/* CARDS */}
                        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-3">

                            {/* 🔥 MY UPLOADS */}
                            <div className="relative w-44 h-64 rounded-3xl p-[1px] bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 group cursor-pointer">

                                <div className="relative w-full h-full rounded-3xl bg-[#0d0010]/80 backdrop-blur-xl overflow-hidden">

                                    {/* LIGHT EFFECT */}
                                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition bg-gradient-to-br from-white/20 to-transparent"></div>

                                    {/* ICON */}
                                    <div className="absolute top-4 left-4 bg-white/10 p-2 rounded-full backdrop-blur-md border border-white/10">
                                        <Upload size={16} className="text-white" />
                                    </div>

                                    {/* TEXT */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <p className="text-white font-semibold text-sm tracking-wide">
                                            My Uploads
                                        </p>
                                        <p className="text-xs text-white/50">124 videos</p>
                                    </div>

                                </div>

                            </div>

                            {/* 🔥 SAVED */}
                            <div className="relative w-44 h-64 rounded-3xl p-[1px] bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 group cursor-pointer">

                                <div className="relative w-full h-full rounded-3xl bg-[#0d0010]/80 backdrop-blur-xl overflow-hidden">

                                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition bg-gradient-to-br from-white/20 to-transparent"></div>

                                    <div className="absolute top-4 left-4 bg-white/10 p-2 rounded-full backdrop-blur-md border border-white/10">
                                        <Bookmark size={16} className="text-white" />
                                    </div>

                                    <div className="absolute bottom-4 left-4 right-4">
                                        <p className="text-white font-semibold text-sm tracking-wide">
                                            Saved Clips
                                        </p>
                                        <p className="text-xs text-white/50">8.2k items</p>
                                    </div>

                                </div>

                            </div>

                            {/* ➕ NEW */}
                            <div className="relative w-44 h-64 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col items-center justify-center text-white/40 group cursor-pointer hover:border-pink-400/40 transition">

                                {/* GLOW */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-pink-500 to-purple-500 blur-xl transition"></div>

                                <div className="relative bg-white/10 p-4 rounded-full border border-white/10 backdrop-blur-md group-hover:scale-110 transition">
                                    <Plus size={18} />
                                </div>

                                <span className="mt-3 text-xs tracking-wide text-white/60 group-hover:text-white transition">
                                    New Collection
                                </span>

                            </div>

                        </div>
                    </div>

                    {/* 🚪 LOGOUT */}
                    <button className="mt-10 w-full relative overflow-hidden rounded-full p-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg group">

                        <div className="flex items-center justify-center gap-2 py-3 rounded-full bg-black/80 backdrop-blur-xl group-hover:bg-black/60 transition">

                            <LogOut size={18} className="text-white/90 group-hover:translate-x-1 transition" />

                            <span className="font-semibold text-white">
                                Logout
                            </span>

                        </div>
                    </button>

                </div>

                {/* 🔻 FOOTER */}
                <Footer />
            </div>
        </div>
    );
}
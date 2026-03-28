import { useState } from "react";
import { ArrowLeft, User, Phone, Lock, Eye, EyeOff } from "lucide-react";

export default function Register({ switchToLogin }) {
    const [form, setForm] = useState({
        name: "",
        mobile: "",
        password: "",
    });

    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-[#f4e9f7] flex justify-center items-center">

            {/* MOBILE FRAME BORDER FIX */}
            <div className="w-full max-w-sm bg-white min-h-screen px-5 pt-6 border border-gray-300 rounded-xl shadow-sm">

                {/* Back */}
                <div className="mb-6">
                    <button
                        onClick={switchToLogin}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 cursor-pointer"
                    >
                        <ArrowLeft size={18} />
                    </button>
                </div>

                {/* Heading */}
                <h1 className="text-xl font-semibold text-black mb-5">
                    Register With us
                </h1>

                {/* Google */}
                <button className="w-full border border-gray-300 py-3 text-sm mb-5 flex items-center justify-center gap-2 rounded-md hover:bg-gray-50 transition">

                    {/* Google SVG */}
                    <svg width="18" height="18" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.73 1.22 9.23 3.6l6.88-6.88C35.64 2.7 30.2 0 24 0 14.64 0 6.73 5.48 2.69 13.44l8.02 6.23C12.62 13.14 17.87 9.5 24 9.5z" />
                        <path fill="#4285F4" d="M46.5 24.5c0-1.7-.15-3.34-.43-4.91H24v9.29h12.68c-.55 2.96-2.2 5.48-4.7 7.18l7.28 5.66C43.98 37.4 46.5 31.43 46.5 24.5z" />
                        <path fill="#FBBC05" d="M10.71 28.67a14.5 14.5 0 010-9.34l-8.02-6.23A23.93 23.93 0 000 24c0 3.84.92 7.48 2.69 10.56l8.02-6.23z" />
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.14 15.9-5.8l-7.28-5.66c-2.02 1.36-4.6 2.16-8.62 2.16-6.13 0-11.38-3.64-13.29-8.84l-8.02 6.23C6.73 42.52 14.64 48 24 48z" />
                    </svg>

                    Continue with Google
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 mb-5">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-xs text-gray-500">OR</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                {/* Inputs */}
                <div className="space-y-5">

                    {/* Name */}
                    <div className="relative">
                        <User size={18} className="absolute left-3 top-3.5 text-gray-400" />

                        <input
                            type="text"
                            name="name"
                            placeholder=" "
                            onChange={handleChange}
                            className="peer w-full border border-gray-400 px-10 pt-5 pb-2 text-sm focus:outline-none focus:border-black rounded-md"
                        />

                        <label className="absolute left-10 top-2 text-xs text-gray-500 transition-all 
                        peer-placeholder-shown:top-3.5 
                        peer-placeholder-shown:text-sm 
                        peer-placeholder-shown:text-gray-400 
                        peer-focus:top-2 
                        peer-focus:text-xs 
                        peer-focus:text-black">
                            Full Name
                        </label>
                    </div>

                    {/* Mobile */}
                    <div className="relative">
                        <Phone size={18} className="absolute left-3 top-3.5 text-gray-400" />

                        <input
                            type="number"
                            name="mobile"
                            placeholder=" "
                            onChange={handleChange}
                            className="peer w-full border border-gray-400 px-10 pt-5 pb-2 text-sm focus:outline-none focus:border-black rounded-md"
                        />

                        <label className="absolute left-10 top-2 text-xs text-gray-500 transition-all 
                        peer-placeholder-shown:top-3.5 
                        peer-placeholder-shown:text-sm 
                        peer-placeholder-shown:text-gray-400 
                        peer-focus:top-2 
                        peer-focus:text-xs 
                        peer-focus:text-black">
                            Mobile Number
                        </label>

                        <p className="text-xs text-gray-500 mt-1">
                            OTP verification will be enabled
                        </p>
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <Lock size={18} className="absolute left-3 top-3.5 text-gray-400" />

                        <input
                            type={show ? "text" : "password"}
                            name="password"
                            placeholder=" "
                            onChange={handleChange}
                            className="peer w-full border border-gray-400 px-10 pr-10 pt-5 pb-2 text-sm focus:outline-none focus:border-black rounded-md"
                        />

                        <label className="absolute left-10 top-2 text-xs text-gray-500 transition-all 
                        peer-placeholder-shown:top-3.5 
                        peer-placeholder-shown:text-sm 
                        peer-placeholder-shown:text-gray-400 
                        peer-focus:top-2 
                        peer-focus:text-xs 
                        peer-focus:text-black">
                            Password
                        </label>

                        <div
                            className="absolute right-3 top-3.5 cursor-pointer text-gray-500"
                            onClick={() => setShow(!show)}
                        >
                            {show ? <EyeOff size={16} /> : <Eye size={16} />}
                        </div>
                    </div>

                </div>

                {/* BUTTON FIX */}
                <button className="w-full mt-6 py-3 text-sm font-medium bg-black text-white hover:bg-gray-800 transition rounded-md">
                    Register
                </button>

                {/* Footer */}
                <p className="text-xs text-gray-500 mt-5 text-center">
                    Already have an account?{" "}
                    <span
                        onClick={switchToLogin}
                        className="text-black font-medium cursor-pointer"
                    >
                        Login
                    </span>
                </p>

                <p className="text-[10px] text-gray-400 text-center mt-10">
                    Powered by Example Co.
                </p>

            </div>
        </div>
    );
}
import { useState, useEffect } from "react";
import { ArrowLeft, Phone, Lock, Eye, EyeOff } from "lucide-react";


export default function Login({ switchToRegister }) {
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [useOtp, setUseOtp] = useState(false);

    // OTP STATES
    const [otpMode, setOtpMode] = useState(false);
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleLogin = () => {
        if (!mobile) return alert("Mobile required");
        if (mobile.length !== 10) return alert("Enter valid number");

        if (useOtp) {
            setOtpMode(true);
            setTimer(30);
            return;
        }

        if (!password) return alert("Password required");

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert("Login success");
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-white flex justify-center items-center">

            <div className="w-full max-w-sm bg-white min-h-screen px-6 pt-8 border border-gray-200 rounded-2xl shadow-md">

                {/* ================= LOGIN SAME ================= */}
                {!otpMode && (
                    <>
                        {/* Logo */}
                        <div className="flex justify-center mb-6">
                            <img
                                src="https://dummyimage.com/100x100/000/fff&text=LOGO"
                                alt="logo"
                                className="w-20 h-20 object-contain"
                            />
                        </div>

                        {/* Heading */}
                        <h1 className="text-2xl font-semibold text-black mb-6 text-center">
                            Log into IG
                        </h1>

                        {/* Mobile */}
                        <div className="relative mb-5">
                            <Phone size={18} className="absolute left-4 top-4 text-gray-400" />

                            <input
                                type="tel"
                                inputMode="numeric"
                                maxLength={10}
                                value={mobile}
                                onChange={(e) => {
                                    let val = e.target.value.replace(/\D/g, "");
                                    if (val.length <= 10) setMobile(val);
                                }}
                                placeholder=" "
                                className="peer w-full pl-11 pr-4 pt-5 pb-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-black transition"
                            />

                            <label className="absolute left-11 top-3 text-sm text-gray-400 transition-all
                            peer-placeholder-shown:top-4 
                            peer-placeholder-shown:text-sm 
                            peer-focus:top-2 
                            peer-focus:text-xs 
                            peer-focus:text-black
                            peer-not-placeholder-shown:top-2 
                            peer-not-placeholder-shown:text-xs">
                                Mobile Number
                            </label>
                        </div>

                        {/* Password */}
                        {!useOtp && (
                            <div className="relative mb-4">
                                <Lock size={18} className="absolute left-4 top-4 text-gray-400" />

                                <input
                                    type={show ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder=" "
                                    autoComplete="new-password"
                                    className="peer w-full pl-11 pr-10 pt-5 pb-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-black transition"
                                />

                                <label className="absolute left-11 top-3 text-sm text-gray-400 transition-all
                                peer-placeholder-shown:top-4 
                                peer-placeholder-shown:text-sm 
                                peer-focus:top-2 
                                peer-focus:text-xs 
                                peer-focus:text-black
                                peer-not-placeholder-shown:top-2 
                                peer-not-placeholder-shown:text-xs">
                                    Password
                                </label>

                                <div
                                    className="absolute right-4 top-4 cursor-pointer text-gray-400 hover:text-black transition"
                                    onClick={() => setShow(!show)}
                                >
                                    {show ? <EyeOff size={18} /> : <Eye size={18} />}
                                </div>
                            </div>
                        )}

                        {/* Switch */}
                        <p
                            onClick={() => setUseOtp(!useOtp)}
                            className={`text-xs text-center mb-5 cursor-pointer font-medium 
    ${useOtp ? "text-black underline" : "text-gray-500"}`}
                        >
                            {useOtp ? "Login with Password" : "Login with OTP"}
                        </p>


                        {/* Button */}
                        <button
                            onClick={handleLogin}
                            disabled={mobile.length !== 10}
                            className={`w-full py-3 text-sm font-medium bg-black text-white rounded-md transition 
                    ${mobile.length !== 10 ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {useOtp ? "Send OTP" : "Login"}
                        </button>

                        {/* Divider */}
                        <div className="flex items-center my-5">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            <span className="px-3 text-xs text-gray-400">OR</span>
                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>

                        {/* Google */}
                        <button className="w-full border border-gray-300 py-3 rounded-md flex items-center justify-center gap-2 text-sm hover:bg-gray-50 transition">
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                className="w-5 h-5"
                            />
                            Continue with Google
                        </button>

                        {/* Footer */}
                        <p className="text-xs text-gray-500 mt-6 text-center">
                            Don’t have an account?{" "}
                            <span
                                onClick={switchToRegister}
                                className="text-black font-medium cursor-pointer"
                            >
                                Register
                            </span>
                        </p>
                    </>
                )}

                {/* ================= OTP SCREEN (NO DESIGN CHANGE) ================= */}
                {otpMode && (
                    <>
                        {/* Top Bar */}
                        <div className="flex items-center mb-6">
                            <button
                                onClick={() => setOtpMode(false)}
                                className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100"
                            >
                                <ArrowLeft size={18} />
                            </button>
                        </div>
                        {/* Heading */}
                        <h1 className="text-xl font-semibold text-black mb-2 text-center">
                            We just sent an SMS
                        </h1>

                        <p className="text-sm text-gray-500 text-center mb-6">
                            Enter the security code we sent to <br />
                            <span className="font-medium text-black">+91 {mobile}</span>
                        </p>

                        {/* OTP BOXES */}
                        <div className="flex justify-center gap-3 mb-6">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => {
                                        const val = e.target.value.replace(/\D/g, "");
                                        const newOtp = [...otp];
                                        newOtp[index] = val;
                                        setOtp(newOtp);

                                        if (val && e.target.nextSibling) {
                                            e.target.nextSibling.focus();
                                        }
                                    }}
                                    className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg focus:outline-none focus:border-black"
                                />
                            ))}
                        </div>

                        {/* Verify Button (YOUR THEME) */}
                        <button className="w-full py-3 text-sm font-medium bg-black text-white rounded-md mb-4">
                            Verify
                        </button>

                        {/* Timer / Resend */}
                        <div className="text-center">
                            {timer > 0 ? (
                                <p className="text-xs text-gray-500">
                                    Didn’t receive code? <br />
                                    <span className="font-medium">
                                        Resend - 00:{timer < 10 ? `0${timer}` : timer}
                                    </span>
                                </p>
                            ) : (
                                <p
                                    onClick={() => setTimer(30)}
                                    className="text-xs underline cursor-pointer"
                                >
                                    Resend OTP
                                </p>
                            )}
                        </div>
                    </>
                )}

            </div>
        </div>
    );
}
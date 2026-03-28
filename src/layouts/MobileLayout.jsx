export default function MobileLayout({ children }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-200">

            {/* 📱 Mobile Frame */}
            <div className="w-[360px] h-screen relative bg-black rounded-3xl shadow-2xl overflow-hidden">

                {children}

            </div>

        </div>
    );
}
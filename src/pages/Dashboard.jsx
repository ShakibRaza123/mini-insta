import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import VideoMain from "../components/video/VideoMain";
export default function Dashboard() {
    return (
        <div className="h-full overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar pt-14 pb-16 overscroll-contain">

            {/* Header */}
            <Header />

            {/* Video Section */}
            <div className="flex-1 overflow-hidden">
                <VideoMain />
            </div>

            {/* Footer */}
            <Footer />

        </div>
    );
}
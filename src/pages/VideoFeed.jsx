import VideoCard from "../components/video/VideoCard";

const videos = [
    {
        id: 1,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        username: "user1",
    },
];

export default function VideoFeed() {
    return (
        <div className="absolute inset-0 overflow-y-scroll snap-y snap-mandatory">
            {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
            ))}
        </div>
    );
}
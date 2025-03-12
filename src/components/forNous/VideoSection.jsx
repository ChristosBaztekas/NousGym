export const VideoSection = () => {
    return (
        <main className="flex justify-center items-center p-5 lg:p-20">
            {/* Container with aspect ratio 16:9 */}
            <div className="w-full max-w-7xl aspect-video">
                <iframe
                    className="w-full h-full rounded-xl shadow-lg"
                    src="https://www.youtube.com/embed/OKHHfJkdmnY?si=2VNjMio9U_YJXolM"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </main>
    );
};

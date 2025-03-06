export const VideoSection = () => {
    return (
        <main className="flex justify-center items-center">
            {/* Video Section */}
            <iframe
                className="h-60 sm:h-[600px] m-5 lg:m-20"
                width="100%" height="100%"
                src="https://www.youtube.com/embed/qC0vDKVPCrw?autoplay=1&mute=1&controls=0&modestbranding=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </main>
    )
}
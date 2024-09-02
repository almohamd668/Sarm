const VideoBox = ({ name, image }) => {
  return (
    <div className="mySwiper flex items-center justify-center relative mx-2">
      <video
        src={image}
        loop
        muted
        autoPlay
        className="h-[400px] w-[50%] object-cover rounded-[20%] bg-opacity-10"
      ></video>
      <div className="absolute inset-0 flex items-end justify-center pb-4">
        <span
          className="block text-4xl font-bold italic bg-gradient-to-r from-primary via-cyan/80 to-[#5e33ff] bg-200% text-transparent animate-gradientX z-50"
          style={{
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          {name}
        </span>
      </div>
    </div>
  );
};

export default VideoBox;

const VideoBox = ({ name, image }) => {
  return (
    <div className="mySwiper flex items-center justify-center relative mx-4">
      <video
        src={image}
        loop
        muted
        autoPlay
        className="h-[400px] w-[40%] object-cover rounded-[20%] opacity-75"
      ></video>
      <div className="absolute inset-0 flex items-end justify-center pb-4">
        <span className="block text-white text-4xl font-bold z-50 italic">
          {name}
        </span>
      </div>
    </div>
  );
};

export default VideoBox;

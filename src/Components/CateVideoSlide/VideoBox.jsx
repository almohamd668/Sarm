
const VideoBox = ({ name, image }) => {

return (
  <div
    className="text-white  bg-[#21293c] shadow-[8px_8px_1px_8px_#1c202c]
   h-[60vh] relative overflow-hidden 
    bg-gradient-to-r from-[#955cff] to-[#955cffc7]"
  >
    <div className="mySwiper flex items-center relative mx-4 ">
      <video
        src={image}
        loop
        muted
        autoPlay
        className="h-[600px] w-[52%] object-cover rounded-[20%] ms-80 bg-opacity-85"
      ></video>
      <span className="absolute top-60 left-50 w-full h-full flex items-center justify-center">
        <span className="block text-black text-4xl font-bold z-50 italic">
          {name}
        </span>
      </span>
    </div>
  </div>
);

};

export default VideoBox;

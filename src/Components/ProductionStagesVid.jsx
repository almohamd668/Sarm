import video from "../assets/videoProStage.mp4";
const ProductionStagesVid = () => {

  return (
    <div className="relative py-16">
      <div
        className="absolute inset-0 z-[-1]  bg-cover  bg-center bg-no-repeat h-full w-full"
        style={{
          backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.331), 
                rgba(0, 0, 0, 0.393)),
                url("https://cdn.msaaq.com/pages/242547/asset-pink-bg.svg")`,
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className=" flex justify-center max-w-full   flex-col gap-2">
      
      <h2 className=" text-2xl mb-5 md:text-3xl md:ms-9  text-center md:hidden  md:font-bold text-transparent text-trans1">
        Production stages
      </h2>

      <div className="md:h-[535px]  max-w-full flex items-center justify-center relative mx-2">
        <video
          src={video}
          loop
          muted
          autoPlay
          height={500}
          className=" h-[100%] max-w-full w-[100%] md:w-[75%] object-cover rounded-[2%] bg-opacity-2"
        ></video>
        <div className="absolute inset-0 flex items-end justify-center pb-4">
          <span
            className="block text-lg md:text-4xl font-bold italic bg-gradient-to-r from-primary via-cyan/80 to-[#5e33ff] bg-200% text-transparent animate-gradientX z-50"
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          ></span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionStagesVid;

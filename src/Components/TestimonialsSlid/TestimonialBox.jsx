const TestimonialBox = ({ name, image, position, desc }) => {
  return (
    
    <div className="text-white transition-all duration-150 rounded-[5px] bg-cyan bg-opacity-[0.1]  p-[30px] shadow-lg hover:shadow-cyan/80 backdrop-filter backdrop-blur-[3px] mb-4 hover:scale-105">
      <p className="text-lg font-normal italic tracking-[0.8px] mb-[30px]">
        {desc}
      </p>
      <div className="flex items-center gap-6 ">
        ✨
        <img
          src={image}
          alt=""
          className="w-[50px] h-[50px] object-contain rounded-full"
        />
        <div className="">
          <strong className="block mb-2">{name}</strong>

          <p className="text-sm font-normal">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;

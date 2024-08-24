const TestimonialBox = ({ name, image, position, desc }) => {
  return (
    <div className="text-white rounded-[5px] bg-[#21293c]  p-[30px] shadow-[8px_8px_1px_8px_#1c202c] ">
      <p className="text-sm font-normal tracking-[0.8px] mb-[30px]">{desc}</p>
      <div className="flex items-center gap-6 ">
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

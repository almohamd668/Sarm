const TestimonialBox = ({ name, image, position, desc }) => {
  return (
    <div className="text-white  rounded-[5px] bg-[#21293c]  p-[30px] shadow-lg hover:shadow-blue-500/50  mb-4 hover:scale-105">
      <p className="text-sm font-normal italic tracking-[0.8px] mb-[30px]">{desc}</p>
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

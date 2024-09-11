const TestimonialBox = ({ name, image, position, desc }) => {
  return (
    
 <div className="flex items-center justify-center">
     <div className=" text-white w-[200px] md:w-[400px] transition-all duration-150 rounded-[5px] bg-cyan bg-opacity-[0.1]  p-[30px] shadow-lg hover:shadow-cyan/80 backdrop-filter backdrop-blur-[3px] mb-4 hover:scale-105">
     <p className="md:text-lg font-normal italic text-sm  tracking-[0.8px] mb-[30px]">
     {desc}
       </p>
       <div className="flex items-center gap-6 ">
       <span className="hidden md:inline">      ✨  </span>
         <img
           src={image}
           alt=""
           className="w-[50px] h-[50px] object-contain rounded-full"
         />
         <div className="">
           <strong className="block mb-2 text-sm ">{name}</strong>
  
           <p className="text-sm  font-normal">{position}</p>
         </div>
       </div>
     </div>
 </div>
  );
};

export default TestimonialBox;

const ProgressBar = ({ width , num, name }) => {
  return (
    <div className="con-bro1 grid w-full grid-rows-2 gap-2">
      <h3 className="text-white indent-5 font-bold md:ms-5"> {`${name}`} </h3>
      <div className="shadow-md shadow-secondary bg-slate-700 h-3 rounded-full flex ">
        <div
          className="animate-increaseWidth bg-gradient-to-r from-primary to-secondary w-[50%] h-full 
        flex justify-center items-center text-white font-bold rounded-full text-[14px]"
          style={{ "--width": width }}
        >
   <span className="ms-7">  {`${num}%`} </span>    
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

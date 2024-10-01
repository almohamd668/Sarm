import imge from "../assets/new_prod.png";

const comingSoon = () => {
  return (
    <section className="relative ">

      <div className="py-[60px]">
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
        <div className=" element-center  container  flex-col  gap-x-3 md:gap-x-6 justify-around">
          <div className="flex flex-col ">  
              <h2 className=" text-2xl mb-5 md:text-5xl w-full text-center  md:font-bold text-transparent text-trans1">
              Coming Soon
              </h2>
                <div className="element-center md:flex-col flex-wrap 
                items-center md:items-start md:ps-10 gap-2  flex-col
                md:gap-4 my-5  md:gap-x-3 max-w-full w-[280px] md:w-auto">
    
                </div>
           </div>

       <div className="flex items-center flex-col  gap-5 md:flex-row  justify-center md:gap-x-10">

       <div className=" flex items-center justify-center relative mx-2 ">
       <img
         src={imge}
   
         className=" h-full md:h-[350px] w-[490px] md:w-[100%] object-cover rounded-[20%] bg-opacity-10"
       ></img>
       <span className="absolute inset-0 flex items-end bottom-0 justify-center pb-1 md:pb-2">
         <span
           className="block  text-lg md:text-4xl font-bold italic bg-gradient-to-r from-primary via-cyan/80 to-[#5e33ff] bg-200% text-transparent animate-gradientX z-20"
           style={{
             backgroundClip: "text",
             WebkitBackgroundClip: "text",
           }}
         >
         Titans Liver Comfort
         </span>
       </span>
     </div>

          
          <div className=" flex items-center justify-center relative mx-2 ">
            <img
              src={imge}
              className=" h-full md:h-[350px] w-[490px] md:w-[100%] object-cover rounded-[20%] bg-opacity-10"
            ></img>
            <span className="absolute inset-0 flex items-end bottom-0 justify-center pb-1 md:pb-2">
              <span
                className="block text-lg md:text-4xl font-bold italic bg-gradient-to-r from-primary via-cyan/80 to-[#5e33ff] bg-200% text-transparent animate-gradientX z-20"
                style={{
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                }}
              >
              Titans Liver Comfort
              </span>
            </span>
          </div>

       </div>
                         
        </div>
      </div>
    </section>

  )
}

export default comingSoon
import imge from "../assets/soon.jpg";

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
        <div className=" element-center  container md:ps-26 flex-col md:flex-row gap-3 md:gap-6 justify-around">
          <div className="flex flex-col ">  
              <h2 className=" text-2xl mb-5 md:text-3xl md:ms-9 w-[270px] text-center  md:font-bold text-transparent text-trans1">
                 OUR PRODUCTS
              </h2>
                <div className="element-center md:flex-col flex-wrap 
                items-center md:items-start md:ps-10 gap-2
                md:gap-4 my-5  md:gap-x-3 max-w-full w-[280px] md:w-auto">
    
                </div>
           </div>

             <div className="">
               
             </div>
                         
        </div>
      </div>
    </section>

  )
}

export default comingSoon
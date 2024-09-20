import image from "../assets/about-logo-r.png";

const About = () => {
  return (
    <div className="relative h-[95vh] py-10 md:py-10 md:pt-16">
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat bg-gradient-to-r
         from-[#05364d77] to-[rgba(0,0,0,0.49)] bg-[url('https://cdn.msaaq.com/pages/239600/picinj2.jpg')] 
         bg-fixed h-auto blur-sm"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.493),#05364d77 ),
           url("https://cdn.msaaq.com/pages/239600/picinj2.jpg")`,
          backgroundAttachment: "fixed",
          height: "auto",
          filter: "blur(2px)",
          WebkitFilter: "blur(1px)", // for Safari support
        }}
      ></div>
      <div className="col-span-12 flex flex-col gap-2 md:gap-6 lg:col-span-8 text-center lg:col-start-3 mb-3 md:mb-8">
        <div className="flex flex-col text-center lg:col-start-3">
          <h2 className="text-3xl md:text-4xl lg:text-6xl section-title md:mb-2 font-bold text-transparent text-trans1">
            ABOUT US
          </h2>
        </div>
      </div>
      <div className="px-[30px] md:px-[150px] md:pe-[32px] relative mx-auto flex h-full w-full items-start justify-center">
        <div className="flex flex-col gap-0  md:gap-6 items-start lg:flex-row order-2">
          <div className="w-full lg:w-1/2 relative block md:hidden  h-[100px] md:h-auto">
            <img
              src={image}
              alt="About Logo"
              className="mx-auto h-full scale-95 md:scale-[1.08] translate-y-[-7px]"
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/2 text-start">
            <h2 className="text-white text-[16px] md:text-4xl section-title mb-2 font-bold text-center italic">
            Titans Pharmaceuticals Ltd Lab has established its reputation as
            an excellent manufacturer of performance enhancing drugs.
            </h2>
            <div
              className="text-white/95   max-w-full
             italic text-center  text-sm md:text-[17px] font-semibold   md:px-[35px]"
            >
              <p className=" ">
                We
                care for the quality of our products we offer to our clients.
                For ensuring the quality and effectiveness of our drugs, we have
                got a dedicated research and development centre where our
                professionals are always seeking to make our products more
                effective. 
              </p>
            </div>
            <div className="col-span-12 mt-1 md:mt-4 flex flex-wrap gap-2 justify-start">
              <a
                role="button"
                target="blank"
                className="btn text-white w-full h-3 font-bold text-lg"
                href="https://www.instagram.com/titans_iraq_sport/?igsh=MW51MzFucm40N3VzMQ%3D%3D"
              >
                <div>Learn More</div>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative hidden md:block ">
            <img
              src={image}
              alt="About Logo"
              className="mx-auto h-full scale-[1.0] translate-y-[-8px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

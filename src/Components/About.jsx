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
          <h2 className="text-3xl md:text-4xl lg:text-6xl section-title mb-2 font-bold text-transparent text-trans1">
            ABOUT US
          </h2>
        </div>
        
      </div>
      <div className="px-[30px] md:px-[150px] md:pe-[32px] relative mx-auto flex h-full w-full items-start justify-center">
        <div className="flex flex-col gap-2  md:gap-6 items-start lg:flex-row order-2">
        <div className="w-full lg:w-1/2 relative block md:hidden ">
        <img
          src={image}
          alt="About Logo"
          className="mx-auto h-full scale-[1.08] translate-y-[-7px]"
        />
      </div>
          <div className="flex flex-col w-full lg:w-1/2 text-start">
            <h2 className="text-white text-lg md:text-4xl section-title mb-2 font-bold text-center italic">
              OUR MISSION AND VISION Reliability, credibility and excellence are
              the principles that we are standing for
            </h2>
            <div className="text-white sm:prose-base prose-custom-blockquote max-w-full
             italic text-center line-clamp-3 px-4 md:px-[35px]">
              <p>
                For ensuring the quality and effectiveness of our drugs, we have
                got a dedicated research and development centre where our
                professionals are always seeking to make our products more
                effective. We are enthusiastic and passionate about providing
                quality products and services that improve performance and
                deliver outstanding results to our customers.
              </p>
            </div>
            <div className="col-span-12 mt-4 flex flex-wrap gap-2 justify-start">
              <a
                role="button"
                className="btn text-white w-full h-3 font-bold text-lg"
                target="_self"
                href="/#"
              >
                <div>Learn More</div>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative hidden md:block ">
            <img
              src={image}
              alt="About Logo"
              className="mx-auto h-full scale-[1.08] translate-y-[-7px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

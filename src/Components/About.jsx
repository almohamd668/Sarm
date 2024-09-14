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

          <div className="flex flex-col w-full lg:w-1/2 text-start items-center justify-center mt-[40px]">
            <h2 className="text-white text-lg md:text-4xl section-title mb-2 font-bold text-center italic">
            We are looking for distribution partners with experience in all countries
             Please do not hesitate
             to contact us if you have the required experience and capabilities
            </h2>
           
            <div className=" mt-4 flex gap-2 justify-start">
            <a target="_blank" rel="noopener noreferrer" href="https://t.me/+905354669000">
            <span className="sr-only">telegram</span>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-current text-gray-700 hover:text-primary icon-telegram hover:scale-125"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path>
            </svg>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/titans_iraq_sport?igsh=MW51MzFucm40N3VzMQ==">
            <span className="sr-only">instagram</span>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-current text-gray-700 hover:text-primary icon-instagram hover:scale-125"
            >
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
            </svg>
          </a>
              <a
                role="button"
                className="btn text-white w-full h-3 font-bold text-lg"
                target="_self"
                href="/#"
              >
                <div>Learn More</div>
              </a>
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
              className="mx-auto h-full scale-75 translate-y-[-17px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

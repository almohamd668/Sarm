const Services = () => {
  return (
    <section className="relative px-6">
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.431), rgba(0, 0, 0, 0.493)), url("https://cdn.msaaq.com/pages/239320/asset-1.svg")`,
          backgroundAttachment: "fixed",
          height: "auto",
        }}
      ></div>

      <div className="col-span-12 flex flex-col gap-6 lg:col-span-8 text-center lg:col-start-3 mb-2 md:mb-8 pt-[20px] md:pt-[50px]">
        <div className="flex flex-col text-center lg:col-start-3">
          <h2 className="text-lg md:text-4xl lg:text-6xl section-title md:mb-2 font-bold text-transparent text-trans">
            We support more than <br className="hidden md:inline" /> 10,000 professional supplement product 
          </h2>
        </div>
      </div>

      <div className="col-span-12 px-4 md:px-10 pb-[30px] md:pb-[100px] pt-5">
        <div className="grid w-full gap-x-8 lg:grid-cols-3 grid-cols-1 gap-2">
          <div className="feature-card flex flex-col items-center gap-4">
            <div className="feature-text text-center">
              <h3 className="text-white text-2xl md:text-3xl lg:text-[40px] feature-title font-semibold">
                +20
              </h3>
              <div className="feature-description text-lg md:text-xl text-white">
                <p>Supported countries</p>
              </div>
            </div>
          </div>
          <div className="feature-card flex flex-col items-center gap-4">
            <div className="feature-text text-center">
              <h3 className="text-white text-2xl md:text-3xl lg:text-[40px] feature-title font-semibold">
                1.5k+
              </h3>
              <div className="feature-description text-lg md:text-xl text-white">
                <p>Happy clients</p>
              </div>
            </div>
          </div>
          <div className="feature-card flex flex-col items-center gap-4">
            <div className="feature-text text-center">
              <h3 className="text-white text-2xl md:text-3xl lg:text-[40px] feature-title font-semibold">
                +10,000
              </h3>
              <div className="feature-description text-lg md:text-xl text-white">
                <p>Visitors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

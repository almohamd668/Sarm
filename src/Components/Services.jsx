const Services = () => {
  return (
    <section className=" relative">
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-[center_center] bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.431), rgba(0, 0, 0, 0.493)), url("https://cdn.msaaq.com/pages/239320/asset-1.svg")`,

          backgroundAttachment: "fixed",
          height: "auto ",
        }}
      ></div>

      <div className="col-span-12 flex flex-col gap-6 lg:col-span-8 text-center lg:col-start-3 mb-8 pt-[100px]">
        <div className="flex flex-col text-center lg:col-start-3">
          <h2 className=" text-6xl section-title mb-2 font-bold text-transparent text-trans">
            We support more than <br /> 10,000 supplement product professionals
          </h2>
        </div>
      </div>

      <div className="col-span-12  px-10  pb-[100px] pt-5">
        <div className="grid w-full gap-x-8 lg:grid-cols-3 grid-cols-1">
          <div className="feature-card   ">
            <div className="feature-text text-center">
              <h3 className="text-white text-[40px] feature-title font-semibold">
                +20
              </h3>
              <div className="feature-description text-xl text-white">
                <p> Available corses</p>
              </div>
            </div>
          </div>
          <div className="feature-card flex h-full flex-col items-center gap-4">
            <div className="feature-text text-center">
              <h3 className="text-white text-[40px] feature-title font-semibold">
                1.5+
              </h3>
              <div className="feature-description text-xl text-white">
                <p> Happy client</p>
              </div>
            </div>
          </div>
          <div className="feature-card flex h-full flex-col items-center gap-4">
            <div className="feature-text text-center">
              <h3 className="text-white text-[40px] feature-title font-semibold">
                +10,000
              </h3>
              <div className="feature-description text-xl text-white">
                <p> person </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import image from "../assets/about-logo-r.png";
// import imageBg from "../assets/Asset-4.svg";

const About = () => {
  return (
    <div className="relative py-16 ">
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-[center_center] bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.631), rgba(0, 0, 0, 0.693)), url("https://cdn.msaaq.com/pages/239600/picinj2.jpg")`,

          backgroundAttachment: "fixed",
          height: "auto ",
        }}
      ></div>
      <div className="container relative mx-auto flex h-full w-full items-start justify-center ">
        <div className=" flex flex-col gap-6 items-start lg:flex-row order-2">
          <div className="flex flex-col w-full w-1/2 text-start ">
            <h2 className="text-white text-4xl section-title mb-2 font-bold ">
              OUR MISSION AND VISION Reliability, credibility and excellence are
              the principles that we are standing for
            </h2>
            <div className=" text-white  sm:prose-base prose-custom-blockquote max-w-full">
              <p>
                For ensuring the quality and effectiveness of our drugs, we have
                got a dedicated research and development centre where our
                professionals are always seeking make our products more
                effective. We are enthusiastic and passionate about providing
                quality products and services that improve performance and
                deliver outstanding results to our customers.
              </p>
            </div>
            <div className="col-span-12 mt-4 flex flex-wrap gap-2 justify-start">
              <a
                role="button"
                className="btn text-white"
                target="_self"
                href="/about-us"
              >
                <div> learn more</div>
              </a>
            </div>
          </div>
          <div className=" w-[70%]">
            <img
              src={image}
              className="mx-auto h-auto max-w-full"
              height={880}
              width={880}
              alt="Logo of the company"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

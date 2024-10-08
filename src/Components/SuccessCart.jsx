import logo from "../assets/logo.svg";
const SuccessSection = () => {
  return (
    <section
      id="block-8f6791a0"
      className="h-[500px]  bg-gradient-to-b from-[rgb(154,174,212)]
        to-[#2d3b57] rounded-[24px]  relative 
        overflow-hidden px-4 py-18
         lg:!p-16 block-type-image"
    >
      <div className="container relative mx-auto flex h-full w-full items-center justify-center">
        <div className="grid w-full grid-cols-12 gap-3">
          <div className="col-span-12 flex gap-6 items-center flex-col lg:col-span-8 lg:col-start-3 order-2">
            <div className="w-full lg:w-1/2 border-r-green-600">
              <img
                src="https://cdn.msaaq.com/pages/215447/group-29.svg"
                className="mx-auto h-auto max-w-full w-[150px] md-w-[200px] animate-rotateY"
                alt="success"
              />
            </div>
            <div className="flex flex-col w-full lg:w-1/2 text-center lg:col-start-3">
              <h2 className="text-white/80 text-3xl md:text-5xl  section-title mb-2 font-bold">
                Your Product Is Confirmed
              </h2>
              <div
                className="section-content
               text-white/80
               !prose-currentColor 
               prose-custom-blockquote max-w-full"
              >
                <p>The product is original. Thank you for choosing Titans Max Plus</p>
              </div>
            </div>
            <img
              src={logo}
              className="mx-auto h-auto max-w-full w-[200px] "
              alt=" logo "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;

const Notfound = () => {
  return (
    <section
      id="block-8f691a0"
      className="h-[100vh]  bg-gradient-to-b from-[rgb(154,174,212)]
      to-[#2d3b57]   relative 
      overflow-hidden px-4 py-18
       lg:!p-16 block-type-image"
    >
      <div className="container relative mx-auto flex h-full w-full items-center justify-center">
        <div className="grid w-full grid-cols-12 gap-3">
          <div className="col-span-12 flex gap-6 items-center flex-col lg:col-span-8 lg:col-start-3 order-2">
            <div className="flex flex-col w-full lg:w-1/2 text-center lg:col-start-3">
              <h1 className="text-white text-4xl md:text-6xl  section-title mb-2 font-bold">
                Page Notfound
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notfound;

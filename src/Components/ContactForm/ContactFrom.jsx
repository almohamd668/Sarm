import React from "react";

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <div className="mb-5">
      <h1 className="text-primary text-3xl mb-2.5">contact us</h1>
      <p className="text-lightest">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat delectus quibusdam, doloremque eveniet pariatur laboriosam laborum ut ducimus error ipsam omnis commodi, sed animi dicta! Velit facilis inventore voluptatibus id.</p>
      </div>
      <div className="mb-5">
        <p className="text-lightest">123 street name</p>
        <p className="text-lightest">cairo</p>
        <p className="text-lightest">SKSK Area</p>
      </div>
      <div className="mb-5">
        <p className="text-lightest"><span className="text-primary mr-2">Email:</span>me@email.com</p>
        <p className="text-lightest"><span className="text-primary mr-2">phone:</span>09999999</p>
      </div>
      </div>
      <div className="mx-auto w-full max-w-[550px]">
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-primary"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-primary"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="mb-3 block text-base font-medium text-primary"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-primary"
            >
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div>
            <button className="hover:shadow-form hover:bg-primary rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

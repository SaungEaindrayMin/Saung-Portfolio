import React from "react";

const ContactForm = () => {
  return (
    <section className="w-[90%] text-white mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-20 items-center">
      {/* Left Section */}
      <div className="text-center md:text-left text-[#6C4F8D] font-mono">
        <h1 className="text-7xl md:text-9xl font-serif">JUST</h1>
        <span className="text-5xl md:text-7xl font-serif italic">
          drop a line
        </span>

        {/* Contact Form */}
        <form className="mt-10 grid gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full md:w-[80%] border-b border-[#999] outline-none py-3 text-lg bg-transparent"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full md:w-[80%] border-b border-[#999] outline-none py-3 text-lg bg-transparent"
            />
          </div>

          <div className="relative">
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              className="w-full md:w-[80%] border-b border-[#999] outline-none py-3 text-lg bg-transparent resize-none"
              rows="4"
            ></textarea>
          </div>

          <div>
            <button className="flex items-center gap-3 bg-[#FEFEFA] border-b border-[#e0e0e0] text-[#222] pt-2 px-4  transition-all hover:scale-105">
              <p className="text-2xl">Submit</p>
              <img
                src="https://cdn.prod.website-files.com/66ba0620465e7f7a0a12b268/66c450200d53d63c92a5bb07_Cute%20Cat.svg"
                className="w-8 h-8"
                alt="Submit Icon"
              />
            </button>
          </div>
        </form>
      </div>

      {/* Right Section - Image */}
      <div className="flex justify-center">
        <img
          src="https://cdn.prod.website-files.com/66ba0620465e7f7a0a12b268/66c48d3f5f75bb71481cb6ae_Contact%20-p-1600.png"
          alt="Contact Illustration"
          className="max-w-full md:max-w-[80%]"
        />
      </div>
    </section>
  );
};

export default ContactForm;

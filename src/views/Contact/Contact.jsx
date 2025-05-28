import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="w-full bg-white bg-gradient-to-r from-[#fff1f2] via-[#e0f7fa]/[.4] to-[#e8f5e9] min-h-screen flex flex-col items-center gap-10 lg:gap-20">
      <ContactForm />
    </section>
  );
};

export default Contact;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Contact from "../../assets/Contact.png";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

const ContactForm = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); 
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_gmorgki",
        "template_gmu6404",
        form.current,
        "XMkjxt2x5EXw61xUl"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus(null), 5000);
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
          setStatus("error");
          setErrorMessage(error.text || "Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Section className="bg-background">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left text-primary font-mono">
          <h1 className="text-7xl md:text-9xl font-serif">JUST</h1>
          <span className="text-5xl md:text-7xl font-serif italic text-primary/40">
            drop a line
          </span>
          <form ref={form} onSubmit={sendEmail} className="mt-10 grid gap-6">
            <div className="relative">
              <input
                type="text"
                name="user_name"
                placeholder="Enter Your Name"
                className="w-full md:w-[80%] border-b border-primary/70 outline-none py-3 text-lg bg-transparent placeholder-muted-foreground focus:border-primary transition-colors"
                required
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="user_email"
                placeholder="Enter Your Email"
                className="w-full md:w-[80%] border-b border-primary/70 outline-none py-3 text-lg bg-transparent placeholder-muted-foreground focus:border-primary transition-colors"
                required
              />
            </div>
            <div className="relative">
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                className="w-full md:w-[80%] border-b border-primary/70 outline-none py-3 text-lg bg-transparent resize-none placeholder-muted-foreground focus:border-primary transition-colors"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="flex flex-col gap-4 items-start">
              <Button
                size="lg"
                className="h-14 px-8 text-xl rounded-lg gap-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    Sending...
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Submit
                    <img
                      src="https://cdn.prod.website-files.com/66ba0620465e7f7a0a12b268/66c450200d53d63c92a5bb07_Cute%20Cat.svg"
                      className="w-6 h-6 invert brightness-0"
                      alt="Submit Icon"
                    />
                  </>
                )}
              </Button>

              {status === "success" && (
                <div className="flex items-center gap-2 text-green-600 font-medium animate-in fade-in slide-in-from-bottom-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Message sent successfully!</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-destructive font-medium animate-in fade-in slide-in-from-bottom-2">
                  <XCircle className="w-5 h-5" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={Contact}
            alt="Contact Illustration"
            className="w-full h-full rounded-lg shadow-lg"
          />
        </div>
      </Container>
    </Section>
  );
};
export default ContactForm;

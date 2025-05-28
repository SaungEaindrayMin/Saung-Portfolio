import React from "react";
import { motion } from "framer-motion";

const EducationJourney = () => {
  const items = [
    {
      title: "DataLand Technology",
      description:
        "I attended a Web Development Foundation class where I gained a solid understanding of the fundamental concepts of web development. This course introduced me to the basics of building modern, responsive, and visually appealing websites.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8 text-pink-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
          />
        </svg>
      ),
    },
    {
      title: "NCC Level-4 - KMD College",
      description:
        "I completed the NCC Level-4 program at KMD College, where I developed leadership, teamwork, and discipline. This experience enhanced my problem-solving skills, time management, and ability to handle challenges, complementing my studies in computer science.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8 text-cyan-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        </svg>
      ),
    },
    {
      title: "NCC Level-5 - KMD College",
      description:
        "I am currently pursuing the NCC Level-5 Diploma in Computing, where I am enhancing my technical skills in areas such as programming, data analysis, and network management. This course complements my passion for computer science and strengthens my problem-solving abilities.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8 text-green-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
      ),
    },
    {
      title: "Internship at Softcomm Technology",
      description:
        "I completed an 8-week internship at Softcomm Technology, where I gained hands-on experience in both frontend web development and backend programming. This opportunity allowed me to strengthen my skills in building responsive user interfaces and managing server-side functionalities.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8 text-indigo-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387"
          />
        </svg>
      ),
    },
    {
      title: "Currently Working As Junior Web Developer in MYDAY THU KYWAL CO.LTD",
      description:
        "I am currently honing my skills as a Junior Web Developer at MYDAY THU KYWAL CO.LTD. My role involves creating dynamic, user-friendly web applications, working closely with both frontend and backend technologies. I contribute to building seamless user experiences and optimizing server-side performance to deliver high-quality solutions.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8 text-purple-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387"
          />
        </svg>
      ),
    },
  ];

  // Animation variants for fade up effect
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="w-full bg-white bg-gradient-to-r from-[#fff1f2] via-[#e0f7fa]/[.4] to-[#e8f5e9] min-h-screen flex flex-col items-center gap-10 lg:gap-20 py-20 px-6 lg:px-20">
      <div className="max-w-6xl w-full space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 lg:gap-x-[30%] items-baseline">
          <h1 className="text-4xl md:text-7xl font-serif text-gray-900">
            I qualified from here
          </h1>
          <p className="text-start md:text-end text-gray-700 text-sm md:text-md">
            I am proud to have completed my studies at this institution, where I
            gained valuable skills in web development, including frontend and
            backend technologies. This experience has prepared me for exciting
            challenges in the tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="space-y-4 bg-white px-6 py-8 border border-gray-200 rounded-lg "
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariant}
            >
              <div className="flex items-center space-x-3 text-2xl">
                {item.icon}
                <h2 className="text-lg md:text-2xl font-semibold text-gray-900">
                  {item.title}
                </h2>
              </div>
              <p className="text-gray-600 text-sm md:text-md">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationJourney;

import React from "react";

const Contact = () => {
  return (
    <section
      id="#contact"
      className="w-full flex items-center justify-center flex-col gap-6 max-w-5xl"
    >
      <h1 className="w-full text-4xl font-bold ">
        <span className="text-(--accent)">/</span> Contact Me
      </h1>
      <div className="w-max-content flex items-center justify-center bg-(--card) rounded-md p-5">
        <h2 className="font-bold text-2xl mr-2">{">"}</h2>
        <a
          className="font-bold hover:text-(--accent) transition duration-200"
          href="mailto:johnpatricksalen890@gmail.com"
        >
          johnpatricksalen890@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;

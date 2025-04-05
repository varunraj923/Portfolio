import React from "react";
import varunpot from "./varunpot.jpg";

const MyStory = () => {
  return (
    <div className="py-10">
      <h1 className="font-bold text-4xl mt-5 text-center">My Story</h1>
      <div className="flex flex-col md:flex-row items-center justify-center mt-20">
        {/* Image Section */}
        <div className="mb-5 md:mb-0">
          <img className="rounded-full w-40 md:w-80" src={varunpot} alt="Varun Raj" />
        </div>

        {/* Text Section */}
        <div className="w-80 text-center text-gray-500 md:w-96 md:text-left mt-5 md:ml-5">
          <p>
            Hello, I'm Varun Raj. I'm a passionate B.Tech student in Computer Science and Engineering at NIET, Gr. Noida, set to graduate in 2026. I have expertise in full-stack development using React.js, Redux.js, Node.js, Express.js, and Tailwind CSS, along with strong programming skills in Java, Python, SQL, and C++. I enjoy building dynamic, scalable web applications and have experience in graphic design. Currently, I’m seeking internship opportunities to apply my knowledge in real-world projects and enhance my development skills further.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyStory;


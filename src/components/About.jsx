import React from "react";

const skills = [
  { name: "Java", level: "83" },
  { name: "C++", level: "75" },
  { name: "React JS", level: "92" },
  { name: "Node JS", level: "85" },
  { name: "DSA", level: "78" },
  { name: "Spring Boot", level: "70" },
  { name: "MySQL", level: "88" },
  { name: "AWS Cloud", level: "65" },
  { name: "Machine Learning", level: "72" },
];

const About = () => {
  return (
    <div className="py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <p className="text-lg mb-12 text-center max-w-3xl mx-auto text-black-300">
          I am a passionate full-stack developer with a strong foundation in both frontend and backend technologies.
          I enjoy building scalable, secure, and intelligent applications using modern tools and frameworks.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-5 shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-medium mb-3 text-white">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-blue-500 transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;


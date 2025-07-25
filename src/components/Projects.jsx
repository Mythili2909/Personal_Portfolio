import React from "react";
import { FaGithub } from "react-icons/fa"; // GitHub icon for the button
import chatImage from "../assets/chatbot-robot-virtual-assistant-cartoon-vector-illustration-isolated-white-background-robotic-techni.jpg";
import passImage from "../assets/password.jpg";
import intervueImage from "../assets/2021-10-27_understanding-great-behavioral-interviewing-questions.jpg";
import pharmImage from "../assets/buy-online-pharmacy-vector-illustration-cartoon-flat-tiny-people-buying-pills-drugstore-healthcare-mobile-buy-online-178065150.webp";
import resImage from "../assets/Cartoon-employer-reviewing-a-resume.webp";
import enImage from "../assets/encryption-security-infosec-illustration-getty.jpg";

const projects = [
  {
    id: 1,
    name: "Intervue Hub",
    technologies: "MOCK INTERVIEW",
    image: intervueImage,
    github: "https://github.com/Mythili2909/App_Development",
  },
  {
    id: 2,
    name: "CureCart",
    technologies: "ONLINE MEDICAL SHOP",
    image: pharmImage,
    github: "https://github.com/Mythili2909/Online-Medical-Shop-Application",
  },
  {
    id: 3,
    name: "ATS Checker",
    technologies:"RESUME SCORE CHECKER",
    image: resImage,
    github: "https://github.com/YouafKhan1",
  },
  {
    id: 4,
    name: "TalkWise",
    technologies: "ChatBot",
    image: chatImage,
    github: "https://github.com/Mythili2909/TASK-2-CHAT-BOT",
  },
  {
    id: 5,
    name: "KeyCrpyt",
    technologies: "ENCRYPTION & DECRYPTION",
    image: enImage,
    github: "https://github.com/Mythili2909/Encryption_Decryption",
  },
  {
    id: 6,
    name: "SafeOrWeak",
    technologies: "PASSWORD STRENGTH CHECKER",
    image: passImage,
    github: "https://github.com/Mythili2909/Password_checker",
  },
];

const Projects = () => {
  return (
    <div className="py-20" id="project">
      <div className="container mx-auto px-8 md:px-60 lg:px-90">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center space-y-2 mx-4"
            >
              {/* Round Project Icon */}
              <img
                src={project.image}
                alt={project.name}
                className="rounded-full w-32 h-32 object-cover border-4 border-white shadow-lg transform transition-transform duration-300 hover:scale-110 hover:border-blue-400"
              />
              {/* Project Name and Technologies */}
              <h3 className="text-2xl font-semibold text-teal-600">{project.name}</h3>
              <p className="text-gray-400">{project.technologies}</p>
              {/* GitHub Button */}
              <a
                href={project.github}
                className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-gradient-to-l from-teal-400 to-blue-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-2" />
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Marathon Zone",
    year: "June 2025",
    align: "right",
    image: "/images/marathon-zone.png",
    link: "https://marathonzonebyreaz.netlify.app",
    github: "https://github.com/reazulislam1487/marathon-zone",
    description:
      "A web platform for organizing, managing, and participating in marathons. Users can register, view marathon details, and track participants.",
    stack:
      "React, Tailwind CSS, Firebase Authentication, Node.js, Express.js, MongoDB",
    challenges:
      "Managing authentication and conditional modals, ensuring responsiveness across devices, and implementing a secure data update modal.",
    future:
      "Add admin dashboard, performance analytics, and push notifications using service workers.",
  },
  {
    name: "GreenCircle",
    year: "May 2025",
    align: "left",
    image: "/images/green-circle.png",
    link: "https://green-circle-by-reaz.netlify.app",
    github: "https://github.com/reazulislam1487/green-circle-project",
    description:
      "A sustainable subscription-based home essentials service with a modern, user-friendly interface. Focused on eco-friendly living.",
    stack:
      "React, Tailwind CSS, Firebase Auth, JWT, Node.js, Express.js, MongoDB",
    challenges:
      "Implementing secure user roles with JWT, designing a clean reusable UI theme, and structuring a full-stack MERN app efficiently.",
    future:
      "Integrate Stripe for payments, build a mobile-friendly PWA, and enhance CMS-like admin tools.",
  },
  {
    name: "BoxNest",
    year: "April 2025",
    align: "right",
    image: "/images/boxnest.png",
    link: "https://boxnest-assignment-09.netlify.app",
    github: "https://github.com/reazulislam1487/boxnest",
    description:
      "A modern React application simulating a subscription box business. Built as part of a design-to-code challenge.",
    stack: "React, Tailwind CSS, React Router, Firebase Hosting",
    challenges:
      "Integrating clean component design from Figma, building the layout pixel-perfect, and making animations smooth without external UI libraries.",
    future:
      "Add backend with database, implement real checkout, and introduce reusable form components with validations.",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              future={project.future}
              challenges={project.challenges}
              stack={project.stack}
              description={project.description}
              github={project.github}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;

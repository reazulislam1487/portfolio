import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hi, I’m Reazul Islam Reaz, a passionate MERN Stack web developer from
        Bangladesh with a background in Political Science. My coding journey
        started with curiosity and turned into a deep passion for building
        real-world, user-friendly web applications. I enjoy working on
        interactive front-end designs with React & Tailwind CSS and building
        secure, scalable backends using Node.js & Express. My focus is on
        creating clean, functional, and engaging user experiences. Beyond
        coding, I enjoy sports (especially badminton and cricket), listening to
        music, and exploring social and political topics. I’m calm,
        hard-working, and always eager to learn and grow in the tech world.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange  transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;

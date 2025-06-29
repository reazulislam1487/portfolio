import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Reazul Islam Reaz, a passionate MERN Stack web developer dedicated
        to building real-world, user-friendly web applications. I specialize in
        React and front-end development, and I’m currently sharpening my
        full-stack skills through hands-on projects. I also enjoy sharing what I
        learn with others, aiming to grow as both a developer and a mentor.
        Beyond coding, I’m committed to continuous learning and helping others
        achieve their goals in tech.
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

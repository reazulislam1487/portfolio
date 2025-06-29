// import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

// const SingleProject = ({ name, year, align, image, link }) => {
//   return (
//     <motion.div
//       variants={fadeIn("top", 0)}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0.1 }}
//       className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
//         align === "left" ? "md:flex-row" : "md:flex-row-reverse"
//       } justify-end sm:flex-col`}
//     >
//       <div>
//         <h2 className="md:text-3xl sm:text-2xl text-orange ">{name}</h2>
//         <h2
//           className={`text-xl font-thin text-white font-special sm:text-center ${
//             align === "left" ? "md:text-right" : "md:text-left"
//           }`}
//         >
//           {year}
//         </h2>
//         <a
//           href={link}
//           className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${
//             align === "left" ? "md:justify-self-end" : "md:justify-self-start"
//           }`}
//         >
//           View <BsFillArrowUpRightCircleFill />
//         </a>
//       </div>
//       <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-white">
//         <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
//         <img src={image} alt="website image" className="w-full h-full" />
//       </div>
//     </motion.div>
//   );
// };

// export default SingleProject;
import { useState } from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import Modal from "./Modal";
import ProjectDetails from "./ProjectsDetails";
// import ProjectDetails from "./ProjectDetails";
// import Modal from "../ui/Modal"

const SingleProject = ({
  name,
  year,
  align,
  image,
  link,
  future,
  challenges,
  stack,
  github,
  description,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <button
          className={`text-lg btn flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
          onClick={() => setOpen(true)}
        >
          View <BsFillArrowUpRightCircleFill />
        </button>

        {/* ✅ Use reusable Modal */}
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <ProjectDetails
            name={name}
            year={year}
            image={image}
            link={link}
            future={future}
            challenges={challenges}
            stack={stack}
            description={description}
            github={github}
          />
        </Modal>
      </div>

      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="website" className="w-full h-full" />
      </div>
    </div>
  );
};

export default SingleProject;

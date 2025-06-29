// import { FiExternalLink, FiGithub } from "react-icons/fi";

// const ProjectDetails = ({
//   name,
//   year,
//   image,
//   link,
//   github,
//   stack,
//   description,
//   challenges,
//   future,
// }) => {
//   return (
//     <div className="text-black">
//       <div className="flex flex-col md:flex-row gap-8 items-start">
//         {/* Left Content */}
//         <div className="flex-1 space-y-6">
//           <div>
//             <h2 className="text-4xl font-bold mb-1">{name}</h2>
//             <p className="text-gray-600 text-sm">📅 Released: {year}</p>
//           </div>

//           {/* Links */}
//           <div className="flex flex-wrap gap-4">
//             {link && link !== "#" && (
//               <a
//                 href={link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 px-4 py-2 border border-emerald-600 rounded-lg text-emerald-700 hover:scale-105 transition"
//               >
//                 🌐 Live Site <FiExternalLink />
//               </a>
//             )}
//             {github && (
//               <a
//                 href={github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-gray-800 hover:scale-105 transition"
//               >
//                 🧑‍💻 GitHub Repo <FiGithub />
//               </a>
//             )}
//           </div>

//           {/* Stack */}
//           {stack && (
//             <div>
//               <h3 className="font-semibold text-lg mb-1">🔧 Tech Stack</h3>
//               <p className="text-gray-800">{stack}</p>
//             </div>
//           )}

//           {/* Description */}
//           {description && (
//             <div>
//               <h3 className="font-semibold text-lg mb-1">📝 Description</h3>
//               <p className="text-gray-800 leading-relaxed">{description}</p>
//             </div>
//           )}

//           {/* Challenges */}
//           {challenges && (
//             <div>
//               <h3 className="font-semibold text-lg mb-1">🚧 Challenges</h3>
//               <p className="text-gray-800 leading-relaxed">{challenges}</p>
//             </div>
//           )}

//           {/* Future Plans */}
//           {future && (
//             <div>
//               <h3 className="font-semibold text-lg mb-1">🚀 Future Plans</h3>
//               <p className="text-gray-800 leading-relaxed">{future}</p>
//             </div>
//           )}
//         </div>

//         {/* Right Image */}
//         <div className="md:w-1/2 shadow-lg rounded-lg overflow-hidden border border-gray-300">
//           <img
//             src={image}
//             alt={`${name} preview`}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;
import { FiExternalLink, FiGithub } from "react-icons/fi";
import {
  FaCalendarAlt,
  FaTools,
  FaStickyNote,
  FaExclamationTriangle,
  FaRocket,
} from "react-icons/fa";

const ProjectDetails = ({
  name,
  year,
  image,
  link,
  github,
  stack,
  description,
  challenges,
  future,
}) => {
  return (
    <div className="text-black">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          {/* Title & Date */}
          <div>
            <h2 className="text-4xl font-bold text-orange">{name}</h2>
            <p className="text-sm text-lightGrey flex items-center gap-2 mt-1">
              <FaCalendarAlt className="text-lightGrey" /> Released: {year}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {link && link !== "#" && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan text-cyan hover:bg-lightCyan hover:text-black hover:scale-105 transition"
              >
                <FiExternalLink /> Live Site
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-black text-black hover:bg-grey hover:text-white hover:scale-105 transition"
              >
                <FiGithub /> GitHub Repo
              </a>
            )}
          </div>

          {/* Tech Stack */}
          {stack && (
            <div>
              <h3 className="text-lg font-semibold mb-1 flex items-center gap-2 text-orange">
                <FaTools className="text-orange" /> Tech Stack
              </h3>
              <p>{stack}</p>
            </div>
          )}

          {/* Description */}
          {description && (
            <div>
              <h3 className="text-lg font-semibold mb-1 flex items-center gap-2 text-orange">
                <FaStickyNote className="text-orange" /> Project Overview
              </h3>
              <p className="leading-relaxed text-black">{description}</p>
            </div>
          )}

          {/* Challenges */}
          {challenges && (
            <div>
              <h3 className="text-lg font-semibold mb-1 flex items-center gap-2 text-orange">
                <FaExclamationTriangle className="text-orange" /> Key Challenges
              </h3>
              <p className="leading-relaxed text-black">{challenges}</p>
            </div>
          )}

          {/* Future Plans */}
          {future && (
            <div>
              <h3 className="text-lg font-semibold mb-1 flex items-center gap-2 text-orange">
                <FaRocket className="text-orange" /> Future Enhancements
              </h3>
              <p className="leading-relaxed text-black">{future}</p>
            </div>
          )}
        </div>

        {/* Right: Image Preview */}
        <div className="md:w-1/2 hidden lg:flex  w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={image}
            alt={`${name} preview`}
            className="w-full top-12 h-full "
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

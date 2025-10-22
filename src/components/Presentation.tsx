import { FaLinkedin, FaGithub } from "react-icons/fa";

function Presentation() {
  return (
    <div className="container mx-auto text-center">
      <div className="relative text-center w-full">
        <h1 className="text-[3.2rem] mb-7 md:text-[5rem] font-bold mt-5 md:mt-[10rem]">
          Hi, I'm Giovana Rodríguez
        </h1>
        <div>
          <p className="text-2xl px-5 mb-5 md:px-[10rem]">
            Web developer with a focus on UX/UI, dedicated to creating modern
            interfaces that combine aesthetics, functionality, and an
            exceptional user experience.
          </p>
          <button className="border bg-[#dd215f] rounded-[1rem] font-bold px-14 py-3 text-white text-[1rem] md:text-[1.5rem]">
            PROJECTS
          </button>
        </div>
      </div>
      <div className="hidden md:block md:absolute left-3 inset-y-96">
        <ul className="social bg-white px-2 py-2 gap-3 shadow-xl">
          <li>
            <FaLinkedin
              style={{ color: "black", width: "2.5rem", height: "2.5rem" }}
            />
          </li>
          <li>
            <FaGithub
              style={{ color: "black", width: "2.5rem", height: "2.5rem" }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Presentation;

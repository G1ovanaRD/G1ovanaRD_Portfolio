import { FaLinkedin, FaGithub } from "react-icons/fa";

function Presentation() {
  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/giovana-rodríguez-2a344a309",
      "_blank"
    );
  };

  const openGitHub = () => {
    window.open("https://github.com/G1ovanaRD", "_blank");
  };

  return (
    <div id="home" className="container mx-auto text-center pb-[10rem]">
      <div className="relative text-center w-full">
        <h1 className="slide-in-left text-[3.2rem] mb-7 md:text-[5rem] font-bold mt-5 md:mt-[10rem] px-2">
          Hi, I'm Giovana Rodríguez
        </h1>
        <div>
          <p className="slide-in-left-presentation text-2xl px-5 mb-14 md:mb-7 md:px-[10rem]">
            Web developer with a focus on UX/UI, dedicated to creating modern
            interfaces that combine aesthetics, functionality, and an
            exceptional user experience.
          </p>
          <button
            className="slide-in-top border bg-[#dd215f] rounded-[1rem] font-bold px-14 py-3 text-white text-[1.5rem] md:text-[1.5rem]"
            onClick={() => {
              const element = document.getElementById("projects");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            PROJECTS
          </button>
        </div>
      </div>
      <div className="hidden md:block md:absolute left-3 inset-y-96">
        <ul className="social bg-white px-2 py-2 gap-3 shadow-xl">
          <li onClick={openLinkedIn}>
            <FaLinkedin
              style={{ color: "black", width: "2.5rem", height: "2.5rem" }}
            />
          </li>
          <li onClick={openGitHub}>
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

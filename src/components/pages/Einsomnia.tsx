import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import p3 from "../../assets/p3.png";

function Einsomnia() {
  const navigate = useNavigate();

  // Scroll al inicio cuando se carga el componente
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const openGitHubProject = () => {
    window.open("https://github.com/G1ovanaRD/EInsomnia.git", "_blank");
  };

  return (
    <div className="bg-white text-center md:px-[4rem] px-[1rem] min-h-screen">
      <div className="py-[1rem]">
        <div className="flex items-center justify-between md:mb-6">
          <button
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 100);
            }}
            className="bg-[#dd215f] text-white px-4 py-2 rounded-lg hover:bg-[#BB1550] transition-colors duration-300"
          >
            ← Back to Portfolio
          </button>
        </div>

        <h1 className="text-[2rem] w-fit mx-auto borber border-b-4 border-[#F14273] md:text-[3rem] font-bold mb-2">
          EINSOMNIA PROJECT
        </h1>
        <img src={p3} alt="" className="object-fit max-h-[400px] mx-auto" />
        <p className="text-[1.2rem] px-5 mb-5 mt-7 md:px-[10rem]">
          EInsomnia is a comprehensive e-commerce web application for
          electronics that I developed using Angular 18 and Node.js.
        </p>
        <div className="grid md:grid-cols-2 md:text-start px-5 gap-8">
          <div className="mb-4">
            <h1 className="text-3xl font-bold md:mb-[2rem] mb-[1rem]">
              Project Overview
            </h1>
            <p className="text-[1.2rem] md:pe-[3rem] mb-4">
              EInsomnia is a modern full-stack e-commerce web application
              specialized in electronics and technology products. I created this
              project as a comprehensive online shopping platform that
              demonstrates advanced web development skills using Angular 18 for
              the frontend and Node.js with Express for the backend. The
              application serves as a complete electronics marketplace where
              users can browse through various categories including smartphones,
              smartwatches, computers, audio equipment, TV & video devices, and
              home appliances from popular brands like Samsung, Apple, Xiaomi,
              LG, and HP.
            </p>
            <p className="text-[1.2rem] md:pe-[3rem] mb-4">
              The frontend utilizes Angular 18 with standalone components,
              Angular Material for UI components, and RxJS for reactive
              programming. The backend is built with Node.js, Express.js, and
              features JWT authentication, bcrypt for password encryption, and
              proper middleware for route protection.
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-bold md:mb-[2rem] mb-[1rem]">
              Technologies Used
            </h1>
            <div className="flex flex-wrap text-[1rem] md:text-[1.2rem] font-bold items-center justify-center md:items-start md:justify-start">
              <p className="item-skill">Angular</p>
              <p className="item-skill">Bootstrap</p>
              <p className="item-skill">Angular Material</p>
              <p className="item-skill">TypeScript</p>
              <p className="item-skill">Node.js</p>
              <p className="item-skill">Express.js</p>
              <p className="item-skill">MongoDB</p>
              <p className="item-skill">JWT</p>
              <p className="item-skill">GitHub</p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Project Links</h3>
              <div className="space-y-3">
                <button
                  onClick={openGitHubProject}
                  className="block w-full border-2 border-[#dd215f] text-[#dd215f] px-6 py-3 rounded-lg hover:bg-[#dd215f] hover:text-white transition-colors duration-300"
                >
                  View Source Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Einsomnia;

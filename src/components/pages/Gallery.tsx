import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import p1 from "../../assets/p1.png";

function Gallery() {
  const navigate = useNavigate();

  // Scroll al inicio cuando se carga el componente
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const openGitHubProject = () => {
    window.open("https://github.com/G1ovanaRD/Art-Gallery.git", "_blank");
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
          ARTFUL PROJECT
        </h1>
        <img src={p1} alt="" className="object-fit max-h-[400px] mx-auto" />
        <p className="text-[1.2rem] px-5 mb-5 mt-7 md:px-[10rem]">
          An interactive web interface focused on showcasing art collections,
          photographs, artists, and exhibitions with a modern and dynamic visual
          experience.
        </p>
        <div className="grid md:grid-cols-2 md:text-start px-5 gap-8">
          <div className="mb-4">
            <h1 className="text-3xl font-bold md:mb-[2rem] mb-[1rem]">
              Project Overview
            </h1>
            <p className="text-[1.2rem] md:pe-[3rem] mb-4">
              ARTFUL is an interactive web interface that I designed and
              developed, focused on showcasing art collections, photographs,
              artists, and exhibitions with a modern and dynamic visual
              experience. The project integrates real data using the Unsplash
              API, allowing collections, images, and artist profiles to be
              updated in real time. Its responsive design is optimized for
              smooth navigation on mobile and desktop, combining elegant
              aesthetics with interactive components such as category catalogs,
              filterable galleries, and dynamic cards.
            </p>
            <p className="text-[1.2rem] md:pe-[3rem] mb-4">
              This project demonstrates my ability to create comprehensive
              interfaces based on external data, apply responsive design with
              Tailwind CSS, handle dynamic content with jQuery/AJAX, and
              structure scalable pages geared toward rich and visually appealing
              user experiences.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-3">Key Features:</h3>
              <ul className="list-disc list-inside text-left space-y-2">
                <li>
                  Interactive art gallery with zoom and navigation controls
                </li>
                <li>Artist portfolio showcase with detailed information</li>
                <li>Exhibition management system</li>
                <li>Responsive design for all devices</li>
                <li>Modern UI/UX with smooth animations</li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold md:mb-[2rem] mb-[1rem]">
              Technologies Used
            </h1>
            <div className="flex flex-wrap text-[1rem] md:text-[1.2rem] font-bold items-center justify-center md:items-start md:justify-start">
              <p className="item-skill">HTML5</p>
              <p className="item-skill">Tailwind CSS</p>
              <p className="item-skill">CSS Grid</p>
              <p className="item-skill">Responsive Design</p>
              <p className="item-skill">UX/UI Design</p>
              <p className="item-skill">jQuery</p>
              <p className="item-skill">Unsplash API</p>
              <p className="item-skill">JavaScript</p>
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

export default Gallery;

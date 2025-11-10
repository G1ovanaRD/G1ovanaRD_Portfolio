import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import p4 from "../../assets/p4.png";

function Tericlotes() {
  const navigate = useNavigate();

  // Scroll al inicio cuando se carga el componente
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const openGitHubProject = () => {
    window.open("https://github.com/G1ovanaRD/TeriClothes.git", "_blank");
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
          TERI CLOTHES PROJECT
        </h1>
        <img src={p4} alt="" className="object-fit max-h-[400px] mx-auto" />
        <p className="text-[1.2rem] px-5 mb-5 mt-7 md:px-[10rem]">
          Teri Clothes is a successful pet clothing website project that I
          created which features sewing tutorials, downloadable patterns, and a
          community forum dedicated to DIY pet fashion.
        </p>
        <div className="grid md:grid-cols-2 md:text-start px-5 gap-8">
          <div className="mb-4">
            <h1 className="text-3xl font-bold md:mb-[2rem] mb-[1rem]">
              Project Overview
            </h1>
            <p className="text-[1.2rem] md:pe-[3rem] mb-4">
              Teri Clothes is a comprehensive web project dedicated to pet tips
              and DIY sewing that I created to help pet owners learn how to make
              adorable clothes and costumes for their cats and dogs. The project
              serves as a one-stop resource center for pet fashion enthusiasts,
              combining educational content, practical resources, and community
              interaction.Since its creation, Teri Clothes has established
              itself as a go-to destination for pet owners interested in
              crafting custom clothing for their furry companions. The website
              provides a unique blend of step-by-step tutorials, professional
              patterns, and a supportive community environment that encourages
              creativity and skill development.
            </p>
            <p className="text-[1.2rem] md:pe-[3rem] mb-4">
              The project addresses the growing trend of pet fashion while
              promoting sustainable practices through DIY creation rather than
              expensive store-bought alternatives. It empowers users to create
              personalized, perfectly-fitted clothing for their pets while
              learning valuable sewing skills in the process.
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-bold md:mb-[2rem] mb-[1rem]">
              Technologies Used
            </h1>
            <div className="flex flex-wrap text-[1rem] md:text-[1.2rem] font-bold items-center justify-center md:items-start md:justify-start">
              <p className="item-skill">HTML</p>
              <p className="item-skill">CSS</p>
              <p className="item-skill">JavaScript</p>
              <p className="item-skill">PHP</p>
              <p className="item-skill">MySQL</p>
              <p className="item-skill">Responsive Design</p>
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

export default Tericlotes;

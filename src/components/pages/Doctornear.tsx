import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import p2_1 from "../../assets/p2_1.png";
import p2_2 from "../../assets/p2_2.png";

function Doctornear() {
  const navigate = useNavigate();

  // Scroll al inicio cuando se carga el componente
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const openGitHubProject = () => {
    window.open("https://github.com/G1ovanaRD/DoctorNear.git", "_blank");
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
          DOCTORNEAR PROJECT
        </h1>
        <div className="flex justify-center mx-auto">
          <img
            src={p2_1}
            alt=""
            className="object-fit md:max-h-[400px] max-h-[200px] mx-1"
          />
          <img
            src={p2_2}
            alt=""
            className="object-fit md:max-h-[400px] max-h-[200px] mx-1"
          />
        </div>
        <p className="text-[1.2rem] px-5 mb-5 mt-7 md:px-[10rem]">
          Doctonear is a Flutter mobile application developed to connect
          patients with doctors easily and efficiently.
        </p>
        <div className="grid md:grid-cols-2 md:text-start px-5 gap-8">
          <div className="mb-4">
            <h1 className="text-3xl font-bold md:mb-[2rem] mb-[1rem]">
              Project Overview
            </h1>
            <p className="text-[1.2rem] md:pe-[3rem] mb-4">
              Doctonear is a fully featured mobile application developed in
              Flutter that revolutionizes the way patients search for and
              connect with healthcare professionals. This comprehensive medical
              app allows users to look up doctors by specialty, location, or
              name, view detailed physician profiles, and schedule appointments
              in an intuitive and seamless way. The app includes a robust user
              authentication system powered by Firebase Auth, enabling secure
              account registration and login. Users can explore a complete
              database of doctors that includes detailed information such as
              medical specialties, clinic locations, consultation fees,
              available schedules, and reviews from other patients.
            </p>
            <p className="text-[1.2rem] md:pe-[3rem] mb-4">
              One of the main features is the interactive appointment-scheduling
              system, which displays real-time availability and allows patients
              to select convenient dates and times. The application also
              includes a full appointment-management system where users can
              view, modify, or cancel their scheduled appointments. The
              interface design uses a professional medical color palette with
              soft gradients and a custom typography style, providing a modern
              and accessible user experience. The app is fully integrated with
              Firebase Firestore for real-time data storage and management of
              doctor and appointment information.
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-bold md:mb-[2rem] mb-[1rem]">
              Technologies Used
            </h1>
            <div className="flex flex-wrap text-[1rem] md:text-[1.2rem] font-bold items-center justify-center md:items-start md:justify-start">
              <p className="item-skill">Flutter & Dart </p>
              <p className="item-skill">Firebase Core</p>
              <p className="item-skill">Firebase Auth </p>
              <p className="item-skill">Cloud Firestore </p>
              <p className="item-skill">Material Design </p>
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

export default Doctornear;

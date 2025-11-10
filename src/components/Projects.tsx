import p1 from "../assets/p1.png";
import p2_1 from "../assets/p2_1.png";
import p2_2 from "../assets/p2_2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";

function Projects() {
  return (
    <div className="about text-center md:px-[4rem] px-[1rem]">
      <div className="py-[4rem]">
        <h1 className="text-[2rem] w-fit mx-auto borber border-b-4 border-[#F14273] md:text-[3rem] font-bold">
          PROJECTS
        </h1>
        <p className="text-[1.2rem] px-5 mb-5 mt-7 md:px-[10rem]">
          Here you will find some of the personal and school projects that I
          created with each project containing its own case study
        </p>
        {/* Project1 */}
        <div className="grid md:grid-cols-2 md:text-start px-5 my-[5rem]">
          <div>
            <img src={p1} alt="logo" className="object-contain" />
          </div>
          <div className="md:ps-[4rem] content-center">
            <h1 className="text-3xl font-bold md:mb-[1rem] mb-[1rem]">
              ARTFUL
            </h1>
            <p className="text-[1.2rem] md:pe-[3rem] mb-[1rem]">
              ARTFUL is an interactive web interface that I designed and
              developed, focused on showcasing art collections, photographs,
              artists, and exhibitions with a modern and dynamic visual
              experience.
            </p>
            <button className="border bg-[#dd215f] rounded-[0.5rem] font-bold px-14 py-3 text-white text-[1.5rem] md:text-[1.2rem]">
              See project
            </button>
          </div>
        </div>

        {/* Project2 */}
        <div className="grid md:grid-cols-2 md:text-start px-5 my-[5rem]">
          <div className="flex justify-evenly">
            <img
              src={p2_1}
              alt="logo"
              className="max-h-[300px] md:object-contain md:max-h-[500px]"
            />
            <img
              src={p2_2}
              alt="logo"
              className="max-h-[300px] md:object-contain md:max-h-[500px]"
            />
          </div>
          <div className="md:ps-[4rem] content-center">
            <h1 className="text-3xl font-bold md:mb-[1rem] mb-[1rem]">
              DoctorNear
            </h1>
            <p className="text-[1.2rem] md:pe-[3rem] mb-[1rem]">
              MedicHub (Doctonear) is a Flutter mobile application developed to
              connect patients with doctors easily and efficiently. The app
              allows users to search for doctors by specialty or name, view
              their detailed profiles, schedule medical appointments, and manage
              scheduled appointments, all integrated with Firebase for
              authentication and real-time database.
            </p>
            <button className="border bg-[#dd215f] rounded-[0.5rem] font-bold px-14 py-3 text-white text-[1.5rem] md:text-[1.2rem]">
              See project
            </button>
          </div>
        </div>

        {/* Project3 */}
        <div className="grid md:grid-cols-2 md:text-start px-5 my-[5rem]">
          <div className="flex justify-evenly">
            <img src={p3} alt="logo" className="object-contain max-h-[500px]" />
          </div>
          <div className="md:ps-[4rem] content-center">
            <h1 className="text-3xl font-bold md:mb-[1rem] mb-[1rem]">
              EInsomnia
            </h1>
            <p className="text-[1.2rem] md:pe-[3rem] mb-[1rem]">
              EInsomnia is a comprehensive e-commerce web application for
              electronics that I developed using Angular 18 and Node.js. This
              full-stack project features user authentication, shopping cart
              functionality, and product management capabilities, serving as a
              complete online electronics store with modern UI/UX design and
              scalable backend architecture.
            </p>
            <button className="border bg-[#dd215f] rounded-[0.5rem] font-bold px-14 py-3 text-white text-[1.5rem] md:text-[1.2rem]">
              See project
            </button>
          </div>
        </div>

        {/* Project4 */}
        <div className="grid md:grid-cols-2 md:text-start px-5 my-[5rem]">
          <div className="flex justify-evenly">
            <img src={p4} alt="logo" className="object-contain max-h-[500px]" />
          </div>
          <div className="md:ps-[4rem] content-center">
            <h1 className="text-3xl font-bold md:mb-[1rem] mb-[1rem]">
              TeriClothes
            </h1>
            <p className="text-[1.2rem] md:pe-[3rem] mb-[1rem]">
              Teri Clothes is a successful pet clothing website project that I
              created which features sewing tutorials, downloadable patterns,
              and a community forum dedicated to DIY pet fashion. The project
              provides comprehensive resources for creating cute costumes and
              clothing for cats and dogs, and has become a valuable resource for
              pet owners who want to make their own pet accessories at home.
            </p>
            <button className="border bg-[#dd215f] rounded-[0.5rem] font-bold px-14 py-3 text-white text-[1.5rem] md:text-[1.2rem]">
              See project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

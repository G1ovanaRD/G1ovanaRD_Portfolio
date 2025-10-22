import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <div className="text-center py-5 md:flex justify-center md:justify-between md:px-20 md:py-5 font-semibold text-lg bg-white items-center">
        <div className="flex text-center justify-center items-center gap-3">
          <img src={logo} alt="logo" className="max-h-14 object-contain" />
          <div className=" mb-5 md:mb-0">GIOVANA RODRIGUEZ</div>
        </div>
        <div className="flex justify-center">
          <ul className="flex gap-10 md:flex md:gap-24 ">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PROJECTS</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

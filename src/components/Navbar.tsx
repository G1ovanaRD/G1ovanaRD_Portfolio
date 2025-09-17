function Navbar() {
  return (
    <>
      <div className="text-center md:flex justify-between bg-rose-200 px-20 py-5 font-semibold text-lg">
        <div>GIOVANA RODRIGUEZ</div>
        <div className="">
          <ul className="flex gap-10 md:flex md:gap-24">
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

function Navbar() {
  return (
    <>
      <div className="flex justify-between bg-rose-200 px-14 py-5">
        <div>Giovana</div>
        <div>
          <ul className="flex gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

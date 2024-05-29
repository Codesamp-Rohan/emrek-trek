import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="lg:flex py-4 px-8 hidden justify-between bg-transparent absolute z-[999] w-full border-b-[0.4px] border-[#000]">
        <h1 className="text-[2rem] font-extrabold uppercase italic">Navbar</h1>
        <span className="flex gap-10 items-center text-[18px]">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/contact">Contact Us</Link>
        </span>
        <button className="bg-[#242424] text-white px-4">Book Now</button>
      </nav>
      <nav className="lg:hidden py-4 px-8 flex justify-between bg-transparent absolute z-[999] w-full border-b-[0.4px] border-[#000]">
        <h1 className="text-[2rem] font-extrabold uppercase italic">Navbar</h1>
        <button className="bg-[#242424] text-white px-4">Menu</button>
      </nav>
    </>
  );
}

export default Navbar;

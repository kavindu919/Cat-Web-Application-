import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-around justify-items-center items-center pt-4">
      <div>
        <Image src="/logo.png" width={200} height={200} alt="Logo" />
      </div>
      <div>
        <ul className="flex flex-row gap-12 text-2xl text-[#ffffff]">
          <li>About</li>
          <li>Contact</li>
          <li>
            <a href="cats">Breeds</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

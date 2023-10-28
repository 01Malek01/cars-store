import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <div>
      <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
          <Link href={"/"} className="flex justify-items-center items-center">
            <Image
              className="object-contain "
              src={"/logo.svg"}
              alt="logo"
              width={118}
              height={18}
            />
          </Link>
          <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="text-primary-blue bg-white rounded-full min-w-[130px]"
            // handleClick={}
          />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

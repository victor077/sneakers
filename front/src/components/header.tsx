import React from "react";
import Logo from "./Logo";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className=" bg-[#313132] flex  justify-center items-center">
        <nav className="w-4/5 py-4">
          <Logo />
        </nav>
      </header>
      <header>
        <nav className="bg-[#F5F5F7] justify-center items-center flex">
          <ul className="flex gap-8 cursor-pointer py-6 font-medium text-lg">
            <Link href="/login">
              <li>Login</li>
            </Link>
            <li>Comunidade</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;

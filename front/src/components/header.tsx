import React from "react";
import Link from "next/link";
import Logo from "./logo";

function Header() {
  return (
    <>
      <header className=" bg-[#313132] flex  justify-center items-center">
        <nav className="w-4/5 py-4">
          <Logo />
        </nav>
      </header>
      <header className="mb-36">
        <nav className="bg-[#F5F5F7] justify-center items-center flex">
          <ul className="flex gap-8 cursor-pointer py-6 font-medium text-lg">
            <Link href="/login">
              <li className="border-transparent border-b-2 hover:border-slate-950">Entrar</li>
            </Link>
            <Link href="/register">
              <li className="border-transparent border-b-2 hover:border-slate-950">Junte-se a nós</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;

import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <h1 className="text-gradient flex items-center">
      <Link
        href="./"
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-2xl font-bold cursor-pointer"
      >
        SNKS
      </Link>
    </h1>
  );
};

export default Logo;

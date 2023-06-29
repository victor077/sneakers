import Link from "next/link";
import React from "react";

interface NavigationLoginRegisterProps {
  path: string;
  title: string;
}

const NavigationLoginRegister = ({
  path,
  title,
}: NavigationLoginRegisterProps) => {
  return (
    <Link href={path}>
      <p className="text-sky-800 font-bold hover:underline">{title}</p>
    </Link>
  );
};

export default NavigationLoginRegister;

import Image from "next/image";
import React from "react";
import logo from "@/public/logo-full.svg";

export default function Header() {
  return (
    <header className="p-4 flex flex-col items-center gap-4">
      <Image src={logo} alt="logo" width={150} height={100} />
      <h1 className="text-2xl font-bold text-center">
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <p className="text-[1.06rem] text-gray-400 text-center font-semibold">
        Secure your spot at next year&apos;s biggest coding conference.
      </p>
    </header>
  );
}

import Image from "next/image";
import React from "react";
import logo from "@/public/logo-full.svg";

export default function Congrat({ formData }) {
  return (
    <header className="p-4 flex flex-col items-center gap-4">
      <Image className="mb-4" src={logo} alt="logo" width={150} height={100} />
      <h1 className="text-2xl sm:text-5xl font-bold text-center sm:w-170">
        Congrats,{" "}
        <span className="text-2xl sm:text-5xl text-center bg-gradient-to-r from-[#d96d49] to-white text-transparent bg-clip-text font-bold">
          {formData.fullname}
        </span>{" "}
        Your ticket is ready.
      </h1>
      <p className="text-[1.06rem] sm:text-xl text-gray-400 text-center font-semibold">
        We've emailed your ticket to{" "}
        <span className="text-[#bc674b]"> {formData.email} </span> and will send
        updates in the run up to the event.
      </p>
    </header>
  );
}

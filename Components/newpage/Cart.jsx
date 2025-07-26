import Image from "next/image";
import React from "react";
import ticket from "../../public/pattern-ticket.svg";
import mark from "../../public/logo-mark.svg";

export default function Cart() {
  return (
    <div>
      <Image
        className="relative"
        src={ticket}
        alt="ticket have info in the owner"
        width={370}
      />

      <div className="flex gap-4 items-center absolute bottom-80 left-8 ">
        <Image src={mark} alt="" width={30} height={100} />
        <div>
          <p className="text-2xl font-bold">Coding Conf</p>
          <p className="text-gray-400 font-semibold">
            Jan 31, 2025 / Austin, TX
          </p>
        </div>
        <div>{/* I have to search link the form and this here */}</div>
      </div>
    </div>
  );
}

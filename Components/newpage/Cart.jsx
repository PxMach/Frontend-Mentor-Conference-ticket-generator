import Image from "next/image";
import React from "react";
import ticket from "../../public/pattern-ticket.svg";
import mark from "../../public/logo-mark.svg";

export default function Cart({ formData }) {
  return (
    <div>
      <Image
        className="relative"
        src={ticket}
        alt="ticket have info in the owner"
        width={370}
      />

      <div className="flex flex-col gap-4 absolute bottom-60 left-7 ">
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <Image src={mark} alt="" width={30} height={100} />
            <p className="text-2xl font-bold">Coding Conf</p>
          </div>
          <div className="pl-12">
            <p className="text-sm text-gray-400 font-semibold">
              Jan 31, 2025 / Austin, TX
            </p>
          </div>
        </div>

        <div>
          <p>{formData.fullname}</p>
          <div>
            {/* {"icon github"} */}
            <p>{formData.github}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

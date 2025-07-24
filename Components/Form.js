import Image from "next/image";
import React from "react";
import upload from "../public/icon-upload.svg";
import info from "../public/icon-info.svg";

export default function Form() {
  return (
    <form action="get" className="mt-4 mb-8 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label className="text-xl font-semibold text-gray-300">
          Upload Avatar
        </label>
        <div className="bg-white/10 flex flex-col gap-3 items-center border-2 border-dashed border-gray-600 p-4 rounded-xl">
          <Image
            className="bg-white/10 border-1 border-gray-700 rounded-xl p-2"
            src={upload}
            alt="icon upload"
            width={50}
            height={100}
          />
          <p className="text-lg text-gray-400">
            Drag and drop or click to upload
          </p>
        </div>
        <span className="textarea-sm text-gray-400 flex items-center gap-2">
          <Image src={info} alt="info" width={20} height={100} />
          Upload your photo (JPG or PNG, max size: 500KB).
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xl font-semibold text-gray-300">Full Name</label>
        <input
          className="bg-white/10 border-2 border-gray-500 rounded-xl p-3"
          type="text"
          name="name"
          placeholder="Full Name"
          aria-label="full name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xl font-semibold text-gray-300">
          Email Address
        </label>
        <input
          className="bg-white/10 border-2 border-gray-500 rounded-xl p-3"
          type="email"
          name="email"
          placeholder=" example@email.com"
          aria-label="your email"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xl font-semibold text-gray-300">
          GitHub Username
        </label>
        <input
          className="bg-white/10 border-2 border-gray-500 rounded-xl p-3"
          type="text"
          name="github"
          placeholder="@yourusername"
          aria-label="github"
        />
      </div>

      <button className="bg-[#d96d49] border-gray-500 rounded-xl p-3 text-xl font-bold text-gray-950">
        Generate My Ticket
      </button>
    </form>
  );
}

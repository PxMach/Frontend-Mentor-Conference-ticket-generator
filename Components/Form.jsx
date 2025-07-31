"use client";
import Image from "next/image";
import React from "react";
import upload from "../public/icon-upload.svg";
import info from "../public/icon-info.svg";
import { useRouter } from "next/navigation";

export default function Form({ onSubmitSuccess }) {
  const router = useRouter();

  const [formData, setFormData] = React.useState({
    fullname: "",
    email: "",
    github: "",
  });

  const [errors, setErrors] = React.useState({});

  const [imagePreview, setImagePreview] = React.useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.fullname.trim()) {
      validationErrors.fullname = "Full name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Please enter a valid Email adress";
    }

    if (!formData.github.trim()) {
      validationErrors.github = "Github is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.github)) {
      validationErrors.github = "Please enter a valid Github adress";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmitSuccess(formData);
      localStorage.setItem("ticketData", JSON.stringify(formData));
      router.push("/news");
    }
  };

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl); // stocké dans useState
    }

    if (file.size > 500 * 1024) {
      alert("Image too large. Max: 500KB.");
      return;
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 mb-8 flex flex-col gap-5 sm:w-sm"
    >
      <div className="flex flex-col gap-2">
        <label className="text-xl font-semibold text-gray-300">
          Upload Avatar
        </label>
        <div className="bg-white/10 flex flex-col gap-3 items-center border-2 border-dashed border-gray-600 p-4 rounded-xl">
          {imagePreview ? (
            <Image
              className="bg-white/10 border-1 border-gray-700 rounded-xl p-2"
              src={imagePreview}
              alt="uploaded preview"
              width={50}
              height={100}
            />
          ) : (
            <Image src={upload} alt="icon upload" width={50} height={100} />
          )}
          <input
            className="bg-white/10 border-1 border-gray-700 rounded-xl p-2 "
            type="file"
            name="avatar"
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
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
          name="fullname"
          placeholder="Full Name"
          aria-label="full name"
          onChange={handleChange}
        />
        {errors.fullname && (
          <span className="text-red-500">{errors.fullname}</span>
        )}
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
          onChange={handleChange}
        />
        {errors.email && <span className="text-red-500">{errors.email}</span>}
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
          onChange={handleChange}
        />
        {errors.github && <span className="text-red-500">{errors.github}</span>}
      </div>

      <button
        type="submit"
        className="bg-[#d96d49] border-gray-500 rounded-xl p-3 text-xl font-bold text-gray-950 cursor-pointer"
      >
        Generate My Ticket
      </button>
    </form>
  );
}

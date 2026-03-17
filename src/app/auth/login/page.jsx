"use client";
import React, { useState } from "react";
import { Checkbox } from "antd";
import Link from "next/link";
import Image from "next/image";
import LocationIco from "@/components/icon/LocationIco";
import Arrow from "@/components/icon/Arrow";
import Image1 from "../../../../public/img/shopImage.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Values:", formData);
  };

  return (
    <div className="flex container m-auto bg-[#0F0B1A] justify-center items-center min-h-screen px-4 lg:px-0">
      <div className="w-full">
        {/* Shop Card */}
        <div className="bg-[#1A0E2E] border p-2 border-[#2A2448] rounded-2xl mb-6">
          <Link href={"/shopDetails"}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Image
                  className="w-[70px] h-[70px] object-cover rounded-2xl"
                  src={Image1}
                  alt="Logo"
                />
                <div className="space-y-2">
                  <h2 className="text-[17px] text-white font-semibold">
                    Copper Alley Bar
                  </h2>
                  <p className="text-gray-400 text-[12px] flex gap-1 items-center">
                    <LocationIco /> Austin, Texas, USA
                  </p>
                </div>
              </div>
              <Arrow />
            </div>
          </Link>
        </div>

        <h2 className="text-2xl font-semibold text-white mb-2">
          Venue Bartender Login
        </h2>
        <p className="text-gray-400 mb-6 text-sm">
          Sign in to start your shift and manage venue orders.
        </p>

        {/* Normal Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm text-white">Enter Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 rounded-full bg-[#1A0E2E] border border-[#2A2448] text-white outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-white">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 rounded-full bg-[#1A0E2E] border border-[#2A2448] text-white outline-none"
              required
            />
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-gray-300 text-sm">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              Remember me
            </label>

            <Link
              href={"/forgot-password"}
              className="text-sm text-[#2F799E] hover:underline"
            >
              Forget password?
            </Link>
          </div>

          {/* Button */}
         <Link href={"/shiftDetails"}>  <button
            type="submit"
            className="w-full bg-gradient-to-tr from-[#822CE7] to-[#BB82FF] text-white shadow-md px-3 py-2 rounded-full"
          >
            Login
          </button></Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
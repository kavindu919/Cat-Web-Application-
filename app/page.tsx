"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  //make router instance
  const router = useRouter();
  return (
    <div className="bg-custom-image bg-cover bg-right min-h-screen mt-0">
      <Navbar />
      <div className="flex flex-col ">
        <h1 className="ml-44 mt-56 text-7xl bg-gradient-to-r from-slate-900 via-violet-600 to-indigo-600 inline-block text-transparent bg-clip-text">
          Do you believe <br /> in love at first meow?
        </h1>
      </div>
      <button
        className="text-5xl ml-44 mt-12"
        onClick={() => router.push("/cats")}
      >
        Explore
      </button>
    </div>
  );
};

export default Home;

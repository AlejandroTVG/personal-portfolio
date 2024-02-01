"use client";
import React from "react";
import Image from "next/image";
import ParticlesBg from "particles-bg";

export const dynamic = "force-dynamic";

export default function ProfileSection() {
  return (
    <div className="flex h-full justify-center items-center bg-transparent">
      <Image
        src="/ProfileImage.jpg"
        alt="Profile"
        className="w-40 h-50 object-cover rounded-full absolute z-10"
        width={200}
        height={300}
      />
      <ParticlesBg type="cobweb" num={10} />
    </div>
  );
}

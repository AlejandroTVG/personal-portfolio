import React from "react";
import Image from "next/image";
import ParticlesBg from "particles-bg";

export default function ProfileSection() {
  return (
    <div className="h-80 flex justify-center items-center bg-transparent">
      <Image
        src="/ProfileImage.jpg"
        alt="Profile"
        className="w-40 h-60 object-cover rounded-full absolute z-10"
        width={200}
        height={300}
      />
      <div className="h-full">
        <ParticlesBg type="cobweb" num={10} />
      </div>
    </div>
  );
}

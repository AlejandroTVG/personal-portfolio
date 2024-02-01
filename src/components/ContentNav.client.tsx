"use client";
import React from "react";
import dynamic from "next/dynamic";
import Accordion from "./ButtonAccordion.client";

// Dynamically import ParticlesBg with SSR disabled
const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false });

function ContentNav() {
  return (
    <div className="h-24 flex flex-row justify-between bg-transparent overflow-hidden items-center">
      <div className="flex ml-6 items-center text-black p-6 bg-white h-10 rounded-lg transition ease-in-out  hover:scale-110  duration-300">
        <a href="/" className="font-semibold text-xl tracking-tight ">
          {"Alejandro's Portfolio"}
        </a>
      </div>
      <div className="h-full">
        <Accordion title="Contact info">
          <div>
            <p>Email: AlejandroCR@thevitalgroup.com</p>
            <p>Phone: 561-227-1785</p>
          </div>
        </Accordion>
      </div>
      <div className="h-24 w-full absolute p-0 -z-10">
        <ParticlesBg type="circle" num={10} />
      </div>
    </div>
  );
}

export default ContentNav;

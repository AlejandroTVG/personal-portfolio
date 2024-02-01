"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ProfileSection with SSR disabled due to ParticlesBG needing access to the Window obj.
const ProfileSection = dynamic(() => import("./ProfileSection.client"), {
  ssr: false,
});

export default function SideBar() {
  const [sectionSelected, setSectionSelected] = useState("about-me");

  return (
    <nav className="h-full">
      <div className="h-2/5 bg-slate-50">
        <ProfileSection />
      </div>
      <ul className="grid h-3/5 justify-items-stretch">
        <li>
          <Link
            onClick={() => {
              setSectionSelected("about-me");
              console.log(sectionSelected);
            }}
            className={`${liStyle} ${
              sectionSelected === "about-me" ? "bg-transparent" : "bg-slate-50"
            }`}
            href="/content/">
            About Me
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setSectionSelected("projects");
              console.log(sectionSelected);
            }}
            className={`${liStyle} ${
              sectionSelected === "projects" ? "bg-transparent" : "bg-slate-50"
            }`}
            href="/content/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setSectionSelected("resume");
              console.log(sectionSelected);
            }}
            className={`${liStyle} ${
              sectionSelected === "resume" ? "bg-transparent" : "bg-slate-50"
            }`}
            href="/content/resume">
            Resume
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setSectionSelected("certifications");
              console.log(sectionSelected);
            }}
            className={`${liStyle} ${
              sectionSelected === "certifications"
                ? "bg-transparent"
                : "bg-slate-50"
            }`}
            href="/content/certifications">
            Certifications
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const liStyle =
  "flex h-full items-center justify-center cursor-pointer hover:bg-slate-900 hover:text-slate-100 transition-all duration-500";

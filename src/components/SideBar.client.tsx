"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import ProfileSection from "./ProfileSection.client";

export default function SideBar() {
  const [sectionSelected, setSectionSelected] = useState("about-me");

  return (
    <nav>
      <ProfileSection />
      <ul>
        <li>
          <Link
            onClick={() => {
              setSectionSelected("about-me");
              console.log(sectionSelected);
            }}
            className={`bg-slate-50 p-5 flex justify-center cursor-pointer hover:bg-slate-900 hover:text-slate-100 transition-all duration-500 ${
              sectionSelected === "about-me" ? "bg-slate-500" : "bg-slate-50"
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
            className={`bg-slate-50 p-5 flex justify-center cursor-pointer hover:bg-slate-900 hover:text-slate-100 transition-all duration-500 ${
              sectionSelected === "projects" ? "bg-slate-500" : "bg-slate-50"
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
            className={`bg-slate-50 p-5 flex justify-center cursor-pointer hover:bg-slate-900 hover:text-slate-100 transition-all duration-500 ${
              sectionSelected === "resume" ? "bg-slate-500" : "bg-slate-50"
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
            className={`bg-slate-50 p-5 flex justify-center cursor-pointer hover:bg-slate-900 hover:text-slate-100 transition-all duration-500 ${
              sectionSelected === "certifications"
                ? "bg-slate-500"
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

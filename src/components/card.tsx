"use client";
import React from "react";
import Tilt from "react-parallax-tilt";

export default function Card() {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      className="bg-transparent bg-blend-lighten hover:bg-blend-darken w-4/6 h-3/5 rounded-2xl border-slate-300 border-2 shadow-2xl ">
      <div>Test</div>
    </Tilt>
  );
}
{
  /* <div className="bg-slate-600 w-4/6 h-3/5 rounded-2xl border-slate-300 border">
      <Tilt className="style br2 shadow-2 mw4 h-auto">
        <div className="bg-slate-600 w-4/6 h-3/5 rounded-2xl border-slate-300 border">
          Test
        </div>
      </Tilt>
    </div> */
}

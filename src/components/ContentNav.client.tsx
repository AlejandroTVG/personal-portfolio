"use client";
import React from "react";
import Accordion from "./ButtonAccordion.client";

function ContentNav() {
  return (
    <nav className="h-min flex items-center justify-between flex-wrap bg-gradient-to-br from-slate-900 to-indigo-600">
      <div className="p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a href="/" className="font-semibold text-xl tracking-tight ">
            {"Alejandro's Portfolio"}
          </a>
        </div>
      </div>
      <div className="h-full">
        <Accordion title="Contact info">
          <div>
            <p>Email: AlejandroCR@thevitalgroup.com</p>
            <p>Phone: 561-227-1785</p>
          </div>
        </Accordion>
      </div>
    </nav>
  );
}

export default ContentNav;

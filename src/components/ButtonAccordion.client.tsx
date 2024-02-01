import React, { useState, ReactNode } from "react";

type AccordionProps = {
  title: string;
  children: ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={` overflow-hidden flex items-center transition-transform duration-500 ease-in-out h-full ${
        isOpen ? "translate-x-0" : "translate-x-72"
      }`}>
      <button
        className="bg-blue-500 text-white font-semibold p-3 pl-4 h-full pr-1 ml-2 rounded-l-lg"
        onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      <div className="p-3 bg-blue-500 h-full flex items-center">{children}</div>

      <span className="absolute flex h-3 w-3 -translate-y-8 translate-x-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-100 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-100"></span>
      </span>
    </div>
  );
};

export default Accordion;

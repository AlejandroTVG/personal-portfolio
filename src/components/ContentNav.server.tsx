function ContentNav() {
  return (
    <nav className="h-min flex items-center justify-between flex-wrap bg-gradient-to-br from-slate-900 to-indigo-600 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a href="/" className="font-semibold text-xl tracking-tight">
          {"Alejandro's Portfolio"}
        </a>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"></button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="/content/projects"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Projects
          </a>
          <a
            href="/content/resume"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Resume
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}

export default ContentNav;

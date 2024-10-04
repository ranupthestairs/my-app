import Link from "next/link";

function Header() {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center px-5">
          <Link href="/" className=" text-[#16f2b3] text-3xl fond-bold"> Welcome </Link>
        </div>
          
        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-indigo-500 transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-indigo-500 transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-indigo-500 transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-indigo-500 transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-indigo-500 transition-colors duration-300 hover:text-pink-600">BLOGS</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-indigo-500 transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  )

}

export default Header;
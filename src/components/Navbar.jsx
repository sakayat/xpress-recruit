import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 w-full">
      <div className="bg-[#d4eaf7] border-b border-[#d4eaf7]">
        <div className="container mx-auto">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:justify-start">
              <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                <span className="hidden md:block text-black text-2xl ml-2">
                  Xpress Recruit
                </span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-5 capitalize font-semibold">
                  {["home", "jobs", "add job"].map((link, index) => (
                    <NavLink
                      to={index === 2 ? `/add-job` : `${link}`}
                      key={index}
                      className=""
                    >
                      {link}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

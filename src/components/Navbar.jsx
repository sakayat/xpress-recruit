import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Jobs",
      href: "/jobs",
    },
    {
      name: "Add Job",
      href: "/add-job",
    },
  ];

  return (
    <nav className="fixed left-0 right-0 w-full">
      <div className="bg-sky-blue border-b border-sky-blue">
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
                  {navLinks.map((link, i) => (
                    <div key={i}>
                      <NavLink
                        to={link.href}
                        className={
                          location.pathname === link.href
                            ? "bg-black text-white py-3 px-6 rounded-md"
                            : ""
                        }
                      >
                        {link.name}
                      </NavLink>
                    </div>
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

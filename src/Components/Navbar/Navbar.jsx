import { RiCoinsFill } from "react-icons/ri";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [userData] = useUser();
  const [theme, setTheme] = useState("corporate");

  const toggleTheme = () => {
    const newTheme = theme === "corporate" ? "dark" : "corporate";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleLogOut = () => {
    logOut();
  };

  return (
    <nav className="navbar shadow-md sticky z-10 top-0 flex justify-between items-center px-4 bg-base-100">
      <div className="flex items-center">
        <a href="/" className="flex items-center gap-2">
          <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m9-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-2xl font-extrabold tracking-wide">Micro<span className="text-secondary">Task</span></span>
        </a>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Link to="/" className="hover:text-primary">Home</Link>
        <Link to="/about" className="hover:text-primary">About</Link>
        <Link to="/faqs" className="hover:text-primary">FAQs</Link>

        {user && user.email ? (
          <>
            <Link to={`/dashboard/${userData?.role?.toLowerCase()}Home`} className="hover:text-primary">Dashboard</Link>
            <span className="flex items-center gap-1 text-yellow-400 font-semibold">{userData?.coins || 0} <RiCoinsFill /></span>

            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="cursor-pointer hover:text-primary">Profile</label>
              <ul tabIndex={0} className="dropdown-content menu p-2 bg-base-100 rounded-lg shadow-md w-40">
                <li><Link to="/profile">My Profile</Link></li>
                <li><button onClick={handleLogOut}>Logout</button></li>
              </ul>
            </div>

            <a href="https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Litonuddinnil" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              Join as Developer
            </a>

            <button onClick={toggleTheme} className="btn btn-ghost">
              {theme === "corporate" ? <FaMoon /> : <FaSun />}
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-primary">Login</Link>
            <Link to="/register" className="hover:text-primary">Register</Link>

            <a href="https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Litonuddinnil" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              Join as Developer
            </a>

            <button onClick={toggleTheme} className="btn btn-ghost">
              {theme === "corporate" ? <FaMoon /> : <FaSun />}
            </button>
          </>
        )}
      </div>

      <div className="md:hidden dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost"><FaBars size={24} /></label>
        <ul tabIndex={0} className="dropdown-content menu p-2 bg-base-100 rounded-lg w-52 shadow-md">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/faqs">FAQs</Link></li>

          {user && user.email ? (
            <>
              <li><Link to={`/dashboard/${userData?.role?.toLowerCase()}Home`}>Dashboard</Link></li>
              <li><span className="flex items-center gap-1 text-yellow-400 font-semibold">{userData?.coins || 0} <RiCoinsFill /></span></li>
              <li><Link to="/profile">My Profile</Link></li>
              <li><button onClick={handleLogOut}>Logout</button></li>
              <li><a href="https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Litonuddinnil" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">Join as Developer</a></li>
              <li><button onClick={toggleTheme} className="btn btn-sm">{theme === "corporate" ? <FaMoon /> : <FaSun />}</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><a href="https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Litonuddinnil" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">Join as Developer</a></li>
              <li><button onClick={toggleTheme} className="btn btn-sm">{theme === "corporate" ? <FaMoon /> : <FaSun />}</button></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

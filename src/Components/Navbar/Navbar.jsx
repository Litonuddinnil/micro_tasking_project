import { RiCoinsFill } from "react-icons/ri";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [userData] = useUser();
  const navigate = useNavigate();
  const [theme, setTheme] = useState("corporate");
  const toggleTheme = () => {
    const newTheme = theme === "corporate" ? "black" : "corporate";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  const handleLogOut = () => {
    logOut();
  };

  return (
    <nav className={`navbar  ${theme === "corporate"? "bg-background" : "bg-[#121212]"} shadow-md sticky z-10 top-0 flex justify-between items-center px-4`}>
      <div className="flex items-center">
        <a href="/" className="flex items-center gap-2">
          <svg className="h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m9-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-2xl font-extrabold tracking-wide text-blue-600">Micro<span className="text-primary">Task</span></span>
        </a>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/faqs" className="hover:text-blue-600">FAQs</Link>
        {user && user.email ? (
          <>
            <Link to={`/dashboard/${userData?.role?.toLowerCase()}Home`} className="hover:text-blue-600">Dashboard</Link>
            <span className="flex items-center gap-1 text-yellow-400 text-lg font-semibold">{userData?.coins || 0} <RiCoinsFill /></span>
            <div className="dropdown dropdown-hover relative">
              <label tabIndex={0} className="cursor-pointer hover:text-blue-400">Profile</label>
              <ul tabIndex={0} className={`dropdown-content menu p-2 ${theme === "corporate"? "bg-white" : "bg-[#121212]"}  rounded-lg w-40 absolute shadow-md`}>
                <li><Link to="/profile" className="hover:text-blue-600">My Profile</Link></li>
                <li><button onClick={handleLogOut} className="hover:text-blue-600">Logout</button></li>
              </ul>
            </div>
            <a href="https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Litonuddinnil" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm hover:text-blue-400">Join as Developer</a>
            <button onClick={toggleTheme} className="btn btn-error flex items-center">{theme === "corporate" ? <FaMoon /> : <FaSun />}</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-blue-600">Login</Link>
            <Link to="/register" className="hover:text-blue-600">Register</Link>
            <a href="https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Litonuddinnil" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-smhover:text-blue-400">Join as Developer</a>
            <button onClick={toggleTheme} className="btn bg-primary flex items-center">{theme === "corporate" ? <FaMoon /> : <FaSun />}</button>
          </>
        )}
      </div>

      <div className="md:hidden dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost"><FaBars size={24} /></label>
        <ul tabIndex={0} className={`dropdown-content menu p-2 shadow ${theme === "corporate"? "bg-white" : "bg-[#121212]"}  rounded-lg w-52`}>
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link to="/faqs" className="hover:text-blue-600">FAQs</Link></li>
          {user && user.email ? (
            <>
              <li><Link to={`/dashboard/${userData?.role?.toLowerCase()}Home`} className="hover:text-blue-600">Dashboard</Link></li>
              <li><span className="flex items-center gap-1 text-yellow-400 text-lg font-semibold">{userData?.coins || 0} <RiCoinsFill /></span></li>
              <li><Link to="/profile" className="hover:text-blue-600">My Profile</Link></li>
              <li><button onClick={handleLogOut} className="hover:text-blue-600">Logout</button></li>
              <li><a href="https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Litonuddinnil" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm text-whitehover:text-blue-400">Join as Developer</a></li>
              <li><button onClick={toggleTheme} className="btn bg-primary flex items-center">{theme === "corporate" ? <FaMoon /> : <FaSun />}</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="hover:text-blue-600">Login</Link></li>
              <li><Link to="/register" className="hover:text-blue-600">Register</Link></li>
              <li><a href="https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Litonuddinnil" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm text-white hover:text-blue-400">Join as Developer</a></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

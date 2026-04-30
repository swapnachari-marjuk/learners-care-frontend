import React from "react";
import { Link } from "react-router";
import useAuth from "../hooks/AuthHook/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
  const links: React.JSX.Element = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about-ls"}>About</Link>
      </li>
      <li>
        <Link to={"/contact-ls"}>Contact</Link>
      </li>
    </>
  );

  const { user, loading, signOutUser } = useAuth();

  const handleSignOut = () => {
    signOutUser()
      .then(() => toast.warn("User logged out!"))
      .catch((error) => {
        console.log(error);
        toast.error("something went wrong!");
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="text-xl font-semibold italic">
            Learners Care
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <span className="loading loading-ring loading-xl"></span>
          ) : user ? (
            <button onClick={handleSignOut} className="btn bg-red-600">
              Logout
            </button>
          ) : (
            <>
              <Link className="btn btn-ghost" to={"/login"}>
                Login
              </Link>
              <Link className="btn btn-primary" to={"/signup"}>
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Nav = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logOutUser()
      .then(() => {})
      .catch(() => {});
  };

  const menuItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/categories'>Catagories</Link>
      </li>
      <li>
        <Link>Blogs</Link>
      </li>
    </>
  );

  return (
    <div className="navbar py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
         {menuItems}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">MotoCross</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
        {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
       {
       user?.uid ?
      <>
       <Link onClick={handleLogout} className="btn btn-accent">
          LogOut
        </Link>
        </>
        : 
        <>
         <Link to='/login' className="btn btn-accent">
          Log In
        </Link>
        </> 
      }
      </div>
    </div>
  );
};

export default Nav;

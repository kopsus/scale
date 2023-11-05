import { AiOutlineHome } from "react-icons/ai"
import { RxHamburgerMenu } from "react-icons/rx"
import { MdOutlineExplore } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { FiSettings } from "react-icons/fi"
import { IoIosCreate } from "react-icons/io"

import "./navbar.css"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { UseLogOut } from "../hooks/useLogOut"
const Navbar = () => {
  const [change, setChange] = useState(false)
  const { handleLogOut } = UseLogOut()

  const NavLinkActive = ({ isActive }) => {
    return {
      border: isActive ? "active" : "",
      borderRadius: isActive ? "active" : "",
      color: isActive ? "" : "",
    }
  }

  return (
    <div className="navbar">
      <div className="leftBar">
        <div className="letfBar_title">
          <p className="">Scale</p>
        </div>
        <div className="hamburger" onClick={() => setChange(!change)}>
          <RxHamburgerMenu size={"2rem"} />
        </div>
        <div className={`leftBar_content ${change ? "active" : "inactive"}`}>
          <NavLink
            to={"/scale"}
            className={`leftBar_content_item ${NavLinkActive}`}
          >
            <AiOutlineHome size={"25px"} />
            <p>Home</p>
          </NavLink>
          <NavLink
            to={"/explore"}
            className={`leftBar_content_item ${NavLinkActive}`}
          >
            <MdOutlineExplore size={"25px"} />
            <p>Explore</p>
          </NavLink>{" "}
          <NavLink
            to={"/profile"}
            className={`leftBar_content_item ${NavLinkActive}`}
          >
            <CgProfile size={"25px"} />
            <p>Profile</p>
          </NavLink>{" "}
          <NavLink
            to={"/setting"}
            className={`leftBar_content_item ${NavLinkActive}`}
          >
            <FiSettings size={"25px"} />
            <p>Update</p>
          </NavLink>{" "}
          <NavLink
            to={"/create"}
            className={`leftBar_content_item ${NavLinkActive}`}
          >
            <IoIosCreate size={"25px"} />
            <p>Create</p>
          </NavLink>
          <button
            onClick={handleLogOut}
            type="button"
            className="btn btn-md w-1/2 mx-auto mt-20 bg-red-500 border-none text-white hover:bg-red-600"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar

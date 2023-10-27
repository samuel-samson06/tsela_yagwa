import { NavLink } from "react-router-dom"
import logo from "../../ui_daniel_pics/logo.svg"
import {RxHamburgerMenu} from "react-icons/rx"
import { useState } from "react"

function Header() {
  
  const [navBarTrigger, setNavBarTrigger] = useState(false)
  
  function handleHorizontalNavigation(){
    setNavBarTrigger(!navBarTrigger)
  }
  function handleHorizontalNavigationRemove(){
    setNavBarTrigger(!navBarTrigger)
  }


  return (
    <>
        {/* Vertical Navigation */}
        <nav className={` ${navBarTrigger?"flex":"hidden"} fixed flex-col w-full h-full bg-gray-100  items-center font-semibold py-6`}>
                <p onClick={handleHorizontalNavigationRemove} className=" cursor-pointer absolute top-0 right-0 font-semibold text-2xl px-5 py-5">×</p>
                <NavLink onClick={handleHorizontalNavigationRemove} to={"/"} className={ " border-b-2 border-gray-200   hover:text-red-600 transition-all  w-screen px-3 py-3 hover:bg-gray-200 "}>Home</NavLink>
                <NavLink onClick={handleHorizontalNavigationRemove} to={"/about"} className={" border-b-2 border-gray-200   hover:text-red-600 transition-al  w-screen px-3 py-3 hover:bg-gray-200 "}>About</NavLink>
                <NavLink onClick={handleHorizontalNavigationRemove} to={"/marketplace"} className={" border-b-2 border-gray-200    hover:text-red-600 transition-all px-3 w-screen  py-3 hover:bg-gray-200 "}>Marketplace</NavLink>
                <NavLink onClick={handleHorizontalNavigationRemove} to={"/event"} className={" border-b-2 border-gray-200 hover:text-red-600 transition-all w-screen px-3  py-3 hover:bg-gray-200 "}>Events</NavLink>
                <NavLink onClick={handleHorizontalNavigationRemove}  to={"register"} className={function({isActive}){
                  return(
                    isActive?" hidden  text-white font-medium bg-red-500 px-3 py-1 rounded-3xl":" border-b-2 border-gray-200   w-screen  py-3 hover:bg-gray-200 px-3 hover:text-red-600"
                  )
                }}>Register</NavLink>
            </nav>

        <header className="  max-sm:justify-between max-sm:px-8  flex items-center  justify-around bg-white px-1 py-2">
            <img src={logo} alt="Companies Logo"  className=" w-40"/>
            
    
            {/* Horizontal Navigation */}
            <nav className=" max-sm:hidden flex justify-evenly gap-3 text-sm">
                <NavLink to={"/"} className={"hover:text-red-600 transition-all"}>Home</NavLink>
                <NavLink to={"/about"} className={"hover:text-red-600 transition-all"}>About</NavLink>
                <NavLink to={"/marketplace"} className={"hover:text-red-600 transition-all"}>Marketplace</NavLink>
                <NavLink to={"/event"} className={"hover:text-red-600 transition-all"}>Events</NavLink>
            </nav>
            <NavLink  to={"register"} className={function({isActive}){
              return(
                isActive?" hidden  text-white font-medium bg-red-500 px-3 py-1 rounded-3xl":" max-sm:hidden text-white font-medium bg-red-500 px-3 py-1 rounded-3xl "
              )
            }}>Register</NavLink>
            <div className=" sm:hidden max-sm:block">
                <RxHamburgerMenu onClick={handleHorizontalNavigation}/>
            </div>
        </header>
    </>
  )
}

export default Header
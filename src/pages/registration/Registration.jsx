import { NavLink } from "react-router-dom"
import RegistrationForm from "./RegistrationForm"

function Registration() {
  return (
    <div>
        <header className=" mb-10 bg-slate-200  gap-4 flex flex-col items-center h-44 justify-center">
            <h1 className=" font-[Georgia] text-3xl font-semibold text-center text-green-700">Registration</h1>
            <div className=" flex gap-3">
                <NavLink to={"/"} className={" a"}>Home</NavLink>
                <span className=" font-semibold">→</span>
                <NavLink to={"/register"} className={" a"}>Registration</NavLink>
            </div>
        </header>
        <main>
            <header className=" tracking-widest text-center font-medium">LISTING OF LIVESTOCK</header>
            <RegistrationForm/>
        </main>
    </div>
  )
}

export default Registration
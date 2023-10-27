import { NavLink } from "react-router-dom"
import EventsSection from "./EventsSection"


function Events() {
  return (
    <div>
        <header className=" mb-10 bg-slate-200  gap-4 flex flex-col items-center h-44 justify-center">
            <h1 className=" font-[Georgia] text-3xl font-semibold text-center text-green-700">Events</h1>
            <div className=" flex gap-3">
                <NavLink to={"/"} className={" a"}>Home</NavLink>
                <span className=" font-semibold">→</span>
                <NavLink to={"/event"} className={" a"}>Events</NavLink>
            </div>
        </header>
        <p className=" max-sm:text-[12px] text-sm text-center my-8">Tsela Yagwe Network platform endorses and promotes events to empower the locally listed <br /> businesses to display, promote and sell their products and services,  which ultimately increases employment through <br /> the engagement of sales promoters and give the event organisers assurance of stall <br /> reservations.</p>
        <section>
            <EventsSection/>
        </section>
    </div>
  )
}

export default Events
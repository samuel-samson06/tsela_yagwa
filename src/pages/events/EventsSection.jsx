import events1 from "../../ui_daniel_pics/events1.svg"
import events2 from "../../ui_daniel_pics/events2.svg"
import events3 from "../../ui_daniel_pics/events3.svg"
import events4 from "../../ui_daniel_pics/events4.svg"
import events5 from "../../ui_daniel_pics/events5.svg"
import events6 from "../../ui_daniel_pics/events6.svg"

function EventsSection() {
  return (
    <div className=" max-sm:my-16 max-sm:grid-cols-1 max-sm:gap-12 grid grid-cols-3 gap-x-3 rounded-xl gap-y-5 my-24 mx-4 ">
        <section className=" flex flex-col items-center justify-center">
            <img loading="lazy"  src={events1} alt="events" className=" max-sm:w-56 rounded-tl-xl rounded-tr-xl w-[100%] flex flex-col items-center" />
            <article className=" w-[100%]  max-sm:w-56 bg-gray-200 px-3 py-2">
                <h1 className=" font-semi max-sm:text-[12px] max-sm:mb-3 font-semibold">Webinar:How to build a farm in 2024</h1>
                <p className=" mb-3 text-[11px] max-sm:text-[10px]">This web inar is going to teach you how to build an <br /> effective farm this coming 2024</p>
            </article>
            <button className=" text-white rounded-b max-sm:w-56 rounded-bl-xl rounded-br-xl text-sm py-2 px-1 text-center bg-green-500 w-[100%]">SEE MORE DETAILS</button>
        </section>
        <section className=" flex flex-col items-center justify-center">
            <img loading="lazy"  src={events2} alt="events" className=" max-sm:w-56 rounded-tl-xl rounded-tr-xl w-[100%] flex flex-col items-center" />
            <article className=" max-sm:w-56 bg-gray-200 w-[100%] px-3 py-2">
                <h1 className=" max-sm:text-[12px] max-sm:mb-3 font-semibold">Webinar:How to build a farm in 2024</h1>
                <p className=" mb-3 text-[11px] max-sm:text-[10px]">This webinar is going to teach you how to build an <br /> effective farm this coming 2024</p>
            </article>
            <button className=" text-white max-sm:w-56 rounded-bl-xl rounded-br-xl text-sm py-2 px-1 text-center bg-green-500 w-[100%]">SEE MORE DETAILS</button>
        </section>
        <section className=" flex flex-col items-center justify-center">
            <img loading="lazy"  src={events3} alt="events" className=" max-sm:w-56 rounded-tl-xl rounded-tr-xl w-[100%] flex flex-col items-center" />
            <article className=" max-sm:w-56 bg-gray-200 w-[100%] px-3 py-2">
                <h1 className=" max-sm:text-[12px] max-sm:mb-3 font-semibold">Webinar:How to build a farm in 2024</h1>
                <p className=" mb-3 text-[11px] max-sm:text-[10px]">This webinar is going to teach you how to build an <br /> effective farm this coming 2024</p>
            </article>
            <button className=" text-white max-sm:w-56 rounded-bl-xl rounded-br-xl text-sm py-2 px-1 text-center bg-green-500 w-[100%]">SEE MORE DETAILS</button>
        </section>
        <section className=" flex flex-col items-center justify-center">
            <img loading="lazy"  src={events4} alt="events" className=" max-sm:w-56 rounded-tl-xl rounded-tr-xl w-[100%] flex flex-col items-center" />
            <article className=" max-sm:w-56 bg-gray-200 w-[100%] px-3 py-2">
                <h1 className=" max-sm:text-[12px] max-sm:mb-3 font-semibold">Webinar:How to build a farm in 2024</h1>
                <p className=" mb-3 text-[11px] max-sm:text-[10px]">This webinar is going to teach you how to build an <br /> effective farm this coming 2024</p>
            </article>
            <button className=" text-white max-sm:w-56 rounded-bl-xl rounded-br-xl text-sm py-2 px-1 text-center bg-green-500 w-[100%]">SEE MORE DETAILS</button>
        </section>
        <section className=" flex flex-col items-center justify-center">
            <img loading="lazy"  src={events5} alt="events" className=" max-sm:w-56 rounded-tl-xl rounded-tr-xl w-[100%] flex flex-col items-center" />
            <article className=" max-sm:w-56 bg-gray-200 w-[100%] px-3 py-2">
                <h1 className=" max-sm:text-[12px] max-sm:mb-3 font-semibold">Webinar:How to build a farm in 2024</h1>
                <p className=" mb-3 text-[11px] max-sm:text-[10px]">This webinar is going to teach you how to build an <br /> effective farm this coming 2024</p>
            </article>
            <button className=" text-white max-sm:w-56 rounded-bl-xl rounded-br-xl text-sm py-2 px-1 text-center bg-green-500 w-[100%]">SEE MORE DETAILS</button>
        </section>
        <section className=" flex flex-col items-center justify-center">
            <img loading="lazy"  src={events6} alt="events" className=" max-sm:w-56 rounded-tl-xl rounded-tr-xl w-[100%] flex flex-col items-center" />
            <article className=" max-sm:w-56 bg-gray-200 w-[100%] px-3 py-2">
                <h1 className=" max-sm:text-[12px] max-sm:mb-3 font-semibold">Webinar:How to build a farm in 2024</h1>
                <p className=" mb-3 text-[11px] max-sm:text-[10px]">This webinar is going to teach you how to build an <br /> effective farm this coming 2024</p>
            </article>
            <button className=" text-white max-sm:w-56 rounded-bl-xl rounded-br-xl text-sm py-2 px-1 text-center bg-green-500 w-[100%]">SEE MORE DETAILS</button>
        </section>
        
    </div>
  )
}

export default EventsSection
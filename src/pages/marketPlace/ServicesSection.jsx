import event1 from "../../ui_daniel_pics/event1.svg"
import event2 from "../../ui_daniel_pics/event2.svg"
import event3 from "../../ui_daniel_pics/event3.svg"


function ServicesSection() {
  return (
    <div className=" my-16">
        <header className=" text-center my-10">
            <p className=" text-sm">TEAM</p>
             <h1 className=" max-sm:text-base max-sm:mx-2 font-[Georgia] text-green-600 font-semibold text-2xl">Tsela Yagwa always provide amazing <br />gardening and landscaping services.</h1>
        </header>
        <main className=" flex justify-evenly">
            <div className=" flex flex-col items-center justify-center gap-2">
                <img loading="lazy" className=" max-sm:w-20 w-40" src={event1} alt="Event producer" />
                <article>
                    <p className=" max-sm:text-[10px] text-center text-[12px]">Production</p>
                    <p className=" max-sm:text-[10px] max-sm:font-normal text-green-500 font-[Georgia] font-medium">Production Business</p>
                </article>
            </div>
            <div className=" flex flex-col items-center justify-center gap-2">
                <img loading="lazy" className=" max-sm:w-20 w-40" src={event2} alt="Event producer" />
                <article>
                    <p className=" max-sm:text-[10px] text-center text-[12px]">Processing</p>
                    <p className=" max-sm:text-[10px] max-sm:font-normal text-green-500 font-[Georgia] font-medium">Processing Business</p>
                </article>
            </div>
            <div className=" flex flex-col items-center justify-center gap-2">
                <img loading="lazy" className=" max-sm:w-20 w-40" src={event3} alt="Event producer" />
                <article>
                    <p className=" max-sm:text-[10px] text-center text-[12px]">Distribution</p>
                    <p className=" max-sm:text-[10px] max-sm:font-normal text-green-500 font-[Georgia] font-medium">Distribution Business</p>
                </article>
            </div>
        </main>
    </div>
  )
}

export default ServicesSection
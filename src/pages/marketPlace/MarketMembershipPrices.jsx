function MarketMembershipPrices() {
  return (
    <div>
        <div className="   max-sm: max-sm:mx-2 max-sm:text-xs max-sm:flex-col max-sm:gap-6 flex  justify-center my-16">
            <div className=" max-sm:-z-50 max-sm:scale-90 bg-gray-100 my-1 mx-2 rounded-xl">
                <p className="rounded-xl text-center bg-gray-200 text-xl font-medium py-3 text-gray-400 ">BASIC <br /> membership</p>
                <section className=" text-center py-2">
                    <p className=" text-sm"><span className=" text-2xl font-bold text-green-500">P120.00</span>/per month</p>
                    <p className=" text-sm">P960.00/per year</p>
                </section>
                <hr />
                <ul className=" max-sm:py-5 list-decimal py-3 px-6 font-medium flex flex-col gap-1 justify-center">
                    <li>Post products</li>
                    <li>Daily notifications of upcoming event stalls</li>
                </ul>
            </div>

            <div className=" max-sm:-z-50 max-sm: max-sm:mx-2 max-sm:text-xs max-sm:scale-95 scale-110 backgroundMain text-white my-1 mx-2 rounded-xl">
                <p className="rounded-xl text-center backgroundHeader text-xl font-medium py-3 text-white ">PREMIUM<br /> <span className=" font-normal text-base">membership</span></p>
                <section className=" text-center py-4">
                    <p className=" text-sm"><span className=" text-2xl font-bold">P200.00</span>/per month</p>
                    <p className=" text-sm">P1920.00/per year</p>
                </section>
                <hr />
                <ul className="list-decimal py-5 px-6 font-medium flex flex-col gap-3 justify-center">
                    <li>All standard plan features</li>
                    <li>Dedicated portal administrator</li>
                    <li>Dedicated sales promoter</li>
                    <li>100 outbound monthly bulk smses for your business</li>
                </ul>
            </div>
            <div className=" max-sm:-z-50 max-sm: max-sm:mx-2 max-sm:text-xs max-sm:scale-90 bg-gray-100 my-1 mx-2 rounded-xl">
                <p className="  rounded-xl text-center bg-gray-200 text-xl font-medium py-3 text-gray-400 ">STANDARD <br /> membership</p>
                <section className=" text-center py-2">
                    <p className=" text-sm"><span className=" text-2xl font-bold text-green-500">P160.00</span>/per month</p>
                    <p className=" text-sm">P1440.00/per year</p>
                </section>
                <hr />
                <ul className=" max-sm:py-5 list-decimal py-3 px-6 font-medium flex flex-col gap-1 justify-center">
                    <li>All basic plan features</li>
                    <li>Feature ads on social media platform</li>
                    <li>Portal training</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MarketMembershipPrices
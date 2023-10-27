import { NavLink } from "react-router-dom"
import MarketMembership from "./MarketMembership"
import ServicesSection from "./ServicesSection"

function Marketplace() {
  return (
    <div>
        <header className=" mb-10 bg-slate-200  gap-4 flex flex-col items-center h-44 justify-center">
            <h1 className=" font-[Georgia] text-3xl font-semibold text-center text-green-700">Marketplace</h1>
            <div className=" flex gap-3">
                <NavLink to={"/"} className={" a"}>Home</NavLink>
                <span className=" font-semibold">→</span>
                <NavLink to={"/marketplace"} className={" a"}>Marketplace</NavLink>
            </div>
        </header>
        <div>
            <p className=" max-sm:px-5 max-sm:text-[12px] max-sm:font-medium text-sm text-center my-10">The Tsela Yagwe Network marketplace offers digital market access to businesses for intra continental value chain trade and investment <br /> opportunities through the Africa Free Continental Trade Agreement (AfCTA). The platform also offers book keeping and analytical solutions for <br /> business owners and their partners or investors to track and monitor the cash flow and daily operations from anywhere.</p>
        </div>
        <section>
            <MarketMembership/>
        </section>
        <section>
            <ServicesSection/>
        </section>
    </div>
  )
}

export default Marketplace
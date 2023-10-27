import MarketMembershipPrices from "./MarketMembershipPrices"

function MarketMembership() {
  return (
    <div>
        <header className=" text-center my-16">
            <p className="text-sm">SYSTEM</p>
            <h1 className="max-sm:text-xl font-[Georgia] text-green-600 font-semibold text-3xl">Membership Package</h1>
        </header>
        <MarketMembershipPrices/>
    </div>
  )
}

export default MarketMembership
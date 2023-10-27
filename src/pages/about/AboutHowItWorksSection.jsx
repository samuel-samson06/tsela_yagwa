function AboutHowItWorksSection() {
  return (
    <>
        <section>
              <header className="  text-center my-10">
                  <p className=" text-sm">SYSTEM</p>
                  <h1 className=" max-sm:text-xl font-[Georgia] text-green-600 font-semibold text-3xl">How It Works</h1>
              </header>
              <main className=" max-sm:block max-sm:mx-10 max-sm:my-10 grid grid-cols-3 items-center mx-32 my-16">
                  <div className=" max-sm:my-5 text-center flex flex-col gap-2">
                    <section className=" rounded-2xl bg-green-500 border-[2px] border-green-700 text-white font-medium py-2">Register as a <br /> member</section>
                    <section className=" text-4xl  text-red-600">↓</section>
                    <section className=" rounded-2xl bg-green-500 border-[2px] border-green-700 text-white font-medium py-2">Select membership <br /> package</section>
                  </div>
                  <div className=" max-sm:my-5 flex flex-col bg-white  h-[100%] text-center justify-end">
                    <section className=" max-sm:-z-0 max-sm:transform max-sm:rotate-90 max-sm:text-4xl max-sm:text-center text-5xl text-red-600">→</section>
                  </div>
                  <div className=" max-sm:my-5 max-sm:flex-col text-center flex flex-col-reverse gap-2">
                    <section className=" rounded-2xl bg-green-500 border-[2px] border-green-700 text-white font-medium py-5">Create a stall</section>
                    <section className=" max-sm:-z-50 max-sm:transform max-sm:rotate-180  text-4xl text-red-600">↑</section>
                    <section className=" rounded-2xl bg-green-500 border-[2px] border-green-700 text-white font-medium py-5">Upload Products</section>                    
                  </div>
              </main>
            </section>
    </>  
)
}

export default AboutHowItWorksSection
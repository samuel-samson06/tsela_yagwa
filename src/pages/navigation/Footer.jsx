import { NavLink } from "react-router-dom"

// import bgImage from "../../ui_daniel_pics/footerImg.jpg"
function Footer() {
    const x= new Date()

  return (
    <div className={` grid grid-rows-2 bg-[url(ui_daniel_pics/footerImg-min.jpg)] h-[500px] bg-cover bg-center bg-no-repeat`}>
        <main className=" flex items-center justify-evenly">
            <section className=" max-sm:font-medium py-5 px-5 bg-green-600 bg-opacity-70 text-white">
                <p className=" text-[15px] max-sm:text-sm">Company intro video</p>
                <article className=" font-[Georgia] max-sm:text-lg text-2xl ">
                    See our intro video <br /> and lets start your <br />dream project
                </article>
            </section>
            <section className=" bg-gray-300 py-2 px-3 rounded-full text-3xl text-gray-900">
                <p>▸</p>
            </section>
        </main>

        <footer className=" py-3 px-5 bg-red-950 bg-opacity-75 text-white flex justify-end gap-10 max-sm:gap-5 ">
                <div className="">
                    <section className=" flex flex-col text-[12px] font-light gap-2">  
                        <h1 className="  max-sm:text-sm text-[15px] font-semibold">NAVIGATION</h1>
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/about"}>About</NavLink>
                        <NavLink to={"/marketplace"}>Marketplace</NavLink>
                        <NavLink to={"/"}>Team</NavLink>
                        <NavLink>Contact</NavLink>
                    </section>
                </div>
                <div>
                    <section className=" flex flex-col text-[12px] font-light gap-2">
                        <h1 className="  max-sm:text-sm text-[15px] font-semibold">COMPANY</h1>
                        <NavLink>FAQ&apos;s</NavLink>
                        <NavLink>Term&Conditions</NavLink>
                        <NavLink>PrivacyPolicy</NavLink>
                    </section>
                </div>
                <div>
                    <section className=" flex flex-col text-[12px] font-light gap-2">
                        <h1 className="  max-sm:text-sm text-[15px] font-semibold">SOCIAL</h1>
                        <NavLink>Facebook</NavLink>
                        <NavLink>Instagram</NavLink>
                        <NavLink>Twitter</NavLink>
                    </section>
                </div>
        </footer>
        
        <section className=" font-medium text-sm text-center py-1 bg-red-600 text-white max-sm:text-[12px] max-sm:font-medium max-sm:px-3 max-sm:py-3">ALL RIGHTS RESERVED | TESLA YAGWE COPYRIGHTS© {x.getFullYear()}</section>
    </div>
  )
}

export default Footer
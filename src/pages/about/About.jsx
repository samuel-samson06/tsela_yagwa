import { NavLink } from "react-router-dom"
import femaleImg from "../../ui_daniel_pics/womanIMG.svg"
import AboutHowItWorksSection from "./AboutHowItWorksSection"
import AboutTeamSection from "./AboutTeamSection"
// import aboutImg3 from "../../ui_daniel_picsaboutIMG3.png"

function About() {
  return (
    <>
        <div>

            <header className=" mb-10 bg-slate-200  gap-4 flex flex-col items-center h-44 justify-center">
                <h1 className=" font-[Georgia] text-3xl font-semibold text-center text-green-700">About</h1>
                <div className=" flex gap-3">
                  <NavLink to={"/"} className={" a"}>Home</NavLink>
                  <span className=" font-semibold">→</span>
                  <NavLink to={"/about"} className={" a"}>About</NavLink>
                </div>
            </header>
            
            <main className="max-sm:gap-4 max-sm:flex-col-reverse flex items-center justify-evenly py-4 px-4">
                <div className=" flex flex-col gap-4 max-sm:gap-12">
                    <section>
                        <p className=" text-green-500 font-[Georgia] text-2xl font-semibold">Who are we?</p>
                        <article className=" text-sm">
                            Tsela Yagwe Network is driven by impactful and mutually beneficial <br /> membership packages for various stakeholders of professions, <br /> businesses and educational levels. Becoming a part of our ecosystem <br /> is a simple 4 step process.
                        </article>
                    </section>
                    <section>
                        <p className=" text-greenpmn-500 font-[Georgia] text-2xl font-semibold">Mission & Vision</p>
                        <article className=" text-sm">
                            Loremem Ipsum is simply dummy text of the printing and typeset <br /> industry. Lorem Ipsum has been the industry&apos;s standard dumm ever <br /> since the 1500s, when an unknown printer took a galley scrambled it <br /> make a type specimen book. <br /><br />
                            Loremem Ipsum is simply dummy text of the printing and typeset <br />industry. Lorem Ipsum has been the industry&apos;s standard dumm <br /> scrambled it make a type specimen book.
                        </article>
                    </section>
                    <NavLink className={" bg-red-600 w-28 text-center text-white  font-semibold rounded-full py-1 px-2"}>Learn More</NavLink>
                </div>
                <img loading="lazy" src={femaleImg} alt=" Worker Image" className="max-sm:my-10 w-80"/>
            </main>
            <AboutHowItWorksSection/>
            <AboutTeamSection/>
        </div>
    </>
  )
}

export default About
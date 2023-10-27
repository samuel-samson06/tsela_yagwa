import aboutImg1 from "../../ui_daniel_pics/aboutIMG1.svg"
import aboutImg2 from "../../ui_daniel_pics/aboutIMG2.svg"
import aboutImg3 from "../../ui_daniel_pics/aboutIMG3.png"
function AboutTeamSection() {
  return (
    <>
        <section className=" my-16">
              <header className=" text-center my-10">
                  <p className=" text-sm">TEAM</p>
                  <h1 className=" max-sm:text-xl max-sm:font-medium font-[Georgia] text-green-600 font-semibold text-2xl">Tsela Yagwa feel proud for skilled team members.</h1>
              </header>
              <main className=" max-sm:flex-col max-sm:gap-8  flex gap-6 justify-center items-center">
                <div className=" space-y-2">
                  <img loading="lazy" className="  w-48" src={aboutImg1} alt="TEAM" />
                  <p className=" text-center text-[12px]">Founder of Tsela Yagwa</p>
                  <p className=" text-center text-lg font-semibold text-green-600 font-[Georgia]">Shoshana Horsley</p>
                </div>
                <div className=" space-y-2">
                  <img loading="lazy" className="  w-48" src={aboutImg2} alt="TEAM" />
                  <p className=" text-center text-[12px]">Senior Gardener</p>
                  <p className=" text-center text-lg font-semibold text-green-600 font-[Georgia]">Kristofer Pennell</p>
                </div>
                <div className=" space-y-2">
                  <img loading="eager" className="  w-48" src={aboutImg3} alt="TEAM" />
                  <p className=" text-center text-[12px]">Garden Designer</p>
                  <p className=" text-center text-lg font-semibold text-green-600 font-[Georgia]">Matthew Jackson</p>
                </div>
              </main>
        </section>
    </>
  )
}

export default AboutTeamSection
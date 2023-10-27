import { NavLink } from "react-router-dom"
import femaleImg from "../../ui_daniel_pics/womanIMG.svg"
import testimonial1 from "../../ui_daniel_pics/testimonial2.svg"
import testimonial2 from "../../ui_daniel_pics/testimonial1.svg"

// before:bg-black  before:absolute before:w-full before:h-[500px] before:bg-opacity-50 

function Home() {
  return (
    <>
        <div>
            <div  className="text-white bg-[url(ui_daniel_pics/cowBackgroundImg.jpg)]  text-center flex flex-col justify-center gap-6 items-center h-[500px] -z-40 bg-cover bg-center bg-no-repeat ">
                <h1 className=" font-semibold  max-sm:text-[12px] ">WELCOME TO TSELA YAGWA INVESTMENTS</h1>
                <p className=" font-[Georgia] text-3xl font-semibold max-sm:text-lg">Developing an eco-system of exported <br />trade and investment partnerships.</p>
                <button className="  bg-green-600 py-1 px-2 rounded-full font-medium text-base">Get Started</button>
            </div>
            <main className=" max-sm:gap-4 max-sm:flex-col-reverse flex items-center justify-evenly py-4 px-4">
                <div className=" flex flex-col gap-4 max-sm:gap-12">
                    <section>
                        <p className=" text-green-500 font-[Georgia]  text-2xl font-semibold">Who are we?</p>
                        <article className=" text-sm">
                            Tsela Yagwe Network is driven by impactful and mutually beneficial <br /> membership packages for various stakeholders of professions, <br /> businesses and educational levels. Becoming a part of our ecosystem <br /> is a simple 4 step process.
                        </article>
                    </section>
                    <section>
                        <p className=" text-green-500 font-[Georgia] text-2xl font-semibold">Mission & Vision</p>
                        <article className=" text-sm">
                            Lorem Ipsum is simply dummy text of the printing and typeset <br /> industry. Lorem Ipsum has been the industry&apos;s standard dumm ever <br /> since the 1500s, when an unknown printer took a galley scrambled it <br /> make a type specimen book. <br /><br />
                            Lorem Ipsum is simply dummy text of the printing and typeset <br />industry. Lorem Ipsum has been the industry&apos;s standard dumm <br /> scrambled it make a type specimen book.
                        </article>
                    </section>
                    <NavLink className={" bg-red-600 w-28 text-center text-white  font-semibold rounded-full py-1 px-2"}>Learn More</NavLink>
                </div>
                <img loading="lazy" src={femaleImg} alt=" Worker Image" className=" max-sm:my-10 w-80"/>
            </main>
            <aside>
                <div className=" flex flex-col gap-10 my-10 ">
                    <article className=" text-center">
                        <h1 className=" font-medium text-sm">HAPPY CLIENTS</h1>
                        <p className=" text-green-700 font-bold font-[Georgia] text-3xl max-sm:text-lg px-3 py-2">Tsela Yagwa <span className=" text-green-600">got the best feedback from happy clients</span></p>
                    </article>
                    <section className=" flex justify-evenly max-sm:flex-col">
                        <div className=" max-sm:m-5 max-sm:px-3 max-sm:rounded-md max-sm:text-[12px] my-10 bg-gray-200 py-2 px-4 g text-green-600 font-normal">
                            <p className=" my-4">Lorem Ipsum is simply dummy text the printing <br />and typesetting industry. Lorem has been the <br /> industry&apos;s standard dummy text since the 1500 <br /> when an unknown printer took galley type and <br /> scram bled it make a type specimen book</p> 
                            <img loading="lazy" src={testimonial1}  alt="Testimonial 1" className=" rounded-full max-sm:w-16" />
                        </div>
                        <div className=" max-sm:m-5 max-sm:px-3 max-sm:rounded-md max-sm:text-[12px] my-10 bg-gray-200 py-2 px-4 g text-green-600 font-normal">
                            <p className=" my-4">Lorem Ipsum is simply dummy text the printing <br />and typesetting industry. Lorem has been the <br /> industry&apos;s standard dummy text since the 1500 <br /> when an unknown printer took galley type and <br /> scram bled it make a type specimen book</p> 
                            <img loading={"lazy"} src={testimonial2} alt="Testimonial 1" className=" max-sm:w-16"  />
                        </div>
                    </section>
                </div>

            </aside>
        </div>
    </>
  )
}

export default Home
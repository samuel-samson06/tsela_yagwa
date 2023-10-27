import {CiUser} from "react-icons/ci"
import {LiaBirthdayCakeSolid} from "react-icons/lia"
import {BsPersonVcard,BsFillTelephoneFill} from "react-icons/bs"
import {BiWorld,BiSolidCity} from "react-icons/bi"
import {GiDirectionSigns} from "react-icons/gi"
import {HiOutlineMail} from "react-icons/hi"
import {FaLocationDot} from "react-icons/fa6"
import {AiOutlineLock} from "react-icons/ai"

function RegistrationForm() {
  return (
    <div  className="py-5 px-5 my-3 mx-10">
              <form action="" method="post">
                  <label htmlFor="" className=" flex items-center gap-3 border-2 py-3 px-2 my-2 rounded-xl">
                    <CiUser className=" text-xl"/>
                    <input type="text" placeholder="Full name of individual" name="" className=" w-full py-1 px-2 bg-white rounded-xl  outline-none placeholder:font-semibold"  />
                  </label><br />
                  
                  <label htmlFor="" className=" flex items-center gap-3 border-2 py-3 px-2 my-2 rounded-xl">
                    <LiaBirthdayCakeSolid className=" text-xl"/>
                    <input type="date"  name="" className=" w-full py-1 px-2 bg-white rounded-xl  outline-none placeholder:font-semibold"  />
                  </label><br />
                  
                  <div className=" px-3 pb-3">
                    <p className=" uppercase font-medium ">Title</p>
                    <label htmlFor="" className=" flex gap-2 items-center ">
                        <input type="radio" name="" id="" />
                        <p>Mr.</p>
                    </label>
                    <label htmlFor="" className=" flex gap-2 items-center ">
                        <input type="radio" name="" id="" />
                        <p>Mrs.</p>
                    </label>
                    <label htmlFor="" className=" flex gap-2 items-center ">
                        <input type="radio" name="" id="" />
                        <p>Ms.</p>
                    </label>
                  </div>

                  <label htmlFor="" className=" flex items-center gap-3 border-2 py-3 px-2 my-2 rounded-xl">
                    <BsPersonVcard className=" text-xl"/>
                    <input type="number" placeholder="ID number" name="" className=" w-full py-1 px-2 bg-white rounded-xl  outline-none placeholder:font-semibold"  />
                  </label><br />

                  <div className=" px-3 pb-3">
                    <p className=" uppercase font-medium ">Employment status</p>
                    <label htmlFor="" className=" flex gap-2 items-center">
                        <input type="radio" name="" id="" />
                        <p>Unemployed</p>
                    </label>
                    <label htmlFor="" className=" flex gap-2 items-center">
                        <input type="radio" name="" id="" />
                        <p>Self Employed</p>
                    </label>
                    <label htmlFor="" className=" flex gap-2 items-center">
                        <input type="radio" name="" id="" />
                        <p>Part time Employed</p>
                    </label>
                    <label htmlFor="" className=" flex gap-2 items-center">
                        <input type="radio" name="" id="" />
                        <p>Contractor</p>
                    </label>
                  </div>

                  
                  <label htmlFor="" className=" flex items-center gap-3 border-2 py-3 px-2 my-2 rounded-xl">
                    <BiWorld className=" text-xl"/>
                    <input type={"text"} placeholder="Country" name="" className=" w-full py-1 px-2 bg-white rounded-xl  outline-none placeholder:font-semibold"  />
                  </label><br />
                  
                  <label htmlFor="" className=" flex items-center gap-3 border-2 py-3 px-2 my-2 rounded-xl">
                    <BiWorld className=" text-xl"/>
                    <input type="text" placeholder="District/Province" name="" className=" w-full py-1 px-2 bg-white rounded-xl  outline-none placeholder:font-semibold"  />
                  </label><br />
                  
                  <label htmlFor="" className=" flex items-center gap-3 border-2 py-3 px-2 my-2 rounded-xl">
                    <BiSolidCity className=" text-xl"/>
                    <input type={"text"} placeholder="City" name="" className=" w-full py-1 px-2 bg-white rounded-xl  outline-none placeholder:font-semibold"  />
                  </label><br />
                  
                  <label htmlFor="" className=" flex items-center gap-3 border-2 py-3 px-2 my-2 rounded-xl">
                    <GiDirectionSigns className=" text-xl"/>
                    <input type="text" placeholder="Address" name="" className=" w-full py-1 px-2 bg-white rounded-xl  outline-none placeholder:font-semibold"  />
                  </label><br />
                  
                  <label htmlFor="" className=" flex items-center gap-3 border-2 py-3 px-2 my-2 rounded-xl">
                    <BsFillTelephoneFill className=" text-xl"/>
                    <input type={"number"} placeholder="Phone Number" name="" className=" w-full py-1 px-2 bg-white rounded-xl  outline-none placeholder:font-semibold"  />
                  </label><br />
                  
                  <label htmlFor="" className=" flex items-center gap-3 border-2 py-3 px-2 my-2 rounded-xl">
                    <BsFillTelephoneFill className=" text-xl"/>
                    <input type="number" placeholder="Alternative Phone Number" name="" className=" w-full py-1 px-2 bg-white rounded-xl  outline-none placeholder:font-semibold"  />
                  </label><br />
                  
                  <label htmlFor="" className=" flex items-center gap-3 border-2 py-3 px-2 my-2 rounded-xl">
                    <HiOutlineMail className=" text-xl"/>
                    <input type="email" placeholder="Email Address" name="" className=" w-full py-1 px-2 bg-white rounded-xl  outline-none placeholder:font-semibold"  />
                  </label><br />

                  <div className=" px-3 pb-3">
                    <p className=" uppercase font-medium ">Transaction method</p>
                    <label htmlFor="" className=" flex gap-2 items-center ">
                        <input type="radio" name="" id="" />
                        <p>Eft</p>
                    </label>
                    <label htmlFor="" className=" flex gap-2 items-center ">
                        <input type="radio" name="" id="" />
                        <p>Cah send.</p>
                    </label>
                    <label htmlFor="" className=" flex gap-2 items-center ">
                        <input type="radio" name="" id="" />
                        <p>Crypto</p>
                    </label>
                    <label htmlFor="" className=" flex gap-2 items-center ">
                        <input type="radio" name="" id="" />
                        <p>Cash payment</p>
                    </label>
                  </div>

                  <div className=" px-3 pb-3">
                    <p className=" uppercase font-medium ">Coupon card delivery options</p>
                    <label htmlFor="" className=" flex gap-2 items-center">
                        <input type="radio" name="" id="" />
                        <p>Post </p>
                    </label>
                    <label htmlFor="" className=" flex gap-2 items-center">
                        <input type="radio" name="" id="" />
                        <p>Collection point</p>
                    </label>
                  </div>

                  
                  <label htmlFor="" className=" flex items-center gap-3 border-2 py-3 px-2 my-2 rounded-xl">
                    <FaLocationDot className=" text-xl"/>
                    <input type="text" placeholder="Location of livestock farm" name="" className=" w-full py-1 px-2 bg-white rounded-xl  outline-none placeholder:font-semibold"  />
                  </label><br />
                  
                  <label htmlFor="" className=" flex items-center gap-3 border-2 py-3 px-2 my-2 rounded-xl">
                    <AiOutlineLock className=" text-xl"/>
                    <input type="password" placeholder="Create Password" name="" className=" w-full py-1 px-2 bg-white rounded-xl  outline-none placeholder:font-semibold"  />
                  </label><br />
                  
                  <label htmlFor="" className=" flex items-center gap-3 border-2 py-3 px-2 my-2 rounded-xl">
                    <AiOutlineLock className=" text-xl"/>
                    <input type="password" placeholder="Confirm Password" name="" className=" w-full py-1 px-2 bg-white rounded-xl  outline-none placeholder:font-semibold"  />
                  </label><br />
                <button className="  bg-red-500 text-white font-semibold w-full py-2 px-2 rounded-xl  outline-none placeholder:font-semibold uppercase">submit</button>
                  
              </form>
            </div>
  )
}

export default RegistrationForm
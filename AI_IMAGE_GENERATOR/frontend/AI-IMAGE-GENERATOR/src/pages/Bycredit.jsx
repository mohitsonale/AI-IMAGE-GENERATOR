import { plans } from "../assets/assets";



function Bycredit(){

    return(
        <div className="min-h-[80vh]  text-center pt-14 mb-10  ">
            <button className="border border-gray-400 px-10 py-2 rounded-full mb-6 hover:scale-105 transition-all duration-400 drop-shadow-md bg-white/20">Our Plans</button>
            <p className="text-center text-3xl font-medium mb-6 sm:mb-10">Choose the plans</p>

            <div className="flex flex-wrap justify-center gap-6  text-left">
                {plans.map((item,index)=>(
                    <div className="bg-white/90 p-12 px-10 rounded-lg drop-shadow-sm  w-80 m-auto cursor-pointer hover:scale-[1.02] duration-400 transition-all"  >

                    <div key={index} className="flex flex-col">

                        <img src={item.image} alt="" className="rounded-lg w-8" />
                        <h2 className="text-md mt-3 text-lg font-medium ">{item.id}</h2>
                        <p className="text-sm text-gray-400 ">{item.desc}</p>
                        <p className="mt-7 text-3xl font-bold">${item.price}  <span className="text-sm text-gray-400 font-light">/{  item.credits}credits </span> </p>
                        <button className="bg-black text-white w-full min-w-52  px-6 py-2 rounded-lg mt-14 ">Get Started</button>

                        

                    </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Bycredit;
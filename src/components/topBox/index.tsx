import {topDealUsers} from "../../data/data"
import Image from "next/image"

export const TopBox=()=>{
    return(
        <>
          <div className="w-[80%] lg:w-[30vw] mb-10 lg:mb-0 lg:h-[70vh] bg-gray-100 flex flex-col gap-4 items-center justify-center shadow-lg shadow-black/40">
              <h1 className="w-[95%] text-[1.4rem] text-gray-700">
                Top Deals
              </h1>
              <div className="flex items-center justify-center w-[100%] h-[85%] overflow-hidden lg:overflow-y-hidden overflow-y-auto">
                <ul className="flex flex-col items-center justify-center gap-3 w-[95%] h-[100%] py-1 ">
                  {
                      topDealUsers.map(items=>(
                         <li key={items.id} className="flex items-center justify-around w-[98%] gap-2">
                            <div className="flex gap-2 w-[80%] items-center">
                              <span className="w-[2.2rem] h-[2.2rem] rounded-full">
                                  <Image
                                  src={items.img}
                                  width={300}
                                   height={300}
                                    alt={items.img}
                                    className="rounded-full w-[100%] h-[100%]" />
                              </span>
                              <span className="flex flex-col w-[50%] text-black text-[0.8rem]">
                                <p>{items.username}</p>
                                <p>{items.email}</p>
                              </span>
                            </div>
                            <span className="text-[.8rem] text-black">
                              ${items.amount}
                            </span>
                         </li>
                      ))
                  }
                </ul>
              </div>
          </div>
        </>
    )
}
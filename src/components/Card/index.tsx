import { IoMdPerson } from "react-icons/io";

export const Card=()=>{
    return(
      <>
      <div className="flex flex-col align-center justify-center gap-10 px-5 w-[200px] lg:w-[280px] h-[200px] bg-gray-100 shadow-xl shadow-black/30">
           <IoMdPerson className="text-[1.6rem]"/>
           <div className="flex gap-5 align-center justify-around">
              <div>
                <h1 className="text-[1.8rem]">
                  <strong>$ 4.565K</strong>
                </h1>
                <p>
                  Total views
                </p>
             </div>
             <h1 className="text-green-400 mt-5">
              0.43%
             </h1>
           </div>
          </div>
      </>
    )
  }
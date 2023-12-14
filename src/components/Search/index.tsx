import {Input} from "../Input"
import { IoSearch } from "react-icons/io5";



export const Search= ()=>{
    return(
        <>
          <div className="flex align-center justify-between gap-4 w-[100%] text-black h-[90px] py-5 px-5 bg-gray-100 shadow-b-sm shadow-black">
            <div className="flex algin-center justify-center gap-2">
                <IoSearch className="text-gray-300 text-[1.5rem] mt-3"/>
                <Input type="search" placeholder="Type to search..." className="lg:w-[450px] h-[50px] bg-gray-100" />
            </div>
            <div className="flex">
                <div className=" flex w-[200px] h-[80px] align-center justify-center gap-3">
                    <div>
                        <h1>Josué Mendes</h1>
                        <h2>Engenheiro</h2>
                    </div>
                    <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-black">
                    </div>
                </div>
                <select className="hidden lg:block h-[50px] bg-gray-100">
                    <option>My profile</option>
                    <option>My profile</option>
                    <option>Log Out</option>
                </select>
            </div>
         </div>
        </>
    )
}
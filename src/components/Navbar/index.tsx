import Link from "next/link";
import { MdHome } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { IoMdPerson } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { TbTableShare } from "react-icons/tb";
import { FaMessage } from "react-icons/fa6";
import { FaPowerOff } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const data=[
    {name:"Home", link:<MdHome/>},  
    {name:"Dashboard", link:<BiSolidDashboard/>},  
    {name:"Calendário", link:<SlCalender/>},  
    {name:"Perfil", link:<IoMdPerson/>},  
    {name:"List", link:<FaTasks/>},  
    {name:"Table", link:<TbTableShare/>},  
    {name:"Message", link:<FaMessage/>},   
     ]
export const Navbar=()=>{
    return(
        <>
        <ul className="bg-gray-700 w-[50px] sm:w-[160px] h-[100vh] text-white flex flex-col justify-around align-center">
              <li  className="w-[100%] flex align-center justify-center">
                    <Link className=" w-[90%] h-[90%] flex align-center justify-center sm:justify-between gap-1 align-center" href="/">
                         <span className="text-[1.2rem]"><GiHamburgerMenu/></span>
                         <span className="hidden sm:block w-[70%] text-[.8rem]">
                           JM & Lins
                         </span>
                    </Link>
                </li>  
        <ul className="bg-gray-700 w-[50px] sm:w-[120px] h-[65vh] text-white flex flex-col justify-around align-center">
          {
            data.map((items, index)=>(
                <li key={index} className="w-[100%] flex align-center justify-center">
                    <Link className=" w-[90%] h-[90%] flex align-center justify-center sm:justify-between gap-1 align-center" href="/">
                         <span className="text-[1.2rem] ">{items.link}</span>
                         <span className="hidden sm:block w-[70%] text-[.8rem]">
                           {items.name}
                         </span>
                    </Link>
                </li>     
            ))
          }
          </ul>
             <li  className="w-[100%] flex align-center justify-center">
                    <Link className=" w-[90%] h-[90%] flex align-center justify-center sm:justify-between gap-1 align-center" href="/">
                         <span className="text-[1.2rem]"><FaPowerOff/></span>
                         <span className="hidden sm:block w-[70%] text-[.8rem]">
                           SignOut
                         </span>
                    </Link>
                </li>                                              
        </ul>
     </>
    )
}
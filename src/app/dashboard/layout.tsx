import { Navbar } from "@/components/Navbar"
import { Search } from "@/components/Search"

interface IDashbardProps{
   children: React.ReactNode
}
export default function Layout(props:IDashbardProps){

    return(
        <>
          <div className="w-screen h-screen flex overflow-x-hidden">
              <Navbar/>
              <div className="w-[100%] h-[100vh] flex flex-col align-center justify-between">
                <Search/>
                  <div className="flex align-center justify-center pl-2 w-[100%] h-[80vh] pb-5 overflow-x-hidden overflow-y-auto">
                    { props.children }
                 </div>
              </div>
          </div>
        </>
    )
}
import { Navbar } from "@/components/Navbar"

interface IDashbardProps{
   children: React.ReactNode
}
export default function Layout(props:IDashbardProps){

    return(
        <>
          <div className="w-screen h-screen flex">
              <Navbar/>
              <div className="h-[100vh] overflow-y-auto p-2">
                  { props.children }
              </div>
          </div>
        </>
    )
}
import { TopBox } from "@/components/topBox";
import { Card } from "../../components/Card";

export default function Dashboard(){
    return(
        <>
        <div className="grid xl:grid-cols-2 gap-5 ">
           <section className="grid gap-3 grid-cols-2">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
           </section>
           <section>
            <TopBox/>
           </section>
           <section></section>
           <section></section>
        </div>
        </>
    )
}
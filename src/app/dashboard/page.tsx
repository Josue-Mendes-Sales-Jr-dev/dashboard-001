import { Card } from "../../components/Card";

export default function Dashboard(){
    return(
        <>
        <div className="flex gap-3 p-4 flex-wrap align-center justify-center mb-10">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        </>
    )
}
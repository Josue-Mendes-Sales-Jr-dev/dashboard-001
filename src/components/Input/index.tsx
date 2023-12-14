
interface IInputProps{
 type?:string
 placeholder?:string
 value?: any
 onchange?:(e:any)=>void
 className?:string
} 

export const Input= (props:IInputProps)=>{
    return(
        <>
          <input className={`${props.className} outline-none bg-gray-100`} {...props} />
        </>
    )
}
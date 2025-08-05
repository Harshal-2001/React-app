import { useEffect } from "react";

const Counter=({counter, data})=>{
    useEffect(()=>{
        document.title=`${counter} ${data}render `;
    },[data])
   return(
    <div>
     <h1>Counter Value {counter} {data}</h1>
    </div>
   )
}
export default Counter;
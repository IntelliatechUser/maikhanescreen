//  const Sum=(a,b)=>{
//     return a+b;

// }
// export default Sum;

// export const Multiply=(a,b)=>{
// return a*b+10;

// }
import { useState } from "react";
const Sum=()=>{
    const [buttonclick,setButtonClick]=useState("hi");
    return <>
    <button onClick={()=>setButtonClick("bye")}>Click Me for Bye</button>
    </>
}

export default Sum;
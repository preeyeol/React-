import { useState } from "react"

const LiveNameDisplay=()=>{
    const [input,setInput]=useState("")
    const displayInput=(e) => {
        setInput(e.target.value)
    }
    return(
        <>
        <div > 
            <form action="form">
        <label htmlFor="name">Name</label>
   <input type="text" value={input} onChange={displayInput}/>
    {input ? <p>{input}</p>: <p>Please Enter Your Name</p> }
    </form>
        </div>
        </>    )
}


export default LiveNameDisplay
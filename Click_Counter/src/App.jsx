import {useState} from "react"

const App=()=>{
const [counter,setCounter]=useState(0)

return(
  <div className="counter"> 
  <h1 style={{textAlign:"center",paddingTop:"2rem", border:"1px solid black", color: "black",
}}>Counter App</h1>
<h1 style={{textAlign:"center",marginTop:"2rem"}}>The Counting is {counter}</h1>
<div className="button">
<button style={{margin:"2px",padding:"2px 5px",backgroundColor:"green",borderRadius:"10px"}} onClick={()=>{
setCounter(counter+1)
}}>INCREASE +</button>
<button style={{margin:"5px",padding:"10px",backgroundColor:"red",borderRadius:"10px"}} onClick={()=>{
setCounter(counter-1)
}}> DECREASE -</button>
<button style={{margin:"5px",padding:"10px",backgroundColor:"grey",borderRadius:"10px"}} onClick={()=>{
setCounter(0)
}}>RESET</button>
</div>
  </div>

)

  
}

export default App
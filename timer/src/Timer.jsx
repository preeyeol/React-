import {useState, useEffect} from "react"

const Timer=()=>{
    const [timer, setTimer] = useState(0); 
  const [active, setActive] = useState(false); 


  useEffect(() => {
    if (active) {
   const timer=setInterval(() => {
        setTimer((prevSeconds) => prevSeconds + 1); 
      }, 1000);
   
    return () => 
      clearInterval(timer);
    };
  }, [active,timer]); 

  const handleStart = () => {
    setActive(true);
  };

  const handleStop = () => {
    setActive(false);
  };
 
  const handleReset=
  ()=>{
    setActive(false)
    setTimer(0)
  }

  return (
    <div>
      <p>Timer: {timer} timer</p>
      <button style={{margin:"2px",padding:"2px 5px",backgroundColor:"green",borderRadius:"10px"}} onClick={handleStart}>Start</button>
      <button style={{margin:"2px",padding:"2px 5px",backgroundColor:"red",borderRadius:"10px"}} onClick={handleStop}>Stop</button>
      <button style={{margin:"2px",padding:"2px 5px",backgroundColor:"grey",borderRadius:"10px"}} onClick={handleReset}>Reset</button>
     
    </div>
  );

}

export default Timer

import Aboutme from "./AboutMe"

const About=({names})=>{
return(
<div>
<h2 style={{color:"blue"}}>About {names}</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta sunt debitis modi, fugit odit rerum assumenda porro optio quod dolor expedita eum dolorem a quidem explicabo enim, veritatis aliquam incidunt</p>
<Aboutme name={names} />
</div>

)
}

export default About
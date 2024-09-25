
const StudentList=({students})=>{
return (
 <div>
    <h1 style={{textAlign:"center",border:"2px solid white"}}>Student Lists:</h1>
    <ul style={{listStyle:"none",paddingLeft:"10rem"}}>
 {students.map((student, index)=><li key={index}><h4>{student}</h4></li>)}
    </ul>
 </div>
)
}

export default StudentList
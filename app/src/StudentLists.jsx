

const StudentList= ({students})=>{
    
    
return (
<div>
    <h5 style={{textAlign:"center"}}>List Of Students</h5>
<ul>
{students.map((name)=><li>{name}</li>)}
</ul>
</div>
)
}

export default StudentList
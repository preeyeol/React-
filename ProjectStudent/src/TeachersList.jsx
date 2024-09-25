
const Teacher= ({teachers})=>{

    return (

<div>
<h1>Teachers Name :</h1>
<ul>
    {teachers.map((teacher,index)=>(<li key={index}>{teacher.name}({teacher.subject})</li>  ))}
</ul>
</div>
)
}

export default Teacher
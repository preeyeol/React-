 const Attendee=({attendees})=>{
return(

    <div>
        <h1>Attendee's List :</h1>
   <ul>
   {attendees.map((attendee,index)=>(<li key={index}>{attendee}</li>  ))}

    </ul> 
    </div>
)
}

 export default Attendee
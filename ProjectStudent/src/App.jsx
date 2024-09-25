import Header from "./Header"
import StudentList from "./StudentLi"
import Teacher from "./TeachersList"
import Attendee from "./attendee"
import Footer from "./Footer"

const Students=["Luciano", "Lucien", "Lucus", "Luic", "Luis", "Luk", "Luka", "Lukas", "Lukasz", "Luke", "Lukmaan", "Luqman", "Lyall", "Lyle", "Lyndsay"]

const Teachers=[ {name:"Michat",subject:"Nepali"},{name: "Micheal",subject:"Biology"},{name: "Michee",subject:"Mathematics"},{ name: "Mikael",subject:"Computer"}, {name: "Mikee",subject:"History"}, {name: "Mikey",subject:"Sociology"}, ]

const Attendees=["Luciano", "Lucien", "Lucus", "Luic", "Luis", "Luk", "Luka", "Lukas", "Lukasz",]

const App=()=>{
return(
<div>
<div className="header">
<Header/>
</div>

<div className="container">
<div className="student">
    <StudentList students={Students}/>
</div>
<div className="teacher">
<Teacher teachers={Teachers}/>
<div className="attendee">
    < Attendee attendees={Attendees}/>
</div>
</div>
</div>

<div className="footer">
<Footer/>
</div>
</div>
)
}




export default App
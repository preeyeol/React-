const Profile=({profiles})=>{
return (
    <div className="profile">
    <header>
    <h4>{profiles.name}</h4>

</header>
<p>He is {profiles.age} years old</p>
<p>{profiles.bio}</p>
    </div>
)
}

export default Profile
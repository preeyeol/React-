import { useState } from "react"

const ThemeToggle= ()=>{
    const [theme,setTheme]= useState("light")

    const themeSet=()=>{
setTheme((prev)=>prev==="light"?"dark":"light")
    }
   const themeStyles = {
            backgroundColor: theme === 'light' ? '#fff' : '#000',
            color: theme === 'light' ? '#000' : '#fff',
            height: '100vh', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          };
return(
    <div style={themeStyles}>
    {
<button onClick={themeSet} > Change Theme </button>}
{(theme==="light")?  <p >It is light theme</p>  : (theme==="dark")? <p>It is dark theme</p>: <p>It is light theme</p>
}
    </div>
)
}

export default ThemeToggle
// import React, { useState } from 'react';

// const ThemeToggle = () => {
//   // useState hook to manage the theme (light or dark)
//   const [theme, setTheme] = useState('light');

//   // Toggle the theme between light and dark
//   const toggleTheme = () => {
//     setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   // Define styles based on the current theme
//   const themeStyles = {
//     backgroundColor: theme === 'light' ? '#fff' : '#000',
//     color: theme === 'light' ? '#000' : '#fff',
//     height: '100vh', // Make sure the background color covers the whole view
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   };

//   return (
//     <div style={themeStyles}>
//       <p>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</p>
//       <button onClick={toggleTheme}>
//         Toggle to {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
//       </button>
//     </div>
//   );
// };

// export default ThemeToggle;

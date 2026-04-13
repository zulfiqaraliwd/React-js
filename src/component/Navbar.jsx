import React from 'react'

function Navbar() {
const navbar = {
justifyConten : "space-around",
display : "flex",
color : "blue",
flexWrap : "wrap",
alignItem: "center",
border : "2px solid black",
gap : "50px"
}
    return (
    <div>
      <ul style={navbar}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul> 
    </div>
  )
}

export default Navbar

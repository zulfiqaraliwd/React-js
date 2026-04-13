import React from 'react'

function Navbar() {
const navbar = {
color:'red',
border : '2px solid black',

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

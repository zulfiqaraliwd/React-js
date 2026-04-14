import React from 'react'

function Navbar() {
const navbar = {
justifyContent : "space-around",
display : "flex",
color : "blue",
flexWrap : "wrap",
alignItem: "center",
border : "2px solid black",
gap : "50px"
}
 
const navImg = {
justifyContent : "space-between",
display : "flex",
color : "blue",
flexWrap : "wrap",
alignItem: "center",
gap : "100px"
}
return (
      <>
      <div style={navbar}>
      <div> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s" alt=""  width={50}/> </div>
    <div>
      <ul style={navImg}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul> 
    </div>
    </div>
    
    </>
  )
}

export default Navbar

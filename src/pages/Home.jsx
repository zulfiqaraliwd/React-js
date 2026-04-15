import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
  <Link to = {'/contact'}>Contact</Link>
  <Link to = {'/services'}>Services</Link>

      <h1>This is Home page.</h1>
    </div>
  )
}

export default Home

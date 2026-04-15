import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
          <Link to = {'/contact'}>Contact</Link>
          <Link to = {'/services'}>Services</Link>
      <h1>This is Contact page.</h1>
    </div>
  )
}

export default Contact

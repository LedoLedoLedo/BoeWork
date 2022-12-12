import React from 'react'

function NavBar() {
  return (
    <div>
    <nav>
      <div>
        <h1><a href="Home">Bringing Opportunities Everywhere</a></h1>
      </div>
      <ul>
        <li>
          <a href="Home"
            >Home</a>
        </li>
        <li><a href="subscribe">Subscribe</a></li>
        <li><a href="resources">Resources</a></li>
        <li><a href="contact">Contact us</a></li>
        <li><a href="signup">Sign up</a></li>
      </ul>
    </nav>
    </div>
  )
}

export default NavBar
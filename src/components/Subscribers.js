import React from 'react'
// import Subscribers from '../routes/Subscribers'

function Subscribers() {
  return (
    <div>

  
    <form action="/usersignup" method="post">
    <div className="container">
      <h3 className="createaccountheader">Subscribe to our BOE newsletter for weekly updates and skilled trade opportunities!</h3>
      <hr/>
        <label for="fname" className="form-label">*First Name:</label>
        <input type="text" className="fnameinput form-control" placeholder="Enter First Name" name="fname" required/>
        <br/>
        <label for="lname" className="form-label">*Last Name:</label>
        <input type="text" className="lnameinput form-control" placeholder="Enter Last Name" name="lname" required/>
        <br/>
        <label for="email" className="form-label">*Email:</label>
        <input type="text" className="emailinput form-control" placeholder="Enter Email" name="email" required/>
        <br/>
        <label for="city" className="form-label">*City:</label>
        <input type="text" className="cityinput form-control" placeholder="Enter City" name="city" required/>
        <br/>
        <label for="zipcode" className="form-label">*Zip Code:</label>
        <input type="text" className="zipcodeinput form-control" placeholder="Enter Zip Code" name="zipcode" required/>
        <br/>
        <label for="trades" className="form-label">*List up to  3 trades that interest you:</label>
        <br/>
        <br/>
        <input type="text" className="tradeinput form-control" placeholder="Enter Trade 1" name="trade1" required/>
        <br/>
        <input type="text" className="tradeinput form-control" placeholder="Enter Trade 2 (optional)" name="trade2"/>
        <br/>
        <input type="text" className="tradeinput form-control" placeholder="Enter Trade 3 (optional)" name="trade3"/>

        <br/>

        <div className="clearfix">
        <button type="button" className="cancelbtn">Cancel</button>
        <button type="submit" className="signupbtn">Sign Up</button>
      </div>
    </div>
  </form>
  </div>
  )
}

export default Subscribers
import React from 'react'
import '../styles/navbar.css'

import {  Link , useHistory
} from "react-router-dom";
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
// import Login from './Login';


const Navbar = () => {
   
  var username = "Login / Singup";
  let history = useHistory();


  const handlelogout = ()=>{
    localStorage.removeItem('loggedin');
    history.push('/loginsignup');
    window.location.reload();
  }



  return (
   <>

   <nav className='nav'>

    <div className='navbar'>
      <div className="logo">
        <img src="/logo2.jpg" alt=""/>
      </div>
      <div class="navtabs">
        <ul>
          <li><a><a href='/'>Home</a></a></li>
          <li><a>About</a></li>
          <li><a><Link to="/">contact us</Link></a></li>
          <li><a>News</a></li>

          {!localStorage.getItem('loggedin')?<button className="btn btn-outline-secondary"><a href='/loginsignup'>Login / Signup</a></button>:<div><button type="button" className="btn btn-outline-info mx-2" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover" >{localStorage.getItem('name')}</button>
                    <button onClick={handlelogout}  className="btn btn-outline-danger">Logout</button></div>}
        </ul>
      </div>
    </div>

   </nav>

   </>
  )
}

export default Navbar
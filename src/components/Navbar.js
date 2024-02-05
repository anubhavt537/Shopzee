import React, { useState } from 'react'
// import './Navbar.css';
import './Navbar.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
    const [menu,setMenu] =useState('');
  return (
   
    <div className='Navbar'>
        <div className="nav-logo">

        <a href=""><i className="fa fa-shopping-bag" aria-hidden="true"></i>
       
        </a>
        <p>ShopZEE</p>
        </div>
    
        <a href="" onClick={()=>{setMenu('shop')}} ><Link to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</a>
        {/* <a href=""   onClick={()=>{setMenu('about')}}>About {menu==='about'?<hr/>:<></>}</a> */}
        <a href=""   onClick={()=>{setMenu('mens')}}><Link to='/mens'>Mens</Link> {menu==='mens'?<hr/>:<></>}</a>
        <a href=""   onClick={()=>{setMenu('womens')}}><Link to='/womens'>Women</Link>{menu==='womens'?<hr/>:<></>}</a>
        <a href=""   onClick={()=>{setMenu('kids')}}><Link to='/kids'>kids</Link>{menu==='kids'?<hr/>:<></>}</a>
      
        <div className="nav-login-cart">
           <Link to='/login'>
           <button >Login</button>
           </Link> 
            <Link to='/cart'>
            <a href=""> <i className="fa fa-shopping-cart"/></a>
            </Link>
       
        {/* <a href=""><i className="fa fa-user-circle" aria-hidden="true"></i></a> */}
        </div>
       
    </div>
  )
}

import React, { useContext, useRef } from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import {NavLink,Link} from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContextProvider';
import whatsapp_icon from '../Assets/menu.png'
const Navbar = () => {
  const {getTotalItems} = useContext(ShopContext)
  const menuRef = useRef();
  const dropdown =(e)=>{
  menuRef.current.classList.toggle('nav-menu-visible');
  e.target.classList.toggle('open');
  }
  return (
    <div className='navbar'>
      <div className='nav-logo'> 
<img src={logo}></img>
<p id='shopper'>SHOPPER</p>
      </div>
<img className='nav-dropdown' onClick={dropdown} src={ whatsapp_icon}  alt='ll'/>
      <div ref= {menuRef}className='menu-bar'>
<NavLink to="/">Shop</NavLink>
<NavLink to="/Men">Men</NavLink>
<NavLink to="/Women">Women</NavLink>
<NavLink to="/Kids">Kids</NavLink>
      </div>
     <div className='cart-logo'>
     {localStorage.getItem('auth-token') ? <button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button> : 
     <Link to='login'><button>Login</button></Link> }
  <Link to='cart'className='cart'> <img  src= {cart_icon} alt='img'></img></Link>   
      <div className='nav-cart-count'>{getTotalItems()}</div>
     </div>

    </div>
  );
};

export default Navbar;

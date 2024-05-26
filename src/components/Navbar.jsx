import React from 'react';
import '../styles/navbar.css';

const Navbar = ({size, setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                My Shopping
            </span>
            <div><input type="search" /><button>Search</button></div>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>Cart  </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
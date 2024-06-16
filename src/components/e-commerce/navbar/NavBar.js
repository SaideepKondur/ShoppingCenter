import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md"; 
import './NavBar.css'
import { useSelector } from 'react-redux';

function NavBar() {
  const cart = useSelector(state => state.cartReducer.cart);

  let count = 0;
  cart.forEach((item) => count += item.quantity);

  return (
    <nav>
        <h2 className="banner">Shopping Center</h2>
        <div className="right-layout">
            <div className="cart-layout">
                <MdOutlineShoppingCart />
                <h3>{count}</h3>
            </div>
        </div>
    </nav>
  )
}

export default NavBar 
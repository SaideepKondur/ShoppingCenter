import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'

function CartPage() {
  const cart = useSelector(state => state.cartReducer.cart);
  console.log({cart})


  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart}



    </div>
  )
}

export default CartPage
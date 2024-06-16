import React from 'react'
import './SingleProduct.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../../redux/slices/cartSlice';

function SingleProduct({product}) { 

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cartReducer.cart);
    const curItem = cart.find(item => item.id == product.id);
    const curQuantity = curItem ? curItem.quantity : 0;

    const words = product.title.split(' ');
    const firstFiveWords = words.slice(0, 5);
    const joined = firstFiveWords.join(' ');

  return (
    <div className='SingleProduct'>
        <img className='productImg' src={product.image} alt={product.title} />
        <div className="productInfo">
          <h4 className='productTitle'>{joined}</h4>
          <p className='productPrice'>$ {product.price}</p>
        </div>
        <div className='cartInfo'>
          <button className='button' onClick={() => dispatch(removeFromCart(product.id))}>-</button>
          <h4>{curQuantity}</h4>
           <button className='button' onClick={() => dispatch(addToCart(product.id))}>+</button>
        </div>
    </div>
  );
}

export default SingleProduct
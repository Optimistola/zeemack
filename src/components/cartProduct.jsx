import React, { useContext } from 'react';
import CartContext from './context/cartContext';

const CartProduct = ({ product }) => {
  const { removeItem, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const increase = () => {
    increaseQuantity(product.id, 1);
  };

  const decrease = () => {
    if (product.quantity >0) {
      decreaseQuantity(product.id, -1);
    }
  };

  const getTotal = () => {
    return product.quantity * product.price;
  };

  return (
    <div className='cat-gal'>
      <div className='cat-gal-text'>
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
      <hr />
      <img src={product.url} alt='product' className='cart-img' />
      <div className='cat-flex-btn'>
        <button onClick={increase}>+</button>
        <button>{product.quantity}</button>
        <button onClick={decrease}>-</button>
      </div>
      <div className='total-flex'>
        <p>Total</p>
        <p>${getTotal()}</p>
      </div>
      <button className='delete' onClick={() => removeItem(product.id)}>
        Delete
      </button>
    </div>
  );
};

export default CartProduct;

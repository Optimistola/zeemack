import React, { useContext } from "react";
import CartProduct from "../cartProduct";
import CartContext from "../context/cartContext";
import { Label } from "../utils/label";
import { Invoice } from "../utils/invoice";
import shopping from '../images/shopping.avif'
import empty from '../images/empty.avif'
const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <section className="">
      <Label title={"Shopping Cart"} src={shopping}/>
      {cartItems.length > 0 ? (
      <div className='cart-invoice'>
      <div className="flex-section">
          <div className="product">
            {cartItems
              .map((product) => (
                <CartProduct key={product.id} product={product} />
              ))}
          </div>
        </div>
      <div class='invoice'>
      <div><h3>Invoice</h3></div><hr/>
       {cartItems.map((product) => (      
      <Invoice name={product.name} price={product.price} quantity={product.quantity} totalAmount={product.quantity * product.price}/>
      ))}
      <p>Total Amount: ${getTotalAmount()}</p>
      <button className="checkout">Checkout</button>
      </div>
      </div>): (
          <div className='empty'>
            <h2>Sorry bro, your Cart is empty</h2>
            <img src={empty}/>
          </div>
        )}
    </section>
  );
};

export default Cart;

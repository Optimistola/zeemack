import React from 'react';
import { useReducer } from "react";
import CartContext from './cartContext';
import CartReducer from './cartReducer';

const CartState = (props) => {
  const initialState = {
    cartItems: [],
    showModal:false,
    modalContent: {
      title: "",
      text: "",
    },
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item, id) => {
    dispatch({ type: "addToCart", payload: item, id });
  };
const ClearCart=(item)=>{
  dispatch({type:"ClearCat"});
}
  const removeItem = (item, id) => {
    dispatch({ type: "removeCart", payload: item, id });
  };
  const ShowModal=()=>{
    setTimeout(() => dispatch({type:"CLOSE_MODAL"}), 3000)
  }
  const increaseQuantity = (id, quantity) => {
    dispatch({ type: 'increaseQuantity', payload: { id, quantity } });
  };
  const decreaseQuantity = (id, quantity) => {
    dispatch({ type: 'decreaseQuantity', payload: { id, quantity } });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeItem,
        showModal:state.showModal,
        modalContent:state.modalContent,
        ShowModal,
        increaseQuantity,
        decreaseQuantity,
        ClearCart

      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
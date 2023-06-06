import { useState, useEffect } from "react";
const CartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart": {
      const itemExists = state.cartItems.some(item => item.id === action.payload.id);
      if (itemExists) {
        return{
          ...state,
        showModal: true,
        modalContent: {
          title: "Add Item to cart",
          text: `${action.payload.name} Already in cart`
        }
      }
      } else {
        window.navigator.vibrate(1000)
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
          
          showModal: true,
        modalContent: {
          title: "Add Item to cart",
          text: `${action.payload.name} added successfully`,
        }
      }
    }
  }
    case "removeCart": {
      window.navigator.vibrate(1000)
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        showModal: true,
        modalContent: {
          title: "Remove Item from cart",
          text: `${action.payload.name} Remove from cart successfully`,
        }
      };
    }
    case "CLOSE_MODAL":{
      return {
        ...state,
        showModal: false,
        modalContent: {
          title: "",
          text: "",
        }
      };
    }
      case "OPEN_MODAL":{
        window.navigator.vibrate(1000)
        return {
          ...state,
          showModal: true,
          modalContent: action.payload,

  
        }
      }
      case "increaseQuantity": {
        const { id, quantity } = action.payload;
        return {
          ...state,
          cartItems: state.cartItems.map(item => {
            if (item.id === id) {
              return {
                ...item,
                quantity: item.quantity + 1
              };
            }
            return item;
          })
        };
      }
      case "decreaseQuantity": {
        const { id, quantity } = action.payload;
        return {
          ...state,
          cartItems: state.cartItems.map(item => {
            if (item.id === id) {
              return {
                ...item,
                quantity: item.quantity - 1
              };
            }
            return item;
          })
        };
      }

    default:
      return state;
  }
};

export default CartReducer;

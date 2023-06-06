import React, {useContext} from 'react'
import  CartContext  from './context/cartContext'
import {AiOutlineShoppingCart} from 'react-icons/ai'
const ProductCard = ( {product }) => {
    // cart context destructure
    const { addToCart } = useContext(CartContext)

    return (
        <div  id={product.id} className='gallery-img'>
        <div className='overlay'></div>
        <img id={product.key} src={product.url} />
        <div className='img-text'>
          <p className='name'>{product.name}</p>
          <p className='desc'>{product.description}</p>
          <p className='price'><i className="fa fa-solid fa-hand-holding-dollar"></i>{product.price}</p>
          <p className='flex-icon'><span><AiOutlineShoppingCart size={25} onClick={ () => addToCart(product, product.id) }/></span><i className="fa fa-sharp fa-regular fa-heart"></i></p>
         </div>
      </div>
     
    )
    }
    export default ProductCard
import { useState } from "react"
import ProductCard from "../../productCard"
import products from '../../data'
import shopping from '../../images/shopping.avif'
import { Label } from "../../utils/label"
const All=()=>{
        return (
            <div>
            <Label title={"All Products"} src={shopping}/>
        <section className="flex-section">
          <div className='products'>
              {products.map((product) => (
                   <ProductCard key={product.id} product={product }  /> 
              ))}
          </div>
          </section>
          </div>
        )
      }
      
export default All
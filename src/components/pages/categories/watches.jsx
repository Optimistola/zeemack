import { useState } from "react"
import ProductCard from "../../productCard"
import products from '../../data'
import shopping from '../../images/shopping.avif'
import { Label } from "../../utils/label"
const Watches=()=>{
        return (
            <div>
            <Label title={"Watches"} src={shopping}/>
        <section className="flex-section">
          <div className='products'>
              {products.filter((items)=>items.category==='watches').map((product) => (
                   <ProductCard key={product.id} product={product }  /> 
              ))}
          </div>
          </section>
          </div>
        )
      }
      
export default Watches
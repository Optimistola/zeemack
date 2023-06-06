export const Invoice=({name, price, quantity, totalAmount})=>{
    return(
        <div className=''>
            <div>
                <p>Item:{name}</p>
                <p>Price:{price}</p>
                <p>Quantity:{quantity}</p>
            </div>
         <p>TotalPrice:{totalAmount}</p>
        <hr/>
        </div>
    )
}
import React from 'react'
import "./ProductList.css";

const ProductList = ({product, addToCart}) => {
  return (
    <div className='flex1'>
      {
        product.map((productItem,productIndex)=>{
            return(
                <div style={{width:"25%"}}  className='mainp'>
                    <div className='product-item'>
                        <img src={productItem.url} width="100%" height="280px" />
                        <p>{productItem.name} | {productItem.category}</p>
                        <p>{productItem.seller}</p>
                        <p>Rs. {productItem.price}/-</p>
                        <button onClick={()=> addToCart(productItem)}>Add To Cart</button>
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default ProductList

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FetchProducts from './FetchProducts';

export default function ProductDetails() {
    let urlParameter=useParams()
    console.log(urlParameter); //urlParameter = {productId:'4'}

    let [product, setProduct]=useState(null)
    async function FetchProductsById(productId)
    {
        let response=await fetch(`https:/dummyjson.com/products/${product.id}`)
        let productObject=await response.json()
        setProduct(productObject)
    }
    useEffect(()=>{ FetchProductsById(urlParameter.productId)}, [])
  return (
    <div>
        {product && <h1>{product.title}</h1>}
       
    </div>
  )
}

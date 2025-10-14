import React from 'react'
import { Link } from 'react-router-dom';

export default function DisplayProducts(props) {
  console.log(props.productsArray);
  let products = props.productsArray

 return (
   <div className="container mt-3">
     <div className="row gy-3">
     {
       products && products.map(product => {
         return (
           <div className="col-3">
               <div class="card" style={{width:16+'rem'}}>
               <img src={product.thumbnail} class="card-img-top" alt="..."/>
               <div class="card-body">
                 <h5 class="card-title">{product.title.substring(0,15)}</h5>
                 <p class="card-text">{product.description.substring(0,75)}...</p>
                 <div className='d-flex justify-content-between'>
                   <p class="card-text">&#8377;{product.price}</p>
                   <p class="card-text fw-bold">{product.category}</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <a href="#" class="btn btn-primary">Add to Cart</a>
                  <Link to={`/products/${product.id}`} class="btn btn-success">View More</Link>
                </div>
            </div>
     </div>
    </div>

    ) 

    })
    }
    </div>
    </div>
)
}
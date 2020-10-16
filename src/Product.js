import React from 'react'
import './Product.css'

function Product({id,title, rating, image, price}) {
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__infoTitle">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) =>(
                         <p> ⭐ </p>
                    ))}
                </div>
            </div>
            <img src={image} />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product

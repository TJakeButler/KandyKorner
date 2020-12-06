import React from "react"


export const Product = ({ product, productType }) => (
    
    <section className="product">
        <h3 className="product__name">Product Name: {product.name}</h3>
        <address className="product__address">Product ID:{productType.name}</address>
        <div className="product__price">Price:{product.price}</div>
    </section>
)
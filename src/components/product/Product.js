import React from "react"


export const Product = ({ product }) => (
    
    <section className="product">
        <h3 className="product__name">Product Name: {product.name}</h3>
        <address className="product__address">Product ID:{product.productTypeId}</address>
        <div className="product__price">Price:{product.price}</div>
    </section>
)
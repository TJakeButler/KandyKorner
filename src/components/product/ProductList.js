import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { Product } from "./Product"
import { ProductTypeContext } from "../productType/ProductTypeProvider"



export const ProductList = () => {
    // This state changes when `getProducts()` is invoked below
    const { products, getProducts } = useContext(ProductContext)
    const { productTypes , getProductTypes } = useContext(ProductTypeContext)
    console.log("This is Products!!!", products)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("ProductList: Initial render before data")
        getProductTypes()
        .then(getProducts)
        .then(console.log("Product Type", productTypes))
        
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    

    return (
        <div className="products">
        {
            // products.map(p => <Product key={p.id} product={p} />)
            products.map(product => {
                console.log("I'm a single product!!!! ****", products)
                const item = productTypes.find(type => type.id === product.productTypeId)
                console.log("I am product Types!!!", productTypes)
                console.log("I am item****", item)
                return <Product key={product.id}
                                product = {product}
                                productType = {item} />
                                
            })
        }

        </div>
    )
    
}



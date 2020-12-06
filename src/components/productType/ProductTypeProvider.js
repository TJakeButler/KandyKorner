import React, {useState, useEffect } from "react"

/*
    We import React to this provider because we will be using useState and useEffect Hooks
*/

export const ProductTypeContext = React.createContext()

//  This component establishes what data can be used.

export const ProductTypeProvider = (props) => {
    const [productTypes, setProductTypes] = useState([])

    const getProductTypes = () => {
        return fetch("http://localhost:8088/productTypes")
            .then(res => res.json())
            .then(setProductTypes)
    }

    const addProductTypes = productTypes => {
        return fetch("http://localhost:8088/productTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productTypes)
        })
            .then(getProductTypes)
    }

    return (
        <ProductTypeContext.Provider value={{
            productTypes, addProductTypes, getProductTypes
        }}>
            {props.children}
        </ProductTypeContext.Provider>
    )
}

import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { ProductList } from "./product/ProductList"
import { ProductProvider } from "./product/ProductProvider"
import { ProductTypeProvider } from "./productType/ProductTypeProvider"


export const ApplicationViews = (props) => {

    return (
        <>
            <LocationProvider>
                <Route exact path="/">

                </Route>
            </LocationProvider>

            <LocationProvider>
                <Route path="/locations">
                    <LocationList></LocationList>
                </Route>
            </LocationProvider>

            <ProductTypeProvider>
                <ProductProvider>
                    <Route path="/products">
                        <ProductList></ProductList>
                    </Route>
                </ProductProvider>
            </ProductTypeProvider>
        </>
    )

}
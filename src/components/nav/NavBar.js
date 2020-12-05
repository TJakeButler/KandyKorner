import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"


export const NavBar = (props) => {
    return (
        <ul className="navBar">
            <li className="navBar__item">
                <Link className="navBar__link"to="/">Kandy Korner MAIN Page!!</Link>
            </li>
            <li className="navBar__item">
                <Link className="navBar__link" to="/locations">Kandy Korner LOCATIONS!!</Link>
            </li>
            <li className="navBar__item">
                <Link className="navBar__item" to="/products">Kandy Korner PRODUCTS!!</Link>
            </li>
        </ul>
    )
}
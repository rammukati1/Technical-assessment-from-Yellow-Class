import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from '../Context'
function Header() {
const {cartItems} = useContext(Context)
let cart =''
function cartIcon (){
    if(cartItems.length>0)
     return  <Link to="/cart"><i className="ri-shopping-cart-fill ri-fw ri-2x"></i></Link>
    return  <Link to="/cart"><i className="ri-shopping-cart-line ri-fw ri-2x"></i></Link>
}
    return (
        <header className = "Header">
            <Link to="/"><h2>Pic Some</h2></Link>
           
        </header>
    )
}

export default Header

import React, {useState, useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const {cartItems,allPhotos,emptyCart, addRandom , onePhoto , addToCart} = useContext(Context)
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    
    let cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    
   

    function left_click(){
        emptyCart();
    addRandom();
    }
    function right_click(){
        emptyCart();
    addRandom();
    }
    
    return (
        <main className="cart-page">
            
            {cartItemElements}
            <p className="total-cost"></p>
            {
                cartItems.length > 0 ?
                <div className="order-button">
                   
                </div> :
                <p>You have no items in your favorite cart.
                      
                </p>
            }
       <button onClick={left_click}>left image</button>
       <button onClick={right_click}>right image</button>

        </main>
    )
}

export default Cart
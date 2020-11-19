import React, {useState, useContext,useEffect} from "react"
import PropTypes from 'prop-types';
import {Context} from '../Context'
import {useHistory} from 'react-router-dom'

function Image({className , img}){
    const {toggleFavorite ,addToCart , cartItems, removeFromCart} = useContext(Context)
    const history = useHistory();
    const handleClick = () => {
        history.push("/cart");
        addToCart(img);
        // console.log(img);
    }
    const [hovered,setHovered] = useState(false)
    let  icon = ""
    if(hovered === true){
        icon = <i className="ri-heart-line favorite" onClick= {()=>toggleFavorite(img.id) }></i>
      
    }
   
    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
   
    function cartIcon() {
        let ispresent =cartItems.some(item => item.id === img.id)
        if(ispresent) {
            return <i className="ri-shopping-cart-fill cart" onClick={handleClick}></i>
        } else if(hovered) {
           return  <i className="ri-add-circle-line cart" onClick={handleClick}></i>
        }
    }
   
   
    return(
        <div className={`${className} image-container`}  
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
             <img src={img.urls.raw} className="image-grid" onClick = {handleClick}/>
                {heartIcon()}
                {cartIcon()}
        </div>
    )
}


export default Image


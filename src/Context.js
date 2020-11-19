import React ,{useState, useEffect}from "react"

const Context = React.createContext()

function ContextProvider({children}) {

    const [allPhotos, setAllPhotos] = useState([])
    const [i ,setI]= useState(1); 
    const [cartItems , setCartItems] = useState([])
    const [onePhoto , setOnePhoto] = useState([])
    const url = "https://api.unsplash.com/photos/?client_id=HnVXwirUH18mOMIjxLfjh-2Xo8oIxCWbdu7-CYhM7fo"
    
    function toggleFavorite (id){
         const updatedArr = allPhotos.map(photo => {
             if(photo.id === id) {
            return {...photo, isFavorite: !photo.isFavorite}
             }
        return photo
        })
        setAllPhotos(updatedArr)
    }

    function addToCart(newItme){
        setCartItems(prev => [...prev , newItme])
    }
    function removeFromCart(itme){
        setCartItems(prev=>
            prev.filter(photos=> photos.id !== itme)
        )
    }
    function emptyCart() {
        setCartItems([])
    }
     
    
    useEffect(()=>{
         fetch(url)
        .then(res => res.json())
        .then(data => setAllPhotos(data))
        .catch(err => {
            console.log('Error happened during fetching!', err);
        });
    },[])

    function addRandom(){
      addToCart(allPhotos[i])
      setI((i+1)%10);
    }
    
    return (
        <Context.Provider value={{allPhotos,toggleFavorite, addToCart , cartItems, removeFromCart,emptyCart, addRandom, onePhoto}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
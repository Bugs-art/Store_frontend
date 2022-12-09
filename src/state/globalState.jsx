import DataContext from "./dataContext";
import { useState } from "react";

const GlobalState = (props) => {
  let [cart, setCart] = useState([]);
  let [user, setUser] = useState({ id:40, name: "Frank"})

 const addProductToCart = (product) => {
    console.log('adding to cart');
    // add product to cart array
    // create a copy, mod the copy, set the copy as the new cart
 };

 const removeProductFromCart = () => {      
    console.log('Removing from cart');
 };
    
    return ( 
    <DataContext.Provider 
    value={{
        cart: cart,
        user: user,
        addProductToCart: addProductToCart,
        removeProsuctFromCart: removeProductFromCart,
    }}
>
        {props.children}
    </DataContext.Provider>

  );
};



export default GlobalState;
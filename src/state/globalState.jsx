import DataContext from "./dataContext";
import { useState } from "react";
import Product from '../components/product';

const GlobalState = (props) => {
  let [cart, setCart] = useState([]);
  let [user, setUser] = useState({ id:40, name: "Frank"})

   const addProductToCart = (product) => {
      console.log('adding to cart');
      // add product to cart array
      let copy = [...cart];
      let found = false;

      for(let i=0; i<cart.length; i++) {
         let existing = copy[i];
         if(existing._id === product._id){
            existing.quantity += product.quantity;
            found = true;
         }
      }

      if(!found) {
         copy.push(product);
      }

      setCart(copy);
   

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

import "./cart.css";
import { useContext} from "react";
import DataContext from "../state/dataContext";


const Cart = () => {
    const cart = useContext(DataContext).cart;

    const countProducts = () => {
        let total = 0;
        for (let i =0; i<cart.length; i++) {
          const prod = cart[i];
          total += prod.quantity;
        }
          
    
        return total; 
      }; 
    
      

    return (
        <div className="cart">
            <h1>Your cart</h1>
            <h4>You have {countProducts()} products in the cart</h4>

            <div className="product">
                <h2>Products List</h2>
                <div className="inner-product">
                    {cart.map((p) => (
                        <cartProduct key={p._id} data={p} />
                    ))}
                    
                </div>
                
                
                

            </div>
        </div>
    );
};

export default Cart;

/**
 * 
 * create CartProduct component that recieves
 * props
 * 
 * on cart:
 * import the new component
 * map into the new component and send the data
 * 
 * 
 * on CartProduct:
 * display the data like: props.data.title
 * 
 * 
 * 
 */
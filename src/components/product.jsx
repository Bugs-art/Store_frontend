import './product.css';
import QuantityPicker from './quantityPicker';
import { useContext} from 'react';


function Product(props) {
  const addProd = useContext(DataContext).addProductToCart;


    const handleAdd = () => {
        // call the context function
        addProd(props.data);
    };

  

    

    return (
        <div className="product">

            <img src={'/images/' + props.data.image} alt="" />
            <h5>Pprops.data.title</h5>

            <div className="prices">
                <label>${props.data.price}</label>
                <label>${props.data.price}</label>
            </div>

            
            <QuantityPicker />

            <button onClick={handleAdd} className="btn btn-sm btn-info" >
                Add
            </button>
             
            
        </div>
        
            
    );
};

export default Product;



/**
 * create a Quantity component
 * with button / label / button
 * 
 * Render QuantityPicker on Product component
 */
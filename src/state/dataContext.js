import { createContext} from "react";


// the context will describe the data structure
// should noit have values or implementation
// its just a promise
const DataContext = createContext({
    cart: [],
    user: {},
    addProductToCart: () => {},
    removeProductFromCart: () => {},

});

export default DataContext;
import './admin.css';
import { useState } from 'react';
import DataService from '../services/dataService';
 

const Admin = () => {
   const [product, setProduct] = useState({});
   const [allProducts, setAllProducts] = useState([]);

   const [couponCode, setCouponCode] = useState({});
   const [allCoupons, setAllCoupons] = useState({});

   const saveProduct = () => {
      console.log(product);

      let copy = [...allProducts];
      copy.push(product);
      setAllProducts(copy);

   };

   const saveCoupon = () => {
      console.log(couponCode);

      // add the coupon to the allCoupons array
      let copy = [...allCoupons];
      copy.push(couponCode);
      setAllCoupons(copy)

   };

   const productValChange = (e) => {
      // e = event info
      let name = e.target.name;
      let value = e.target.value;

      //copy, modify the copy, set the copy back
      let copy = { ...product };
      copy[name] = value;
      setProduct(copy);
   };

   /**
    * create the fn,
    * create an instance of DataService
      * call the getCatalog method to retrieve the list of products
      * set the list of products to the allProducts state variable
      */
      const loadProductsFromServer = async () => {
         let service = new DataService();
         let prods = await service.getCatalog();
         setAllProducts(prods);
      };

      const loadCouponsFromServer = async () => {
         let service = new DataService{};
         let coupons = await 
         
   // when the component os loade/displayed
   useEffect(() =>{
       loadProductsFromServer();
       loadCouponsFromServer();
   }, []);

   return (
      <div className="admin">
         <h3>Store Administration</h3>
      </div>
   )
}
 
    














    














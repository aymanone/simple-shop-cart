import CartItem from "./CartItem.jsx";
import { Link } from "react-router-dom";
function Cart(props){
   const cartItems= props.items.map((itemId)=>{
     return   <CartItem id={itemId} key={itemId}></CartItem>;
    });
    return (
        <>
        <h1>the cart </h1> 
        <Link to="/">showroom</Link>
       { cartItems }
        </>
    );
    
}
export default Cart;
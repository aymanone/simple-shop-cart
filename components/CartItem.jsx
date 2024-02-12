import {useContext} from 'react';
import itemsContext from "./contexts/itemsContext.js";

function CartItem(props){
    let [itemsData,setItemsContext]=useContext(itemsContext);
    const itemData=itemsData[props.id];
    const removeItem=()=>{
        // removve item from  sold and return it to the store
        itemsData[props.id].amount+=1;
        itemsData[props.id].sold-=1;
        enableAdd=itemData.amount>0;
     enableRemove=itemData.sold>0;
        
        updateApp();
    }
        
    const addItem=()=>{
        // add item to sold and remove it from initial amount
        itemsData[props.id].amount-=1;
        itemsData[props.id].sold+=1;
        enablelAdd=itemData.amount>0;
     enableRemove=itemData.sold>0;
        

       updateApp();
    }
    const updateApp=()=>{
        setItemsContext((items)=>({
            ...itemsData, ...itemData
        }));
    }
    let enableAdd=itemData.amount>0;
    let enableRemove=itemData.sold>0;
    
    
    return (
        <>
        <h1> item number : {props.id}</h1>
        <h1>available items items : {itemData.amount}</h1>
        <h1> total price: {itemData.sold * itemData.price}</h1>
        <button disabled={! enableAdd} onClick={addItem}>add item</button>
        <button disabled={ ! enableRemove} onClick={removeItem}> remove item</button>
        </>
    )

}
export default CartItem;
import {useContext,useEffect} from 'react';
import itemsContext from "./contexts/itemsContext.js";

function ShowItem(props){
    let [itemsData,setItemsContext]=useContext(itemsContext);
    const itemData=itemsData[props.id];
    
    const removeItem=(context)=>{
        // remove item from  sold and return it to the store
        itemsData[props.id].amount+=1;
        itemsData[props.id].sold-=1;
        enabelAdd=itemData.amount>0;
     enableRemove=itemData.sold>0;
       updateApp();
    }
        
    const addItem=()=>{
        // add item to sold and remove it from initial amount
        
        itemsData[props.id].amount-=1;
        itemsData[props.id].sold+=1;
        enabelAdd=itemData.amount>0;
     enableRemove=itemData.sold>0;
        
        updateApp();
    
    }
    const updateApp=()=>{
        setItemsContext((items)=>({
            ...itemsData, ...itemData
        }));
    
    }
    let enabelAdd=itemData.amount>0;
    let enableRemove=itemData.sold>0;
    

        
    
    
    
    return (
        
        <>
        <h1>item number:{props.id}</h1>
        <h1>available items items : {itemsData[props.id].amount}</h1>
        <button disabled={!enabelAdd}  onClick={addItem}>add item</button>
        <button disabled={!enableRemove}  onClick={removeItem}> remove item</button>
        </>
    )

}
export default ShowItem;
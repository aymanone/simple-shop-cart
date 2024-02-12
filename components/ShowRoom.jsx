import ShowItem from "./ShowItem.jsx";
import { Link } from "react-router-dom";
function ShowRoom(props){
   const showItems= props.items.map((itemId)=>{
     return   <ShowItem id={itemId} key={itemId}></ShowItem>;
    });
    return (
        <>
        <Link to="/cart"> cart</Link>
       { showItems }
        </>
    );
    
}
export default ShowRoom;
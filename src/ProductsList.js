import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductsList=(props)=>{
    const {handleAdd}=props
    const list=useSelector((state)=>{
        return state.productsList
    })
    return(
        <div>
            <ul>
                {list.map(ele=>{
                    return (
                    <li key={ele.id}>
                         {ele.product}-{ele.units} 
                        <button onClick={()=>{handleAdd(ele)}}>Add</button>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default ProductsList
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateSetAccounts } from "./actions/actionCreator";
const Help=(props)=>{
    const dispatch=useDispatch()
    const accountsData=useSelector((state)=>{
        return state.data.accountsData
    })
    useEffect(()=>{
        dispatch(stateSetAccounts())
    },[dispatch])
    return(
        <div>
           {Object.keys(accountsData).length>0 && (
            <>
            <h2>How Can we Help u?</h2>
            <form action="https://formsubmit.co/sunkaranaveensunkara@gmail.com" method="POST" >
                <input type="email" name="email" defaultValue={accountsData.email}  required={true}/> <br />
                <textarea  name="Query" cols="30" rows="10" placeholder="Enter ur Query..." required={true}></textarea> <br />
                <input type="submit"/>
            </form>
            </>
           )}
        
        </div>
    )
}

export default Help
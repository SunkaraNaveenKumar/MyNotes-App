const initialstate={
    registerError:"",
    loginError:"",
    accountsData:{},
    toggle:false
}
const userAuthReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case "REGISTERERROR":{
            return  {...state,registerError:action.payload}
        }
        case "LOGINERROR":{
            return {...state,loginError:action.payload}
        }
        case "TOGGLE":{
            return {...state,toggle:action.payload}
        }
        case "ACCOUNTSDATA":{
            return {...state,accountsData:action.payload}
        }
        default:{
            return state
        }
    }
}

export default userAuthReducer
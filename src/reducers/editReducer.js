const inititialEditValue={}

const editReducer=(state=inititialEditValue,action)=>{
    switch (action.type) {
        case "EDITITEM":{
            return action.payload
        }
        case "ADDNOTESITEM":{
            return {}
        }
        default:{
            return state
        }
    }
}

export default editReducer
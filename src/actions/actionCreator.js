import axios from "axios";
import swal from 'sweetalert';
////////////////////////////////////
export const stateSetRegister=(formData,props)=>{
    return (dispatch)=>{
        axios.post('http://dct-user-auth.herokuapp.com/users/register',formData)
        .then((Response)=>{
           if(Response.data.hasOwnProperty('errors'))
           {
             dispatch(setRegister('Invalid email Or password or email already Registered!'))
           }
           else
           {
               dispatch(setRegister(""))
               props.history.push('/login')
           }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

const setRegister=(error)=>{
    return{
        type:"REGISTERERROR",
        payload:error
    }
}

export const stateSetLogin=(formData,props)=>{
    return (dispatch)=>{
        axios.post('http://dct-user-auth.herokuapp.com/users/login',formData)
        .then((Response)=>{
            const tokenobj=Response.data
            if(tokenobj.hasOwnProperty('errors'))
            {
                dispatch(setLogin('Invalid Email or Password!'))
            }
            else
            {
                swal("Good job!", "You Have Successfully Logged in!", "success");
                dispatch(setLogin(""))
                dispatch(setToggle(true))
                localStorage.setItem('token',tokenobj.token)
                props.history.push('/')
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

const setLogin=(error)=>{
    return{
        type:"LOGINERROR",
        payload:error
    }
}
export const setToggle=(value)=>{
    return{
        type:"TOGGLE",
        payload:value
    }
}

export const stateSetAccounts=()=>{
    return (dispatch)=>{
        axios.get("http://dct-user-auth.herokuapp.com/users/account",{
            headers:{
                "x-auth":localStorage.getItem('token')
            }
        })
        .then((Response)=>{
            const result=Response.data
            dispatch(setAccounts(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
const setAccounts=(data)=>{
    return{
        type:"ACCOUNTSDATA",
        payload:data
    }
}

export const addNotesItem=(formData)=>{
    return{
        type:"ADDNOTESITEM",
        payload:formData
    }
}
export const deleteItem=(item)=>{
    return{
        type:"DELETEITEM",
        payload:item
    }
}

export const editItem=(item)=>{
    return{
        type:"EDITITEM",
        payload:item
    }
}


export const archivedItem=(item)=>{
    return{
        type:'ARCHIVEDITEM',
        payload:item
    }
}

export const undoItem=(item)=>{
    return{
        type:"UNDOITEM",
        payload:item
    }
}
export const deleteAllTrash=()=>{
    return{
        type:"DELETEALLTRASH"
    }
}
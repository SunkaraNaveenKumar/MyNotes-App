import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateSetLogin } from "./actions/actionCreator";
///////////////////////////////////// Material Components 
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography,Button } from "@material-ui/core";
//////////////////////////////////// Material Styling
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
    loginAlign:{
        display:"flex",
        height:"70vh",
        alignItems:"center",
        justifyContent:"center"
    }
  }));
//////////////////////////////////// React Login Component
const Login=(props)=>{
    
    const classes = useStyles();   
    const loginError=useSelector((state)=>{
        return state.data.loginError
    })
    const dispatch=useDispatch()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [formErrors,setErrors]=useState({})
    const errors={}
    ////////////////////////////
    localStorage.clear()
    ////////////////////////////
    const handleChange=(e)=>{
       
        if(e.target.name==='email')
        {
            setEmail(e.target.value)
        }
        else if(e.target.name==='password')
        {
            setPassword(e.target.value)
        }
    }
    //////////////////////////
    const runErrorCallback=()=>{
        if(email.trim()=="")
        {
            errors.email="plz fill the Email!"
        }
        if(password.trim()=="")
        {
            errors.password="plz fill the Password!"
        }
    }
     ///////////////////////////////
     const handleSubmit=(e)=>{
        e.preventDefault()
        runErrorCallback()
        if(Object.keys(errors).length===0)
        {
            const formData={
                email,
                password
             }
             setErrors({})
             dispatch(stateSetLogin(formData,props))
        }
        else
        {
            setErrors(errors)
        }
    }
    ////////////////////////////////
    return(
        <div className={classes.loginAlign}>
            <div>
              <Typography variant="h3">Login</Typography>
              {loginError && <p style={{color:"red"}}>{loginError}</p> }
           <form className={classes.root} noValidate autoComplete="off">
      <TextField
       id="outlined-basic" 
       name="email"
       label="Email..." 
       variant="outlined" 
       value={email} 
       onChange={handleChange} 
       /> <br />
      {formErrors.email &&  <p style={{color:"red"}}>{formErrors.email}</p>} <br />
      <TextField
       id="outlined-basic" 
       name="password"
       label="password..." 
       variant="outlined" 
       value={password} 
       onChange={handleChange}
       /> <br />
       {formErrors.password &&  <p style={{color:"red"}}>{formErrors.password}</p>} <br />
          </form>
          <Button variant="contained" color="secondary" onClick={handleSubmit}>Login</Button>
        </div>
        </div>
    )
}
export default Login
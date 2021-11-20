import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateSetRegister } from "./actions/actionCreator";
/////////////////////////////
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography,Button } from "@material-ui/core";
//////////////////////////////
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
    registerCenter:{
        display:"flex",
        height:"70vh",
        alignItems:"center",
        justifyContent:"center"
    }
  }));
  //////////////////////////////
const Register=(props)=>{
    const classes = useStyles();  
    const registerError=useSelector((state)=>{
        return state.data.registerError
    })
    const dispatch=useDispatch()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [formErrors,setErrors]=useState({})
    const errors={}
    ////////////////////////////
    const handleChange=(e)=>{
        if(e.target.name==='name')
        {
            setName(e.target.value)
        }
        else if(e.target.name==='email')
        {
            setEmail(e.target.value)
        }
        else if(e.target.name==='password')
        {
            setPassword(e.target.value)
        }
    }
    ////////////////////////////////////
    const runErrorCallback=()=>{
        if(name.trim()=="")
        {
            errors.name="plz fill ur Name!"
        }
        if(email.trim()=="")
        {
            errors.email="plz fill the Email!"
        }
        if(password.trim()=="")
        {
            errors.password="plz fill the Password!"
        }
    }
    /////////////////////////////////////
    const handleSubmit=(e)=>{
        e.preventDefault()
        runErrorCallback()
        if(Object.keys(errors).length===0)
        {
            const formData={
                username:name,
                email:email,
                password:password
            }
            setErrors({})
           dispatch(stateSetRegister(formData,props))
        }
        else
        {
            setErrors(errors)
        }
    }
    /////////////////////////////////   
    return(
    <div className={classes.registerCenter}>
        <div>
        <Typography variant="h3">Register With Us</Typography>
        {registerError && <p style={{color:'red'}}>{registerError}</p> }
        <form className={classes.root} noValidate autoComplete="off">
        <TextField
         id="outlined-basic" 
         name="name"
         label="Enter ur Full Name.." 
         variant="outlined" 
         value={name} 
        onChange={handleChange} 
        /> <br />
         {formErrors.name &&  <p style={{color:"red"}}>{formErrors.name}</p>} <br />
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
          <Button variant="contained" color="secondary" onClick={handleSubmit}>Register</Button>
        </div>
    </div>
    )
}
export default Register
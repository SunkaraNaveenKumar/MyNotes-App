import React from "react";
import { makeStyles } from "@material-ui/core";

//////////////////////////////// Material Styling
const useStyles=makeStyles((theme)=>({
    homemain:{
        backgroundImage:`url("https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`,
        width:'100%',
        height:"87vh",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        backgroundSize:"cover",
        marginTop:"5px"
    }
}))
///////////////////////// React Component
const Home=(props)=>{
    const classes=useStyles()
    return(
        <div className={classes.homemain}>            
        </div>
    )
}

export default Home
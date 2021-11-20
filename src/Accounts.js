import React, { useEffect } from "react"
import {  useDispatch, useSelector } from "react-redux"

////////////////////// Material Components
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { stateSetAccounts } from "./actions/actionCreator";
////////////////////////////////////////////// Material Styling
const useStyles=makeStyles((theme)=>({
root:{
    display:"flex",
    flexDirection:"column",
    marginTop:"20px"
},
root1:{
    display:"flex"
},
root1_2:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    backgroundColor:"aqua",
    borderRadius:"10px",
   height:"20vh"
}
}))
////////////////////////////////////////////// React Component
const Accounts=(props)=>{
    const classes = useStyles();
    const dispatch=useDispatch()
    const accountsData=useSelector((state)=>{
        return state.data.accountsData
    })
    useEffect(()=>{
       dispatch(stateSetAccounts())
    },[dispatch])
    return(
        <div>
            {Object.keys(accountsData).length>0 ? (
                <div>
                    <Grid container className={classes.root}>
                        <Grid item className={classes.root1}>
                        <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <Grid item xs={6} className={classes.root1_2}> 
                        <Typography variant="h4" >UserName-{accountsData.username}</Typography>
                        <Typography variant="h6" >Email-{accountsData.email}</Typography>
                        </Grid>
                        </Grid>
                        
                    </Grid>
                </div>
            ):(
                   <CircularProgress disableShrink />    
            )}
        </div>
    )
}
export default Accounts
import React from "react";
import NavigationLinks from "./NavigationLinks";
////////////////////////////////////// Material Components
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import PhonelinkEraseIcon from '@material-ui/icons/PhonelinkErase';
/////////////////////////////////////
const useStyles = makeStyles((theme) => ({
    root: {
      display:"none",
      [theme.breakpoints.down('sm')]: {
       display:"flex",
       alignItems:"center",
       justifyContent:"center",
       height:"90vh",
       padding:"20px"
      },
    },
    root1:{
        display:"none",
        [theme.breakpoints.up('sm')]: {
            display:"flex",
           },
    }
  }));
////////////////////////////////////
const App=(props)=>{
    const classes=useStyles();
    return(
        <div>
            <Grid container >
                <Grid item xs={12} className={classes.root}>
                <Typography variant="h6" color="secondary" >
                    To View This Website Open In Laptop Screen 
                </Typography>
                <PhonelinkEraseIcon color="primary"/>
                </Grid>
            </Grid>
            <div className={classes.root1}>
                <NavigationLinks />
            </div>
        </div>
    )
}

export  default App
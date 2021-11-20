import React from "react";
import NotesItem from "./NotesItem";
import { useSelector } from "react-redux";
////////////////////////// Material Components
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';

/////////////////////////// styling
const useStyles = makeStyles({
    root: {
        margin:"5px",
      padding:"20px",
      backgroundColor:"grey",
      minHeight:"90vh",
    },
    root1:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        minHeight:"90vh",
    },
    root2:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"aqua"
    }
  });
  ////////////////////////////React Component
const Archived=(props)=>{
    const classes=useStyles()
    const archivedData=useSelector((state)=>{
        return state.archivedData
    })
    return(
        <div>
            <Grid container spacing={3} className={ archivedData.length>0 ? classes.root:classes.root1 } >
                {archivedData.length>0 ?(
                    <>
                    {archivedData.map(ele=>{
                    return <Grid key={ele.id} item xs={4}><NotesItem item={ele}/></Grid>
                    })}
                    </>
                ):(
                   <Grid item xs={8} className={classes.root2}>
                    <Typography variant="h3" color="error">No Archied yet</Typography> <SentimentSatisfiedIcon fontSize='large'/>
                    </Grid>
                   )}
            </Grid>            
        </div>
    )
}
export default Archived
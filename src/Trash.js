import { useDispatch, useSelector } from "react-redux"
import { Button } from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';
import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { deleteAllTrash } from "./actions/actionCreator";
import swal from 'sweetalert'
import NotesItem from "./NotesItem";
/////////////////////////// styling
const useStyles = makeStyles((theme)=>({
    root: {
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
        backgroundColor:theme.palette.text.disabled
    }
  }));
  //////////////////////////// component
const Trash=(props)=>{
    const dispatch=useDispatch()
    const classes=useStyles()
    const trashData=useSelector((state)=>{
        return state.trashData
    })
    const handleDeleteTrash=()=>{
        swal({
            title: "Are you sure?",
            text: "Do u want to delete all the files permanently! ",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                dispatch(deleteAllTrash()) 
            } 
          });  
    }
    return(
        <div>
            <br />
            {trashData.length>0 &&(
            <Button variant="contained"  color="secondary" onClick={handleDeleteTrash}>
            <DeleteIcon />
            Delete All FIles
            </Button>)} <br /> <br />
            <Grid container spacing={3} className={trashData.length>0 ? classes.root:classes.root1} >
                {trashData.length>0 ?(
                    <>
                    {trashData.map(ele=>{
                    return <Grid  key={ele.id} item xs={4}><NotesItem item={ele}/></Grid>
                })}
                    </>
                ):(
                    <Grid item xs={8} className={classes.root2}>
                    <Typography variant="h3" color="error">No deleted File</Typography>
                    </Grid>
                )}
                
            </Grid>            
        </div>
    )
}
export default Trash
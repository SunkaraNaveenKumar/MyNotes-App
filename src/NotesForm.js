import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import React,{useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addNotesItem } from './actions/actionCreator';
import { Grid } from '@material-ui/core';
//////////////////////////////////////////////// Material Styling
const useStyles = makeStyles((theme) => ({
  root1: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));
///////////////////////////////////////NotesForm component
const  NotesForm=(props)=>{
  const editData=useSelector((state)=>{
    return state.editData
  })
    const dispatch=useDispatch()
    const classes=useStyles()
    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    const [id,setId]=useState(uuidv4())
    ////////////////////
    useEffect(()=>{
      if(Object.keys(editData).length>0)
      {
        setTitle(editData.title)
        setBody(editData.body)
        setId(editData.id)
      }
    },[editData])
    /////////////////////
    const handleChange=(e)=>{
        const result=e.target.name 
        const result2=e.target.value 
        if(result==="title")
        {
            setTitle(result2)
        }
        else if(result==="body")
        {
            setBody(result2)
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id:id,
            title:title,
            body:body
        }
        dispatch(addNotesItem(formData))
        setTitle("")
        setBody("")
        setId(uuidv4())
    }
    return(
      <div>
         <Box>
          <Typography variant="h3" color="secondary">{Object.keys(editData).length>0? "EditNote":"Add Note"}</Typography>
           <form className={classes.root1} noValidate autoComplete="off">
         <TextField
          id="standard-basic" 
          name="title"
          label="Title..." 
          value={title}
          onChange={handleChange}
          /> <br />
         <TextField
          id="standard-basic" 
          name='body'
          label="Body..." 
          value={body}
          onChange={handleChange}
          /> <br />
         </form>
         {Object.keys(editData).length>0?(
           <div>
             <Grid container xs={12}>
               <Grid item xs={3}>
               <Button variant="contained" color="secondary" onClick={handleSubmit}>Save</Button>
               </Grid>
               <Grid item xs={3}>
               <Button variant="contained" color="secondary" onClick={()=>{
                setTitle('')
                setBody("")
                setId("")
                dispatch(addNotesItem(editData))
                }} >cancel</Button>
               </Grid>
             </Grid>
           </div>
         ):(
          <Button variant="contained" color="secondary" onClick={handleSubmit}>Add</Button>
         )}
        </Box>
      </div>
    )
}

export default NotesForm
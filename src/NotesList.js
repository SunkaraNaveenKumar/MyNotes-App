import React from 'react'
import NotesItem from './NotesItem'
import Grid from '@material-ui/core/Grid';
const NotesList=(props)=>{
    const {notes}=props
    return(
        <>
         {notes.map(ele=>{
         return <Grid key={ele.id} item xs={4} ><NotesItem item={ele}/></Grid>
        })}
        </>
    )
}

export default NotesList
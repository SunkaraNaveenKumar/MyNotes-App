import React from 'react';
import swal from 'sweetalert'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';
import { archivedItem, deleteItem, editItem, undoItem } from './actions/actionCreator';
import ArchiveIcon from '@material-ui/icons/Archive';
//////////////////////// Material Styling
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    }
  });
///////////////////////  NotesItem Component
const NotesItem=(props)=>{
    const dispatch=useDispatch()
    const {item}=props
    const classes = useStyles();
    const handleDelete=()=>{
      swal({
        title: "Are you sure?",
        text: item.toggleTrash?"This File will be delted Permenantly":"Deleted File Remains in Trash For 30 Days",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(deleteItem(item))
        } 
      });
    }
    const handleArchive=()=>{
      swal({
        title: "Are you sure?",
        text: "do u want to move this file to Archive..",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(archivedItem(item))
        } 
      });
    }
    return(
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" color="primary">
              {item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary"  component="p" fontWeight="bold">
              {item.body}
            </Typography>
          </CardContent>
        <CardActions>
          <IconButton aria-label="delete"  onClick={handleDelete}>
            <DeleteIcon color="secondary"/>
          </IconButton>
        {(item.toggle && !item.toggleTrash) && <button onClick={()=>{dispatch(undoItem(item))}}>Undo</button> }
        {(!item.toggle && !item.toggleTrash) && (
          <>
          <IconButton aria-label="edit" onClick={()=>{dispatch(editItem(item))}}>
          <EditIcon  color="primary"/>
        </IconButton>
        <IconButton aria-label="archive" onClick={handleArchive} >
          <ArchiveIcon />
        </IconButton>
        </>
        )}
        </CardActions>
      </Card>
    )
}

export default NotesItem
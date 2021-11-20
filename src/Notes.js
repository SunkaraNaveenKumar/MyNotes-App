import React,{useState,useEffect} from 'react'
import NotesForm from "./NotesForm"
import NotesList from "./NotesList";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
/////////////////////////////////////////////
import { makeStyles,alpha } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Typography } from "@material-ui/core";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
/////////////////////////////////////// styling
const useStyles = makeStyles((theme) => ({
    root: {
      marginTop:"20px",
      backgroundColor:"grey",
      minHeight:"90vh"
    },
    root1:{
        textAlign:"center",
        padding:"30px"
    },
    search: 
    {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
      flex:{
        display:"flex"
      },
      rootForm:{
        backgroundColor:"aqua",
        height:"90vh",
        borderRadius:"20px"
      }
  }));
  //////////////////////////////////component
const Notes=(props)=>{
    const classes = useStyles();
    const notesData=useSelector((state)=>{
        return state.notesData
    })
    const [notes,setNotes]=useState([])
    const [search,setSearch]=useState("")
    useEffect(()=>{
        if(search==="")
        {
            setNotes(notesData)      
        }
        else
        {
            const result=notesData.filter((ele)=>{
                return ele.title.toLowerCase().includes(search.toLowerCase())
            })
            setNotes(result)
        }
    },[notesData,search])

    const handleSearch=(e)=>{
        setSearch(e.target.value)
    }
    return(
        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Box className={classes.root1}>
          <Grid container spacing={3}>
              {notesData.length>0 ?(
                  <>
                  <SearchBar classes={classes} handleSearch={handleSearch} search={search}/>
                  <NotesList notes={notes}/>
                  </>
              ):(
                  <Grid item xs={12}><Typography variant="h3" color="secondary">No Notes Add ur First Note</Typography> <br />
                <ImportContactsIcon fontSize="large"/>
                   </Grid>
                  
              )}
              </Grid>
          </Box>
        </Grid>
        <Grid item xs={4} className={classes.rootForm}>
          <NotesForm />
        </Grid>
        </Grid>
    </div>
    )
}
export default Notes
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Route,withRouter} from "react-router-dom"
import Accounts from "./Accounts";
import { setToggle } from "./actions/actionCreator";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Notes from "./Notes";
import Help from "./Help";
import Archived from "./Archive";
import Trash from "./Trash";
///////////////////////////// sweet alert 
import swal from 'sweetalert';
////////////////////////////////Material Components
import NoteIcon from '@material-ui/icons/Note';
import DeleteIcon from '@material-ui/icons/Delete';
import ArchiveIcon from '@material-ui/icons/Archive';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import HelpIcon from '@material-ui/icons/Help';
//////////////////////////////////////
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
//////////////////////////////
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
///////////////////////////////////
const NavigationLinks=(props)=>{
  const classes = useStyles()
    const dispatch=useDispatch()
    const toggle=useSelector((state)=>{
        return state.data.toggle
    })
    useEffect(()=>{
        if(localStorage.getItem('token'))
        {
            dispatch(setToggle(true))
        }
    },[dispatch])
    //////////////////////////////////logout
    const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
      const handleLogout=()=>{
           localStorage.clear()
           dispatch(setToggle(false))
           props.history.push('/')
           swal( "You Have Successfully Logged out!", "success");
    }
//////////////////////////////  menuIcon
    const [anchorEl, setAnchorEl] = React.useState(null);
      const handleClickMenu = (event) => {
          setAnchorEl(event.currentTarget);
        };
      const handleCloseMenu = () => {
          setAnchorEl(null);
        };
////////////////////////////
    return(
            <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            {toggle && <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClickMenu}>
            <MenuIcon />
            </IconButton>}
            <Typography variant="h6" className={classes.title}>
            My Notes
            </Typography>
            <Button color="inherit" onClick={()=>{props.history.push('/')}}>Home</Button>
            {!toggle?(
            <>
               <Button color="inherit" onClick={()=>{props.history.push('/register')}}>Register</Button>
               <IconButton aria-label="powerSetting" onClick={()=>{
                props.history.push('/login')
                }}  >
                <PowerSettingsNewIcon fontSize="large" />
               </IconButton>
            </>
          ):(
            <>
              <Button color="inherit" onClick={()=>{props.history.push('/accounts')}}>Account</Button>
                <IconButton aria-label="exittoapp" onClick={()=>{
                  handleClickOpen()
                }}  >
                <ExitToAppIcon fontSize="large" />
               </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>

      <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Logging Out"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           DO u Want To Logout ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={()=>{
              handleClose()
              handleLogout()
            }} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </div>

      <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={()=>{
            props.history.push('/notes')
            handleCloseMenu()
            }}><NoteIcon/>Notes</MenuItem>
        <MenuItem onClick={()=>{
            props.history.push('/archived')
            handleCloseMenu()
            }}><ArchiveIcon color="primary"/>Archived</MenuItem>
        <MenuItem onClick={()=>{
            props.history.push('/trash')
            handleCloseMenu()
            }}><DeleteIcon color="secondary"/>Trash</MenuItem>
        <MenuItem onClick={()=>{
            props.history.push('/help')
            handleCloseMenu()
            }}><HelpIcon />Help And Feedback</MenuItem>
      </Menu>
    </div>


            <Route path="/" component={Home} exact={true}></Route>
            <Route path="/register" component={Register} exact={true}></Route>
            <Route path="/login" component={Login} exact={true}></Route>
            <Route path='/accounts' component={Accounts} exact={true}></Route>
            <Route path="/notes" component={Notes} exact={true}></Route>
            <Route path="/archived" component={Archived} exact={true}></Route>
            <Route path='/trash' component={Trash} exact={true}/>
            <Route path="/help" component={Help} exact={true}></Route>
        </div>
    )
}
export default withRouter(NavigationLinks)
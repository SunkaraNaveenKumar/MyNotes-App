import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from "@material-ui/core";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Badge from '@material-ui/core/Badge';
import { useSelector } from "react-redux";
///////////////////////////////////////////////
const SearchBar=(props)=>{
    const {classes,handleSearch,search}=props
    const notesData=useSelector((state)=>{
      return state.notesData
    })
    return(
        <Grid item xs={12} className={classes.flex}>
        <Grid item xs={4}  className={classes.align}>
          <div className={classes.search}>
          <div className={classes.searchIcon}>
          <SearchIcon />
           </div>
          <InputBase
          placeholder="Search By Title…"
          value={search}
          onChange={handleSearch}
          classes={{
           root: classes.inputRoot,
          input: classes.inputInput,
        }}
          inputProps={{ 'aria-label': 'search' }}
          />
         </div>
        </Grid>
        <Grid item xs={6}>      
        </Grid>
        <Grid item xs={2}>
        <Badge badgeContent={notesData.length} color="primary">
        <ImportContactsIcon fontSize="large"/> 
      </Badge>
        </Grid>
      </Grid>
    )
}

export default SearchBar
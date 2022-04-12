
import { AppBar, Toolbar, Typography, IconButton, Input} from "@material-ui/core";
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import useStyle from "./style";


const NavBar=()=>{
    const classes=useStyle()
    return(
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}><img src="https://cdn5.f-cdn.com/contestentries/48020/8923254/5293384c176a5_thumb900.jpg" alt="log" height="25px" className={classes.image}/>Tech Blog
                </Typography>
                
                <div className={classes.IconButton}>
                    <IconButton component={Link} to="/">
                            <HomeIcon  style={{color:"white", fontSize:"40px"}}/>
                    </IconButton>
                    <IconButton>
                       
                            <ContactsIcon style={{color:"white", fontSize:"40px"}}/>
                        
                    </IconButton>
                    <IconButton>
                
                            <InfoIcon style={{color:"white", fontSize:"40px"}}/>
    
                    </IconButton>
                    <div className={classes.SearchIcon}>
                        <SearchIcon style={{color:"white", fontSize:"40px"}}/>
                        <Input placeholder="search!.." disableUnderline={true}/>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;
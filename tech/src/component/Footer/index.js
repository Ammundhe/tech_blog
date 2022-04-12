
import { Box, BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import useStyle from "./style";

const Footer=()=>{
    const classes=useStyle()
    return(
        <Box>
            <div className={classes.toolbar}/>
            <BottomNavigation showLabels className={classes.footer}>
                <BottomNavigationAction className={classes.bottom}  label="facbook" icon={<FacebookIcon style={{color:"white", fontSize:"40px"}}/>}/>
                <BottomNavigationAction className={classes.bottom}  label="Instagram" icon={<InstagramIcon style={{color:"white", fontSize:"40px"}}/>}/>
                <BottomNavigationAction className={classes.bottom} label="Linkdin" icon={<LinkedInIcon style={{color:"white", fontSize:"40px"}}/>}/>
                <BottomNavigationAction className={classes.bottom}  label="Rss Feed" icon={<RssFeedIcon style={{color:"white", fontSize:"40px"}} />}/>
            </BottomNavigation>
        </Box>
    )
}
export default Footer;
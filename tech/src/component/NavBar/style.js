import { makeStyles, alpha } from "@material-ui/core/styles";

const drawerWidth=0;

export default makeStyles((theme)=>({
    appBar:{
        boxShadow: 'none',
        backgroundColor:'#34568B',
        color:'white',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        }
    },
    title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
      },
      image: {
        marginRight: '10px',
      },
    IconButton:{
        flexGrow:1,
        display:"flex",
        justifyContent:"space-between",
        color:"white",
    },
    SearchIcon:{
      border:"1px solid blue",
      display :"flex",
      alignItems:"center",
      margin:"9px",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
 
}))

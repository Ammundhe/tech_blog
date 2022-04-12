import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    toolbar:theme.mixins.toolbar,
    post:{
        paddingLeft:"10px",
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"column",
    },
    image:{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    commentSection:{
        width:"80%",
        marginTop:"50px",
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"column"
    },
    comment:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        paddingLeft:"20px",
        marginLeft:"10px"
    },
    profile:{
        width:"80%",
        display:"flex",
        alignItems:"center",
        
    },
    form:{
        paddingLeft:"20px"
    },
    body:{
        width:"80%",
        display:"flex",
    }
}))
import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    toolbar:theme.mixins.toolbar,
    footer:{
        height:"10vh",
        backgroundColor:'#34568B',
    },
    bottom:{
        color:"white",
    }
}))
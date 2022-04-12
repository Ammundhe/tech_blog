
import { Grid,Card, CardActions, CardMedia, CardContent, Typography, Button } from "@material-ui/core";
import {Link} from "react-router-dom";
import useStyle from "./style";

const Blogpost=({post, categories})=>{
    const classes=useStyle()
    const blogpost=post.map((item)=>{
        return(
            <Grid item xs={6} key={item.id}>
                <Card>
                    <CardMedia
                        component="img"
                        alt={item.title}
                        height="200"
                        image={item.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                        </Typography>
                        <Typography variant="body2" color="secondary">
                        Category:{categories.map((category)=>{
                            if (category.id===item.id){
                                return(
                                    category.name
                                )
                            }
                        })}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Link to={`/postdetails/${item.id}`} state={{id:item.id}}>
                        <Button size="small">Learn More</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        )
    })
    return(
        <>
            <div className={classes.toolbar}/>
            <Typography variant="h4" color="inherit" align="center">Blog Post</Typography>
            <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 2, md: 3 }}>
                {blogpost}
            </Grid>
        </>
    )
}
export default Blogpost;
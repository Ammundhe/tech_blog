
import { Grid, Button, TextField, InputLabel} from "@mui/material";
import {useForm} from "react-hook-form"


const Comment=({handleComment, id})=>{
    const {register, handleSubmit, reset}=useForm()
    const onSubmit=(data)=>{
        const comment={
            ...data,
            post:id,
        }
        handleComment(comment)
        reset()
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <InputLabel>Name:</InputLabel>
                    <TextField id="standard-basic" label="Enter a Name" variant="standard" required {...register("name")}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputLabel>Email:</InputLabel>
                    <TextField id="standard-basic" label="Enter a Email" variant="standard" required {...register("email")}/>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <InputLabel>Comment:</InputLabel>
                    <TextField id="standard-basic" label="Enter a comment" variant="standard" required {...register("comment")}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputLabel>date:</InputLabel>
                    <TextField id="standard-basic" label="Enter a date" variant="standard" required {...register("date")}/>
                </Grid>
            </Grid>
            <br/>
            <br/>
            <div>
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </div>
        </form>
    )
}
export default Comment;
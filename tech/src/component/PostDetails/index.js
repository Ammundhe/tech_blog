import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Typography, Avatar, Button } from "@material-ui/core";
import axios from "axios";
import Comment from "./Comment";
import useStyle from "./style";

const PostDetails=()=>{
    const classes=useStyle()
    const location=useLocation()
    const {id}=location.state
    const [post, setPost]=useState([])
    const [comments, setComments]=useState([])

    const fetchComment=async()=>{
        const response= await axios.get("http://127.0.0.1:8000/api/blog-comments/")
        setComments(response.data);
    }

    const handleComment=async(data)=>{
        const response=await axios.post("http://127.0.0.1:8000/api/blog-comments/", data)
        setComments([...comments, response.data])
    }

    const fetchpost=async()=>{
        const response= await axios.get(`http://127.0.0.1:8000/api/blog-post/${id}/`)
        setPost(response.data);
    }

    const handleDelete=async(id)=>{
        await axios.delete(`http://127.0.0.1:8000/api/blog-comments/${id}/`)
        const newComment=comments.filter((comment)=>{
            if (comment.id!==id){
                return comment
            }
        })
        setComments(newComment)
    }

    useEffect(()=>{
        fetchpost();
        fetchComment();
    },[])
    const postComment=comments.filter((comment)=>{
        if (comment.post===id){
            return comment
        }
    })
    const {title,description, image, date}=post
    return(
        <>
            <div className={classes.toolbar}/>
            <div className={classes.post} key={id}>
                <Typography variant="h2" align="center" gutterBottom>{title}</Typography>
                <div className={classes.image}>
                    <img src={image} alt={title} style={{height:"300px", widht:"300px"}} />
                </div>
                <Typography variant="subtitle1">{description}</Typography>
                <Typography variant="h6" style={{border:"1px solid black", width:"200px", paddingLeft:"5px"}}>Date:{date}</Typography>
            </div>
            <div className={classes.commentSection}>
                <Typography variant="h4" align="center">Comment Sections</Typography>
                {postComment.map((comment)=>{
                    return(
                        <div className={classes.comment} key={comment.id}>
                            <div className={classes.profile}>
                                <Avatar/>
                                <Typography variant="h5" style={{paddingLeft:"5px"}}>{comment.name}</Typography>
                                <Typography variant="h6" style={{marginLeft:"auto"}}>Date:{comment.date}</Typography>
                            </div>
                            <div className={classes.body}>
                                <Typography variant="subtitle1">{comment.comment}</Typography>
                                <Button variant="contained" color="secondary" style={{marginLeft:"auto"}} onClick={()=>handleDelete(comment.id)}> Delete</Button>
                            </div>
                        </div>
                    )
                })}
                <div className={classes.form}>
                    <Typography variant="h5" align="center">Comment</Typography>
                    <hr/>
                    <Comment handleComment={handleComment} id={id}/>
                </div>
            </div>
            
        </>
    )
}
export default PostDetails;
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Blogpost from "./component/Blogpost";
import PostDetails from "./component/PostDetails"
import axios from "axios";
import "./App.css";

const App=()=>{
    const [posts, setPost]= useState([])
    const [categories, setCategories]=useState([])

    const fetchPosts=async()=>{
        const response= await axios.get("http://127.0.0.1:8000/api/blog-post/")
        setPost(response.data);
    }
    
    const fetchCategories=async()=>{
        const response= await axios.get("http://127.0.0.1:8000/api/blog-category/")
        setCategories(response.data);
    }

    useEffect(()=>{
        fetchPosts();
        fetchCategories();
    },[])

    return(
        <div className="myApp">
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Blogpost post={posts} categories={categories} />}/>
                    <Route path="/postdetails/:id" element={<PostDetails/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}
export default App;
import { useEffect, useState } from "react"
import BlogCard from "../components/BlogCard"
import { BACKEND_URL } from "../config";
import axios from "axios";

function Blogs() {
    const [blogs, setBlogs] = useState(null);

    async function fetchBlogs(){
        try {
            const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
                withCredentials: true
            })

            if(res.status === 200){
                setBlogs(res.data);
            }
        } catch (error) {
            setBlogs(null)
            console.error(error)
        }
    }
    useEffect(()=>{
        fetchBlogs();
    },[])

  return (
    <div className="flex flex-col justify-center mt-10 gap-3">

        {blogs?.map((blog,index)=>{
            return(
            <BlogCard key={index} authorName={blog.author.name} title={blog.title} id={blog.id} content={blog.content}/>
            )
        })}
        

    </div>
  )
}

export default Blogs
import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useParams } from "react-router-dom";
export const Blog = () => {

  const [blog, setBlog] = useState(null);
  const {id} = useParams();
  async function fetchBlog(){
      try {
          const res = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
              withCredentials: true
          })
          console.log(res)

          if(res.status === 200){
              setBlog(res.data);
          }
      } catch (error) {
          setBlog(null)
          console.error(error)
      }
  }
  useEffect(()=>{
      fetchBlog();
  },[])

  return (
    <div>
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">{blog?.title}</div>
            <div className="text-slate-500 pt-2">Post on 2nd December 2023</div>
            <div className="pt-4">{blog?.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-600 text-lg">Author</div>
            <div className="flex w-full">
              <div className="pr-4 flex flex-col justify-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt='ajksdhk'
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div>
                <div className="text-xl font-bold">
                  {blog?.author?.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">
                  Random catch phrase about the author's ability to grab the
                  user's attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

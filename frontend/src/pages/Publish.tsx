import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import toast from "react-hot-toast";

export const Publish = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  async function handleSubmit(){
    try {
        const res = await axios.post(`${BACKEND_URL}/api/v1/blog`,formData,{
            withCredentials: true
        })
        console.log(res)

        if(res.status === 200){
            toast.success("Blog Created")
        }
    } catch (error) {

        console.error(error)
    }

  }
  return (
    <div>
      <div className="flex justify-center w-full pt-8">
        <div className="max-w-screen-lg w-full">
          <input
            type="text"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />

          <div className="mt-2">
            <div className="w-full mb-4">
              <div className="flex items-center justify-between border">
                <div className="my-2 bg-white rounded-b-lg w-full">
                  <label className="sr-only">Publish post</label>
                  <textarea
                    id="editor"
                    rows={8}
                    className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2"
                    placeholder="Write an article..."
                    required
                    name="content"
                    value={formData.content}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-black rounded-lg focus:ring-4 "
            onClick={handleSubmit}
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
};

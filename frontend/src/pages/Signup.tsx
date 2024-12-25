import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,formData, {withCredentials:true});
      if(res.status === 201){
        toast.success("User Created")
        navigate("/signin")
      }
    } catch (error) {
      toast.error("Error in creating user")
    }
    // console.log(formData);
  };

  return (
    <div className="bg-slate-200 h-screen flex justify-center items-center">
      <form
        className="bg-white p-8 w-[600px] h-[450px] rounded-2xl flex flex-col items-center space-y-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-4">Create Account</h1>

        <div className="w-full">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-full">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-full">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="mt-4  text-white p-2 w-full rounded-lg bg-black"
        >
          Create Account
        </button>
        <div>
            <p>Already have an account <span><Link to={'/signin'} className="text-blue-600 underline">Signin!</Link></span></p>
        </div>
      </form>
    </div>
  );
}

export default Signup;

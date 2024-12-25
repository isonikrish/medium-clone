
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import { Toaster } from 'react-hot-toast'
import Blogs from './pages/Blogs'
import AppBar from './components/AppBar'
import {Blog} from './pages/Blog'
import { Publish } from './pages/Publish'

function App() {


  return (
    <>
    <AppBar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path='/signin' element={<Signin />}/>
        <Route path='/blogs' element={<Blogs />}/>
        <Route path='/blogs/:id' element={<Blog />}/>
        <Route path='/write' element={<Publish />}/>
      </Routes>
      <Toaster />
    </>
  )
}

export default App

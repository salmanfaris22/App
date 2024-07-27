import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import LogIn from './Components/LogInPage/LogIn';
import AddBlog from './Components/BLogCrud/AddBlog';
import UpdateBlog from './Components/BLogCrud/UpdateBlog';
import BlogRead from './Components/BLogCrud/BlogRead';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState({
    body: "#EBE9E1",
    text: "#E43D12",
    sub: "#EFB11D"
})
  return (
    <div className="font-thin">
   <Routes>
    <Route path='/' element={<LogIn color={color}/>}/>
    <Route path='/addblog' element={<AddBlog color={color} />}/>
    <Route path='update/:id' element={<UpdateBlog color={color}/>}/>
    <Route path='read/:id' element={<BlogRead color={color}/>}/>
   </Routes>

    </div>
  );
}

export default App;

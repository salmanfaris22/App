import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogInPage/LogIn";
import AddBlog from "./Components/BLogCrud/AddBlog";
import UpdateBlog from "./Components/BLogCrud/UpdateBlog";
import BlogRead from "./Components/BLogCrud/BlogRead";
import { createContext, useRef, useState } from "react";

export const ApiResposce = createContext();


function App() {

  //COLOR THEME
  const [color, setColor] = useState({
    body: "white",
    text: "#1D63FF",
    sub: "#FFCE32",
  });

  const API_URL = "http://localhost:3000/blog/"; //API KEY


  return (
    <div className="font-thin">
 
      {/* Passing API */}
      <ApiResposce.Provider value={API_URL}>

         {/* Rounting */}
        <Routes>      
          <Route
            path="/"
            element={<LogIn color={color} setColor={setColor} />}
          />
          <Route path="/addblog" element={<AddBlog color={color} />} />
          <Route path="update/:id" element={<UpdateBlog color={color} />} />
          <Route path="read/:id" element={<BlogRead color={color} />} />
        </Routes>
      </ApiResposce.Provider>
    </div>
  );
}

export default App;

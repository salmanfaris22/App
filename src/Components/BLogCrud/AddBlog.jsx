import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const AddBlog = ({ color }) => {
  const navigate = useNavigate();

  const [cheack , setCheack] =useState({})
  const [inputBlog, setInputBlog] = useState({
    titile: "",
    body: "",
  });

  const handlechange = (e) => {
    setCheack({
        [e.target.name]: e.target.value,
    })
    setInputBlog({
      ...inputBlog,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  if(Object.keys(cheack).length !== 0){
    axios
    .post("http://localhost:3000/blog", inputBlog)
    .then((res) => navigate("/"))
    .catch((err) => {
      console.log("errro", err);
    })
  }else{
    alert("pleas Add Your Blog")
  }
   
  };

  return (
    <div 
    data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
    style={{background:color.body}} className="h-[100vh]">
     
      <div className="h-[100px]">
      <Link to="/">
          <button
            style={{ background: color.sub, color: color.text }}
            className="p-3 ml-3 mt-3 "
          >
            Back
          </button>
        </Link>
        <Link to="/">
          <button
            style={{ background: color.text, color: color.body }}
            className="p-3 ml-3 mt-3 "
          >
            Home
          </button>
        </Link>
      </div>
      <div className="m-auto w-[80vw]">
        <div className="">Add Your Blog</div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="titile"
                onChange={handlechange}
                placeholder="Add Your Blog Heading"
                style={{ background: color.text, color: color.body }}
                className=" mt-2 shadow shadow-black w-[40vw] h-[50px] pl-4 "
              />
            </div>
            <div>
              <textarea
                cols="
                "
                rows="10"
                type="text"
                name="body"
                onChange={handlechange}
                placeholder="Text Your Blogs"
                style={{ background: color.body, color: color.text }}
                className=" mt-5 shadow-black shadow h-[50vh] w-[40vw] p-5"
              ></textarea>
            </div>
            <div className="flex justify-end w-[40vw]">
              <button
                style={{ background: color.sub, color: color.text }}
                className="p-3 ml-3 mt-3 "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    
    </div>
  );
};

export default AddBlog;

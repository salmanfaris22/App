import axios from "axios";
import React, { createContext, useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageBg from "../../assets/Home-img.png";
import BlogList from "./BlogList";
import Navbar from "../Navbar.jsx/Navbar";
import "aos/dist/aos.css";
import AOS from "aos";
import { ApiResposce } from "../../App";






export const ColorsContext = createContext();

const Home = ({ setColor, color, handlelogOut, username }) => {
  const [blogs, setBlogs] = useState([]);
 const API = useContext(ApiResposce)

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const navigater = useNavigate();
  useEffect(() => {
    axios(API)
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log("erroed"));
  }, [navigater]);

  const handleDelet = (id) => {
    axios.delete(API  + id).then((e) => {
      navigater("/");
    });
  };
  return (
    <div
      className="h-[100vh] w-[100vw] font-thin"
      style={{ background: color.body }}
    >
        {/* Navbar */}
      <Navbar
        setColor={setColor}
        color={color}
        username={username}
        handlelogOut={handlelogOut}
      />

      <div className=" text-center h-[70%]   grid md:grid-cols-2 place-items-center">
        <div
          data-aos="zoom-in-up"
          className="h-[100%] flex justify-center items-center"
        >
            {/* Imag */}
          <img src={ImageBg} alt="" className="h-[70%]" />
        </div>
        <div
          data-aos="zoom-in-up"
          className="h-[100%] flex flex-col justify-center items-center gap-4"
        >
          <div
            className="flex font-bold text-6xl "
            style={{ color: color.text }}
          >
            Exploring Ideas, Sharing Knowledge
          </div>
          <div className="font-mono text-3xl" style={{ color: color.sub }}>
            Insights and stories from our team
          </div>
{/* Creat BLog */}
          <Link
            to="/addblog"
            className="p-3"
            style={{ background: color.text, color: color.body }}
          >
            Creat Bloge
          </Link>
        </div>
      </div>

{/* BLOG LIST */}
      <ColorsContext.Provider value={color}>
        <BlogList
          blogs={blogs}
          handleDelet={handleDelet}
          navigater={navigater}
          color={color}
        />
      </ColorsContext.Provider>
    </div>
  );
};

export default Home;

import React, { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { ApiResposce } from "../../App";





const BlogRead = ({ color }) => {
  const API = useContext(ApiResposce)
  const { id } = useParams();
  const [data, setDat] = useState([]);
  const navGation = useNavigate();
  useEffect(() => {
    axios
      .get(API + id)
      .then((e) => {
        setDat(e.data);
      })
      .catch((e) => {
        console.log("errored when updata");
      });
  }, []);

  const handleDelet = (id) => {
    axios.delete(API + id);
    navGation("/");
  };

  return (
    <div 
    
    className="flex h-[100vh] flex-col" style={{ background: color.body }}>
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

      <div className="flex flex-col w-[90%] h-[70vh] ml-auto mr-auto shadow-sm shadow-black border border-white ">
      <div className="flex justify-end ">
        {/* EDIT and DELETE buttons */}
            <Link to={`/update/${id}`}>
              <button
                style={{ background: color.sub, color: color.text }}
                className="p-3 mr-4 "
              >
                Edit
              </button>
            </Link>

            <button
              style={{ background: color.text, color: color.body }}
              className="p-3 mr-11 "
              onClick={() => {
                handleDelet(id);
                // navigater('/update')
              }}
            >
              Delete
            </button>
          </div>
        <div
          className="h-[100px] flex items-center text-2xl font-bold pl-6 justify-between"
          style={{ color: color.text }}
        >
          {data.titile}
         
        </div>

        <div className="pl-20 overflow-auto"
        style={{color:color.sub}}
        >{data.body}</div>
      </div>
    </div>
  );
};

export default BlogRead;

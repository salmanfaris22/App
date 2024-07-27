import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, handleDelet, navigater, color }) => {
  return (
    <div
      style={{ background: color.body }}
      className="min-h-[100vh] grid grid-flow-row mt-8 md:mt-0 md:grid-cols-4 overflow-hidden"
    >
      {blogs.map((e, i) => {
        return (
          <div
          data-aos="zoom-in-up"
            key={i}
            className="flex flex-col mt-8 w-[90%] m-auto h-[400px] p-7  shadow-sm overflow-hidden"
            style={{ boxShadow: `1px 3px 2px ${color.text}` }}
          >
            <div
              className=" h-[300px] flex flex-col p-1 gap-5 "
              style={{ color: color.text }}
            >
              <div className="font-bold">{e.titile}</div>
              <div className="">{e.body}</div>
            </div>

            <div className="">
              <div className="flex  justify-end">
                <Link to={`/read/${e.id}`} color={color}>
                  <button
                    className="p-2"
                    style={{ background: color.text, color: color.body }}
                  >
                    Read More
                  </button>
                </Link>
              </div>
        
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
